document.addEventListener("DOMContentLoaded", function() {
  // start OOP
  //  === PSEUDOCODE ===
  // Click start
  // boxes will light up in a sequence of colors one by one
  // after the computer has finished, the user will then try to match the sequence by clicking on the respective boxes
  // if the player gets the sequence right, the next round will start with a new color added to the end of the sequence
  // if the player gets it wrong, they lose a life and get another go
  // if all 3 lives are lost, game over#

  // Game Components
  // playerlives
  // score
  // array of colors to choose from 
  // somwehere to store random color sequence
  // start button
  // boxes will need event listeners

  class SimonSays {
    constructor() {
      this.playerScore = 0;
      this.playerLives = 3;
      this.colors = ["red", "yellow", "blue", "green"];
      this.randomColors = [];
      this.playerColors = [];
      this.startBtn = document.getElementById('startBtn');
      this.boxes = document.getElementsByClassName('grid-item');

    }

    // randomColor generator
    randomColorGenerator() {
      for (let i = 0; i < 4; i++) {
        let randomNumber = Math.floor(Math.random() * this.colors.length); // Math.random gives you a number between 0 and 1 so you times it by colors.length. Math.floor rounds it down eg. 3.9999999 goes to 3.
        this.randomColors.push(this.colors[randomNumber]); // pushes colors from array into random colors.
      }
    }
    flashcolors() {
      for (let i = 0; i < this.randomColors.length; i++) {
        const box = document.getElementById(this.randomColors[i]);
        console.log(box);  
        setTimeout(function() {
          box.style.background = box.id; // first setTimeout sets the random colors
        }, 1000 * i);

        setTimeout(function() {
          box.style.background = "rgba(255, 255, 255, 0.8)"; // second setTimeout sets the flashes to original color. 
        }, 1000 * i + 500); // 1000*i matches then adds 0.5secs to present the original color
      }
    }
    
    addListenersToBoxes() {
      for (let i = 0; i < this.boxes.length; i++) {
        this.boxes[i].addEventListener('click', e => {
          // console.log(e.target.id);
          this.playerColors.push(e.target.id);
          // console.log(this.playerColors);

          if (this.playerColors.length === this.randomColors.length) {
            this.checkWin();
          }
        }); 
      }
    }

    checkWin() {
      let counter = 0;
      this.playerColors.forEach((playerColor, index) => {
        console.log(playerColor);
        console.log(index); 
        
      if (this.randomColors[index] === this.playerColors[index]) {
        console.log('matching colors');
        alert('You Win!');
      } else {
        console.log('No match');
        alert('Game Over');
      }
      });
      if (counter === this.randomColors.length) {
        console.log("winner");
        
      }
    }
  }

  const newGame = new SimonSays(); //newGame is our instance of our object
  newGame.startBtn.addEventListener('click', function(event) { //startBtn is a property of our instance
    newGame.randomColorGenerator(); // calling/invoking the methods 
    newGame.addListenersToBoxes(); // everytime you create a method you must invoke it 
    newGame.flashcolors();
    event.target.disabled = true; // by default disabled is false. event.target always causes something.
    console.log(newGame.randomColors);
    

  });

  // console.log(newGame);
  


}); //DOMContentLoaded End