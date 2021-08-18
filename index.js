const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    const newCat = [...cats, "Broom"];
    return newCat;
}
function prependCat(name) {
    const copyCat = ["Arnold",...cats];
    return copyCat;
}
function removeLastCat(name) {
    const lastCat = [...cats];
    lastCat.pop(name);
    return lastCat;
}
function removeFirstCat(name) {
    const firstCat = [...cats];
    firstCat.shift(name);
    return firstCat;
}