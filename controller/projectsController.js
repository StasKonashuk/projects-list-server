const { Projects, Tasks } = require('../models');

class ProjectsController {
  async getProjects(req, res) {
    try {
      const projects = await Projects.findAll();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createProject(req, res) {
    const {
      companyName,
      email,
      projectAuthor,
      projectDescripton,
      projectLanguage: { language },
      projectName,
      projectTasks,
      projectTitle,
      projectVersionSystemControl,
    } = req.body;
    try {
      await Projects.create({
        project_name: projectName,
        project_title: projectTitle,
        project_description: projectDescripton,
        project_author: projectAuthor,
        project_version_system_control: projectVersionSystemControl,
        email,
        company_name: companyName,
        project_language: language,
      });
      for (const task of projectTasks) {
        Tasks.create({
          task_name: task.name,
          task_status: task.status,
        });
      }
      res.status(200).json({ message: 'Project created successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  updateProject(req, res) {
    try {
      console.log('Update');
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ProjectsController();
