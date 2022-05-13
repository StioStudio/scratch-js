
function loadImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = url;
    });
}


var scratch = {
    
        X: 0,
        Y: 0,
        rotation: 90,
        mouseX: 0,
        mouseY: 0,
        
        cnvz:undefined,
        ctx:undefined,

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

        /** looks */

        say(_text){
            console.log(_text)
        },

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

        async sprite(_name, _url, _text) {

            this.spriteName.push(_name)
            this.spriteCode.push(_text)

            const img = await loadImage(_url);
            this.spriteUrl.push(img)

            
        },

        j: 0, 
        canvas_auto: false,
        canvas_id: undefined,

        run_update(){
            
            this.ctx.clearRect(0, 0, this.cnvz.width, this.cnvz.height);
            
            console.log("%cSprite update:","color:red; font-size:20px;color:#ff0000;", this.spriteName[this.j]);                    
            
            this.spriteCode[this.j]()

            this.ctx.drawImage(this.spriteUrl[this.j], this.X , this.Y)

        },
        
        /**update */
        update(_forever, _time, _spef, _name){

            if (this.canvas_auto){
                this.cnvz = document.getElementById(this.canvas_id);
                this.ctx = this.cnvz.getContext('2d');
                this.cnvz.width = window.innerWidth - 25;
                this.cnvz.height = window.innerHeight - 25;
            }

            if (_spef){
                /**dosn't work yet */
                this.j = this.spriteName.filter(_name)
                
                if (_forever) {
            
                    setInterval(() => {

                            this.run_update()
                  
                    }, _time*1000);

                }

                else{
            
                        this.run_update()
            
                }
            }

            else{
                if (_forever) {
            
                    setInterval(() => {

                        for (this.j = 0;this.j < this.spriteName.length;this.j++) {

                            this.run_update()
                        
                        }        

                    }, _time*1000);

                }

                else{
            
                    for (this.j = 0;this.j < this.spriteName.length;this.j++) {

                        this.run_update()

                    }
            
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

        canvas(_id, _auto){

            if (_auto){
                this.canvas_auto = true
                this.canvas_id = _id
            }
            else{
                this.canvas_auto = false
                this.canvas_id = _id
                this.cnvz = document.getElementById(_id);
                this.ctx = this.cnvz.getContext('2d');
                this.cnvz.width = window.innerWidth - 25;
                this.cnvz.height = window.innerHeight - 25;
            }
        },


}


import { tools } from "./tools.js";

export { scratch }
export { tools }

