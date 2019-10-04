let func1: (x: number, y: number) => number;
let func2: () => void;

func1 = function(x: number, y: number, z?: number, ...nums: number[]) : number{
  return x + y;
}
func2 = function() {
  console.log('hello');
}

// Overloads
function showMsg(msg: string);
function showMsg(msg: number);
function showMsg(msg: any){
  if (typeof msg === 'string'){
    console.log(msg, 'string');
  } else if (typeof msg === 'number'){
    console.log(msg, 'number');
  }
}
