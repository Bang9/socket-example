module.exports = {
  apps : [
    {
      name: 'server',
      script: 'src/server.js',
      watch: true
    },
    {
      name: "client1",
      script: 'src/client1.js',
      watch: true
    },
    {
      name: "client2",
      script: 'src/client2.js',
      watch: true
    }
  ]
};
