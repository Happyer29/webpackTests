const path = require('path')

let PAGES_DIR,
    ENTRY,
    PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist')
}
PATHS.assets = `${PATHS.src}/assets/`;
PATHS.fonts = `${PATHS.assets}fonts/`;
PATHS.img = `${PATHS.assets}img/`;
PATHS.style = `${PATHS.assets}styles/`;
PATHS.static = `${PATHS.assets}static/`;

PAGES_DIR = `${PATHS.src}/html/pages/`;

ENTRY = {
    app: `./src/index.js`
}

exports.PATHS = PATHS;
exports.PAGES_DIR = PAGES_DIR;


//Check https://stackoverflow.com/questions/7043509/this-inside-object