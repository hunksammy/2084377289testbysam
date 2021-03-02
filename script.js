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
   						
						
{id: 1, name: 'AKALTARA', 						
customer1: '	VINOD GENERAL (AKALTARA)	', amount1: ' TOYS -	2186	',  url1: '		',
customer2: '	CHANDAN GENERAL (AKALTARA)	', amount2: '	5753	',  url2: '	/2084377289testbysam/AKALTARA/CHANDAN%20GENERAL%20(AKALTARA)%2029.htm	',
customer3: '	DEEPAK GENERAL (AKALTARA)	', amount3: '	2651	',  url3: '	/2084377289testbysam/AKALTARA/DEEPAK%20(AKALTARA)%20130.htm	',
customer4: '	SHRIMANAGALM (AKALTARA)	', amount4: '	0	',  url4: '	/2084377289testbysam/AKALTARA/SHRIMANGALAM%20(AKALTARA)%20298.htm	',
customer5: '	SHARMA GENERAL  (AKALTARA)	', amount5: '	0	',  url5: '	/2084377289testbysam/AKALTARA/SHARMA%20GENERAL%20(AKALTARA)%20282.htm	',
customer6: '	SS FANCY (AKALTARA)	', amount6: '	1915	',  url6: '	/2084377289testbysam/AKALTARA/SS%20FANCY%20(AKALTARA).htm	',
customer7: '	KANHA GENERAL (AKALTARA)	', amount7: '	7721	',  url7: '	/2084377289testbysam/AKALTARA/KANHA%20GENERAL%20(AKALTARA)%2050.htm	',
						},
{id: 1, name: 'BALCO', 						
customer1: '	SACHIN COLLECTION (BALCO)	', amount1: '	1	',  url1: '		',
customer2: '	UPHAR COLLECTION (BALCO)	', amount2: '	2482	',  url2: '		',
customer3: '	NAVEEN ELECTRONICS (BALCO)	', amount3: '	3	',  url3: '		',
						},
{id: 1, name: 'BALODA', 						
customer1: '	ESHWAR GENERAL (BALODA)	', amount1: ' TOYS -	10279	',  url1: '		',
customer2: '	SAKSHI (BALODA)	', amount2: '	5797	',  url2: '		',
customer3: '	SHASHANK BOOK DEPO (BALODA)	', amount3: '	0	',  url3: '		',
customer4: '	VARDHAMAN GENERAL (BALODA)	', amount4: '	8906	',  url4: '		',
customer5: '	LOVE KIRANA (BALODA)	', amount5: '	15430	',  url5: '		',
customer6: '	VICKEY GENERAL (BALODA)	', amount6: '	0	',  url6: '		',
customer7: '	SHIVAM GENERAL (BALODA)	', amount7: '	15900	',  url7: '		',
customer8: '	B.L GUPTA (BALODA)	', amount8: '	3	',  url8: '		',
customer9: '	GOYAL GENERAL (BALODA)	', amount9: '	0	',  url9: '		',
						},








	
	
    {id: 2, name: 'BALODA', calories: '167', ingredients: 'chicken with rice', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/asian-chicken-with-rice_373x.jpg'},
    {id: 3, name: 'BAMNIDIH', calories: '94', ingredients: 'beans, corn, oats...', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/healthy-beet-juice_373x.jpg'},
    {id: 4, name: 'BARADWAR', calories: '104', ingredients: 'read meat', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/meatball-appetizers_373x.jpg'},
    {id: 5, name: 'BELGEHNA', calories: '50', ingredients: 'corn, salt', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/watermelon-slice-enamel-pin-denim_373x.jpg'},
    {id: 6, name: 'BELTARA', calories: '78', ingredients: 'eggs, olive oil, bread', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/pizza-muffin-popover_373x.jpg'},
    {id: 7, name: 'BHATGAON', calories: '120', ingredients: 'kinoa, rice', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/spinache-quiche_373x.jpg'},
    {id: 8, name: 'BILASPUR', calories: '213', ingredients: 'tuna with tomatoes', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/savory-breakfast-roll_373x.jpg'},
    {id: 9, name: 'BILHA', calories: '167', ingredients: 'soup with chicken and potatoes', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/healthy-chili_373x.jpg'},
	{id: 10, name: 'BIRRA', calories: '167', ingredients: 'soup with chicken and potatoes', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/healthy-chili_373x.jpg'},
	{id: 10, name: 'BOADTARA', calories: '167', ingredients: 'soup with chicken and potatoes', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/healthy-chili_373x.jpg'}
  ];
  
  return factory;
}]);



