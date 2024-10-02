"use strict"

//일반 함수 선언과 이용
function myFun(){
    console.log('myFun');
}

//선언과 호출은 별개이다
//원하는만큼 반복 호출 가능
myFun('홍길동');
myFun('김길동');

//즉시 실행 함수
//선언과 동시에 호출한다. 이름을 가지지 않기 때문에 반복 호출이 불가하다
(function(name) {
    console.log('Hello');
})('홍길동')

//특정 변수, 함수의 이용 범위를 한정 짓고 싶을 때 주로 라이브러리 코드 내에서 
(function() {
    let data = 10;
    function fun1() { }
})()

//data = 20;
//fun1 ()

//특정 변수가 있는데 몇 몇 함수에서만 사용되게 강제하고자 할 때

// let count = 0;
// function increment() {
//     count++;
// }
// function decrement() {
//     count--;
// }

// increment();
// increment();
// decrement();

// console.log(count);

// //increment, decrement에서 사용하는 데이터가 코드 어디선가 다른 의미로 사용되는 것을 방지한다.
// count = 100;
// increment();
// console.log(101);

const counter = (function() {
    let count = 0;
    return function(argFun) {
        count = argFun(count);
        return count;
    }
})()

let increment = (no) => ++no;
let decrement = (no) => --no;

console.log(counter(increment));
console.log(counter(increment));
console.log(counter(decrement));

//어디선가 잘못
let count = 100;