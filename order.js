angular.module('myApp', ['ngAnimate']);						
						
angular.module('myApp')						
.controller('myController', function ($scope) {						
  						
  $scope.inventory = [						
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/1.jpeg	", description : "	MAKEUP KIT	",   price :   	300	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/2.jpeg	", description : "	MAKEUP KIT	",   price :   	300	, qty : 1 },
    						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
    { id : 13, category : "/2084377289testbysam/PRODUCTS/TORCH/3.jpeg",         description : "4-person tent",        price : 319.99, qty : 1 }						
  ];						
  						
  $scope.cart = [];						
  						
  var findItemById = function(items, id) {						
    return _.find(items, function(item) {						
      return item.id === id;						
    });						
  };						
  						
  $scope.getCost = function(item) {						
    return item.qty * item.price;						
  };						
						
  $scope.addItem = function(itemToAdd) {						
    var found = findItemById($scope.cart, itemToAdd.id);						
    if (found) {						
      found.qty += itemToAdd.qty;						
    }						
    else {						
      $scope.cart.push(angular.copy(itemToAdd));}						
  };						
  						
  $scope.getTotal = function() {						
    var total =  _.reduce($scope.cart, function(sum, item) {						
      return sum + $scope.getCost(item);						
    }, 0);						
    console.log('total: ' + total);						
    return total;						
  };						
  						
  $scope.clearCart = function() {						
    $scope.cart.length = 0;						
  };						
  						
  $scope.removeItem = function(item) {						
    var index = $scope.cart.indexOf(item);						
    $scope.cart.splice(index, 1);						
  };						
  						
});						
