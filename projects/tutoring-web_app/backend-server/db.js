const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tutoring_app', 'root', 'jehovah00123', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Database connection failed: ', err);
  });

module.exports = sequelize;
