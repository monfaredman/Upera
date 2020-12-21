module.exports = {
  apps: [
    {
      name: 'Upera',
      exec_mode: 'cluster',
      port: 3000,
      host: 'next.upera.tv',
      instances: '10', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}