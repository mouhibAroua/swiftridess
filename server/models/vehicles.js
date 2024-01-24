const sequelize= require ('../database-sequalize/index');
const {DataTypes } = require('sequelize');
const Company = require('./company'); 


const Cars = sequelize.define('cars', {
  idcars: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  price: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  brand: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  model: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  type: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  transmission: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  fuelType: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  registration: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  image: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  mileage: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  rating: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  company_idcompany: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  occasion: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  passengers: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  reserved: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  serialCar: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
}, {
  tableName: 'cars',
  indexes: [
    {
      name: 'fk_cars_company_idx',
      fields: ['company_idcompany'],
    },
  ],
});

Cars.belongsTo(Company, {
  foreignKey: 'company_idcompany',
  as: 'company',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
});

  
module.exports = Cars;
