var letter = require('./letter.js');
function Word(target) {
    this.target = target;
    this.lets = [];
    this.found = false;

    this.getLet = function() {
        for (var i=0; i < this.target.length; i++) {
            this.lets.push( new letter(this.target[i]));
        }
    };
    this.findWord = function() {
        this.found = this.lets.every(function(currLett) {
            return currLett.appear;
        });
        return this.found;
    };
    this.checkLetter = function(guessedletter) {
        var toReturn = 0;

        for (var i = 0; i < this.lets.length; i++) {
            if (this.lets[i].charac == guessedletter){
                this.lets[i].appear = true;
                toReturn++;
            }
        }
        return toReturn;
    };
    this.correctState = function() {
        var string = '';
        for (var i=0; i < this.lets.length; i++){
            string += this.lets[i].correctLetter();
        }
        return string;
    };
}

module.exports = Word;
