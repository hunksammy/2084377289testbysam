(function() {
  var app = angular.module("myApp", []);

  app.controller('SideBarController', function(){
     this.tab = 1;

     this.setTab = function(newValue){
       console.log("tab changed: "+this.tab);
       this.tab = newValue;
     };

     this.isSet = function(tabName){
       console.log("tab is set to: "+this.tab);
       return this.tab === tabName;
     };
   });
})();
/*Testing dynamic inserted navigation item*/
$(".nav").append("<li ng-class=\"{active:tc.isSet(4)}\"><a href ng-click=\"tc.setTab(4)\">Item Four</a></li>")
$(".tabs").append(" <div id=\"three\" ng-show=\"tc.isSet(4)\" class=\"tab\"><h1>Item Four</h1></div>")