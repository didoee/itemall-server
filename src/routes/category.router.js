const Router = require('koa-router');

const CategoryController = require('../controller/category.controller');

const router = new Router({ prefix: '/category' });

// 查询分类
router.get('/', CategoryController.findAll);
// 查询二级分类
router.get('/:maitKey', CategoryController.findSubCategory);

module.exports = router;
