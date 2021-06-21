angular.module('myApp', ['ngAnimate']);

angular.module('myApp')
.controller('myController', function ($scope) {
  
  $scope.inventory = [
    { id :  1, category : "/2084377289testbysam/PRODUCTS/TORCH/1.jpeg", description : "TORCH",   price :   172, qty : 1 },
    
    
    { id :  2, category : "/2084377289testbysam/PRODUCTS/TORCH/2.jpeg", description : "TORCH",   price :   136, qty : 1, onSale : true },
  
    { id :  3, category : "/2084377289testbysam/PRODUCTS/TORCH/3.jpeg",   description : "TORCH",     price :   71, qty : 1 },
    
    { id :  4, category : "/2084377289testbysam/PRODUCTS/TORCH/4.jpeg",   description : "TORCH",       price :  71, qty : 1 },
    
    
    { id :  5, category : "/2084377289testbysam/PRODUCTS/TORCH/5.jpeg",        description : "TORCH",          price :  64, qty : 1 },
    
    { id :  6, category : "/2084377289testbysam/PRODUCTS/TORCH/6.jpeg",        description : "TORCH",            price :  192, qty : 1 },
    
    { id :  7, category : "/2084377289testbysam/PRODUCTS/TORCH/7.jpeg", description : "TORCH",  price :  48, qty : 1 },
    { id :  8, category : "/2084377289testbysam/PRODUCTS/TORCH/8.jpeg", description : "TORCH",  price :  72, qty : 1 },
    { id :  9, category : "/2084377289testbysam/PRODUCTS/TORCH/9.jpeg",         description : "TORCH",        price : 160, qty : 1 },
    { id : 10, category : "/2084377289testbysam/PRODUCTS/TORCH/10.jpeg",         description : "TORCH",        price : 235, qty : 1 },
    { id : 11, category : "/2084377289testbysam/PRODUCTS/TORCH/11.jpeg",         description : "TORCH",        price : 480, qty : 1 },
    { id : 12, category : "/2084377289testbysam/PRODUCTS/TORCH/12.jpeg",         description : "TORCH",        price : 375, qty : 1 }

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