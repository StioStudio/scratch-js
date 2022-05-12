
import { scratch } from "./scratch-js/scratch.js";

const canvas = document.getElementById("cv");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 25;
canvas.height = window.innerHeight - 25;

var ScreenSize = {
    width: canvas.width, 
    height: canvas.height
};

scratch.CD.setX(10)

var i = 5

scratch.repeat(i, function() {
    console.log(i-4);
    i++;
})
console.log("")

console.log(scratch.CD.X)

scratch.repeat(Math.random() * 100, function(){
    scratch.BD.changeX(1)
})

scratch.BD.setX(10**10**10)

console.log(scratch.BD.X)
