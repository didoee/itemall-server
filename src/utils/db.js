const mysql = require('mysql2');

class DB {
	/** 获取数据库连接 */
	static #getConnection() {
		return mysql.createConnection({
			host: 'localhost',
			port: 3306,
			user: 'root',
			password: '123456',
			database: 'itemall',
		});
	}

	/** 执行sql */
	static async query(sql, params) {
		const conn = DB.#getConnection();
		try {
			const [result] = await conn.promise().query(sql, params);
			return result;
		} catch (error) {
			console.log(error);
		} finally {
			conn.end();
		}
	}
}

module.exports = DB;
