/* export interface User {
  id?: string;
  role?:string;
  name?: string;
  lastname?: string;
  password?: string;
  email: string;
} */


export class User {

  constructor(_id = "", role = "", name="", lastname = "", password = "", email = 0) {
    this._id = _id;
    this.role = role;
    this.name = name;
    this.lastname = lastname;
    this.password = password;
    this.email = email;
  }

  _id: string;
  role: string;
  name: string;
  lastname: string;
  password: string;
  email: number;
}
