const path = require('path');

const multer = require('koa-multer');
const { v4 } = require('uuid');
const { ParameterException } = require('../utils/http-exception');

/**
 * 文件上传
 * @param {*} field 文件的字段
 * @param {*} type 文件类型
 * @returns fn
 */
module.exports = function (field = 'image', type = 'image') {
	return async (ctx, next) => {
		const storage = multer.diskStorage({
			// 文件保存路径
			destination: (request, file, cb) => {
				cb(null, 'static/');
			},
			filename: (request, file, cb) => {
				const isImage = file.mimetype.includes(type);

				if (!isImage) {
					return cb(new ParameterException('文件类型不正确'));
				}

				// 后缀名
				const extname = path.extname(file.originalname);
				// 获取文件名
				cb(null, v4() + extname);
			},
		});

		const upload = multer({ storage });

		await upload.single(field)(ctx);
		await next();
	};
};
