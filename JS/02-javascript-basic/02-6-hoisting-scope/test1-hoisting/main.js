"use strict"

//var hoisting test
//아래에 선언된 변수의 선언부분만 (값 할당은 빼고) 위로 올린다.
console.log(`step1, data1 = ${data1}`); //step1, data1 = undefined
data1 = 20;
console.log(`step1, data1 = ${data1}`); //step1, data1 = 20
var data1 = 10; 
console.log(`step1, data1 = ${data1}`); //step1, data1 = 10

//let, const hoisting test
/*
console.log(data2);
console.log(data3);

let data2 = 10;
const data3 = 30; */

//var에 한해서만 hoisting에 의해 선언 위치 위에서 변수 이용 가능 

//function hoisting test
console.log(myFun1());
function myFun1() {
    return 'myFun1 call';
}

console.log(myFun2());
const myFun2 = () => {
    return 'myFun2 call'
}

//var로 함수를 선언하면 호이스팅이 되기는 한다.
//선언 부분만 위로 올린다. 값이 할당 되기 전까지는 undefined 상태이다.
console.log(myFun3());
var myFun3 = () => {
    return 'myFun3 call'
}

//표현식 함수로 선언하면 호이스팅이 안된다.
