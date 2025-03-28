var element = document.getElementById("id01");element.innerHTML = "		&nbsp;&nbsp;		&nbsp;&nbsp;TOYS -12/03/2025  	&nbsp;&nbsp;BAL -	1570668		&nbsp;&nbsp;NEW ROUTE-	156006	";
										
										
										
										
										
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
										
{id: 1, name: '	AKALTARA', total: '  (	24275	)', 							
customer1: '	VINOD GENERAL (AKALTARA)	', toys1: 'TOYS:-	', amount1: '	0	',  url1: '	/2084377289testbysam/AKALTARA/VINOD GENERAL (AKALTARA).htm	', bags1: '	',		
customer2: '	CHANDAN GENERAL (AKALTARA)	', toys2: 'TOYS:-	', amount2: '	7041	',  url2: '	/2084377289testbysam/AKALTARA/CHANDAN%20GENERAL%20(AKALTARA)%2029.htm	', bags2: '	',		
customer3: '	DEEPAK GENERAL (AKALTARA)	', toys3: 'TOYS:-	', amount3: '	4	',  url3: '	/2084377289testbysam/AKALTARA/DEEPAK%20(AKALTARA)%20130.htm	', bags3: '	',		
customer4: '	SHRIMANAGALM (AKALTARA)	', toys4: 'TOYS:-	', amount4: '	0	',  url4: '	/2084377289testbysam/AKALTARA/SHRIMANGALAM%20(AKALTARA)%20298.htm	', bags4: '	',		
customer5: '	SHARMA GENERAL  (AKALTARA)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/AKALTARA/SHARMA%20GENERAL%20(AKALTARA)%20282.htm	', bags5: '	',		
customer6: '	SS FANCY (AKALTARA)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/AKALTARA/SS%20FANCY%20(AKALTARA).htm	', bags6: '	',		
customer7: '	KANHA GENERAL (AKALTARA)	', toys7: 'TOYS:-	', amount7: '	17230	',  url7: '	/2084377289testbysam/AKALTARA/KANHA%20GENERAL%20(AKALTARA)%2050.htm	', bags7: '	',		
customer8: '	SANTOSH GENERAL (AKALTARA)	', toys8: 'TOYS:-	', amount8: '	7	',  url8: '	/2084377289testbysam/AKALTARA/SANTOSH  GENERAL (AKALTARA).htm	', bags8: '	',		
customer9: '	RADHE SUPER BAZAR (AKALTARA)	', toys9: 'TOYS:-	', amount9: '	6	',  url9: '	/2084377289testbysam/AKALTARA/RADHE SUPER BAZAR (AKALTARA).htm	', bags9: '	',		
								},		
{id: 1, name: '	AMBIKAPUR', total: '(	130300	)', 							
customer1: '	GHONGROO (AMBIKAPUR)	', toys1: 'TOYS:-	', amount1: ' 	4	',  url1: '	/2084377289testbysam/AMBIKAPUR/GHUNGROO (AMBIKAPUR).htm	', bags1: '	',		
customer2: '	SAMRIDDHI VARSHA (AMBIKAPUR)	', toys2: 'TOYS:-	', amount2: '	19998	',  url2: '	/2084377289testbysam/AMBIKAPUR/SAMRIDDHI VARSHA (AMBIKAPUR).htm	', bags2: '	',		
customer3: '	MANOJ GIFT  (AMBIKAPUR)	', toys3: 'TOYS:-	', amount3: '	106275	',  url3: '	/2084377289testbysam/AMBIKAPUR/MANOJ JWELLERY AND GIFT (AMBIKAPUR).htm	', bags3: '	',		
customer4: '	PAYAL STORE (AMBIKAPUR)	', toys4: 'TOYS:-	', amount4: '	4023	',  url4: '	/2084377289testbysam/AMBIKAPUR/PAYAL STORE (AMBIKAPUR).htm	', bags4: '	',		
customer5: '	JAGDAMBA (AMBIKAPUR)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/AMBIKAPUR/JAGDAMBA (AMBIKAPUR).htm	', bags5: '	',		
customer6: '	PRINCE POINT (AMBIKAPUR)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/AMBIKAPUR/PRINCE POINT (AMBIKAPUR).htm	', bags6: '	',		
customer7: '	JAGMOHAN (AMBIKAPUR)	', toys7: 'TOYS:-	', amount7: '	21388	',  url7: '	/2084377289testbysam/AMBIKAPUR/JAGMOHAN (AMBIKAPUR).htm	', bags7: '	',		
customer8: '	SAHELI (AMBIKAPUR)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/AMBIKAPUR/SAHELI AMBIKAPUR.htm	', bags8: '	',		
customer9: '	AAYAT TEDDY HOUSE (PENDRA)	', toys9: 'TOYS:-	', amount9: '	28479	',  url9: '	/2084377289testbysam/AMBIKAPUR/AAYAT TEDDY HOUSE (AMBIKAPUR).htm	', bags9: '	',		
customer10: '	SUHAG BINDI (AMBIKAPUR)	', toys10: 'TOYS:-	', amount10: '	11683	',  url10: '	/2084377289testbysam/AMBIKAPUR/SUHAG BINDI (AMBIKAPUR).htm	', bags10: '	',		
								},		
{id: 1, name: '	BAGGHARA', total: ' (	0	)', 							
customer1: '	DAYA MANI9HARI (BAGGHARA)	', toys1: 'TOYS:-	', amount1: '	0	',  url1: '	/2084377289testbysam/BAGGHARA/DAYA MANIHARI (BAGGHARA).htm	', bags1: '	',		
								},		
{id: 1, name: '	BAIKUNTPUR', total: ' (	4311	)', 							
customer1: '	SHREE  STORE (BAIKUNTPUR)	', toys1: 'TOYS:-	', amount1: '	4311	',  url1: '	/2084377289testbysam/BAIKUNTPUR/SHREE STORE (BAIKUNTPUR).htm	', bags1: '	',		
								},		
{id: 1, name: '	BALCO', total: '  (	7435	)', 							
customer1: '	SACHIN COLLECTION (BALCO)	', toys1: 'TOYS:-	', amount1: '	0	',  url1: '	/2084377289testbysam/BALCO/SACHIN COLLECTION (BALCO) 84.htm	', bags1: '	',		
customer2: '	UPHAR COLLECTION (BALCO)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/BALCO/UPHAR COLLECTION (BALCO) 272.htm	', bags2: '	',		
customer3: '	NAVEEN ELECTRONICS (BALCO)	', toys3: 'TOYS:-	', amount3: '	7435	',  url3: '	/2084377289testbysam/BALCO/NAVEEN ELECTRONICS (BALCO)  232.htm	', bags3: '	',		
								},		
{id: 1, name: '	BALODA', total: '  (	29807	)', 							
customer1: '	ESHWAR GENERAL (BALODA)	', toys1: 'TOYS:-	', amount1: ' 	10830	',  url1: '	/2084377289testbysam/BALODA/ESHWAR%20GENERAL%20(BALODA)%2098.htm	', bags1: '	',		
customer2: '	SAKSHI (BALODA)	', toys2: 'TOYS:-	', amount2: '	6724	',  url2: '	/2084377289testbysam/BALODA/SAKSHI%20GENERAL%20(BALODA)%20152.htm	', bags2: '	',		
customer3: '	SHASHANK BOOK DEPO (BALODA)	', toys3: 'TOYS:-	', amount3: '	33	',  url3: '	/2084377289testbysam/BALODA/SHASHANK%20GENERAL%20(BALODA)%2058.htm	', bags3: '	',		
customer4: '	VARDHAMAN GENERAL (BALODA)	', toys4: 'TOYS:-	', amount4: '	0	',  url4: '	/2084377289testbysam/BALODA/VARDHAMAN%20GENERAL%20(BALODA)%20126.htm	', bags4: '	',		
customer5: '	LOVE KIRANA (BALODA)	', toys5: 'TOYS:-	', amount5: '	5273	',  url5: '	/2084377289testbysam/BALODA/LOVE%20KIRANA%20(BALODA)%20193_files.htm	', bags5: '	',		
customer6: '	VICKEY GENERAL (BALODA)	', toys6: 'TOYS:-	', amount6: '	6943	',  url6: '	/2084377289testbysam/BALODA/VICKEY%20GENERAL%20(BALODA).htm	', bags6: '	',		
customer7: '	SHIVAM GENERAL (BALODA)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/BALODA/SHIVAM%20GENERAL%20(BALODA)%20217.htm	', bags7: '	',		
customer8: '	B.L GUPTA (BALODA)	', toys8: 'TOYS:-	', amount8: '	4	',  url8: '	/2084377289testbysam/BALODA/B.L%20GUPTA%20(BALODA)%20258.htm	', bags8: '	',		
customer9: '	GOYAL GENERAL (BALODA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/BALODA/GOYAL%20GENERAL%20(BALODA)%20263.htm	', bags9: '	',		
								},		
{id: 1, name: '	BAMNIDIH', total: '(	22751	)', 							
customer1: '	CHANDINI GIFT	', toys1: 'TOYS:-	', amount1: ' 	22751	',  url1: '		', bags1: '	',		
								},		
{id: 1, name: '	BARADWAR', total: ' (	6064	)', 							
customer1: '	ASHIRWAD GENERAL (BARADWAR)	', toys1: 'TOYS:-	', amount1: ' 	3	',  url1: '	/2084377289testbysam/BARADWAR/ASHIRWAD GENERAL (BARADWAR) 13.htm	', bags1: '	',		
customer2: '	SIDDHI VINAYAK (BARADWAR)	', toys2: 'TOYS:-	', amount2: '	6047	',  url2: '	/2084377289testbysam/BARADWAR/SIDDHI VINAYAK GENERAL (BARADWAR) 268.htm	', bags2: '	',		
customer3: '	SAMRAT GENERAL (BARADWAR)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/BARADWAR/SAMRATH GENERAL (BARADWAR).htm	', bags3: '	',		
customer4: '	SAKTIYA SETH (BARADWAR)	', toys4: 'TOYS:-	', amount4: '	0	',  url4: '	/2084377289testbysam/BARADWAR/SAKTIYA SETH (BARADWAR) 219.htm	', bags4: '	',		
customer5: '	LAXMI DEPARTMENTAL  (BARADWAR)	', toys5: 'TOYS:-	', amount5: '	14	',  url5: '	/2084377289testbysam/BARADWAR/LAXMI  DEPARTMENTAL (BARADWAR).htm	', bags5: '	',		
customer6: '	KISHAN AGGARWAL (BARADWAR)	', toys6: 'TOYS:-	', amount6: '	97	',  url6: '	/2084377289testbysam/BARADWAR/KISHAN AGGARWAL (BARADWAR).htm	', bags6: '	',		
								},		
{id: 1, name: '	BARAMKELA', total: ' (	5400	)', 							
customer1: '	ANNPURNA FANCY (BARAMKELA)	', toys1: 'TOYS:-	', amount1: '	5400	',  url1: '	/2084377289testbysam/BARAMKELA/ANNPURNA STORE (BARAMKELA).htm	', bags1: '	',		
								},		
										
