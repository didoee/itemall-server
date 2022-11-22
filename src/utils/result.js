class Result {
	constructor({ code, data, message }) {
		this.code = code;
		this.data = data;
		this.message = message;
		this.timestamp = Date.now();
	}

	/** 成功 */
	static success({ data, message }) {
		return new Result({ code: 200, data, message });
	}

	/** 失败 */
	static fail({ code, message }) {
		return new Result({ code, message });
	}
}

module.exports = Result;
