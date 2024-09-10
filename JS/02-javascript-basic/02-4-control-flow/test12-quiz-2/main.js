"use strict";

const primeTest = () => {
    let no = prompt("2 이상의 숫자를 입력하세요");
    let message = '';

    if (no !== null) {
        //입력한 숫자에 따라 소수가 여러개 일 수도 있다. -> 배열에 담아야 함
        let results = [];

        //2부터 입력한 숫자까지 증가시켜서 각 숫자가 소수인지 판단한다.
        for (let i = 2; i < no; i++) {
            //입력 받은 숫자가 소수일수도, 합성수일수도 있다. 그 결과를 담기 위한 boolean 변수 선언
            let isPrimeNum = true;

            //소수인지 판단하기 위해 나누는 숫자 선언
            let divider = 2;
            while (divider < i) {
                if (i % divider === 0) {
                    isPrimeNum = false;
                    break;
                } else {
                    divider++;
                }
            }
            if(isPrimeNum) {
                results.push(i);
            }
        }
        message = `입력하신 ${no} 까지의 소수는 ${results} 입니다.`;
    } else {
        //nul일때
        message = '숫자를 입력해주세요.';
    }

  //message 는 유저에게 출력하고자 하는 문자열을 저장한 변수
  document.querySelector("#result").innerHTML = message;
};