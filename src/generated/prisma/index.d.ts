
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Category
 * 分类管理 - 支持一级和二级分类
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Tag
 * 标签
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model TaskTag
 * 任务-标签关联表（多对多）
 */
export type TaskTag = $Result.DefaultSelection<Prisma.$TaskTagPayload>
/**
 * Model Task
 * 事项管理 - 核心任务模型
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model RecurringTask
 * 周期任务配置
 */
export type RecurringTask = $Result.DefaultSelection<Prisma.$RecurringTaskPayload>
/**
 * Model Ledger
 * 家庭台账
 */
export type Ledger = $Result.DefaultSelection<Prisma.$LedgerPayload>
/**
 * Model LedgerTask
 * 任务与台账的关联表（多对多）
 */
export type LedgerTask = $Result.DefaultSelection<Prisma.$LedgerTaskPayload>
/**
 * Model Reminder
 * 提醒
 */
export type Reminder = $Result.DefaultSelection<Prisma.$ReminderPayload>
/**
 * Model Setting
 * 系统设置
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TaskStatus: {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  ARCHIVED: 'ARCHIVED',
  CANCELLED: 'CANCELLED'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const RecurringFrequency: {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY_DATE: 'MONTHLY_DATE',
  MONTHLY_DAY: 'MONTHLY_DAY',
  YEARLY: 'YEARLY',
  CUSTOM: 'CUSTOM'
};

export type RecurringFrequency = (typeof RecurringFrequency)[keyof typeof RecurringFrequency]


export const LedgerType: {
  FINANCIAL: 'FINANCIAL',
  LOAN: 'LOAN',
  INSURANCE: 'INSURANCE',
  MEMBERSHIP: 'MEMBERSHIP',
  VEHICLE: 'VEHICLE',
  PROPERTY: 'PROPERTY',
  RECHARGE_CARD: 'RECHARGE_CARD',
  EQUIPMENT: 'EQUIPMENT',
  LOST_ITEM: 'LOST_ITEM',
  HEALTH: 'HEALTH',
  DOMAIN: 'DOMAIN',
  OTHER: 'OTHER'
};

export type LedgerType = (typeof LedgerType)[keyof typeof LedgerType]


export const ReminderTiming: {
  ON_DAY: 'ON_DAY',
  BEFORE_1_DAY: 'BEFORE_1_DAY',
  BEFORE_3_DAYS: 'BEFORE_3_DAYS',
  BEFORE_7_DAYS: 'BEFORE_7_DAYS',
  BEFORE_30_DAYS: 'BEFORE_30_DAYS'
};

export type ReminderTiming = (typeof ReminderTiming)[keyof typeof ReminderTiming]

}

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type RecurringFrequency = $Enums.RecurringFrequency

export const RecurringFrequency: typeof $Enums.RecurringFrequency

export type LedgerType = $Enums.LedgerType

export const LedgerType: typeof $Enums.LedgerType

export type ReminderTiming = $Enums.ReminderTiming

export const ReminderTiming: typeof $Enums.ReminderTiming

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskTag`: Exposes CRUD operations for the **TaskTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskTags
    * const taskTags = await prisma.taskTag.findMany()
    * ```
    */
  get taskTag(): Prisma.TaskTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recurringTask`: Exposes CRUD operations for the **RecurringTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecurringTasks
    * const recurringTasks = await prisma.recurringTask.findMany()
    * ```
    */
  get recurringTask(): Prisma.RecurringTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ledger`: Exposes CRUD operations for the **Ledger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ledgers
    * const ledgers = await prisma.ledger.findMany()
    * ```
    */
  get ledger(): Prisma.LedgerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ledgerTask`: Exposes CRUD operations for the **LedgerTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LedgerTasks
    * const ledgerTasks = await prisma.ledgerTask.findMany()
    * ```
    */
  get ledgerTask(): Prisma.LedgerTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reminder`: Exposes CRUD operations for the **Reminder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reminders
    * const reminders = await prisma.reminder.findMany()
    * ```
    */
  get reminder(): Prisma.ReminderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Category: 'Category',
    Tag: 'Tag',
    TaskTag: 'TaskTag',
    Task: 'Task',
    RecurringTask: 'RecurringTask',
    Ledger: 'Ledger',
    LedgerTask: 'LedgerTask',
    Reminder: 'Reminder',
    Setting: 'Setting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "category" | "tag" | "taskTag" | "task" | "recurringTask" | "ledger" | "ledgerTask" | "reminder" | "setting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      TaskTag: {
        payload: Prisma.$TaskTagPayload<ExtArgs>
        fields: Prisma.TaskTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          findFirst: {
            args: Prisma.TaskTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          findMany: {
            args: Prisma.TaskTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>[]
          }
          create: {
            args: Prisma.TaskTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          createMany: {
            args: Prisma.TaskTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>[]
          }
          delete: {
            args: Prisma.TaskTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          update: {
            args: Prisma.TaskTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          deleteMany: {
            args: Prisma.TaskTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>[]
          }
          upsert: {
            args: Prisma.TaskTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          aggregate: {
            args: Prisma.TaskTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskTag>
          }
          groupBy: {
            args: Prisma.TaskTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskTagCountArgs<ExtArgs>
            result: $Utils.Optional<TaskTagCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      RecurringTask: {
        payload: Prisma.$RecurringTaskPayload<ExtArgs>
        fields: Prisma.RecurringTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecurringTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecurringTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringTaskPayload>
          }
          findFirst: {
            args: Prisma.RecurringTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecurringTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringTaskPayload>
          }
          findMany: {
            args: Prisma.RecurringTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringTaskPayload>[]
          }
          create: {
            args: Prisma.RecurringTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringTaskPayload>
          }
          createMany: {
            args: Prisma.RecurringTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecurringTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringTaskPayload>[]
          }
          delete: {
            args: Prisma.RecurringTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringTaskPayload>
          }
          update: {
            args: Prisma.RecurringTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringTaskPayload>
          }
          deleteMany: {
            args: Prisma.RecurringTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecurringTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecurringTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringTaskPayload>[]
          }
          upsert: {
            args: Prisma.RecurringTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringTaskPayload>
          }
          aggregate: {
            args: Prisma.RecurringTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecurringTask>
          }
          groupBy: {
            args: Prisma.RecurringTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecurringTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecurringTaskCountArgs<ExtArgs>
            result: $Utils.Optional<RecurringTaskCountAggregateOutputType> | number
          }
        }
      }
      Ledger: {
        payload: Prisma.$LedgerPayload<ExtArgs>
        fields: Prisma.LedgerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LedgerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LedgerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>
          }
          findFirst: {
            args: Prisma.LedgerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LedgerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>
          }
          findMany: {
            args: Prisma.LedgerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>[]
          }
          create: {
            args: Prisma.LedgerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>
          }
          createMany: {
            args: Prisma.LedgerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LedgerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>[]
          }
          delete: {
            args: Prisma.LedgerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>
          }
          update: {
            args: Prisma.LedgerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>
          }
          deleteMany: {
            args: Prisma.LedgerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LedgerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LedgerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>[]
          }
          upsert: {
            args: Prisma.LedgerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>
          }
          aggregate: {
            args: Prisma.LedgerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLedger>
          }
          groupBy: {
            args: Prisma.LedgerGroupByArgs<ExtArgs>
            result: $Utils.Optional<LedgerGroupByOutputType>[]
          }
          count: {
            args: Prisma.LedgerCountArgs<ExtArgs>
            result: $Utils.Optional<LedgerCountAggregateOutputType> | number
          }
        }
      }
      LedgerTask: {
        payload: Prisma.$LedgerTaskPayload<ExtArgs>
        fields: Prisma.LedgerTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LedgerTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LedgerTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerTaskPayload>
          }
          findFirst: {
            args: Prisma.LedgerTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LedgerTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerTaskPayload>
          }
          findMany: {
            args: Prisma.LedgerTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerTaskPayload>[]
          }
          create: {
            args: Prisma.LedgerTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerTaskPayload>
          }
          createMany: {
            args: Prisma.LedgerTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LedgerTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerTaskPayload>[]
          }
          delete: {
            args: Prisma.LedgerTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerTaskPayload>
          }
          update: {
            args: Prisma.LedgerTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerTaskPayload>
          }
          deleteMany: {
            args: Prisma.LedgerTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LedgerTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LedgerTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerTaskPayload>[]
          }
          upsert: {
            args: Prisma.LedgerTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerTaskPayload>
          }
          aggregate: {
            args: Prisma.LedgerTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLedgerTask>
          }
          groupBy: {
            args: Prisma.LedgerTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<LedgerTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.LedgerTaskCountArgs<ExtArgs>
            result: $Utils.Optional<LedgerTaskCountAggregateOutputType> | number
          }
        }
      }
      Reminder: {
        payload: Prisma.$ReminderPayload<ExtArgs>
        fields: Prisma.ReminderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReminderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReminderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findFirst: {
            args: Prisma.ReminderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReminderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findMany: {
            args: Prisma.ReminderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          create: {
            args: Prisma.ReminderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          createMany: {
            args: Prisma.ReminderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReminderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          delete: {
            args: Prisma.ReminderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          update: {
            args: Prisma.ReminderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          deleteMany: {
            args: Prisma.ReminderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReminderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReminderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          upsert: {
            args: Prisma.ReminderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          aggregate: {
            args: Prisma.ReminderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReminder>
          }
          groupBy: {
            args: Prisma.ReminderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReminderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReminderCountArgs<ExtArgs>
            result: $Utils.Optional<ReminderCountAggregateOutputType> | number
          }
        }
      }
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    category?: CategoryOmit
    tag?: TagOmit
    taskTag?: TaskTagOmit
    task?: TaskOmit
    recurringTask?: RecurringTaskOmit
    ledger?: LedgerOmit
    ledgerTask?: LedgerTaskOmit
    reminder?: ReminderOmit
    setting?: SettingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    children: number
    tasks: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | CategoryCountOutputTypeCountChildrenArgs
    tasks?: boolean | CategoryCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    taskTags: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskTags?: boolean | TagCountOutputTypeCountTaskTagsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountTaskTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskTagWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    ledgerItems: number
    reminders: number
    taskTags: number
    children: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledgerItems?: boolean | TaskCountOutputTypeCountLedgerItemsArgs
    reminders?: boolean | TaskCountOutputTypeCountRemindersArgs
    taskTags?: boolean | TaskCountOutputTypeCountTaskTagsArgs
    children?: boolean | TaskCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountLedgerItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerTaskWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountTaskTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskTagWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type LedgerCountOutputType
   */

  export type LedgerCountOutputType = {
    tasks: number
  }

  export type LedgerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | LedgerCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * LedgerCountOutputType without action
   */
  export type LedgerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerCountOutputType
     */
    select?: LedgerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LedgerCountOutputType without action
   */
  export type LedgerCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerTaskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    level: number | null
    sortOrder: number | null
  }

  export type CategorySumAggregateOutputType = {
    level: number | null
    sortOrder: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    level: number | null
    topLevel: string | null
    sortOrder: number | null
    collapsed: boolean | null
    color: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
    parentId: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    level: number | null
    topLevel: string | null
    sortOrder: number | null
    collapsed: boolean | null
    color: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
    parentId: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    level: number
    topLevel: number
    sortOrder: number
    collapsed: number
    color: number
    icon: number
    createdAt: number
    updatedAt: number
    parentId: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    level?: true
    sortOrder?: true
  }

  export type CategorySumAggregateInputType = {
    level?: true
    sortOrder?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    level?: true
    topLevel?: true
    sortOrder?: true
    collapsed?: true
    color?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
    parentId?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    level?: true
    topLevel?: true
    sortOrder?: true
    collapsed?: true
    color?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
    parentId?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    level?: true
    topLevel?: true
    sortOrder?: true
    collapsed?: true
    color?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
    parentId?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    level: number
    topLevel: string
    sortOrder: number
    collapsed: boolean
    color: string | null
    icon: string | null
    createdAt: Date
    updatedAt: Date
    parentId: string | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    topLevel?: boolean
    sortOrder?: boolean
    collapsed?: boolean
    color?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
    children?: boolean | Category$childrenArgs<ExtArgs>
    tasks?: boolean | Category$tasksArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    topLevel?: boolean
    sortOrder?: boolean
    collapsed?: boolean
    color?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    topLevel?: boolean
    sortOrder?: boolean
    collapsed?: boolean
    color?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    level?: boolean
    topLevel?: boolean
    sortOrder?: boolean
    collapsed?: boolean
    color?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "level" | "topLevel" | "sortOrder" | "collapsed" | "color" | "icon" | "createdAt" | "updatedAt" | "parentId", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
    children?: boolean | Category$childrenArgs<ExtArgs>
    tasks?: boolean | Category$tasksArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      parent: Prisma.$CategoryPayload<ExtArgs> | null
      children: Prisma.$CategoryPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      level: number
      topLevel: string
      sortOrder: number
      collapsed: boolean
      color: string | null
      icon: string | null
      createdAt: Date
      updatedAt: Date
      parentId: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Category$parentArgs<ExtArgs> = {}>(args?: Subset<T, Category$parentArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Category$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Category$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends Category$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Category$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly level: FieldRef<"Category", 'Int'>
    readonly topLevel: FieldRef<"Category", 'String'>
    readonly sortOrder: FieldRef<"Category", 'Int'>
    readonly collapsed: FieldRef<"Category", 'Boolean'>
    readonly color: FieldRef<"Category", 'String'>
    readonly icon: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
    readonly parentId: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.parent
   */
  export type Category$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Category.children
   */
  export type Category$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category.tasks
   */
  export type Category$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    createdAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    createdAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    color: number
    createdAt: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    createdAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    createdAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    createdAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    color: string
    createdAt: Date
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
    taskTags?: boolean | Tag$taskTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "color" | "createdAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskTags?: boolean | Tag$taskTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      taskTags: Prisma.$TaskTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      color: string
      createdAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    taskTags<T extends Tag$taskTagsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$taskTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly color: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.taskTags
   */
  export type Tag$taskTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    where?: TaskTagWhereInput
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    cursor?: TaskTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskTagScalarFieldEnum | TaskTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model TaskTag
   */

  export type AggregateTaskTag = {
    _count: TaskTagCountAggregateOutputType | null
    _min: TaskTagMinAggregateOutputType | null
    _max: TaskTagMaxAggregateOutputType | null
  }

  export type TaskTagMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    tagId: string | null
    createdAt: Date | null
  }

  export type TaskTagMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    tagId: string | null
    createdAt: Date | null
  }

  export type TaskTagCountAggregateOutputType = {
    id: number
    taskId: number
    tagId: number
    createdAt: number
    _all: number
  }


  export type TaskTagMinAggregateInputType = {
    id?: true
    taskId?: true
    tagId?: true
    createdAt?: true
  }

  export type TaskTagMaxAggregateInputType = {
    id?: true
    taskId?: true
    tagId?: true
    createdAt?: true
  }

  export type TaskTagCountAggregateInputType = {
    id?: true
    taskId?: true
    tagId?: true
    createdAt?: true
    _all?: true
  }

  export type TaskTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskTag to aggregate.
     */
    where?: TaskTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTags to fetch.
     */
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskTags
    **/
    _count?: true | TaskTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskTagMaxAggregateInputType
  }

  export type GetTaskTagAggregateType<T extends TaskTagAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskTag[P]>
      : GetScalarType<T[P], AggregateTaskTag[P]>
  }




  export type TaskTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskTagWhereInput
    orderBy?: TaskTagOrderByWithAggregationInput | TaskTagOrderByWithAggregationInput[]
    by: TaskTagScalarFieldEnum[] | TaskTagScalarFieldEnum
    having?: TaskTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskTagCountAggregateInputType | true
    _min?: TaskTagMinAggregateInputType
    _max?: TaskTagMaxAggregateInputType
  }

  export type TaskTagGroupByOutputType = {
    id: string
    taskId: string
    tagId: string
    createdAt: Date
    _count: TaskTagCountAggregateOutputType | null
    _min: TaskTagMinAggregateOutputType | null
    _max: TaskTagMaxAggregateOutputType | null
  }

  type GetTaskTagGroupByPayload<T extends TaskTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskTagGroupByOutputType[P]>
            : GetScalarType<T[P], TaskTagGroupByOutputType[P]>
        }
      >
    >


  export type TaskTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    tagId?: boolean
    createdAt?: boolean
    tag?: boolean | TagDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskTag"]>

  export type TaskTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    tagId?: boolean
    createdAt?: boolean
    tag?: boolean | TagDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskTag"]>

  export type TaskTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    tagId?: boolean
    createdAt?: boolean
    tag?: boolean | TagDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskTag"]>

  export type TaskTagSelectScalar = {
    id?: boolean
    taskId?: boolean
    tagId?: boolean
    createdAt?: boolean
  }

  export type TaskTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "tagId" | "createdAt", ExtArgs["result"]["taskTag"]>
  export type TaskTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | TagDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TaskTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | TagDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TaskTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | TagDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $TaskTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskTag"
    objects: {
      tag: Prisma.$TagPayload<ExtArgs>
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      tagId: string
      createdAt: Date
    }, ExtArgs["result"]["taskTag"]>
    composites: {}
  }

  type TaskTagGetPayload<S extends boolean | null | undefined | TaskTagDefaultArgs> = $Result.GetResult<Prisma.$TaskTagPayload, S>

  type TaskTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskTagCountAggregateInputType | true
    }

  export interface TaskTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskTag'], meta: { name: 'TaskTag' } }
    /**
     * Find zero or one TaskTag that matches the filter.
     * @param {TaskTagFindUniqueArgs} args - Arguments to find a TaskTag
     * @example
     * // Get one TaskTag
     * const taskTag = await prisma.taskTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskTagFindUniqueArgs>(args: SelectSubset<T, TaskTagFindUniqueArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskTagFindUniqueOrThrowArgs} args - Arguments to find a TaskTag
     * @example
     * // Get one TaskTag
     * const taskTag = await prisma.taskTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskTagFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagFindFirstArgs} args - Arguments to find a TaskTag
     * @example
     * // Get one TaskTag
     * const taskTag = await prisma.taskTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskTagFindFirstArgs>(args?: SelectSubset<T, TaskTagFindFirstArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagFindFirstOrThrowArgs} args - Arguments to find a TaskTag
     * @example
     * // Get one TaskTag
     * const taskTag = await prisma.taskTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskTagFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskTags
     * const taskTags = await prisma.taskTag.findMany()
     * 
     * // Get first 10 TaskTags
     * const taskTags = await prisma.taskTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskTagWithIdOnly = await prisma.taskTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskTagFindManyArgs>(args?: SelectSubset<T, TaskTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskTag.
     * @param {TaskTagCreateArgs} args - Arguments to create a TaskTag.
     * @example
     * // Create one TaskTag
     * const TaskTag = await prisma.taskTag.create({
     *   data: {
     *     // ... data to create a TaskTag
     *   }
     * })
     * 
     */
    create<T extends TaskTagCreateArgs>(args: SelectSubset<T, TaskTagCreateArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskTags.
     * @param {TaskTagCreateManyArgs} args - Arguments to create many TaskTags.
     * @example
     * // Create many TaskTags
     * const taskTag = await prisma.taskTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskTagCreateManyArgs>(args?: SelectSubset<T, TaskTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskTags and returns the data saved in the database.
     * @param {TaskTagCreateManyAndReturnArgs} args - Arguments to create many TaskTags.
     * @example
     * // Create many TaskTags
     * const taskTag = await prisma.taskTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskTags and only return the `id`
     * const taskTagWithIdOnly = await prisma.taskTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskTagCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskTag.
     * @param {TaskTagDeleteArgs} args - Arguments to delete one TaskTag.
     * @example
     * // Delete one TaskTag
     * const TaskTag = await prisma.taskTag.delete({
     *   where: {
     *     // ... filter to delete one TaskTag
     *   }
     * })
     * 
     */
    delete<T extends TaskTagDeleteArgs>(args: SelectSubset<T, TaskTagDeleteArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskTag.
     * @param {TaskTagUpdateArgs} args - Arguments to update one TaskTag.
     * @example
     * // Update one TaskTag
     * const taskTag = await prisma.taskTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskTagUpdateArgs>(args: SelectSubset<T, TaskTagUpdateArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskTags.
     * @param {TaskTagDeleteManyArgs} args - Arguments to filter TaskTags to delete.
     * @example
     * // Delete a few TaskTags
     * const { count } = await prisma.taskTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskTagDeleteManyArgs>(args?: SelectSubset<T, TaskTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskTags
     * const taskTag = await prisma.taskTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskTagUpdateManyArgs>(args: SelectSubset<T, TaskTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskTags and returns the data updated in the database.
     * @param {TaskTagUpdateManyAndReturnArgs} args - Arguments to update many TaskTags.
     * @example
     * // Update many TaskTags
     * const taskTag = await prisma.taskTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskTags and only return the `id`
     * const taskTagWithIdOnly = await prisma.taskTag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskTagUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskTag.
     * @param {TaskTagUpsertArgs} args - Arguments to update or create a TaskTag.
     * @example
     * // Update or create a TaskTag
     * const taskTag = await prisma.taskTag.upsert({
     *   create: {
     *     // ... data to create a TaskTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskTag we want to update
     *   }
     * })
     */
    upsert<T extends TaskTagUpsertArgs>(args: SelectSubset<T, TaskTagUpsertArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagCountArgs} args - Arguments to filter TaskTags to count.
     * @example
     * // Count the number of TaskTags
     * const count = await prisma.taskTag.count({
     *   where: {
     *     // ... the filter for the TaskTags we want to count
     *   }
     * })
    **/
    count<T extends TaskTagCountArgs>(
      args?: Subset<T, TaskTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskTagAggregateArgs>(args: Subset<T, TaskTagAggregateArgs>): Prisma.PrismaPromise<GetTaskTagAggregateType<T>>

    /**
     * Group by TaskTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskTagGroupByArgs['orderBy'] }
        : { orderBy?: TaskTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskTag model
   */
  readonly fields: TaskTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskTag model
   */
  interface TaskTagFieldRefs {
    readonly id: FieldRef<"TaskTag", 'String'>
    readonly taskId: FieldRef<"TaskTag", 'String'>
    readonly tagId: FieldRef<"TaskTag", 'String'>
    readonly createdAt: FieldRef<"TaskTag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskTag findUnique
   */
  export type TaskTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter, which TaskTag to fetch.
     */
    where: TaskTagWhereUniqueInput
  }

  /**
   * TaskTag findUniqueOrThrow
   */
  export type TaskTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter, which TaskTag to fetch.
     */
    where: TaskTagWhereUniqueInput
  }

  /**
   * TaskTag findFirst
   */
  export type TaskTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter, which TaskTag to fetch.
     */
    where?: TaskTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTags to fetch.
     */
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskTags.
     */
    cursor?: TaskTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskTags.
     */
    distinct?: TaskTagScalarFieldEnum | TaskTagScalarFieldEnum[]
  }

  /**
   * TaskTag findFirstOrThrow
   */
  export type TaskTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter, which TaskTag to fetch.
     */
    where?: TaskTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTags to fetch.
     */
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskTags.
     */
    cursor?: TaskTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskTags.
     */
    distinct?: TaskTagScalarFieldEnum | TaskTagScalarFieldEnum[]
  }

  /**
   * TaskTag findMany
   */
  export type TaskTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter, which TaskTags to fetch.
     */
    where?: TaskTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTags to fetch.
     */
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskTags.
     */
    cursor?: TaskTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTags.
     */
    skip?: number
    distinct?: TaskTagScalarFieldEnum | TaskTagScalarFieldEnum[]
  }

  /**
   * TaskTag create
   */
  export type TaskTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskTag.
     */
    data: XOR<TaskTagCreateInput, TaskTagUncheckedCreateInput>
  }

  /**
   * TaskTag createMany
   */
  export type TaskTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskTags.
     */
    data: TaskTagCreateManyInput | TaskTagCreateManyInput[]
  }

  /**
   * TaskTag createManyAndReturn
   */
  export type TaskTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * The data used to create many TaskTags.
     */
    data: TaskTagCreateManyInput | TaskTagCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskTag update
   */
  export type TaskTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskTag.
     */
    data: XOR<TaskTagUpdateInput, TaskTagUncheckedUpdateInput>
    /**
     * Choose, which TaskTag to update.
     */
    where: TaskTagWhereUniqueInput
  }

  /**
   * TaskTag updateMany
   */
  export type TaskTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskTags.
     */
    data: XOR<TaskTagUpdateManyMutationInput, TaskTagUncheckedUpdateManyInput>
    /**
     * Filter which TaskTags to update
     */
    where?: TaskTagWhereInput
    /**
     * Limit how many TaskTags to update.
     */
    limit?: number
  }

  /**
   * TaskTag updateManyAndReturn
   */
  export type TaskTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * The data used to update TaskTags.
     */
    data: XOR<TaskTagUpdateManyMutationInput, TaskTagUncheckedUpdateManyInput>
    /**
     * Filter which TaskTags to update
     */
    where?: TaskTagWhereInput
    /**
     * Limit how many TaskTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskTag upsert
   */
  export type TaskTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskTag to update in case it exists.
     */
    where: TaskTagWhereUniqueInput
    /**
     * In case the TaskTag found by the `where` argument doesn't exist, create a new TaskTag with this data.
     */
    create: XOR<TaskTagCreateInput, TaskTagUncheckedCreateInput>
    /**
     * In case the TaskTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskTagUpdateInput, TaskTagUncheckedUpdateInput>
  }

  /**
   * TaskTag delete
   */
  export type TaskTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter which TaskTag to delete.
     */
    where: TaskTagWhereUniqueInput
  }

  /**
   * TaskTag deleteMany
   */
  export type TaskTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskTags to delete
     */
    where?: TaskTagWhereInput
    /**
     * Limit how many TaskTags to delete.
     */
    limit?: number
  }

  /**
   * TaskTag without action
   */
  export type TaskTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type TaskSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    categoryId: string | null
    parentId: string | null
    startDate: Date | null
    dueDate: Date | null
    completedAt: Date | null
    npc: string | null
    notes: string | null
    towerLink: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    categoryId: string | null
    parentId: string | null
    startDate: Date | null
    dueDate: Date | null
    completedAt: Date | null
    npc: string | null
    notes: string | null
    towerLink: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    categoryId: number
    parentId: number
    startDate: number
    dueDate: number
    completedAt: number
    npc: number
    notes: number
    towerLink: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    sortOrder?: true
  }

  export type TaskSumAggregateInputType = {
    sortOrder?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    categoryId?: true
    parentId?: true
    startDate?: true
    dueDate?: true
    completedAt?: true
    npc?: true
    notes?: true
    towerLink?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    categoryId?: true
    parentId?: true
    startDate?: true
    dueDate?: true
    completedAt?: true
    npc?: true
    notes?: true
    towerLink?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    categoryId?: true
    parentId?: true
    startDate?: true
    dueDate?: true
    completedAt?: true
    npc?: true
    notes?: true
    towerLink?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string | null
    status: $Enums.TaskStatus
    categoryId: string | null
    parentId: string | null
    startDate: Date | null
    dueDate: Date | null
    completedAt: Date | null
    npc: string | null
    notes: string | null
    towerLink: string | null
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    categoryId?: boolean
    parentId?: boolean
    startDate?: boolean
    dueDate?: boolean
    completedAt?: boolean
    npc?: boolean
    notes?: boolean
    towerLink?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ledgerItems?: boolean | Task$ledgerItemsArgs<ExtArgs>
    recurringTask?: boolean | Task$recurringTaskArgs<ExtArgs>
    reminders?: boolean | Task$remindersArgs<ExtArgs>
    taskTags?: boolean | Task$taskTagsArgs<ExtArgs>
    parent?: boolean | Task$parentArgs<ExtArgs>
    children?: boolean | Task$childrenArgs<ExtArgs>
    category?: boolean | Task$categoryArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    categoryId?: boolean
    parentId?: boolean
    startDate?: boolean
    dueDate?: boolean
    completedAt?: boolean
    npc?: boolean
    notes?: boolean
    towerLink?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Task$parentArgs<ExtArgs>
    category?: boolean | Task$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    categoryId?: boolean
    parentId?: boolean
    startDate?: boolean
    dueDate?: boolean
    completedAt?: boolean
    npc?: boolean
    notes?: boolean
    towerLink?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Task$parentArgs<ExtArgs>
    category?: boolean | Task$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    categoryId?: boolean
    parentId?: boolean
    startDate?: boolean
    dueDate?: boolean
    completedAt?: boolean
    npc?: boolean
    notes?: boolean
    towerLink?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "categoryId" | "parentId" | "startDate" | "dueDate" | "completedAt" | "npc" | "notes" | "towerLink" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledgerItems?: boolean | Task$ledgerItemsArgs<ExtArgs>
    recurringTask?: boolean | Task$recurringTaskArgs<ExtArgs>
    reminders?: boolean | Task$remindersArgs<ExtArgs>
    taskTags?: boolean | Task$taskTagsArgs<ExtArgs>
    parent?: boolean | Task$parentArgs<ExtArgs>
    children?: boolean | Task$childrenArgs<ExtArgs>
    category?: boolean | Task$categoryArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Task$parentArgs<ExtArgs>
    category?: boolean | Task$categoryArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Task$parentArgs<ExtArgs>
    category?: boolean | Task$categoryArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      ledgerItems: Prisma.$LedgerTaskPayload<ExtArgs>[]
      recurringTask: Prisma.$RecurringTaskPayload<ExtArgs> | null
      reminders: Prisma.$ReminderPayload<ExtArgs>[]
      taskTags: Prisma.$TaskTagPayload<ExtArgs>[]
      parent: Prisma.$TaskPayload<ExtArgs> | null
      children: Prisma.$TaskPayload<ExtArgs>[]
      category: Prisma.$CategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      status: $Enums.TaskStatus
      categoryId: string | null
      parentId: string | null
      startDate: Date | null
      dueDate: Date | null
      completedAt: Date | null
      npc: string | null
      notes: string | null
      towerLink: string | null
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ledgerItems<T extends Task$ledgerItemsArgs<ExtArgs> = {}>(args?: Subset<T, Task$ledgerItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recurringTask<T extends Task$recurringTaskArgs<ExtArgs> = {}>(args?: Subset<T, Task$recurringTaskArgs<ExtArgs>>): Prisma__RecurringTaskClient<$Result.GetResult<Prisma.$RecurringTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reminders<T extends Task$remindersArgs<ExtArgs> = {}>(args?: Subset<T, Task$remindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taskTags<T extends Task$taskTagsArgs<ExtArgs> = {}>(args?: Subset<T, Task$taskTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parent<T extends Task$parentArgs<ExtArgs> = {}>(args?: Subset<T, Task$parentArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Task$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Task$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category<T extends Task$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Task$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly categoryId: FieldRef<"Task", 'String'>
    readonly parentId: FieldRef<"Task", 'String'>
    readonly startDate: FieldRef<"Task", 'DateTime'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly completedAt: FieldRef<"Task", 'DateTime'>
    readonly npc: FieldRef<"Task", 'String'>
    readonly notes: FieldRef<"Task", 'String'>
    readonly towerLink: FieldRef<"Task", 'String'>
    readonly sortOrder: FieldRef<"Task", 'Int'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.ledgerItems
   */
  export type Task$ledgerItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerTask
     */
    select?: LedgerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerTask
     */
    omit?: LedgerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerTaskInclude<ExtArgs> | null
    where?: LedgerTaskWhereInput
    orderBy?: LedgerTaskOrderByWithRelationInput | LedgerTaskOrderByWithRelationInput[]
    cursor?: LedgerTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LedgerTaskScalarFieldEnum | LedgerTaskScalarFieldEnum[]
  }

  /**
   * Task.recurringTask
   */
  export type Task$recurringTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTask
     */
    select?: RecurringTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTask
     */
    omit?: RecurringTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTaskInclude<ExtArgs> | null
    where?: RecurringTaskWhereInput
  }

  /**
   * Task.reminders
   */
  export type Task$remindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    cursor?: ReminderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Task.taskTags
   */
  export type Task$taskTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    where?: TaskTagWhereInput
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    cursor?: TaskTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskTagScalarFieldEnum | TaskTagScalarFieldEnum[]
  }

  /**
   * Task.parent
   */
  export type Task$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
  }

  /**
   * Task.children
   */
  export type Task$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task.category
   */
  export type Task$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model RecurringTask
   */

  export type AggregateRecurringTask = {
    _count: RecurringTaskCountAggregateOutputType | null
    _avg: RecurringTaskAvgAggregateOutputType | null
    _sum: RecurringTaskSumAggregateOutputType | null
    _min: RecurringTaskMinAggregateOutputType | null
    _max: RecurringTaskMaxAggregateOutputType | null
  }

  export type RecurringTaskAvgAggregateOutputType = {
    interval: number | null
    monthDate: number | null
    monthWeekOrdinal: number | null
    monthWeekDay: number | null
    yearMonth: number | null
    yearDate: number | null
    customDays: number | null
  }

  export type RecurringTaskSumAggregateOutputType = {
    interval: number | null
    monthDate: number | null
    monthWeekOrdinal: number | null
    monthWeekDay: number | null
    yearMonth: number | null
    yearDate: number | null
    customDays: number | null
  }

  export type RecurringTaskMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    frequency: $Enums.RecurringFrequency | null
    interval: number | null
    weekDays: string | null
    monthDate: number | null
    monthWeekOrdinal: number | null
    monthWeekDay: number | null
    yearMonth: number | null
    yearDate: number | null
    customDays: number | null
    nextDueDate: Date | null
    endDate: Date | null
    lastCompletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecurringTaskMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    frequency: $Enums.RecurringFrequency | null
    interval: number | null
    weekDays: string | null
    monthDate: number | null
    monthWeekOrdinal: number | null
    monthWeekDay: number | null
    yearMonth: number | null
    yearDate: number | null
    customDays: number | null
    nextDueDate: Date | null
    endDate: Date | null
    lastCompletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecurringTaskCountAggregateOutputType = {
    id: number
    taskId: number
    frequency: number
    interval: number
    weekDays: number
    monthDate: number
    monthWeekOrdinal: number
    monthWeekDay: number
    yearMonth: number
    yearDate: number
    customDays: number
    nextDueDate: number
    endDate: number
    lastCompletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RecurringTaskAvgAggregateInputType = {
    interval?: true
    monthDate?: true
    monthWeekOrdinal?: true
    monthWeekDay?: true
    yearMonth?: true
    yearDate?: true
    customDays?: true
  }

  export type RecurringTaskSumAggregateInputType = {
    interval?: true
    monthDate?: true
    monthWeekOrdinal?: true
    monthWeekDay?: true
    yearMonth?: true
    yearDate?: true
    customDays?: true
  }

  export type RecurringTaskMinAggregateInputType = {
    id?: true
    taskId?: true
    frequency?: true
    interval?: true
    weekDays?: true
    monthDate?: true
    monthWeekOrdinal?: true
    monthWeekDay?: true
    yearMonth?: true
    yearDate?: true
    customDays?: true
    nextDueDate?: true
    endDate?: true
    lastCompletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecurringTaskMaxAggregateInputType = {
    id?: true
    taskId?: true
    frequency?: true
    interval?: true
    weekDays?: true
    monthDate?: true
    monthWeekOrdinal?: true
    monthWeekDay?: true
    yearMonth?: true
    yearDate?: true
    customDays?: true
    nextDueDate?: true
    endDate?: true
    lastCompletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecurringTaskCountAggregateInputType = {
    id?: true
    taskId?: true
    frequency?: true
    interval?: true
    weekDays?: true
    monthDate?: true
    monthWeekOrdinal?: true
    monthWeekDay?: true
    yearMonth?: true
    yearDate?: true
    customDays?: true
    nextDueDate?: true
    endDate?: true
    lastCompletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecurringTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurringTask to aggregate.
     */
    where?: RecurringTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringTasks to fetch.
     */
    orderBy?: RecurringTaskOrderByWithRelationInput | RecurringTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecurringTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecurringTasks
    **/
    _count?: true | RecurringTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecurringTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecurringTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecurringTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecurringTaskMaxAggregateInputType
  }

  export type GetRecurringTaskAggregateType<T extends RecurringTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateRecurringTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecurringTask[P]>
      : GetScalarType<T[P], AggregateRecurringTask[P]>
  }




  export type RecurringTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringTaskWhereInput
    orderBy?: RecurringTaskOrderByWithAggregationInput | RecurringTaskOrderByWithAggregationInput[]
    by: RecurringTaskScalarFieldEnum[] | RecurringTaskScalarFieldEnum
    having?: RecurringTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecurringTaskCountAggregateInputType | true
    _avg?: RecurringTaskAvgAggregateInputType
    _sum?: RecurringTaskSumAggregateInputType
    _min?: RecurringTaskMinAggregateInputType
    _max?: RecurringTaskMaxAggregateInputType
  }

  export type RecurringTaskGroupByOutputType = {
    id: string
    taskId: string
    frequency: $Enums.RecurringFrequency
    interval: number
    weekDays: string | null
    monthDate: number | null
    monthWeekOrdinal: number | null
    monthWeekDay: number | null
    yearMonth: number | null
    yearDate: number | null
    customDays: number | null
    nextDueDate: Date | null
    endDate: Date | null
    lastCompletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: RecurringTaskCountAggregateOutputType | null
    _avg: RecurringTaskAvgAggregateOutputType | null
    _sum: RecurringTaskSumAggregateOutputType | null
    _min: RecurringTaskMinAggregateOutputType | null
    _max: RecurringTaskMaxAggregateOutputType | null
  }

  type GetRecurringTaskGroupByPayload<T extends RecurringTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecurringTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecurringTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecurringTaskGroupByOutputType[P]>
            : GetScalarType<T[P], RecurringTaskGroupByOutputType[P]>
        }
      >
    >


  export type RecurringTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    frequency?: boolean
    interval?: boolean
    weekDays?: boolean
    monthDate?: boolean
    monthWeekOrdinal?: boolean
    monthWeekDay?: boolean
    yearMonth?: boolean
    yearDate?: boolean
    customDays?: boolean
    nextDueDate?: boolean
    endDate?: boolean
    lastCompletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurringTask"]>

  export type RecurringTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    frequency?: boolean
    interval?: boolean
    weekDays?: boolean
    monthDate?: boolean
    monthWeekOrdinal?: boolean
    monthWeekDay?: boolean
    yearMonth?: boolean
    yearDate?: boolean
    customDays?: boolean
    nextDueDate?: boolean
    endDate?: boolean
    lastCompletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurringTask"]>

  export type RecurringTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    frequency?: boolean
    interval?: boolean
    weekDays?: boolean
    monthDate?: boolean
    monthWeekOrdinal?: boolean
    monthWeekDay?: boolean
    yearMonth?: boolean
    yearDate?: boolean
    customDays?: boolean
    nextDueDate?: boolean
    endDate?: boolean
    lastCompletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurringTask"]>

  export type RecurringTaskSelectScalar = {
    id?: boolean
    taskId?: boolean
    frequency?: boolean
    interval?: boolean
    weekDays?: boolean
    monthDate?: boolean
    monthWeekOrdinal?: boolean
    monthWeekDay?: boolean
    yearMonth?: boolean
    yearDate?: boolean
    customDays?: boolean
    nextDueDate?: boolean
    endDate?: boolean
    lastCompletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RecurringTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "frequency" | "interval" | "weekDays" | "monthDate" | "monthWeekOrdinal" | "monthWeekDay" | "yearMonth" | "yearDate" | "customDays" | "nextDueDate" | "endDate" | "lastCompletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["recurringTask"]>
  export type RecurringTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type RecurringTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type RecurringTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $RecurringTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecurringTask"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      frequency: $Enums.RecurringFrequency
      interval: number
      weekDays: string | null
      monthDate: number | null
      monthWeekOrdinal: number | null
      monthWeekDay: number | null
      yearMonth: number | null
      yearDate: number | null
      customDays: number | null
      nextDueDate: Date | null
      endDate: Date | null
      lastCompletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["recurringTask"]>
    composites: {}
  }

  type RecurringTaskGetPayload<S extends boolean | null | undefined | RecurringTaskDefaultArgs> = $Result.GetResult<Prisma.$RecurringTaskPayload, S>

  type RecurringTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecurringTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecurringTaskCountAggregateInputType | true
    }

  export interface RecurringTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecurringTask'], meta: { name: 'RecurringTask' } }
    /**
     * Find zero or one RecurringTask that matches the filter.
     * @param {RecurringTaskFindUniqueArgs} args - Arguments to find a RecurringTask
     * @example
     * // Get one RecurringTask
     * const recurringTask = await prisma.recurringTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecurringTaskFindUniqueArgs>(args: SelectSubset<T, RecurringTaskFindUniqueArgs<ExtArgs>>): Prisma__RecurringTaskClient<$Result.GetResult<Prisma.$RecurringTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecurringTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecurringTaskFindUniqueOrThrowArgs} args - Arguments to find a RecurringTask
     * @example
     * // Get one RecurringTask
     * const recurringTask = await prisma.recurringTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecurringTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, RecurringTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecurringTaskClient<$Result.GetResult<Prisma.$RecurringTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurringTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringTaskFindFirstArgs} args - Arguments to find a RecurringTask
     * @example
     * // Get one RecurringTask
     * const recurringTask = await prisma.recurringTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecurringTaskFindFirstArgs>(args?: SelectSubset<T, RecurringTaskFindFirstArgs<ExtArgs>>): Prisma__RecurringTaskClient<$Result.GetResult<Prisma.$RecurringTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurringTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringTaskFindFirstOrThrowArgs} args - Arguments to find a RecurringTask
     * @example
     * // Get one RecurringTask
     * const recurringTask = await prisma.recurringTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecurringTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, RecurringTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecurringTaskClient<$Result.GetResult<Prisma.$RecurringTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecurringTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecurringTasks
     * const recurringTasks = await prisma.recurringTask.findMany()
     * 
     * // Get first 10 RecurringTasks
     * const recurringTasks = await prisma.recurringTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recurringTaskWithIdOnly = await prisma.recurringTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecurringTaskFindManyArgs>(args?: SelectSubset<T, RecurringTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecurringTask.
     * @param {RecurringTaskCreateArgs} args - Arguments to create a RecurringTask.
     * @example
     * // Create one RecurringTask
     * const RecurringTask = await prisma.recurringTask.create({
     *   data: {
     *     // ... data to create a RecurringTask
     *   }
     * })
     * 
     */
    create<T extends RecurringTaskCreateArgs>(args: SelectSubset<T, RecurringTaskCreateArgs<ExtArgs>>): Prisma__RecurringTaskClient<$Result.GetResult<Prisma.$RecurringTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecurringTasks.
     * @param {RecurringTaskCreateManyArgs} args - Arguments to create many RecurringTasks.
     * @example
     * // Create many RecurringTasks
     * const recurringTask = await prisma.recurringTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecurringTaskCreateManyArgs>(args?: SelectSubset<T, RecurringTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecurringTasks and returns the data saved in the database.
     * @param {RecurringTaskCreateManyAndReturnArgs} args - Arguments to create many RecurringTasks.
     * @example
     * // Create many RecurringTasks
     * const recurringTask = await prisma.recurringTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecurringTasks and only return the `id`
     * const recurringTaskWithIdOnly = await prisma.recurringTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecurringTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, RecurringTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecurringTask.
     * @param {RecurringTaskDeleteArgs} args - Arguments to delete one RecurringTask.
     * @example
     * // Delete one RecurringTask
     * const RecurringTask = await prisma.recurringTask.delete({
     *   where: {
     *     // ... filter to delete one RecurringTask
     *   }
     * })
     * 
     */
    delete<T extends RecurringTaskDeleteArgs>(args: SelectSubset<T, RecurringTaskDeleteArgs<ExtArgs>>): Prisma__RecurringTaskClient<$Result.GetResult<Prisma.$RecurringTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecurringTask.
     * @param {RecurringTaskUpdateArgs} args - Arguments to update one RecurringTask.
     * @example
     * // Update one RecurringTask
     * const recurringTask = await prisma.recurringTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecurringTaskUpdateArgs>(args: SelectSubset<T, RecurringTaskUpdateArgs<ExtArgs>>): Prisma__RecurringTaskClient<$Result.GetResult<Prisma.$RecurringTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecurringTasks.
     * @param {RecurringTaskDeleteManyArgs} args - Arguments to filter RecurringTasks to delete.
     * @example
     * // Delete a few RecurringTasks
     * const { count } = await prisma.recurringTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecurringTaskDeleteManyArgs>(args?: SelectSubset<T, RecurringTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurringTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecurringTasks
     * const recurringTask = await prisma.recurringTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecurringTaskUpdateManyArgs>(args: SelectSubset<T, RecurringTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurringTasks and returns the data updated in the database.
     * @param {RecurringTaskUpdateManyAndReturnArgs} args - Arguments to update many RecurringTasks.
     * @example
     * // Update many RecurringTasks
     * const recurringTask = await prisma.recurringTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecurringTasks and only return the `id`
     * const recurringTaskWithIdOnly = await prisma.recurringTask.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecurringTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, RecurringTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecurringTask.
     * @param {RecurringTaskUpsertArgs} args - Arguments to update or create a RecurringTask.
     * @example
     * // Update or create a RecurringTask
     * const recurringTask = await prisma.recurringTask.upsert({
     *   create: {
     *     // ... data to create a RecurringTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecurringTask we want to update
     *   }
     * })
     */
    upsert<T extends RecurringTaskUpsertArgs>(args: SelectSubset<T, RecurringTaskUpsertArgs<ExtArgs>>): Prisma__RecurringTaskClient<$Result.GetResult<Prisma.$RecurringTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecurringTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringTaskCountArgs} args - Arguments to filter RecurringTasks to count.
     * @example
     * // Count the number of RecurringTasks
     * const count = await prisma.recurringTask.count({
     *   where: {
     *     // ... the filter for the RecurringTasks we want to count
     *   }
     * })
    **/
    count<T extends RecurringTaskCountArgs>(
      args?: Subset<T, RecurringTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecurringTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecurringTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecurringTaskAggregateArgs>(args: Subset<T, RecurringTaskAggregateArgs>): Prisma.PrismaPromise<GetRecurringTaskAggregateType<T>>

    /**
     * Group by RecurringTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecurringTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecurringTaskGroupByArgs['orderBy'] }
        : { orderBy?: RecurringTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecurringTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecurringTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecurringTask model
   */
  readonly fields: RecurringTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecurringTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecurringTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecurringTask model
   */
  interface RecurringTaskFieldRefs {
    readonly id: FieldRef<"RecurringTask", 'String'>
    readonly taskId: FieldRef<"RecurringTask", 'String'>
    readonly frequency: FieldRef<"RecurringTask", 'RecurringFrequency'>
    readonly interval: FieldRef<"RecurringTask", 'Int'>
    readonly weekDays: FieldRef<"RecurringTask", 'String'>
    readonly monthDate: FieldRef<"RecurringTask", 'Int'>
    readonly monthWeekOrdinal: FieldRef<"RecurringTask", 'Int'>
    readonly monthWeekDay: FieldRef<"RecurringTask", 'Int'>
    readonly yearMonth: FieldRef<"RecurringTask", 'Int'>
    readonly yearDate: FieldRef<"RecurringTask", 'Int'>
    readonly customDays: FieldRef<"RecurringTask", 'Int'>
    readonly nextDueDate: FieldRef<"RecurringTask", 'DateTime'>
    readonly endDate: FieldRef<"RecurringTask", 'DateTime'>
    readonly lastCompletedAt: FieldRef<"RecurringTask", 'DateTime'>
    readonly createdAt: FieldRef<"RecurringTask", 'DateTime'>
    readonly updatedAt: FieldRef<"RecurringTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecurringTask findUnique
   */
  export type RecurringTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTask
     */
    select?: RecurringTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTask
     */
    omit?: RecurringTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTaskInclude<ExtArgs> | null
    /**
     * Filter, which RecurringTask to fetch.
     */
    where: RecurringTaskWhereUniqueInput
  }

  /**
   * RecurringTask findUniqueOrThrow
   */
  export type RecurringTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTask
     */
    select?: RecurringTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTask
     */
    omit?: RecurringTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTaskInclude<ExtArgs> | null
    /**
     * Filter, which RecurringTask to fetch.
     */
    where: RecurringTaskWhereUniqueInput
  }

  /**
   * RecurringTask findFirst
   */
  export type RecurringTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTask
     */
    select?: RecurringTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTask
     */
    omit?: RecurringTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTaskInclude<ExtArgs> | null
    /**
     * Filter, which RecurringTask to fetch.
     */
    where?: RecurringTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringTasks to fetch.
     */
    orderBy?: RecurringTaskOrderByWithRelationInput | RecurringTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurringTasks.
     */
    cursor?: RecurringTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurringTasks.
     */
    distinct?: RecurringTaskScalarFieldEnum | RecurringTaskScalarFieldEnum[]
  }

  /**
   * RecurringTask findFirstOrThrow
   */
  export type RecurringTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTask
     */
    select?: RecurringTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTask
     */
    omit?: RecurringTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTaskInclude<ExtArgs> | null
    /**
     * Filter, which RecurringTask to fetch.
     */
    where?: RecurringTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringTasks to fetch.
     */
    orderBy?: RecurringTaskOrderByWithRelationInput | RecurringTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurringTasks.
     */
    cursor?: RecurringTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurringTasks.
     */
    distinct?: RecurringTaskScalarFieldEnum | RecurringTaskScalarFieldEnum[]
  }

  /**
   * RecurringTask findMany
   */
  export type RecurringTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTask
     */
    select?: RecurringTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTask
     */
    omit?: RecurringTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTaskInclude<ExtArgs> | null
    /**
     * Filter, which RecurringTasks to fetch.
     */
    where?: RecurringTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringTasks to fetch.
     */
    orderBy?: RecurringTaskOrderByWithRelationInput | RecurringTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecurringTasks.
     */
    cursor?: RecurringTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringTasks.
     */
    skip?: number
    distinct?: RecurringTaskScalarFieldEnum | RecurringTaskScalarFieldEnum[]
  }

  /**
   * RecurringTask create
   */
  export type RecurringTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTask
     */
    select?: RecurringTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTask
     */
    omit?: RecurringTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a RecurringTask.
     */
    data: XOR<RecurringTaskCreateInput, RecurringTaskUncheckedCreateInput>
  }

  /**
   * RecurringTask createMany
   */
  export type RecurringTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecurringTasks.
     */
    data: RecurringTaskCreateManyInput | RecurringTaskCreateManyInput[]
  }

  /**
   * RecurringTask createManyAndReturn
   */
  export type RecurringTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTask
     */
    select?: RecurringTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTask
     */
    omit?: RecurringTaskOmit<ExtArgs> | null
    /**
     * The data used to create many RecurringTasks.
     */
    data: RecurringTaskCreateManyInput | RecurringTaskCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecurringTask update
   */
  export type RecurringTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTask
     */
    select?: RecurringTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTask
     */
    omit?: RecurringTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a RecurringTask.
     */
    data: XOR<RecurringTaskUpdateInput, RecurringTaskUncheckedUpdateInput>
    /**
     * Choose, which RecurringTask to update.
     */
    where: RecurringTaskWhereUniqueInput
  }

  /**
   * RecurringTask updateMany
   */
  export type RecurringTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecurringTasks.
     */
    data: XOR<RecurringTaskUpdateManyMutationInput, RecurringTaskUncheckedUpdateManyInput>
    /**
     * Filter which RecurringTasks to update
     */
    where?: RecurringTaskWhereInput
    /**
     * Limit how many RecurringTasks to update.
     */
    limit?: number
  }

  /**
   * RecurringTask updateManyAndReturn
   */
  export type RecurringTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTask
     */
    select?: RecurringTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTask
     */
    omit?: RecurringTaskOmit<ExtArgs> | null
    /**
     * The data used to update RecurringTasks.
     */
    data: XOR<RecurringTaskUpdateManyMutationInput, RecurringTaskUncheckedUpdateManyInput>
    /**
     * Filter which RecurringTasks to update
     */
    where?: RecurringTaskWhereInput
    /**
     * Limit how many RecurringTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecurringTask upsert
   */
  export type RecurringTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTask
     */
    select?: RecurringTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTask
     */
    omit?: RecurringTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the RecurringTask to update in case it exists.
     */
    where: RecurringTaskWhereUniqueInput
    /**
     * In case the RecurringTask found by the `where` argument doesn't exist, create a new RecurringTask with this data.
     */
    create: XOR<RecurringTaskCreateInput, RecurringTaskUncheckedCreateInput>
    /**
     * In case the RecurringTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecurringTaskUpdateInput, RecurringTaskUncheckedUpdateInput>
  }

  /**
   * RecurringTask delete
   */
  export type RecurringTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTask
     */
    select?: RecurringTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTask
     */
    omit?: RecurringTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTaskInclude<ExtArgs> | null
    /**
     * Filter which RecurringTask to delete.
     */
    where: RecurringTaskWhereUniqueInput
  }

  /**
   * RecurringTask deleteMany
   */
  export type RecurringTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurringTasks to delete
     */
    where?: RecurringTaskWhereInput
    /**
     * Limit how many RecurringTasks to delete.
     */
    limit?: number
  }

  /**
   * RecurringTask without action
   */
  export type RecurringTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTask
     */
    select?: RecurringTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTask
     */
    omit?: RecurringTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTaskInclude<ExtArgs> | null
  }


  /**
   * Model Ledger
   */

  export type AggregateLedger = {
    _count: LedgerCountAggregateOutputType | null
    _min: LedgerMinAggregateOutputType | null
    _max: LedgerMaxAggregateOutputType | null
  }

  export type LedgerMinAggregateOutputType = {
    id: string | null
    type: $Enums.LedgerType | null
    name: string | null
    description: string | null
    details: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LedgerMaxAggregateOutputType = {
    id: string | null
    type: $Enums.LedgerType | null
    name: string | null
    description: string | null
    details: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LedgerCountAggregateOutputType = {
    id: number
    type: number
    name: number
    description: number
    details: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LedgerMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
    description?: true
    details?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LedgerMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
    description?: true
    details?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LedgerCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    description?: true
    details?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LedgerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ledger to aggregate.
     */
    where?: LedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ledgers to fetch.
     */
    orderBy?: LedgerOrderByWithRelationInput | LedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ledgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ledgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ledgers
    **/
    _count?: true | LedgerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LedgerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LedgerMaxAggregateInputType
  }

  export type GetLedgerAggregateType<T extends LedgerAggregateArgs> = {
        [P in keyof T & keyof AggregateLedger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLedger[P]>
      : GetScalarType<T[P], AggregateLedger[P]>
  }




  export type LedgerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerWhereInput
    orderBy?: LedgerOrderByWithAggregationInput | LedgerOrderByWithAggregationInput[]
    by: LedgerScalarFieldEnum[] | LedgerScalarFieldEnum
    having?: LedgerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LedgerCountAggregateInputType | true
    _min?: LedgerMinAggregateInputType
    _max?: LedgerMaxAggregateInputType
  }

  export type LedgerGroupByOutputType = {
    id: string
    type: $Enums.LedgerType
    name: string
    description: string | null
    details: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: LedgerCountAggregateOutputType | null
    _min: LedgerMinAggregateOutputType | null
    _max: LedgerMaxAggregateOutputType | null
  }

  type GetLedgerGroupByPayload<T extends LedgerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LedgerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LedgerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LedgerGroupByOutputType[P]>
            : GetScalarType<T[P], LedgerGroupByOutputType[P]>
        }
      >
    >


  export type LedgerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    details?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tasks?: boolean | Ledger$tasksArgs<ExtArgs>
    _count?: boolean | LedgerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledger"]>

  export type LedgerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    details?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ledger"]>

  export type LedgerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    details?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ledger"]>

  export type LedgerSelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    details?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LedgerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "name" | "description" | "details" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["ledger"]>
  export type LedgerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | Ledger$tasksArgs<ExtArgs>
    _count?: boolean | LedgerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LedgerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LedgerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LedgerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ledger"
    objects: {
      tasks: Prisma.$LedgerTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.LedgerType
      name: string
      description: string | null
      details: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ledger"]>
    composites: {}
  }

  type LedgerGetPayload<S extends boolean | null | undefined | LedgerDefaultArgs> = $Result.GetResult<Prisma.$LedgerPayload, S>

  type LedgerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LedgerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LedgerCountAggregateInputType | true
    }

  export interface LedgerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ledger'], meta: { name: 'Ledger' } }
    /**
     * Find zero or one Ledger that matches the filter.
     * @param {LedgerFindUniqueArgs} args - Arguments to find a Ledger
     * @example
     * // Get one Ledger
     * const ledger = await prisma.ledger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LedgerFindUniqueArgs>(args: SelectSubset<T, LedgerFindUniqueArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ledger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LedgerFindUniqueOrThrowArgs} args - Arguments to find a Ledger
     * @example
     * // Get one Ledger
     * const ledger = await prisma.ledger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LedgerFindUniqueOrThrowArgs>(args: SelectSubset<T, LedgerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ledger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerFindFirstArgs} args - Arguments to find a Ledger
     * @example
     * // Get one Ledger
     * const ledger = await prisma.ledger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LedgerFindFirstArgs>(args?: SelectSubset<T, LedgerFindFirstArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ledger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerFindFirstOrThrowArgs} args - Arguments to find a Ledger
     * @example
     * // Get one Ledger
     * const ledger = await prisma.ledger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LedgerFindFirstOrThrowArgs>(args?: SelectSubset<T, LedgerFindFirstOrThrowArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ledgers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ledgers
     * const ledgers = await prisma.ledger.findMany()
     * 
     * // Get first 10 Ledgers
     * const ledgers = await prisma.ledger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ledgerWithIdOnly = await prisma.ledger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LedgerFindManyArgs>(args?: SelectSubset<T, LedgerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ledger.
     * @param {LedgerCreateArgs} args - Arguments to create a Ledger.
     * @example
     * // Create one Ledger
     * const Ledger = await prisma.ledger.create({
     *   data: {
     *     // ... data to create a Ledger
     *   }
     * })
     * 
     */
    create<T extends LedgerCreateArgs>(args: SelectSubset<T, LedgerCreateArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ledgers.
     * @param {LedgerCreateManyArgs} args - Arguments to create many Ledgers.
     * @example
     * // Create many Ledgers
     * const ledger = await prisma.ledger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LedgerCreateManyArgs>(args?: SelectSubset<T, LedgerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ledgers and returns the data saved in the database.
     * @param {LedgerCreateManyAndReturnArgs} args - Arguments to create many Ledgers.
     * @example
     * // Create many Ledgers
     * const ledger = await prisma.ledger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ledgers and only return the `id`
     * const ledgerWithIdOnly = await prisma.ledger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LedgerCreateManyAndReturnArgs>(args?: SelectSubset<T, LedgerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ledger.
     * @param {LedgerDeleteArgs} args - Arguments to delete one Ledger.
     * @example
     * // Delete one Ledger
     * const Ledger = await prisma.ledger.delete({
     *   where: {
     *     // ... filter to delete one Ledger
     *   }
     * })
     * 
     */
    delete<T extends LedgerDeleteArgs>(args: SelectSubset<T, LedgerDeleteArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ledger.
     * @param {LedgerUpdateArgs} args - Arguments to update one Ledger.
     * @example
     * // Update one Ledger
     * const ledger = await prisma.ledger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LedgerUpdateArgs>(args: SelectSubset<T, LedgerUpdateArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ledgers.
     * @param {LedgerDeleteManyArgs} args - Arguments to filter Ledgers to delete.
     * @example
     * // Delete a few Ledgers
     * const { count } = await prisma.ledger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LedgerDeleteManyArgs>(args?: SelectSubset<T, LedgerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ledgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ledgers
     * const ledger = await prisma.ledger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LedgerUpdateManyArgs>(args: SelectSubset<T, LedgerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ledgers and returns the data updated in the database.
     * @param {LedgerUpdateManyAndReturnArgs} args - Arguments to update many Ledgers.
     * @example
     * // Update many Ledgers
     * const ledger = await prisma.ledger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ledgers and only return the `id`
     * const ledgerWithIdOnly = await prisma.ledger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LedgerUpdateManyAndReturnArgs>(args: SelectSubset<T, LedgerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ledger.
     * @param {LedgerUpsertArgs} args - Arguments to update or create a Ledger.
     * @example
     * // Update or create a Ledger
     * const ledger = await prisma.ledger.upsert({
     *   create: {
     *     // ... data to create a Ledger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ledger we want to update
     *   }
     * })
     */
    upsert<T extends LedgerUpsertArgs>(args: SelectSubset<T, LedgerUpsertArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ledgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerCountArgs} args - Arguments to filter Ledgers to count.
     * @example
     * // Count the number of Ledgers
     * const count = await prisma.ledger.count({
     *   where: {
     *     // ... the filter for the Ledgers we want to count
     *   }
     * })
    **/
    count<T extends LedgerCountArgs>(
      args?: Subset<T, LedgerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LedgerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ledger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LedgerAggregateArgs>(args: Subset<T, LedgerAggregateArgs>): Prisma.PrismaPromise<GetLedgerAggregateType<T>>

    /**
     * Group by Ledger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LedgerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LedgerGroupByArgs['orderBy'] }
        : { orderBy?: LedgerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LedgerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLedgerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ledger model
   */
  readonly fields: LedgerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ledger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LedgerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends Ledger$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Ledger$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ledger model
   */
  interface LedgerFieldRefs {
    readonly id: FieldRef<"Ledger", 'String'>
    readonly type: FieldRef<"Ledger", 'LedgerType'>
    readonly name: FieldRef<"Ledger", 'String'>
    readonly description: FieldRef<"Ledger", 'String'>
    readonly details: FieldRef<"Ledger", 'String'>
    readonly status: FieldRef<"Ledger", 'String'>
    readonly createdAt: FieldRef<"Ledger", 'DateTime'>
    readonly updatedAt: FieldRef<"Ledger", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ledger findUnique
   */
  export type LedgerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * Filter, which Ledger to fetch.
     */
    where: LedgerWhereUniqueInput
  }

  /**
   * Ledger findUniqueOrThrow
   */
  export type LedgerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * Filter, which Ledger to fetch.
     */
    where: LedgerWhereUniqueInput
  }

  /**
   * Ledger findFirst
   */
  export type LedgerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * Filter, which Ledger to fetch.
     */
    where?: LedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ledgers to fetch.
     */
    orderBy?: LedgerOrderByWithRelationInput | LedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ledgers.
     */
    cursor?: LedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ledgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ledgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ledgers.
     */
    distinct?: LedgerScalarFieldEnum | LedgerScalarFieldEnum[]
  }

  /**
   * Ledger findFirstOrThrow
   */
  export type LedgerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * Filter, which Ledger to fetch.
     */
    where?: LedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ledgers to fetch.
     */
    orderBy?: LedgerOrderByWithRelationInput | LedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ledgers.
     */
    cursor?: LedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ledgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ledgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ledgers.
     */
    distinct?: LedgerScalarFieldEnum | LedgerScalarFieldEnum[]
  }

  /**
   * Ledger findMany
   */
  export type LedgerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * Filter, which Ledgers to fetch.
     */
    where?: LedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ledgers to fetch.
     */
    orderBy?: LedgerOrderByWithRelationInput | LedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ledgers.
     */
    cursor?: LedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ledgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ledgers.
     */
    skip?: number
    distinct?: LedgerScalarFieldEnum | LedgerScalarFieldEnum[]
  }

  /**
   * Ledger create
   */
  export type LedgerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * The data needed to create a Ledger.
     */
    data: XOR<LedgerCreateInput, LedgerUncheckedCreateInput>
  }

  /**
   * Ledger createMany
   */
  export type LedgerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ledgers.
     */
    data: LedgerCreateManyInput | LedgerCreateManyInput[]
  }

  /**
   * Ledger createManyAndReturn
   */
  export type LedgerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * The data used to create many Ledgers.
     */
    data: LedgerCreateManyInput | LedgerCreateManyInput[]
  }

  /**
   * Ledger update
   */
  export type LedgerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * The data needed to update a Ledger.
     */
    data: XOR<LedgerUpdateInput, LedgerUncheckedUpdateInput>
    /**
     * Choose, which Ledger to update.
     */
    where: LedgerWhereUniqueInput
  }

  /**
   * Ledger updateMany
   */
  export type LedgerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ledgers.
     */
    data: XOR<LedgerUpdateManyMutationInput, LedgerUncheckedUpdateManyInput>
    /**
     * Filter which Ledgers to update
     */
    where?: LedgerWhereInput
    /**
     * Limit how many Ledgers to update.
     */
    limit?: number
  }

  /**
   * Ledger updateManyAndReturn
   */
  export type LedgerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * The data used to update Ledgers.
     */
    data: XOR<LedgerUpdateManyMutationInput, LedgerUncheckedUpdateManyInput>
    /**
     * Filter which Ledgers to update
     */
    where?: LedgerWhereInput
    /**
     * Limit how many Ledgers to update.
     */
    limit?: number
  }

  /**
   * Ledger upsert
   */
  export type LedgerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * The filter to search for the Ledger to update in case it exists.
     */
    where: LedgerWhereUniqueInput
    /**
     * In case the Ledger found by the `where` argument doesn't exist, create a new Ledger with this data.
     */
    create: XOR<LedgerCreateInput, LedgerUncheckedCreateInput>
    /**
     * In case the Ledger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LedgerUpdateInput, LedgerUncheckedUpdateInput>
  }

  /**
   * Ledger delete
   */
  export type LedgerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * Filter which Ledger to delete.
     */
    where: LedgerWhereUniqueInput
  }

  /**
   * Ledger deleteMany
   */
  export type LedgerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ledgers to delete
     */
    where?: LedgerWhereInput
    /**
     * Limit how many Ledgers to delete.
     */
    limit?: number
  }

  /**
   * Ledger.tasks
   */
  export type Ledger$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerTask
     */
    select?: LedgerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerTask
     */
    omit?: LedgerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerTaskInclude<ExtArgs> | null
    where?: LedgerTaskWhereInput
    orderBy?: LedgerTaskOrderByWithRelationInput | LedgerTaskOrderByWithRelationInput[]
    cursor?: LedgerTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LedgerTaskScalarFieldEnum | LedgerTaskScalarFieldEnum[]
  }

  /**
   * Ledger without action
   */
  export type LedgerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
  }


  /**
   * Model LedgerTask
   */

  export type AggregateLedgerTask = {
    _count: LedgerTaskCountAggregateOutputType | null
    _min: LedgerTaskMinAggregateOutputType | null
    _max: LedgerTaskMaxAggregateOutputType | null
  }

  export type LedgerTaskMinAggregateOutputType = {
    id: string | null
    ledgerId: string | null
    taskId: string | null
    createdAt: Date | null
  }

  export type LedgerTaskMaxAggregateOutputType = {
    id: string | null
    ledgerId: string | null
    taskId: string | null
    createdAt: Date | null
  }

  export type LedgerTaskCountAggregateOutputType = {
    id: number
    ledgerId: number
    taskId: number
    createdAt: number
    _all: number
  }


  export type LedgerTaskMinAggregateInputType = {
    id?: true
    ledgerId?: true
    taskId?: true
    createdAt?: true
  }

  export type LedgerTaskMaxAggregateInputType = {
    id?: true
    ledgerId?: true
    taskId?: true
    createdAt?: true
  }

  export type LedgerTaskCountAggregateInputType = {
    id?: true
    ledgerId?: true
    taskId?: true
    createdAt?: true
    _all?: true
  }

  export type LedgerTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerTask to aggregate.
     */
    where?: LedgerTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerTasks to fetch.
     */
    orderBy?: LedgerTaskOrderByWithRelationInput | LedgerTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LedgerTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LedgerTasks
    **/
    _count?: true | LedgerTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LedgerTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LedgerTaskMaxAggregateInputType
  }

  export type GetLedgerTaskAggregateType<T extends LedgerTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateLedgerTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLedgerTask[P]>
      : GetScalarType<T[P], AggregateLedgerTask[P]>
  }




  export type LedgerTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerTaskWhereInput
    orderBy?: LedgerTaskOrderByWithAggregationInput | LedgerTaskOrderByWithAggregationInput[]
    by: LedgerTaskScalarFieldEnum[] | LedgerTaskScalarFieldEnum
    having?: LedgerTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LedgerTaskCountAggregateInputType | true
    _min?: LedgerTaskMinAggregateInputType
    _max?: LedgerTaskMaxAggregateInputType
  }

  export type LedgerTaskGroupByOutputType = {
    id: string
    ledgerId: string
    taskId: string
    createdAt: Date
    _count: LedgerTaskCountAggregateOutputType | null
    _min: LedgerTaskMinAggregateOutputType | null
    _max: LedgerTaskMaxAggregateOutputType | null
  }

  type GetLedgerTaskGroupByPayload<T extends LedgerTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LedgerTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LedgerTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LedgerTaskGroupByOutputType[P]>
            : GetScalarType<T[P], LedgerTaskGroupByOutputType[P]>
        }
      >
    >


  export type LedgerTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ledgerId?: boolean
    taskId?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerTask"]>

  export type LedgerTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ledgerId?: boolean
    taskId?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerTask"]>

  export type LedgerTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ledgerId?: boolean
    taskId?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerTask"]>

  export type LedgerTaskSelectScalar = {
    id?: boolean
    ledgerId?: boolean
    taskId?: boolean
    createdAt?: boolean
  }

  export type LedgerTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ledgerId" | "taskId" | "createdAt", ExtArgs["result"]["ledgerTask"]>
  export type LedgerTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }
  export type LedgerTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }
  export type LedgerTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }

  export type $LedgerTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LedgerTask"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      ledger: Prisma.$LedgerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ledgerId: string
      taskId: string
      createdAt: Date
    }, ExtArgs["result"]["ledgerTask"]>
    composites: {}
  }

  type LedgerTaskGetPayload<S extends boolean | null | undefined | LedgerTaskDefaultArgs> = $Result.GetResult<Prisma.$LedgerTaskPayload, S>

  type LedgerTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LedgerTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LedgerTaskCountAggregateInputType | true
    }

  export interface LedgerTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LedgerTask'], meta: { name: 'LedgerTask' } }
    /**
     * Find zero or one LedgerTask that matches the filter.
     * @param {LedgerTaskFindUniqueArgs} args - Arguments to find a LedgerTask
     * @example
     * // Get one LedgerTask
     * const ledgerTask = await prisma.ledgerTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LedgerTaskFindUniqueArgs>(args: SelectSubset<T, LedgerTaskFindUniqueArgs<ExtArgs>>): Prisma__LedgerTaskClient<$Result.GetResult<Prisma.$LedgerTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LedgerTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LedgerTaskFindUniqueOrThrowArgs} args - Arguments to find a LedgerTask
     * @example
     * // Get one LedgerTask
     * const ledgerTask = await prisma.ledgerTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LedgerTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, LedgerTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LedgerTaskClient<$Result.GetResult<Prisma.$LedgerTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LedgerTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerTaskFindFirstArgs} args - Arguments to find a LedgerTask
     * @example
     * // Get one LedgerTask
     * const ledgerTask = await prisma.ledgerTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LedgerTaskFindFirstArgs>(args?: SelectSubset<T, LedgerTaskFindFirstArgs<ExtArgs>>): Prisma__LedgerTaskClient<$Result.GetResult<Prisma.$LedgerTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LedgerTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerTaskFindFirstOrThrowArgs} args - Arguments to find a LedgerTask
     * @example
     * // Get one LedgerTask
     * const ledgerTask = await prisma.ledgerTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LedgerTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, LedgerTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__LedgerTaskClient<$Result.GetResult<Prisma.$LedgerTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LedgerTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LedgerTasks
     * const ledgerTasks = await prisma.ledgerTask.findMany()
     * 
     * // Get first 10 LedgerTasks
     * const ledgerTasks = await prisma.ledgerTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ledgerTaskWithIdOnly = await prisma.ledgerTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LedgerTaskFindManyArgs>(args?: SelectSubset<T, LedgerTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LedgerTask.
     * @param {LedgerTaskCreateArgs} args - Arguments to create a LedgerTask.
     * @example
     * // Create one LedgerTask
     * const LedgerTask = await prisma.ledgerTask.create({
     *   data: {
     *     // ... data to create a LedgerTask
     *   }
     * })
     * 
     */
    create<T extends LedgerTaskCreateArgs>(args: SelectSubset<T, LedgerTaskCreateArgs<ExtArgs>>): Prisma__LedgerTaskClient<$Result.GetResult<Prisma.$LedgerTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LedgerTasks.
     * @param {LedgerTaskCreateManyArgs} args - Arguments to create many LedgerTasks.
     * @example
     * // Create many LedgerTasks
     * const ledgerTask = await prisma.ledgerTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LedgerTaskCreateManyArgs>(args?: SelectSubset<T, LedgerTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LedgerTasks and returns the data saved in the database.
     * @param {LedgerTaskCreateManyAndReturnArgs} args - Arguments to create many LedgerTasks.
     * @example
     * // Create many LedgerTasks
     * const ledgerTask = await prisma.ledgerTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LedgerTasks and only return the `id`
     * const ledgerTaskWithIdOnly = await prisma.ledgerTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LedgerTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, LedgerTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LedgerTask.
     * @param {LedgerTaskDeleteArgs} args - Arguments to delete one LedgerTask.
     * @example
     * // Delete one LedgerTask
     * const LedgerTask = await prisma.ledgerTask.delete({
     *   where: {
     *     // ... filter to delete one LedgerTask
     *   }
     * })
     * 
     */
    delete<T extends LedgerTaskDeleteArgs>(args: SelectSubset<T, LedgerTaskDeleteArgs<ExtArgs>>): Prisma__LedgerTaskClient<$Result.GetResult<Prisma.$LedgerTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LedgerTask.
     * @param {LedgerTaskUpdateArgs} args - Arguments to update one LedgerTask.
     * @example
     * // Update one LedgerTask
     * const ledgerTask = await prisma.ledgerTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LedgerTaskUpdateArgs>(args: SelectSubset<T, LedgerTaskUpdateArgs<ExtArgs>>): Prisma__LedgerTaskClient<$Result.GetResult<Prisma.$LedgerTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LedgerTasks.
     * @param {LedgerTaskDeleteManyArgs} args - Arguments to filter LedgerTasks to delete.
     * @example
     * // Delete a few LedgerTasks
     * const { count } = await prisma.ledgerTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LedgerTaskDeleteManyArgs>(args?: SelectSubset<T, LedgerTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LedgerTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LedgerTasks
     * const ledgerTask = await prisma.ledgerTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LedgerTaskUpdateManyArgs>(args: SelectSubset<T, LedgerTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LedgerTasks and returns the data updated in the database.
     * @param {LedgerTaskUpdateManyAndReturnArgs} args - Arguments to update many LedgerTasks.
     * @example
     * // Update many LedgerTasks
     * const ledgerTask = await prisma.ledgerTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LedgerTasks and only return the `id`
     * const ledgerTaskWithIdOnly = await prisma.ledgerTask.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LedgerTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, LedgerTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LedgerTask.
     * @param {LedgerTaskUpsertArgs} args - Arguments to update or create a LedgerTask.
     * @example
     * // Update or create a LedgerTask
     * const ledgerTask = await prisma.ledgerTask.upsert({
     *   create: {
     *     // ... data to create a LedgerTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LedgerTask we want to update
     *   }
     * })
     */
    upsert<T extends LedgerTaskUpsertArgs>(args: SelectSubset<T, LedgerTaskUpsertArgs<ExtArgs>>): Prisma__LedgerTaskClient<$Result.GetResult<Prisma.$LedgerTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LedgerTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerTaskCountArgs} args - Arguments to filter LedgerTasks to count.
     * @example
     * // Count the number of LedgerTasks
     * const count = await prisma.ledgerTask.count({
     *   where: {
     *     // ... the filter for the LedgerTasks we want to count
     *   }
     * })
    **/
    count<T extends LedgerTaskCountArgs>(
      args?: Subset<T, LedgerTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LedgerTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LedgerTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LedgerTaskAggregateArgs>(args: Subset<T, LedgerTaskAggregateArgs>): Prisma.PrismaPromise<GetLedgerTaskAggregateType<T>>

    /**
     * Group by LedgerTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LedgerTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LedgerTaskGroupByArgs['orderBy'] }
        : { orderBy?: LedgerTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LedgerTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLedgerTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LedgerTask model
   */
  readonly fields: LedgerTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LedgerTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LedgerTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ledger<T extends LedgerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LedgerDefaultArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LedgerTask model
   */
  interface LedgerTaskFieldRefs {
    readonly id: FieldRef<"LedgerTask", 'String'>
    readonly ledgerId: FieldRef<"LedgerTask", 'String'>
    readonly taskId: FieldRef<"LedgerTask", 'String'>
    readonly createdAt: FieldRef<"LedgerTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LedgerTask findUnique
   */
  export type LedgerTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerTask
     */
    select?: LedgerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerTask
     */
    omit?: LedgerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerTaskInclude<ExtArgs> | null
    /**
     * Filter, which LedgerTask to fetch.
     */
    where: LedgerTaskWhereUniqueInput
  }

  /**
   * LedgerTask findUniqueOrThrow
   */
  export type LedgerTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerTask
     */
    select?: LedgerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerTask
     */
    omit?: LedgerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerTaskInclude<ExtArgs> | null
    /**
     * Filter, which LedgerTask to fetch.
     */
    where: LedgerTaskWhereUniqueInput
  }

  /**
   * LedgerTask findFirst
   */
  export type LedgerTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerTask
     */
    select?: LedgerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerTask
     */
    omit?: LedgerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerTaskInclude<ExtArgs> | null
    /**
     * Filter, which LedgerTask to fetch.
     */
    where?: LedgerTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerTasks to fetch.
     */
    orderBy?: LedgerTaskOrderByWithRelationInput | LedgerTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerTasks.
     */
    cursor?: LedgerTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerTasks.
     */
    distinct?: LedgerTaskScalarFieldEnum | LedgerTaskScalarFieldEnum[]
  }

  /**
   * LedgerTask findFirstOrThrow
   */
  export type LedgerTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerTask
     */
    select?: LedgerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerTask
     */
    omit?: LedgerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerTaskInclude<ExtArgs> | null
    /**
     * Filter, which LedgerTask to fetch.
     */
    where?: LedgerTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerTasks to fetch.
     */
    orderBy?: LedgerTaskOrderByWithRelationInput | LedgerTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerTasks.
     */
    cursor?: LedgerTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerTasks.
     */
    distinct?: LedgerTaskScalarFieldEnum | LedgerTaskScalarFieldEnum[]
  }

  /**
   * LedgerTask findMany
   */
  export type LedgerTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerTask
     */
    select?: LedgerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerTask
     */
    omit?: LedgerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerTaskInclude<ExtArgs> | null
    /**
     * Filter, which LedgerTasks to fetch.
     */
    where?: LedgerTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerTasks to fetch.
     */
    orderBy?: LedgerTaskOrderByWithRelationInput | LedgerTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LedgerTasks.
     */
    cursor?: LedgerTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerTasks.
     */
    skip?: number
    distinct?: LedgerTaskScalarFieldEnum | LedgerTaskScalarFieldEnum[]
  }

  /**
   * LedgerTask create
   */
  export type LedgerTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerTask
     */
    select?: LedgerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerTask
     */
    omit?: LedgerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a LedgerTask.
     */
    data: XOR<LedgerTaskCreateInput, LedgerTaskUncheckedCreateInput>
  }

  /**
   * LedgerTask createMany
   */
  export type LedgerTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LedgerTasks.
     */
    data: LedgerTaskCreateManyInput | LedgerTaskCreateManyInput[]
  }

  /**
   * LedgerTask createManyAndReturn
   */
  export type LedgerTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerTask
     */
    select?: LedgerTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerTask
     */
    omit?: LedgerTaskOmit<ExtArgs> | null
    /**
     * The data used to create many LedgerTasks.
     */
    data: LedgerTaskCreateManyInput | LedgerTaskCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LedgerTask update
   */
  export type LedgerTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerTask
     */
    select?: LedgerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerTask
     */
    omit?: LedgerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a LedgerTask.
     */
    data: XOR<LedgerTaskUpdateInput, LedgerTaskUncheckedUpdateInput>
    /**
     * Choose, which LedgerTask to update.
     */
    where: LedgerTaskWhereUniqueInput
  }

  /**
   * LedgerTask updateMany
   */
  export type LedgerTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LedgerTasks.
     */
    data: XOR<LedgerTaskUpdateManyMutationInput, LedgerTaskUncheckedUpdateManyInput>
    /**
     * Filter which LedgerTasks to update
     */
    where?: LedgerTaskWhereInput
    /**
     * Limit how many LedgerTasks to update.
     */
    limit?: number
  }

  /**
   * LedgerTask updateManyAndReturn
   */
  export type LedgerTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerTask
     */
    select?: LedgerTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerTask
     */
    omit?: LedgerTaskOmit<ExtArgs> | null
    /**
     * The data used to update LedgerTasks.
     */
    data: XOR<LedgerTaskUpdateManyMutationInput, LedgerTaskUncheckedUpdateManyInput>
    /**
     * Filter which LedgerTasks to update
     */
    where?: LedgerTaskWhereInput
    /**
     * Limit how many LedgerTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerTaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LedgerTask upsert
   */
  export type LedgerTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerTask
     */
    select?: LedgerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerTask
     */
    omit?: LedgerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the LedgerTask to update in case it exists.
     */
    where: LedgerTaskWhereUniqueInput
    /**
     * In case the LedgerTask found by the `where` argument doesn't exist, create a new LedgerTask with this data.
     */
    create: XOR<LedgerTaskCreateInput, LedgerTaskUncheckedCreateInput>
    /**
     * In case the LedgerTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LedgerTaskUpdateInput, LedgerTaskUncheckedUpdateInput>
  }

  /**
   * LedgerTask delete
   */
  export type LedgerTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerTask
     */
    select?: LedgerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerTask
     */
    omit?: LedgerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerTaskInclude<ExtArgs> | null
    /**
     * Filter which LedgerTask to delete.
     */
    where: LedgerTaskWhereUniqueInput
  }

  /**
   * LedgerTask deleteMany
   */
  export type LedgerTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerTasks to delete
     */
    where?: LedgerTaskWhereInput
    /**
     * Limit how many LedgerTasks to delete.
     */
    limit?: number
  }

  /**
   * LedgerTask without action
   */
  export type LedgerTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerTask
     */
    select?: LedgerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerTask
     */
    omit?: LedgerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerTaskInclude<ExtArgs> | null
  }


  /**
   * Model Reminder
   */

  export type AggregateReminder = {
    _count: ReminderCountAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  export type ReminderMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    timing: $Enums.ReminderTiming | null
    remindAt: Date | null
    isNotified: boolean | null
    notifiedAt: Date | null
    createdAt: Date | null
  }

  export type ReminderMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    timing: $Enums.ReminderTiming | null
    remindAt: Date | null
    isNotified: boolean | null
    notifiedAt: Date | null
    createdAt: Date | null
  }

  export type ReminderCountAggregateOutputType = {
    id: number
    taskId: number
    timing: number
    remindAt: number
    isNotified: number
    notifiedAt: number
    createdAt: number
    _all: number
  }


  export type ReminderMinAggregateInputType = {
    id?: true
    taskId?: true
    timing?: true
    remindAt?: true
    isNotified?: true
    notifiedAt?: true
    createdAt?: true
  }

  export type ReminderMaxAggregateInputType = {
    id?: true
    taskId?: true
    timing?: true
    remindAt?: true
    isNotified?: true
    notifiedAt?: true
    createdAt?: true
  }

  export type ReminderCountAggregateInputType = {
    id?: true
    taskId?: true
    timing?: true
    remindAt?: true
    isNotified?: true
    notifiedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ReminderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminder to aggregate.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reminders
    **/
    _count?: true | ReminderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReminderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReminderMaxAggregateInputType
  }

  export type GetReminderAggregateType<T extends ReminderAggregateArgs> = {
        [P in keyof T & keyof AggregateReminder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminder[P]>
      : GetScalarType<T[P], AggregateReminder[P]>
  }




  export type ReminderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithAggregationInput | ReminderOrderByWithAggregationInput[]
    by: ReminderScalarFieldEnum[] | ReminderScalarFieldEnum
    having?: ReminderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReminderCountAggregateInputType | true
    _min?: ReminderMinAggregateInputType
    _max?: ReminderMaxAggregateInputType
  }

  export type ReminderGroupByOutputType = {
    id: string
    taskId: string
    timing: $Enums.ReminderTiming
    remindAt: Date
    isNotified: boolean
    notifiedAt: Date | null
    createdAt: Date
    _count: ReminderCountAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  type GetReminderGroupByPayload<T extends ReminderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReminderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReminderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReminderGroupByOutputType[P]>
            : GetScalarType<T[P], ReminderGroupByOutputType[P]>
        }
      >
    >


  export type ReminderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    timing?: boolean
    remindAt?: boolean
    isNotified?: boolean
    notifiedAt?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    timing?: boolean
    remindAt?: boolean
    isNotified?: boolean
    notifiedAt?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    timing?: boolean
    remindAt?: boolean
    isNotified?: boolean
    notifiedAt?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectScalar = {
    id?: boolean
    taskId?: boolean
    timing?: boolean
    remindAt?: boolean
    isNotified?: boolean
    notifiedAt?: boolean
    createdAt?: boolean
  }

  export type ReminderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "timing" | "remindAt" | "isNotified" | "notifiedAt" | "createdAt", ExtArgs["result"]["reminder"]>
  export type ReminderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type ReminderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type ReminderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $ReminderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reminder"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      timing: $Enums.ReminderTiming
      remindAt: Date
      isNotified: boolean
      notifiedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["reminder"]>
    composites: {}
  }

  type ReminderGetPayload<S extends boolean | null | undefined | ReminderDefaultArgs> = $Result.GetResult<Prisma.$ReminderPayload, S>

  type ReminderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReminderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReminderCountAggregateInputType | true
    }

  export interface ReminderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reminder'], meta: { name: 'Reminder' } }
    /**
     * Find zero or one Reminder that matches the filter.
     * @param {ReminderFindUniqueArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReminderFindUniqueArgs>(args: SelectSubset<T, ReminderFindUniqueArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reminder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReminderFindUniqueOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReminderFindUniqueOrThrowArgs>(args: SelectSubset<T, ReminderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reminder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReminderFindFirstArgs>(args?: SelectSubset<T, ReminderFindFirstArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reminder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReminderFindFirstOrThrowArgs>(args?: SelectSubset<T, ReminderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reminders
     * const reminders = await prisma.reminder.findMany()
     * 
     * // Get first 10 Reminders
     * const reminders = await prisma.reminder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reminderWithIdOnly = await prisma.reminder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReminderFindManyArgs>(args?: SelectSubset<T, ReminderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reminder.
     * @param {ReminderCreateArgs} args - Arguments to create a Reminder.
     * @example
     * // Create one Reminder
     * const Reminder = await prisma.reminder.create({
     *   data: {
     *     // ... data to create a Reminder
     *   }
     * })
     * 
     */
    create<T extends ReminderCreateArgs>(args: SelectSubset<T, ReminderCreateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reminders.
     * @param {ReminderCreateManyArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReminderCreateManyArgs>(args?: SelectSubset<T, ReminderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reminders and returns the data saved in the database.
     * @param {ReminderCreateManyAndReturnArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reminders and only return the `id`
     * const reminderWithIdOnly = await prisma.reminder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReminderCreateManyAndReturnArgs>(args?: SelectSubset<T, ReminderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reminder.
     * @param {ReminderDeleteArgs} args - Arguments to delete one Reminder.
     * @example
     * // Delete one Reminder
     * const Reminder = await prisma.reminder.delete({
     *   where: {
     *     // ... filter to delete one Reminder
     *   }
     * })
     * 
     */
    delete<T extends ReminderDeleteArgs>(args: SelectSubset<T, ReminderDeleteArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reminder.
     * @param {ReminderUpdateArgs} args - Arguments to update one Reminder.
     * @example
     * // Update one Reminder
     * const reminder = await prisma.reminder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReminderUpdateArgs>(args: SelectSubset<T, ReminderUpdateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reminders.
     * @param {ReminderDeleteManyArgs} args - Arguments to filter Reminders to delete.
     * @example
     * // Delete a few Reminders
     * const { count } = await prisma.reminder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReminderDeleteManyArgs>(args?: SelectSubset<T, ReminderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reminders
     * const reminder = await prisma.reminder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReminderUpdateManyArgs>(args: SelectSubset<T, ReminderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders and returns the data updated in the database.
     * @param {ReminderUpdateManyAndReturnArgs} args - Arguments to update many Reminders.
     * @example
     * // Update many Reminders
     * const reminder = await prisma.reminder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reminders and only return the `id`
     * const reminderWithIdOnly = await prisma.reminder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReminderUpdateManyAndReturnArgs>(args: SelectSubset<T, ReminderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reminder.
     * @param {ReminderUpsertArgs} args - Arguments to update or create a Reminder.
     * @example
     * // Update or create a Reminder
     * const reminder = await prisma.reminder.upsert({
     *   create: {
     *     // ... data to create a Reminder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reminder we want to update
     *   }
     * })
     */
    upsert<T extends ReminderUpsertArgs>(args: SelectSubset<T, ReminderUpsertArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderCountArgs} args - Arguments to filter Reminders to count.
     * @example
     * // Count the number of Reminders
     * const count = await prisma.reminder.count({
     *   where: {
     *     // ... the filter for the Reminders we want to count
     *   }
     * })
    **/
    count<T extends ReminderCountArgs>(
      args?: Subset<T, ReminderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReminderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReminderAggregateArgs>(args: Subset<T, ReminderAggregateArgs>): Prisma.PrismaPromise<GetReminderAggregateType<T>>

    /**
     * Group by Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReminderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReminderGroupByArgs['orderBy'] }
        : { orderBy?: ReminderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReminderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReminderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reminder model
   */
  readonly fields: ReminderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reminder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReminderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reminder model
   */
  interface ReminderFieldRefs {
    readonly id: FieldRef<"Reminder", 'String'>
    readonly taskId: FieldRef<"Reminder", 'String'>
    readonly timing: FieldRef<"Reminder", 'ReminderTiming'>
    readonly remindAt: FieldRef<"Reminder", 'DateTime'>
    readonly isNotified: FieldRef<"Reminder", 'Boolean'>
    readonly notifiedAt: FieldRef<"Reminder", 'DateTime'>
    readonly createdAt: FieldRef<"Reminder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reminder findUnique
   */
  export type ReminderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findUniqueOrThrow
   */
  export type ReminderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findFirst
   */
  export type ReminderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findFirstOrThrow
   */
  export type ReminderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findMany
   */
  export type ReminderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminders to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder create
   */
  export type ReminderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to create a Reminder.
     */
    data: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
  }

  /**
   * Reminder createMany
   */
  export type ReminderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
  }

  /**
   * Reminder createManyAndReturn
   */
  export type ReminderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reminder update
   */
  export type ReminderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to update a Reminder.
     */
    data: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
    /**
     * Choose, which Reminder to update.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder updateMany
   */
  export type ReminderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reminders.
     */
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyInput>
    /**
     * Filter which Reminders to update
     */
    where?: ReminderWhereInput
    /**
     * Limit how many Reminders to update.
     */
    limit?: number
  }

  /**
   * Reminder updateManyAndReturn
   */
  export type ReminderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * The data used to update Reminders.
     */
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyInput>
    /**
     * Filter which Reminders to update
     */
    where?: ReminderWhereInput
    /**
     * Limit how many Reminders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reminder upsert
   */
  export type ReminderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The filter to search for the Reminder to update in case it exists.
     */
    where: ReminderWhereUniqueInput
    /**
     * In case the Reminder found by the `where` argument doesn't exist, create a new Reminder with this data.
     */
    create: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
    /**
     * In case the Reminder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
  }

  /**
   * Reminder delete
   */
  export type ReminderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter which Reminder to delete.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder deleteMany
   */
  export type ReminderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminders to delete
     */
    where?: ReminderWhereInput
    /**
     * Limit how many Reminders to delete.
     */
    limit?: number
  }

  /**
   * Reminder without action
   */
  export type ReminderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
  }


  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    updatedAt: Date | null
  }

  export type SettingMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    updatedAt: Date | null
  }

  export type SettingCountAggregateOutputType = {
    id: number
    key: number
    value: number
    updatedAt: number
    _all: number
  }


  export type SettingMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    updatedAt?: true
  }

  export type SettingMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    updatedAt?: true
  }

  export type SettingCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    updatedAt?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    id: string
    key: string
    value: string | null
    updatedAt: Date
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }

  export type SettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "updatedAt", ExtArgs["result"]["setting"]>

  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string | null
      updatedAt: Date
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingWithIdOnly = await prisma.setting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingFindManyArgs>(args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends SettingCreateArgs>(args: SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingCreateManyArgs>(args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingWithIdOnly = await prisma.setting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends SettingDeleteArgs>(args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingUpdateArgs>(args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingDeleteManyArgs>(args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingUpdateManyArgs>(args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingWithIdOnly = await prisma.setting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Setting model
   */
  interface SettingFieldRefs {
    readonly id: FieldRef<"Setting", 'String'>
    readonly key: FieldRef<"Setting", 'String'>
    readonly value: FieldRef<"Setting", 'String'>
    readonly updatedAt: FieldRef<"Setting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
  }

  /**
   * Setting createManyAndReturn
   */
  export type SettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
  }

  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting updateManyAndReturn
   */
  export type SettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    level: 'level',
    topLevel: 'topLevel',
    sortOrder: 'sortOrder',
    collapsed: 'collapsed',
    color: 'color',
    icon: 'icon',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    parentId: 'parentId'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    createdAt: 'createdAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const TaskTagScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    tagId: 'tagId',
    createdAt: 'createdAt'
  };

  export type TaskTagScalarFieldEnum = (typeof TaskTagScalarFieldEnum)[keyof typeof TaskTagScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    categoryId: 'categoryId',
    parentId: 'parentId',
    startDate: 'startDate',
    dueDate: 'dueDate',
    completedAt: 'completedAt',
    npc: 'npc',
    notes: 'notes',
    towerLink: 'towerLink',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const RecurringTaskScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    frequency: 'frequency',
    interval: 'interval',
    weekDays: 'weekDays',
    monthDate: 'monthDate',
    monthWeekOrdinal: 'monthWeekOrdinal',
    monthWeekDay: 'monthWeekDay',
    yearMonth: 'yearMonth',
    yearDate: 'yearDate',
    customDays: 'customDays',
    nextDueDate: 'nextDueDate',
    endDate: 'endDate',
    lastCompletedAt: 'lastCompletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RecurringTaskScalarFieldEnum = (typeof RecurringTaskScalarFieldEnum)[keyof typeof RecurringTaskScalarFieldEnum]


  export const LedgerScalarFieldEnum: {
    id: 'id',
    type: 'type',
    name: 'name',
    description: 'description',
    details: 'details',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LedgerScalarFieldEnum = (typeof LedgerScalarFieldEnum)[keyof typeof LedgerScalarFieldEnum]


  export const LedgerTaskScalarFieldEnum: {
    id: 'id',
    ledgerId: 'ledgerId',
    taskId: 'taskId',
    createdAt: 'createdAt'
  };

  export type LedgerTaskScalarFieldEnum = (typeof LedgerTaskScalarFieldEnum)[keyof typeof LedgerTaskScalarFieldEnum]


  export const ReminderScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    timing: 'timing',
    remindAt: 'remindAt',
    isNotified: 'isNotified',
    notifiedAt: 'notifiedAt',
    createdAt: 'createdAt'
  };

  export type ReminderScalarFieldEnum = (typeof ReminderScalarFieldEnum)[keyof typeof ReminderScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    updatedAt: 'updatedAt'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'RecurringFrequency'
   */
  export type EnumRecurringFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecurringFrequency'>
    


  /**
   * Reference to a field of type 'LedgerType'
   */
  export type EnumLedgerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerType'>
    


  /**
   * Reference to a field of type 'ReminderTiming'
   */
  export type EnumReminderTimingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReminderTiming'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    level?: IntFilter<"Category"> | number
    topLevel?: StringFilter<"Category"> | string
    sortOrder?: IntFilter<"Category"> | number
    collapsed?: BoolFilter<"Category"> | boolean
    color?: StringNullableFilter<"Category"> | string | null
    icon?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    parentId?: StringNullableFilter<"Category"> | string | null
    parent?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    children?: CategoryListRelationFilter
    tasks?: TaskListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    topLevel?: SortOrder
    sortOrder?: SortOrder
    collapsed?: SortOrder
    color?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrderInput | SortOrder
    parent?: CategoryOrderByWithRelationInput
    children?: CategoryOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    level?: IntFilter<"Category"> | number
    topLevel?: StringFilter<"Category"> | string
    sortOrder?: IntFilter<"Category"> | number
    collapsed?: BoolFilter<"Category"> | boolean
    color?: StringNullableFilter<"Category"> | string | null
    icon?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    parentId?: StringNullableFilter<"Category"> | string | null
    parent?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    children?: CategoryListRelationFilter
    tasks?: TaskListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    topLevel?: SortOrder
    sortOrder?: SortOrder
    collapsed?: SortOrder
    color?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    level?: IntWithAggregatesFilter<"Category"> | number
    topLevel?: StringWithAggregatesFilter<"Category"> | string
    sortOrder?: IntWithAggregatesFilter<"Category"> | number
    collapsed?: BoolWithAggregatesFilter<"Category"> | boolean
    color?: StringNullableWithAggregatesFilter<"Category"> | string | null
    icon?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    parentId?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    color?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    taskTags?: TaskTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    taskTags?: TaskTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    color?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    taskTags?: TaskTagListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    color?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type TaskTagWhereInput = {
    AND?: TaskTagWhereInput | TaskTagWhereInput[]
    OR?: TaskTagWhereInput[]
    NOT?: TaskTagWhereInput | TaskTagWhereInput[]
    id?: StringFilter<"TaskTag"> | string
    taskId?: StringFilter<"TaskTag"> | string
    tagId?: StringFilter<"TaskTag"> | string
    createdAt?: DateTimeFilter<"TaskTag"> | Date | string
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type TaskTagOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    tag?: TagOrderByWithRelationInput
    task?: TaskOrderByWithRelationInput
  }

  export type TaskTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    taskId_tagId?: TaskTagTaskIdTagIdCompoundUniqueInput
    AND?: TaskTagWhereInput | TaskTagWhereInput[]
    OR?: TaskTagWhereInput[]
    NOT?: TaskTagWhereInput | TaskTagWhereInput[]
    taskId?: StringFilter<"TaskTag"> | string
    tagId?: StringFilter<"TaskTag"> | string
    createdAt?: DateTimeFilter<"TaskTag"> | Date | string
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id" | "taskId_tagId">

  export type TaskTagOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    _count?: TaskTagCountOrderByAggregateInput
    _max?: TaskTagMaxOrderByAggregateInput
    _min?: TaskTagMinOrderByAggregateInput
  }

  export type TaskTagScalarWhereWithAggregatesInput = {
    AND?: TaskTagScalarWhereWithAggregatesInput | TaskTagScalarWhereWithAggregatesInput[]
    OR?: TaskTagScalarWhereWithAggregatesInput[]
    NOT?: TaskTagScalarWhereWithAggregatesInput | TaskTagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskTag"> | string
    taskId?: StringWithAggregatesFilter<"TaskTag"> | string
    tagId?: StringWithAggregatesFilter<"TaskTag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TaskTag"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    categoryId?: StringNullableFilter<"Task"> | string | null
    parentId?: StringNullableFilter<"Task"> | string | null
    startDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    npc?: StringNullableFilter<"Task"> | string | null
    notes?: StringNullableFilter<"Task"> | string | null
    towerLink?: StringNullableFilter<"Task"> | string | null
    sortOrder?: IntFilter<"Task"> | number
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    ledgerItems?: LedgerTaskListRelationFilter
    recurringTask?: XOR<RecurringTaskNullableScalarRelationFilter, RecurringTaskWhereInput> | null
    reminders?: ReminderListRelationFilter
    taskTags?: TaskTagListRelationFilter
    parent?: XOR<TaskNullableScalarRelationFilter, TaskWhereInput> | null
    children?: TaskListRelationFilter
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    npc?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    towerLink?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ledgerItems?: LedgerTaskOrderByRelationAggregateInput
    recurringTask?: RecurringTaskOrderByWithRelationInput
    reminders?: ReminderOrderByRelationAggregateInput
    taskTags?: TaskTagOrderByRelationAggregateInput
    parent?: TaskOrderByWithRelationInput
    children?: TaskOrderByRelationAggregateInput
    category?: CategoryOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    categoryId?: StringNullableFilter<"Task"> | string | null
    parentId?: StringNullableFilter<"Task"> | string | null
    startDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    npc?: StringNullableFilter<"Task"> | string | null
    notes?: StringNullableFilter<"Task"> | string | null
    towerLink?: StringNullableFilter<"Task"> | string | null
    sortOrder?: IntFilter<"Task"> | number
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    ledgerItems?: LedgerTaskListRelationFilter
    recurringTask?: XOR<RecurringTaskNullableScalarRelationFilter, RecurringTaskWhereInput> | null
    reminders?: ReminderListRelationFilter
    taskTags?: TaskTagListRelationFilter
    parent?: XOR<TaskNullableScalarRelationFilter, TaskWhereInput> | null
    children?: TaskListRelationFilter
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    npc?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    towerLink?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    categoryId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    parentId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    npc?: StringNullableWithAggregatesFilter<"Task"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Task"> | string | null
    towerLink?: StringNullableWithAggregatesFilter<"Task"> | string | null
    sortOrder?: IntWithAggregatesFilter<"Task"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type RecurringTaskWhereInput = {
    AND?: RecurringTaskWhereInput | RecurringTaskWhereInput[]
    OR?: RecurringTaskWhereInput[]
    NOT?: RecurringTaskWhereInput | RecurringTaskWhereInput[]
    id?: StringFilter<"RecurringTask"> | string
    taskId?: StringFilter<"RecurringTask"> | string
    frequency?: EnumRecurringFrequencyFilter<"RecurringTask"> | $Enums.RecurringFrequency
    interval?: IntFilter<"RecurringTask"> | number
    weekDays?: StringNullableFilter<"RecurringTask"> | string | null
    monthDate?: IntNullableFilter<"RecurringTask"> | number | null
    monthWeekOrdinal?: IntNullableFilter<"RecurringTask"> | number | null
    monthWeekDay?: IntNullableFilter<"RecurringTask"> | number | null
    yearMonth?: IntNullableFilter<"RecurringTask"> | number | null
    yearDate?: IntNullableFilter<"RecurringTask"> | number | null
    customDays?: IntNullableFilter<"RecurringTask"> | number | null
    nextDueDate?: DateTimeNullableFilter<"RecurringTask"> | Date | string | null
    endDate?: DateTimeNullableFilter<"RecurringTask"> | Date | string | null
    lastCompletedAt?: DateTimeNullableFilter<"RecurringTask"> | Date | string | null
    createdAt?: DateTimeFilter<"RecurringTask"> | Date | string
    updatedAt?: DateTimeFilter<"RecurringTask"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type RecurringTaskOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    frequency?: SortOrder
    interval?: SortOrder
    weekDays?: SortOrderInput | SortOrder
    monthDate?: SortOrderInput | SortOrder
    monthWeekOrdinal?: SortOrderInput | SortOrder
    monthWeekDay?: SortOrderInput | SortOrder
    yearMonth?: SortOrderInput | SortOrder
    yearDate?: SortOrderInput | SortOrder
    customDays?: SortOrderInput | SortOrder
    nextDueDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    lastCompletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    task?: TaskOrderByWithRelationInput
  }

  export type RecurringTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    taskId?: string
    AND?: RecurringTaskWhereInput | RecurringTaskWhereInput[]
    OR?: RecurringTaskWhereInput[]
    NOT?: RecurringTaskWhereInput | RecurringTaskWhereInput[]
    frequency?: EnumRecurringFrequencyFilter<"RecurringTask"> | $Enums.RecurringFrequency
    interval?: IntFilter<"RecurringTask"> | number
    weekDays?: StringNullableFilter<"RecurringTask"> | string | null
    monthDate?: IntNullableFilter<"RecurringTask"> | number | null
    monthWeekOrdinal?: IntNullableFilter<"RecurringTask"> | number | null
    monthWeekDay?: IntNullableFilter<"RecurringTask"> | number | null
    yearMonth?: IntNullableFilter<"RecurringTask"> | number | null
    yearDate?: IntNullableFilter<"RecurringTask"> | number | null
    customDays?: IntNullableFilter<"RecurringTask"> | number | null
    nextDueDate?: DateTimeNullableFilter<"RecurringTask"> | Date | string | null
    endDate?: DateTimeNullableFilter<"RecurringTask"> | Date | string | null
    lastCompletedAt?: DateTimeNullableFilter<"RecurringTask"> | Date | string | null
    createdAt?: DateTimeFilter<"RecurringTask"> | Date | string
    updatedAt?: DateTimeFilter<"RecurringTask"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id" | "taskId">

  export type RecurringTaskOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    frequency?: SortOrder
    interval?: SortOrder
    weekDays?: SortOrderInput | SortOrder
    monthDate?: SortOrderInput | SortOrder
    monthWeekOrdinal?: SortOrderInput | SortOrder
    monthWeekDay?: SortOrderInput | SortOrder
    yearMonth?: SortOrderInput | SortOrder
    yearDate?: SortOrderInput | SortOrder
    customDays?: SortOrderInput | SortOrder
    nextDueDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    lastCompletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecurringTaskCountOrderByAggregateInput
    _avg?: RecurringTaskAvgOrderByAggregateInput
    _max?: RecurringTaskMaxOrderByAggregateInput
    _min?: RecurringTaskMinOrderByAggregateInput
    _sum?: RecurringTaskSumOrderByAggregateInput
  }

  export type RecurringTaskScalarWhereWithAggregatesInput = {
    AND?: RecurringTaskScalarWhereWithAggregatesInput | RecurringTaskScalarWhereWithAggregatesInput[]
    OR?: RecurringTaskScalarWhereWithAggregatesInput[]
    NOT?: RecurringTaskScalarWhereWithAggregatesInput | RecurringTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecurringTask"> | string
    taskId?: StringWithAggregatesFilter<"RecurringTask"> | string
    frequency?: EnumRecurringFrequencyWithAggregatesFilter<"RecurringTask"> | $Enums.RecurringFrequency
    interval?: IntWithAggregatesFilter<"RecurringTask"> | number
    weekDays?: StringNullableWithAggregatesFilter<"RecurringTask"> | string | null
    monthDate?: IntNullableWithAggregatesFilter<"RecurringTask"> | number | null
    monthWeekOrdinal?: IntNullableWithAggregatesFilter<"RecurringTask"> | number | null
    monthWeekDay?: IntNullableWithAggregatesFilter<"RecurringTask"> | number | null
    yearMonth?: IntNullableWithAggregatesFilter<"RecurringTask"> | number | null
    yearDate?: IntNullableWithAggregatesFilter<"RecurringTask"> | number | null
    customDays?: IntNullableWithAggregatesFilter<"RecurringTask"> | number | null
    nextDueDate?: DateTimeNullableWithAggregatesFilter<"RecurringTask"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"RecurringTask"> | Date | string | null
    lastCompletedAt?: DateTimeNullableWithAggregatesFilter<"RecurringTask"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RecurringTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RecurringTask"> | Date | string
  }

  export type LedgerWhereInput = {
    AND?: LedgerWhereInput | LedgerWhereInput[]
    OR?: LedgerWhereInput[]
    NOT?: LedgerWhereInput | LedgerWhereInput[]
    id?: StringFilter<"Ledger"> | string
    type?: EnumLedgerTypeFilter<"Ledger"> | $Enums.LedgerType
    name?: StringFilter<"Ledger"> | string
    description?: StringNullableFilter<"Ledger"> | string | null
    details?: StringNullableFilter<"Ledger"> | string | null
    status?: StringFilter<"Ledger"> | string
    createdAt?: DateTimeFilter<"Ledger"> | Date | string
    updatedAt?: DateTimeFilter<"Ledger"> | Date | string
    tasks?: LedgerTaskListRelationFilter
  }

  export type LedgerOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tasks?: LedgerTaskOrderByRelationAggregateInput
  }

  export type LedgerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LedgerWhereInput | LedgerWhereInput[]
    OR?: LedgerWhereInput[]
    NOT?: LedgerWhereInput | LedgerWhereInput[]
    type?: EnumLedgerTypeFilter<"Ledger"> | $Enums.LedgerType
    name?: StringFilter<"Ledger"> | string
    description?: StringNullableFilter<"Ledger"> | string | null
    details?: StringNullableFilter<"Ledger"> | string | null
    status?: StringFilter<"Ledger"> | string
    createdAt?: DateTimeFilter<"Ledger"> | Date | string
    updatedAt?: DateTimeFilter<"Ledger"> | Date | string
    tasks?: LedgerTaskListRelationFilter
  }, "id">

  export type LedgerOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LedgerCountOrderByAggregateInput
    _max?: LedgerMaxOrderByAggregateInput
    _min?: LedgerMinOrderByAggregateInput
  }

  export type LedgerScalarWhereWithAggregatesInput = {
    AND?: LedgerScalarWhereWithAggregatesInput | LedgerScalarWhereWithAggregatesInput[]
    OR?: LedgerScalarWhereWithAggregatesInput[]
    NOT?: LedgerScalarWhereWithAggregatesInput | LedgerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ledger"> | string
    type?: EnumLedgerTypeWithAggregatesFilter<"Ledger"> | $Enums.LedgerType
    name?: StringWithAggregatesFilter<"Ledger"> | string
    description?: StringNullableWithAggregatesFilter<"Ledger"> | string | null
    details?: StringNullableWithAggregatesFilter<"Ledger"> | string | null
    status?: StringWithAggregatesFilter<"Ledger"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Ledger"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ledger"> | Date | string
  }

  export type LedgerTaskWhereInput = {
    AND?: LedgerTaskWhereInput | LedgerTaskWhereInput[]
    OR?: LedgerTaskWhereInput[]
    NOT?: LedgerTaskWhereInput | LedgerTaskWhereInput[]
    id?: StringFilter<"LedgerTask"> | string
    ledgerId?: StringFilter<"LedgerTask"> | string
    taskId?: StringFilter<"LedgerTask"> | string
    createdAt?: DateTimeFilter<"LedgerTask"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    ledger?: XOR<LedgerScalarRelationFilter, LedgerWhereInput>
  }

  export type LedgerTaskOrderByWithRelationInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    taskId?: SortOrder
    createdAt?: SortOrder
    task?: TaskOrderByWithRelationInput
    ledger?: LedgerOrderByWithRelationInput
  }

  export type LedgerTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ledgerId_taskId?: LedgerTaskLedgerIdTaskIdCompoundUniqueInput
    AND?: LedgerTaskWhereInput | LedgerTaskWhereInput[]
    OR?: LedgerTaskWhereInput[]
    NOT?: LedgerTaskWhereInput | LedgerTaskWhereInput[]
    ledgerId?: StringFilter<"LedgerTask"> | string
    taskId?: StringFilter<"LedgerTask"> | string
    createdAt?: DateTimeFilter<"LedgerTask"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    ledger?: XOR<LedgerScalarRelationFilter, LedgerWhereInput>
  }, "id" | "ledgerId_taskId">

  export type LedgerTaskOrderByWithAggregationInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    taskId?: SortOrder
    createdAt?: SortOrder
    _count?: LedgerTaskCountOrderByAggregateInput
    _max?: LedgerTaskMaxOrderByAggregateInput
    _min?: LedgerTaskMinOrderByAggregateInput
  }

  export type LedgerTaskScalarWhereWithAggregatesInput = {
    AND?: LedgerTaskScalarWhereWithAggregatesInput | LedgerTaskScalarWhereWithAggregatesInput[]
    OR?: LedgerTaskScalarWhereWithAggregatesInput[]
    NOT?: LedgerTaskScalarWhereWithAggregatesInput | LedgerTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LedgerTask"> | string
    ledgerId?: StringWithAggregatesFilter<"LedgerTask"> | string
    taskId?: StringWithAggregatesFilter<"LedgerTask"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LedgerTask"> | Date | string
  }

  export type ReminderWhereInput = {
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    id?: StringFilter<"Reminder"> | string
    taskId?: StringFilter<"Reminder"> | string
    timing?: EnumReminderTimingFilter<"Reminder"> | $Enums.ReminderTiming
    remindAt?: DateTimeFilter<"Reminder"> | Date | string
    isNotified?: BoolFilter<"Reminder"> | boolean
    notifiedAt?: DateTimeNullableFilter<"Reminder"> | Date | string | null
    createdAt?: DateTimeFilter<"Reminder"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type ReminderOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    timing?: SortOrder
    remindAt?: SortOrder
    isNotified?: SortOrder
    notifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    task?: TaskOrderByWithRelationInput
  }

  export type ReminderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    taskId?: StringFilter<"Reminder"> | string
    timing?: EnumReminderTimingFilter<"Reminder"> | $Enums.ReminderTiming
    remindAt?: DateTimeFilter<"Reminder"> | Date | string
    isNotified?: BoolFilter<"Reminder"> | boolean
    notifiedAt?: DateTimeNullableFilter<"Reminder"> | Date | string | null
    createdAt?: DateTimeFilter<"Reminder"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id">

  export type ReminderOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    timing?: SortOrder
    remindAt?: SortOrder
    isNotified?: SortOrder
    notifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReminderCountOrderByAggregateInput
    _max?: ReminderMaxOrderByAggregateInput
    _min?: ReminderMinOrderByAggregateInput
  }

  export type ReminderScalarWhereWithAggregatesInput = {
    AND?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    OR?: ReminderScalarWhereWithAggregatesInput[]
    NOT?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reminder"> | string
    taskId?: StringWithAggregatesFilter<"Reminder"> | string
    timing?: EnumReminderTimingWithAggregatesFilter<"Reminder"> | $Enums.ReminderTiming
    remindAt?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
    isNotified?: BoolWithAggregatesFilter<"Reminder"> | boolean
    notifiedAt?: DateTimeNullableWithAggregatesFilter<"Reminder"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
  }

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    id?: StringFilter<"Setting"> | string
    key?: StringFilter<"Setting"> | string
    value?: StringNullableFilter<"Setting"> | string | null
    updatedAt?: DateTimeFilter<"Setting"> | Date | string
  }

  export type SettingOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    value?: StringNullableFilter<"Setting"> | string | null
    updatedAt?: DateTimeFilter<"Setting"> | Date | string
  }, "id" | "key">

  export type SettingOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: SettingCountOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Setting"> | string
    key?: StringWithAggregatesFilter<"Setting"> | string
    value?: StringNullableWithAggregatesFilter<"Setting"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Setting"> | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    level?: number
    topLevel: string
    sortOrder?: number
    collapsed?: boolean
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    children?: CategoryCreateNestedManyWithoutParentInput
    tasks?: TaskCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    level?: number
    topLevel: string
    sortOrder?: number
    collapsed?: boolean
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    tasks?: TaskUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    topLevel?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    collapsed?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    children?: CategoryUpdateManyWithoutParentNestedInput
    tasks?: TaskUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    topLevel?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    collapsed?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    level?: number
    topLevel: string
    sortOrder?: number
    collapsed?: boolean
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    topLevel?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    collapsed?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    topLevel?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    collapsed?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagCreateInput = {
    id?: string
    name: string
    color?: string
    createdAt?: Date | string
    taskTags?: TaskTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    color?: string
    createdAt?: Date | string
    taskTags?: TaskTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskTags?: TaskTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskTags?: TaskTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    color?: string
    createdAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskTagCreateInput = {
    id?: string
    createdAt?: Date | string
    tag: TagCreateNestedOneWithoutTaskTagsInput
    task: TaskCreateNestedOneWithoutTaskTagsInput
  }

  export type TaskTagUncheckedCreateInput = {
    id?: string
    taskId: string
    tagId: string
    createdAt?: Date | string
  }

  export type TaskTagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUpdateOneRequiredWithoutTaskTagsNestedInput
    task?: TaskUpdateOneRequiredWithoutTaskTagsNestedInput
  }

  export type TaskTagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskTagCreateManyInput = {
    id?: string
    taskId: string
    tagId: string
    createdAt?: Date | string
  }

  export type TaskTagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskTagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    npc?: string | null
    notes?: string | null
    towerLink?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ledgerItems?: LedgerTaskCreateNestedManyWithoutTaskInput
    recurringTask?: RecurringTaskCreateNestedOneWithoutTaskInput
    reminders?: ReminderCreateNestedManyWithoutTaskInput
    taskTags?: TaskTagCreateNestedManyWithoutTaskInput
    parent?: TaskCreateNestedOneWithoutChildrenInput
    children?: TaskCreateNestedManyWithoutParentInput
    category?: CategoryCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    categoryId?: string | null
    parentId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    npc?: string | null
    notes?: string | null
    towerLink?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ledgerItems?: LedgerTaskUncheckedCreateNestedManyWithoutTaskInput
    recurringTask?: RecurringTaskUncheckedCreateNestedOneWithoutTaskInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutTaskInput
    taskTags?: TaskTagUncheckedCreateNestedManyWithoutTaskInput
    children?: TaskUncheckedCreateNestedManyWithoutParentInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npc?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    towerLink?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledgerItems?: LedgerTaskUpdateManyWithoutTaskNestedInput
    recurringTask?: RecurringTaskUpdateOneWithoutTaskNestedInput
    reminders?: ReminderUpdateManyWithoutTaskNestedInput
    taskTags?: TaskTagUpdateManyWithoutTaskNestedInput
    parent?: TaskUpdateOneWithoutChildrenNestedInput
    children?: TaskUpdateManyWithoutParentNestedInput
    category?: CategoryUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npc?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    towerLink?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledgerItems?: LedgerTaskUncheckedUpdateManyWithoutTaskNestedInput
    recurringTask?: RecurringTaskUncheckedUpdateOneWithoutTaskNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutTaskNestedInput
    taskTags?: TaskTagUncheckedUpdateManyWithoutTaskNestedInput
    children?: TaskUncheckedUpdateManyWithoutParentNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    categoryId?: string | null
    parentId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    npc?: string | null
    notes?: string | null
    towerLink?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npc?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    towerLink?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npc?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    towerLink?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringTaskCreateInput = {
    id?: string
    frequency: $Enums.RecurringFrequency
    interval?: number
    weekDays?: string | null
    monthDate?: number | null
    monthWeekOrdinal?: number | null
    monthWeekDay?: number | null
    yearMonth?: number | null
    yearDate?: number | null
    customDays?: number | null
    nextDueDate?: Date | string | null
    endDate?: Date | string | null
    lastCompletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutRecurringTaskInput
  }

  export type RecurringTaskUncheckedCreateInput = {
    id?: string
    taskId: string
    frequency: $Enums.RecurringFrequency
    interval?: number
    weekDays?: string | null
    monthDate?: number | null
    monthWeekOrdinal?: number | null
    monthWeekDay?: number | null
    yearMonth?: number | null
    yearDate?: number | null
    customDays?: number | null
    nextDueDate?: Date | string | null
    endDate?: Date | string | null
    lastCompletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    interval?: IntFieldUpdateOperationsInput | number
    weekDays?: NullableStringFieldUpdateOperationsInput | string | null
    monthDate?: NullableIntFieldUpdateOperationsInput | number | null
    monthWeekOrdinal?: NullableIntFieldUpdateOperationsInput | number | null
    monthWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    yearMonth?: NullableIntFieldUpdateOperationsInput | number | null
    yearDate?: NullableIntFieldUpdateOperationsInput | number | null
    customDays?: NullableIntFieldUpdateOperationsInput | number | null
    nextDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutRecurringTaskNestedInput
  }

  export type RecurringTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    interval?: IntFieldUpdateOperationsInput | number
    weekDays?: NullableStringFieldUpdateOperationsInput | string | null
    monthDate?: NullableIntFieldUpdateOperationsInput | number | null
    monthWeekOrdinal?: NullableIntFieldUpdateOperationsInput | number | null
    monthWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    yearMonth?: NullableIntFieldUpdateOperationsInput | number | null
    yearDate?: NullableIntFieldUpdateOperationsInput | number | null
    customDays?: NullableIntFieldUpdateOperationsInput | number | null
    nextDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringTaskCreateManyInput = {
    id?: string
    taskId: string
    frequency: $Enums.RecurringFrequency
    interval?: number
    weekDays?: string | null
    monthDate?: number | null
    monthWeekOrdinal?: number | null
    monthWeekDay?: number | null
    yearMonth?: number | null
    yearDate?: number | null
    customDays?: number | null
    nextDueDate?: Date | string | null
    endDate?: Date | string | null
    lastCompletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    interval?: IntFieldUpdateOperationsInput | number
    weekDays?: NullableStringFieldUpdateOperationsInput | string | null
    monthDate?: NullableIntFieldUpdateOperationsInput | number | null
    monthWeekOrdinal?: NullableIntFieldUpdateOperationsInput | number | null
    monthWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    yearMonth?: NullableIntFieldUpdateOperationsInput | number | null
    yearDate?: NullableIntFieldUpdateOperationsInput | number | null
    customDays?: NullableIntFieldUpdateOperationsInput | number | null
    nextDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    interval?: IntFieldUpdateOperationsInput | number
    weekDays?: NullableStringFieldUpdateOperationsInput | string | null
    monthDate?: NullableIntFieldUpdateOperationsInput | number | null
    monthWeekOrdinal?: NullableIntFieldUpdateOperationsInput | number | null
    monthWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    yearMonth?: NullableIntFieldUpdateOperationsInput | number | null
    yearDate?: NullableIntFieldUpdateOperationsInput | number | null
    customDays?: NullableIntFieldUpdateOperationsInput | number | null
    nextDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerCreateInput = {
    id?: string
    type: $Enums.LedgerType
    name: string
    description?: string | null
    details?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: LedgerTaskCreateNestedManyWithoutLedgerInput
  }

  export type LedgerUncheckedCreateInput = {
    id?: string
    type: $Enums.LedgerType
    name: string
    description?: string | null
    details?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: LedgerTaskUncheckedCreateNestedManyWithoutLedgerInput
  }

  export type LedgerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: LedgerTaskUpdateManyWithoutLedgerNestedInput
  }

  export type LedgerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: LedgerTaskUncheckedUpdateManyWithoutLedgerNestedInput
  }

  export type LedgerCreateManyInput = {
    id?: string
    type: $Enums.LedgerType
    name: string
    description?: string | null
    details?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LedgerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerTaskCreateInput = {
    id?: string
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutLedgerItemsInput
    ledger: LedgerCreateNestedOneWithoutTasksInput
  }

  export type LedgerTaskUncheckedCreateInput = {
    id?: string
    ledgerId: string
    taskId: string
    createdAt?: Date | string
  }

  export type LedgerTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutLedgerItemsNestedInput
    ledger?: LedgerUpdateOneRequiredWithoutTasksNestedInput
  }

  export type LedgerTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ledgerId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerTaskCreateManyInput = {
    id?: string
    ledgerId: string
    taskId: string
    createdAt?: Date | string
  }

  export type LedgerTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ledgerId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderCreateInput = {
    id?: string
    timing: $Enums.ReminderTiming
    remindAt: Date | string
    isNotified?: boolean
    notifiedAt?: Date | string | null
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutRemindersInput
  }

  export type ReminderUncheckedCreateInput = {
    id?: string
    taskId: string
    timing: $Enums.ReminderTiming
    remindAt: Date | string
    isNotified?: boolean
    notifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReminderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timing?: EnumReminderTimingFieldUpdateOperationsInput | $Enums.ReminderTiming
    remindAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isNotified?: BoolFieldUpdateOperationsInput | boolean
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type ReminderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    timing?: EnumReminderTimingFieldUpdateOperationsInput | $Enums.ReminderTiming
    remindAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isNotified?: BoolFieldUpdateOperationsInput | boolean
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderCreateManyInput = {
    id?: string
    taskId: string
    timing: $Enums.ReminderTiming
    remindAt: Date | string
    isNotified?: boolean
    notifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReminderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timing?: EnumReminderTimingFieldUpdateOperationsInput | $Enums.ReminderTiming
    remindAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isNotified?: BoolFieldUpdateOperationsInput | boolean
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    timing?: EnumReminderTimingFieldUpdateOperationsInput | $Enums.ReminderTiming
    remindAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isNotified?: BoolFieldUpdateOperationsInput | boolean
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingCreateInput = {
    id?: string
    key: string
    value?: string | null
    updatedAt?: Date | string
  }

  export type SettingUncheckedCreateInput = {
    id?: string
    key: string
    value?: string | null
    updatedAt?: Date | string
  }

  export type SettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingCreateManyInput = {
    id?: string
    key: string
    value?: string | null
    updatedAt?: Date | string
  }

  export type SettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    topLevel?: SortOrder
    sortOrder?: SortOrder
    collapsed?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    level?: SortOrder
    sortOrder?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    topLevel?: SortOrder
    sortOrder?: SortOrder
    collapsed?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    topLevel?: SortOrder
    sortOrder?: SortOrder
    collapsed?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    level?: SortOrder
    sortOrder?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TaskTagListRelationFilter = {
    every?: TaskTagWhereInput
    some?: TaskTagWhereInput
    none?: TaskTagWhereInput
  }

  export type TaskTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type TaskTagTaskIdTagIdCompoundUniqueInput = {
    taskId: string
    tagId: string
  }

  export type TaskTagCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskTagMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskTagMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type LedgerTaskListRelationFilter = {
    every?: LedgerTaskWhereInput
    some?: LedgerTaskWhereInput
    none?: LedgerTaskWhereInput
  }

  export type RecurringTaskNullableScalarRelationFilter = {
    is?: RecurringTaskWhereInput | null
    isNot?: RecurringTaskWhereInput | null
  }

  export type ReminderListRelationFilter = {
    every?: ReminderWhereInput
    some?: ReminderWhereInput
    none?: ReminderWhereInput
  }

  export type TaskNullableScalarRelationFilter = {
    is?: TaskWhereInput | null
    isNot?: TaskWhereInput | null
  }

  export type LedgerTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReminderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    parentId?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    completedAt?: SortOrder
    npc?: SortOrder
    notes?: SortOrder
    towerLink?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    parentId?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    completedAt?: SortOrder
    npc?: SortOrder
    notes?: SortOrder
    towerLink?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    parentId?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    completedAt?: SortOrder
    npc?: SortOrder
    notes?: SortOrder
    towerLink?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRecurringFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringFrequency | EnumRecurringFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringFrequency[]
    notIn?: $Enums.RecurringFrequency[]
    not?: NestedEnumRecurringFrequencyFilter<$PrismaModel> | $Enums.RecurringFrequency
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RecurringTaskCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    frequency?: SortOrder
    interval?: SortOrder
    weekDays?: SortOrder
    monthDate?: SortOrder
    monthWeekOrdinal?: SortOrder
    monthWeekDay?: SortOrder
    yearMonth?: SortOrder
    yearDate?: SortOrder
    customDays?: SortOrder
    nextDueDate?: SortOrder
    endDate?: SortOrder
    lastCompletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecurringTaskAvgOrderByAggregateInput = {
    interval?: SortOrder
    monthDate?: SortOrder
    monthWeekOrdinal?: SortOrder
    monthWeekDay?: SortOrder
    yearMonth?: SortOrder
    yearDate?: SortOrder
    customDays?: SortOrder
  }

  export type RecurringTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    frequency?: SortOrder
    interval?: SortOrder
    weekDays?: SortOrder
    monthDate?: SortOrder
    monthWeekOrdinal?: SortOrder
    monthWeekDay?: SortOrder
    yearMonth?: SortOrder
    yearDate?: SortOrder
    customDays?: SortOrder
    nextDueDate?: SortOrder
    endDate?: SortOrder
    lastCompletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecurringTaskMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    frequency?: SortOrder
    interval?: SortOrder
    weekDays?: SortOrder
    monthDate?: SortOrder
    monthWeekOrdinal?: SortOrder
    monthWeekDay?: SortOrder
    yearMonth?: SortOrder
    yearDate?: SortOrder
    customDays?: SortOrder
    nextDueDate?: SortOrder
    endDate?: SortOrder
    lastCompletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecurringTaskSumOrderByAggregateInput = {
    interval?: SortOrder
    monthDate?: SortOrder
    monthWeekOrdinal?: SortOrder
    monthWeekDay?: SortOrder
    yearMonth?: SortOrder
    yearDate?: SortOrder
    customDays?: SortOrder
  }

  export type EnumRecurringFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringFrequency | EnumRecurringFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringFrequency[]
    notIn?: $Enums.RecurringFrequency[]
    not?: NestedEnumRecurringFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.RecurringFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecurringFrequencyFilter<$PrismaModel>
    _max?: NestedEnumRecurringFrequencyFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumLedgerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[]
    notIn?: $Enums.LedgerType[]
    not?: NestedEnumLedgerTypeFilter<$PrismaModel> | $Enums.LedgerType
  }

  export type LedgerCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    details?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LedgerMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    details?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LedgerMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    details?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLedgerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[]
    notIn?: $Enums.LedgerType[]
    not?: NestedEnumLedgerTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLedgerTypeFilter<$PrismaModel>
    _max?: NestedEnumLedgerTypeFilter<$PrismaModel>
  }

  export type LedgerScalarRelationFilter = {
    is?: LedgerWhereInput
    isNot?: LedgerWhereInput
  }

  export type LedgerTaskLedgerIdTaskIdCompoundUniqueInput = {
    ledgerId: string
    taskId: string
  }

  export type LedgerTaskCountOrderByAggregateInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    taskId?: SortOrder
    createdAt?: SortOrder
  }

  export type LedgerTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    taskId?: SortOrder
    createdAt?: SortOrder
  }

  export type LedgerTaskMinOrderByAggregateInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    taskId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumReminderTimingFilter<$PrismaModel = never> = {
    equals?: $Enums.ReminderTiming | EnumReminderTimingFieldRefInput<$PrismaModel>
    in?: $Enums.ReminderTiming[]
    notIn?: $Enums.ReminderTiming[]
    not?: NestedEnumReminderTimingFilter<$PrismaModel> | $Enums.ReminderTiming
  }

  export type ReminderCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    timing?: SortOrder
    remindAt?: SortOrder
    isNotified?: SortOrder
    notifiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ReminderMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    timing?: SortOrder
    remindAt?: SortOrder
    isNotified?: SortOrder
    notifiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ReminderMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    timing?: SortOrder
    remindAt?: SortOrder
    isNotified?: SortOrder
    notifiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumReminderTimingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReminderTiming | EnumReminderTimingFieldRefInput<$PrismaModel>
    in?: $Enums.ReminderTiming[]
    notIn?: $Enums.ReminderTiming[]
    not?: NestedEnumReminderTimingWithAggregatesFilter<$PrismaModel> | $Enums.ReminderTiming
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReminderTimingFilter<$PrismaModel>
    _max?: NestedEnumReminderTimingFilter<$PrismaModel>
  }

  export type SettingCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryCreateNestedOneWithoutChildrenInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TaskCreateWithoutCategoryInput, TaskUncheckedCreateWithoutCategoryInput> | TaskCreateWithoutCategoryInput[] | TaskUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCategoryInput | TaskCreateOrConnectWithoutCategoryInput[]
    createMany?: TaskCreateManyCategoryInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TaskCreateWithoutCategoryInput, TaskUncheckedCreateWithoutCategoryInput> | TaskCreateWithoutCategoryInput[] | TaskUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCategoryInput | TaskCreateOrConnectWithoutCategoryInput[]
    createMany?: TaskCreateManyCategoryInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategoryUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    upsert?: CategoryUpsertWithoutChildrenInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutChildrenInput, CategoryUpdateWithoutChildrenInput>, CategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type CategoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TaskCreateWithoutCategoryInput, TaskUncheckedCreateWithoutCategoryInput> | TaskCreateWithoutCategoryInput[] | TaskUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCategoryInput | TaskCreateOrConnectWithoutCategoryInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCategoryInput | TaskUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TaskCreateManyCategoryInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCategoryInput | TaskUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCategoryInput | TaskUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TaskCreateWithoutCategoryInput, TaskUncheckedCreateWithoutCategoryInput> | TaskCreateWithoutCategoryInput[] | TaskUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCategoryInput | TaskCreateOrConnectWithoutCategoryInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCategoryInput | TaskUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TaskCreateManyCategoryInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCategoryInput | TaskUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCategoryInput | TaskUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskTagCreateNestedManyWithoutTagInput = {
    create?: XOR<TaskTagCreateWithoutTagInput, TaskTagUncheckedCreateWithoutTagInput> | TaskTagCreateWithoutTagInput[] | TaskTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTagInput | TaskTagCreateOrConnectWithoutTagInput[]
    createMany?: TaskTagCreateManyTagInputEnvelope
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
  }

  export type TaskTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<TaskTagCreateWithoutTagInput, TaskTagUncheckedCreateWithoutTagInput> | TaskTagCreateWithoutTagInput[] | TaskTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTagInput | TaskTagCreateOrConnectWithoutTagInput[]
    createMany?: TaskTagCreateManyTagInputEnvelope
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
  }

  export type TaskTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<TaskTagCreateWithoutTagInput, TaskTagUncheckedCreateWithoutTagInput> | TaskTagCreateWithoutTagInput[] | TaskTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTagInput | TaskTagCreateOrConnectWithoutTagInput[]
    upsert?: TaskTagUpsertWithWhereUniqueWithoutTagInput | TaskTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TaskTagCreateManyTagInputEnvelope
    set?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    disconnect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    delete?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    update?: TaskTagUpdateWithWhereUniqueWithoutTagInput | TaskTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TaskTagUpdateManyWithWhereWithoutTagInput | TaskTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
  }

  export type TaskTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<TaskTagCreateWithoutTagInput, TaskTagUncheckedCreateWithoutTagInput> | TaskTagCreateWithoutTagInput[] | TaskTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTagInput | TaskTagCreateOrConnectWithoutTagInput[]
    upsert?: TaskTagUpsertWithWhereUniqueWithoutTagInput | TaskTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TaskTagCreateManyTagInputEnvelope
    set?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    disconnect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    delete?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    update?: TaskTagUpdateWithWhereUniqueWithoutTagInput | TaskTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TaskTagUpdateManyWithWhereWithoutTagInput | TaskTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
  }

  export type TagCreateNestedOneWithoutTaskTagsInput = {
    create?: XOR<TagCreateWithoutTaskTagsInput, TagUncheckedCreateWithoutTaskTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutTaskTagsInput
    connect?: TagWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutTaskTagsInput = {
    create?: XOR<TaskCreateWithoutTaskTagsInput, TaskUncheckedCreateWithoutTaskTagsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTaskTagsInput
    connect?: TaskWhereUniqueInput
  }

  export type TagUpdateOneRequiredWithoutTaskTagsNestedInput = {
    create?: XOR<TagCreateWithoutTaskTagsInput, TagUncheckedCreateWithoutTaskTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutTaskTagsInput
    upsert?: TagUpsertWithoutTaskTagsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutTaskTagsInput, TagUpdateWithoutTaskTagsInput>, TagUncheckedUpdateWithoutTaskTagsInput>
  }

  export type TaskUpdateOneRequiredWithoutTaskTagsNestedInput = {
    create?: XOR<TaskCreateWithoutTaskTagsInput, TaskUncheckedCreateWithoutTaskTagsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTaskTagsInput
    upsert?: TaskUpsertWithoutTaskTagsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutTaskTagsInput, TaskUpdateWithoutTaskTagsInput>, TaskUncheckedUpdateWithoutTaskTagsInput>
  }

  export type LedgerTaskCreateNestedManyWithoutTaskInput = {
    create?: XOR<LedgerTaskCreateWithoutTaskInput, LedgerTaskUncheckedCreateWithoutTaskInput> | LedgerTaskCreateWithoutTaskInput[] | LedgerTaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: LedgerTaskCreateOrConnectWithoutTaskInput | LedgerTaskCreateOrConnectWithoutTaskInput[]
    createMany?: LedgerTaskCreateManyTaskInputEnvelope
    connect?: LedgerTaskWhereUniqueInput | LedgerTaskWhereUniqueInput[]
  }

  export type RecurringTaskCreateNestedOneWithoutTaskInput = {
    create?: XOR<RecurringTaskCreateWithoutTaskInput, RecurringTaskUncheckedCreateWithoutTaskInput>
    connectOrCreate?: RecurringTaskCreateOrConnectWithoutTaskInput
    connect?: RecurringTaskWhereUniqueInput
  }

  export type ReminderCreateNestedManyWithoutTaskInput = {
    create?: XOR<ReminderCreateWithoutTaskInput, ReminderUncheckedCreateWithoutTaskInput> | ReminderCreateWithoutTaskInput[] | ReminderUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutTaskInput | ReminderCreateOrConnectWithoutTaskInput[]
    createMany?: ReminderCreateManyTaskInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type TaskTagCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskTagCreateWithoutTaskInput, TaskTagUncheckedCreateWithoutTaskInput> | TaskTagCreateWithoutTaskInput[] | TaskTagUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTaskInput | TaskTagCreateOrConnectWithoutTaskInput[]
    createMany?: TaskTagCreateManyTaskInputEnvelope
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
  }

  export type TaskCreateNestedOneWithoutChildrenInput = {
    create?: XOR<TaskCreateWithoutChildrenInput, TaskUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: TaskCreateOrConnectWithoutChildrenInput
    connect?: TaskWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutParentInput = {
    create?: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput> | TaskCreateWithoutParentInput[] | TaskUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentInput | TaskCreateOrConnectWithoutParentInput[]
    createMany?: TaskCreateManyParentInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutTasksInput = {
    create?: XOR<CategoryCreateWithoutTasksInput, CategoryUncheckedCreateWithoutTasksInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTasksInput
    connect?: CategoryWhereUniqueInput
  }

  export type LedgerTaskUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<LedgerTaskCreateWithoutTaskInput, LedgerTaskUncheckedCreateWithoutTaskInput> | LedgerTaskCreateWithoutTaskInput[] | LedgerTaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: LedgerTaskCreateOrConnectWithoutTaskInput | LedgerTaskCreateOrConnectWithoutTaskInput[]
    createMany?: LedgerTaskCreateManyTaskInputEnvelope
    connect?: LedgerTaskWhereUniqueInput | LedgerTaskWhereUniqueInput[]
  }

  export type RecurringTaskUncheckedCreateNestedOneWithoutTaskInput = {
    create?: XOR<RecurringTaskCreateWithoutTaskInput, RecurringTaskUncheckedCreateWithoutTaskInput>
    connectOrCreate?: RecurringTaskCreateOrConnectWithoutTaskInput
    connect?: RecurringTaskWhereUniqueInput
  }

  export type ReminderUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<ReminderCreateWithoutTaskInput, ReminderUncheckedCreateWithoutTaskInput> | ReminderCreateWithoutTaskInput[] | ReminderUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutTaskInput | ReminderCreateOrConnectWithoutTaskInput[]
    createMany?: ReminderCreateManyTaskInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type TaskTagUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskTagCreateWithoutTaskInput, TaskTagUncheckedCreateWithoutTaskInput> | TaskTagCreateWithoutTaskInput[] | TaskTagUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTaskInput | TaskTagCreateOrConnectWithoutTaskInput[]
    createMany?: TaskTagCreateManyTaskInputEnvelope
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput> | TaskCreateWithoutParentInput[] | TaskUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentInput | TaskCreateOrConnectWithoutParentInput[]
    createMany?: TaskCreateManyParentInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type LedgerTaskUpdateManyWithoutTaskNestedInput = {
    create?: XOR<LedgerTaskCreateWithoutTaskInput, LedgerTaskUncheckedCreateWithoutTaskInput> | LedgerTaskCreateWithoutTaskInput[] | LedgerTaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: LedgerTaskCreateOrConnectWithoutTaskInput | LedgerTaskCreateOrConnectWithoutTaskInput[]
    upsert?: LedgerTaskUpsertWithWhereUniqueWithoutTaskInput | LedgerTaskUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: LedgerTaskCreateManyTaskInputEnvelope
    set?: LedgerTaskWhereUniqueInput | LedgerTaskWhereUniqueInput[]
    disconnect?: LedgerTaskWhereUniqueInput | LedgerTaskWhereUniqueInput[]
    delete?: LedgerTaskWhereUniqueInput | LedgerTaskWhereUniqueInput[]
    connect?: LedgerTaskWhereUniqueInput | LedgerTaskWhereUniqueInput[]
    update?: LedgerTaskUpdateWithWhereUniqueWithoutTaskInput | LedgerTaskUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: LedgerTaskUpdateManyWithWhereWithoutTaskInput | LedgerTaskUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: LedgerTaskScalarWhereInput | LedgerTaskScalarWhereInput[]
  }

  export type RecurringTaskUpdateOneWithoutTaskNestedInput = {
    create?: XOR<RecurringTaskCreateWithoutTaskInput, RecurringTaskUncheckedCreateWithoutTaskInput>
    connectOrCreate?: RecurringTaskCreateOrConnectWithoutTaskInput
    upsert?: RecurringTaskUpsertWithoutTaskInput
    disconnect?: RecurringTaskWhereInput | boolean
    delete?: RecurringTaskWhereInput | boolean
    connect?: RecurringTaskWhereUniqueInput
    update?: XOR<XOR<RecurringTaskUpdateToOneWithWhereWithoutTaskInput, RecurringTaskUpdateWithoutTaskInput>, RecurringTaskUncheckedUpdateWithoutTaskInput>
  }

  export type ReminderUpdateManyWithoutTaskNestedInput = {
    create?: XOR<ReminderCreateWithoutTaskInput, ReminderUncheckedCreateWithoutTaskInput> | ReminderCreateWithoutTaskInput[] | ReminderUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutTaskInput | ReminderCreateOrConnectWithoutTaskInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutTaskInput | ReminderUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: ReminderCreateManyTaskInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutTaskInput | ReminderUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutTaskInput | ReminderUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type TaskTagUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskTagCreateWithoutTaskInput, TaskTagUncheckedCreateWithoutTaskInput> | TaskTagCreateWithoutTaskInput[] | TaskTagUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTaskInput | TaskTagCreateOrConnectWithoutTaskInput[]
    upsert?: TaskTagUpsertWithWhereUniqueWithoutTaskInput | TaskTagUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskTagCreateManyTaskInputEnvelope
    set?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    disconnect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    delete?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    update?: TaskTagUpdateWithWhereUniqueWithoutTaskInput | TaskTagUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskTagUpdateManyWithWhereWithoutTaskInput | TaskTagUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
  }

  export type TaskUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<TaskCreateWithoutChildrenInput, TaskUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: TaskCreateOrConnectWithoutChildrenInput
    upsert?: TaskUpsertWithoutChildrenInput
    disconnect?: TaskWhereInput | boolean
    delete?: TaskWhereInput | boolean
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutChildrenInput, TaskUpdateWithoutChildrenInput>, TaskUncheckedUpdateWithoutChildrenInput>
  }

  export type TaskUpdateManyWithoutParentNestedInput = {
    create?: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput> | TaskCreateWithoutParentInput[] | TaskUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentInput | TaskCreateOrConnectWithoutParentInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutParentInput | TaskUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TaskCreateManyParentInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutParentInput | TaskUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutParentInput | TaskUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type CategoryUpdateOneWithoutTasksNestedInput = {
    create?: XOR<CategoryCreateWithoutTasksInput, CategoryUncheckedCreateWithoutTasksInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTasksInput
    upsert?: CategoryUpsertWithoutTasksInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutTasksInput, CategoryUpdateWithoutTasksInput>, CategoryUncheckedUpdateWithoutTasksInput>
  }

  export type LedgerTaskUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<LedgerTaskCreateWithoutTaskInput, LedgerTaskUncheckedCreateWithoutTaskInput> | LedgerTaskCreateWithoutTaskInput[] | LedgerTaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: LedgerTaskCreateOrConnectWithoutTaskInput | LedgerTaskCreateOrConnectWithoutTaskInput[]
    upsert?: LedgerTaskUpsertWithWhereUniqueWithoutTaskInput | LedgerTaskUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: LedgerTaskCreateManyTaskInputEnvelope
    set?: LedgerTaskWhereUniqueInput | LedgerTaskWhereUniqueInput[]
    disconnect?: LedgerTaskWhereUniqueInput | LedgerTaskWhereUniqueInput[]
    delete?: LedgerTaskWhereUniqueInput | LedgerTaskWhereUniqueInput[]
    connect?: LedgerTaskWhereUniqueInput | LedgerTaskWhereUniqueInput[]
    update?: LedgerTaskUpdateWithWhereUniqueWithoutTaskInput | LedgerTaskUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: LedgerTaskUpdateManyWithWhereWithoutTaskInput | LedgerTaskUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: LedgerTaskScalarWhereInput | LedgerTaskScalarWhereInput[]
  }

  export type RecurringTaskUncheckedUpdateOneWithoutTaskNestedInput = {
    create?: XOR<RecurringTaskCreateWithoutTaskInput, RecurringTaskUncheckedCreateWithoutTaskInput>
    connectOrCreate?: RecurringTaskCreateOrConnectWithoutTaskInput
    upsert?: RecurringTaskUpsertWithoutTaskInput
    disconnect?: RecurringTaskWhereInput | boolean
    delete?: RecurringTaskWhereInput | boolean
    connect?: RecurringTaskWhereUniqueInput
    update?: XOR<XOR<RecurringTaskUpdateToOneWithWhereWithoutTaskInput, RecurringTaskUpdateWithoutTaskInput>, RecurringTaskUncheckedUpdateWithoutTaskInput>
  }

  export type ReminderUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<ReminderCreateWithoutTaskInput, ReminderUncheckedCreateWithoutTaskInput> | ReminderCreateWithoutTaskInput[] | ReminderUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutTaskInput | ReminderCreateOrConnectWithoutTaskInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutTaskInput | ReminderUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: ReminderCreateManyTaskInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutTaskInput | ReminderUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutTaskInput | ReminderUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type TaskTagUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskTagCreateWithoutTaskInput, TaskTagUncheckedCreateWithoutTaskInput> | TaskTagCreateWithoutTaskInput[] | TaskTagUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTaskInput | TaskTagCreateOrConnectWithoutTaskInput[]
    upsert?: TaskTagUpsertWithWhereUniqueWithoutTaskInput | TaskTagUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskTagCreateManyTaskInputEnvelope
    set?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    disconnect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    delete?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    update?: TaskTagUpdateWithWhereUniqueWithoutTaskInput | TaskTagUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskTagUpdateManyWithWhereWithoutTaskInput | TaskTagUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput> | TaskCreateWithoutParentInput[] | TaskUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentInput | TaskCreateOrConnectWithoutParentInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutParentInput | TaskUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TaskCreateManyParentInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutParentInput | TaskUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutParentInput | TaskUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutRecurringTaskInput = {
    create?: XOR<TaskCreateWithoutRecurringTaskInput, TaskUncheckedCreateWithoutRecurringTaskInput>
    connectOrCreate?: TaskCreateOrConnectWithoutRecurringTaskInput
    connect?: TaskWhereUniqueInput
  }

  export type EnumRecurringFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.RecurringFrequency
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskUpdateOneRequiredWithoutRecurringTaskNestedInput = {
    create?: XOR<TaskCreateWithoutRecurringTaskInput, TaskUncheckedCreateWithoutRecurringTaskInput>
    connectOrCreate?: TaskCreateOrConnectWithoutRecurringTaskInput
    upsert?: TaskUpsertWithoutRecurringTaskInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutRecurringTaskInput, TaskUpdateWithoutRecurringTaskInput>, TaskUncheckedUpdateWithoutRecurringTaskInput>
  }

  export type LedgerTaskCreateNestedManyWithoutLedgerInput = {
    create?: XOR<LedgerTaskCreateWithoutLedgerInput, LedgerTaskUncheckedCreateWithoutLedgerInput> | LedgerTaskCreateWithoutLedgerInput[] | LedgerTaskUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: LedgerTaskCreateOrConnectWithoutLedgerInput | LedgerTaskCreateOrConnectWithoutLedgerInput[]
    createMany?: LedgerTaskCreateManyLedgerInputEnvelope
    connect?: LedgerTaskWhereUniqueInput | LedgerTaskWhereUniqueInput[]
  }

  export type LedgerTaskUncheckedCreateNestedManyWithoutLedgerInput = {
    create?: XOR<LedgerTaskCreateWithoutLedgerInput, LedgerTaskUncheckedCreateWithoutLedgerInput> | LedgerTaskCreateWithoutLedgerInput[] | LedgerTaskUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: LedgerTaskCreateOrConnectWithoutLedgerInput | LedgerTaskCreateOrConnectWithoutLedgerInput[]
    createMany?: LedgerTaskCreateManyLedgerInputEnvelope
    connect?: LedgerTaskWhereUniqueInput | LedgerTaskWhereUniqueInput[]
  }

  export type EnumLedgerTypeFieldUpdateOperationsInput = {
    set?: $Enums.LedgerType
  }

  export type LedgerTaskUpdateManyWithoutLedgerNestedInput = {
    create?: XOR<LedgerTaskCreateWithoutLedgerInput, LedgerTaskUncheckedCreateWithoutLedgerInput> | LedgerTaskCreateWithoutLedgerInput[] | LedgerTaskUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: LedgerTaskCreateOrConnectWithoutLedgerInput | LedgerTaskCreateOrConnectWithoutLedgerInput[]
    upsert?: LedgerTaskUpsertWithWhereUniqueWithoutLedgerInput | LedgerTaskUpsertWithWhereUniqueWithoutLedgerInput[]
    createMany?: LedgerTaskCreateManyLedgerInputEnvelope
    set?: LedgerTaskWhereUniqueInput | LedgerTaskWhereUniqueInput[]
    disconnect?: LedgerTaskWhereUniqueInput | LedgerTaskWhereUniqueInput[]
    delete?: LedgerTaskWhereUniqueInput | LedgerTaskWhereUniqueInput[]
    connect?: LedgerTaskWhereUniqueInput | LedgerTaskWhereUniqueInput[]
    update?: LedgerTaskUpdateWithWhereUniqueWithoutLedgerInput | LedgerTaskUpdateWithWhereUniqueWithoutLedgerInput[]
    updateMany?: LedgerTaskUpdateManyWithWhereWithoutLedgerInput | LedgerTaskUpdateManyWithWhereWithoutLedgerInput[]
    deleteMany?: LedgerTaskScalarWhereInput | LedgerTaskScalarWhereInput[]
  }

  export type LedgerTaskUncheckedUpdateManyWithoutLedgerNestedInput = {
    create?: XOR<LedgerTaskCreateWithoutLedgerInput, LedgerTaskUncheckedCreateWithoutLedgerInput> | LedgerTaskCreateWithoutLedgerInput[] | LedgerTaskUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: LedgerTaskCreateOrConnectWithoutLedgerInput | LedgerTaskCreateOrConnectWithoutLedgerInput[]
    upsert?: LedgerTaskUpsertWithWhereUniqueWithoutLedgerInput | LedgerTaskUpsertWithWhereUniqueWithoutLedgerInput[]
    createMany?: LedgerTaskCreateManyLedgerInputEnvelope
    set?: LedgerTaskWhereUniqueInput | LedgerTaskWhereUniqueInput[]
    disconnect?: LedgerTaskWhereUniqueInput | LedgerTaskWhereUniqueInput[]
    delete?: LedgerTaskWhereUniqueInput | LedgerTaskWhereUniqueInput[]
    connect?: LedgerTaskWhereUniqueInput | LedgerTaskWhereUniqueInput[]
    update?: LedgerTaskUpdateWithWhereUniqueWithoutLedgerInput | LedgerTaskUpdateWithWhereUniqueWithoutLedgerInput[]
    updateMany?: LedgerTaskUpdateManyWithWhereWithoutLedgerInput | LedgerTaskUpdateManyWithWhereWithoutLedgerInput[]
    deleteMany?: LedgerTaskScalarWhereInput | LedgerTaskScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutLedgerItemsInput = {
    create?: XOR<TaskCreateWithoutLedgerItemsInput, TaskUncheckedCreateWithoutLedgerItemsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutLedgerItemsInput
    connect?: TaskWhereUniqueInput
  }

  export type LedgerCreateNestedOneWithoutTasksInput = {
    create?: XOR<LedgerCreateWithoutTasksInput, LedgerUncheckedCreateWithoutTasksInput>
    connectOrCreate?: LedgerCreateOrConnectWithoutTasksInput
    connect?: LedgerWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutLedgerItemsNestedInput = {
    create?: XOR<TaskCreateWithoutLedgerItemsInput, TaskUncheckedCreateWithoutLedgerItemsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutLedgerItemsInput
    upsert?: TaskUpsertWithoutLedgerItemsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutLedgerItemsInput, TaskUpdateWithoutLedgerItemsInput>, TaskUncheckedUpdateWithoutLedgerItemsInput>
  }

  export type LedgerUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<LedgerCreateWithoutTasksInput, LedgerUncheckedCreateWithoutTasksInput>
    connectOrCreate?: LedgerCreateOrConnectWithoutTasksInput
    upsert?: LedgerUpsertWithoutTasksInput
    connect?: LedgerWhereUniqueInput
    update?: XOR<XOR<LedgerUpdateToOneWithWhereWithoutTasksInput, LedgerUpdateWithoutTasksInput>, LedgerUncheckedUpdateWithoutTasksInput>
  }

  export type TaskCreateNestedOneWithoutRemindersInput = {
    create?: XOR<TaskCreateWithoutRemindersInput, TaskUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: TaskCreateOrConnectWithoutRemindersInput
    connect?: TaskWhereUniqueInput
  }

  export type EnumReminderTimingFieldUpdateOperationsInput = {
    set?: $Enums.ReminderTiming
  }

  export type TaskUpdateOneRequiredWithoutRemindersNestedInput = {
    create?: XOR<TaskCreateWithoutRemindersInput, TaskUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: TaskCreateOrConnectWithoutRemindersInput
    upsert?: TaskUpsertWithoutRemindersInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutRemindersInput, TaskUpdateWithoutRemindersInput>, TaskUncheckedUpdateWithoutRemindersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRecurringFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringFrequency | EnumRecurringFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringFrequency[]
    notIn?: $Enums.RecurringFrequency[]
    not?: NestedEnumRecurringFrequencyFilter<$PrismaModel> | $Enums.RecurringFrequency
  }

  export type NestedEnumRecurringFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringFrequency | EnumRecurringFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringFrequency[]
    notIn?: $Enums.RecurringFrequency[]
    not?: NestedEnumRecurringFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.RecurringFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecurringFrequencyFilter<$PrismaModel>
    _max?: NestedEnumRecurringFrequencyFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumLedgerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[]
    notIn?: $Enums.LedgerType[]
    not?: NestedEnumLedgerTypeFilter<$PrismaModel> | $Enums.LedgerType
  }

  export type NestedEnumLedgerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[]
    notIn?: $Enums.LedgerType[]
    not?: NestedEnumLedgerTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLedgerTypeFilter<$PrismaModel>
    _max?: NestedEnumLedgerTypeFilter<$PrismaModel>
  }

  export type NestedEnumReminderTimingFilter<$PrismaModel = never> = {
    equals?: $Enums.ReminderTiming | EnumReminderTimingFieldRefInput<$PrismaModel>
    in?: $Enums.ReminderTiming[]
    notIn?: $Enums.ReminderTiming[]
    not?: NestedEnumReminderTimingFilter<$PrismaModel> | $Enums.ReminderTiming
  }

  export type NestedEnumReminderTimingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReminderTiming | EnumReminderTimingFieldRefInput<$PrismaModel>
    in?: $Enums.ReminderTiming[]
    notIn?: $Enums.ReminderTiming[]
    not?: NestedEnumReminderTimingWithAggregatesFilter<$PrismaModel> | $Enums.ReminderTiming
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReminderTimingFilter<$PrismaModel>
    _max?: NestedEnumReminderTimingFilter<$PrismaModel>
  }

  export type CategoryCreateWithoutChildrenInput = {
    id?: string
    name: string
    level?: number
    topLevel: string
    sortOrder?: number
    collapsed?: boolean
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    tasks?: TaskCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutChildrenInput = {
    id?: string
    name: string
    level?: number
    topLevel: string
    sortOrder?: number
    collapsed?: boolean
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    tasks?: TaskUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutChildrenInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
  }

  export type CategoryCreateWithoutParentInput = {
    id?: string
    name: string
    level?: number
    topLevel: string
    sortOrder?: number
    collapsed?: boolean
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: CategoryCreateNestedManyWithoutParentInput
    tasks?: TaskCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    level?: number
    topLevel: string
    sortOrder?: number
    collapsed?: boolean
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    tasks?: TaskUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutParentInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryCreateManyParentInputEnvelope = {
    data: CategoryCreateManyParentInput | CategoryCreateManyParentInput[]
  }

  export type TaskCreateWithoutCategoryInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    npc?: string | null
    notes?: string | null
    towerLink?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ledgerItems?: LedgerTaskCreateNestedManyWithoutTaskInput
    recurringTask?: RecurringTaskCreateNestedOneWithoutTaskInput
    reminders?: ReminderCreateNestedManyWithoutTaskInput
    taskTags?: TaskTagCreateNestedManyWithoutTaskInput
    parent?: TaskCreateNestedOneWithoutChildrenInput
    children?: TaskCreateNestedManyWithoutParentInput
  }

  export type TaskUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    parentId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    npc?: string | null
    notes?: string | null
    towerLink?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ledgerItems?: LedgerTaskUncheckedCreateNestedManyWithoutTaskInput
    recurringTask?: RecurringTaskUncheckedCreateNestedOneWithoutTaskInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutTaskInput
    taskTags?: TaskTagUncheckedCreateNestedManyWithoutTaskInput
    children?: TaskUncheckedCreateNestedManyWithoutParentInput
  }

  export type TaskCreateOrConnectWithoutCategoryInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCategoryInput, TaskUncheckedCreateWithoutCategoryInput>
  }

  export type TaskCreateManyCategoryInputEnvelope = {
    data: TaskCreateManyCategoryInput | TaskCreateManyCategoryInput[]
  }

  export type CategoryUpsertWithoutChildrenInput = {
    update: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutChildrenInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type CategoryUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    topLevel?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    collapsed?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    tasks?: TaskUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    topLevel?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    collapsed?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
  }

  export type CategoryUpdateManyWithWhereWithoutParentInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutParentInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    level?: IntFilter<"Category"> | number
    topLevel?: StringFilter<"Category"> | string
    sortOrder?: IntFilter<"Category"> | number
    collapsed?: BoolFilter<"Category"> | boolean
    color?: StringNullableFilter<"Category"> | string | null
    icon?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    parentId?: StringNullableFilter<"Category"> | string | null
  }

  export type TaskUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutCategoryInput, TaskUncheckedUpdateWithoutCategoryInput>
    create: XOR<TaskCreateWithoutCategoryInput, TaskUncheckedCreateWithoutCategoryInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutCategoryInput, TaskUncheckedUpdateWithoutCategoryInput>
  }

  export type TaskUpdateManyWithWhereWithoutCategoryInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutCategoryInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    categoryId?: StringNullableFilter<"Task"> | string | null
    parentId?: StringNullableFilter<"Task"> | string | null
    startDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    npc?: StringNullableFilter<"Task"> | string | null
    notes?: StringNullableFilter<"Task"> | string | null
    towerLink?: StringNullableFilter<"Task"> | string | null
    sortOrder?: IntFilter<"Task"> | number
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type TaskTagCreateWithoutTagInput = {
    id?: string
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutTaskTagsInput
  }

  export type TaskTagUncheckedCreateWithoutTagInput = {
    id?: string
    taskId: string
    createdAt?: Date | string
  }

  export type TaskTagCreateOrConnectWithoutTagInput = {
    where: TaskTagWhereUniqueInput
    create: XOR<TaskTagCreateWithoutTagInput, TaskTagUncheckedCreateWithoutTagInput>
  }

  export type TaskTagCreateManyTagInputEnvelope = {
    data: TaskTagCreateManyTagInput | TaskTagCreateManyTagInput[]
  }

  export type TaskTagUpsertWithWhereUniqueWithoutTagInput = {
    where: TaskTagWhereUniqueInput
    update: XOR<TaskTagUpdateWithoutTagInput, TaskTagUncheckedUpdateWithoutTagInput>
    create: XOR<TaskTagCreateWithoutTagInput, TaskTagUncheckedCreateWithoutTagInput>
  }

  export type TaskTagUpdateWithWhereUniqueWithoutTagInput = {
    where: TaskTagWhereUniqueInput
    data: XOR<TaskTagUpdateWithoutTagInput, TaskTagUncheckedUpdateWithoutTagInput>
  }

  export type TaskTagUpdateManyWithWhereWithoutTagInput = {
    where: TaskTagScalarWhereInput
    data: XOR<TaskTagUpdateManyMutationInput, TaskTagUncheckedUpdateManyWithoutTagInput>
  }

  export type TaskTagScalarWhereInput = {
    AND?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
    OR?: TaskTagScalarWhereInput[]
    NOT?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
    id?: StringFilter<"TaskTag"> | string
    taskId?: StringFilter<"TaskTag"> | string
    tagId?: StringFilter<"TaskTag"> | string
    createdAt?: DateTimeFilter<"TaskTag"> | Date | string
  }

  export type TagCreateWithoutTaskTagsInput = {
    id?: string
    name: string
    color?: string
    createdAt?: Date | string
  }

  export type TagUncheckedCreateWithoutTaskTagsInput = {
    id?: string
    name: string
    color?: string
    createdAt?: Date | string
  }

  export type TagCreateOrConnectWithoutTaskTagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutTaskTagsInput, TagUncheckedCreateWithoutTaskTagsInput>
  }

  export type TaskCreateWithoutTaskTagsInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    npc?: string | null
    notes?: string | null
    towerLink?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ledgerItems?: LedgerTaskCreateNestedManyWithoutTaskInput
    recurringTask?: RecurringTaskCreateNestedOneWithoutTaskInput
    reminders?: ReminderCreateNestedManyWithoutTaskInput
    parent?: TaskCreateNestedOneWithoutChildrenInput
    children?: TaskCreateNestedManyWithoutParentInput
    category?: CategoryCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutTaskTagsInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    categoryId?: string | null
    parentId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    npc?: string | null
    notes?: string | null
    towerLink?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ledgerItems?: LedgerTaskUncheckedCreateNestedManyWithoutTaskInput
    recurringTask?: RecurringTaskUncheckedCreateNestedOneWithoutTaskInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutTaskInput
    children?: TaskUncheckedCreateNestedManyWithoutParentInput
  }

  export type TaskCreateOrConnectWithoutTaskTagsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTaskTagsInput, TaskUncheckedCreateWithoutTaskTagsInput>
  }

  export type TagUpsertWithoutTaskTagsInput = {
    update: XOR<TagUpdateWithoutTaskTagsInput, TagUncheckedUpdateWithoutTaskTagsInput>
    create: XOR<TagCreateWithoutTaskTagsInput, TagUncheckedCreateWithoutTaskTagsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutTaskTagsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutTaskTagsInput, TagUncheckedUpdateWithoutTaskTagsInput>
  }

  export type TagUpdateWithoutTaskTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateWithoutTaskTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpsertWithoutTaskTagsInput = {
    update: XOR<TaskUpdateWithoutTaskTagsInput, TaskUncheckedUpdateWithoutTaskTagsInput>
    create: XOR<TaskCreateWithoutTaskTagsInput, TaskUncheckedCreateWithoutTaskTagsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutTaskTagsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutTaskTagsInput, TaskUncheckedUpdateWithoutTaskTagsInput>
  }

  export type TaskUpdateWithoutTaskTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npc?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    towerLink?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledgerItems?: LedgerTaskUpdateManyWithoutTaskNestedInput
    recurringTask?: RecurringTaskUpdateOneWithoutTaskNestedInput
    reminders?: ReminderUpdateManyWithoutTaskNestedInput
    parent?: TaskUpdateOneWithoutChildrenNestedInput
    children?: TaskUpdateManyWithoutParentNestedInput
    category?: CategoryUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutTaskTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npc?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    towerLink?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledgerItems?: LedgerTaskUncheckedUpdateManyWithoutTaskNestedInput
    recurringTask?: RecurringTaskUncheckedUpdateOneWithoutTaskNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutTaskNestedInput
    children?: TaskUncheckedUpdateManyWithoutParentNestedInput
  }

  export type LedgerTaskCreateWithoutTaskInput = {
    id?: string
    createdAt?: Date | string
    ledger: LedgerCreateNestedOneWithoutTasksInput
  }

  export type LedgerTaskUncheckedCreateWithoutTaskInput = {
    id?: string
    ledgerId: string
    createdAt?: Date | string
  }

  export type LedgerTaskCreateOrConnectWithoutTaskInput = {
    where: LedgerTaskWhereUniqueInput
    create: XOR<LedgerTaskCreateWithoutTaskInput, LedgerTaskUncheckedCreateWithoutTaskInput>
  }

  export type LedgerTaskCreateManyTaskInputEnvelope = {
    data: LedgerTaskCreateManyTaskInput | LedgerTaskCreateManyTaskInput[]
  }

  export type RecurringTaskCreateWithoutTaskInput = {
    id?: string
    frequency: $Enums.RecurringFrequency
    interval?: number
    weekDays?: string | null
    monthDate?: number | null
    monthWeekOrdinal?: number | null
    monthWeekDay?: number | null
    yearMonth?: number | null
    yearDate?: number | null
    customDays?: number | null
    nextDueDate?: Date | string | null
    endDate?: Date | string | null
    lastCompletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringTaskUncheckedCreateWithoutTaskInput = {
    id?: string
    frequency: $Enums.RecurringFrequency
    interval?: number
    weekDays?: string | null
    monthDate?: number | null
    monthWeekOrdinal?: number | null
    monthWeekDay?: number | null
    yearMonth?: number | null
    yearDate?: number | null
    customDays?: number | null
    nextDueDate?: Date | string | null
    endDate?: Date | string | null
    lastCompletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringTaskCreateOrConnectWithoutTaskInput = {
    where: RecurringTaskWhereUniqueInput
    create: XOR<RecurringTaskCreateWithoutTaskInput, RecurringTaskUncheckedCreateWithoutTaskInput>
  }

  export type ReminderCreateWithoutTaskInput = {
    id?: string
    timing: $Enums.ReminderTiming
    remindAt: Date | string
    isNotified?: boolean
    notifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReminderUncheckedCreateWithoutTaskInput = {
    id?: string
    timing: $Enums.ReminderTiming
    remindAt: Date | string
    isNotified?: boolean
    notifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReminderCreateOrConnectWithoutTaskInput = {
    where: ReminderWhereUniqueInput
    create: XOR<ReminderCreateWithoutTaskInput, ReminderUncheckedCreateWithoutTaskInput>
  }

  export type ReminderCreateManyTaskInputEnvelope = {
    data: ReminderCreateManyTaskInput | ReminderCreateManyTaskInput[]
  }

  export type TaskTagCreateWithoutTaskInput = {
    id?: string
    createdAt?: Date | string
    tag: TagCreateNestedOneWithoutTaskTagsInput
  }

  export type TaskTagUncheckedCreateWithoutTaskInput = {
    id?: string
    tagId: string
    createdAt?: Date | string
  }

  export type TaskTagCreateOrConnectWithoutTaskInput = {
    where: TaskTagWhereUniqueInput
    create: XOR<TaskTagCreateWithoutTaskInput, TaskTagUncheckedCreateWithoutTaskInput>
  }

  export type TaskTagCreateManyTaskInputEnvelope = {
    data: TaskTagCreateManyTaskInput | TaskTagCreateManyTaskInput[]
  }

  export type TaskCreateWithoutChildrenInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    npc?: string | null
    notes?: string | null
    towerLink?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ledgerItems?: LedgerTaskCreateNestedManyWithoutTaskInput
    recurringTask?: RecurringTaskCreateNestedOneWithoutTaskInput
    reminders?: ReminderCreateNestedManyWithoutTaskInput
    taskTags?: TaskTagCreateNestedManyWithoutTaskInput
    parent?: TaskCreateNestedOneWithoutChildrenInput
    category?: CategoryCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutChildrenInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    categoryId?: string | null
    parentId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    npc?: string | null
    notes?: string | null
    towerLink?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ledgerItems?: LedgerTaskUncheckedCreateNestedManyWithoutTaskInput
    recurringTask?: RecurringTaskUncheckedCreateNestedOneWithoutTaskInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutTaskInput
    taskTags?: TaskTagUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutChildrenInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutChildrenInput, TaskUncheckedCreateWithoutChildrenInput>
  }

  export type TaskCreateWithoutParentInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    npc?: string | null
    notes?: string | null
    towerLink?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ledgerItems?: LedgerTaskCreateNestedManyWithoutTaskInput
    recurringTask?: RecurringTaskCreateNestedOneWithoutTaskInput
    reminders?: ReminderCreateNestedManyWithoutTaskInput
    taskTags?: TaskTagCreateNestedManyWithoutTaskInput
    children?: TaskCreateNestedManyWithoutParentInput
    category?: CategoryCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutParentInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    categoryId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    npc?: string | null
    notes?: string | null
    towerLink?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ledgerItems?: LedgerTaskUncheckedCreateNestedManyWithoutTaskInput
    recurringTask?: RecurringTaskUncheckedCreateNestedOneWithoutTaskInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutTaskInput
    taskTags?: TaskTagUncheckedCreateNestedManyWithoutTaskInput
    children?: TaskUncheckedCreateNestedManyWithoutParentInput
  }

  export type TaskCreateOrConnectWithoutParentInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput>
  }

  export type TaskCreateManyParentInputEnvelope = {
    data: TaskCreateManyParentInput | TaskCreateManyParentInput[]
  }

  export type CategoryCreateWithoutTasksInput = {
    id?: string
    name: string
    level?: number
    topLevel: string
    sortOrder?: number
    collapsed?: boolean
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    children?: CategoryCreateNestedManyWithoutParentInput
  }

  export type CategoryUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    level?: number
    topLevel: string
    sortOrder?: number
    collapsed?: boolean
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoryCreateOrConnectWithoutTasksInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTasksInput, CategoryUncheckedCreateWithoutTasksInput>
  }

  export type LedgerTaskUpsertWithWhereUniqueWithoutTaskInput = {
    where: LedgerTaskWhereUniqueInput
    update: XOR<LedgerTaskUpdateWithoutTaskInput, LedgerTaskUncheckedUpdateWithoutTaskInput>
    create: XOR<LedgerTaskCreateWithoutTaskInput, LedgerTaskUncheckedCreateWithoutTaskInput>
  }

  export type LedgerTaskUpdateWithWhereUniqueWithoutTaskInput = {
    where: LedgerTaskWhereUniqueInput
    data: XOR<LedgerTaskUpdateWithoutTaskInput, LedgerTaskUncheckedUpdateWithoutTaskInput>
  }

  export type LedgerTaskUpdateManyWithWhereWithoutTaskInput = {
    where: LedgerTaskScalarWhereInput
    data: XOR<LedgerTaskUpdateManyMutationInput, LedgerTaskUncheckedUpdateManyWithoutTaskInput>
  }

  export type LedgerTaskScalarWhereInput = {
    AND?: LedgerTaskScalarWhereInput | LedgerTaskScalarWhereInput[]
    OR?: LedgerTaskScalarWhereInput[]
    NOT?: LedgerTaskScalarWhereInput | LedgerTaskScalarWhereInput[]
    id?: StringFilter<"LedgerTask"> | string
    ledgerId?: StringFilter<"LedgerTask"> | string
    taskId?: StringFilter<"LedgerTask"> | string
    createdAt?: DateTimeFilter<"LedgerTask"> | Date | string
  }

  export type RecurringTaskUpsertWithoutTaskInput = {
    update: XOR<RecurringTaskUpdateWithoutTaskInput, RecurringTaskUncheckedUpdateWithoutTaskInput>
    create: XOR<RecurringTaskCreateWithoutTaskInput, RecurringTaskUncheckedCreateWithoutTaskInput>
    where?: RecurringTaskWhereInput
  }

  export type RecurringTaskUpdateToOneWithWhereWithoutTaskInput = {
    where?: RecurringTaskWhereInput
    data: XOR<RecurringTaskUpdateWithoutTaskInput, RecurringTaskUncheckedUpdateWithoutTaskInput>
  }

  export type RecurringTaskUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    interval?: IntFieldUpdateOperationsInput | number
    weekDays?: NullableStringFieldUpdateOperationsInput | string | null
    monthDate?: NullableIntFieldUpdateOperationsInput | number | null
    monthWeekOrdinal?: NullableIntFieldUpdateOperationsInput | number | null
    monthWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    yearMonth?: NullableIntFieldUpdateOperationsInput | number | null
    yearDate?: NullableIntFieldUpdateOperationsInput | number | null
    customDays?: NullableIntFieldUpdateOperationsInput | number | null
    nextDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringTaskUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    interval?: IntFieldUpdateOperationsInput | number
    weekDays?: NullableStringFieldUpdateOperationsInput | string | null
    monthDate?: NullableIntFieldUpdateOperationsInput | number | null
    monthWeekOrdinal?: NullableIntFieldUpdateOperationsInput | number | null
    monthWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    yearMonth?: NullableIntFieldUpdateOperationsInput | number | null
    yearDate?: NullableIntFieldUpdateOperationsInput | number | null
    customDays?: NullableIntFieldUpdateOperationsInput | number | null
    nextDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUpsertWithWhereUniqueWithoutTaskInput = {
    where: ReminderWhereUniqueInput
    update: XOR<ReminderUpdateWithoutTaskInput, ReminderUncheckedUpdateWithoutTaskInput>
    create: XOR<ReminderCreateWithoutTaskInput, ReminderUncheckedCreateWithoutTaskInput>
  }

  export type ReminderUpdateWithWhereUniqueWithoutTaskInput = {
    where: ReminderWhereUniqueInput
    data: XOR<ReminderUpdateWithoutTaskInput, ReminderUncheckedUpdateWithoutTaskInput>
  }

  export type ReminderUpdateManyWithWhereWithoutTaskInput = {
    where: ReminderScalarWhereInput
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyWithoutTaskInput>
  }

  export type ReminderScalarWhereInput = {
    AND?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    OR?: ReminderScalarWhereInput[]
    NOT?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    id?: StringFilter<"Reminder"> | string
    taskId?: StringFilter<"Reminder"> | string
    timing?: EnumReminderTimingFilter<"Reminder"> | $Enums.ReminderTiming
    remindAt?: DateTimeFilter<"Reminder"> | Date | string
    isNotified?: BoolFilter<"Reminder"> | boolean
    notifiedAt?: DateTimeNullableFilter<"Reminder"> | Date | string | null
    createdAt?: DateTimeFilter<"Reminder"> | Date | string
  }

  export type TaskTagUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskTagWhereUniqueInput
    update: XOR<TaskTagUpdateWithoutTaskInput, TaskTagUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskTagCreateWithoutTaskInput, TaskTagUncheckedCreateWithoutTaskInput>
  }

  export type TaskTagUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskTagWhereUniqueInput
    data: XOR<TaskTagUpdateWithoutTaskInput, TaskTagUncheckedUpdateWithoutTaskInput>
  }

  export type TaskTagUpdateManyWithWhereWithoutTaskInput = {
    where: TaskTagScalarWhereInput
    data: XOR<TaskTagUpdateManyMutationInput, TaskTagUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskUpsertWithoutChildrenInput = {
    update: XOR<TaskUpdateWithoutChildrenInput, TaskUncheckedUpdateWithoutChildrenInput>
    create: XOR<TaskCreateWithoutChildrenInput, TaskUncheckedCreateWithoutChildrenInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutChildrenInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutChildrenInput, TaskUncheckedUpdateWithoutChildrenInput>
  }

  export type TaskUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npc?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    towerLink?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledgerItems?: LedgerTaskUpdateManyWithoutTaskNestedInput
    recurringTask?: RecurringTaskUpdateOneWithoutTaskNestedInput
    reminders?: ReminderUpdateManyWithoutTaskNestedInput
    taskTags?: TaskTagUpdateManyWithoutTaskNestedInput
    parent?: TaskUpdateOneWithoutChildrenNestedInput
    category?: CategoryUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npc?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    towerLink?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledgerItems?: LedgerTaskUncheckedUpdateManyWithoutTaskNestedInput
    recurringTask?: RecurringTaskUncheckedUpdateOneWithoutTaskNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutTaskNestedInput
    taskTags?: TaskTagUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutParentInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutParentInput, TaskUncheckedUpdateWithoutParentInput>
    create: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutParentInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutParentInput, TaskUncheckedUpdateWithoutParentInput>
  }

  export type TaskUpdateManyWithWhereWithoutParentInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutParentInput>
  }

  export type CategoryUpsertWithoutTasksInput = {
    update: XOR<CategoryUpdateWithoutTasksInput, CategoryUncheckedUpdateWithoutTasksInput>
    create: XOR<CategoryCreateWithoutTasksInput, CategoryUncheckedCreateWithoutTasksInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutTasksInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutTasksInput, CategoryUncheckedUpdateWithoutTasksInput>
  }

  export type CategoryUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    topLevel?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    collapsed?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    children?: CategoryUpdateManyWithoutParentNestedInput
  }

  export type CategoryUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    topLevel?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    collapsed?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type TaskCreateWithoutRecurringTaskInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    npc?: string | null
    notes?: string | null
    towerLink?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ledgerItems?: LedgerTaskCreateNestedManyWithoutTaskInput
    reminders?: ReminderCreateNestedManyWithoutTaskInput
    taskTags?: TaskTagCreateNestedManyWithoutTaskInput
    parent?: TaskCreateNestedOneWithoutChildrenInput
    children?: TaskCreateNestedManyWithoutParentInput
    category?: CategoryCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutRecurringTaskInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    categoryId?: string | null
    parentId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    npc?: string | null
    notes?: string | null
    towerLink?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ledgerItems?: LedgerTaskUncheckedCreateNestedManyWithoutTaskInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutTaskInput
    taskTags?: TaskTagUncheckedCreateNestedManyWithoutTaskInput
    children?: TaskUncheckedCreateNestedManyWithoutParentInput
  }

  export type TaskCreateOrConnectWithoutRecurringTaskInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutRecurringTaskInput, TaskUncheckedCreateWithoutRecurringTaskInput>
  }

  export type TaskUpsertWithoutRecurringTaskInput = {
    update: XOR<TaskUpdateWithoutRecurringTaskInput, TaskUncheckedUpdateWithoutRecurringTaskInput>
    create: XOR<TaskCreateWithoutRecurringTaskInput, TaskUncheckedCreateWithoutRecurringTaskInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutRecurringTaskInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutRecurringTaskInput, TaskUncheckedUpdateWithoutRecurringTaskInput>
  }

  export type TaskUpdateWithoutRecurringTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npc?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    towerLink?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledgerItems?: LedgerTaskUpdateManyWithoutTaskNestedInput
    reminders?: ReminderUpdateManyWithoutTaskNestedInput
    taskTags?: TaskTagUpdateManyWithoutTaskNestedInput
    parent?: TaskUpdateOneWithoutChildrenNestedInput
    children?: TaskUpdateManyWithoutParentNestedInput
    category?: CategoryUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutRecurringTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npc?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    towerLink?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledgerItems?: LedgerTaskUncheckedUpdateManyWithoutTaskNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutTaskNestedInput
    taskTags?: TaskTagUncheckedUpdateManyWithoutTaskNestedInput
    children?: TaskUncheckedUpdateManyWithoutParentNestedInput
  }

  export type LedgerTaskCreateWithoutLedgerInput = {
    id?: string
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutLedgerItemsInput
  }

  export type LedgerTaskUncheckedCreateWithoutLedgerInput = {
    id?: string
    taskId: string
    createdAt?: Date | string
  }

  export type LedgerTaskCreateOrConnectWithoutLedgerInput = {
    where: LedgerTaskWhereUniqueInput
    create: XOR<LedgerTaskCreateWithoutLedgerInput, LedgerTaskUncheckedCreateWithoutLedgerInput>
  }

  export type LedgerTaskCreateManyLedgerInputEnvelope = {
    data: LedgerTaskCreateManyLedgerInput | LedgerTaskCreateManyLedgerInput[]
  }

  export type LedgerTaskUpsertWithWhereUniqueWithoutLedgerInput = {
    where: LedgerTaskWhereUniqueInput
    update: XOR<LedgerTaskUpdateWithoutLedgerInput, LedgerTaskUncheckedUpdateWithoutLedgerInput>
    create: XOR<LedgerTaskCreateWithoutLedgerInput, LedgerTaskUncheckedCreateWithoutLedgerInput>
  }

  export type LedgerTaskUpdateWithWhereUniqueWithoutLedgerInput = {
    where: LedgerTaskWhereUniqueInput
    data: XOR<LedgerTaskUpdateWithoutLedgerInput, LedgerTaskUncheckedUpdateWithoutLedgerInput>
  }

  export type LedgerTaskUpdateManyWithWhereWithoutLedgerInput = {
    where: LedgerTaskScalarWhereInput
    data: XOR<LedgerTaskUpdateManyMutationInput, LedgerTaskUncheckedUpdateManyWithoutLedgerInput>
  }

  export type TaskCreateWithoutLedgerItemsInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    npc?: string | null
    notes?: string | null
    towerLink?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    recurringTask?: RecurringTaskCreateNestedOneWithoutTaskInput
    reminders?: ReminderCreateNestedManyWithoutTaskInput
    taskTags?: TaskTagCreateNestedManyWithoutTaskInput
    parent?: TaskCreateNestedOneWithoutChildrenInput
    children?: TaskCreateNestedManyWithoutParentInput
    category?: CategoryCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutLedgerItemsInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    categoryId?: string | null
    parentId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    npc?: string | null
    notes?: string | null
    towerLink?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    recurringTask?: RecurringTaskUncheckedCreateNestedOneWithoutTaskInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutTaskInput
    taskTags?: TaskTagUncheckedCreateNestedManyWithoutTaskInput
    children?: TaskUncheckedCreateNestedManyWithoutParentInput
  }

  export type TaskCreateOrConnectWithoutLedgerItemsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutLedgerItemsInput, TaskUncheckedCreateWithoutLedgerItemsInput>
  }

  export type LedgerCreateWithoutTasksInput = {
    id?: string
    type: $Enums.LedgerType
    name: string
    description?: string | null
    details?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LedgerUncheckedCreateWithoutTasksInput = {
    id?: string
    type: $Enums.LedgerType
    name: string
    description?: string | null
    details?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LedgerCreateOrConnectWithoutTasksInput = {
    where: LedgerWhereUniqueInput
    create: XOR<LedgerCreateWithoutTasksInput, LedgerUncheckedCreateWithoutTasksInput>
  }

  export type TaskUpsertWithoutLedgerItemsInput = {
    update: XOR<TaskUpdateWithoutLedgerItemsInput, TaskUncheckedUpdateWithoutLedgerItemsInput>
    create: XOR<TaskCreateWithoutLedgerItemsInput, TaskUncheckedCreateWithoutLedgerItemsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutLedgerItemsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutLedgerItemsInput, TaskUncheckedUpdateWithoutLedgerItemsInput>
  }

  export type TaskUpdateWithoutLedgerItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npc?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    towerLink?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurringTask?: RecurringTaskUpdateOneWithoutTaskNestedInput
    reminders?: ReminderUpdateManyWithoutTaskNestedInput
    taskTags?: TaskTagUpdateManyWithoutTaskNestedInput
    parent?: TaskUpdateOneWithoutChildrenNestedInput
    children?: TaskUpdateManyWithoutParentNestedInput
    category?: CategoryUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutLedgerItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npc?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    towerLink?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurringTask?: RecurringTaskUncheckedUpdateOneWithoutTaskNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutTaskNestedInput
    taskTags?: TaskTagUncheckedUpdateManyWithoutTaskNestedInput
    children?: TaskUncheckedUpdateManyWithoutParentNestedInput
  }

  export type LedgerUpsertWithoutTasksInput = {
    update: XOR<LedgerUpdateWithoutTasksInput, LedgerUncheckedUpdateWithoutTasksInput>
    create: XOR<LedgerCreateWithoutTasksInput, LedgerUncheckedCreateWithoutTasksInput>
    where?: LedgerWhereInput
  }

  export type LedgerUpdateToOneWithWhereWithoutTasksInput = {
    where?: LedgerWhereInput
    data: XOR<LedgerUpdateWithoutTasksInput, LedgerUncheckedUpdateWithoutTasksInput>
  }

  export type LedgerUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateWithoutRemindersInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    npc?: string | null
    notes?: string | null
    towerLink?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ledgerItems?: LedgerTaskCreateNestedManyWithoutTaskInput
    recurringTask?: RecurringTaskCreateNestedOneWithoutTaskInput
    taskTags?: TaskTagCreateNestedManyWithoutTaskInput
    parent?: TaskCreateNestedOneWithoutChildrenInput
    children?: TaskCreateNestedManyWithoutParentInput
    category?: CategoryCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutRemindersInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    categoryId?: string | null
    parentId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    npc?: string | null
    notes?: string | null
    towerLink?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ledgerItems?: LedgerTaskUncheckedCreateNestedManyWithoutTaskInput
    recurringTask?: RecurringTaskUncheckedCreateNestedOneWithoutTaskInput
    taskTags?: TaskTagUncheckedCreateNestedManyWithoutTaskInput
    children?: TaskUncheckedCreateNestedManyWithoutParentInput
  }

  export type TaskCreateOrConnectWithoutRemindersInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutRemindersInput, TaskUncheckedCreateWithoutRemindersInput>
  }

  export type TaskUpsertWithoutRemindersInput = {
    update: XOR<TaskUpdateWithoutRemindersInput, TaskUncheckedUpdateWithoutRemindersInput>
    create: XOR<TaskCreateWithoutRemindersInput, TaskUncheckedCreateWithoutRemindersInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutRemindersInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutRemindersInput, TaskUncheckedUpdateWithoutRemindersInput>
  }

  export type TaskUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npc?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    towerLink?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledgerItems?: LedgerTaskUpdateManyWithoutTaskNestedInput
    recurringTask?: RecurringTaskUpdateOneWithoutTaskNestedInput
    taskTags?: TaskTagUpdateManyWithoutTaskNestedInput
    parent?: TaskUpdateOneWithoutChildrenNestedInput
    children?: TaskUpdateManyWithoutParentNestedInput
    category?: CategoryUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npc?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    towerLink?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledgerItems?: LedgerTaskUncheckedUpdateManyWithoutTaskNestedInput
    recurringTask?: RecurringTaskUncheckedUpdateOneWithoutTaskNestedInput
    taskTags?: TaskTagUncheckedUpdateManyWithoutTaskNestedInput
    children?: TaskUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CategoryCreateManyParentInput = {
    id?: string
    name: string
    level?: number
    topLevel: string
    sortOrder?: number
    collapsed?: boolean
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateManyCategoryInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    parentId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    npc?: string | null
    notes?: string | null
    towerLink?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    topLevel?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    collapsed?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: CategoryUpdateManyWithoutParentNestedInput
    tasks?: TaskUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    topLevel?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    collapsed?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    topLevel?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    collapsed?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npc?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    towerLink?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledgerItems?: LedgerTaskUpdateManyWithoutTaskNestedInput
    recurringTask?: RecurringTaskUpdateOneWithoutTaskNestedInput
    reminders?: ReminderUpdateManyWithoutTaskNestedInput
    taskTags?: TaskTagUpdateManyWithoutTaskNestedInput
    parent?: TaskUpdateOneWithoutChildrenNestedInput
    children?: TaskUpdateManyWithoutParentNestedInput
  }

  export type TaskUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npc?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    towerLink?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledgerItems?: LedgerTaskUncheckedUpdateManyWithoutTaskNestedInput
    recurringTask?: RecurringTaskUncheckedUpdateOneWithoutTaskNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutTaskNestedInput
    taskTags?: TaskTagUncheckedUpdateManyWithoutTaskNestedInput
    children?: TaskUncheckedUpdateManyWithoutParentNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npc?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    towerLink?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskTagCreateManyTagInput = {
    id?: string
    taskId: string
    createdAt?: Date | string
  }

  export type TaskTagUpdateWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutTaskTagsNestedInput
  }

  export type TaskTagUncheckedUpdateWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskTagUncheckedUpdateManyWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerTaskCreateManyTaskInput = {
    id?: string
    ledgerId: string
    createdAt?: Date | string
  }

  export type ReminderCreateManyTaskInput = {
    id?: string
    timing: $Enums.ReminderTiming
    remindAt: Date | string
    isNotified?: boolean
    notifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TaskTagCreateManyTaskInput = {
    id?: string
    tagId: string
    createdAt?: Date | string
  }

  export type TaskCreateManyParentInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    categoryId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedAt?: Date | string | null
    npc?: string | null
    notes?: string | null
    towerLink?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LedgerTaskUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledger?: LedgerUpdateOneRequiredWithoutTasksNestedInput
  }

  export type LedgerTaskUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    ledgerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerTaskUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    ledgerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    timing?: EnumReminderTimingFieldUpdateOperationsInput | $Enums.ReminderTiming
    remindAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isNotified?: BoolFieldUpdateOperationsInput | boolean
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    timing?: EnumReminderTimingFieldUpdateOperationsInput | $Enums.ReminderTiming
    remindAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isNotified?: BoolFieldUpdateOperationsInput | boolean
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    timing?: EnumReminderTimingFieldUpdateOperationsInput | $Enums.ReminderTiming
    remindAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isNotified?: BoolFieldUpdateOperationsInput | boolean
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskTagUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUpdateOneRequiredWithoutTaskTagsNestedInput
  }

  export type TaskTagUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskTagUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npc?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    towerLink?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledgerItems?: LedgerTaskUpdateManyWithoutTaskNestedInput
    recurringTask?: RecurringTaskUpdateOneWithoutTaskNestedInput
    reminders?: ReminderUpdateManyWithoutTaskNestedInput
    taskTags?: TaskTagUpdateManyWithoutTaskNestedInput
    children?: TaskUpdateManyWithoutParentNestedInput
    category?: CategoryUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npc?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    towerLink?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledgerItems?: LedgerTaskUncheckedUpdateManyWithoutTaskNestedInput
    recurringTask?: RecurringTaskUncheckedUpdateOneWithoutTaskNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutTaskNestedInput
    taskTags?: TaskTagUncheckedUpdateManyWithoutTaskNestedInput
    children?: TaskUncheckedUpdateManyWithoutParentNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npc?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    towerLink?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerTaskCreateManyLedgerInput = {
    id?: string
    taskId: string
    createdAt?: Date | string
  }

  export type LedgerTaskUpdateWithoutLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutLedgerItemsNestedInput
  }

  export type LedgerTaskUncheckedUpdateWithoutLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerTaskUncheckedUpdateManyWithoutLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}