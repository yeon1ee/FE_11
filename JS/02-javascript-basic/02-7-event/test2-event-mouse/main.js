"use strict"

window.addEventListener('load', () => {
    //click
    let button = document.getElementById('button');
    button.addEventListener('click', () => {
        console.log('mouse click');
    });

    //dblclick
    button.addEventListener('dblclick', () => {
        console.log('mouse doubleclick');
    });

    //mouse down
    button.addEventListener('mousedown', () => {
        console.log('mouse down');
    });

    //mouse up
    button.addEventListener('mouseup', () => {
        console.log('mouse up');
    });

    //mouse move
    let area = document.getElementById('area');
    let result = document.getElementById('result');

    area.addEventListener('mousemove', (e) => {
        result.innerHTML = `offset(${e.offsetX}, ${e.offsetY}, page(${e.pageX}, ${e.pageY}))`
    }) 

    //enter
    let outer = document.getElementById('outer');
    let inner = document.getElementById('inner');

    outer.addEventListener('mouseenter', () => {
        console.log('outer mouseEnter');
    })

    inner.addEventListener('mouseenter', () => {
        console.log('inner mouseEnter');
    })

    //mouse over
    outer.addEventListener('mouseover', () => {
        console.log('inner mouseOver');
    })
    
    inner.addEventListener('mouseover', () => {
        console.log('inner mouseOver');
    })
});