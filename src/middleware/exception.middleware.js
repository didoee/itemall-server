const Result = require('../utils/result');

/** 异常处理中间件 */
module.exports = function () {
	return async (ctx, next) => {
		try {
			await next();
		} catch (error) {
			let { code = 500, message } = error;

			if (code === 500) message = '服务器内部错误';

			ctx.body = Result.fail({ code, message });
		}
	};
};
