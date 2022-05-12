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
        spriteName: [0],
        spriteUrl: [0],
        spriteCode: [0],
        sprite(name, url, func) {
            this.spriteName.push(name)
            this.spriteName.push(url)
            this.spriteName.push(func)
        },
        
        /**update */
        update(){
            
        },


        /**tools (work in progress) */
    ED:  {
    
        X: 0,
        Y: 0,
        Z: 0,
    
        setX(posx) {
            this.X = posx
        },
        setY(posy) {
            this.Y = posy
        },
        setZ(posZ) {
            this.Z = posZ
        },

        changeX(posx) {
            this.X += posx
        },
        changeY(posy) {
            this.Y += posy
        },
        changeZ(posZ) {
            this.Z += posZ
        },
    
    },



}




export { scratch }


