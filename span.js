const titles = {
    'red': 'Red',
    'blue': 'Blue',
    'green': 'Green',
    'yellow': 'Yellow',
    'pink': 'Pink',
    'purple': 'Purple',
    'white': 'White',
    'black': 'Black',
    'lead': 'Lead',
    'zebra': 'Zebra',
    'rainbow': 'Rainbow',
    'ceramic': 'Ceramic',
    'moab': 'M.O.A.B.',
    'bfb': 'B.F.B.',
    'zomg': 'Z.O.M.G.',
    'ddt': 'D.D.T.',
    'bad': 'B.A.D.'
}

const desc = {
    'red': 'RBE: 1\r\nHP: 1\r\nImmune to: None\r\nParent of: None\r\nSpeed: 1.0',
    'blue': 'RBE: 2\r\nHP: 1\r\nImmune to: None\r\nParent of: Red x1\r\nSpeed: 1.4',
    'green': 'RBE: 3\r\nHP: 1\r\nImmune to: None\r\nParent of: Blue x1\r\nSpeed: 1.8',
    'yellow': 'RBE: 4\r\nHP: 1\r\nImmune to: None\r\nParent of: Green x1\r\nSpeed: 3.2',
    'pink': 'RBE: 5\r\nHP: 1\r\nImmune to: None\r\nParent of: Yellow x1\r\nSpeed: 3.5',
    'purple': 'RBE: 11\r\nHP: 1\r\nImmune to: Energy, Fire, Plasma\r\nParent of: Pink x2\r\nSpeed: 3.0',
    'white': 'RBE: 11\r\nHP: 1\r\nImmune to: Freeze\r\nParent of: Pink x2\r\nSpeed: 2.0',
    'black': 'RBE: 11\r\nHP: 1\r\nImmune to: Explosion\r\nParent of: Pink x2\r\nSpeed: 1.8',
    'lead': 'RBE: 23 (26)\r\nHP: 1 (4)\r\nImmune to: Sharp\r\nParent of: Black x2\r\nSpeed: 1.0',
    'zebra': 'RBE: 23\r\nHP: 1\r\nImmune to: Explosion, Freeze\r\nParent of: Black x1, White x1\r\nSpeed: 1.8',
    'rainbow': 'RBE: 47\r\nHP: 1\r\nImmune to: None\r\nParent of: Zebra x2\r\nSpeed: 2.2',
    'ceramic': 'RBE: 104 (114)\r\nHP: 10 (20)\r\nImmune to: None\r\nParent of: Rainbow x2\r\nSpeed: 2.5',
    'moab': 'RBE: 616 (856)\r\nHP: 200 (400)\r\nImmune to: None\r\nParent of: Ceramic x4\r\nSpeed: 1.0',
    'bfb': 'RBE: 3164 (4824)\r\nHP: 700 (1400)\r\nImmune to: None\r\nParent of: M.O.A.B. x4\r\nSpeed: 0.25',
    'zomg': 'RBE: 16656 (27296)\r\nHP: 4000 (8000)\r\nImmune to: None\r\nParent of: B.F.B. x4\r\nSpeed: 0.18',
    'ddt': 'RBE: 816 (1256)\r\nHP: 400 (800)\r\nImmune to: Explosion, Sharp\r\nParent of: Ceramic (C. R.) x4\r\nSpeed: 2.75',
    'bad': 'RBE: 55760 (98360)\r\nHP: 20000 (40000)\r\nImmune to: None\r\nParent of: Z.O.M.G. x2, D.D.T. x3\r\nSpeed: 0.18'
}

const zeppelins = [
    'moab', 'bfb', 'zomg', 'ddt', 'bad'
]

function respond() {
    alert('[SPAN.JS] Function ran properly');
}

// https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
function isNumeric(str) {
    if (typeof str != "string") return false;
    return !isNaN(str) &&
        !isNaN(parseFloat(str));
}

function isColor(str, original) {
    if (str === original) {
        return true;
    }
    return false;
}

// function createSpan() {
//     const span = document.createElement('span');
//     span.className = 'wrapper';
//     return span;
// }

function createImg(style, classlist) {
    const img = document.createElement('img');
    let extra = '';
    let title = '';
    if (classlist.contains('fortified')) {
        extra += '_f';
        title += ' fortified';
    };
    if (classlist.contains('camo')) {
        extra += '_c';
        title += ' camo';
    };
    if (classlist.contains('heart')) {
        extra += '_r';
        title += ' regrow';
    };
    let local = '/img/balloons/' + style + extra + '.png'; 
    img.src = local;
    img.alt = style + title;
    return img;
}

function quickImg(style) {
    const img = document.createElement('img');
    let local = '/img/balloons/' + style + '.png'; 
    img.src = local;
    return img;
}

function br() {
    return document.createElement('br');
}

function createHoverMenu(style) {
    const main = document.createElement('div');
    main.className = 'floatmenu';
    const title = main.appendChild(document.createElement('div'));
    title.className = 'floattitlediv';
    const img = title.appendChild(quickImg(style));
    img.className = 'floatimg';
    img.style.width = img.naturalWidth * 0.27 + 'px';
    const titlestr = title.appendChild(createText(titles[style]));
    titlestr.className = 'floattitle';
    const text = main.appendChild(document.createElement('div'));
    text.className = 'floattext';
    text.textContent = desc[style];
    return main;
}

function createText(text) {
    const h3 = document.createElement('h3');
    h3.textContent = text;
    return h3;
}

let tiles = document.getElementsByClassName('item')
for (let key in tiles) {
    let tile = tiles[key];
    let classlist = tile.classList;
    if (isNumeric(key)) {
        // const span = tile.appendChild(createSpan());
        const img = tile.appendChild(createImg(classlist[1], classlist));
        img.style.width = img.naturalWidth * 0.27 + 'px';
        tile.appendChild(createText(classlist[2]));
        tile.appendChild(createHoverMenu(classlist[1], classlist));
    }
}