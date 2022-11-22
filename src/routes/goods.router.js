const Router = require('koa-router');
const GoodsController = require('../controller/goods.controller');

const router = new Router({ prefix: '/goods' });

/** 查询商品 */
router.get('/', GoodsController.findAll);

/** 根据id查询商品 */
router.get('/:id', GoodsController.findOne);

/** 根据iid查询商品的详情 */
router.get('/detail/:iid', GoodsController.findDetail);

module.exports = router;
