const Joi = require('joi');

const schema = Joi.object().keys({
  id: Joi.number().required().messages({
    'number.base': 'Id must be a number.',
    'number.empty': 'Id must not be empty.',
  }),
  projectName: Joi.string().min(4).required().max(25).messages({
    'string.max': 'Project Name is too long',
    'string.min': 'Project Name need to be at least 4 characters.',
    'string.empty': 'You need to provide Project Name',
  }),
  projectTitle: Joi.string().required().min(6).max(25).messages({
    'string.max': 'Project Title is too long',
    'string.min': 'Project Title need to be at least 6 characters',
    'string.empty': 'You need to provide Project Title',
  }),
  projectDescripton: Joi.string().required().min(1).max(140).messages({
    'string.max': 'Project Description is too long',
    'string.min': 'Project Description need to be at least 1 character',
    'string.empty': 'You need to provide Project Description',
  }),
  projectAuthor: Joi.string().required().min(4).max(25).messages({
    'string.max': 'Project Author is too long',
    'string.min': 'Project Author need to be at least 4 characters',
    'string.empty': 'You need to provide Project Author',
  }),
  projectVersionSystemControl: Joi.string().required().messages({
    'string.base': 'You need to provide Version Control System',
  }),
  email: Joi.string().messages({
    'string.empty': 'Email must be a string',
  }),
  companyName: Joi.string().messages({
    'string.empty': 'Company name must be a string',
  }),
  projectLanguage: Joi.object({
    language: Joi.string().required().messages({
      'string.empty': 'You need to provide Project language',
    }),
  }),
  projectTasks: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().required().min(3).max(20).messages({
          'string.max': 'Task Name is too long',
          'string.min': 'Task Name needs to be at least 3 character',
          'string.empty': 'Task Name is needed',
        }),
        status: Joi.string().required().min(3).max(10).messages({
          'string.max': 'Task Status is too long',
          'string.min': 'Task Status needs to be at least 3 character',
          'string.empty': 'Task Status is needed',
        }),
      })
    )
    .min(1)
    .messages({
      'array.min': 'Project Tasks must contain at least 1 task',
    }),
});

module.exports = schema;
