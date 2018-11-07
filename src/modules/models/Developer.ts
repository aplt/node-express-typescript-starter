/*
 * @Author: arnaud.perrault
 * @Date: 2018-11-07 13:41:30
 * @Last Modified by: arnaud.perrault
 * @Last Modified time: 2018-11-07 16:54:06
 */
import Person from './Person';

class Developer extends Person {
  constructor(firstname: string, lastname: string, age: number) {
    super(firstname, lastname, age, 'Developer');
  }
}

export default Developer;
