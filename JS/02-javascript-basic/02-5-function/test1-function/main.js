"use strict"

//test1 함수 선언 및 이용
console.log('step1');
function myFun1() {
    console.log('execute function body');
}

console.log('step2');

/*
step1
step2
*/

//선언 자체로 함수의 body가 실행되지는 않는다.
//어디선가 이 함수를 호출해야 실행된다.

myFun1();
console.log('step3');

/*
step1
step2
execute function body
step3
*/ 

//함수가 호출되면 함수부분이 모두 실행되어야 아래부분이 실행된다.
//함수는 일종의 코드 재사용이다.
//선언하고 필요한 곳에서 반복 호출한다.

//test2: argument, return value
function myFun2(arg1, arg2) {
    console.log(`arg1: ${arg1}, arg2: ${arg2}`);
    if(arg1 < arg2) {
        return arg1;
    } else { return arg2; }
}

let result = myFun2(10, 20);
console.log(result);

//매개 변수 값이 없다면 undefined으로 출력된다.

myFun2();   //arg1: undefined, arg2:undefined
myFun2(10); //arg1: 10, arg2: undefined

/*
step1
step2
execute function body
step3
arg1: 10, arg2: 20
10
arg1: undefined, arg2:undefined
arg1: 10, arg2: undefined
*/ 

//test3: default parameter
function myFun3(arg1, arg2 = 0) {
    console.log(`arg1: ${arg1}, arg2: ${arg2}`);
}
console.log('``````````');

myFun3();   //arg1: undefined, arg2: 0
myFun3(10); //arg1: 10, arg2: 0
myFun3(10, 20); //arg1: 10, arg2: 20

/*
step1
step2
execute function body
step3
arg1: 10, arg2: 20
10
arg1: undefined, arg2: undefined
arg1: 10, arg2: undefined
``````````
arg1: undefined, arg2: 0
arg1: 10, arg2: 0
arg1: 10, arg2: 20
*/


//rest parameter
function myFun4(arg1, ...arg2) {
    console.log(arg1);
    //rest parameter는 배열
    if(arg2.length > 0) {
        for (let i = 0; i < arg2.length; i++) {
            console.log(`arg2[${i}] = ${arg2[i]}`);
        }
    }
}

myFun4(10, 20); //arg2[0] = 20
myFun4(10, 20, 30, 40, 50); //매개 변수가 많을때 rest parameter를 사용한다.
