module.exports = {
  apps: [
    {
      name: 'Upera',
      exec_mode: 'fork',
      port: 3000,
      instances: '1', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      watch: true
    }
  ]
}