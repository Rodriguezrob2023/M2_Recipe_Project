'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init({
    book_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    year_published: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};