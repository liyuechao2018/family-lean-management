module.exports = {
  apps: [
    {
      name: 'family-lean',
      cwd: '/root/family-lean-management',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000',
      env: {
        NODE_ENV: 'production',
      },
      instances: 1,
      autorestart: true,
      max_restarts: 10,
    },
  ],
};
