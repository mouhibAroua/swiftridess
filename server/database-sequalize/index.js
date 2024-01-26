const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize('swiftrides', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
  });

  
sequelize.sync({ force: false })
.then(() => {
  console.log('Chat table created (if not exist)');
})
.catch((err) => {
  console.error('Error creating Total table:', err);
});

module.exports = sequelize;