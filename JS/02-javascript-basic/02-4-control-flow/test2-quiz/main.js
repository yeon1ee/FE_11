/* 내가 쓴 코드 */

let input = prompt('나이를 입력해주세요');

if (input === null ){
    console.log('입력을 취소 하였습니다.');
}
else if (isNaN(input)) {
    console.log('숫자가 아닌 문자를 입력 하셨습니다.');
} else if (input < 0 || input > 100) {
    console.log('1 이상, 100 이하의 숫자를 입력해야 합니다.');
} else if (input > 0 && input < 10) {
    console.log('어린이군요');
} else if (input >= 10 && input < 20) {
    console.log('청소년이군요.');
} else if (input >= 20 && input <= 100) {
    console.log('어른이군요');
}

/* 해설 */
