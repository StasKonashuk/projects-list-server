const express = require('express');

const rootRouter = express.Router();

rootRouter.get('/projects');
rootRouter.post('/create-project');
rootRouter.patch('/update-project');

module.exports = rootRouter;
