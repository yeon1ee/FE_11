"use strict";

//선언문 스타일의 함수 선언 방식
function myFun1() {
    console.log('myFun1 call');
}

//표현식 스타일의 함수 선언 방식
const myFun2 = function () {
    console.log('myFun2 call');
}

myFun1();   //myFun1 call
myFun2();   //myFun2 call

//arrow function 선언 방식
const myFun3 = () => {
    console.log('myFun3 call');
}

myFun3();   //myFun3 call

//화살표 함수, 결과 리턴
const myFun4 = (arg1) => {
    console.log(`myFun3, arg1: ${arg1}`);
    return 20;
}

let result4 = myFun4(10);   //result4 = 20
console.log(result4);

//함수의 body가 한 줄이라면 { }가 생략 가능하다.
//{ }을 생략했다면 return을 사용하지 않아도 그 한줄의 실행 값이 자동 리턴된다.

const myFun5 = (arg1) => arg1 * 10;
let result5 = myFun5(10);   //한 줄로 작성했을시, return이 자동으로 된다.
console.log(result5);   //100

//매개변수가 하나라면 ()도 생략 가능
const myFun6 = arg1 => arg1 * 10;
let result6 = myFun6(10);
console.log(result6);   //100