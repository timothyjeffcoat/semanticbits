const Sequelize = require('sequelize');
const sequelize = new Sequelize('interview_database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  storage: 'data/database.sqlite',
  logging: false
});

const init = async (force) => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: force || false })
    return 'Connection has been established successfully.';
  } catch (error) {
    throw new Error('DB Connection failed!', error);
  }
}

module.exports = {
  init,
  sequelize,
  Sequelize
};
