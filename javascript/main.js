// * GLOBAL VARIABLES

let splashScreen = document.querySelector("#splash-screen")
let gameOverScreen = document.querySelector("#gameover-screen")
let canvas = document.querySelector("#my-canvas")
let ctx = canvas.getContext("2d")
let newGame;


// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {

    // desaparecer el splashScreen y aparecer el canvas
    splashScreen.style.display = "none"
    canvas.style.display = "flex"


    // ejecutar el juego
    newGame = new Game()
    //console.log(newGame)
    newGame.gameLoop()

}

// const restartGame = () => {
//     gameOverScreen.style.display = "none"
//     canvas.style.display = "flex"
//     let newGame = new Game()
//     newGame.gameLoop()
// }


// * ADD EVENT LISTENERS

let startButton = document.querySelector("#start-btn")
startButton.addEventListener("click", startGame)

// let restartButton = document.querySelector("#restart-btn")
// restartButton.addEventListener("click", restartGame)

canvas.addEventListener("click", () => {
    // como hago para invocar la función polloJump
    newGame.pollo.polloJump()
})




