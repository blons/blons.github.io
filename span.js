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

const zeppelins = [
    'moab', 'bfb', 'zomg', 'ddt', 'bad'
]

function respond() {
    alert('[SPAN.JS] Function ran properly')
}

// https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
function isNumeric(str) {
    if (typeof str != "string") return false
    return !isNaN(str) &&
        !isNaN(parseFloat(str))
}

function isColor(str, original) {
    if (str === original) {
        return true
    }
    return false
}

function createImg(style, classlist) {
    const img = document.createElement('img');
    if (zeppelins.includes(style) && classlist.contains('fortified') == false) {
        img.src = '/img/zeppelin.png';
    }
    else if (zeppelins.includes(style) && classlist.contains('fortified')) {
        img.src = '/img/fortified_zeppelin.png';
    }
    else if (classlist.contains('fortified') && classlist.contains('heart') == false) {
        img.src = '/img/fortified_balloon.png';
    }
    else if (classlist.contains('heart') && classlist.contains('fortified') == false) {
        img.src = '/img/heart_balloon.png';
    }
    else if (classlist.contains('heart') && classlist.contains('fortified')) {
        img.src = '/img/fortified_heart_balloon.png';
    }
    else {
        img.src = '/img/balloon.png';
    }
    return img
}

function createText(text) {
    const h3 = document.createElement('h3');
    h3.textContent = text;
    return h3
}

let tiles = document.getElementsByClassName('item')
for (let key in tiles) {
    let tile = tiles[key]
    let classlist = tile.classList
    if (isNumeric(key)) {
        tile.appendChild(createImg(classlist[1], classlist))
        tile.appendChild(createText(titles[classlist[1]]))
        tile.appendChild(createText(classlist[2]))
        if (isColor(classlist[1], 'black')) {
            if (classlist.contains('camo')) {
                tile.setAttribute('style', "background-image: url('/img/bg_camo_black.png')");
            }
            else {
                tile.setAttribute('style', "background-color: #242424");
            }
        }
        else if (isColor(classlist[1], 'zebra') && classlist.contains('camo')) {
            tile.setAttribute('style', "background-image: url('/img/bg_camo_zebra.png')");
        }
        else if (isColor(classlist[1], 'rainbow') && classlist.contains('camo')) {
            tile.setAttribute('style', "background-image: url('/img/bg_camo_rainbow.png')");
        }
    }
}
