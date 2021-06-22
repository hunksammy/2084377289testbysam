angular.module('myApp', ['ngAnimate']);						
						
angular.module('myApp')						
.controller('myController', function ($scope) {						
  						
  $scope.inventory = [						
    { id :  1, nostock : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/1.jpeg	", nostock1 : "	SOFT TOYS	",   nostock2 :   	290	, nostock3 : 1 },
    { id :  2, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/2.jpeg	", description : "	SOFT TOYS	",   price :   	200	, qty : 1 },
    { id :  3, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/3.jpeg	", description : "	SOFT TOYS	",   price :   	140	, qty : 1 },
    { id :  4, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/4.jpeg	", description : "	SOFT TOYS	",   price :   	220	, qty : 1 },
    { id :  5, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/5.jpeg	", description : "	SOFT TOYS	",   price :   	160	, qty : 1 },
    { id :  6, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/6.jpeg	", description : "	SOFT TOYS	",   price :   	77	, qty : 1 },
    { id :  7, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/7.jpeg	", description : "	SOFT TOYS	",   price :   	112	, qty : 1 },
    { id :  8, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/8.jpeg	", description : "	SOFT TOYS	",   price :   	112	, qty : 1 },
    { id :  9, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/9.jpeg	", description : "	SOFT TOYS	",   price :   	140	, qty : 1 },
    { id :  10, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/10.jpeg	", description : "	SOFT TOYS	",   price :   	120	, qty : 1 },
    { id :  11, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/11.jpeg	", description : "	SOFT TOYS	",   price :   	180	, qty : 1 },
    { id :  12, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/12.jpeg	", description : "	SOFT TOYS	",   price :   	255	, qty : 1 },
    { id :  13, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/13.jpeg	", description : "	SOFT TOYS	",   price :   	77	, qty : 1 },
    { id :  14, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/14.jpeg	", description : "	SOFT TOYS	",   price :   	53	, qty : 1 },
    { id :  15, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/15.jpeg	", description : "	SOFT TOYS	",   price :   	195	, qty : 1 },
    { id :  16, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/16.jpeg	", description : "	SOFT TOYS	",   price :   	105	, qty : 1 },
    { id :  17, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/17.jpeg	", description : "	SOFT TOYS	",   price :   	135	, qty : 1 },
    { id :  18, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/18.jpeg	", description : "	SOFT TOYS	",   price :   	120	, qty : 1 },
    { id :  19, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/19.jpeg	", description : "	SOFT TOYS	",   price :   	68	, qty : 1 },
    { id :  20, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/20.jpeg	", description : "	SOFT TOYS	",   price :   	285	, qty : 1 },
    { id :  21, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/21.jpeg	", description : "	SOFT TOYS	",   price :   	150	, qty : 1 },
    { id :  22, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/22.jpeg	", description : "	SOFT TOYS	",   price :   	125	, qty : 1 },
    { id :  23, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/23.jpeg	", description : "	SOFT TOYS	",   price :   	200	, qty : 1 },
    { id :  24, category : "	/2084377289testbysam/PRODUCTS/SOFT%20TOYS/24.jpeg	", description : "	SOFT TOYS	",   price :   	200	, qty : 1 },
    { id :  25, category : "	/2084377289testbysam/PRODUCTS/TORCH/1.jpeg	", description : "	TORCH	",   price :   	136	, qty : 1 },
    { id :  26, category : "	/2084377289testbysam/PRODUCTS/TORCH/2.jpeg	", description : "	TORCH	",   price :   	71	, qty : 1 },
    { id :  27, category : "	/2084377289testbysam/PRODUCTS/TORCH/3.jpeg	", description : "	TORCH	",   price :   	71	, qty : 1 },
    { id :  28, category : "	/2084377289testbysam/PRODUCTS/TORCH/4.jpeg	", description : "	TORCH	",   price :   	64	, qty : 1 },
    { id :  29, category : "	/2084377289testbysam/PRODUCTS/TORCH/5.jpeg	", description : "	TORCH	",   price :   	192	, qty : 1 },
    { id :  30, category : "	/2084377289testbysam/PRODUCTS/TORCH/6.jpeg	", description : "	TORCH	",   price :   	177	, qty : 1 },
    { id :  31, category : "	/2084377289testbysam/PRODUCTS/TORCH/7.jpeg	", description : "	TORCH	",   price :   	57	, qty : 1 },
    { id :  32, category : "	/2084377289testbysam/PRODUCTS/TORCH/8.jpeg	", description : "	TORCH	",   price :   	160	, qty : 1 },
    { id :  33, category : "	/2084377289testbysam/PRODUCTS/TORCH/9.jpeg	", description : "	TORCH	",   price :   	235	, qty : 1 },
    { id :  34, category : "	/2084377289testbysam/PRODUCTS/TORCH/10.jpeg	", description : "	TORCH	",   price :   	480	, qty : 1 },
    { id :  35, category : "	/2084377289testbysam/PRODUCTS/TORCH/11.jpeg	", description : "	TORCH	",   price :   	385	, qty : 1 },
    { id :  36, category : "	/2084377289testbysam/PRODUCTS/TORCH/12.jpeg	", description : "	TORCH	",   price :   	230	, qty : 1 },
    { id :  37, category : "	/2084377289testbysam/PRODUCTS/TORCH/13.jpeg	", description : "	TORCH	",   price :   	175	, qty : 1 },
    { id :  38, category : "	/2084377289testbysam/PRODUCTS/TORCH/14.jpeg	", description : "	TORCH	",   price :   	102	, qty : 1 },
    { id :  39, category : "	/2084377289testbysam/PRODUCTS/TORCH/15.jpeg	", description : "	TORCH	",   price :   	142	, qty : 1 },
    { id :  40, category : "	/2084377289testbysam/PRODUCTS/TORCH/16.jpeg	", description : "	TORCH	",   price :   	83	, qty : 1 },
    { id :  41, category : "	/2084377289testbysam/PRODUCTS/TORCH/17.jpeg	", description : "	TORCH	",   price :   	100	, qty : 1 },
    { id :  42, category : "	/2084377289testbysam/PRODUCTS/TORCH/18.jpeg	", description : "	TORCH	",   price :   	100	, qty : 1 },
    { id :  43, category : "	/2084377289testbysam/PRODUCTS/TORCH/19.jpeg	", description : "	TORCH	",   price :   	64	, qty : 1 },
    { id :  44, category : "	/2084377289testbysam/PRODUCTS/TORCH/20.jpeg	", description : "	TORCH	",   price :   	96	, qty : 1 },
    { id :  45, category : "	/2084377289testbysam/PRODUCTS/TORCH/21.jpeg	", description : "	TORCH	",   price :   	162	, qty : 1 },
    { id :  46, category : "	/2084377289testbysam/PRODUCTS/TORCH/22.jpeg	", description : "	TORCH	",   price :   	142	, qty : 1 },
    { id :  47, category : "	/2084377289testbysam/PRODUCTS/TORCH/23.jpeg	", description : "	TORCH	",   price :   	162	, qty : 1 },
    { id :  48, category : "	/2084377289testbysam/PRODUCTS/TORCH/24.jpeg	", description : "	TORCH	",   price :   	187	, qty : 1 },
    { id :  49, category : "	/2084377289testbysam/PRODUCTS/TORCH/25.jpeg	", description : "	TORCH	",   price :   	162	, qty : 1 },
    { id :  50, category : "	/2084377289testbysam/PRODUCTS/TORCH/26.jpeg	", description : "	TORCH	",   price :   	48	, qty : 1 },
						
    { id : 2000, category : "/2084377289testbysam/PRODUCTS/TORCH/3.jpeg",         description : "4-person tent",        price : 319.99, qty : 1 }						
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
