
/**tools (work in progress) */
var ED =  {
    
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
            
}

export{ ED }