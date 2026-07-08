import { RecurringFrequency } from "@/generated/prisma";

/**
 * 根据循环配置计算下一个截止日期
 * 逻辑：基于「上一次的截止日期」往后推算，而非完成日期
 * 这样无论何时完成，任务都保持在固定的时间节奏上
 */
export function calculateNextDueDate(
  frequency: RecurringFrequency,
  interval: number,
  fromDate: Date,
  opts: {
    weekDays?: number[];      // 0=周日, 1=周一, ..., 6=周六
    monthDate?: number;        // 每月几号 (1-31)
    monthWeekOrdinal?: number; // 第几周 (1=第一周, 2=第二周, ...)
    monthWeekDay?: number;     // 星期几 (0-6)
    yearMonth?: number;        // 每年几月 (1-12)
    yearDate?: number;         // 每月几号 (1-31)
    customDays?: number;       // 自定义天数
  }
): Date {
  const next = new Date(fromDate);

  switch (frequency) {
    case "DAILY": {
      next.setDate(next.getDate() + interval);
      break;
    }

    case "WEEKLY": {
      // 如果指定了 weekDays，找下一个匹配的星期几
      if (opts.weekDays && opts.weekDays.length > 0) {
        const sorted = [...opts.weekDays].sort((a, b) => a - b);
        const currentDay = next.getDay();
        // 找当天之后第一个匹配的星期几
        let found = sorted.find((d) => d > currentDay);
        if (found === undefined) {
          // 本周没有匹配的了，跳到下周第一个
          found = sorted[0];
          next.setDate(next.getDate() + (7 - currentDay + found));
        } else {
          next.setDate(next.getDate() + (found - currentDay));
        }
        // 如果 interval > 1，额外加 (interval-1) 周
        if (interval > 1) {
          next.setDate(next.getDate() + 7 * (interval - 1));
        }
      } else {
        // 没有指定具体星期几，就简单加 interval 周
        next.setDate(next.getDate() + 7 * interval);
      }
      break;
    }

    case "MONTHLY_DATE": {
      // 每月指定日期
      if (opts.monthDate) {
        next.setMonth(next.getMonth() + interval);
        // 设置为指定日期
        const daysInTargetMonth = new Date(
          next.getFullYear(),
          next.getMonth() + 1,
          0
        ).getDate();
        next.setDate(Math.min(opts.monthDate, daysInTargetMonth));
      } else {
        // 没有指定日期，保持当前日期，加 interval 个月
        next.setMonth(next.getMonth() + interval);
      }
      break;
    }

    case "MONTHLY_DAY": {
      // 每月第几周的星期几，例如「第二个周二」
      next.setMonth(next.getMonth() + interval);
      if (opts.monthWeekOrdinal && opts.monthWeekDay !== undefined) {
        const target = getNthWeekdayOfMonth(
          next.getFullYear(),
          next.getMonth(),
          opts.monthWeekDay,
          opts.monthWeekOrdinal
        );
        if (target) {
          next.setTime(target.getTime());
        }
      }
      break;
    }

    case "YEARLY": {
      next.setFullYear(next.getFullYear() + interval);
      if (opts.yearMonth && opts.yearDate) {
        next.setMonth(opts.yearMonth - 1); // JS months are 0-indexed
        const daysInMonth = new Date(
          next.getFullYear(),
          next.getMonth() + 1,
          0
        ).getDate();
        next.setDate(Math.min(opts.yearDate, daysInMonth));
      }
      break;
    }

    case "CUSTOM": {
      if (opts.customDays) {
        next.setDate(next.getDate() + opts.customDays * interval);
      } else {
        next.setDate(next.getDate() + interval);
      }
      break;
    }
  }

  return next;
}

/**
 * 获取某年某月第 N 个星期几的日期
 * @param year 年
 * @param month 月 (0-indexed)
 * @param dayOfWeek 星期几 (0=周日)
 * @param ordinal 第几周 (1=第一周)
 */
function getNthWeekdayOfMonth(
  year: number,
  month: number,
  dayOfWeek: number,
  ordinal: number
): Date | null {
  const first = new Date(year, month, 1);
  const firstDayOfWeek = first.getDay();
  const offset = (dayOfWeek - firstDayOfWeek + 7) % 7;
  const day = 1 + offset + (ordinal - 1) * 7;

  // 检查该日期是否有效（不超过当月天数）
  const lastDay = new Date(year, month + 1, 0).getDate();
  if (day > lastDay) return null;

  return new Date(year, month, day);
}

const WEEKDAY_LABELS = ["日", "一", "二", "三", "四", "五", "六"];

export function formatRecurrence(
  frequency: RecurringFrequency,
  interval: number,
  opts: {
    weekDays?: number[];
    monthDate?: number | null;
    monthWeekOrdinal?: number | null;
    monthWeekDay?: number | null;
    yearMonth?: number | null;
    yearDate?: number | null;
    customDays?: number | null;
  }
): string {
  const intervalLabel = interval > 1 ? `每${interval} ` : "每";

  switch (frequency) {
    case "DAILY":
      return `${intervalLabel}天`;

    case "WEEKLY": {
      if (opts.weekDays && opts.weekDays.length > 0) {
        const days = opts.weekDays
          .sort((a, b) => a - b)
          .map((d) => `周${WEEKDAY_LABELS[d]}`)
          .join("、");
        return `${intervalLabel}${days.length > 1 ? "" : ""}${days}`;
      }
      return `${intervalLabel}周`;
    }

    case "MONTHLY_DATE": {
      if (opts.monthDate) {
        return `${intervalLabel}月${opts.monthDate}号`;
      }
      return `${intervalLabel}月`;
    }

    case "MONTHLY_DAY": {
      if (opts.monthWeekOrdinal && opts.monthWeekDay !== null && opts.monthWeekDay !== undefined) {
        const ordinals = ["", "第一", "第二", "第三", "第四", "第五"];
        const ordinal = ordinals[opts.monthWeekOrdinal] || `第${opts.monthWeekOrdinal}`;
        const day = WEEKDAY_LABELS[opts.monthWeekDay] || "?";
        return `${intervalLabel}月${ordinal}个周${day}`;
      }
      return `${intervalLabel}月`;
    }

    case "YEARLY": {
      if (opts.yearMonth && opts.yearDate) {
        return `${intervalLabel}年${opts.yearMonth}月${opts.yearDate}号`;
      }
      return `${intervalLabel}年`;
    }

    case "CUSTOM": {
      if (opts.customDays) {
        return `每${opts.customDays}天`;
      }
      return "自定义";
    }

    default:
      return "未知";
  }
}
