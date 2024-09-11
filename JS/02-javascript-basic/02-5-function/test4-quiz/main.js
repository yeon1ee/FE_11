"use strict"

function calcBonus(name, position, salary) {
    let bonus = 0;
    
    if (position === 'A') { bonus = salary * 0.3; }
    else if (position === 'B') { bonus = salary * 0.2; }
    else if (position === 'C') { bonus = salary * 0.1; }

    console.log(`${name}의 추석 보너스는 ${bonus} 입니다.`);
}

calcBonus('홍길동', 'A', 1000);
calcBonus('김길동', 'B', 500);
