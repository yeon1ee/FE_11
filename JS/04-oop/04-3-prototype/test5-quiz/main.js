"use strict"

function School(kor, eng) {
    this.kor = kor;
    this.eng = eng;
}

School.prototype.sum = function() {
    return this.eng + this.kor
}

School.prototype.avg = function() {
    return (this.eng + this.kor) / 2
}

function HighSchool(eng, kor) {
    School.apply(this, [eng, kor]);
}

let school1 = new School(100, 85);
console.log("school sum", school1.sum());
console.log("school avg", school1.avg());

HighSchool.prototype = new School();
HighSchool.prototype.grade = function() {
    let avg = this.avg();
    if (avg >= 90) return 'A';
    else if (avg >= 80 && avg < 90) return 'B';
    else if (avg >= 70 && avg < 80) return 'C';
    else if (avg >= 60 && avg < 70) return 'D';
    else return 'F';
}

let high1 = new HighSchool(100, 85);
console.log("highschol sum", high1.sum());
console.log("highschol avg", high1.avg());
console.log("highschol grade", high1.grade());