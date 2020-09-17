// 	// Wrap every letter in a span
// var textWrapper = document.querySelector('.ml9 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml9 .letter',
//     scale: [0, 1],
//     duration: 1500,
//     elasticity: 600,
//     delay: (el, i) => 45 * (i+1)
//   }).add({
//     targets: '.ml9',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

console.log('siema eniu');


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



// setInterval(() => {console.log(document.body.scrollTop)}, 1000);


// smooth scroll navbar


const navbarMenu = document.querySelector('nav ul');

const navbarLinks = document.querySelectorAll('nav ul a');

const burgerUl = document.querySelector('nav i');


const followNav = ()=> {
    console.log(document.querySelector('.cennik').scrollTop);
};

followNav();


const clickBurger = ()=> {
    burgerUl.click();
};




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
