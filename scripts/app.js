


function init(){


  const grid = document.querySelector('.grid')
  const cells = []
  
  console.log(grid)

  const inputArr = 
  [['*','*','*','*','*','*','*','*','*','*'],
    ['*','O','O','O','O','O','O','O','O','*'],
    ['*','O','O','O','O','O','O','O','O','*'],
    ['*','O','O','O','O','O','O','O','O','*'],
    ['*','O','O','O','O','O','O','O','O','*'],
    ['*','O','O','O','O','O','O','O','O','*'],
    ['*','O','O','O','O','O','O','O','O','*'],
    ['*','O','O','O','O','O','O','O','O','*'],
    ['*','O','O','O','O','O','O','O','B','*'],
    ['*','*','*','*','*','*','*','*','*','*']]




  for (let y = 0; y < inputArr.length; y++){
    const cellsSubArray = []
    for (let x = 0; x < inputArr[1].length; x++){
      const cell = document.createElement('div')
      cell.setAttribute('data-appearance',`${inputArr[x][y]}`)
      grid.appendChild(cell)
      cellsSubArray.push(cell)
    }
    cells.push(cellsSubArray)
  }


  class Player {
    constructor(xPos, yPos){
      this.xPos = xPos
      this.yPos = yPos
    }

    appear(){
      cells[this.yPos][this.xPos].classList.add('player')
    }

    disappear(yPos, xPos){
      cells[yPos][xPos].classList.remove('player')
    }

    moveRight(){
      const tempXPosition = this.xPos
      const tempYPosition = this.yPos
      this.xPos = this.xPos + 1
      mover(this, 'right', tempXPosition, tempYPosition)
    }


    moveLeft(){
      const tempXPosition = this.xPos
      const tempYPosition = this.yPos
      this.xPos = this.xPos - 1
      mover(this, 'left', tempXPosition, tempYPosition)
    }

    moveUp(){
      const tempXPosition = this.xPos
      const tempYPosition = this.yPos
      this.yPos = this.yPos - 1
      mover(this, 'up', tempXPosition, tempYPosition)
    }

    moveDown(){
      const tempXPosition = this.xPos
      const tempYPosition = this.yPos
      this.yPos = this.yPos + 1
      mover(this, 'down', tempXPosition, tempYPosition)
    }

  }

  function mover(character, direction, tempXPosition, tempYPosition){

    if (cells[character.yPos][character.xPos].dataset.appearance === 'O'){
      character.disappear(tempYPosition, tempXPosition)
      character.appear()
    } else if (cells[character.yPos][character.xPos].dataset.appearance === 'B') {
      console.log('Game over!!')
      return
    } else {
      if (direction === 'right'){
        character.xPos = character.xPos - 1
      } else if (direction === 'left') {
        character.xPos = character.xPos + 1
      } else if (direction === 'up') {
        character.yPos = character.yPos + 1
      } else if (direction === 'down') {
        character.yPos = character.yPos - 1
      }
    }


  }


  const playerOne = new Player(1,1)
  playerOne.appear()

  setTimeout(() => {
    playerOne.moveLeft()
  }, 4000)


}


window.addEventListener('DOMContentLoaded', init)