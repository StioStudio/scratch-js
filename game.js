
import { scratch } from "./scratch-js/scratch.js";

scratch.canvas("cv", true)

scratch.sprite("hello","",function(){

    scratch.repeat(5,function(){
    
        scratch.say(Math.random()*100)
    
    })

})

scratch.update(true, 2)


