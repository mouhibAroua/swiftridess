const sequelize= require ('../database-sequalize/index');
const {DataTypes } = require('sequelize');

const Company = sequelize.define('company', {
  idcompany: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  companyName: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  ownerName: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  verification: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  longtitude: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  laltitude: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  emailCompany:{
    type:DataTypes.STRING(255),
    allowNull:false,
  },
  passwordCompany:{
    type:DataTypes.STRING(255),
    allowNull:false,
  },
  PaymentVerification:{
    type:DataTypes.BOOLEAN,
    allowNull:false,
  },
  total_idpaiement: {
    type: DataTypes.INTEGER,
    allowNull: true,
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
