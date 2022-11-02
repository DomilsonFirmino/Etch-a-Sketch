const grid = document.querySelector('.right')
const body = document.querySelector('body')


const rainbow = document.querySelector('.rainbow')
const shading = document.querySelector('.shading')
const erase = document.querySelector('.erase')

const colorPicker = document.querySelector('.color')

const clear = document.querySelector('.clear')
const resize = document.querySelector('.resize')
const size = document.querySelector('.size')


let gridSize = getComputedStyle(document.documentElement).getPropertyValue('--grid-size');

let click = false;
let eClick = false;
let shadingClick = false;
let rainbowClick = false;



body.addEventListener('click', ()=>{
    click = !click;
})
rainbow.addEventListener('click',()=>{
    click = !click
})

shading.addEventListener('click',()=>{
    click = !click
})

erase.addEventListener('click',()=>{
    click = !click
    eClick = !eClick
    erase.classList.toggle('active')
})

colorPicker.addEventListener('click',()=>{
    click = !click
})

clear.addEventListener('click',()=>{
    click = !click
    for(let i = 0; i<grid.childElementCount; i++){
        grid.children[i].style.backgroundColor = "white";
    }
})

resize.addEventListener('click',()=>{
    click = !click
    let a = prompt();
    if(a == null || a == ""){
    }else{
        grid.replaceChildren();
        if(a >= 65){
            a = 64
        }
        document.documentElement.style.setProperty('--grid-size',a);
        generateGrid(a);
    }
    
})

function generateGrid(gSize){
    for (let i = 0; i < (gSize*gSize); i++){
        let a = document.createElement('div');
        a.classList.add('card');
        a.addEventListener('mouseover',(e)=>{
            if(click && eClick == false){
                a.style.backgroundColor = 'black'
            }else if(click && eClick == true){
                a.style.backgroundColor = 'white'
            }
        })
        grid.appendChild(a);
    }
    grid.classList.add('grid')
    size.innerText = gSize + " X " +gSize;
}

generateGrid(gridSize);