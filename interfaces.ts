interface Customer {
  fullName: string;
  age?: number;
  readonly isSingle: boolean;
}

let obj: Customer = {
  fullName: 'Vasya',
  isSingle: true
};
// obj.isSingle = false; // Error

interface Searchable{
  (value: string) : boolean;
}

let myFunc1: Searchable = function(data: string) : boolean {
  // it is not necessary that param should be the same name as it in interface. Example (value -> data)
  return true;
}

// in Classes
interface Report{
  name: string;
  build: () => string;
}

class DailyReport implements Report{
  name: string = 'daily';
  constructor(){}

  build() :  string {
      return this.name;
  }
}
