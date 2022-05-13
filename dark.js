// const button = document.getElementById('themebutton');
const body = document.body;
const themebutton = document.getElementById('themebutton');
const themeselector = document.getElementById('themeselector');
const closebutton = document.getElementById('closemenu');
const darkbutton = document.getElementById('darktheme');
const lightbutton = document.getElementById('lighttheme');
const contrastbutton = document.getElementById('contrasttheme');
const theme = localStorage.getItem('theme');
const themeicon = document.getElementById('themeicon');
const menubutton = document.getElementById('menubutton');
const nav = document.getElementById('nav')

// if (theme) {
//     body.classList.add(theme);
// }

if (theme == 'light') {
    body.classList.replace('dark', 'light');
    themeicon.textContent = 'light_mode';
};

if (theme == 'contrast') {
    body.classList.replace('dark', 'contrast');
    themeicon.textContent = 'contrast';
};

darkbutton.onclick = () => {
    body.classList.remove('light', 'contrast');
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    themeicon.textContent = 'dark_mode';
};

lightbutton.onclick = () => {
    body.classList.remove('dark', 'contrast');
    body.classList.add('light');
    localStorage.setItem('theme', 'light');
    themeicon.textContent = 'light_mode';
};

contrastbutton.onclick = () => {
    body.classList.remove('dark', 'light');
    body.classList.add('contrast');
    localStorage.setItem('theme', 'contrast');
    themeicon.textContent = 'contrast';
};

themebutton.onclick = () => {
    if (themeselector.classList.contains('hideselector')) {
        themeselector.classList.replace('hideselector', 'showselector');
    } else {
        themeselector.classList.replace('showselector', 'hideselector');
    }
}

closebutton.onclick = () => {
    themeselector.classList.replace('showselector', 'hideselector');
}

// menubutton.onclick = () => {
//     console.log('a');
//     nav.style.display('flex')
// };
