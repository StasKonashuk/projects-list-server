const { Projects } = require('../models');

class ProjectsController {
  async getProjects(req, res) {
    try {
      const projects = await Projects.findAll();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  createProject(req, res) {
    try {
      console.log('Create');
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
