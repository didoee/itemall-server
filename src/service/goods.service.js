const DB = require('../utils/db');

class GoodsService {
	/** 查询商品 */
	static findAll(params) {
		return DB.query(
			'SELECT * FROM `goods` WHERE `type` = ? LIMIT ?, ?',
			params
		);
	}

	/** 根据id查询商品 */
	static findOne(params) {
		return DB.query('SELECT * FROM `goods` WHERE `id` = ?', params);
	}

	/** 根据iid查询商品的详情 */
	static findDetail(params) {
		return DB.query('SELECT * FROM `detail` WHERE `iid` = ?', params);
	}
}

module.exports = GoodsService;
