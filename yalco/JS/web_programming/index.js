// const SALUTATION= 'Hello,';
// let person = '영희'

// console.log(SALUTATION, person);

// let x = 5;
// let y = x;
// // y는 새로운 메모리에 저장하는 것이 아닌 x의 메모리 공간을 똑같이 가리킨다. 메모리 절약 
// console.log(x);
// console.log(y);

// function print(person)
// {
//   console.log(person.name);
// }

// const person = {
//   name : 'John'
// };

// print(person)
// let a=3;
// if (a+1===2)
// {
//   console.log("True");
// }
// else{
//   console.log("False");
// }


// let device ="iphone1"
// switch (device) {
//   case 'iphone':
//     console.log("아이폰");
//     break
//     case 'ipad':
//       console.log('아이패드');
//       break;
//     default:
//       console.log('오류');
// }

// function add (a,b)
// {
//   return a+b;
// }

// let c = add(1,2);

// console.log(c);

// function sub ( a,b){
//   return a-b;
// }

// console.log(sub(4,2));

// function hello (a)
// {
//   console.log('hello, ${a}!');
// }

// hello('하이');

// const dog = {
//   name : '멍멍이',
//   age : 2
// };
// console.log(dog.name);
// console.log(dog.age);

// const ironMan = {
//   name :'토니 스타크',
//   actor: '로버트 다우니 주니어',
//   alias:'아이언맨' 
// };

// const captainAmerica = {
//   name : '스티븐 로저스',
//   actor : '크리스 에반스',
//   alias : '캡틴 아메리카'
// };

// function print(hero) {
//   const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
//   console.log(text);
// }

// print (ironMan);
// print (captainAmerica);

// const ironMan = {
//   name : '토니 스타크',
//   actor : '로버트 다우니 주니어',
//   alias: '아이어맨'
// };

// const captainAmerica = {
//   name : '스티븐 로저스',
//   actor : '크리스 에반스',
//   alias: '캡틴 아메리카'
// };

// function print (hero) {
//   const {alias, name, actor } = hero;
//   const text = `${alias}(${name})역할을 맡은 배우는 ${actor}입니다.`;
//   console.log(text);
// }

// print(ironMan);
// print(captainAmerica);


const array = [1,2,3,4,5];

//객체 배열 
const objects = [{name: '멍멍이'},{name : '야옹이'}];

objects.push({name : '멍뭉이'});

console.log(objects);

console.log(objects.length);

//==============================================

for (let i = 0; i <= 10; i++){
  console.log(i);
}

let numbers = [10,20,30,40,50,60];
for (let number of numbers) {
  console.log(number);
}
// 객체를 위한 반복문 for in

const doggy = {
  name : '멍멍이',
  sound : '멍멍',
  age : 2
};

for (let key in doggy){
  console.log(`${key}: ${doggy[key]}`);
}

// 배열 내장 함수

// forEach 원소 모두 출력 
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

superheroes.forEach(hero=>{
  console.log(hero);
});

// 객체 생성자

// 객체 생성자는 함수를 통해 새로운 객체를 만들고 그안에 넣고 싶은 값 혹은 함수들을 구현 할 수 있게 해준다.

let x = 5;
let y = x;

// y는 새로운 메모리에 저장하는 것이 아닌 x의 메모리 공간을 똑같이 가리킨다. 메모리 절약 

console.log(x);
console.log(y);

// 자료형 data type
const a = true, b = 123.45 , c= '안녕하세요!';

console.log(a, typeof a);
console.log(b, typeof b);

let d;
console.log(d,typeof d); //undefined

const e = Symbol('hello');
console.log(typeof e);
console.log(e);

let isEmployed = true;
let isMarried = false;

console.log('직업 있음: ', isEmployed);
console.log('기혼: ', isMarried);

console.log ('');

const g = 1>2; 
const u = 1<2; 
// 자동으로 불린 타입으로 대입됨 

console.log(g, typeof u);
console.log(u, typeof u);

// 자바스크립트는 정수 실수 구분이 없음 숫자는 모두 number 형 타입

let integer = 100;
let real = 12.34;

console.log(integer, real, typeof integer, typeof real);
// integer real 의 타입은 number 이다. 
// Big int 형도 있음

let first_name = "Brendan";
let last_name = 'Eich';
let description = `미국의 프로그래머로
자바스크립트 언어를 만들었으며
모질라의 CEO와 CTO를 역임했다.`;

console.log(first_name, last_name);
console.log(description);

console.log(
  typeof 'true', typeof '123.45', typeof 'eee'
);

//undefined 라는 값이 있음 의미 : 무엇인지 모륾

let quie = null;
//콘솔에 입력해 볼 것

//undefined
//브라우저의 콘솔은 코드를 치고 엔터할 때 마다 반환해줌
//console.log 는 반환하는 함수가 아니기 때문에 undefined가 뜸

//null 비어있다.

//null은 비어있음 값이다. 하나의 값

//undefined 였다가 바로 값으로 변경 

//null의 자료형은 object인데 이는 자바가 잘못 설계되어 있는 것이다.
// 수정하지 않는 이유는 전 버전에서 동작해야 하기 때문

//객체와 null값을 구분하는 방법은
console.log (quie === null); //반환값은 True

// 동적 자료형인 자바스크립트와 파이썬은 중간에 데이터타입을 바꿀 수 있다.
// 인터프리터 언어가 동적 타입이다. 

//컴파일 언어와 다른 인터프리터 언어인 자바스크립트에서는 실행단계에서 오류를 발생시키기 때문에 문제가 커질 수 있다.

// 따라서 컴파일 언어보다 자료형에 대해 신경써야 할 것 

// 컴파일 과정이 없어 오류 코드를 걸러내지 못하기 때문

