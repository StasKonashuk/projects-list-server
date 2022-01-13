module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Projects', {
      project_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      project_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      project_title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      project_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      project_author: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      project_version_system_control: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
      },
      company_name: {
        type: Sequelize.STRING,
      },
      project_language_status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      project_language: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Projects');
  },
};
