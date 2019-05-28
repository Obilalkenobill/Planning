export class User {
  username: string;
  password: string;
  roles: Array<Role> = [{id:2,name:"ROLE_USER"}];


  constructor(username: string, password: string,  roles?:Array<Role>) {
    this.username = username;
    this.password = password;

    this.roles=roles;
  }
}

export class Role{
  id:number;
name:string;
constructor(Name:string)
{
  this.name=Name;
}
}

