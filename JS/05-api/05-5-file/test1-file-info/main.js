"use strict"

let fileNode1 = document.getElementById('fileInput1');
let fileNode2 = document.getElementById('fileInput2');
let resultNode = document.getElementById('results');

function handleFile(e) { 
    //기존 출력 화면 지우기
    while(resultNode.firstChild) {
        resultNode.removeChild(resultNode.firstChild); // 'results' 대신 'resultNode' 사용
    }
    //유저가 선택한 파일 정보 획득
    let files = e.target.files;  // FileList: 여러 개 선택이 가능함으로
    if (files.length !== 0) {    // 'let' 대신 'if' 사용
        for (let file of files) {   // files의 객체 개수만큼 반복적으로 for loop 실행
            let item = document.createElement('li');
            item.innerHTML = `file name: ${file.name}, file size: ${file.size}, modified: ${new Date(file.lastModified)}`;

            resultNode.appendChild(item);
        }
    }
}

fileNode1.addEventListener('change', handleFile);
fileNode2.addEventListener('change', handleFile);
