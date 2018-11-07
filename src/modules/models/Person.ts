/*
 * @Author: arnaud.perrault
 * @Date: 2018-11-06 19:04:11
 * @Last Modified by: arnaud.perrault
 * @Last Modified time: 2018-11-07 16:54:54
 */
class Person {

  private firstname: string;
  private lastname: string;
  private age: number;
  private job: string;

  constructor(firstname: string, lastname: string, age: number, job: string = 'none') {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.job = job;
  }

  public toString() {
    return `${this.firstname} ${this.lastname} (Age ${this.age}, Job ${this.job})`;
  }

  public printInfo() {
    console.log('', this.toString()); // tslint:disable-line
  }

  public setAge = (age: number) => this.age = age;

  public getAge = () => this.age;

  public setJob = (job: string) => this.job = job;
}

export default Person;
