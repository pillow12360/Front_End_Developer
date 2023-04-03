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

function Animal(typepilee)