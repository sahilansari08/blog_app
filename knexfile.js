/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
      client: 'postgresql',
      connection: {
        database: 'blogapp',
        user:     'postgres',
        password: 'Sahil@123'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  
  };