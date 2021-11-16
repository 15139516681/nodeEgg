'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/info', controller.user.list);
  router.post('createPost', '/login', controller.user.login)
};
