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
  						
						
{id: 1, name: '	AKALTARA	', 				
customer1: '	VINOD GENERAL (AKALTARA)	', amount1: ' TOYS -	2186	',  url1: '		',
customer2: '	CHANDAN GENERAL (AKALTARA)	', amount2: '	5753	',  url2: '	/2084377289testbysam/AKALTARA/CHANDAN%20GENERAL%20(AKALTARA)%2029.htm	',
customer3: '	DEEPAK GENERAL (AKALTARA)	', amount3: '	2651	',  url3: '	/2084377289testbysam/AKALTARA/DEEPAK%20(AKALTARA)%20130.htm	',
customer4: '	SHRIMANAGALM (AKALTARA)	', amount4: '	0	',  url4: '	/2084377289testbysam/AKALTARA/SHRIMANGALAM%20(AKALTARA)%20298.htm	',
customer5: '	SHARMA GENERAL  (AKALTARA)	', amount5: '	0	',  url5: '	/2084377289testbysam/AKALTARA/SHARMA%20GENERAL%20(AKALTARA)%20282.htm	',
customer6: '	SS FANCY (AKALTARA)	', amount6: '	1915	',  url6: '	/2084377289testbysam/AKALTARA/SS%20FANCY%20(AKALTARA).htm	',
customer7: '	KANHA GENERAL (AKALTARA)	', amount7: '	7721	',  url7: '	/2084377289testbysam/AKALTARA/KANHA%20GENERAL%20(AKALTARA)%2050.htm	',
						},
{id: 1, name: '	BALCO	', 				
customer1: '	SACHIN COLLECTION (BALCO)	', amount1: '	1	',  url1: '		',
customer2: '	UPHAR COLLECTION (BALCO)	', amount2: '	2482	',  url2: '		',
customer3: '	NAVEEN ELECTRONICS (BALCO)	', amount3: '	3	',  url3: '		',
						},
{id: 1, name: '	BALODA	', 				
customer1: '	ESHWAR GENERAL (BALODA)	', amount1: ' 	10279	',  url1: '	/2084377289testbysam/BALODA/ESHWAR%20GENERAL%20(BALODA)%2098.htm	',
customer2: '	SAKSHI (BALODA)	', amount2: '	5797	',  url2: '	/2084377289testbysam/BALODA/SAKSHI%20GENERAL%20(BALODA)%20152.htm	',
customer3: '	SHASHANK BOOK DEPO (BALODA)	', amount3: '	0	',  url3: '	/2084377289testbysam/BALODA/SHASHANK%20GENERAL%20(BALODA)%2058.htm	',
customer4: '	VARDHAMAN GENERAL (BALODA)	', amount4: '	8906	',  url4: '	/2084377289testbysam/BALODA/VARDHAMAN%20GENERAL%20(BALODA)%20126.htm	',
customer5: '	LOVE KIRANA (BALODA)	', amount5: '	15430	',  url5: '	/2084377289testbysam/BALODA/LOVE%20KIRANA%20(BALODA)%20193.htm	',
customer6: '	VICKEY GENERAL (BALODA)	', amount6: '	0	',  url6: '	/2084377289testbysam/BALODA/VICKEY%20GENERAL%20(BALODA)%2082.htm	',
customer7: '	SHIVAM GENERAL (BALODA)	', amount7: '	15900	',  url7: '	/2084377289testbysam/BALODA/SHIVAM%20GENERAL%20(BALODA)%20217.htm	',
customer8: '	B.L GUPTA (BALODA)	', amount8: '	3	',  url8: '	/2084377289testbysam/BALODA/B.L%20GUPTA%20(BALODA)%20258.htm	',
customer9: '	GOYAL GENERAL (BALODA)	', amount9: '	0	',  url9: '	/2084377289testbysam/BALODA/GOYAL%20GENERAL%20(BALODA)%20263.htm	',
						},
{id: 1, name: '	BAMNIDIH	', 				
customer1: '	CHANDINI GIFT	', amount1: ' 	22751	',  url1: '	https://drive.google.com/file/d/1cDoRcpVI1bzC7aFxInzw8iaHHs9veSdG/view?usp=sharing	',
						},
{id: 1, name: '	BARADWAR	', 				
customer1: '	ASHIRWAD GENERAL (BARADWAR)	', amount1: ' 	9090	',  url1: '		',
customer2: '	SIDDHI VINAYAK (BARADWAR)	', amount2: '	8355	',  url2: '		',
customer3: '	SAMRAT GENERAL (BARADWAR)	', amount3: '	0	',  url3: '		',
customer4: '	SAKTIYA SETH (BARADWAR)	', amount4: '	0	',  url4: '		',
						},
						
