// message为异常信息，code为HTTP状态码(返回给前端的状态)

class HttpException extends Error {
	constructor(message = '服务器异常', code = 400) {
		super();
		this.code = code;
		this.message = message;
	}
}

/** 参数错误 */
class ParameterException extends HttpException {
	constructor(message = '参数错误', code = 400) {
		super(message, code);
	}
}

class AuthorizationException extends HttpException {
	constructor(message = '授权失败', code = 401) {
		super(message, code);
	}
}

class ForbiddenException extends HttpException {
	constructor(message = '禁止访问', code = 403) {
		super(message, code);
	}
}

/** 404 */
class NotFoundException extends HttpException {
	constructor(message = '资源未找到', code = 404) {
		super(message, code);
	}
}

module.exports = {
	HttpException,
	ParameterException,
	NotFoundException,
	AuthorizationException,
	ForbiddenException,
};
