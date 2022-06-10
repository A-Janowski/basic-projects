const canvas = document.querySelector('#etch-a-sketch');
const shakeBtn = document.querySelector('shake');
const ctx = canvas.getContext('2d');
const {width, height} = canvas;
let x = Math.floor(Math.random()*width);
let y = Math.floor(Math.random()*height);

let hue = 0;
ctx.strokeStyle = `hsl(${hue},100%,50%)`;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '10';
ctx.beginPath(); 
ctx.moveTo(x,y);
ctx.lineTo(x,y);
ctx.stroke();

window.addEventListener('keydown', handleKey);

function handleKey(event){
    if (event.key.includes('Arrow')){
        event.preventDefault()
        draw({key: event.key})
    };
};

function draw({key}){
    console.log(key);
    hue = hue + 5;
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.beginPath();
    ctx.moveTo(x,y);
    switch(key){
        case 'ArrowRight':
            x=x+10; 
            break;
        case 'ArrowLeft':
            x=x-10;
            break; 
        case 'ArrowUp':
            y=y-10; 
            break;
        case 'ArrowDown':
            y=y+10;
            break;     
    }
    ctx.lineTo(x,y);
    ctx.stroke();
};

function clearCanvas(){
    canvas.classList.add('shake');
    canvas.addEventListener('animationend',function(){
        canvas.classList.remove('shake')
    });
};
shakeBtn.addEventListener('click',clearCanvas);
