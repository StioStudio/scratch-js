
import { scratch, tools } from "./scratch-js/scratch.js";

scratch.canvas("game", true)

scratch.sprite("hello", "https://stiostudio.github.io/bilder/Epple.gif", function(){

    scratch.changeX(1)
    scratch.changeY(1)

})

scratch.update(true, 0.05)
