// 文件模块
const fs = require('fs');
const colors = require('colors-console');

function setupRouter(app) {
	// 读取文件夹 src/routes ['home.router.js', 'category.router.js','index.js']
	fs.readdirSync(__dirname)
		// 过滤掉 index.js ['home.router.js', 'category.router.js'']
		.filter((fileName) => fileName.endsWith('.router.js'))
		// 遍历 ['home.router.js', 'category.router.js'']
		.forEach((fileName) => {
			// 导入路由模块
			const router = require(`./${fileName}`);
			// 使用路由中间件
			app.use(router.routes());

			// 打印日志
			const m = colors('magenta', fileName.replace('.router.js', ''));
			const text = colors('green', 'router installed successfully');
			console.log(`${m} ${text}`);
		});
}

module.exports = setupRouter;
