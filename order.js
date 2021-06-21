angular.module('myApp', ['ngAnimate']);						
						
angular.module('myApp')						
.controller('myController', function ($scope) {						
  						
  $scope.inventory = [						
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/1.jpeg	", description : "	MAKEUP KIT	",   price :   	300	, qty : 1 },
    						
    						
    { id :  2, category : "https://rukminim1.flixcart.com/image/800/800/k612pow0/role-play-toy/5/z/g/exports-co-early-development-child-kitchen-pretend-play-toys-original-imafzge8hfqk55zn.jpeg?q=20", description : "VEGETABLE SET",   price :   368, qty : 1, onSale : true },						
  						
    { id :  3, category : "https://rukminim1.flixcart.com/image/1100/1100/jp1i93k0/remote-control-toy/r/s/q/high-speed-metro-train-with-round-track-with-sign-boards-for-original-imafbdaspbs6jpaa.jpeg?q=20",   description : "TRAIN",     price :   6.99, qty : 1 },						
    						
    { id :  4, category : "https://rukminim1.flixcart.com/image/1100/1100/k40798w0/musical-toy/t/3/w/37-key-piano-keyboard-toy-for-kids-with-mic-dc-power-option-original-imafnymr75hwwkwd.jpeg?q=20",   description : "big flashlight",       price :  699, qty : 1 },						
    						
    						
    { id :  5, category : "https://rukminim1.flixcart.com/image/1081/2178/kp1imq80/toy-weapon/w/u/f/soft-bullet-gun-blue-annie-original-imag3dd5tg9y6zjn.jpeg?q=90",        description : "Gun",          price :  29.99, qty : 1 },						
    						
    { id :  6, category : "https://i.ibb.co/vXj7wNS/Photo-Room-20210619-145739.png",        description : "big stove",            price :  130, qty : 1 },						
    						
    { id :  7, category : "sleeping bag", description : "simple sleeping bag",  price :  49.99, qty : 1 },						
    { id :  8, category : "sleeping bag", description : "deluxe sleeping bag",  price :  79.99, qty : 1 },						
    { id :  9, category : "tent",         description : "1-person tent",        price : 119.99, qty : 1 },						
    { id : 10, category : "tent",         description : "2-person tent",        price : 169.99, qty : 1 },						
    { id : 11, category : "tent",         description : "3-person tent",        price : 249.99, qty : 1 },						
		{ id : 12, category : "/2084377289testbysam/PRODUCTS/TORCH/1.jpeg",         description : "3-person tent",        price : 200, qty : 1 },				
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
