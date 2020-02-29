import express from 'express';
import chalk from 'chalk';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import ApiRouter from './router';
import { genericErrorHandler, routeNotFound } from './lib/middleware';

const app = express();
const apiRouter = ApiRouter();
const port = process.env.PORT || '3001';

app.use(genericErrorHandler);
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRouter);
app.use(routeNotFound);

app.listen(port, () => {
  console.info(chalk.blue(`Server started, running on port ${port}`));
});
