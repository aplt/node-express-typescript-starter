/*
 * @Author: arnaud.perrault
 * @Date: 2018-11-06 18:32:19
 * @Last Modified by: arnaud.perrault
 * @Last Modified time: 2018-11-07 16:53:26
 */
import express from 'express';
import morgan from 'morgan';
import { allRoutes } from './modules/index';

const app: express.Application = express();

const port: string = process.env.NODE_PORT || '3000';

app.use(morgan('dev'));

const apiRoutes = express.Router();

app.use('/', allRoutes(apiRoutes));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`); // tslint:disable-line
});
