const sequelize= require ('../database-sequalize/index');
const {DataTypes } = require('sequelize');
const User = require('./users'); 
const Cars = require('./vehicles'); 


const ClientHasCars = sequelize.define('client_has_cars', {
  client_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    
    primaryKey: true,
  },
  cars_idcars: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  total: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  confirmation: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
}, {
  tableName: 'client_has_cars',
  indexes: [
    {
      name: 'fk_client_has_cars_cars1_idx',
      fields: ['cars_idcars'],
    },
    {
      name: 'fk_client_has_cars_client1_idx',
      fields: ['client_id'],
    },
  ],
});

ClientHasCars.belongsTo(User, {
  foreignKey: 'client_id',
  as: 'client',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
});

ClientHasCars.belongsTo(Cars, {
  foreignKey: 'cars_idcars',
  as: 'cars',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
});


module.exports = ClientHasCars;