{id: 1, name: '	BASNA', total: ' (	0	)', 							
customer1: '	ROOP SHRINGAR (BASNA)	', toys1: 'TOYS:-	', amount1: '	0	',  url1: '	/2084377289testbysam/BASNA/ROOP SHRINGAR (BASNA).htm	', bags1: '	',		
customer2: '	TANMAY FANCY (BASNA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/BASNA/TANMAY FANCY (BASNA).htm	', bags2: '	',		
								},		
{id: 1, name: '	BELGEHNA', total: ' (	48546	)', 							
customer1: '	RINKU GENERAL (BELGEHNA)	', toys1: 'TOYS:-	', amount1: '	48546	',  url1: '	/2084377289testbysam/BELGEHNA/RINKU (BELGEHNA).htm	', bags1: '	',		
customer2: '	SURYA GENERAL (BELGEHNA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/BELGEHNA/SURYA (BELGEHNA).htm	', bags2: '	',		
								},		
{id: 1, name: '	BELTARA', total: ' (	0	)', 							
customer1: '	PRATAB (BELTARA)	', toys1: 'TOYS:-	', amount1: '	0	',  url1: '	/2084377289testbysam/BELTARA/PRATAB (BELTARA) 294.htm	', bags1: '	',		
								},		
{id: 1, name: '	BHATAPARA ', total: '(	0	)', 							
customer1: '	ANDAAZ BAG (BHATAPARA)	', toys1: 'TOYS:-	', amount1: '	0	',  url1: '	/2084377289testbysam/BHATAPARA/ANDAAZ COLLECTION (BHATAPARA).htm	', bags1: '	',		
								},		
{id: 1, name: '	BHATGAON', total: ' (	8115	)', 							
customer1: '	DEEPANSHU (BHATGAON)	', toys1: 'TOYS:-	', amount1: ' 	3216	',  url1: '	/2084377289testbysam/BHATGAON/DEEPANSHU GENERAL (BHATGAON) 19.htm	', bags1: '	',		
customer2: '	MANPASAND (BHATGAON)	', toys2: 'TOYS:-	', amount2: '	280	',  url2: '	/2084377289testbysam/BHATGAON/MANPASAND (BHATGAON) 92.htm	', bags2: '	',		
customer3: '	RIYA GENERAL (BHATGAON)	', toys3: 'TOYS:-	', amount3: ' 	4620	',  url3: '	/2084377289testbysam/BHATGAON/RIYA GENERAL (BHATGAON) 280.htm	', bags3: '	',		
customer4: '	NAMDEV (BHATGAON)	', toys4: 'TOYS:-	', amount4: '	-1	',  url4: '	/2084377289testbysam/BHATGAON/NAMDEV GENERAL (BHATGAON) 83.htm	', bags4: '	',		
customer5: '	VIJAY  COLLECTION (BHATGAON)	', toys5: 'TOYS:-	', amount5: '	17149	',  url5: '	/2084377289testbysam/BHATGAON/VIJAY COLLECTION (BHATGAON).htm	', bags5: '	',		
customer6: '	SHREE RAM GENERAL (BHATGAON)	', toys6: 'TOYS:-	', amount6: '	8317	',  url6: '	/2084377289testbysam/SHREE RAM GENERAL (BHATGAON).htm	', bags6: '	',		
								},		
{id: 1, name: '	BHILAIGARH', total: ' (	7524	)', 							
customer1: '	SONU GENERAL (BHILAIGARH)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/BHILAIGARH/SONU GENERAL (BHILAIGARH) 52.htm	', bags1: '	',		
customer2: '	SS  SUPER MARKET (BHILAIGARH)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/BHILAIGARH/SS  SUPER MARKET (BHILAIGARH).htm	', bags2: '	',		
customer3: '	TANU GENERAL (BHILAIGARH)	', toys3: 'TOYS:-	', amount3: '	4261	',  url3: '	/2084377289testbysam/BHILAIGARH/TANU GENERAL (BHILAIGARH) 251.htm	', bags3: '	',		
customer4: '	LALIT GENERAL (BHILAIGARH)	', toys4: 'TOYS:-	', amount4: '	34	',  url4: '	/2084377289testbysam/BHILAIGARH/LALIT GENERAL (BHILAIGARH) 57.htm	', bags4: '	',		
customer5: '	DEWANGAN GENERAL (BHILAIGARH)	', toys5: 'TOYS:-	', amount5: '	3229	',  url5: '	/2084377289testbysam/BHILAIGARH/DEWANGAN GENERAL (BHILAIGARH) 218.htm	', bags5: '	',		
customer6: '	NEHA FANCY (BHILAIGARH)	', toys6: 'TOYS:-	', amount6: '	1177	',  url6: '	/2084377289testbysam/BHILAIGARH/NEHA  FANCY (BHILAIGARH).htm	', bags6: '	',		
customer7: '	BALRAM CLOTH STORE (BHILIAGARH)	', toys7: 'TOYS:-	', amount7: '	9100	',  url7: '	/2084377289testbysam/BHILAIGARH/BALRAM CLOTH STORE (BHILAIGARH).htm	', bags7: '	',		
								},		
{id: 1, name: '	BILASPUR ', total: '(	53121	)', 							
customer1: '	BOMBAY FASHION (RAJKISHORE)	', toys1: 'TOYS:-	', amount1: ' 	10033	',  url1: '	/2084377289testbysam/BILASPUR/BOMBAY FASHION (RAJKISHORE).htm	', bags1: '	',		
customer2: '	MOHAN NAGOI (BILASPUR)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/BILASPUR/MOHAN NAGOI (BILASPUR) 128.htm	', bags2: '	',		
customer3: '	POOJA SHRINGAR (BILASPUR)	', toys3: 'TOYS:-	', amount3: '	1308	',  url3: '	/2084377289testbysam/BILASPUR/POOJA SHRINGARH (BILASPUR) 107.htm	', bags3: '	',		
customer4: '	AKASH GENERAL (BUDHWARI)	', toys4: 'TOYS:-	', amount4: '	0	',  url4: '	/2084377289testbysam/BILASPUR/AKASH GENERAL STORE (BUDHWARI) - 295.htm	', bags4: '	',		
customer5: '	SIDDHI VINAYAK (BILASPUR)	', toys5: 'TOYS:-	', amount5: '	13041	',  url5: '	/2084377289testbysam/BILASPUR/SIDDHI VINAYAK (BILASPUR).htm	', bags5: '	',		
customer6: '	PUSTAK BHAWAN (BILASPUR)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/BILASPUR/PUSHTAK BHAWAN (BILASPUR).htm	', bags6: '	',		
customer7: '	SEEMA SHRIVASTAV (BILASPUR)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/BILASPUR/SEEMA SHRIVASTAV (BILASPUR) 278.htm	', bags7: '	',		
customer8: '	SONI GIFT (DEVIKHURDH) (BSP)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/BILASPUR/SONI GIFT DEVRIKHURDH (BILASPUR) 155.htm	', bags8: '	',		
customer9: '	VIJAY TOYS TELIPARA	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/BILASPUR/VIJAY TOYS (TELIPARA).htm	', bags9: '	',		
customer10: '	HITESH BAJAJ	', toys10: 'TOYS:-	', amount10: '	8184	',  url10: '	/2084377289testbysam/BILASPUR/HITESH BAJAJ (BILASPUR).htm	', bags10: '	',		
customer11: '	HELLO DUDE (SUNIL)	', toys11: 'TOYS:-	', amount11: '	20555	',  url11: '	/2084377289testbysam/BILASPUR/HELLO DUDE (SUNIL JAGYASI).htm	', bags11: '	',		
customer12: '	BABY  WORLD  (RAVI KHANNA)	', toys12: 'TOYS:-	', amount12: '	10797	',  url12: '	/2084377289testbysam/BILASPUR/BABY WORLD  (RAVI  KHANNA).htm	', bags12: '	',		
customer13: '	HARSH (JUNA BILASPUR)	', toys13: 'TOYS:-	', amount13: '	17	',  url13: '	/2084377289testbysam/BILASPUR/HARSH JUNA BILASPUR.htm	', bags13: '	',		
customer14: '	VIJAY COPEIER (TIFRA)	', toys14: 'TOYS:-	', amount14: '	0	',  url14: '	/2084377289testbysam/BILASPUR/VIJAY COPIER TIFRA BILASPUR.htm	', bags14: '	',		
customer15: '	DOLLY DRESSES (BILASPUR)	', toys15: 'TOYS:-	', amount15: '	0	',  url15: '	/2084377289testbysam/BILASPUR/DOLLY DRESSES BILASPUR.htm	', bags15: '	',		
customer16: '	POOJA STATIONARY (BILASPUR	', toys16: 'TOYS:-	', amount16: '	0	',  url16: '	/2084377289testbysam/BILASPUR/POOJA STATIONARY (BILASPUR).htm	', bags16: '	',		
customer17: '	AKANKSHA CHARTIDY	', toys17: 'TOYS:-	', amount17: '	7	',  url17: '	/2084377289testbysam/BILASPUR/AKANKSHA CHARTIDY.htm	', bags17: '	',		
customer18: '	NEHA DAILY NEEDS (BILASPUR)	', toys18: 'TOYS:-	', amount18: '	-783	',  url18: '	/2084377289testbysam/BILASPUR/NEHA DAILY NEEDS SARKHANDA BILASPUR.htm	', bags18: '	',		
								},		
{id: 1, name: '	BILHA', total: ' (	3892	)', 							
customer1: '	PAYAL FANCY (BILHA)	', toys1: 'TOYS:-	', amount1: ' 	96	',  url1: '	/2084377289testbysam/BILHA/PAYAL%20FANCY%20(BILHA)%2066.htm	', bags1: '	',		
customer2: '	KISAN MEGA BIG BAZAR (BILHA)	', toys2: 'TOYS:-	', amount2: '	3796	',  url2: '	/2084377289testbysam/BILHA/KISAN%20MEGA%20BIG%20BAZAR%20(BILHA)%2031.htm	', bags2: '	',		
customer3: '	RAJA DAILY NEEDS (BILHA)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/BILHA/RAJA%20DAILY%20NEEDS%20(BILHA).htm	', bags3: '	',		
								},		
										
{id: 1, name: '	BIRRA', total: ' (	23177	)', 							
customer1: '	TOMESH (BIRRA)	', toys1: 'TOYS:-	', amount1: '	16947	',  url1: '	/2084377289testbysam/BIRRA/TOMESH%20(BIRRA).htm	', bags1: '	',		
customer2: '	SUMAN (BIRRA)	', toys2: 'TOYS:-	', amount2: '	6230	',  url2: '	/2084377289testbysam/BIRRA/SUMAN (BIRRA).htm	', bags2: '	',		
customer3: '	NAMDEV (BIRRA)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/BIRRA/RACKET RATIO.htm	', bags3: '	',		
customer4: '	UDHAAV GENERAL (BIRRA)	', toys4: 'TOYS:-	', amount4: '	0	',  url4: '	/2084377289testbysam/BIRRA/UDHAV  GENERAL (BIRRA).htm	', bags4: '	',		
								},		
{id: 1, name: '	BOADTARA', total: ' (	9530	)', 							
customer1: '	PRIYAL GENERAL (BODTARA)	', toys1: 'TOYS:-	', amount1: ' 	10	',  url1: '	/2084377289testbysam/BOADTARA/PRIYAL (BOADTARA) 26.htm	', bags1: '	',		
customer2: '	MONIKA FANCY STORE (BOADTARA)	', toys2: 'TOYS:-	', amount2: '	902	',  url2: '	/2084377289testbysam/BOADTARA/MONIKA FANCY STORE (BOADTARA).htm	', bags2: '	',		
customer3: '	PUNNET SAHU  (BOADTARA)	', toys3: 'TOYS:-	', amount3: '	8618	',  url3: '	/2084377289testbysam/BOADTARA/PUNNET RAM  SAHU  (BOADTARA).htm	', bags3: '	',		
customer4: '	DEEPAK KASHYAP (BOADTARA)	', toys4: 'TOYS:-	', amount4: '	3099	',  url4: '	/2084377289testbysam/BOADTARA/DEEPAK KASHYAP (BOADTARA).htm	', bags4: '	',		
								},		
{id: 1, name: '	BORLA', total: ' (	0	)', 							
customer1: '	KESARWANI CLOTH (BORLA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/BORLA/KESARWANI CLOTH (BORLA).htm	', bags1: '	',		
								},		
										
{id: 1, name: '	CHAITMA', total: ' (	1634	)', 							
customer1: '	JEET (CHAITMA)	', toys1: 'TOYS:-	', amount1: ' 	1634	',  url1: '	/2084377289testbysam/CHAITMA/JEET CHAITMA.htm	', bags1: '	',		
								},		
										
{id: 1, name: '	CHAKRBHTA ', total: ' (	24435	)', 							
customer1: '	MAHAMAYA THRED HOUSE (CHBT)	', toys1: 'TOYS:-	', amount1: ' 	22378	',  url1: '	/2084377289testbysam/CHAKKARBHATA/MAHAMAYA%20THREAD%20(CHAKKARBHATA)%20103.htm	', bags1: '	',		
customer2: '	MAHESH STD (CHBT)	', toys2: 'TOYS:-	', amount2: '	2057	',  url2: '	/2084377289testbysam/CHAKKARBHATA/MAHESH%20STD%20(CHAKKARBHATA)%20161.htm	', bags2: '	',		
customer3: '	NEW JAI MATA DI  (CHBT)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/CHAKKARBHATA/NEW%20JAIMATA%20DI%20(CHAKKARBHATA)%2081.htm	', bags3: '	',		
customer4: '	BABA GENERAL (CHBT)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/CHAKKARBHATA/BABA%20GENERAL%20(CHAKKARBHATA)%20%20188.htm	', bags4: '	',		
customer5: '	LAXMI KITABGHAR (CHBT)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/CHAKKARBHATA/LAXMI%20KITAB%20GHAR%20(CHAKKARBHATA).htm	', bags5: '	',		
customer6: '	SIDDARTH (CHBT)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/CHAKKARBHATA/SIDDARTH%20(CHAKKARBHATA)%20139.htm	', bags6: '	',		
customer7: '	MAHAMAYA GENERAL (CHBT)	', toys7: 'TOYS:-	', amount7: '	30031	',  url7: '	/2084377289testbysam/CHAKKARBHATA/COUSTOMER CONTACT AND REMINDER.htm	', bags7: '	',		
customer8: '	LAL SAI CHAKKARBHATA	', toys8: 'TOYS:-	', amount8: '	-1	',  url8: '	/2084377289testbysam/CHAKKARBHATA/LAL SAI (CHAKKARBHATA).htm	', bags8: '	',		
								},		
{id: 1, name: '	CHAMPA', total: ' (	3992	)', 							
customer1: '	AMIT SHRINGAR AND GIFT (CHAMPA)	', toys1: 'TOYS:-	', amount1: ' 	4	',  url1: '	/2084377289testbysam/CHAMPA/AMIT SHRINGAR AND GIFT (CHAMPA).htm	', bags1: '	',		
customer2: '	SOHAM GIFT (CHAMPA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/CHAMPA/SOHAM GIFT (CHAMPA) 86.htm	', bags2: '	',		
customer3: '	HEMA SHRINGAR (CHAMPA)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/CHAMPA/HEMA SUHAG (CHAMPA).htm	', bags3: '	',		
customer4: '	RANI GENERAL (CHAMPA)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/CHAMPA/RANI GENERAL STORE (CHAMPA).htm	', bags4: '	',		
customer5: '	SHRINGAR SADAN (CHAMPA)	', toys5: 'TOYS:-	', amount5: '	-11	',  url5: '	/2084377289testbysam/CHAMPA/SHRINGAR SAADAN (CHAMPA) 284.htm	', bags5: '	',		
customer6: '	RADHA SWAMI (CHAMPA)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/CHAMPA/RADHA%20SWAMI%20(CHAMPA).htm	', bags6: '	',		
customer7: '	MOHSIN (CHAMPA)	', toys7: 'TOYS:-	', amount7: '	4000	',  url7: '	/2084377289testbysam/CHAMPA/MOHSIN BHAI (CHAMPA) 271.htm	', bags7: '	',		
customer8: '	MAA BHAGWATI (CHAMPA)	', toys8: 'TOYS:-	', amount8: '	2	',  url8: '	/2084377289testbysam/CHAMPA/MAA BHAGWATI (CHAMPA) 238.htm	', bags8: '	',		
customer9: '	POOJA NOVELTY (CHAMPA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/CHAMPA/POOJAA NOVELTY (CHAMPA) 40.htm	', bags9: '	',		
customer10: '	KANHA SUPERBAZAR (CHAMPA)	', toys10: 'TOYS:-	', amount10: '	0	',  url10: '	/2084377289testbysam/CHAMPA/KANHA SUPER BAZAAR (CHAMPA) 262.htm	', bags10: '	',		
customer11: '	ANIL DHARMIK (CHAMPA)	', toys11: 'TOYS:-	', amount11: '	-3	',  url11: '	/2084377289testbysam/CHAMPA/ANIL DHARMIK (CHAMPA).htm	', bags11: '	',		
customer12: '	MD GENERAL (CHAMPA)	', toys12: 'TOYS:-	', amount12: '	0	',  url12: '	/2084377289testbysam/CHAMPA/MD CHAMPA.htm	', bags12: '	',		
								},		
{id: 1, name: '	CHURRI ', total: '(	8043	)', 							
customer1: '	NEHA GENERAL (CHURI)	', toys1: 'TOYS:-	', amount1: ' 	7951	',  url1: '	/2084377289testbysam/CHURI/NEHA%20(CHURRI)%2071.htm	', bags1: '	',		
customer2: '	MAA KAUSA GAI (CHURRI)	', toys2: 'TOYS:-	', amount2: '	92	',  url2: '	/2084377289testbysam/CHURI/MAA%20KAUSA%20GAI%20(CHURRI)%20292.htm	', bags2: '	',		
								},		
										
