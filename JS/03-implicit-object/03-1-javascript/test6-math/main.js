"use strict"

//round 반올림
console.log(Math.round(0.56));  //1
console.log(Math.round(1));  //1
console.log(Math.round(1.1));  //1
console.log(Math.round(-0.56));  //-1
console.log(Math.round(-1.1));  //-1

//random, 0~1 사이의 실수
console.log(Math.random())  //

//random, 0~100 사이의 난수
console.log(Math.random() * 100);

//51~70 사이의 난수
let max = 70;
let min = 51;
console.log(Math.random() * (max - min) + min);

//min, max
console.log(Math.min(39, 45, 21, 60));  //21
console.log(Math.max(39, 45, 21, 60));  //60

//배열에 숫자 데이터가 있다. 배여르이 데이터 중 min, max 찾기
//...를 사용하는 경우 두 가지
//첫 번째: rest parameter - 함수의 마지막 매개변수를 rest parameter로 선언
//두 번째: spread operator - 배열의 데이터를 전체 나열할때 
//...array => 39, 45, 21, 60
let array = [39, 45, 21, 60];
console.log(Math.min(...array));    //21
console.log(Math.max(...array));    //60