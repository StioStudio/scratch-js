
function loadImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = url;
    });
}

const canvas = document.getElementById("cv");
const ctx = canvas.getContext('2d');

var scratch = {
    
        X: 0,
        Y: 0,
        rotation: 90,
        mouseX: 0,
        mouseY: 0,


        /**motion */
        move(m) {
            this.X += Math.sin(this.rotation) * m
            this.Y += Math.cos(this.rotation) * m 
        },
        
        turnR(r) {
            this.rotation += r
        },
        
        turnL(r) {
            this.rotation -= r
        },
        
        goto(posx, posy) {
            this.X = posx
            this.Y = posy
        },
        
        point(r) {
            this.rotation = r
        },
        
        changeX(posx) {
            this.X += posx
        },

        setX(posx) {
            this.X = posx
        },

        changeY(posy) {
            this.Y += posy
        },

        setY(posy) {
            this.Y = posy
        },

        /**looks */

        /**sound */
        
        /**event */
        
        /**control */

        repeat(repeat, func) {
            for (let j = 0; j < repeat; j++) {
                func();
            }
        
        },
        
        /**sensing */
        
        /**operators */
        
        /**variabels */
        
        /**my blocks */

        /**sprite */
        spriteName: [],
        spriteUrl: [],
        spriteCode: [],
        sprite(name, url, func) {
            this.spriteName.push(name)
            this.spriteUrl.push(url)
            this.spriteCode.push(func)
        },
        
        /**update */
        update(rem, time){
            
            if (rem = "all") {
            
                setInterval(() => {

                    for (let j = 0;j < this.spriteName.length;j++) {
                        this.spriteCode[j]()
                        console.log("%cSprite update","color:red; font-size:20px;color:#ff0000;");
                    }        
            
                }, time*1000);
                
            }

            else{
            
                for (let j = 0;j < this.spriteName.length;j++) {
                    this.spriteCode[j]()
                    console.log("%cSprite update","color:red; font-size:20px;color:#ff0000;");
                }        
            
            }
            

        },

        /**testing */


}


export { scratch }