{id: 1, name: '	DABRA', total: ' (	1870	)', 							
customer1: '	FASHION PARK (DABRA)	', toys1: 'TOYS:-	', amount1: ' 	1870	',  url1: '	/2084377289testbysam/DABRA/FASHION PARK (DABRA) 297.htm	', bags1: '	',		
								},		
{id: 1, name: '	DHARAMJAYGARH', total: ' (	0	)', 							
customer1: '	AKANKSHA  (DHARAMJAYGARH)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/DHARMJAYGARH/AKANSHA GENERAL (DHARAMJAYGARH) 3.htm	', bags1: '	',		
								},		
										
{id: 1, name: '	DIPKA', total: ' (	12	)', 							
customer1: '	KOLKATA MAHASALE (DIPKA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/DIPKA/KOLKATA%20MAHA%20SALE%20(DIPKA)%2048.htm	', bags1: '	',		
customer2: '	NEW BOOK DEPO (DIPKA)	', toys2: 'TOYS:-	', amount2: '	9	',  url2: '	/2084377289testbysam/DIPKA/NEW%20BOOK%20DEPO.%20(DIPKA)%20110.htm	', bags2: '	',		
customer3: '	GEETA BOOK DEPO (DIPKA)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/DIPKA/GEETA%20BOOK%20DEPO.%20(DIPKA)%20266.htm	', bags3: '	',		
customer4: '	SHANTI SUHAG (DIPKA)	', toys4: 'TOYS:-	', amount4: ' 	3	',  url4: '	/2084377289testbysam/DIPKA/SHANTI%20SUHAG%20(DIPKA)%20129.htm	', bags4: '	',		
customer5: '	KHUSHI BENGALS (DIPKA)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/DIPKA/KHUSHI%20BENGALS%20(DIPKA)%204.htm	', bags5: '	',		
customer6: '	VASU COLLECTION  (DIPA)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/DIPKA/VASU%20COLLECTION.%20(DIPKA)%20149.htm	', bags6: '	',		
customer7: '	HARISH CYCLE (DIPKA)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/DIPKA/HARISH CYCLE (DIPKA).htm	', bags7: '	',		
customer8: '	SATISH BOOK DEPO (DIPKA)	', toys8: 'TOYS:-	', amount8: '	2085	',  url8: '	/2084377289testbysam/DIPKA/SATISH BOOK (DIPKA).htm	', bags8: '	',		
								},		
{id: 1, name: '	GANYARI', total: ' (	700	)', 							
customer1: '	MISHRA GENERAL (GANYARI)	', toys1: 'TOYS:-	', amount1: ' 	700	',  url1: '	/2084377289testbysam/GANYARI/MISHRA (GANYARI) 154.htm	', bags1: '	',		
								},		
										
{id: 1, name: '	GEVRA BASTI', total: ' (	1100	)', 							
customer1: '	SANDHYA STORE (GEVRABASTI)	', toys1: 'TOYS:-	', amount1: ' 	1100	',  url1: '	/2084377289testbysam/GEVRA BASTI/SANDHYA STORE (GEVRABASTI).htm	', bags1: '	',		
customer2: '	ISHIKA GENERAL (GEVRABASTI)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/GEVRA BASTI/ISHIKA GENERAL (GEVRABASTI).htm	', bags2: '	',		
										
								},		
{id: 1, name: '	GOBIRPATH', total: ' (	0	)', 							
customer1: '	PREETY GOBRIPATH (GOBRIPATH)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/GOBRIPATH/PREETI (GOBRIPATH) 97.htm	', bags1: '	',		
customer2: '	PRATAB  GOBRIPAT	', toys2: 'TOYS:-	', amount2: ' 	0	',  url2: '	/2084377289testbysam/GOBRIPATH/PRATAB (GOBRIPAT).htm	', bags2: '	',		
								},		
										
{id: 1, name: '	HARDIBAZAR ', total: '(	24035	)', 							
customer1: '	ASHWANI SHRINGAR (HARDIBAZAR)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/HARDIBAZAR/ASHWINI GENERAL (HARDIBAZAR) 174.htm	', bags1: '	',		
customer2: '	SANSKRITI GENERAL  (HARDIBAZAR)	', toys2: 'TOYS:-	', amount2: '	1	',  url2: '	/2084377289testbysam/HARDIBAZAR/SANSKRITI GENERAL (HARDIBAZAR).htm	', bags2: '	',		
customer3: '	NIKHIL FANCY (HARDIBAZAR)	', toys3: 'TOYS:-	', amount3: '	2	',  url3: '	/2084377289testbysam/HARDIBAZAR/NIKHIL FANCY (HARDIBAZAR) 281.htm	', bags3: '	',		
customer4: '	 SONI SHRINGAR (HARDIBAZAR)	', toys4: 'TOYS:-	', amount4: ' 	15193	',  url4: '	/2084377289testbysam/HARDIBAZAR/SONI SHRINGAR (HARDIBAZAR) 72.htm	', bags4: '	',		
customer5: '	MANOJ KAPDA BAZAR (HARDIBAZAR)	', toys5: 'TOYS:-	', amount5: '	8839	',  url5: '	/2084377289testbysam/HARDIBAZAR/MANOJ KAPDA (HARDIBAZAR) 252.htm	', bags5: '	',		
								},		
{id: 1, name: '	HARDIKALA', total: ' (	0	)', 							
customer1: '	MANMOHAN (HARDIKALA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/HARDIKALA/MANMOHAN (HARDIKALA) 69.htm	', bags1: '	',		
customer2: '	SANAJY  (HARDIKALA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/HARDIKALA/SANJAY. (HARDIKALA) 291.htm	', bags2: '	',		
								},		
{id: 1, name: '	HASOD', total: ' (	14633	)', 							
customer1: '	LAXMI FANCY (HASOD)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/HASOD/LAXMI%20GENERAL%20(HASOD)%20145.htm	', bags1: '	',		
customer2: '	SAHU FANCY (HASOD)	', toys2: 'TOYS:-	', amount2: '	7819	',  url2: '	/2084377289testbysam/HASOD/SAHU%20FANCY%20(HASOD)%20301.htm	', bags2: '	',		
customer3: '	REKHA FANCY STORE (HASOD)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/HASOD/REKHA%20FANCY%20STORE%20(HASOD).htm	', bags3: '	',		
customer4: '	CHAVI GENERAL (HASOD)	', toys4: 'TOYS:-	', amount4: ' 	2462	',  url4: '	/2084377289testbysam/HASOD/CHAVVI%20GENERAL%20(HASOD).htm	', bags4: '	',		
customer5: '	MAHARAJ FANCY (HASOD)	', toys5: 'TOYS:-	', amount5: '	4352	',  url5: '	/2084377289testbysam/HASOD/MAHARAJ FANCY STORE (HASOD).htm	', bags5: '	',		
customer6: '	GAYTRI (HASOD)	', toys6: 'TOYS:-	', amount6: '	755	',  url6: '	/2084377289testbysam/HASOD/GAYTRI GENERAL (HASOD).htm	', bags6: '	',		
								},		
{id: 1, name: '	JAIJAIPURI', total: ' (	925	)', 							
customer1: '	TOMESH CHASHMA	', toys1: 'TOYS:-	', amount1: ' 	879	',  url1: '	/2084377289testbysam/JAIJAIPUR/TOMESH (JAIJAIPUR).htm	', bags1: '	',		
customer2: '	KHUSHI  GENERAL  	', toys2: 'TOYS:-	', amount2: '	46	',  url2: '	/2084377289testbysam/JAIJAIPUR/KHUSHI GENERAL (JAYJAYPUR).htm	', bags2: '	',		
								},		
{id: 1, name: '	JAITHARI', total: ' (	7364	)', 							
customer1: '	SHIV PLASTIC (JAITHARI)	', toys1: 'TOYS:-	', amount1: ' 	7364	',  url1: '	/2084377289testbysam/JAITHARI/MUSKAN (JAITHARI) 79.htm	', bags1: '	',		
customer2: '	MUSKAN FANCY (JAITHARI)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/JAITHARI/SHIV PLASTICS (JAITHARI) 143.htm	', bags2: '	',		
customer3: '	ANKIT (JAITHARI)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/JAITHARI/ANKIT (JAITHARI).htm	', bags3: '	',		
								},		
{id: 1, name: '	JANJGIR', total: ' (	47580	)', 							
customer1: '	GARIMA FANCY (JANJGIR)	', toys1: 'TOYS:-	', amount1: ' 	-3	',  url1: '	/2084377289testbysam/JANJGIR/GARIMA FANCY (JANJGIR) 166.htm	', bags1: '	',		
customer2: '	PRATEEK GENERAL  (JANJGIR)	', toys2: 'TOYS:-	', amount2: '	12	',  url2: '	/2084377289testbysam/JANJGIR/PRATEEK GENERAL (JANJGIR) 150.htm	', bags2: '	',		
customer3: '	NAMDEV GENERAL (JANJGIR)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/JANJGIR/NAMDEV GENERAL (JANJGIR) 158.htm	', bags3: '	',		
customer4: '	SATYAM GENERAL (JANJGIR)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/JANJGIR/SATYAM GENERAL (JANJGIR) 132.htm	', bags4: '	',		
customer5: '	SUPER BAG HOUSE (JANJGIR)	', toys5: 'TOYS:-	', amount5: '	47571	',  url5: '	/2084377289testbysam/JANJGIR/SUPER BAG HOUSE (JANJGIR) 37.htm	', bags5: '	',		
customer6: '	AKASH GENERAL (JANJGIR)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/JANJGIR/AKASH GENERAL STORE (JANJGIR) 11.htm	', bags6: '	',		
customer7: '	MADANLAL KAPDA (JANJGIR)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/JANJGIR/MADANLAL (JANJGIR).htm	', bags7: '	',		
customer8: '	RAJESH GENERAL (JANJGUR	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/JANJGIR/RAJESH GENERAL (JANJGIR).htm	', bags8: '	',		
customer9: '	KAMAL LADIES (JANJGIR)	', toys9: 'TOYS:-	', amount9: '	1195	',  url9: '	/2084377289testbysam/JANJGIR/KAMAL LADIES (JANJGIR).htm	', bags9: '	',		
customer10: '	NOVELTY BENGALS (JANJGIR)	', toys10: 'TOYS:-	', amount10: '	0	',  url10: '	/2084377289testbysam/JANJGIR/NOVELTY BENGALS (JANJGIR).htm	', bags10: '	',		
								},		
{id: 1, name: '	JHARSUKDA ', total: '(	4	)', 							
customer1: '	 FASHION PARK (JHARSUKDA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/JHARSUKDA/FASHION PARK (JHARSUKDA) 167.htm	', bags1: '	',		
customer2: '	GUDDU (JHARSUKDA)	', toys2: 'TOYS:-	', amount2: '	4	',  url2: '	/2084377289testbysam/JHARSUKDA/GUDDU (JHARSUKDA) 43.htm	', bags2: '	',		
								},		
{id: 1, name: '	JONDHRA ', total: '(	0	)', 							
customer1: '	BABA GENERAL (JONDHRA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/JONDHRA/BABA GENERAL (JONDHRA).htm	', bags1: '	',		
customer2: '	PURAN (JONDHARA)	', toys2: 'TOYS:-	', amount2: ' 	0	',  url2: '	/2084377289testbysam/JONDHRA/PURAN FANCY  (JONDHARA).htm	', bags2: '	',		
customer3: '	SAHELI BEAUTY (JONDHARA)	', toys3: 'TOYS:-	', amount3: ' 	0	',  url3: '	/2084377289testbysam/JONDHRA/SAHELI BEAUTY (JONDHARA).htm	', bags3: '	',		
								},		
{id: 1, name: '	KANSABEL', total: ' (		)', 							
customer1: '	SAAKET (KANSABEL)	', toys1: 'TOYS:-	', amount1: ' 	14410	',  url1: '	/2084377289testbysam/KANSABEL/SAAKET (KANSABEL).htm	', bags1: '	',		
								},		
										
