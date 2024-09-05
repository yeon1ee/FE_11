//전체 코드에서 엄격 적용
'use strict'
//data 2의 데이터 타입이 정의되지 않아 error 발생
let data1 = 10;
data2 = 20;

console.log(data1, data2);

function myFun() {
    //함수 내에서 엄격 적용
    //"use strict"
    //data 4의 데이터 타입이 정의되지 않아 error 발생
    let data3 = 10;
    data4 = 20;
    console.log(data3, data4);
}

myFun();