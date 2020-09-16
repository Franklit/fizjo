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
    }
    else{
        document.querySelector('nav').style.height = '120px';
        document.querySelector('.logo').style.lineHeight = '120px';
        document.querySelector('nav ul').style.lineHeight = '120px';
        }
}