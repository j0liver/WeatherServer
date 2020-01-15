// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
      connection: {
        database: 'users',
        user:     'postgres'
      },
      migrations: { directory: "./data/migrations" },
      seeds: { directory: "./data/seeds" }
    
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: { directory: "./migrations" },
    seeds: { directory: "./seeds" }
  }


};
