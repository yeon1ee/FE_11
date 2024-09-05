let name = '홍길동';

const calSum = (no) => {
    let sum = 0;
    
    for (i = 1; i <= 10; i++){
        sum += i;
    }
    return sum;
}

document.write();

//문자열 데이터를 여러 라인으로 작성할 때 백틱을 사용한다.
let a = `
    hello
    world
`;

document.write(a);  
//js code 적으로는 개행에 의한 데이터(\n)이 유지되지만 화면은 줄바꿈이 일어나지 않는다.

let b = `
    hello <br/>
    world <br/>
`;

document.write(b);  //</br>을 사용하면 줄바꿈이 일어난다.


//template string 사용해보기 

/* template string의 ${}에는 expression code만 가능하다.
아래처럼 statement 코드는 불가능하다.*/

/*
let c = `
    ${let data = 10}
`;*/

document.write(`안녕하세요 ${name}님, 함수 호출 결과는 ${calSum(10)}, ${10 + 20}입니다`);