const { Projects, Tasks } = require('../models');

class ProjectsController {
  async getProjects(req, res) {
    const projects = await Projects.findAll({
      include: ['tasks'],
    });
    res.status(200).json(projects);
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

    if (project) {
      for (const task of projectTasks) {
        Tasks.create({
          task_name: task.name,
          task_status: task.status,
          project_id: id,
        });
        res.status(200).json({ message: 'Project created successfully' });
      }
    }
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

    const project = await Projects.update(
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

    if (project) {
      for (const task of projectTasks) {
        Tasks.update(
          {
            task_name: task.name,
            task_status: task.status,
          },
          { where: { task_id: task.id } }
        );
      }
      res.status(200).json({ message: 'Project updated successfully' });
    }
  }
}

module.exports = new ProjectsController();
