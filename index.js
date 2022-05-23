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

function appendCat() {
    const newCat = [...cats,"Broom"];
    return newCat;
}

function prependCat() {
    const newCat = ["Arnold", ...cats];
    return newCat;
}

function removeLastCat() {
    const newCat = [...cats]
    newCat.pop();
    return newCat;

}

function removeFirstCat() {
    const newCat = [...cats];
    newCat.shift();
    return newCat;
}