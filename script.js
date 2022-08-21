let mode = document.querySelector('.ball');
let body = document.body;
let ar_dropdown = document.querySelector('.arrow-dropdown');
let ak_dropdown = document.querySelector('.akademik-dropdown');
let wave = document.querySelector('.wave');
let menu = document.querySelector('nav');
let bar_menu = document.querySelector('.bar-menu');
let close_menu = document.querySelector('.close-menu')

mode.addEventListener('click', e =>{
    e.target.classList.toggle('dark-ball')
    body.classList.toggle('dark-mode');
    if(e.target.classList.contains('dark-ball')){
        wave.src = 'img/wave-stimik-dark.svg'
    }else {
        wave.src = 'img/wave-stimik.svg'
    }
});

ar_dropdown.addEventListener('click', e => {
    e.target.classList.toggle('arrow-rotate');
    if(e.target.classList.contains('arrow-rotate')){
        ak_dropdown.style.display = 'flex';
    }else {
        ak_dropdown.style.display = 'none';
    }

}
)

function showMenu(e){
    bar_menu.style.display = 'none';
    close_menu.style.display = 'block';
    menu.style.left = '0';
}

function closeMenu(e){
    bar_menu.style.display = 'block';
    close_menu.style.display = 'none';
    menu.style.left = '-100%'
}
