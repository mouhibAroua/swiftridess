const sequelize= require ('../database-sequalize/index');
const {DataTypes } = require('sequelize');

const User = require('./users'); 
const Company = require('./company'); 


const Feedback = sequelize.define('feedback', {
  idfeedback: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  client_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'feedback',
  indexes: [
    {
      name: 'fk_feedback_client1_idx',
      fields: ['client_id'],
    },
  ],
});

Feedback.belongsTo(User, {
  foreignKey: 'client_id',
  as: 'client',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
});

module.exports = Feedback;