{id: 1, name: '	KATGHORA', total: ' (	21766	)', 							
customer1: '	ROOP SHRINGAR	', toys1: 'TOYS:-	', amount1: ' 	518	',  url1: '	/2084377289testbysam/KATGHORA/ROOP%20SHRINGAR%20(KATGHORA)%20173.htm	', bags1: '	',		
customer2: '	MAHABALI (KATGHORA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/KATGHORA/MAHABALI.%20(KATGHORA)%2063.htm	', bags2: '	',		
customer3: '	KAREENA BOOT HOUSE (KATGHORA)	', toys3: 'TOYS:-	', amount3: '	300	',  url3: '	/2084377289testbysam/KATGHORA/KAREENA%20BOOT%20(KATGHOTA)%20(NEW%2029).htm	', bags3: '	',		
customer4: '	PRADEEP BHAIYA (KATGHORA)	', toys4: 'TOYS:-	', amount4: ' 	20949	',  url4: '	/2084377289testbysam/KATGHORA/PRADEEP BHAI (KATGHORA).htm	', bags4: '	',		
customer5: '	PADUKA BOOT HOUSE (KATGHORA)	', toys5: 'TOYS:-	', amount5: '	-1	',  url5: '	/2084377289testbysam/KATGHORA/PADUKA%20BOOT%20(KATGHORA)%20250.htm	', bags5: '	',		
customer6: '	TIRUPATI GENERAL (KATGORA)	', toys6: 'TOYS:-	', amount6: '	4331	',  url6: '	/2084377289testbysam/KATGHORA/TIRUPATI GENERAL (KATGHORA).htm	', bags6: '	',		
customer7: '	SHUBH KADAM (KATGHORA)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/KATGHORA/PADUKA BOOT (KATGHORA) 250_files.htm	', bags7: '	',		
customer8: '	TANISHA COLLECTION (KATGHORA)	', toys8: 'TOYS:-	', amount8: '	15	',  url8: '	/2084377289testbysam/KATGHORA/TANSIHA COLLECTION (KATGHORA).htm	', bags8: '	',		
customer9: '	GAURI UPHAR (KATGHORA)	', toys9: 'TOYS:-	', amount9: '	740	',  url9: '	/2084377289testbysam/KATGHORA/GAURI UPHAR (KATGHORA).htm	', bags9: '	',		
customer10: '	ANOKHA SHRINGAR (KATGHORA)	', toys10: 'TOYS:-	', amount10: '	1103	',  url10: '	/2084377289testbysam/KATGHORA/ANOKHA SHRINGAR (KATGHORA).htm	', bags10: '	',		
customer11: '	GRIHASTI SUPER BAZAR (KATGHORA)	', toys11: 'TOYS:-	', amount11: '	0	',  url11: '	/2084377289testbysam/KATGHORA/GRIHASTI SUPER BAZAR (KATGHORA).htm	', bags11: '	',		
								},		
{id: 1, name: '	KATGI', total: ' (	42252	)', 							
customer1: '	VIDHYARTHI GENERAL (KATGI)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KATGI/VIDYARTH GENERAL (KATGI) 106.htm	', bags1: '	',		
customer2: '	MANOJ FASHION	', toys2: 'TOYS:-	', amount2: '	2773	',  url2: '	/2084377289testbysam/KATGI/MANOJ FASHION (KATGI) 164.htm	', bags2: '	',		
customer3: '	MAHAMAYA GENERAL (KATGI)	', toys3: 'TOYS:-	', amount3: '	5259	',  url3: '	/2084377289testbysam/KATGI/MAHAMAYA GENERAL. (KATGI) 170_files.htm	', bags3: '	',		
customer4: '	JYOTI GENRAL (KATGI)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/KATGI/JYOTI GENERAL (KATGI) 10.htm	', bags4: '	',		
customer5: '	PAWAN GENERAL STORE (KATGI)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/KATGI/PAWAN GENERAL (KATGI) 38.htm	', bags5: '	',		
customer6: '	SAI GENERAL (KATGI)	', toys6: 'TOYS:-	', amount6: '	230	',  url6: '	/2084377289testbysam/KATGI/SAI GENERAL (KATGI) 264.htm	', bags6: '	',		
customer7: '	SURAJ GENERAL (KATGI)	', toys7: 'TOYS:-	', amount7: '	3	',  url7: '	/2084377289testbysam/KATGI/SURAJ GENERAL. (KATGI) 27.htm	', bags7: '	',		
customer8: '	MANOJ GENERAL (KATGI)	', toys8: 'TOYS:-	', amount8: '	33987	',  url8: '	/2084377289testbysam/KATGI/MANOJ GENERAL. (KATGI) 68.htm	', bags8: '	',		
								},		
{id: 1, name: '	KAWARDHA ', total: '(	0	)', 							
customer1: '	GURUDEV GENERAL (KAWARDHA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KAWARDHA/GURUDEV GENERAL (KAWARDHA).htm	', bags1: '	',		
customer2: '	RAJESH FANCY (KAWARDHA)	', toys2: 'TOYS:-	', amount2: ' 	-6765	',  url2: '	/2084377289testbysam/KAWARDHA/RAJESH FANCY (KAWARDHA).htm	', bags2: '	',		
customer3: '	JAIN BENGALS (KAWARDHA)	', toys3: 'TOYS:-	', amount3: '		',  url3: '	/2084377289testbysam/KAWARDHA/JAIN BENGALS (KAWARDHA).htm	', bags3: '	',		
								},		
{id: 1, name: '	KHAMRIYA', total: ' (	25974	)', 							
customer1: '	FAIR DEAL (KHAMARIYA)	', toys1: 'TOYS:-	', amount1: ' 	475	',  url1: '	/2084377289testbysam/KHAMARIYA/FAIR%20DEAL.%20(KHAMARIYA)%20%2015.htm	', bags1: '	',		
customer2: '	SHUBHAM GENERAL (KHAMARIYA)	', toys2: 'TOYS:-	', amount2: '	25499	',  url2: '	/2084377289testbysam/KHAMARIYA/SHUBHAM (KAMARIYA)  180.htm	', bags2: '	',		
								},		
{id: 1, name: '	KHAMI', total: ' (	5745	)', 							
customer1: '	AMISHA GENERAL (KHAMI)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KHAMI/AMISHA GENERAL (KHAMI).htm	', bags1: '	',		
customer2: '	SAHU GENERAL (KHAMI)	', toys2: 'TOYS:-	', amount2: ' 	5745	',  url2: '	/2084377289testbysam/KHAMI/SAHU GENERAL (KHAMI).htm	', bags2: '	',		
								},		
{id: 1, name: '	KARNODH ', total: '(	0	)', 							
customer1: '	ASHOK KARNODH	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KARNODH/ASHOK (KARNODH) 144.htm	', bags1: '	',		
								},		
{id: 1, name: '	KHARSIYA ', total: '(	4125	)', 							
customer1: '	ABHINANDAN (KHARSIYA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KHARSIYA/ABHINANDAN (KHARSIYA).htm	', bags1: '	',		
customer2: '	KRISHAN COLLECTION (KHARSIYA)	', toys2: 'TOYS:-	', amount2: '	4125	',  url2: '	/2084377289testbysam/KHARSIYA/KRISHAN COLLECTION (KHARSIYA).htm	', bags2: '	',		
customer3: '	KANHA GENERAL (KHARSIYA)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/KHARSIYA/KANHA GENERAL (KHARSIYA).htm	', bags3: '	',		
customer4: '	MADHUBAN GIFT (KHARSIYA)	', toys4: 'TOYS:-	', amount4: ' 	160	',  url4: '	/2084377289testbysam/KHARSIYA/KANHA GENERAL (KHARSIYA)_files.htm	', bags4: '	',		
customer5: '	MADHAV FANCY (KHARSIYA)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/KHARSIYA/MADHAV FANCY (KHARSIYA).htm	', bags5: '	',		
								},		
{id: 1, name: '	KHAROD', total: ' (	2	)', 							
customer1: '	MOHAN GENERAL 	', toys1: 'TOYS:-	', amount1: ' 	2	',  url1: '	/2084377289testbysam/KHAROD/MOHAN (KHAROD)  65.htm	', bags1: '	',		
								},		
{id: 1, name: '	KASHDOL', total: ' (	-80	)', 							
customer1: '	MAA SHETLA (KASHDOL)	', toys1: 'TOYS:-	', amount1: ' 	-80	',  url1: '	/2084377289testbysam/KASHDOL/MAA SHETLA. (KASHDOL) 108.htm	', bags1: '	',		
customer2: '	BALAJI (KASHDOL)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/KASHDOL/BALAJI. (KASHDOL) 288.htm	', bags2: '	',		
customer3: '	SHREE BOOK DEPO (KASHDOL)	', toys3: 'TOYS:-	', amount3: '	7111	',  url3: '	/2084377289testbysam/KASHDOL/SHREE BOOK  DEPO (KASHDOL).htm	', bags3: '	',		
customer4: '	RAJ BOOK DEPO (KASHDOL)	', toys4: 'TOYS:-	', amount4: ' 	2478	',  url4: '	/2084377289testbysam/KASHDOL/RAJ BOOK (KASHDOL).htm	', bags4: '	',		
								},		
{id: 1, name: '	KORBA', total: ' (	1	)', 							
customer1: '	BANSAL ENTERPRISES	', toys1: 'TOYS:-	', amount1: ' 	1	',  url1: '	/2084377289testbysam/KORBA/BANSAL%20ENTERPRISES%20(KOSABADI)%20160.htm	', bags1: '	',		
customer2: '	GARIMA FANCY (NIHARIKA)	', toys2: 'TOYS:-	', amount2: ' 	7	',  url2: '	/2084377289testbysam/KORBA/GARIMA FANCY (NIHARIKA).htm	', bags2: '	',		
								},		
{id: 1, name: '	KOTMIKALA', total: ' (	5308	)', 							
customer1: '	AJAY (KOTMIKALA)	', toys1: 'TOYS:-	', amount1: ' 	5308	',  url1: '	/2084377289testbysam/KOTMIKALA/AJAY (KOTMIKALA).htm	', bags1: '	',		
								},		
{id: 1, name: '	KOTA', total: ' (	9668	)', 							
customer1: '	AGGARWAL GENERAL (KOTA)	', toys1: 'TOYS:-	', amount1: ' 	2713	',  url1: '	/2084377289testbysam/KOTA/AGGARWAL GENERAL. (KOTA) 30.htm	', bags1: '	',		
customer2: '	MAHAMAYA FASHION HOUSE	', toys2: 'TOYS:-	', amount2: '	1527	',  url2: '	/2084377289testbysam/KOTA/MAHAMAYA FASHION HOUSE (KOTA) 18.htm	', bags2: '	',		
customer3: '	NISHA GENERAL (KOTA)	', toys3: 'TOYS:-	', amount3: '	1899	',  url3: '	/2084377289testbysam/KOTA/NISHA GENERAL (KOTA) 260.htm	', bags3: '	',		
customer4: '	NIKITA GENERAL (KOTA)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/KOTA/NIKITA (KOTA).htm	', bags4: '	',		
customer5: '	AKANKSHA GENERAL (KOTA)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/KOTA/AKANKSHA GENERAL(KOTA) 7.htm	', bags5: '	',		
customer6: '	SARITA GENERAL (KOTA)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/KOTA/SARITA GENERAL (KOTA).htm	', bags6: '	',		
customer7: '	SHAILESH GENERAL (KOTA)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/KOTA/SHAILESH GENERAL. (KOTA) 121.htm	', bags7: '	',		
customer8: '	ALL IN ONE (KOTA)	', toys8: 'TOYS:-	', amount8: '	3413	',  url8: '	/2084377289testbysam/KOTA/ALL IN ONE (KOTA).htm	', bags8: '	',		
customer9: '	KALPANA GENERAL BABAN (KOTA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/KOTA/KALPANA (KOTA) 85.htm	', bags9: '	',		
customer10: '	AKANKSHA GENERAL (BABLU) (KOTA)	', toys10: 'TOYS:-	', amount10: '	116	',  url10: '	/2084377289testbysam/KOTA/AKANKSHA GENERAL BABLO (KOTA) 122.htm	', bags10: '	',		
customer11: '	RAJA MOBILE (KOTA)	', toys11: 'TOYS:-	', amount11: '	0	',  url11: '	/2084377289testbysam/KOTA/RAJA MOBILE (KOTA).htm	', bags11: '	',		
customer12: '	GUPTA JI (KOTA)	', toys12: 'TOYS:-	', amount12: '	10	',  url12: '	/2084377289testbysam/KOTA/GUPTA JI (KOTA).htm	', bags12: '	',		
customer13: '	MULCHAND (KOTA)	', toys13: 'TOYS:-	', amount13: '	4	',  url13: '	/2084377289testbysam/KOTA/MULCHAND (KOTA).htm	', bags13: '	',		
customer14: '	OM PRAKASH  (KOTA)	', toys14: 'TOYS:-	', amount14: '	3	',  url14: '	/2084377289testbysam/KOTA/OM PRAKASH (KOTA).htm	', bags14: '	',		
								},		
{id: 1, name: '	KOTMISONAR ', total: '(	0	)', 							
customer1: '	JANVI GENERAL (KOTMISONAR)	', toys1: 'TOYS:-	', amount1: ' 		',  url1: '		', bags1: '	',		
								},		
{id: 1, name: '	KUNDA', total: ' (	0	)', 							
customer1: '	CHANDRAKAR GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KUNDA/CHANDRAKAR GENERAL (KUNDA) 102.htm	', bags1: '	',		
customer2: '	SHREE RADHA RANI (KUNDA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/KUNDA/SHREE RADHA RANI (KUNDA).htm	', bags2: '	',		
customer3: '	SHRIRAM GENERAL (KUNDA)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/KUNDA/SHRIRAM GENERAL. (KUNDA) 34.htm	', bags3: '	',		
customer4: '	KANHA  FANCY (KUNDA)	', toys4: 'TOYS:-	', amount4: '	34	',  url4: '	/2084377289testbysam/KUNDA/KANHA FANCY (KUNDA).htm	', bags4: '	',		
customer5: '	TD GENERAL	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/KUNDA/TD GENERAL (RUSSEY KUNDA).htm	', bags5: '	',		
customer6: '	LAXMI GENERAL (RABELI KUNDA)	', toys6: 'TOYS:-	', amount6: ' 	0	',  url6: '	/2084377289testbysam/KUNDA/LAXMI GENERAL (RABELI KUNDA).htm	', bags6: '	',		
customer7: '	MAA VAISHNAVI (RABELI/KUNDA)	', toys7: 'TOYS:-	', amount7: ' 	10	',  url7: '	/2084377289testbysam/KUNDA/MAA VAISHNAVI KUNDA RABELI.htm	', bags7: '	',		
customer8: '	SHRI SHRINGAR (FASTERPUR/KUNDA)	', toys8: 'TOYS:-	', amount8: '	282	',  url8: '	/2084377289testbysam/KUNDA/SHRI  SHRINGAR  SADAN  (FASTERPUR).htm	', bags8: '	',		
customer9: '	RAJESH GENERAL (KUNDA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/KUNDA/RAJESH GENERAL  (KUNDA).htm	', bags9: '	',		
customer10: '	SHIVAM (KUNDA)	', toys10: 'TOYS:-	', amount10: '	5704	',  url10: '	/2084377289testbysam/KUNDA/SHIVAM (KUNDA).htm	', bags10: '	',		
customer11: '	RAJAK COMPUTER (KUNDA)	', toys11: 'TOYS:-	', amount11: '	2	',  url11: '	/2084377289testbysam/KUNDA/RAJAK COMPUTER (KUNDA).htm	', bags11: '	',		
								},		
{id: 1, name: '	KUSMUNDA ', total: '(	17082	)', 							
customer1: '	AKHTAR GIFT (KUSMUNDA)	', toys1: 'TOYS:-	', amount1: ' 	17082	',  url1: '	/2084377289testbysam/KUSMUNDA/AKHTAR GIFT (KUSMUNDA).htm	', bags1: '	',		
								},		
{id: 1, name: '	LAWAN', total: ' (	0	)', 							
customer1: '	VINOD LAWAN	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/LAWAN/VINOD (LAWAN).htm	', bags1: '	',		
								},		
{id: 1, name: '	LORMI ', total: '(	37539	)', 							
customer1: '	NANDANI GENERAL (LORMI)	', toys1: 'TOYS:-	', amount1: ' 	2685	',  url1: '	/2084377289testbysam/LORMI/NANDINI GENERAL (LORMI) 172.htm	', bags1: '	',		
customer2: '	ASHISH GENERAL (LORMI)	', toys2: 'TOYS:-	', amount2: '	1	',  url2: '	/2084377289testbysam/LORMI/ASHISH GENERAL .(LORMI) (NEW 5).htm	', bags2: '	',		
customer3: '	KESARWANI (LORMI)	', toys3: 'TOYS:-	', amount3: '	34852	',  url3: '	/2084377289testbysam/LORMI/LIST OF 100 FRIENDS FOR MOVIE.htm	', bags3: '	',		
customer4: '	KANHA COLLECTION (LORMI)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/LORMI/KANHA COLLECTION .(LORMI).htm	', bags4: '	',		
customer5: '	KAVYA GENERAL (LORMI)	', toys5: 'TOYS:-	', amount5: ' 	0	',  url5: '	/2084377289testbysam/LORMI/KAVYA GENERAL (LORMI) (NEW 33).htm	', bags5: '	',		
customer6: '	MAMTA GENERAL (LORMI)	', toys6: 'TOYS:-	', amount6: ' 	1	',  url6: '	/2084377289testbysam/LORMI/MAMTA LORMI.htm	', bags6: '	',		
customer7: '	SALUJA BAG (LORMI)	', toys7: 'TOYS:-	', amount7: ' 	0	',  url7: '	/2084377289testbysam/LORMI/SALUJA BAG (LORMI).htm	', bags7: '	',		
customer8: '	PARIDHAN AKHRAR (LORMI)	', toys8: 'TOYS:-	', amount8: ' 	2500	',  url8: '	/2084377289testbysam/LORMI/PARIDHAN  LORMI.htm	', bags8: '	',		
customer9: '	DEEPAK KASHYAP (LORMI)	', toys9: 'TOYS:-	', amount9: '		',  url9: '	/2084377289testbysam/LORMI/DEEPAK KASHYAP (LORMI).htm	', bags9: '	',		
								},		
{id: 1, name: '	MALHAR', total: ' (	20034	)', 							
customer1: '	ANKIT FANCY (MALHAR)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/MALHAR/ANKITA (MALHAR) (NEW 7).htm	', bags1: '	',		
customer2: '	PURVI FANCY (MALHAR)	', toys2: 'TOYS:-	', amount2: '	14111	',  url2: '	/2084377289testbysam/MALHAR/PURVI FANCY (MALHAR) 290.htm	', bags2: '	',		
customer3: '	JAANVI GENERAL (MALHAR)	', toys3: 'TOYS:-	', amount3: '	5923	',  url3: '	/2084377289testbysam/MALHAR/JANVI GENERAL (MALHAR) 25.htm	', bags3: '	',		
customer4: '	JITENDRA (MALHAR)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/MALHAR/JITENDRA (MALHAR) 168.htm	', bags4: '	',		
								},		
{id: 1, name: '	MALKHARODA ', total: '(	4283	)', 							
customer1: '	PARI FANCY	', toys1: 'TOYS:-	', amount1: ' 	4283	',  url1: '	/2084377289testbysam/MALKHAROD/PARI FANCY (MALKHAROD) 184.htm	', bags1: '	',		
customer2: '	PRAKASH FANCY	', toys2: 'TOYS:-	', amount2: ' 	0	',  url2: '	/2084377289testbysam/MALKHAROD/PRAKASH FANCY (MALKHARODA).htm	', bags2: '	',		
customer3: '	SHARDA FANCY	', toys3: 'TOYS:-	', amount3: ' 	0	',  url3: '	/2084377289testbysam/MALKHAROD/SHARDA FANCY (MALKHARODA).htm	', bag3: '	',		
								},		
{id: 1, name: '	MANENDRAGARH', total: ' (	0	)', 							
customer1: '	AISHWARIYA GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/MANENDRAGARH/AISHWARIYA (MANENDRAGARH).htm	', bags1: '	',		
customer2: '	TULSI GENERAL (MANENDRAGARH)	', toys2: 'TOYS:-	', amount2: ' 	7	',  url2: '	/2084377289testbysam/MANENDRAGARH/TULSI GENERAL (MANENDRAGARH).htm	', bags2: '	',		
customer3: '	EKTA FANCY  (MANENDRAGARH)	', toys3: 'TOYS:-	', amount3: ' 	0	',  url3: '	/2084377289testbysam/MANENDRAGARH/EKTA GENERAL (MANENDRAGARH).htm	', bag3: '	',		
customer4: '	RIYA GENERAL (MANENDRAGARH)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/MANENDRAGARH/RIYA GENERAL (MANENDRAGARH).htm	', bags4: '	',		
customer5: '	RAM GENERAL (MANENDRAGARH)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/MANENDRAGARH/RAM GENERAL STORE (MANENDRAGARH).htm	', bags5: '	',		
								},		
{id: 1, name: '	MARO ', total: '(	4	)', 							
customer1: '	RAJA MARO (MARO)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/MARO/RAJA (MARO).htm	', bags1: '	',		
customer2: '	ANMOL  (MARO)	', toys2: 'TOYS:-	', amount2: '	4	',  url2: '	/2084377289testbysam/MARO/ANMOL (MARO).htm	', bags2: '	',		
								},		
{id: 1, name: '	MARWAHI', total: ' (	46979	)', 							
customer1: '	LAXMI GENERAL (MARWAHI)	', toys1: 'TOYS:-	', amount1: ' 	34831	',  url1: '	/2084377289testbysam/MARWAHI/LAXMI GENERAL .(MARWAHI) 240.htm	', bags1: '	',		
customer2: '	JAFFAR BOOT (MARWAHI)	', toys2: 'TOYS:-	', amount2: '	12148	',  url2: '	/2084377289testbysam/MARWAHI/JAFFAR BOOT .(MARWAHI) 5.htm	', bags2: '	',		
								},		
{id: 1, name: '	MASTURI ', total: '(	7460	)', 							
customer1: '	KISHORE RIKSHAW	', toys1: 'TOYS:-	', amount1: ' 	7460	',  url1: '	/2084377289testbysam/MASTURI/KISHORE RIKSHAW (MASTURI) 114.htm	', bags1: '	',		
customer2: '	LAXMI GENERAL	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/MASTURI/LAXMI GENERAL (MASTURI) 273.htm	', bags2: '	',		
customer3: '	KISHORE KIRANA (MASTURI)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/MASTURI/KISHORE KIRANA (MASTURI).htm	', bags3: '	',		
								},		
{id: 1, name: '	MOHGAON ', total: '(	14283	)', 							
customer1: '	MANISH GENERAL	', toys1: 'TOYS:-	', amount1: ' 	14283	',  url1: '	/2084377289testbysam/MOHAGAON/MANISH (MOHGAON) 156.htm	', bags1: '	',		
customer2: '	SHUBHAM GENERAL (MOHGAON)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/MOHAGAON/SHUBHAM GENERAL (MOHGAON).htm	', bags2: '	',		
								},		
{id: 1, name: '	MUNGELI', total: ' (	2852	)', 							
customer1: '	TOY ZONE 	', toys1: 'TOYS:-	', amount1: ' 	6	',  url1: '	/2084377289testbysam/MUNGELI/TOY%20ZONE%20(MUNGELI).htm	', bags1: '	',		
customer2: '	BABA GENERAL	', toys2: 'TOYS:-	', amount2: '	-1	',  url2: '	/2084377289testbysam/MUNGELI/BABA%20GENERAL%20(MUNGELI)%20%2023.htm	', bags2: '	',		
customer3: '	GURUNANAK GENERAL	', toys3: 'TOYS:-	', amount3: '	319	',  url3: '	/2084377289testbysam/MUNGELI/GURUNANAK%20GENERAL%20(MUNGELI)%2076.htm	', bags3: '	',		
customer4: '	 JEENAT BENGALS (MUNGELI)	', toys4: 'TOYS:-	', amount4: ' 	934	',  url4: '	/2084377289testbysam/MUNGELI/ZEENAT%20BENGALS%20(MUNGELI)%2045.htm	', bags4: '	',		
customer5: '	PAYAL BAG HOUSE	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/MUNGELI/PAYAL%20BAG%20(MUNGELI)%20171.htm	', bags5: '	',		
customer6: '	PRIYA LADIES	', toys6: 'TOYS:-	', amount6: '	1514	',  url6: '	/2084377289testbysam/MUNGELI/PRIYA%20LADIES%20(MUNGELI)%2099.htm	', bags6: '	',		
customer7: '	SANGAM FANCY	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/MUNGELI/SANGAM%20FANCY%20(MUNGELI)%20(NEW%20169).htm	', bags7: '	',		
customer8: '	OM GENERAL (MUNGELI)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/MUNGELI/OM%20GENERAL%20(MUNGELI)%2087.htm	', bags8: '	',		
customer9: '	K.V FASHION (MUNGELI)	', toys9: 'TOYS:-	', amount9: '	80	',  url9: '	/2084377289testbysam/MUNGELI/K.V FASHION (MUNGELI).htm	', bags9: '	',		
customer10: '	SAGAR BAG  RAVI (MUNGELI)	', toys10: 'TOYS:-	', amount10: '	0	',  url10: '	/2084377289testbysam/MUNGELI/SAGAR BAG RAVI (MUNGELI).htm	', bags10: '	',		
customer11: '	MAA PARMESHWARI (MUNGELI)	', toys11: 'TOYS:-	', amount11: '	9227	',  url11: '	/2084377289testbysam/MUNGELI/MAA PARMESHWARI (MUNGELI).htm	', bags11: '	',		
customer12: '	GULSHAN FANCY (MUNGELI)	', toys12: 'TOYS:-	', amount12: '	22	',  url12: '	/2084377289testbysam/MUNGELI/GULSHAN FANCY (MUNGELI).htm	', bags12: '	',		
customer13: '	MAHALAXMI FANCY (MUNGELI)	', toys13: 'TOYS:-	', amount13: '	16144	',  url13: '	/2084377289testbysam/MUNGELI/MAHALAXMI FANCY (MUNGELI).htm	', bags13: '	',		
								},		
{id: 1, name: '	NARAYANPUR', total: ' (	10182	)', 							
customer1: '	KHUSHI GENERAL	', toys1: 'TOYS:-	', amount1: ' 	10182	',  url1: '	/2084377289testbysam/NARAYANPUR/KHUSHI GENERAL (NARAYANPUR).htm	', bags1: '	',		
customer2: '	JEET KIRANA (NARAYANPUR)	', toys2: 'TOYS:-	', amount2: '	6120	',  url2: '	/2084377289testbysam/NARAYANPUR/JEET KIRANA (NARAYANPUR).htm	', bags2: '	',		
								},		
{id: 1, name: '	SILLI', total: ' (	4250	)', 							
customer1: '	OM LAXMI (SILLI)	', toys1: 'TOYS:-	', amount1: ' 	4250	',  url1: '	/2084377289testbysam/SILLI/OM LAXMI SILLI.htm	', bags1: '	',		
								},		
										
