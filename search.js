// https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
function isNumeric(str) {
    if (typeof str != "string") return false;
    return !isNaN(str) &&
        !isNaN(parseFloat(str));
}

let searchkeyslist = '';

function search() {
    let tiles = document.getElementsByClassName('item');
    let titles = document.getElementsByTagName('h2');
    let search = document.getElementById('searchbox').value;
    let searchkeys = document.getElementById('currentsearchkeys');
    searchkeyslist = searchkeyslist + ' ' + search;
    searchkeys.textContent = 'Searching for:' + searchkeyslist;
    for (let key in titles) {
        let title = titles[key];
        if (isNumeric(key)) {
            title.classList.remove('found');
        }
    }
    for (let key in tiles) {
        let tile = tiles[key];
        let classlist = tile.classList;
        if (isNumeric(key)) {
            tile.classList.remove('highlight');
            if (new RegExp(search).test(classlist)) {
                tile.classList.add('highlight');
                if (!tile.parentElement.previousElementSibling.classList.contains('hidden')) {
                    tile.parentElement.previousElementSibling.classList.add('found');
                }
            } else {
                tile.classList.add('hidden');
            }
        }
    }
    for (let key in titles) {
        let title = titles[key];
        if (isNumeric(key)) {
            if (!title.classList.contains('found')) {
                title.classList.add('hidden');
                title.nextElementSibling.classList.add('hidden');
            }
        }
    }
    document.getElementById('searchbox').value = '';
}

function reset() {
    let tiles = document.getElementsByClassName('item');
    let titles = document.getElementsByTagName('h2');
    let searchkeys = document.getElementById('currentsearchkeys');
    searchkeys.textContent = 'Searching for:';
    searchkeyslist = '';
    for (let key in tiles) {
        let tile = tiles[key];
        if (isNumeric(key)) {
            tile.classList.remove('highlight');
            tile.classList.remove('hidden');
        }
    }
    for (let key in titles) {
        let title = titles[key];
        if (isNumeric(key)) {
            title.classList.remove('found');
            title.classList.remove('hidden');
            title.nextElementSibling.classList.remove('hidden');
        }
    }
}