var scratch = {
    

    BD: {
        X: 0,
        Y: 0,
    
        setX(posx) {
            this.X = posx
        },
        setY(posy) {
            this.Y = posy
        },
        changeX(posx) {
            this.X += posx
        },
        changeY(posy) {
            this.Y += posy
        },
    
    
    },
    
    CD:  {
    
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

    repeat(i, func) {
        for (let j = 0; j < i; j++) {
            func();
        }
        
    }

    

}




export { scratch }


