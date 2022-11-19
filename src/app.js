const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');

const setupRouter = require('./routes');

const bootstrap = () => {
	const app = new Koa();

	app.use(cors());
	app.use(bodyParser());

	setupRouter(app);

	app.listen(3000, () => {
		console.log('Server is running at http://localhost:3000');
	});
};

bootstrap();
