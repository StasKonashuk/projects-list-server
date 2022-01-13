const { Projects, Tasks } = require('../models');

class ProjectsController {
  async getProjects(req, res) {
    try {
      await Projects.findAll({
        include: ['tasks'],
      })
        .then((projects) => {
          return res.status(200).json(projects);
        })
        .catch((error) => {
          return res.json({ error: error.message });
        });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
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

    try {
      await Projects.create({
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
      })
        .then(() => {
          for (const task of projectTasks) {
            Tasks.create({
              task_name: task.name,
              task_status: task.status,
              project_id: id,
            });
          }
          res.status(200).json({ message: 'User created successfully' });
        })
        .catch((error) => {
          return res.status(400).json({ error: error.message });
        });
    } catch (error) {
      res.status(500).json({ error: error.message });
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
    try {
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
        { returning: true, where: { project_id: id } }
      )
        .then(() => {
          for (const task of projectTasks) {
            Tasks.update(
              {
                task_name: task.name,
                task_status: task.status,
              },
              { returning: true, where: { task_id: task.id } }
            );
          }
          res.status(200).json({ message: 'Project updated successfully' });
        })
        .catch((error) => {
          return res.status(400).json({ error: error.message });
        });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ProjectsController();
