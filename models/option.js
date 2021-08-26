'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      option.belongsTo(models.question, {
        foreignKey:'optionID',
        as:'question'
      })
      // define association here
    }
  };
  option.init({
    optionID: DataTypes.INTEGER,
    optionText: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'option',
  });
  return option;
};