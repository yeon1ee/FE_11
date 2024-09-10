"use strict";

//구구단
//let result = 0; -> 밖에서 필요 없는 변수라 포문 내부에 선언하는 게 좋음
for (let i = 1; i <= 9; i++) {  
    document.write('<div>');
    document.write(`<h3> ${i}단 </h3>`)
    for (let j = 1; j <= 9 ; j++) {
        let result = 0;
        result = i * j;
        document.write(`${i}X${j} = ${result}`);
        document.write('<br>');
    }
    document.write('</div>');
}