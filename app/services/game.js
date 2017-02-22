define([
    'angular',
    'models/game',
    'models/word'
], function (angular) {
    "use strict";
    angular.module('myApp.services.game',[]).service('GameService', function (Game, Word) {
        var game = new Game();
        var gameService = {
          game:game,

          // Test if die is adjacent to last added die
          adjacentDie: function (die) {
            var lastDie = game.currentWord[game.currentWord.length-1];
            var horzDiff = Math.abs(die.row - lastDie.row);
            var vertDiff = Math.abs(die.column - lastDie.column);
            if( (horzDiff + vertDiff == 1) && _.indexOf(game.currentWord) == -1){
              return true;
            }
            return false;
          },

          // Add the currentWord to the games list of words
          addWord : function(){
            if(game.currentWord.length > 0 && game.hasWord()){
              game.words.push(new Word(game.currentWord))
              _.each(game.currentWord, function (die) {
                die.active = false;
              })
              game.currentWord = [];
            }
          },

          //calculate the score of the game
          score : function () {
            var totalScore = 0;
            _.each(game.words, function(word){
              totalScore += word.score;
            });
            return totalScore
          }
        };

        // handle die toggle action
        gameService.toggleDie = function(die){
          if(game.currentWord.length == 0){
            game.currentWord.push(die)
            die.active = !die.active;
          }
          else {
            if (die === game.currentWord[game.currentWord.length-1]){
              die.active = !die.active;
              game.currentWord.pop();
            }
            else if(!die.active && gameService.adjacentDie(die)){
              die.active = true;
              game.currentWord.push(die);
            }
          }
        };

        return gameService;
    });
});
