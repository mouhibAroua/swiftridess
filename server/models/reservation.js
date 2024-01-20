const sequelize = require('../database-sequalize/index');
const { DataTypes } = require('sequelize');
const User = require('./users');
const Cars = require('./vehicles');
const Company = require('./company');

const Reservation = sequelize.define('reservation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  iduser: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idcar: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idcompany: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  returnDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'reservation',
  indexes: [
    {
      name: 'fk_reservation_user_idx',
      fields: ['iduser'],
    },
    {
      name: 'fk_reservation_car_idx',
      fields: ['idcar'],
    },
    {
      name: 'fk_reservation_company_idx',
      fields: ['idcompany'],
    },
  ],
});

Reservation.belongsTo(User, {
  foreignKey: 'iduser',
  as: 'user',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
});

Reservation.belongsTo(Cars, {
  foreignKey: 'idcar',
  as: 'car',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
});

Reservation.belongsTo(Company, {
  foreignKey: 'idcompany',
  as: 'company',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
});

module.exports = Reservation;
