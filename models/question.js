'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      question.hasMany(models.option), {
        foreignKey:'optionID',
        as: 'option'
      }
      question.belongsTo(models.form, {
        foreignKey:'questionID',
        as:'form'
      })
      // define association here
    }
  };
  question.init({
    questionID: DataTypes.INTEGER,
    questionType: DataTypes.STRING,
    optionTitle: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'question',
  });
  return question;
};