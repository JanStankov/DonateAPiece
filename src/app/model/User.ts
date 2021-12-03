export class User {
  name: string
  surname: string
  email: string
  password: string
  image:string
  points: number
  claims: number

  constructor(name: string, surname: string, email: string, password: string,image: string) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.image =image;
    this.points = Math.ceil(Math.random()*100);
    this.claims = 0
  }
}
