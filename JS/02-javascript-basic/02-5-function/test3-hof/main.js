"use strict"

//test1: local variable via global variable
let data1 = 10; //global variable

function myFun(arg1) {
    let data2 = 20;
    //함수 내부에서 global, local variable 사용 가능
    console.log(`${data1}, ${data2}, ${arg1}`);
}

myFun(30);  //10, 20, 30

console.log(data1); //10
/* 
console.log(arg1);  //undefined arg1은 함수 지역 변수이기 때문이다.
console.log(data2); //undefined data2는 함수 지역 변수이기 때문이다. */

//hof
function test1() { console.log('test1'); }
function test2() { console.log('test2'); }

function myFun2(arg) {
    arg();
    return test2;
}

myFun2(test1);  //test1 콘솔창1

let result = myFun2(test1); //test1 콘솔창 출력, result = test2
result();   //test2()와 같음 -> test2 출력


//위의 함수를 화살표 함수로 표현한 것
function myFun3(arg) {
    arg();
    return () => console.log('test2');
}

let result3 = myFun3( () => console.log('test1') );
result3();