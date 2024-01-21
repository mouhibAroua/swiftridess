const sequelize= require ('../database-sequalize/index');
const {DataTypes } = require('sequelize');
const Product = sequelize.define('product', {
    ProductID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Color: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    Size: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    Availability: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    Discount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ProductImage: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    
  },{tableName:'product',
});

module.exports= Product;
