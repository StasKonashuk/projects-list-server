const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    static associate() {}
  }
  Projects.init(
    {
      projectId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      projectName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projectTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projectDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projectAuthor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projectVersionSystemControl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
      },
      companName: {
        type: DataTypes.STRING,
      },
      projectLanguage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projectTaskName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projectTaskStatus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Projects',
    }
  );
  return Projects;
};
