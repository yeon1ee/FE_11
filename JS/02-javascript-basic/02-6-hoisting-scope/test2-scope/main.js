"use strict"

//동일 scope 중복 선언
var data1 = 10;
let data2 = 10;
const data3 = 10;

var data1 = '홍길동'
//let data2 = '홍길동'    //error
//const data2 = '홍길동'    //error

//동일 스코프에서 중복 선언은 var에 한해서만 지원된다.

//서로 다른 scope에서 중복 선언
let data4 = '홍길동'    //global scope

const myFun = () => {
    let data4 = '김길동'    //local scope
    console.log(`in function ${data4}`);    //in function 김길동
}

myFun();
console.log(`out function ${data4}`);   //out function 홍길동

//scope가 다르다면 변수 중복 선언 가능하다.
//local 변수 우선
//변수명을 의미있는 단어로 주는 것이 기본임으로 변수명을 중복해서 local 변수로 자주 쓴다.

//함수 중복 선언
function myFun1() { console.log('step1'); }
function myFun1() { console.log('step2'); }

myFun1();   //step2

var myFun2 = function() { console.log('step1'); }
var myFun2 = function() { console.log('step2'); }

myFun2();

let myFun3 = function () { console.log('step1'); }
//let myFun3 = function () { console.log('step2'); }

myFun3();   //error

//함수 중복 선언: 선언식 함수와 var에 대입되는 표현식만 중복 선언 가능하다.

//모든 software language에서는 하나의 scope 내에 선언된 변수, 함수는 그 스코프에서만 사용 가능하다

// var name1 = '홍길동';

// const someFun = () => {
//     var name1 = '김길동';
//     console.log(`in someFun 1, name1 = ${name1}`);

//     for(let i = 0; i < 1; i++) {
//         var name1 = '이길동'
//         console.log(`in someFun, in for, name1 = ${name1}`);
//     }
//     console.log(`in someFun 2, name1 = ${name1}`);

//     if(true) {
//         var name1 = '박길동';
//         console.log(`in someFun in if, name1 = ${name1}`);
//     }
//     console.log(`in someFun 3, name1 = ${name1}`);
// }

// someFun();
// console.log(`out someFun, name1 = ${name1}`);

/*
김길동
이길동
이길동
박길동
박길동
홍길동
*/

//var로 선언된 변수, 함수 scope만 지원한다.
//for, if는 지원하지 않는다.

let name1 = '홍길동';

const someFun = () => {
    let name1 = '김길동';
    console.log(`in someFun 1, name1 = ${name1}`);

    for(let i = 0; i < 1; i++) {
        let name1 = '이길동'
        console.log(`in someFun, in for, name1 = ${name1}`);
    }
    console.log(`in someFun 2, name1 = ${name1}`);

    if(true) {
        let name1 = '박길동';
        console.log(`in someFun in if, name1 = ${name1}`);
    }
    console.log(`in someFun 3, name1 = ${name1}`);
}

someFun();
console.log(`out someFun, name1 = ${name1}`);

/*
김길동
이길동
김길동
박길동
김길동
홍길동 */

//let은 함수, for, if 스코프를 지원한다.
