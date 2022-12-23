/*=============== МЕНЮ БУРГЕР ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*===== ПЛАВНОЕ ОТКРЫТИЕ СТРАНИЦ =====*/
setTimeout(function(){
	document.body.classList.add('body_visible');
}, 100);

/*===== ПОДСВЕТКА АКТИВНЫХ ПУНКТОВ  =====*/
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== ТЕНЬ ДЛЯ ХЕДЕРА =====*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
 

/*===== ПЛАВНОЕ ПОЯВЛЕНИЕ ЭЛЕМЕНТОВ ПРИ СКРОЛЛЕ =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1400,
    delay: 200,
    /*reset: true*/
})

sr.reveal(`.gamef__img,.aboutus__card, .aboutus__container,.section__games__title,.home__data,.home__description,.ff__description`,{interval: 100})
sr.reveal(`.games__main`,{origin: 'left'})
sr.reveal(`.textt`,{interval: 100})
sr.reveal(`.games__container`,{origin: 'left'})
sr.reveal(`.home__img`,{origin: 'left'})
sr.reveal(`.home__data`,{origin: 'right'})