{id: 1, name: '	PACHPEDI ', total: '(	14824	)', 							
customer1: '	VINAY GENERAL (PACHPEDI)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/PACHPEDI/VINAY (PACHPEDI) 24.htm	', bags1: '	',		
customer2: '	SAHIL (PACHPEDI)	', toys2: 'TOYS:-	', amount2: '	14824	',  url2: '	/2084377289testbysam/PACHPEDI/SAHIL (PACHPEDI) 119.htm	', bags2: '	',		
customer3: '	JAISWAL ELECRICALS (PACHPEDI)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/PACHPEDI/JAISWAL ELECTRICAL (PACHPEDI).htm	', bags3: '	',		
								},		
{id: 1, name: '	PAHARIYA', total: ' (	15480	)', 							
customer1: '	MAA GENERAL (PAHARIYA)	', toys1: 'TOYS:-	', amount1: ' 	15480	',  url1: '	/PAHARIYA/MAA GENERAL (PAHARIYA).htm	', bags1: '	',		
								},		
{id: 1, name: '	PAMGARH ', total: '(	12	)', 							
customer1: '	BABA SCHOOL POINT (PAMGARH)	', toys1: 'TOYS:-	', amount1: ' 	3	',  url1: '	/2084377289testbysam/PAMGARH/BABA%20SCHOOL%20POINT%20(PAMGARH)%2090.htm	', bags1: '	',		
customer2: '	KABIR (PAMGARH)	', toys2: 'TOYS:-	', amount2: ' 	9	',  url2: '	/2084377289testbysam/PAMGARH/KABIR (PAMGARH).htm	', bags2: '	',		
customer3: '	DHANANJAY (PAMGARH)	', toys3: 'TOYS:-	', amount3: ' 	573	',  url3: '	/2084377289testbysam/PAMGARH/DHANANJAY (PAMGARH).htm	', bags3: '	',		
customer4: '	JAI SHREE (PAMGARH)	', toys4: 'TOYS:-	', amount4: ' 	4	',  url4: '	/2084377289testbysam/PAMGARH/JAI SHREE PAMGARH.htm	', bags4: '	',		
								},		
										
