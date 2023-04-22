const files = require.context("./", true, /\.ts$/);

interface TPages {
    [key: string]: React.FC;
}

let pages: TPages = {};
files.keys().forEach(key => {
    if (key === "./index.ts") return;
    let fileName = key.replace(/\.\/(.+)\/.+\.ts$/g, "$1");
    pages[fileName] = files(key).default;
});

export default pages;

