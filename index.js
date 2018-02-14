
var Word = require('./word.js');
var prompt = require('prompt');
console.log("Welcome to the Constructor Hangman Game.");
console.log("Type in a letter and hit enter to guess.");
console.log("-----------------------------");
prompt.start();
game = {
  wordBank: ['alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware', 'district of Columbia', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new hampshire', 'new jersey', 'new mexico', 'new york', 'north carolina', 'north dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhode island', 'south carolina', 'south dakota', 'tennessee', 'texas', 'utah', 'Vermont', 'virginia', 'washington', 'west virginia', 'wisconsin', 'wyoming'],
  wordsWon: 0,
  guessesRemaining: 10,
  currentWrd: null,
  startGame: function (wrd) {
    this.resetGuesses();
    this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
    this.currentWrd.getLet();
    this.promptUser();
  },
  resetGuesses: function(){
    this.guessesRemaining = 10;
  },
  promptUser: function(){
    var self = this;
    prompt.get(['guessLetter'], function(err, result){
      console.log("You guessed: " + result.guessedletter);
      var manyGuessed = self.currentWrd.checkLetter(result.guessedletter);
      if(manyGuessed ==0) {
        console.log("Incorrect. Guess Again!");
        self.guessesRemaining--;
      } else {
        console.log("Correct! Keep Going!");
          if(self.currentWrd.findWord()){
            console.log("You won!");
            return;
          }
      }
      console.log("Guesses left: " + self.guessesRemaining);
      if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
        self.promptUser();
      }
      else if(self.guessesRemaining ==0){
        console.log("Good Try. The correct state was ", self.currentWrd.target);
      } else {
        console.log(self.currentWrd.correctState());
      }
    });

  }


};

game.startGame();