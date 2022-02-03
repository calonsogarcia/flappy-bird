class Game {

    constructor(){
        // aquí van todas las propiedades del juego
        this.bg = new Image();
        this.bg.src = "../images/bg.png"
        this.pollo = new Pollo()
        this.pipeArr = [ new Pipe(0, "../images/obstacle_top.png")]
        this.pipeSeparation = 300
        this.isGameOn = true;
    }

    drawBackground = () => {
        ctx.drawImage( this.bg, 0, 0, canvas.width /* width */, canvas.height /* height */ )
    }

    clearCanvas = () => {
        ctx.clearRect( 0 , 0 , canvas.width, canvas.height)
    }

    // se crea aquí porque es dónde tenemos el array de Pipes
    spawningPipe = () => {
        let lastPipe = this.pipeArr[this.pipeArr.length - 1]

        if(lastPipe.x < (canvas.width - this.pipeSeparation)){
            // console.log("agregando pipe")
            // aquí se agrega un nuevo pipe por arriba
            let randomY = (Math.random() * 100) - 100
            let newPipe = new Pipe(randomY, "../images/obstacle_top.png")
            this.pipeArr.push(newPipe)

            // aquí se agrega un nuevo pipe por abajo
            let randomYDawn = randomY + newPipe.height + 200
            let newPipeDown = new Pipe (randomYDawn, "../images/obstacle_bottom.png")
            this.pipeArr.push(newPipeDown)
        }
    }

    checkPolloPipeCollision = (eachPipeParam) => {
        if (this.pollo.x < eachPipeParam.x + eachPipeParam.width &&
            this.pollo.x + this.pollo.width > eachPipeParam.x &&
            this.pollo.y < eachPipeParam.y + eachPipeParam.height &&
            this.pollo.height + this.pollo.y > eachPipeParam.y) {
            // collision detected!
            //console.log("colisionando")

            //debemos terminar el juego
            // 1. detener el loop
            this.isGameOn = false;
            // 2. ocultar el canvas
            canvas.style.display = "none"
            // 3. gameOver screen y darle display flex
            gameOverScreen.style.display = "flex"
        }
    }

    // aquí van todos los métodos
    gameLoop = () => {
       // console.log("El juego funciona! YAY")

        // 1. limpiar el canvas
        this.clearCanvas()

        // 2. mover los elementos u otras acciones y su chequeo
        this.pollo.polloGravity()
        // aquí se deben mover los pipes
        this.pipeArr.forEach((eachPipe) => {
            eachPipe.pipeMove()
        })
        this.spawningPipe()
        this.pipeArr.forEach((eachPipe) => {
            // chequear colisión entre pollito y pipe
            this.checkPolloPipeCollision(eachPipe)
        })


        // 3. dibujar los elementos
        this.drawBackground()
        this.pollo.drawPollo()
        // aquí deben dibujarse los pipes
        this.pipeArr.forEach((eachPipe) => {
            eachPipe.drawPipe()
        })
       

        // 4. la recursión para la animación
        if (this.isGameOn){
            requestAnimationFrame(this.gameLoop)
        }

    }

}