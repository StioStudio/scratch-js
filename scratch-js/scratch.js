
var scratch = {
    
        X: 0,
        Y: 0,
        rotation: 90,
        mouseX: 0,
        mouseY: 0,


        /**motion */
        move(_length) {
            this.X += Math.sin(this.rotation) * _length
            this.Y += Math.cos(this.rotation) * _length
        },
        
        turnR(_r) {
            this.rotation += _r
        },
        
        turnL(_r) {
            this.rotation -= _r
        },
        
        goto(_posx, _posy) {
            this.X = _posx
            this.Y = _posy
        },
        
        point(_r) {
            this.rotation = _r
        },
        
        changeX(_posx) {
            this.X += _posx
        },

        setX(_posx) {
            this.X = _posx
        },

        changeY(_posy) {
            this.Y += _posy
        },

        setY(_posy) {
            this.Y = _posy
        },

        /**looks */

        /**sound */
        
        /**event */
        
        /**control */

        repeat(_repeat, _text) {
            for (let j = 0; j < _repeat; j++) {
                _text();
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

        sprite(_name, _url, _text) {
            this.spriteName.push(_name)
            this.spriteUrl.push(_url)
            this.spriteCode.push(_text)
        },

        
        /**update */
        update(_forever, _time){
            
            if (_forever = true) {
            
                setInterval(() => {

                    for (let j = 0;j < this.spriteName.length;j++) {
                    
                        this.spriteCode[j]()
                        console.log("%cSprite update","color:red; font-size:20px;color:#ff0000;");
    
                    }        

                }, _time*1000);

            }

            else{
            
                for (let j = 0;j < this.spriteName.length;j++) {

                    this.spriteCode[j]()
                    console.log("%cSprite update","color:red; font-size:20px;color:#ff0000;");

                }
            
            }
            

        },

        /**working on */
        keypressed(_key){

            window,addEventListener("keydown", e => {
                return Input.keysPressed(e.keyCode) = true;
            });
            window,addEventListener("keyup", e => {
                return Input.keysPressed(e.keyCode) = false;
            })
            
        },
        canvas(){
            const canvas = document.getElementById("cv");
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth - 25;
            canvas.height = window.innerHeight - 25;
        }


}



export { scratch }


