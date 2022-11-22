const GoodsService = require('../service/goods.service');
const Result = require('../utils/result');

class GoodsController {
	/** 查询商品 */
	static async findAll(ctx) {
		const { page = 1, type = 'new', take = 10 } = ctx.query;
		// 计算偏移值
		const offset = (page - 1) * take;
		const data = await GoodsService.findAll([type, offset, take]);
		ctx.body = Result.success({ data });
	}

	/** 根据id查询商品 */
	static async findOne(ctx) {
		const { id } = ctx.params;
		const [data] = await GoodsService.findOne(id);
		ctx.body = Result.success({ data });
	}

	/** 根据iid查询商品的详情 */
	static async findDetail(ctx) {
		const { iid } = ctx.params;
		const [data] = await GoodsService.findDetail(iid);
		ctx.body = Result.success({ data });
	}
}

module.exports = GoodsController;
