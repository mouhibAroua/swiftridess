const sequelize= require ('../database-sequalize/index');
const {DataTypes } = require('sequelize');

const Total = sequelize.define('total', {
  idpaiement: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  paiement: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'total',
  engine: 'InnoDB',
});

module.exports = Total;
