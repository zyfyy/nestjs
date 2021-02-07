export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  mysql: {
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT, 10) || 5432,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
  },
  mg1: {
    url: process.env.MONGODB_1,
  },
  mg2: {
    url: process.env.MONGODB_2,
  },
});
