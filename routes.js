const express = require('express');
const projectsController = require('./controller/projectsController');
const validator = require('./middleware/validation');

const rootRouter = express.Router();

rootRouter.get('/projects', projectsController.getProjects);
rootRouter.post('/create-project', validator, projectsController.createProject);
rootRouter.put('/update-project', validator, projectsController.updateProject);

module.exports = rootRouter;
