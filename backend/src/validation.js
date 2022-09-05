// Validation
const Joi = require("@hapi/joi");

//Register validation
const registerValidation = (data)=>{
  const schema =Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required() 
  });
  const validation = schema.validate(data);
  return validation;
};

//Login validation
const loginValidation =(data)=>{
  const schema =Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required() 
  });
  const validation = schema.validate(data);
  return validation;
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;