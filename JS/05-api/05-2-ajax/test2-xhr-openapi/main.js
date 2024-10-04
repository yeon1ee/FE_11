"use strict"

let button = document.getElementById('button');
let table = document.getElementById('result');

button.addEventListener('click', function() {
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://openAPI.seoul.go.kr:8088/714b77494979656f3333544d5a7567/json/RealtimeCityAir/1/5', true);
    
    xhr.onload = function(){
        //결과 데이터 획득
        let result = xhr.responseText;
        //받은 문자열을 object literal 객체로 반환
        //만약 xml 형식의 데이터였다면 xml 파싱 진행
        let resultObj = JSON.parse(result);
        //필요한 데이터를 추출한다.
        //각 구청의 데이터 추출
        let rows = resultObj['RealtimeCityAir']['row'];
        let resultTxt = '';
        for (let i = 0; i < rows.length; i++) {
            let name = rows[i]['MSRSTE_NM'];
            let value = rows[i]['IDEX_MVL'];
            let grade = rows[i]['IDEX_NM'];

            resultTxt += `
                <tr>
                    <td>${name}</td>
                    <td>${value}</td>
                    <td>${grade}</td>
                </tr>
            `
        }
        table.innerHTML = resultTxt;
    }
    xhr.send();
});

