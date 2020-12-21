module.exports = {
  apps: [
    {
      name: 'Upera',
      exec_mode: 'fork',
      port: 3000,
      instances: '1', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js  --hostname 127.0.0.1 --port 3000',
      args: 'start',
      watch: true
    }
  ]
}