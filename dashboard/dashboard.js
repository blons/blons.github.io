const themetext = document.getElementById('themetext');

function dark() {
    localStorage.setItem('theme', 'dark');
    texttheme();
};

function light() {
    localStorage.setItem('theme', 'light');
    texttheme();
};

function contrast() {
    localStorage.setItem('theme', 'contrast');
    texttheme();
};

function forest() {
    localStorage.setItem('theme', 'forest');
    texttheme();
};

function carbon() {
    localStorage.setItem('theme', 'carbon');
    texttheme();
};

function mothership() {
    localStorage.setItem('theme', 'mothership');
    texttheme();
};

function texttheme() {
    themetext.textContent = localStorage.getItem('theme');
};

texttheme();