{id: 1, name: '	PALI', total: ' (	36673	)', 							
customer1: '	ARADHYA GENERAL (PALI)	', toys1: 'TOYS:-	', amount1: ' 	520	',  url1: '	/2084377289testbysam/PALI/ARADHYA GENERAL (PALI).htm	', bags1: '	',		
customer2: '	JAI  MAHAMAYA (PALI)	', toys2: 'TOYS:-	', amount2: '	5352	',  url2: '	/2084377289testbysam/PALI/JAI%20MAHAMAYA%20(PALI)%20267.htm	', bags2: '	',		
customer3: '	SHIV BEEJ	', toys3: 'TOYS:-	', amount3: '	4319	',  url3: '	/2084377289testbysam/PALI/SHIV%20BEEJ%20(PALI)%20255.htm	', bags3: '	',		
customer4: '	DEEPAK READYMATE (PALI)	', toys4: 'TOYS:-	', amount4: ' 	10	',  url4: '	/2084377289testbysam/PALI/DEEPAK%20READYMATE%20(PALI).htm	', bags4: '	',		
customer5: '	SHRIJAN	', toys5: 'TOYS:-	', amount5: '	2407	',  url5: '	/2084377289testbysam/PALI/SHRIJAN%20(PALI)%20116.htm	', bags5: '	',		
customer6: '	SUMIT COLLECTION PALI	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/PALI/SUMIT%20COLLECTION%20.(PALI)%20285.htm	', bags6: '	',		
customer7: '	UPHAR COLLECTION PALI	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/PALI/UPHAR%20COLLECTION%20(PALI)%20179.htm	', bags7: '	',		
customer8: '	SANJAY BOOK DEPO (PALI)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/PALI/SANJAY%20BOOK%20DEPO.%20(PALI)%2054.htm	', bags8: '	',		
customer9: '	SANJAY GIFT (PALI)	', toys9: 'TOYS:-	', amount9: '	24065	',  url9: '	/2084377289testbysam/PALI/SANJAY%20GIFT.%20(PALI)%20183.htm	', bags9: '	',		
customer10: '	KHUSHI GENERAL (PALI)	', toys10: 'TOYS:-	', amount10: '	0	',  url10: '	/2084377289testbysam/PALI/KHUSHI GENERAL (PALI).htm	', bags10: '	',		
								},		
{id: 1, name: '	PANDARIYA', total: ' (	16880	)', 							
customer1: '	FIZZA GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/PANDARIYA/FIZZA GENERAL (PANDARIYA)  32.htm	', bags1: '	',		
customer2: '	MARUTI GENERAL (PANDARIYA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/PANDARIYA/MARUTI GENERAL (PANDARIYA)  178.htm	', bags2: '	',		
customer3: '	MATESHWARI (PANDARIYA)	', toys3: 'TOYS:-	', amount3: '	20	',  url3: '	/2084377289testbysam/PANDARIYA/MATESHWARI .(PANDARIYA) 95.htm	', bags3: '	',		
customer4: '	OM SATIONARY (PANDARIYA)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/PANDARIYA/OM SATIONARY (PANDARIYA).htm	', bags4: '	',		
customer5: '	GURUANAK GENERAL (PANDARIYA)	', toys5: 'TOYS:-	', amount5: '	14	',  url5: '	/2084377289testbysam/PANDARIYA/GURUNANAK GENERAL (PANDARIYA) 300.htm	', bags5: '	',		
customer6: '	ABHAY GENERAL (PANDARIYA)	', toys6: 'TOYS:-	', amount6: '	6943	',  url6: '	/2084377289testbysam/PANDARIYA/ABHAY GENERAL (PANDARIYA) 242.htm	', bags6: '	',		
customer7: '	SOUGAAT GIFT (PANDARIYA)	', toys7: 'TOYS:-	', amount7: '	5341	',  url7: '	/2084377289testbysam/PANDARIYA/SOUGAAT GIFT (PANDARIYA).htm	', bags7: '	',		
customer8: '	PRATHNA GENERAL (PANDARIYA)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/PANDARIYA/PRATHNA GENERAL (PANDARIYA).htm	', bags8: '	',		
customer9: '	SHOE POINT (PANDARIYA)	', toys9: 'TOYS:-	', amount9: '	4562	',  url9: '	/2084377289testbysam/PANDARIYA/SHOE POINT (PANDARIYA).htm	', bags9: '	',		
customer10: '	RAKHIKA GENERAL (PANDARIYA)	', toys10: 'TOYS:-	', amount10: '	0	',  url10: '	/2084377289testbysam/PANDARIYA/RADHIKA GENERAL (PANDARIYA).htm	', bags10: '	',		
								},		
{id: 1, name: '	PANDATARAI', total: ' (	21002	)', 							
customer1: '	ARJUN GENERAL (PANDATARAI)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/PANDATARAI/ARJUN GENERAL (PANDATARAI) 181.htm	', bags1: '	',		
customer2: '	DURGA GENERAL (PANDATARAI)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/PANDATARAI/DURGA GENERAL (PANDATARAI) 274.htm	', bags2: '	',		
customer3: '	SATGURU	', toys3: 'TOYS:-	', amount3: '	113	',  url3: '	/2084377289testbysam/PANDATARAI/SATGURU GENERAL (PANDATARAI)  162.htm	', bags3: '	',		
customer4: '	VIDYA SUHAG	', toys4: 'TOYS:-	', amount4: ' 	3	',  url4: '	/2084377289testbysam/PANDATARAI/VIDYA SUHAG (PANDATARAI) 147.htm	', bags4: '	',		
customer5: '	PREETI GENERAL (PANDATARAI)	', toys5: 'TOYS:-	', amount5: '	14999	',  url5: '	/2084377289testbysam/PANDATARAI/PREETI GENERAL. (PANDATARAI) 112.htm	', bags5: '	',		
customer6: '	GANESH (PANDATARAI)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/PANDATARAI/GANESH GENERAL (PANDATARAI)  279.htm	', bags6: '	',		
customer7: '	PRACHI GENERAL (PANDATARAI)	', toys7: 'TOYS:-	', amount7: '	5887	',  url7: '	/2084377289testbysam/PANDATARAI/PRACHI GENERAL (PANDATARAI).htm	', bags7: '	',		
customer8: '	KABIR GENERAL (PANDATARAI)	', toys8: 'TOYS:-	', amount8: '		',  url8: '		', bags8: '	',		
								},		
										
{id: 1, name: '	PANTORA ', total: '(	0	)', 							
customer1: '	KRISHNA  KAPDA (PANTORA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	\2084377289testbysam\PANTORA\DETAILS.htm	', bags1: '	',		
customer2: '	ANIL SHRINGAR  (PANTORA)	', toys2: 'TOYS:-	', amount2: ' 	4501	',  url2: '	/2084377289testbysam/PANTORA/ANIL SHRINGAR (PANTORA).htm	', bags2: '	',		
								},		
										
