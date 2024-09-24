"use strict"

let formNode = document.getElementById('chatForm');
let nameNode = document.getElementById('name');
let msgNode = document.getElementById('msg');
let resultNode = document.getElementById('result');

formNode.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let newName = document.createElement('div');
    let newNameText = document.createTextNode(nameNode.value);
    
    newName.appendChild(newNameText);
    
    let newMsg = document.createElement('div');
    let newMsgText = document.createTextNode(msgNode.value);
    
    newMsg.appendChild(newMsgText);

    let nowDate = document.createElement('div');
    let nowDateText = document.createTextNode(new Date());

    nowDate.appendChild(nowDateText);
    
    resultNode.appendChild(nowDate);
    resultNode.appendChild(newName);
    resultNode.appendChild(newMsg);

    nameNode.value = '';
    msgNode.value = '';

});