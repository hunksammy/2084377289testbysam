var myApp = angular.module('myApp', ['ngRoute'])

//ng-route config
.config(function ($routeProvider, $locationProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'default.html',
    })
    .when('/contact-info/:contact_index', {
      templateUrl: 'contact_info.html',
      controller: 'contactInfoCtrl'
    })
    
    .otherwise({redirectTo: '/home'});
})

// controllers
.controller('navCtrl', function ($scope) {
  $scope.nav = {
    navItems: ['home', 'add'],
    selectedIndex: 0,
    navClick: function ($index) {
      $scope.nav.selectedIndex = $index;
    }
  };
})

.controller('homeCtrl', function ($scope, ContactService){
  $scope.contacts = ContactService.getContacts();
})

.controller('contactInfoCtrl', function ($scope, $routeParams){
  var index = $routeParams.contact_index;
  $scope.currentContact = $scope.contacts[index];
})



// directives
.directive('contact', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'contact.html'
  }
})

// services
.factory('ContactService', [function () {
  var factory = {};

  factory.getContacts = function () {
    return contactList;
  }

  // contact list, usually would be a separate database
  var contactList = [
    {id: 0, name: 'AKALTARA', 
	customer1: 'CHANDAN GENERAL', amount1: '100',  url1: 'http://www.google.com',
	customer2: 'DEEPAK GENERAL', amount2: '500',  url2: 'http://www.yahoo.com'},
    
	
	
	{id: 1, name: 'BALCO', 
	customer1: 'sachin collection', url: 'www.google.com', img: ''},
    {id: 2, name: 'BALODA', calories: '167', ingredients: 'chicken with rice', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/asian-chicken-with-rice_373x.jpg'},
    {id: 3, name: 'BAMNIDIH', calories: '94', ingredients: 'beans, corn, oats...', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/healthy-beet-juice_373x.jpg'},
    {id: 4, name: 'BARADWAR', calories: '104', ingredients: 'read meat', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/meatball-appetizers_373x.jpg'},
    {id: 5, name: 'BELGEHNA', calories: '50', ingredients: 'corn, salt', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/watermelon-slice-enamel-pin-denim_373x.jpg'},
    {id: 6, name: 'BELTARA', calories: '78', ingredients: 'eggs, olive oil, bread', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/pizza-muffin-popover_373x.jpg'},
    {id: 7, name: 'BHATGAON', calories: '120', ingredients: 'kinoa, rice', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/spinache-quiche_373x.jpg'},
    {id: 8, name: 'BILASPUR', calories: '213', ingredients: 'tuna with tomatoes', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/savory-breakfast-roll_373x.jpg'},
    {id: 9, name: 'BILHA', calories: '167', ingredients: 'soup with chicken and potatoes', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/healthy-chili_373x.jpg'},
	{id: 10, name: 'BIRRA', calories: '167', ingredients: 'soup with chicken and potatoes', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/healthy-chili_373x.jpg'}
  ];{id: 11, name: 'BOADTARA', calories: '167', ingredients: 'soup with chicken and potatoes', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/healthy-chili_373x.jpg'}
  
  return factory;
}]);