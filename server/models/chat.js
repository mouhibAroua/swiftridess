const sequelize= require ('../database-sequalize/index');
const {DataTypes } = require('sequelize');
const User = require('./users'); 
const Company = require('./company'); 

const Chat = sequelize.define('chat', {
  idchat: {
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
}, {
  tableName: 'chat',
  indexes: [
    {
      name: 'fk_chat_client1_idx',
      fields: ['client_id'],
    },
    {
      name: 'fk_chat_company1_idx',
      fields: ['company_idcompany'],
    },
  ],
});

Chat.belongsTo(User, {
  foreignKey: 'client_id',
  as: 'client',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
});

Chat.belongsTo(Company, {
  foreignKey: 'company_idcompany',
  as: 'company',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
});

module.exports = Chat;
