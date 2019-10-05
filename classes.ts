class User {
  public readonly name: string;
  public static age: number = 20;
  private _company: string;
  protected sureName: string;

  // if put modificators(public/private) param become internal property of class
  constructor(name: string, public firstname: string, private level: number){
    this.name = name; // readonly can be changed only in constructor
  }

  // getter
  get company() : string{
    return this.company;
  }

  // setter
  set company(companyName: string){
    this.company = companyName;
  }
}

let user: User = new User('Vasua Pypkin', 'Vasya', 20);
user.company = 'Google';
console.log(user.company);

// Abstract
abstract class Animal{
  constructor(){}

 //abstract method that does not exists but should be created in child class
 // can be created only in abstract class
  abstract makeSound();

  public move() : void{
    console.log('move')
  }
}

class Dog extends Animal{
  constructor(){
    super();
  }
  makeSound(){
    console.log('wow');
  }
}
