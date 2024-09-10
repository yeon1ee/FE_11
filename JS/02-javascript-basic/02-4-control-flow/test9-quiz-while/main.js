"use strict";

//구구단
let i = 0;
while (i <= 9) {
    document.write(`<div> <h3> ${i}단 </h3>`);
    i++;
    let j = 1;
    while (j <= 9) {
        document.write(`${i}X${j} = ${i*j} <br>`);
        j++;
    }
    document.write(`</div>`);
}