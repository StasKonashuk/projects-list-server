const { Projects, Tasks } = require('../models');

class ProjectsController {
  async getProjects(req, res) {
    const projects = await Projects.findAll({
      include: ['tasks'],
    });
    res.json(projects);
  }

  async createProject(req, res) {
    const {
      id,
      companyName,
      email,
      projectAuthor,
      projectDescripton,
      projectLanguage: { status, language },
      projectName,
      projectTasks,
      projectTitle,
      projectVersionSystemControl,
    } = req.body;

    const project = await Projects.create({
      project_id: id,
      project_name: projectName,
      project_title: projectTitle,
      project_description: projectDescripton,
      project_author: projectAuthor,
      project_version_system_control: projectVersionSystemControl,
      email,
      company_name: companyName,
      project_language: language,
      project_language_status: status,
    });

    const tasks = [];

    for (const key of projectTasks) {
      const task = await Tasks.create({
        task_name: key.name,
        task_status: key.status,
        project_id: id,
      });
      tasks.push(task);
    }
    res.json({
      ...project.get({ plain: true }),
      tasks,
      message: 'Project created successfully',
    });
  }

  async updateProject(req, res) {
    const {
      id,
      companyName,
      email,
      projectAuthor,
      projectDescripton,
      projectLanguage: { status, language },
      projectName,
      projectTasks,
      projectTitle,
      projectVersionSystemControl,
    } = req.body;

    await Projects.update(
      {
        project_name: projectName,
        project_title: projectTitle,
        project_description: projectDescripton,
        project_author: projectAuthor,
        project_version_system_control: projectVersionSystemControl,
        email,
        company_name: companyName,
        project_language_status: status,
        project_language: language,
      },
      { where: { project_id: id } }
    );

    for (const key of projectTasks) {
      await Tasks.update(
        {
          task_name: key.name,
          task_status: key.status,
        },
        { where: { task_id: key.id } }
      );
    }

    res.json({
      message: 'Project updated successfully',
    });
  }
}

module.exports = new ProjectsController();
