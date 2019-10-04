// Multi Arrays
let arr: (string | number)[] = [1, 'abc'];
let arr1: Array<string | number> = [1, 'abc'];
let arr2: [string, number] = ['abc', 1]; // cortege - fix types and number of arguments

// Enum
enum Color {r, g, b}; // r = 0, g = 1, b =2
let c1: Color = Color.g; //1
enum Status {s = 4, e = 1, r = 10};
let c2: Status = Status.s; // 4
enum Shape {c = 2, t, s}; // c = 2, t = 3, s = 4
console.log(Shape[2]); // c

// Type Assertion
let text = 'Hello World';
let l1 = (<string>text).length;
let l2 = (text as string).length
