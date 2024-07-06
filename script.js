//------------------ Variables Start ---------------------------------

let container = document.querySelector('.container');
let animal = document.querySelector('.animal');
let selectAnimal = document.querySelector('.select-animal');
let animalItem = document.querySelectorAll('.animal-item');
let select = document.querySelector('.select');
let bool = false;
let run = 0;

//------------------ Variables End ---------------------------------

//------------------ Element Dynamic Positions Start ---------------------------------

container.style.width = window.innerWidth + 'px';
container.style.height = window.innerHeight + 'px';
animal.style.top = window.innerHeight - animal.offsetHeight + 'px';

//------------------ Element Dynamic Positions End ---------------------------------

let animalList = ['img/donkey.gif','img/horse.png','img/monkey.gif','img/sheep.gif','img/tiger.gif','img/zeebra.gif'];

animalItem.forEach((item,index) => {
    item.onclick = () => {
        bool = true;
        animal.style.background = `url(${animalList[index]})`
    }
})

select.onclick = () => {
    if(!bool) {
        alert('Select an Animal')
    }
    else {
    selectAnimal.style.display = 'none'  
    }
}

//window.onkeydown = e => {
//    if(e.which == 37) {
//        run-=20;
//        animal.style.left = run + 'px';
//        animal.style.transform = 'scale(-1,1)'
//    }
//    else if(e.which == 39) {
//        run+=20;
//        animal.style.left = run + 'px';
//        animal.style.transform = 'scale(1)'
//    }
//}

window.onkeydown = e => {
    if(e.which == 32) {
      animal.classList.add('jumping');
        setTimeout(() => {animal.classList.remove('jumping')},1000);
    }
}