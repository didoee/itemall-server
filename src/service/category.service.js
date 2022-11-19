const DB = require('../utils/db');

class CategoryService {
	/** 查询分类 */
	static findAll() {
		return DB.query('SELECT * FROM `category`');
	}

	/** 查询二级分类 */
	static findSubCategory(params) {
		return DB.query('SELECT * FROM `subcategory` WHERE `maitKey` = ?', params);
	}
}

module.exports = CategoryService;
