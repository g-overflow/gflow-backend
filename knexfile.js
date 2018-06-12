module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/g-flow',
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-g-flow',
  },

  production: {
    client: 'pg',
    connection: 'postgres://aqjncittkbdgmx:f6f72cc031cf6d8bc0fffda35b37e1778ece4385ba82f8fae55fb12942834a35@ec2-54-204-2-26.compute-1.amazonaws.com:5432/d8nftbrin0qk7r',
  },
}