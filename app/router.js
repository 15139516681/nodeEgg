'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/', controller.home.index);
  router.post('createPost', '/login', controller.user.login);
  router.post("createPost", '/register', controller.user.register);
  router.post('/testToken', jwt, controller.user.testToken)
};
