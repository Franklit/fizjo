


// shrink navbar

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.querySelector('nav').style.height = '80px';
        document.querySelector('.logo').style.lineHeight = '80px';
        document.querySelector('nav ul').style.lineHeight = '80px';
        document.querySelector('nav ul').style.top = '80px';
        document.querySelector('nav label i').style.lineHeight = '80px';
        document.querySelector('nav img').style.height= '60px';
        
        
    }
    else{
        document.querySelector('nav').style.height = '120px';
        document.querySelector('.logo').style.lineHeight = '120px';
        document.querySelector('nav ul').style.lineHeight = '120px';
        document.querySelector('nav ul').style.top = '120px';
        document.querySelector('nav label i').style.lineHeight = '120px';
        document.querySelector('nav ul').style.top = '120px';
        document.querySelector('nav img').style.height= '100px';
        
        }
        //dissapear arrow bottom
        document.documentElement.scrollTop > 20 ? arrowDown.style.display = "none" : arrowDown.style.display = "block"
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



//animated text

// const topText = document.querySelector('.napis');
// topText.style.opacity = '0.2';
// let opacity = 0;
// let flag = true;


// const opacityText = ()=>{
    
//     if(flag){
//         console.log(Math.round(opacity*100)/100)
//         topText.style.opacity = opacity + 0.1;
//         opacity += 0.1;
//         if((Math.round(opacity*100)/100) === 1){
//             flag = !flag;
//         }

//     }else if(!flag){
//         console.log(Math.round(opacity*100)/100)
//         topText.style.opacity = opacity - 0.1;
//         opacity -= 0.1;
//         if((Math.round(opacity*100)/100)===0){
//             flag = !flag;
//         }

//     }

// };


// setInterval(opacityText, 100)


//click start take to bottom

const arrowDown = document.querySelector('.down a');

arrowDown.addEventListener('click', ()=>{
    window.scrollTo({
        top: document.querySelector(`#oferta`).offsetTop,
        behavior: 'smooth'
    })
});


