export class User {
    username: string;
    password: string;
    roles: Array<Role> = [];
  
  
    constructor(username: string, password: string) {
      this.username = username;
      this.password = password;
  
      this.roles.push(Role.User);
    }
  }
  
  export enum Role{
    Admin= 1,
    User= 2
  }
  