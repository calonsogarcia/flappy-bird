class Pollo {

    constructor(){
        // aquí las propiedades del pollo
        this.x = 100;
        this.y = canvas.height / 2;
        this.width = 50;
        this.height = 50;
        this.img = new Image()
        this.img.src = "../images/flappy.png"
        this.gravitySpeed = 2.5;
        this.jumpSpeed = 40; // si hacemos this.gravitySpeed * un nº  si aumentamos la gravitySpeed este también se aumenta
    }

    // métodos del pollo

    drawPollo = () => {
        ctx.drawImage( this.img, this.x, this.y, this.width, this.height)
    }

    // necesitamos movimiento

    polloGravity = () => {
        this.y = this.y + this.gravitySpeed 
    }

    polloJump = () => {
        this.y = this.y - this.jumpSpeed
    }


}