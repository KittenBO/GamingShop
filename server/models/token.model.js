const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Token = sequelize.define('User', {
    userId: {type: DataTypes.BIGSERIAL, REFERENCES: 'User'},
    refreshToken: {type: DataTypes.STRING, required: true}
  });

  return Token;
};