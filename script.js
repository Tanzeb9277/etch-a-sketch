const grid = document.querySelector('.grid');
const r = document.querySelector(':root');
const button = document.querySelector('#clearGrid');
let gridNumb;

function createGrid(size = 16){
    console.log(size)
    r.style.setProperty('--size', size);
    gridNumb = size * size;
    for(let i = 0; i < gridNumb; i++){
        let gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridItem.addEventListener('mouseover', function(e){
            e.target.classList.add('drawn');
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

    let size = prompt('Enter a number less than 100', '100');

    if (size > 100){
        while (size > 100 ){
            size = prompt('Number too large, enter number less than 100', '100');
        }
        createGrid(size)
    } else createGrid(size);
});


