let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let item4 = document.getElementById('item4');

let icon1 = document.getElementById('icon1');
let icon2 = document.getElementById('icon2');
let icon3 = document.getElementById('icon3');
let icon4 = document.getElementById('icon4');

let link1 = document.getElementById('link1');
let link2 = document.getElementById('link2');
let link3 = document.getElementById('link3');
let link4 = document.getElementById('link4');

let items = [item1, item2, item3, item4];
let icons = [icon1, icon2, icon3, icon4];
let links = [link1, link2, link3, link4];

items.forEach((items, i) => items.addEventListener('mouseenter', () => {
    icons[i].classList.add('green');
    links[i].classList.add('color--green');
}));

items.forEach((items, i) => items.addEventListener('mouseleave', () => {
    icons[i].classList.remove('green');
    links[i].classList.remove('color--green');
}));



const accordion = document.getElementsByClassName('faq__contentBox')
for (i = 0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}




