class ProjectsController {
  getProjects(req, res) {
    try {
      console.log('Get');
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