{id: 1, name: '	BELGEHNA	', 				
customer1: '	RINKU GENERAL (BELGEHNA)	', amount1: '	10810	',  url1: '		',
						},
{id: 1, name: '	BELTARA	', 				
customer1: '	PRATAB (BELTARA)	', amount1: '	4390	',  url1: '		',
						},
						
{id: 1, name: '	BHATGAON	', 				
customer1: '	DEEPANSHU (BHATGAON)	', amount1: ' 	3216	',  url1: '	\2084377289testbysam\BHATGAON\DEEPANSHU GENERAL (BHATGAON) 19.htm	',
customer2: '	MANPASAND (BHATGAON)	', amount2: '	0	',  url2: '	\2084377289testbysam\BHATGAON\MANPASAND (BHATGAON) 92.htm	',
customer3: '	RIYA GENERAL (BHATGAON)	', amount3: ' 	1	',  url3: '	\2084377289testbysam\BHATGAON\RIYA GENERAL (BHATGAON) 280.htm	',
customer4: '	NAMDEV (BHATGAON)	', amount4: '	2	',  url4: '	\2084377289testbysam\BHATGAON\NAMDEV GENERAL (BHATGAON) 83.htm	',
						},
{id: 1, name: '	BHILAIGARH	', 				
customer1: '	SONU GENERAL (BHILAIGARH)	', amount1: ' 	0	',  url1: '	\2084377289testbysam\BHILAIGARH\SONU GENERAL (BHILAIGARH) 52.htm	',
customer2: '	SS  SUPER MARKET (BHILAIGARH)	', amount2: '	2346	',  url2: '	\2084377289testbysam\BHILAIGARH\SS  SUPER MARKET (BHILAIGARH).htm	',
customer3: '	TANU GENERAL (BHILAIGARH)	', amount3: '	6823	',  url3: '	\2084377289testbysam\BHILAIGARH\TANU GENERAL (BHILAIGARH) 251.htm	',
customer4: '	LALIT GENERAL (BHILAIGARH)	', amount4: '	0	',  url4: '	\2084377289testbysam\BHILAIGARH\LALIT GENERAL (BHILAIGARH) 57.htm	',
customer5: '	DEWANGAN GENERAL (BHILAIGARH)	', amount5: '	6908	',  url5: '	\2084377289testbysam\BHILAIGARH\DEWANGAN GENERAL (BHILAIGARH) 218.htm	',
						},
{id: 1, name: '	BILASPUR	', 				
customer1: '	BOMBAY FASHION (RAJKISHORE)	', amount1: ' 	30033	',  url1: '		',
customer2: '	MOHAN NAGOI (BILASPUR)	', amount2: '	21727	',  url2: '		',
customer3: '	POOJA SHRINGAR (BILASPUR)	', amount3: '	0	',  url3: '		',
customer4: '	AKASH GENERAL (BUDHWARI)	', amount4: '	18690	',  url4: '		',
customer5: '	SIDDHI VINAYAK (BILASPUR)	', amount5: '	33002	',  url5: '		',
customer6: '	PUSTAK BHAWAN (BILASPUR)	', amount6: '	0	',  url6: '		',
customer7: '	SEEMA SHRIVASTAV (BILASPUR)	', amount7: '	0	',  url7: '		',
customer8: '	SONI GIFT (DEVIKHURDH) (BSP)	', amount8: '	810	',  url8: '		',
						},





    {id: 2, name: 'BALODA', calories: '167', ingredients: 'chicken with rice', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/asian-chicken-with-rice_373x.jpg'},
    {id: 3, name: 'BAMNIDIH', calories: '94', ingredients: 'beans, corn, oats...', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/healthy-beet-juice_373x.jpg'},
    {id: 4, name: 'BARADWAR', calories: '104', ingredients: 'read meat', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/meatball-appetizers_373x.jpg'},
    {id: 5, name: 'BELGEHNA', calories: '50', ingredients: 'corn, salt', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/watermelon-slice-enamel-pin-denim_373x.jpg'},
    {id: 6, name: 'BELTARA', calories: '78', ingredients: 'eggs, olive oil, bread', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/pizza-muffin-popover_373x.jpg'},
    {id: 7, name: 'BHATGAON', calories: '120', ingredients: 'kinoa, rice', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/spinache-quiche_373x.jpg'},
    {id: 8, name: 'BILASPUR', calories: '213', ingredients: 'tuna with tomatoes', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/savory-breakfast-roll_373x.jpg'},
    {id: 9, name: 'BILHA', calories: '167', ingredients: 'soup with chicken and potatoes', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/healthy-chili_373x.jpg'}
  ];
  
  return factory;
}]);