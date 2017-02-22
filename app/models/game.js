define([
    'angular',
    'models/die'
], function (angular) {
    "use strict";
    angular.module('myApp.models.game',[]).factory('Game', function (Die) {
        function Game() {
            this.name = "Game"
            this.currentWord = [];
            this.words = [];

            this.state = [
              Die.createDieArray([
                ['a','a','a','f','r','s'],
                ['a','a','e','e','e','e'],
                ['a','a','f','i','r','s'],
                ['a','d','e','n','n','n'],
                ['a','e','e','e','e','m']
              ],0),
              Die.createDieArray([
                ['a','e','e','g','m','u'],
                ['a','e','g','m','n','n'],
                ['a','f','i','r','s','y'],
                ['b','j','k','qu','x','z'],
                ['c','c','e','n','s','t']
              ],1),
              Die.createDieArray([
                ['c','e','i','i','l','t'],
                ['c','e','i','l','p','t'],
                ['c','e','i','p','s','t'],
                ['￼￼d','d','h','n','o','t'],
                ['d','h','h','l','o','r']
              ],2),
              Die.createDieArray([
                ['d','h','l','n','o','r'],
                ['d','h','l','n','o','r'],
                ['e','i','i','i','t','t'],
                ['e','m','o','t','t','t'],
                ['e','n','s','s','s','u']
              ],3),
              Die.createDieArray([
                ['f','i','p','r','s','y'],
                ['g','o','r','r','v','w'],
                ['i','p','r','r','r','y'],
                ['n','o','o','t','u','w'],
                ['o','o','o','t','t','u']
              ],4)
            ]


        }

        Game.prototype.hasWord = function () {
          var currentWordString = _.map(this.currentWord, function (die) {
            return  die.letter;
          }).join("");
          
          var output =  !_.some(this.words, function (word) {
            return word.string === currentWordString;
          });
          return output;
        }

        return Game;
    });
});
