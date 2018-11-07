/*
 * @Author: arnaud.perrault
 * @Date: 2018-11-07 13:09:35
 * @Last Modified by: arnaud.perrault
 * @Last Modified time: 2018-11-07 16:03:13
 */
import * as express from 'express';
import PersonControllers from './Person.controllers';

export const personRouters = (apiRoutes: express.Router) => {
  apiRoutes.get('/:name', PersonControllers.getOne);
};
