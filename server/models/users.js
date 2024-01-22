const sequelize= require ('../database-sequalize/index');
const {DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  fullName: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  image_user: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  phoneNumber: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  longitude: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  latitude: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  role: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
}, {
  tableName: 'user',
  engine: 'InnoDB',
});

module.exports = User;
