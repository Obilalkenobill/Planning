export class User {
  username: string;
  password: string;
  roles: Array<Role> = [];


  constructor(username: string, password: string, roles:Array<Role>) {
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

