const CategoryService = require('../service/category.service');

class CategoryController {
	/** 查询分类 */
	static async findAll(ctx) {
		const data = await CategoryService.findAll();
		ctx.body = data;
	}
	static async findSubCategory(ctx) {
		const { maitKey = 3627 } = ctx.params;
		const data = await CategoryService.findSubCategory(maitKey);
		ctx.body = data;
	}
}

module.exports = CategoryController;
