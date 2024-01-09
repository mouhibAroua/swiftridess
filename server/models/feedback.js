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
  company_idcompany: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  verification: {
    type: DataTypes.TINYINT,
    allowNull: true,
  },
}, {
  tableName: 'feedback',
  indexes: [
    {
      name: 'fk_feedback_client1_idx',
      fields: ['client_id'],
    },
    {
      name: 'fk_feedback_company1_idx',
      fields: ['company_idcompany'],
    },
  ],
});

Feedback.belongsTo(User, {
  foreignKey: 'client_id',
  as: 'client',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
});

Feedback.belongsTo(Company, {
  foreignKey: 'company_idcompany',
  as: 'company',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
});

module.exports = Feedback;
