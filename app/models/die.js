define([
    'angular'
], function (angular) {
    "use strict";
    angular.module('myApp.models.die',[]).factory('Die', function () {
        function Die(letterArray, rowIndex, columnIndex) {
            this.name = "Die";
            this.row = rowIndex;
            this.column = columnIndex;
            this.active = false;

            this.letter = letterArray[_.random((letterArray.length-1))];
        }

        Die.createDieArray = function (characterArrays, rowIndex) {
          var newDies = [];
          _.each(characterArrays,function (characters, index) {
            newDies.push(new Die(characters, rowIndex, index));
          })
          return newDies;
        }

        return Die;
    });
});
