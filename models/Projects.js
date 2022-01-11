const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    static associate() {}

    toJSON() {
      return { ...this.get(), project_id: undefined };
    }
  }
  Projects.init(
    {
      project_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      project_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      project_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      project_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      project_author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      project_version_system_control: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
      },
      company_name: {
        type: DataTypes.STRING,
      },
      project_language: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      tableName: 'Projects',
      modelName: 'Projects',
    }
  );
  return Projects;
};
