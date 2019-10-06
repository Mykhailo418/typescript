// reference something like import in ES6
/// <reference path="variables.ts" />

namespace Sample {
  export class MyClass {
    public show(){
      console.log('Hello MyClass');
    }
  }
  export namespace Complex {
    export class MyClass2 {
      show(){
        console.log('Hello MyClass2')
      }
    }
  }
}
let temp = new Sample.MyClass();
temp.show();

import complex = Sample.Complex; // aliase
let temp2 = new complex.MyClass2();
let temp3 = new Sample.Complex.MyClass2();
