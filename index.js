// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
// function to destructively append a cat to the end of the cats array
function destructivelyAppendCat(name){
    cats.push(name);
}
// function to destructively prepend a cat to the beginning of the cats array
function destructivelyPrependCat(name){
    cats.unshift(name)
}
// function to destructively remove the last cat from the cats array
function destructivelyRemoveLastCat(){
    cats.pop();
}
// function to destructively remove the first cat from the cats array
function destructivelyRemoveFirstCat(){
    cats.shift();
}
// function to append a cat to the cats array and return a new array
function appendCat(name){
    let cats2 = [...cats,name]
    return cats2 ;
}
// function to prepend a cat to the cats array and return a new array
function prependCat(name){
    let cats3 = [name,...cats]
    return cats3
}
// function to remove the last cat in the cats array and return a new array
function removeLastCat(){
    let cats4 = cats.slice(0,cats.length-1);
    return cats4
}
// function to remove the first cat from the cats array and return a new array
function removeFirstCat(){
    let cats5 = cats.slice(1);
    return cats5
}








