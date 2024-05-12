// inicio MENU MOBILE
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('nav-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
// fim MENU MOBILE

// INICIO ANIMAÇÃO SCROLL
const elements = document.querySelectorAll('.hidden')

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        // else{
        //     entry.target.classList.remove('show')
        // }
    })
})

elements.forEach((element) => myObserver.observe(element))


// efeito scroll inserido com sucesso apenas na section 2. Rever o tempo de animação!!!!

// FIM ANIMAÇÃO SCROLL