/*
 * @Author: arnaud.perrault
 * @Date: 2018-11-05 14:09:40
 * @Last Modified by: arnaud.perrault
 * @Last Modified time: 2018-11-06 19:05:33
 */
import * as express from 'express';
import { personRouters } from './Person/Person.routes';

export const allRoutes = (router: express.Router) => {

  personRouters(router);

  return router;
};
