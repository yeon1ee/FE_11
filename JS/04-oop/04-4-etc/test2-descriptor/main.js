"use strict"

let obj = {
    name: '홍길동',
    age: 10,
    address: 'seoul'
}

//특정 객체의 property의 descriptor 확인
console.log(Object.getOwnPropertyDescriptors(obj, 'name'));  
//{value: '홍길동', writable: true, enumerable: true, configurable: true[[Prototype]]: Object

//writable: 값 변경을 불가능하게 만듦
Object.defineProperty(obj, 'age', {writable: false});
obj.name = '김길동';
//obj.age = 20; //error -> writable: false로 되어있기 때문

//enumerable
console.log(Object.keys(obj));  //['name', 'age', 'address']
console.log(Object.values(obj));  //['김길동', 10, 'seoul']
console.log(Object.entries(obj));
//0: (2) ['name', '김길동']
//1: (2) ['age', 10]
//2: (2) ['address', 'seoul']

//in 열거 예약어 obj의 entry 갯수만큼 for 반복한다
for(let property in obj) {
    console.log(property);
}
//name
//age
//address

Object.defineProperty(obj, 'age', {enumerable: false});
console.log(Object.entries(obj));
//0: (2) ['name', '김길동']
//1: (2) ['address', 'seoul']

for (let property in obj) {
    console.log(property);
}
//name
//address
console.log(obj.age);   //10

//configurable
//wriable을 false로 지정했다고 해도 누군가 true로 변경해서 값 변경을 할 수도 있다.
Object.defineProperty(obj, 'age', {writable: true});
obj.age = 20;

//descriptor을 조정한 후에 다시 descriptor가 조정되지 못하게 하기
Object.defineProperty(obj, 'age', {writable: false, configurable: false});
Object.defineProperty(obj, 'age', {writable: true});