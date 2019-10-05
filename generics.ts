// Functions
function myFunc<T>(value: T) : T {
  return value;
}
let v1 = myFunc<string>('Hello');
let v2 = myFunc<number>(10);

function writeLogArrat<T>(arr: T[]) : T[] { // or (arr: Array<T>) : Array<T>
  console.log(arr.length);
  return arr;
}

// Interfaces
interface GenericFunc11{
  <T>(arg: T) : T; // declare function
}
function testFunc11<T>(value: T) : T {
  return value;
}
let myGenericFunc11: GenericFunc11 = testFunc11;
console.log(myGenericFunc11(11));

interface GenericFunc22<T>{
  count(arg: T) : T;
}
function testFunc22<T>(value: T) : T {
  return value;
}
let myGenericFunc22: GenericFunc22<number> = {
  count: testFunc22
};
console.log(myGenericFunc22.count(44));

// Classes
class MyGenericClass<T>{
  public value: T;
  constructor(value: T){
    this.value = value;
  }
  public method() : T {
    return this.value
  }
}
let myGenericObj = new MyGenericClass<number>(5);
console.log(myGenericObj.method()); // 5

class KeyValuePairClass<TKey, TValue>{
  private key: TKey;
  private value: TValue;

  constructor(key: TKey, value: TValue){
    this.key = key;
    this.value = value;
  }

  getValueByKey(key: TKey) : TValue | null {
    return (key === this.key) ? this.value : null;
  }
}
let myKeyValueObj = new KeyValuePairClass<string, number>('hello', 10);
console.log(myKeyValueObj.getValueByKey('hello')); //10

// Constraints
interface Countable{
  count: number;
}
class CountableClass<T extends Countable> {
  // <T extends Countable? - T must have all params from Countable
  private value: T;

  constructor(value: T){
    this.value = value;
  }

  getCount(){
    return this.value.count;
  }
}
let testObj: Countable = {count: 2};
// it can be anther class that implements Countable interface OR includes 'count' param in this case
let myCountableObj = new CountableClass<Countable>(testObj);
console.log(myCountableObj.getCount());
