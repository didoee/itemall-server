const DB = require('../utils/db');

class HomeService {
	/** 查询轮播图 */
	static findBanner() {
		return DB.query('SELECT * FROM `banner`');
	}

	/** 查询热门推荐 */
	static findRecommend() {
		return DB.query('SELECT * FROM `recommend`');
	}
}

module.exports = HomeService;