{id: 1, name: '	PATHARIYA ', total: '(	23496	)', 							
customer1: '	AKASH BOOK DEPO (PATHARIYA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/PATHARIYA/AKASH%20BOOK%20DEPO%20(PATHARIYA)%20116.htm	', bags1: '	',		
customer2: '	HARNARAYAN	', toys2: 'TOYS:-	', amount2: '	3330	',  url2: '	/2084377289testbysam/PATHARIYA/HARNARAYAN%20(PATHARIYA)%20%20199.htm	', bags2: '	',		
customer3: '	MUKESH GENERAL 	', toys3: 'TOYS:-	', amount3: '	1	',  url3: '	/2084377289testbysam/PATHARIYA/MUKESH%20GENERAL%20(PATHARIYA)%20%20163.htm	', bags3: '	',		
customer4: '	OM SAI KARAN (PATHARIYA)	', toys4: 'TOYS:-	', amount4: ' 	15162	',  url4: '	/2084377289testbysam/PATHARIYA/OM%20SAI%20(KARAN)%20.(PATHARIYA)%20%202.htm	', bags4: '	',		
customer5: '	SHIV GENERAL (PATHARIYA)	', toys5: 'TOYS:-	', amount5: '	1	',  url5: '	/2084377289testbysam/PATHARIYA/SHIV GENERAL .(PATHARIYA) 118.htm	', bags5: '	',		
customer6: '	SANTOSH GENERAL (PATHARIYA)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/PATHARIYA/SANTOSH%20PATHKAR.%20(PATHARIYA)%20192.htm	', bags6: '	',		
customer7: '	PREETAM GENERAL (PATHARIYA)	', toys7: 'TOYS:-	', amount7: '	5000	',  url7: '	/2084377289testbysam/PATHARIYA/PREETAM%20(PATHARIYA)%20148.htm	', bags7: '	',		
customer8: '	OM SUHAG (PATHARIYA)	', toys8: 'TOYS:-	', amount8: '	2	',  url8: '	/2084377289testbysam/PATHARIYA/OM%20SUHAG%20(PATHARIYA)%20%20100.htm	', bags8: '	',		
customer9: '	LAXMI GENERAL (PATHARIYA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/PATHARIYA/LAXMI%20GENERAL%20(PATHARIYA).htm	', bags9: '	',		
customer10: '	SONI HARDWARE (PATHARIYA)	', toys10: 'TOYS:-	', amount10: '	1	',  url10: '	/2084377289testbysam/PATHARIYA/SONI HARDWARE (PATHARIYA).htm	', bags10: '	',		
customer11: '	PANDEY KIRANA (PATHARIYA)	', toys11: 'TOYS:-	', amount11: '	0	',  url11: '	/2084377289testbysam/PATHARIYA/PANDAY  KIRANA (PATHARIYA).htm	', bags11: '	',		
								},		
{id: 1, name: '	PENDRA', total: ' (	225687	)', 							
customer1: '	SURYA GARMENTS (PENDRA)	', toys1: 'TOYS:-	', amount1: ' 	-1	',  url1: '	/2084377289testbysam/PENDRA/SURYA GARMENTS (PENDRA).htm	', bags1: '	',		
customer2: '	ARADHYA TRADERS	', toys2: 'TOYS:-	', amount2: '	4300	',  url2: '	/2084377289testbysam/PENDRA/ARADHYA GENERAL (PENDRA) 124.htm	', bags2: '	',		
customer3: '	DECO POINT 	', toys3: 'TOYS:-	', amount3: '	-205	',  url3: '	/2084377289testbysam/PENDRA/DECO POINT (PENDRA) 33.htm	', bags3: '	',		
customer4: '	PANDEY GENERAL	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/PENDRA/PANDEY GENERAL. (PENDRA)  140.htm	', bags4: '	',		
customer5: '	R.T WOMENS	', toys5: 'TOYS:-	', amount5: '	6524	',  url5: '	/2084377289testbysam/PENDRA/R.T PENDRA (PENDRA) 88.htm	', bags5: '	',		
customer6: '	SADHANA PHOTO STUDIO	', toys6: 'TOYS:-	', amount6: '	11673	',  url6: '	/2084377289testbysam/PENDRA/SADHNA PHOTO STUDIO (PENDRA) 244.htm	', bags6: '	',		
customer7: '	TIME CORNER (PENDRA)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/PENDRA/TIME CORNER. (PENDRA).htm	', bags7: '	',		
customer8: '	SAI MAHASALE (PENDRA)	', toys8: 'TOYS:-	', amount8: '	1050	',  url8: '	/2084377289testbysam/PENDRA/SAI MAHASALE (PENDRA).htm	', bags8: '	',		
customer9: '	SAI SAKTI (PENDRA)	', toys9: 'TOYS:-	', amount9: '	5835	',  url9: '	/2084377289testbysam/PENDRA/SAI SAKTI. (PENDRA) 186.htm	', bags9: '	',		
customer10: '	POOJA JWELLERY (PENDRA)	', toys10: 'TOYS:-	', amount10: '	0	',  url10: '	/2084377289testbysam/PENDRA/POOJA JWELLERY. (PENDRA)  190.htm	', bags10: '	',		
customer11: '	MAA SHARDA GIFT DEEPANSHU (PENDRA)	', toys11: 'TOYS:-	', amount11: '	0	',  url11: '	/2084377289testbysam/PENDRA/MAA SHARDA GIFT DEEPANSHU. (PENDRA).htm	', bags11: '	',		
customer12: '	UPHAR GALLERY (PENDRA)	', toys12: 'TOYS:-	', amount12: '	28	',  url12: '	/2084377289testbysam/PENDRA/UPHAR GALLERY. (PENDRA) 198.htm	', bags12: '	',		
customer13: '	GUPTA ENTERPRISES (PENDRA)	', toys13: 'TOYS:-	', amount13: '	9441	',  url13: '	/2084377289testbysam/PENDRA/GUPTA ENTERPRISES. (PENDRA) 200.htm	', bags13: '	',		
customer14: '	SANJAY GENERAL (PENDRA)	', toys14: 'TOYS:-	', amount14: '	143863	',  url14: '	/2084377289testbysam/PENDRA/SANJAY  PENDRA.htm	', bags14: '	',		
customer15: '	GANESH GENERAL (PENDRA)	', toys15: 'TOYS:-	', amount15: '	2	',  url15: '	/2084377289testbysam/PENDRA/GANESH GENERAL (PENDRA).htm	', bags15: '	',		
customer16: '	SONA GARMENTS (PENDRA)	', toys16: 'TOYS:-	', amount16: '	0	',  url16: '	/2084377289testbysam/PENDRA/SONA GARMENTS (PENDRA).htm	', bags16: '	',		
customer17: '	DIPTI GENERAL STORE (PENDRA)	', toys17: 'TOYS:-	', amount17: '	0	',  url17: '	/2084377289testbysam/DIPTI GENERAL STORE (PENDRA).htm	', bags17: '	',		
customer18: '	JAI DURGA GARMENTS (PENDRA	', toys18: 'TOYS:-	', amount18: '	220	',  url17: '	/2084377289testbysam/PENDRA/JAI DURGA GARMENTS (PENDRA).htm	', bags17: '	',		
customer19: '	VINAYAK MENSWEAR (PENDRA)	', toys19: 'TOYS:-	', amount19: '	13703	',  url19: '	/2084377289testbysam/PENDRA/VINAYAK MENS (PENDRA).htm	', bags19: '	',		
customer20: '	MATA RANI (PENDRA)	', toys20: 'TOYS:-	', amount20: '	15992	',  url20: '	/2084377289testbysam/PENDRA/MATA RANI SUHAG (PENDRA).htm	', bags20: '	',		
customer21: '	SHYAM JI (PENDRA)	', toys21: 'TOYS:-	', amount21: '	13262	',  url21: '	/2084377289testbysam/PENDRA/SHYAM JI (PENDRA).htm	', bags21: '	',		
customer22: '	DEEKSHA SUPER BAZAR (PENDRA)	', toys22: 'TOYS:-	', amount22: '	16516	',  url22: '	/2084377289testbysam/PENDRA/DEEKSHA (PENDRA).htm	', bags22: '	',		
customer23: '	BALCHAND JAIN (KHODRI)	', toys23: 'TOYS:-	', amount23: '	1504	',  url23: '	/2084377289testbysam/PENDRA/BALCHAND JAIN (KHODRI PENDRA).htm	', bags23: '	',		
customer24: '	OM TRADERS (PENDRA)	', toys24: 'TOYS:-	', amount24: '	6633	',  url24: '	/2084377289testbysam/PENDRA/OM TRADERS (PENDRA).htm	', bags24: '	',		
customer25: '	SWARSATI PUSTAKALAY (PENDRA)	', toys25: 'TOYS:-	', amount25: '	-1244	',  url25: '	/2084377289testbysam/PENDRA/SWARSATI PUSTAKALAY (PENDRA).htm	', bags25: '	',		
customer26: '	GAYTRI STORE (PENDRA)	', toys26: 'TOYS:-	', amount26: '	3360	',  url26: '	/2084377289testbysam/PENDRA/GAYATRI STORE (PENDRA).htm	', bags26: '	',		
								},		
{id: 1, name: '	PODI ', total: '(	-1	)', 							
customer1: '	SHIV SAHU (PODI)	', toys1: 'TOYS:-	', amount1: ' 	-1	',  url1: '	/2084377289testbysam/PODI/SHIV SAHU (PODI)  127.htm	', bags1: '	',		
								},		
{id: 1, name: '	RAHOD', total: ' (	-1	)', 							
customer1: '	CHAAVI GENERAL 	', toys1: 'TOYS:-	', amount1: ' 	-1	',  url1: '	/2084377289testbysam/RAHOD/CHAVI (RAHOD) 12.htm	', bags1: '	',		
								},		
										
{id: 1, name: '	RAIGARH', total: ' (	0	)', 							
customer1: '	THE  BIG  BASKET (RAIGARH)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/RAIGARH/THE  BIG  BASKET (RAIGARH).htm	', bags1: '	',		
customer2: '	RAVISH STATIONERY (RAIGARH)	', toys2: 'TOYS:-	', amount2: '	3118	',  url2: '	/2084377289testbysam/RAIGARH/RAVISH STATIONERY (RAIGARH).htm	', bags2: '	',		
customer3: '	ROOPSI (RAIGARH)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/RAIGARH/ROOPSI (RAIGARH).htm	', bags3: '	',		
								},		
										
{id: 1, name: '	RATANPUR ', total: '(	359	)', 							
customer1: '	 GOLU RATANPUR	', toys1: 'TOYS:-	', amount1: ' 	360	',  url1: '	/2084377289testbysam/RATANPUR/GOLU (RATANPUR)  196.htm	', bags1: '	',		
customer2: '	RAJA YADAV	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/RATANPUR/RAJA YADAV (RATANPUR) 146.htm	', bags2: '	',		
customer3: '	USHA CHAUHAN (RATANPUR)	', toys3: 'TOYS:-	', amount3: '	-1	',  url3: '	/2084377289testbysam/RATANPUR/USHA CHAUHAN (RATANPUR).htm	', bags3: '	',		
customer4: '	RIYA GENERAL	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/RATANPUR/RIYA. (RATANPUR)  253.htm	', bags4: '	',		
								},		
{id: 1, name: '	SAKRI', total: '  (	193	)', 							
customer1: '	GUPTA GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/SAKRI/GUPTA (SAKRI)  39.htm	', bags1: '	',		
customer2: '	KAUSHIK GENERAL (SAKRI)	', toys2: 'TOYS:-	', amount2: '	189	',  url2: '	/2084377289testbysam/SAKRI/KAUSHIK GENERAL. (SAKRI) 261.htm	', bags2: '	',		
customer3: '	SHRI RAM (SAKRI)	', toys3: 'TOYS:-	', amount3: '	4	',  url3: '	/2084377289testbysam/SAKRI/SHRIRAM GENERAL (SAKRI)  20.htm	', bags3: '	',		
								},		
{id: 1, name: '	SAKTI ', total: '(	734	)', 							
customer1: '	PAPPI GUPTA (SAKTI)	', toys1: 'TOYS:-	', amount1: ' 	4	',  url1: '	/2084377289testbysam/SAKTI/PAPPI  GUPTA  (SAKTI).htm	', bags1: '	',		
customer2: '	DIWA FANCY (SAKTI)	', toys2: 'TOYS:-	', amount2: '	-1	',  url2: '	/2084377289testbysam/SAKTI/DIVA FANCY (SAKTI)  14.htm	', bags2: '	',		
customer3: '	VIKAS (SAKTI)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/SAKTI/VIKAS (SAKTI) 296.htm	', bags3: '	',		
customer4: '	ANMOL GIFT (SAKTI)	', toys4: 'TOYS:-	', amount4: '	0	',  url4: '	/2084377289testbysam/SAKTI/ANMOL (SAKTI)  16.htm	', bags4: '	',		
customer5: '	DULHAN SAARE (SAKTI)  	', toys5: 'TOYS:-	', amount5: '	731	',  url5: '	/2084377289testbysam/SAKTI/DULHA SAARE (SAKTI).htm	', bags5: '	',		
customer6: '	GIFT PALACE (SAKTI)	', toys6: 'TOYS:-	', amount6: '	1	',  url6: '	/2084377289testbysam/SAKTI/GIFT PALACE (SAKTI).htm	', bags6: '	',		
customer7: '	KRISHNA POOJA BHANDAR (SAKTI)	', toys7: 'TOYS:-	', amount7: '	1222	',  url7: '	/2084377289testbysam/SAKTI/KRISHNA POOJA BHANDAR (SAKTI).htm	', bags7: '	',		
customer8: '	BHARAT CLOTH STORE (SAKTI)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/SAKTI/BHARAT CLOTH (SAKTI).htm	', bags8: '	',		
customer9: '	RADHIKA FASHION (SAKTI)	', toys9: 'TOYS:-	', amount9: '	315	',  url9: '	/2084377289testbysam/SAKTI/RADHIKA FASHION (SAKTI).htm	', bags9: '	',		
								},		
{id: 1, name: '	SARAGAON ', total: '(	16598	)', 							
customer1: '	GOVIND KESARWANI	', toys1: 'TOYS:-	', amount1: ' 	16598	',  url1: '	/2084377289testbysam/SARAGAON/GOVIND KESARWANI (SARAGAON) 138.htm	', bags1: '	',		
								},		
{id: 1, name: '	SARAGAON ', total: '(	0	)', 							
customer1: '	DEV (SALKHAN)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/SALKHAN/DEV SALKHAN.htm	', bags1: '	',		
								},		
{id: 1, name: '	SARANGARH ', total: '(	35613	)', 							
customer1: '	VIKAS  TEXTILE (SARANGARH)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/SARANGARH/VIKAS TEXTILE (SARANGARH).htm	', bags1: '	',		
customer2: '	ASHOK BOOK DEPO	', toys2: 'TOYS:-	', amount2: '	7603	',  url2: '	/2084377289testbysam/SARANGARH/ASHOK%20BOOK%20DEPO%20(SARANGARH)%209.htm	', bags2: '	',		
customer3: '	KAMAL GENERAL (SARANGARH)	', toys3: 'TOYS:-	', amount3: '	-1517	',  url3: '	/2084377289testbysam/SARANGARH/KAMAL (SARANGARH) 22_files.htm	', bags3: '	',		
customer4: '	SANJAY STORE (SARANGARH)	', toys4: 'TOYS:-	', amount4: '	71	',  url4: '	/2084377289testbysam/SARANGARH/SANJAY STORE (SARANGARH)  44.htm	', bags4: '	',		
customer5: '	PRIYANKA GENERAL (SARANGARH)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/SARANGARH/PRIYANKA (SARANGARH) 212.htm	', bags5: '	',		
customer6: '	SANTOSH VASTRALAY (SARANGARH)	', toys6: 'TOYS:-	', amount6: '	90	',  url6: '	/2084377289testbysam/SARANGARH/SANTOSH VASTRALAY (SARANGARH) 220.htm	', bags6: '	',		
customer7: '	NEW CLOTH STORE (SARANGARH)	', toys7: 'TOYS:-	', amount7: '	3560	',  url7: '	/2084377289testbysam/SARANGARH/NEW CLOTH (SARANGARH)  256.htm	', bags7: '	',		
customer8: '	MAHALAXMI (SARANGARH)	', toys8: 'TOYS:-	', amount8: '	25806	',  url8: '	/2084377289testbysam/SARANGARH/MAHALAXMI  GENERAL (SARANGARH).htm	', bags8: '	',		
customer9: '	MUKESH VASTRALAY (SARANGARH)	', toys9: 'TOYS:-	', amount9: '	8500	',  url9: '	/2084377289testbysam/SARANGARH/MUKESH VASTRALAY (SARANGARH).htm	', bags9: '	',		
customer10: '	NIKHIL SUHAG (SARANGARH)	', toys10: 'TOYS:-	', amount10: '	0	',  url10: '	/2084377289testbysam/SARANGARH/NIKHIL FANCY (SARANGARH).htm	', bags10: '	',		
customer11: '	SONAL SAARE (SARANGARH)	', toys11: 'TOYS:-	', amount11: '	5943	',  url11: '	/2084377289testbysam/SARANGARH/SONAL SAARE (SARANGARH).htm	', bags11: '	',		
								},		
{id: 1, name: '	SARGAON', total: ' (	27449	)', 							
customer1: '	SUNITA GENERAL	', toys1: 'TOYS:-	', amount1: ' 	27450	',  url1: '	/2084377289testbysam/SARGAON/SUNITA%20(SARGAON)%20%2047.htm	', bags1: '	',		
customer2: '	RAJU FANCY STORE (SARGAON)	', toys2: 'TOYS:-	', amount2: '	-1	',  url2: '	/2084377289testbysam/SARGAON/RAJU%20(SARGAON)%2042.htm	', bags2: '	',		
customer3: '	CHAYA GENERAL (SARGAON)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/SARGAON/CHAYA (SARGAON).htm	', bags3: '	',		
customer4: '	SHIVAM (SARGAON)	', toys4: 'TOYS:-	', amount4: '	5550	',  url4: '	/2084377289testbysam/SARGAON/SHIVAM SARGAON.htm	', bags4: '	',		
customer5: '	MANISH CYCLE (SARGAON)	', toys5: 'TOYS:-	', amount5: '	-44	',  url5: '	/2084377289testbysam/SARGAON/MANISH CYCLE (SARGAON).htm	', bags5: '	',		
								},		
{id: 1, name: '	SARSIWA ', total: '(	-5175	)', 							
customer1: '	HEMA FANCY	', toys1: 'TOYS:-	', amount1: ' 	472	',  url1: '	/2084377289testbysam/SARSIWA/HEMA FANCY (SARSIWA) 191.htm	', bags1: '	',		
customer2: '	OM SAI SARSIWA	', toys2: 'TOYS:-	', amount2: '	-5647	',  url2: '	/2084377289testbysam/SARSIWA/OM SAI (SARSIWA) 6.htm	', bags2: '	',		
customer3: '	SHRIYA SHRINGAR (SARSIWA)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/SARSIWA/SHRIYA SHRINGAR (SARSIWA).htm	', bags3: '	',		
customer4: '	CHANDRAHASHNI (SARSIWA)	', toys4: 'TOYS:-	', amount4: '	0	',  url4: '	/2084377289testbysam/SARSIWA/CHANDRAHASNI GENERAL (SARSIWA).htm	', bags4: '	',		
customer5: '	SWASTIK GENRAL (SARSIWA)	', toys5: 'TOYS:-	', amount5: '	297	',  url5: '	/2084377289testbysam/SARSIWA/SWASTIK%20GENERAL%20(SARSIWA).htm	', bags5: '	',		
customer6: '	LAXMI FANCY (SARSIWA)	', toys6: 'TOYS:-	', amount6: '	13173	',  url6: '	/2084377289testbysam/SARSIWA/LAXMI FANCY (SARSIWA).htm	', bags6: '	',		
customer7: '	DRISHTI FANCY (SARSIWA)	', toys7: 'TOYS:-	', amount7: '	3620	',  url7: '	/2084377289testbysam/SARSIWA/DRISHTI FANCY (SARSIWA).htm	', bags7: '	',		
customer8: '	DURGA VASRTRALAY (SARSIWA)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/SARSIWA/DURGA VASTRALAY (SARSIWA).htm	', bags8: '	',		
								},		
										
