const body = document.body;
const themebutton = document.getElementById('themebutton');
const themeselector = document.getElementById('themeselector');
const closebutton = document.getElementById('closemenu');
const darkbutton = document.getElementById('darktheme');
const lightbutton = document.getElementById('lighttheme');
const contrastbutton = document.getElementById('contrasttheme');
const carbonbutton = document.getElementById('carbontheme');
const forestbutton = document.getElementById('foresttheme');
const mothershipbutton = document.getElementById('mothershiptheme');
const theme = localStorage.getItem('theme');
const special = localStorage.getItem('special');
const themeicon = document.getElementById('themeicon');
const menubutton = document.getElementById('menubutton');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');
const title = document.getElementById('themetitle');
const themelist = ['dark', 'light', 'contrast', 'carbon', 'forest', 'mothership'];
let count = 1;

for (let i in themelist) {
    if (theme == themelist[i]) {
        body.classList.replace('dark', themelist[i]);
    }
};

darkbutton.onclick = () => {
    body.className = 'dark';
    localStorage.setItem('theme', 'dark');
};

lightbutton.onclick = () => {
    body.className = 'light';
    localStorage.setItem('theme', 'light');
};

contrastbutton.onclick = () => {
    body.className = 'contrast';
    localStorage.setItem('theme', 'contrast');
};

carbonbutton.onclick = () => {
    body.className = 'carbon';
    localStorage.setItem('theme', 'carbon');
};

forestbutton.onclick = () => {
    body.className = 'forest';
    localStorage.setItem('theme', 'forest');
};

mothershipbutton.onclick = () => {
    body.className = 'mothership';
    localStorage.setItem('theme', 'mothership');
};

themebutton.onclick = () => {
    if (overlay.classList.contains('hideselector')) {
        overlay.classList.replace('hideselector', 'showselector');
    } else {
        overlay.classList.replace('showselector', 'hideselector');
    }
};

closebutton.onclick = () => {
    overlay.classList.replace('showselector', 'hideselector');
};

title.onclick = () => {
    count += 1;
    if (count == 7) {
        console.log('Developer mode on');
        localStorage.setItem('special', true);
    } else {
        console.log('Developer mode off');
        localStorage.removeItem('special');
    }
};

document.getElementById('overlay').onclick = function(e) {
    if(e.target == document.getElementById('overlay')) {
        overlay.classList.replace('showselector', 'hideselector');
    }
};

if (special == "true") {
    mothershipbutton.style = '';
};
