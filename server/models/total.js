const sequelize= require ('../database-sequalize/index');
const {DataTypes } = require('sequelize');

const Total = sequelize.define('total', {
  idpaiement: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  paiement: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
}, {
  tableName: 'total',
  engine: 'InnoDB',
});

module.exports = Total;