{id: 1, name: '	SENDRI', total: ' (	0	)', 							
customer1: '	SHIVAM GENERAL	', toys1: 'TOYS:-	', amount1: ' 	 	',  url1: '	/2084377289testbysam/SENDRI/SHIVAM (SENDRI) 131.htm	', bags1: '	',		
								},		
{id: 1, name: '	SHIVNI ', total: '(	0	)', 							
customer1: '	KHAGESHWAR GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/SHIVNI/KHAGESHWAR (SHIVNI) 269.htm	', bags1: '	',		
customer2: '	JAI AMBEL (SHIVNI)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/SHIVNI/JAI AMBE (SHIVNI) 208.htm	', bags2: '	',		
customer3: '	NEW MAHAMAYA GENERAL (SHIVNI)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/SHIVNI/NEW MAHAMAYA GENERAL 2 (SHIVNI) (NEW 9).htm	', bags3: '	',		
								},		
{id: 1, name: '	SHIVRINARAYN', total: ' (	9557	)', 							
customer1: '	MAHI SHRINGAR (SHIVRIN)	', toys1: 'TOYS:-	', amount1: ' 	8381	',  url1: '	/2084377289testbysam/SHIVRINARAYAN/MAHI SHRINGAR (SHIVRINARAYN).htm	', bags1: '	',		
customer2: '	RUPESH  GENERAL	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/SHIVRINARAYAN/RUPESH (SHIVRINARAYAN)  64.htm	', bags2: '	',		
customer3: '	ATUL GENERAL	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/SHIVRINARAYATUL (SHIVRINARAYAN) 254.htm	', bags3: '	',		
customer4: '	NARAYANI COLLECTION (SHIVRIN)	', toys4: 'TOYS:-	', amount4: '	146	',  url4: '	/2084377289testbysam/SHIVRINARAYAN/NARAYANI (SHIVRINARAYAN) 136.htm	', bags4: '	',		
customer5: '	LAXMI VASTRALAY (SHIVRI)	', toys5: 'TOYS:-	', amount5: '	1030	',  url5: '	/2084377289testbysam/SHIVRINARAYAN/LAXMI VASTRALAY (SHIVRINARAYAN).htm	', bags5: '	',		
customer6: '	VIKAS GENERAL (SHIVRI)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/SHIVRINARAYAN/VIKAS GENERAL (SHIVRINARAYAN).htm	', bags6: '	',		
customer7: '	BABA COLLECTION (SHIVRIN)	', toys7: 'TOYS:-	', amount7: '	34703	',  url7: '	/2084377289testbysam/SHIVRINARAYAN/SANGAM FANCY (MUNGELI) - 169.htm	', bags7: '	',		
customer8: '	VIJENDRA BOOK DEOP (SHIVRIN)	', toys8: 'TOYS:-	', amount8: '	428	',  url8: '	/2084377289testbysam/SHIVRINARAYAN/VIJENDRA BOOK DEPO (SHIVRINARAYN).htm	', bags8: '	',		
								},		
										
{id: 1, name: '	SILDHA', total: ' (	0	)', 							
customer1: '	SATYA NARAYAN (SILDHA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/SILDHA/SATYANARAYN (SILDHA).htm		',		
								},		
										
										
{id: 1, name: '	SIPAT', total: ' (	2731	)', 							
customer1: '	DEEPAK GENERAL (SIPAT)	', toys1: 'TOYS:-	', amount1: ' 	2721	',  url1: '	/2084377289testbysam/SIPAT/DEEPAK%20(SIPAT)%2041.htm	', bags1: '	',		
customer2: '	SITARAM  (SIPAT)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/SIPAT/SITARAM%20(SIPAT)%20%2094.htm	', bags2: '	',		
customer3: '	SWARMANGLA GIFT HOUSE (SIPAT)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/SIPAT/SWARMANGLA%20(SIPAT).htm	', bags3: '	',		
customer4: '	SWARMANGLA PLASTIC (SIPAT)	', toys4: 'TOYS:-	', amount4: '	10	',  url4: '	/2084377289testbysam/SIPAT/SWARMANGLA%20PLASTIC%20(SIPAT)%20270.htm	', bags4: '	',		
customer5: '	VIKAS SIPAT	', toys5: 'TOYS:-	', amount5: '	2	',  url5: '	/2084377289testbysam/SIPAT/VIKAS  (SIPAT).htm	', bags5: '	',		
								},		
{id: 1, name: '	SIRGITI ', total: '(	-7	)', 							
customer1: '	BABY SUHAG	', toys1: 'TOYS:-	', amount1: ' 	-8	',  url1: '	/2084377289testbysam/SIRGITI/BABY SUHAG (SIRGITTI) 21.htm	', bags1: '	',		
customer2: '	KIRAN SIRGITI	', toys2: 'TOYS:-	', amount2: '		',  url2: '	<b><br>TOYS -	', bags2: '	',		
customer3: '	MAA KALI MUSIC (SIRGITI)	', toys3: 'TOYS:-	', amount3: '	1	',  url3: '	/2084377289testbysam/SIRGITI/MAA KALI MUSIC CENTER (SIRGITTI) 210.htm	', bags3: '	',		
								},		
{id: 1, name: '	SURAJPUR', total: ' (	0	)', 							
customer1: '	SHYAM JI (SURAJPUR)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/SURAJPUR/SHYAM JI GIFT (SURAJPUR).htm	', bags1: '	',		
								},		
{id: 1, name: '	TAKHATPUR', total: ' (	17755	)', 							
customer1: '	KISHAN (BELPAN)	', toys1: 'TOYS:-	', amount1: ' 	10445	',  url1: '	/2084377289testbysam/TAKHATPUR/KISHAN%20(BELPAN).htm	', bags1: '	',		
customer2: '	MAYUR GENERAL	', toys2: 'TOYS:-	', amount2: '	4796	',  url2: '	/2084377289testbysam/TAKHATPUR/MAYUR%20GENERAL%20(TAKHATPUR)%20276.htm	', bags2: '	',		
customer3: '	MARUTI GENERAL (TAKHATPUR)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/TAKHATPUR/MARUTI%20(TAKAHTPUR)%2067.htm	', bags3: '	',		
customer4: '	VIJAY STORE (TAKHATPUR)	', toys4: 'TOYS:-	', amount4: '	2507	',  url4: '	/2084377289testbysam/TAKHATPUR/VIJAY%20STORE%20(TAKHATPUR)%20-%20299.htm	', bags4: '	',		
customer5: '	NAWAZ GENERAL	', toys5: 'TOYS:-	', amount5: '	5	',  url5: '	/2084377289testbysam/TAKHATPUR/NAWAZ%20%20BHAI%20(TAKAHTPUR)%2075.htm	', bags5: '	',		
customer6: '	RAJESH GENERAL	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/TAKHATPUR/RAJESH%20GENERAL%20(TAKAHTPUR)%20259.htm	', bags6: '	',		
customer7: '	BHARAT BAG HOUSE	', toys7: 'TOYS:-	', amount7: '	2	',  url7: '	/2084377289testbysam/TAKHATPUR/BHARAT%20BAG%20HOUSE%20(TAKHATPUR)%20194.htm	', bags7: '	',		
customer8: '	SHREE SHRINGARIKA (TAKHATPUR)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/TAKHATPUR/TESTING NEW DETAILS.htm	', bags8: '	',		
customer9: '	ASHISH FANCY  (TAKHATPUR)	', toys9: 'TOYS:-	', amount9: '	2	',  url9: '	/2084377289testbysam/TAKHATPUR/ASHISH  FANCY (TAKHATPUR).htm	', bags9: '	',		
customer10: '	OM GENERAL (TAKHATPUR)	', toys10: 'TOYS:-	', amount10: '	0	',  url10: '	/2084377289testbysam/TAKHATPUR/OM GENERAL STORE (TAKHATPUR).htm	', bags10: '	',		
customer11: '	GHANSHYAM MAYUR (TAKHATPUR)	', toys11: 'TOYS:-	', amount11: '	-6436	',  url11: '	/2084377289testbysam/TAKHATPUR/GHANSHYAM%20MAYUR%20GENERAL%20TAKHATPUR.htm	', bags11: '	',		
customer12: '	JAI AMBE (TAKHATPUR)	', toys12: 'TOYS:-	', amount12: '	0	',  url12: '	/2084377289testbysam/TAKHATPUR/JAI MAA AMBE (TAKHATPUR).htm	', bags12: '	',		
								},		
{id: 1, name: '	TAPKARA', total: ' (	0	)', 							
customer1: '	 POOJA TAPKARA	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/TAPKARA/POOJA (TAPKARA) 287.htm	', bags1: '	',		
								},		
{id: 1, name: '	UDAIPUR ', total: '(	3	)', 							
customer1: '	PRIYA UDAIPUR	', toys1: 'TOYS:-	', amount1: ' 	3	',  url1: '	/2084377289testbysam/UDAIPUR/PRIYA  (UDAIPUR) 91.htm	', bags1: '	',		
								},		
{id: 1, name: '	URGA', total: ' (	0	)', 							
customer1: '	SHUSHMITA URGA	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/URGA/SUSHMITA%20(URGA)%20125.htm	', bags1: '	',		
								},		
{id: 1, name: '	USLAPUR', total: ' (	0	)', 							
customer1: '	SAI PROVISION	', toys1: 'TOYS:-	', amount1: ' 		',  url1: '		', bags1: '	',		
								},		
{id: 1, name: '	VENKATNAGAR', total: ' (	16	)', 							
customer1: '	SANTOSH GENERAL	', toys1: 'TOYS:-	', amount1: ' 	16	',  url1: '	/2084377289testbysam/VENKATNAGAR/SANTOSH (VENKATNAGAR) 113.htm	', bags1: '	',		
										
								},		
										
										
										
  ];										
  										
  return factory;										
}]);										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
										
