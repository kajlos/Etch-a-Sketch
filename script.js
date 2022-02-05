const container = document.querySelector('#container');
const number = document.querySelector('#number');
const newSketchButton = document.querySelector('#newSketch');
const color = document.querySelector('#color');



function newSketch(grid){
    resetGrid();
    if( grid > 100){
        grid = 100};
    let widthHeight =100/grid + '%';
    console.log('inside: ' + grid);
    for(let i =0; i < grid*grid; i++){
        const div = document.createElement('div');
        div.classList.add('square');
        div.setAttribute(`style`,`width:${widthHeight}; height:${widthHeight};`);
        div.addEventListener('mouseover',()=>{
           div.setAttribute(`style`,`width:${widthHeight}; height:${widthHeight}; background-color:${color.value};`);
           console.log(color);
        });
        container.appendChild(div);
    }
}

newSketchButton.addEventListener('click',() => {
    newSketch(number.value);
})

function resetGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}
newSketch(16);