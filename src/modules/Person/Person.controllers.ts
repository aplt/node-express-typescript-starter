/*
 * @Author: arnaud.perrault
 * @Date: 2018-11-07 16:00:54
 * @Last Modified by: arnaud.perrault
 * @Last Modified time: 2018-11-07 16:53:46
 */
import * as express from 'express';
import Person from '../models/Person';
import Developer from '../models/Developer';

export default {
  getOne(req: express.Request, res: express.Response) {
    const { name } = req.params;

    const person = new Person('Arnaud', 'Perrault', 23);
    const developer = new Developer('John', 'Doe', 33);

    res.status(200).send(
      `
        Hello ${person}, you are on page <b>${name}</b>!
        <br/>${developer} is Developer!
      `,
    );
  },
};
