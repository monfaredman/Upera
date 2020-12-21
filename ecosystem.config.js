module.exports = {
  apps: [
    {
      name: 'Upera',
      exec_mode: 'cluster',
      port: 3000,
      instances: '3', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}