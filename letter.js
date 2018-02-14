
var letter = function(let){
    this.charac = let;
    this.appear = false;
    this.correctLetter = function(){
        return !(this.appear) ? "_" : this.charac;
    };
};
//export the constructor
module.exports = letter;
