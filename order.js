angular.module('myApp', ['ngAnimate']);						
						
angular.module('myApp')						
.controller('myController', function ($scope) {						
  						
  $scope.inventory = [						
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/1.jpeg	", description : "	MAKEUP KIT	",   price :   	136	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/2.jpeg	", description : "	MAKEUP KIT	",   price :   	71	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/3.jpeg	", description : "	MAKEUP KIT	",   price :   	71	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/4.jpeg	", description : "	MAKEUP KIT	",   price :   	64	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/5.jpeg	", description : "	MAKEUP KIT	",   price :   	192	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/6.jpeg	", description : "	MAKEUP KIT	",   price :   	177	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/7.jpeg	", description : "	MAKEUP KIT	",   price :   	57	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/8.jpeg	", description : "	MAKEUP KIT	",   price :   	160	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/9.jpeg	", description : "	MAKEUP KIT	",   price :   	235	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/10.jpeg	", description : "	MAKEUP KIT	",   price :   	480	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/11.jpeg	", description : "	MAKEUP KIT	",   price :   	385	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/12.jpeg	", description : "	MAKEUP KIT	",   price :   	230	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/13.jpeg	", description : "	MAKEUP KIT	",   price :   	175	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/14.jpeg	", description : "	MAKEUP KIT	",   price :   	102	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/15.jpeg	", description : "	MAKEUP KIT	",   price :   	142	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/16.jpeg	", description : "	MAKEUP KIT	",   price :   	83	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/17.jpeg	", description : "	MAKEUP KIT	",   price :   	100	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/18.jpeg	", description : "	MAKEUP KIT	",   price :   	100	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/19.jpeg	", description : "	MAKEUP KIT	",   price :   	64	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/20.jpeg	", description : "	MAKEUP KIT	",   price :   	96	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/21.jpeg	", description : "	MAKEUP KIT	",   price :   	162	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/22.jpeg	", description : "	MAKEUP KIT	",   price :   	142	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/23.jpeg	", description : "	MAKEUP KIT	",   price :   	162	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/24.jpeg	", description : "	MAKEUP KIT	",   price :   	187	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/25.jpeg	", description : "	MAKEUP KIT	",   price :   	162	, qty : 1 },
    { id :  1, category : "	/2084377289testbysam/PRODUCTS/TORCH/26.jpeg	", description : "	MAKEUP KIT	",   price :   	48	, qty : 1 },
						
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
