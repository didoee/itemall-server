const HomeService = require('../service/home.service');

class HomeController {
	/** 查询轮播图 */
	static async findBanner(ctx) {
		const data = await HomeService.findBanner();
		ctx.body = data;
	}

	/** 查询热门推荐 */
	static async findRecommend(ctx) {
		const data = await HomeService.findRecommend();
		ctx.body = data;
	}
}

module.exports = HomeController;
