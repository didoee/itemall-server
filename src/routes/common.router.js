const Router = require('koa-router');
const upload = require('../middleware/upload.middleware');
const Result = require('../utils/result');

const router = new Router();

/** 图片上传 */
router.post('/upload/image', upload('image'), (ctx) => {
	console.log(a);

	// 获取文件名
	const { filename } = ctx.req.file;
	// 获取主机地址
	const { host } = ctx.request.header;
	// 拼接图片地址
	ctx.body = Result.success({ data: `//${host}/${filename}` });
});

module.exports = router;
