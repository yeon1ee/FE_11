"use strict"

let array1 = [10, 20];
let array2 = [30, 40];

//두 배열 데이터를 합쳐서 새로운 배열로 만들기
let array3 = array1.concat(array2);
console.log(array3);    //[10, 20, 30, 40]

//배열의 모든 데이터를 구분자로 결합해서 하나의 문자열로 만들기
let result1 = array3.join('a');
console.log(result1);   //10a20a30a40a

//배열에 데이터 추가, 맨뒤,  맨 앞
array3.push(100);   //맨 뒤에 추가
array3.unshift(200);    //맨 앞에 추가
console.log(array3);    //[200, 10, 20, 30, 40, 100]

//한꺼번에 여러개 추가 가능
array1.push(1000, 2000);    //맨 뒤에 추가
array1.unshift(3000, 4000); //맨 앞에 추가
console.log(array1);    //[3000, 4000, 200, 10, 20, 30, 40, 100, 1000, 2000]

//배열에 데이터 삭제
array3.pop();   //맨 뒤에 삭제
array3.shift(); //맨 앞에 삭제
console.log(array3);    //[4000, 200, 20, 10, 20, 30, 40, 100, 1000]

//splice: 추가
//매개변수: 인덱스-갯수-데이터
let array = [10, 20, 30, 40];
//갯수를 0으로 하면 삭제 할 데이터가 없다는 것을 의미한다. -> 추가
array.splice(2, 0, 'hello');
console.log(array); //[10, 20, 'hello', 30, 40]
//여러개 추가
array.splice(2, 0, 'one', 'two');
console.log(array); //[10, 20, 'one', 'two', 'hello', 30, 40]

//교체: 갯수에 0 이상의 숫자, 그 갯수만큼 삭제 후 추가
array.splice(2, 3, 'html', 'css', 'js');
console.log(array)  //[10, 20, 'html', 'css', 'js', 30, 40]

//삭제: 추가하는 데이터를 지정하지 않으면 된다.
array.splice(2, 3); //2번째 index부터 3개
console.log(array); // [10, 20, 30, 40]

//slice: 위치를 지정하고 여러개를 획득할 때 배열로 반환
let result2 = array.slice(1, 4);    //1 번째 index부터 4 번째 index까지
console.log(array); //[20, 30, 40]

//숫자를 하나만 지정하면 그 위치부터 나머지 전부를 반환함
let result3 = array.splice(2);
console.log(result3)    //[30, 40];