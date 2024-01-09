const sequelize= require ('../database-sequalize/index');
const {DataTypes } = require('sequelize');

const Company = sequelize.define('company', {
  idcompany: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  companyName: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  ownerName: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  phoneNumber: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  verification: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  longtitude: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  laltitude: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  total_idpaiement: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'company',
  indexes: [
    {
      name: 'fk_company_total1_idx',
      fields: ['total_idpaiement'],
    },
  ],
});

const Total = require('./total.js'); 

Company.belongsTo(Total, {
  foreignKey: 'total_idpaiement',
  as: 'total',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
});

module.exports = Company;
