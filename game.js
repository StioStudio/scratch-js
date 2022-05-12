
import { scratch } from "./scratch-js/scratch.js";

const canvas = document.getElementById("cv");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 25;
canvas.height = window.innerHeight - 25;

var ScreenSize = {
    width: canvas.width, 
    height: canvas.height
};


scratch.sprite("hello", "https://stiostudio.github.io/bilder/Epple.gif", function(){
    
    console.log("hi")

})

scratch.sprite("hi", "https://stiostudio.github.io/bilder/Epple.gif", function(){
    
    scratch.repeat(10,function(){
        console.log(Math.random())
    })

})

scratch.update("all", 1)
