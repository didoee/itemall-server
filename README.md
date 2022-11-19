### 1.导入sql

### 2.搭建项目

```bash
# 创建目录
mkdir itemall-server
# 进入目录
cd itemall-server
# 初始化项目
npm init -y
# 安装开发依赖
npm i nodemon @types/node -D
# 安装生成依赖
npm i koa koa-multer koa-router koa-bodyparser koa-cors mysql2
```

### 3.修改`package.json`

```json
{
	"name": "itemall-server",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"start": "nodemon ./src/app.js"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"devDependencies": {
		"@types/node": "^18.11.9",
		"nodemon": "^2.0.20"
	},
	"dependencies": {
		"koa": "^2.13.4",
		"koa-bodyparser": "^4.3.0",
		"koa-cors": "^0.0.16",
		"koa-multer": "^1.0.2",
		"koa-router": "^12.0.0",
		"mysql2": "^2.3.3"
	}
}
```

### 4.目录结构

<img src="C:\Users\25547\AppData\Roaming\Typora\typora-user-images\image-20221119142833816.png" alt="image-20221119142833816" style="zoom:50%;" />

```json
itemall-server
 ├── package-lock.json 锁定依赖版本
 ├── package.json 项目配置文件
 └── src
     ├── app.js 入库文件
     ├── controller 控制层 处理业务逻辑
     ├── routes 路由
     ├── service 服务层 操作数据库
     └── utils 工具类
```

