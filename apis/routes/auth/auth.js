const express = require("express");
const { celebrate, Joi, errors } = require("celebrate");
const { register, login } = require("./authFunction");

const router = express.Router();

const authRoutes = async (app) => {
  app.use("/auth", router);

  router.post(
    "/login",
    celebrate({
      body: Joi.object({
        username: Joi.string().alphanum().required(),
        password: Joi.string()
          .regex(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          )
          .required(),
      }),
    }),
    login
  );

  router.post(
    "/register",
    celebrate({
      body: Joi.object({
        username: Joi.string().alphanum().required(),
        firstname: Joi.string()
          .regex(/^[a-z]+$/i)
          .required(),
        lastname: Joi.string()
          .regex(/^[a-z]+$/i)
          .required(),
        email: Joi.string().email().required(),
        password: Joi.string()
          .regex(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          )
          .required(),
        organization: Joi.string().required(),
        address: Joi.string().required(),
      }),
    }),
    register
  );
  app.use(errors());
};
module.exports = authRoutes;
