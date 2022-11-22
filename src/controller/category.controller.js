const CategoryService = require('../service/category.service');
const Result = require('../utils/result');

class CategoryController {
	/** 查询分类 */
	static async findAll(ctx) {
		const data = await CategoryService.findAll();
		ctx.body = Result.success({ data });
	}
	/** 查询二级分类 */
	static async findSubCategory(ctx) {
		const { maitKey = 3627 } = ctx.params;
		const data = await CategoryService.findSubCategory(maitKey);
		ctx.body = Result.success({ data });
	}
}

module.exports = CategoryController;
