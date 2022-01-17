const express = require('express');
const projectsController = require('./controller/projectsController');
const validator = require('./middleware/validation');
const { asyncMiddleware } = require('./middleware/error');

const rootRouter = express.Router();

rootRouter.get('/projects', asyncMiddleware(projectsController.getProjects));
rootRouter.post(
  '/create-project',
  validator,
  asyncMiddleware(projectsController.createProject)
);
rootRouter.put(
  '/update-project',
  validator,
  asyncMiddleware(projectsController.updateProject)
);

module.exports = rootRouter;
