//I could've added an anchor tag instead of adding this Javascript code but
//I don't know, I'm experimenting here

document.querySelectorAll('.btn').forEach(btn => btn.addEventListener('click', () => {
    window.open('https://github.com/JaredTrOr', '_blank');
}));

/*CODE FOR THE HAMBURGER MENU*/
//You don't usually select elements from HTML with classes because classes are for CSS
//But I'm lazy and I left it like this LOL
document.querySelector('.hamburger').addEventListener('click', () => {

    //LINES ANIMATION
    document.querySelector('.line-one').classList.toggle('active');
    document.querySelector('.line-two').classList.toggle('active');
    document.querySelector('.line-three').classList.toggle('active');

    //APPEAR THE MENU
    document.querySelector('.header-links').classList.toggle('active');
});

