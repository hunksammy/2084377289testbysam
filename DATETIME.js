/* Module */ 

const app = angular.module('myApp', []);

/* Services */

app.factory('numberFormat', function(){
  let obj = {};
  
  obj.twoDigits = function(num){
    return (num >= 10) ? num.toString() : '0' + num.toString();
  };
  
  return obj;
});

/* Controller */ 

app.controller('mainController', mainController);

mainController.$inject = ['$scope', '$window', '$interval', 'numberFormat'];

function mainController($scope, $window, $interval, numberFormat){
  let mainCtrl = this;
  
  mainCtrl.toTwoDigits = function(num){
    return numberFormat.twoDigits(num);
  };
  
  mainCtrl.msToday = Date.now();
  mainCtrl.myDate = new Date(mainCtrl.msToday);
  
  $interval(function(){
    mainCtrl.msToday = Date.now();
    mainCtrl.myDate = new Date(mainCtrl.msToday);
  }, 1000);
};