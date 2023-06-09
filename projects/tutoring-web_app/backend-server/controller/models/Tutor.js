const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Tutor = sequelize.define('Tutor', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  experience: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Tutor;
