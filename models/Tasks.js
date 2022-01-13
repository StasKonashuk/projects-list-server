const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    static associate({ Projects }) {
      this.belongsTo(Projects, { foreignKey: 'project_id', as: 'projects' });
    }
  }
  Tasks.init(
    {
      task_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      task_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      task_status: {
        allowNull: false,
        type: DataTypes.STRING,
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
      tableName: 'Tasks',
      modelName: 'Tasks',
    }
  );
  return Tasks;
};
