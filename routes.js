const express = require('express');
const projectsController = require('./controller/projectsController');

const rootRouter = express.Router();

rootRouter.get('/projects', projectsController.getProjects);
rootRouter.post('/create-project', projectsController.createProject);
rootRouter.put('/update-project', projectsController.updateProject);

module.exports = rootRouter;
