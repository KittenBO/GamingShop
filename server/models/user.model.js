const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    name: {type: DataTypes.STRING, allowNull: false,},
    password: {type: DataTypes.STRING, allowNull: false,},
    email: {type: DataTypes.STRING, allowNull: false,},
    isAcrivated: {type: DataTypes.BOOLEAN, default: false },
    activationLink: {type: DataTypes.STRING}
  });

  return User;
};