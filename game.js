
import { scratch } from "./scratch-js/scratch.js";

scratch.canvas('game', false)



scratch.sprite("nikee", "https://stiostudio.github.io/bilder/epple2.png", ()=>{
    scratch.say("Dino")
    scratch.changeX(0.1)
})



scratch.update()
