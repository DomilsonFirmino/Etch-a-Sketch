
// hsl(0, 100%, 50%) - red;
// hsl(39, 100%, 50%) - orange
// hsl(120, 100%, 25%) - green
// hsl(240, 100%, 50%) - blue
// hsl(275, 100%, 25%) - indigo
// hsl(300, 76%, 72%) - violet

let rainbowColors = ["hsl(0, 100%, 50%)","hsl(39, 100%, 50%)","hsl(120, 100%, 25%)","hsl(240, 100%, 50%)","hsl(275, 100%, 25%)","hsl(300, 76%, 72%)"]
const grid = document.querySelector('.right')
const body = document.querySelector('body')


const rainbow = document.querySelector('.rainbow')
const erase = document.querySelector('.erase')

const colorPicker = document.querySelector('.color')

const clear = document.querySelector('.clear')
const resize = document.querySelector('.resize')
const size = document.querySelector('.size')


let gridSize = getComputedStyle(document.documentElement).getPropertyValue('--grid-size');

let click = false;
let eClick = false;
let rainbowClick = false;



body.addEventListener('click', ()=>{
    click = !click;
})
rainbow.addEventListener('click',()=>{
    click = !click
    rainbowClick = !rainbowClick

    rainbow.classList.toggle('active')
    if(rainbowClick){
        eClick = false;
        if(erase.classList.contains('active')){
            erase.classList.remove('active')
        }
    }
})


erase.addEventListener('click',()=>{
    click = !click
    eClick = !eClick
    erase.classList.toggle('active')
    if(erase){
        rainbowClick = false;
        if(rainbow.classList.contains('active')){
            rainbow.classList.remove('active')
        }
    }
})

clear.addEventListener('click',()=>{
    click = !click
    for(let i = 0; i<grid.childElementCount; i++){
        grid.children[i].style.backgroundColor = "";
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
            let color;

            if(rainbowClick){
                color = randomcolor()
            }else{
                color = 'black'
            }
            
            if(click && eClick == false){
                if(!a.style.backgroundColor){
                    a.style.backgroundColor = color
                }
            }else if(click && eClick == true){
                a.style.backgroundColor = 'white'
            }
        })
        grid.appendChild(a);
    }
    grid.classList.add('grid')
    size.innerText = gSize + " X " +gSize;
}
function randomcolor(){
    return rainbowColors[Math.floor(Math.random() * rainbowColors.length)]
}
generateGrid(gridSize)