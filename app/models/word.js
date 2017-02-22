define([
    'angular'
], function (angular) {
    "use strict";
    angular.module('myApp.models.word',[]).factory('Word', function () {
        function Word(dieArray) {
            this.name = "Word";
            this.dies = dieArray;
            this.score = 0;
            if(dieArray.length >2){
              this.score = dieArray.length < 8 ? dieArray.length - 2 : 6;
            }
            this.string = _.map(dieArray, function (die) {
              return  die.letter;
            }).join("");
        }

        return Word;
    });
});
