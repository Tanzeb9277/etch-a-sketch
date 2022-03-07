const grid = document.querySelector('.grid');
const r = document.querySelector(':root');
const button = document.querySelector('#clearGrid');
let gridNumb;
let isDown = false;

document.addEventListener("mousedown", function() {
    isDown = true;
});

document.addEventListener("mouseup", function(){
    isDown = false;
})


function createGrid(size = 250){
    console.log(size)
    r.style.setProperty('--size', size);
    gridNumb = size * size;
    for(let i = 0; i < gridNumb; i++){
        let gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridItem.addEventListener('mouseover', function(e){
            console.log(isDown)
            if(isDown == true){
                e.target.classList.add('drawn');
            }
            
        }); 

        grid.appendChild(gridItem);
    }

    let itemNum = document.querySelectorAll('.gridItem');
    console.log(itemNum.length)
}

createGrid();

button.addEventListener("click", function(){
    let itemNum = document.querySelectorAll('.drawn');
    for(let i = 0; i < itemNum.length; i++){
        itemNum[i].classList.remove('drawn');
    }
});


