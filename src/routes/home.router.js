const Router = require('koa-router');

const HomeController = require('../controller/home.controller');
const router = new Router({ prefix: '/home' });

// 查询轮播图
router.get('/banner', HomeController.findBanner);
// 查询热门推荐
router.get('/recommend', HomeController.findRecommend);

module.exports = router;
