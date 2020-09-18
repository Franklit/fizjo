


// shrink navbar

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.querySelector('nav').style.height = '80px';
        document.querySelector('.logo').style.lineHeight = '80px';
        document.querySelector('nav ul').style.lineHeight = '80px';
        document.querySelector('nav label i').style.lineHeight = '80px';
        document.querySelector('nav ul').style.top = '80px';
    }
    else{
        document.querySelector('nav').style.height = '120px';
        document.querySelector('.logo').style.lineHeight = '120px';
        document.querySelector('nav ul').style.lineHeight = '120px';
        document.querySelector('nav label i').style.lineHeight = '120px';
        document.querySelector('nav ul').style.top = '120px';
        
        }
}


const navLi = document.querySelectorAll('nav li');
const navLiList = [...navLi];



// smooth scroll navbar


const navbarMenu = document.querySelector('nav ul');

const navbarLinks = document.querySelectorAll('nav ul a');
const navbarLinksArr = [...navbarLinks];

const burgerUl = document.querySelector('nav i');

const oferta = document.querySelector('.oferta');
const kadra = document.querySelector('.kadra');
const cennik = document.querySelector('.cennik');
const kontakt = document.querySelector('.kontakt');


const container = document.querySelector('.container');



// follow and show where we are on website
const followNav = ()=> {
    const scrollPosition = document.documentElement.scrollTop;
    navbarLinksArr.forEach(elem => elem.classList.remove('active'))

    if((scrollPosition>=oferta.offsetTop)&&(scrollPosition<kadra.offsetTop)){
        navbarLinksArr[1].classList.add('active');
    }
    else if((scrollPosition>=kadra.offsetTop)&&(scrollPosition<cennik.offsetTop)){
        navbarLinksArr[2].classList.add('active');
    }
    else if((scrollPosition>=cennik.offsetTop)&&(scrollPosition<kontakt.offsetTop)){
        navbarLinksArr[3].classList.add('active');
    }
    else if((scrollPosition>=kontakt.offsetTop)){
        navbarLinksArr[4].classList.add('active');
    }
    else{
        navbarLinksArr[0].classList.add('active');
    }
    

};

window.addEventListener('scroll', followNav)







// close hidden menu when click
const clickBurger = ()=> {
    burgerUl.click();
};



// change position using click
const smoothScrool = (e) =>{
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    window.scrollTo({
        top: document.querySelector(`#${targetId}`).offsetTop,
        behavior: 'smooth'
    })
}


const navbarLinkClick = (e)=>{
    smoothScrool(e);
    clickBurger();
}

navbarLinks.forEach(elem => elem.addEventListener('click', navbarLinkClick));
