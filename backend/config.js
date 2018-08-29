module.exports = {
  db: `mongodb://${process.env.DB_NAME}:${process.env.DB_PORT}/db`,
  dev: `localhost:${process.env.PORT}`,
  secret: process.env.SECRET_KEY
}
