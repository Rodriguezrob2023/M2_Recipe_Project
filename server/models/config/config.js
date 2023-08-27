
module.export = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.BD_PASSWORD,
    database: process.env.DN_NAME,
    host: process.env.DB_HOST,
    logging: true,
    dialect: "postgres"
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.BD_PASSWORD,
    database: process.env.DN_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres"
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.BD_PASSWORD,
    database: process.env.DN_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres"
  }
}
