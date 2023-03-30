const SALUTATION= 'Hello,';
let person = '영희'

console.log(SALUTATION, person);

let x = 5;
let y = x;
// y는 새로운 메모리에 저장하는 것이 아닌 x의 메모리 공간을 똑같이 가리킨다. 메모리 절약 
console.log(x);
console.log(y);