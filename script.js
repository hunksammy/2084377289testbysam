var element = document.getElementById("id01");element.innerHTML = "LEFT - 	5.57%	&nbsp;&nbsp;		&nbsp;&nbsp;UPDATE - 11/08/2021  	&nbsp;&nbsp;BAL -	1501092	";					
												
												
												
												
												
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
												
{id: 1, name: '	AKALTARA', total: '  (	43838	)', 									
customer1: '	VINOD GENERAL (AKALTARA) 	', toys1: 'TOYS:-	', amount1: '	0	',  url1: '	/2084377289testbysam/AKALTARA/VINOD GENERAL (AKALTARA).htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	CHANDAN GENERAL (AKALTARA)	', toys2: 'TOYS:-	', amount2: '	11614	',  url2: '	/2084377289testbysam/AKALTARA/CHANDAN%20GENERAL%20(AKALTARA)%2029.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	DEEPAK GENERAL (AKALTARA)	', toys3: 'TOYS:-	', amount3: '	20424	',  url3: '	/2084377289testbysam/AKALTARA/DEEPAK%20(AKALTARA)%20130.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	SHRIMANAGALM (AKALTARA)	', toys4: 'TOYS:-	', amount4: '	7823	',  url4: '	/2084377289testbysam/AKALTARA/SHRIMANGALAM%20(AKALTARA)%20298.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	SHARMA GENERAL  (AKALTARA)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/AKALTARA/SHARMA%20GENERAL%20(AKALTARA)%20282.htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
customer6: '	SS FANCY (AKALTARA)	', toys6: 'TOYS:-	', amount6: '	3977	',  url6: '	/2084377289testbysam/AKALTARA/SS%20FANCY%20(AKALTARA).htm	', bags6: 'BAGS:-	', amountb6: '	N/A	',  urlb6: '		',
customer7: '	KANHA GENERAL (AKALTARA)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/AKALTARA/KANHA%20GENERAL%20(AKALTARA)%2050.htm	', bags7: 'BAGS:-	', amountb7: '	N/A	',  urlb7: '		',
customer8: '	SANTOSH GENERAL (AKALTARA)	', toys8: 'TOYS:-	', amount8: '	5357	',  url8: '	/2084377289testbysam/AKALTARA/SANTOSH  GENERAL (AKALTARA).htm	', bags8: 'BAGS:-	', amountb8: '	N/A	',  urlb8: '		',
												},
{id: 1, name: '	BALCO', total: '  (	13147	)', 									
customer1: '	SACHIN COLLECTION (BALCO)	', toys1: 'TOYS:-	', amount1: '	11005	',  url1: '	/2084377289testbysam/BALCO/SACHIN COLLECTION (BALCO) 84.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	UPHAR COLLECTION (BALCO)	', toys2: 'TOYS:-	', amount2: '	2139	',  url2: '	/2084377289testbysam/BALCO/UPHAR COLLECTION (BALCO) 272.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	NAVEEN ELECTRONICS (BALCO)	', toys3: 'TOYS:-	', amount3: '	3	',  url3: '	/2084377289testbysam/BALCO/NAVEEN ELECTRONICS (BALCO)  232.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
												},
{id: 1, name: '	BALODA', total: '  (	67829	)', 									
customer1: '	ESHWAR GENERAL (BALODA)	', toys1: 'TOYS:-	', amount1: ' 	17688	',  url1: '	/2084377289testbysam/BALODA/ESHWAR%20GENERAL%20(BALODA)%2098.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	SAKSHI (BALODA)	', toys2: 'TOYS:-	', amount2: '	11067	',  url2: '	/2084377289testbysam/BALODA/SAKSHI%20GENERAL%20(BALODA)%20152.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	SHASHANK BOOK DEPO (BALODA)	', toys3: 'TOYS:-	', amount3: '	1	',  url3: '	/2084377289testbysam/BALODA/SHASHANK%20GENERAL%20(BALODA)%2058.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	VARDHAMAN GENERAL (BALODA)	', toys4: 'TOYS:-	', amount4: '	7822	',  url4: '	/2084377289testbysam/BALODA/VARDHAMAN%20GENERAL%20(BALODA)%20126.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	LOVE KIRANA (BALODA)	', toys5: 'TOYS:-	', amount5: '	21254	',  url5: '	/2084377289testbysam/BALODA/LOVE%20KIRANA%20(BALODA)%20193_files.htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
customer6: '	VICKEY GENERAL (BALODA)	', toys6: 'TOYS:-	', amount6: '	6887	',  url6: '	/2084377289testbysam/BALODA/VICKEY%20GENERAL%20(BALODA)%2082.htm	', bags6: 'BAGS:-	', amountb6: '	N/A	',  urlb6: '		',
customer7: '	SHIVAM GENERAL (BALODA)	', toys7: 'TOYS:-	', amount7: '	3110	',  url7: '	/2084377289testbysam/BALODA/SHIVAM%20GENERAL%20(BALODA)%20217.htm	', bags7: 'BAGS:-	', amountb7: '	N/A	',  urlb7: '		',
customer8: '	B.L GUPTA (BALODA)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/BALODA/B.L%20GUPTA%20(BALODA)%20258.htm	', bags8: 'BAGS:-	', amountb8: '	N/A	',  urlb8: '		',
customer9: '	GOYAL GENERAL (BALODA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/BALODA/GOYAL%20GENERAL%20(BALODA)%20263.htm	', bags9: 'BAGS:-	', amountb9: '	N/A	',  urlb9: '		',
												},
{id: 1, name: '	BAMNIDIH', total: '(	22751	)', 									
customer1: '	CHANDINI GIFT	', toys1: 'TOYS:-	', amount1: ' 	22751	',  url1: '	/2084377289testbysam/BAMNIDIH/CHANDAN%20GENERAL%20(AKALTARA)%2029.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	BARADWAR', total: ' (	25551	)', 									
customer1: '	ASHIRWAD GENERAL (BARADWAR)	', toys1: 'TOYS:-	', amount1: ' 	7370	',  url1: '	/2084377289testbysam/BARADWAR/ASHIRWAD GENERAL (BARADWAR) 13.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	SIDDHI VINAYAK (BARADWAR)	', toys2: 'TOYS:-	', amount2: '	8505	',  url2: '	/2084377289testbysam/BARADWAR/SIDDHI VINAYAK GENERAL (BARADWAR) 268.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	SAMRAT GENERAL (BARADWAR)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/BARADWAR/SAMRATH GENERAL (BARADWAR).htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	SAKTIYA SETH (BARADWAR)	', toys4: 'TOYS:-	', amount4: '	0	',  url4: '	/2084377289testbysam/BARADWAR/SAKTIYA SETH (BARADWAR) 219.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	LAXMI DEPARTMENTAL  (BARADWAR)	', toys5: 'TOYS:-	', amount5: '	9676	',  url5: '	/2084377289testbysam/BARADWAR/LAXMI  DEPARTMENTAL (BARADWAR).htm	', bags5: 'BAGS:-	', amountb4: '	N/A	',  urlb5: '		',
												},
												
{id: 1, name: '	BELGEHNA', total: ' (	-839	)', 									
customer1: '	RINKU GENERAL (BELGEHNA)	', toys1: 'TOYS:-	', amount1: '	-839	',  url1: '	/2084377289testbysam/BELGEHNA/RINKU (BELGEHNA) 109.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	BELTARA', total: ' (	2657	)', 									
customer1: '	PRATAB (BELTARA)	', toys1: 'TOYS:-	', amount1: '	2657	',  url1: '	/2084377289testbysam/BELTARA/PRATAB (BELTARA) 294.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	BHATAPARA ', total: '(	20620	)', 									
customer1: '	ANDAAZ BAG (BHATAPARA)	', toys1: 'TOYS:-	', amount1: '	20620	',  url1: '	/2084377289testbysam/BHATAPARA/ANDAAZ COLLECTION (BHATAPARA).htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	BHATGAON', total: ' (	6709	)', 									
customer1: '	DEEPANSHU (BHATGAON)	', toys1: 'TOYS:-	', amount1: ' 	3216	',  url1: '	/2084377289testbysam/BHATGAON/DEEPANSHU GENERAL (BHATGAON) 19.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	MANPASAND (BHATGAON)	', toys2: 'TOYS:-	', amount2: '	3498	',  url2: '	/2084377289testbysam/BHATGAON/MANPASAND (BHATGAON) 92.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	RIYA GENERAL (BHATGAON)	', toys3: 'TOYS:-	', amount3: ' 	-4	',  url3: '	/2084377289testbysam/BHATGAON/RIYA GENERAL (BHATGAON) 280.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	NAMDEV (BHATGAON)	', toys4: 'TOYS:-	', amount4: '	-1	',  url4: '	/2084377289testbysam/BHATGAON/NAMDEV GENERAL (BHATGAON) 83.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
												},
{id: 1, name: '	BHILAIGARH', total: ' (	19123	)', 									
customer1: '	SONU GENERAL (BHILAIGARH)	', toys1: 'TOYS:-	', amount1: ' 	15395	',  url1: '	/2084377289testbysam/BHILAIGARH/SONU GENERAL (BHILAIGARH) 52.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	SS  SUPER MARKET (BHILAIGARH)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/BHILAIGARH/SS  SUPER MARKET (BHILAIGARH).htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	TANU GENERAL (BHILAIGARH)	', toys3: 'TOYS:-	', amount3: '	3552	',  url3: '	/2084377289testbysam/BHILAIGARH/TANU GENERAL (BHILAIGARH) 251.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	LALIT GENERAL (BHILAIGARH)	', toys4: 'TOYS:-	', amount4: '	0	',  url4: '	/2084377289testbysam/BHILAIGARH/LALIT GENERAL (BHILAIGARH) 57.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	DEWANGAN GENERAL (BHILAIGARH)	', toys5: 'TOYS:-	', amount5: '	176	',  url5: '	/2084377289testbysam/BHILAIGARH/DEWANGAN GENERAL (BHILAIGARH) 218.htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
												},
{id: 1, name: '	BILASPUR ', total: '(	90879	)', 									
customer1: '	BOMBAY FASHION (RAJKISHORE)	', toys1: 'TOYS:-	', amount1: ' 	21033	',  url1: '	/2084377289testbysam/BILASPUR/BOMBAY FASHION (RAJKISHORE).htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	MOHAN NAGOI (BILASPUR)	', toys2: 'TOYS:-	', amount2: '	17048	',  url2: '	/2084377289testbysam/BILASPUR/MOHAN NAGOI (BILASPUR) 128.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	POOJA SHRINGAR (BILASPUR)	', toys3: 'TOYS:-	', amount3: '	1308	',  url3: '	/2084377289testbysam/BILASPUR/POOJA SHRINGARH (BILASPUR) 107.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	AKASH GENERAL (BUDHWARI)	', toys4: 'TOYS:-	', amount4: '	8690	',  url4: '	/2084377289testbysam/BILASPUR/AKASH GENERAL STORE (BUDHWARI) - 295.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	SIDDHI VINAYAK (BILASPUR)	', toys5: 'TOYS:-	', amount5: '	33002	',  url5: '	/2084377289testbysam/BILASPUR/SIDDHI VINAYAK (BILASPUR).htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
customer6: '	PUSTAK BHAWAN (BILASPUR)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/BILASPUR/PUSHTAK BHAWAN (BILASPUR).htm	', bags6: 'BAGS:-	', amountb6: '	N/A	',  urlb6: '		',
customer7: '	SEEMA SHRIVASTAV (BILASPUR)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/BILASPUR/SEEMA SHRIVASTAV (BILASPUR) 278.htm	', bags7: 'BAGS:-	', amountb7: '	N/A	',  urlb7: '		',
customer8: '	SONI GIFT (DEVIKHURDH) (BSP)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/BILASPUR/SONI GIFT DEVRIKHURDH (BILASPUR) 155.htm	', bags8: 'BAGS:-	', amountb8: '	N/A	',  urlb8: '		',
customer9: '	VIJAY TOYS TELIPARA	', toys9: 'TOYS:-	', amount9: '	1948	',  url9: '	/2084377289testbysam/BILASPUR/VIJAY TOYS (TELIPARA).htm	', bags9: 'BAGS:-	', amountb9: '	N/A	',  urlb9: '		',
customer10: '	HITESH BAJAJ	', toys10: 'TOYS:-	', amount10: '	0	',  url10: '	/2084377289testbysam/BILASPUR/HITESH BAJAJ (BILASPUR).htm	', bags10: 'BAGS:-	', amountb10: '	N/A	',  urlb10: '		',
customer11: '	HELLO DUDE (SUNIL)	', toys11: 'TOYS:-	', amount11: '	7850	',  url11: '	/2084377289testbysam/BILASPUR/HELLO DUDE (SUNIL JAGYASI).htm	', bags11: 'BAGS:-	', amountb11: '	N/A	',  urlb11: '		',
												},
{id: 1, name: '	BILHA', total: ' (	10973	)', 									
customer1: '	PAYAL FANCY (BILHA)	', toys1: 'TOYS:-	', amount1: ' 	5996	',  url1: '	/2084377289testbysam/BILHA/PAYAL%20FANCY%20(BILHA)%2066.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	KISAN MEGA BIG BAZAR (BILHA)	', toys2: 'TOYS:-	', amount2: '	4977	',  url2: '	/2084377289testbysam/BILHA/KISAN%20MEGA%20BIG%20BAZAR%20(BILHA)%2031.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	RAJA DAILY NEEDS (BILHA)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/BILHA/RAJA%20DAILY%20NEEDS%20(BILHA).htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
												},
												
{id: 1, name: '	BIRRA', total: ' (	18258	)', 									
customer1: '	TOMESH (BIRRA)	', toys1: 'TOYS:-	', amount1: '	7105	',  url1: '	/2084377289testbysam/BIRRA/TOMESH%20(BIRRA).htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	SUMAN (BIRRA)	', toys2: 'TOYS:-	', amount2: '	2530	',  url2: '	/2084377289testbysam/BIRRA/SUMAN (BIRRA).htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	NAMDEV (BIRRA)	', toys3: 'TOYS:-	', amount3: '	8623	',  url3: '	/2084377289testbysam/BIRRA/RACKET RATIO.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
												},
{id: 1, name: '	BOADTARA', total: ' (	6275	)', 									
customer1: '	PRIYAL GENERAL (BODTARA)	', toys1: 'TOYS:-	', amount1: ' 	6280	',  url1: '	/2084377289testbysam/BOADTARA/PRIYAL (BOADTARA) 26.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	MONIKA FANCY STORE (BOADTARA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/BOADTARA/MONIKA FANCY STORE (BOADTARA).htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	PUNNET SAHU  (BOADTARA)	', toys3: 'TOYS:-	', amount3: '	-5	',  url3: '	/2084377289testbysam/BOADTARA/PUNNET RAM  SAHU  (BOADTARA).htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
												},
{id: 1, name: '	BORLA', total: ' (	0	)', 									
customer1: '	KESARWANI CLOTH (BORLA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/BORLA/KESARWANI CLOTH (BORLA).htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
												
{id: 1, name: '	CHAKRBHTA ', total: ' (	32307	)', 									
customer1: '	MAHAMAYA THRED HOUSE (CHBT)	', toys1: 'TOYS:-	', amount1: ' 	10577	',  url1: '	/2084377289testbysam/CHAKKARBHATA/MAHAMAYA%20THREAD%20(CHAKKARBHATA)%20103.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	MAHESH STD (CHBT)	', toys2: 'TOYS:-	', amount2: '	12222	',  url2: '	/2084377289testbysam/CHAKKARBHATA/MAHESH%20STD%20(CHAKKARBHATA)%20161.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	NEW JAI MATA DI  (CHBT)	', toys3: 'TOYS:-	', amount3: '	1727	',  url3: '	/2084377289testbysam/CHAKKARBHATA/NEW%20JAIMATA%20DI%20(CHAKKARBHATA)%2081.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	BABA GENERAL (CHBT)	', toys4: 'TOYS:-	', amount4: ' 	7781	',  url4: '	/2084377289testbysam/CHAKKARBHATA/BABA%20GENERAL%20(CHAKKARBHATA)%20%20188.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	LAXMI KITABGHAR (CHBT)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/CHAKKARBHATA/LAXMI%20KITAB%20GHAR%20(CHAKKARBHATA).htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
customer6: '	SIDDARTH (CHBT)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/CHAKKARBHATA/SIDDARTH%20(CHAKKARBHATA)%20139.htm	', bags6: 'BAGS:-	', amountb6: '	N/A	',  urlb6: '		',
												},
{id: 1, name: '	CHAMPA', total: ' (	27847	)', 									
customer1: '	AMIT SHRINGAR AND GIFT (CHAMPA)	', toys1: 'TOYS:-	', amount1: ' 	4	',  url1: '	/2084377289testbysam/CHAMPA/AMIT SHRINGAR AND GIFT (CHAMPA).htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	SOHAM GIFT (CHAMPA)	', toys2: 'TOYS:-	', amount2: '	229	',  url2: '	/2084377289testbysam/CHAMPA/SOHAM GIFT (CHAMPA) 86.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	HEMA SHRINGAR (CHAMPA)	', toys3: 'TOYS:-	', amount3: '	2926	',  url3: '	/2084377289testbysam/CHAMPA/HEMA SUHAG (CHAMPA).htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	RANI GENERAL (CHAMPA)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/CHAMPA/RANI GENERAL STORE (CHAMPA).htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	SHRINGAR SADAN (CHAMPA)	', toys5: 'TOYS:-	', amount5: '	20	',  url5: '	/2084377289testbysam/CHAMPA/SHRINGAR SAADAN (CHAMPA) 284.htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
customer6: '	RADHA SWAMI (CHAMPA)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/CHAMPA/RADHA%20SWAMI%20(CHAMPA).htm	', bags6: 'BAGS:-	', amountb6: '	N/A	',  urlb6: '		',
customer7: '	MOHSIN (CHAMPA)	', toys7: 'TOYS:-	', amount7: '	1061	',  url7: '	/2084377289testbysam/CHAMPA/MOHSIN BHAI (CHAMPA) 271.htm	', bags7: 'BAGS:-	', amountb7: '	N/A	',  urlb7: '		',
customer8: '	MAA BHAGWATI (CHAMPA)	', toys8: 'TOYS:-	', amount8: '	11963	',  url8: '	/2084377289testbysam/CHAMPA/MAA BHAGWATI (CHAMPA) 238.htm	', bags8: 'BAGS:-	', amountb8: '	N/A	',  urlb8: '		',
customer9: '	POOJA NOVELTY (CHAMPA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/CHAMPA/POOJAA NOVELTY (CHAMPA) 40.htm	', bags9: 'BAGS:-	', amountb9: '	N/A	',  urlb9: '		',
customer10: '	KANHA SUPERBAZAR (CHAMPA)	', toys10: 'TOYS:-	', amount10: '	5244	',  url10: '	/2084377289testbysam/CHAMPA/KANHA SUPER BAZAAR (CHAMPA) 262.htm	', bags10: 'BAGS:-	', amountb10: '	N/A	',  urlb10: '		',
customer11: '	ANIL DHARMIK (CHAMPA)	', toys11: 'TOYS:-	', amount11: '	6400	',  url11: '	/2084377289testbysam/CHAMPA/ANIL DHARMIK (CHAMPA).htm	', bags11: 'BAGS:-	', amountb11: '	N/A	',  urlb11: '		',
												},
{id: 1, name: '	CHURRI ', total: '(	6175	)', 									
customer1: '	NEHA GENERAL (CHURI)	', toys1: 'TOYS:-	', amount1: ' 	6175	',  url1: '	/2084377289testbysam/CHURI/NEHA%20(CHURRI)%2071.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	MAA KAUSA GAI (CHURRI)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/CHURI/MAA%20KAUSA%20GAI%20(CHURRI)%20292.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
												},
												
{id: 1, name: '	DABRA', total: ' (	17046	)', 									
customer1: '	FASHION PARK (DABRA)	', toys1: 'TOYS:-	', amount1: ' 	17046	',  url1: '	/2084377289testbysam/DABRA/FASHION PARK (DABRA) 297.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	DHARAMJAYGARH', total: ' (	3041	)', 									
customer1: '	AKANKSHA  (DHARAMJAYGARH)	', toys1: 'TOYS:-	', amount1: ' 	3041	',  url1: '	/2084377289testbysam/DHARMJAYGARH/AKANSHA GENERAL (DHARAMJAYGARH) 3.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
												
{id: 1, name: '	DIPKA', total: ' (	63159	)', 									
customer1: '	KOLKATA MAHASALE (DIPKA)	', toys1: 'TOYS:-	', amount1: ' 	33330	',  url1: '	/2084377289testbysam/DIPKA/KOLKATA%20MAHA%20SALE%20(DIPKA)%2048.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	NEW BOOK DEPO (DIPKA)	', toys2: 'TOYS:-	', amount2: '	6	',  url2: '	/2084377289testbysam/DIPKA/NEW%20BOOK%20DEPO.%20(DIPKA)%20110.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	GEETA BOOK DEPO (DIPKA)	', toys3: 'TOYS:-	', amount3: '	1868	',  url3: '	/2084377289testbysam/DIPKA/GEETA%20BOOK%20DEPO.%20(DIPKA)%20266.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	SHANTI SUHAG (DIPKA)	', toys4: 'TOYS:-	', amount4: ' 	6375	',  url4: '	/2084377289testbysam/DIPKA/SHANTI%20SUHAG%20(DIPKA)%20129.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	KHUSHI BENGALS (DIPKA)	', toys5: 'TOYS:-	', amount5: '	2154	',  url5: '	/2084377289testbysam/DIPKA/KHUSHI%20BENGALS%20(DIPKA)%204.htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
customer6: '	VASU COLLECTION  (DIPA)	', toys6: 'TOYS:-	', amount6: '	19426	',  url6: '	/2084377289testbysam/DIPKA/VASU%20COLLECTION.%20(DIPKA)%20149.htm	', bags6: 'BAGS:-	', amountb6: '	N/A	',  urlb6: '		',
												},
{id: 1, name: '	GANYARI', total: ' (	1300	)', 									
customer1: '	MISHRA GENERAL (GANYARI)	', toys1: 'TOYS:-	', amount1: ' 	1300	',  url1: '	/2084377289testbysam/GANYARI/MISHRA (GANYARI) 154.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	GOBIRPATH', total: ' (	0	)', 									
customer1: '	PREETY GOBRIPATH (GOBRIPATH)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/GOBRIPATH/PREETI (GOBRIPATH) 97.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
												
{id: 1, name: '	HARDIBAZAR ', total: '(	25094	)', 									
customer1: '	ASHWANI SHRINGAR (HARDIBAZAR)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/HARDIBAZAR/ASHWINI GENERAL (HARDIBAZAR) 174.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	SANSKRITI GENERAL  (HARDIBAZAR)	', toys2: 'TOYS:-	', amount2: '	11328	',  url2: '	/2084377289testbysam/HARDIBAZAR/SANSKRITI GENERAL (HARDIBAZAR).htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	NIKHIL FANCY (HARDIBAZAR)	', toys3: 'TOYS:-	', amount3: '	13766	',  url3: '	/2084377289testbysam/HARDIBAZAR/NIKHIL FANCY (HARDIBAZAR) 281.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	 SONI SHRINGAR (HARDIBAZAR)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/HARDIBAZAR/SONI SHRINGAR (HARDIBAZAR) 72.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	MANOJ KAPDA BAZAR (HARDIBAZAR)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/HARDIBAZAR/MANOJ KAPDA (HARDIBAZAR) 252.htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
												},
{id: 1, name: '	HARDIKALA', total: ' (	3	)', 									
customer1: '	MANMOHAN (HARDIKALA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/HARDIKALA/MANMOHAN (HARDIKALA) 69.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	SANAJY  (HARDIKALA)	', toys2: 'TOYS:-	', amount2: '	3	',  url2: '	/2084377289testbysam/HARDIKALA/SANJAY. (HARDIKALA) 291.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
												},
{id: 1, name: '	HASOD', total: ' (	37669	)', 									
customer1: '	LAXMI FANCY (HASOD)	', toys1: 'TOYS:-	', amount1: ' 	16	',  url1: '	/2084377289testbysam/HASOD/LAXMI%20GENERAL%20(HASOD)%20145.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	SAHU FANCY (HASOD)	', toys2: 'TOYS:-	', amount2: '	8676	',  url2: '	/2084377289testbysam/HASOD/SAHU%20FANCY%20(HASOD)%20301.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	REKHA FANCY STORE (HASOD)	', toys3: 'TOYS:-	', amount3: '	11022	',  url3: '	/2084377289testbysam/HASOD/REKHA%20FANCY%20STORE%20(HASOD).htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	CHAVI GENERAL (HASOD)	', toys4: 'TOYS:-	', amount4: ' 	2462	',  url4: '	/2084377289testbysam/HASOD/CHAVVI%20GENERAL%20(HASOD).htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	MAHARAJ FANCY (HASOD)	', toys5: 'TOYS:-	', amount5: '	15493	',  url5: '	/2084377289testbysam/HASOD/MAHARAJ%20FANCY%20STORE%20(HASOD).htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
												},
{id: 1, name: '	JAITHARI', total: ' (	24705	)', 									
customer1: '	SHIV PLASTIC (JAITHARI)	', toys1: 'TOYS:-	', amount1: ' 	17542	',  url1: '	/2084377289testbysam/JAITHARI/MUSKAN (JAITHARI) 79.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	MUSKAN FANCY (JAITHARI)	', toys2: 'TOYS:-	', amount2: '	7163	',  url2: '	/2084377289testbysam/JAITHARI/SHIV PLASTICS (JAITHARI) 143.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
												},
{id: 1, name: '	JANJGIR', total: ' (	13268	)', 									
customer1: '	GARIMA FANCY (JANJGIR)	', toys1: 'TOYS:-	', amount1: ' 	2507	',  url1: '	/2084377289testbysam/JANJGIR/GARIMA FANCY (JANJGIR) 166.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	PRATEEK GENERAL  (JANJGIR)	', toys2: 'TOYS:-	', amount2: '	10761	',  url2: '	/2084377289testbysam/JANJGIR/PRATEEK GENERAL (JANJGIR) 150.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	NAMDEV GENERAL (JANJGIR)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/JANJGIR/NAMDEV GENERAL (JANJGIR) 158.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	SATYAM GENERAL (JANJGIR)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/JANJGIR/SATYAM GENERAL (JANJGIR) 132.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	SUPER BAG HOUSE (JANJGIR)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/JANJGIR/SUPER BAG HOUSE (JANJGIR) 37.htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
customer6: '	AKASH GENERAL (JANJGIR)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/JANJGIR/AKASH GENERAL STORE (JANJGIR) 11.htm	', bags6: 'BAGS:-	', amountb6: '	N/A	',  urlb6: '		',
												},
{id: 1, name: '	JHARSUKDA ', total: '(	0	)', 									
customer1: '	 FASHION PARK (JHARSUKDA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/JHARSUKDA/FASHION PARK (JHARSUKDA) 167.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	GUDDU (JHARSUKDA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/JHARSUKDA/GUDDU (JHARSUKDA) 43.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
												},
{id: 1, name: '	KATGHORA', total: ' (	20057	)', 									
customer1: '	ROOP SHRINGAR	', toys1: 'TOYS:-	', amount1: ' 	7318	',  url1: '	/2084377289testbysam/KATGHORA/ROOP%20SHRINGAR%20(KATGHORA)%20173.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	MAHABALI (KATGHORA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/KATGHORA/MAHABALI.%20(KATGHORA)%2063.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	KAREENA BOOT HOUSE (KATGHORA)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/KATGHORA/KAREENA%20BOOT%20(KATGHOTA)%20(NEW%2029).htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	PRADEEP BHAIYA (KATGHORA)	', toys4: 'TOYS:-	', amount4: ' 	12739	',  url4: '	/2084377289testbysam/KATGHORA/PRADEEP%20BHAI.%20(KATGHORA)%20123.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	PADUKA BOOT HOUSE (KATGHORA)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/KATGHORA/PADUKA%20BOOT%20(KATGHORA)%20250.htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
												},
{id: 1, name: '	KATGI', total: ' (	86380	)', 									
customer1: '	VIDHYARTHI GENERAL (KATGI)	', toys1: 'TOYS:-	', amount1: ' 	21662	',  url1: '	/2084377289testbysam/KATGI/VIDYARTH GENERAL (KATGI) 106.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	MANOJ FASHION	', toys2: 'TOYS:-	', amount2: '	15822	',  url2: '	/2084377289testbysam/KATGI/MANOJ FASHION (KATGI) 164.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	MAHAMAYA GENERAL (KATGI)	', toys3: 'TOYS:-	', amount3: '	1915	',  url3: '	/2084377289testbysam/KATGI/MAHAMAYA GENERAL. (KATGI) 170.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	JYOTI GENRAL (KATGI)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/KATGI/JYOTI GENERAL (KATGI) 10.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	PAWAN GENERAL STORE (KATGI)	', toys5: 'TOYS:-	', amount5: '	15288	',  url5: '	/2084377289testbysam/KATGI/PAWAN GENERAL (KATGI) 38.htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
customer6: '	SAI GENERAL (KATGI)	', toys6: 'TOYS:-	', amount6: '	2798	',  url6: '	/2084377289testbysam/KATGI/SAI GENERAL (KATGI) 264.htm	', bags6: 'BAGS:-	', amountb6: '	N/A	',  urlb6: '		',
customer7: '	SURAJ GENERAL (KATGI)	', toys7: 'TOYS:-	', amount7: '	6003	',  url7: '	/2084377289testbysam/KATGI/SURAJ GENERAL. (KATGI) 27.htm	', bags7: 'BAGS:-	', amountb7: '	N/A	',  urlb7: '		',
customer8: '	MANOJ GENERAL (KATGI)	', toys8: 'TOYS:-	', amount8: '	22892	',  url8: '	/2084377289testbysam/KATGI/MANOJ GENERAL. (KATGI) 68.htm	', bags8: 'BAGS:-	', amountb8: '	N/A	',  urlb8: '		',
												},
{id: 1, name: '	KAWARDHA ', total: '(	1970	)', 									
customer1: '	GURUDEV GENERAL (KAWARDHA)	', toys1: 'TOYS:-	', amount1: ' 	1970	',  url1: '	/2084377289testbysam/KAWARDHA/GURUDEV GENERAL (KAWARDHA).htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	KHAMRIYA', total: ' (	10845	)', 									
customer1: '	FAIR DEAL (KHAMARIYA)	', toys1: 'TOYS:-	', amount1: ' 	10845	',  url1: '	/2084377289testbysam/KHAMARIYA/FAIR%20DEAL.%20(KHAMARIYA)%20%2015.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	SHUBHAM GENERAL (KHAMARIYA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/KHAMARIYA/SHUBHAM (KAMARIYA)  180.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
												},
{id: 1, name: '	KHAMI', total: ' (	1367	)', 									
customer1: '	AMISHA GENERAL (KHAMI)	', toys1: 'TOYS:-	', amount1: ' 	2	',  url1: '	/2084377289testbysam/KHAMI/AMISHA GENERAL (KHAMI).htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	SAHU GENERAL (KHAMI)	', toys2: 'TOYS:-	', amount2: ' 	1365	',  url2: '	/2084377289testbysam/KHAMI/SAHU GENERAL (KHAMI).htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
												},
{id: 1, name: '	KARNODH ', total: '(	12	)', 									
customer1: '	ASHOK KARNODH	', toys1: 'TOYS:-	', amount1: ' 	12	',  url1: '	/2084377289testbysam/KARNODH/ASHOK (KARNODH) 144.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	KHARSIYA ', total: '(	0	)', 									
customer1: '	ABHINANDAN (KHARSIYA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KHARSIYA/ABHINANDAN (KHARSIYA).htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	KRISHAN COLLECTION (KHARSIYA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/KHARSIYA/KRISHAN COLLECTION (KHARSIYA).htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
												},
{id: 1, name: '	KHAROD', total: ' (	1	)', 									
customer1: '	MOHAN GENERAL 	', toys1: 'TOYS:-	', amount1: ' 	1	',  url1: '	/2084377289testbysam/KHAROD/MOHAN (KHAROD)  65.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	KASHDOL', total: ' (	14	)', 									
customer1: '	MAA SHETLA (KASHDOL)	', toys1: 'TOYS:-	', amount1: ' 	12	',  url1: '	/2084377289testbysam/KASHDOL/MAA SHETLA. (KASHDOL) 108.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	BALAJI (KASHDOL)	', toys2: 'TOYS:-	', amount2: '	2	',  url2: '	/2084377289testbysam/KASHDOL/BALAJI. (KASHDOL) 288.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
												},
{id: 1, name: '	KORBA', total: ' (	1	)', 									
customer1: '	BANSAL ENTERPRISES	', toys1: 'TOYS:-	', amount1: ' 	1	',  url1: '	/2084377289testbysam/KORBA/BANSAL%20ENTERPRISES%20(KOSABADI)%20160.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	KOTA', total: ' (	12859	)', 									
customer1: '	AGGARWAL GENERAL (KOTA)	', toys1: 'TOYS:-	', amount1: ' 	9180	',  url1: '	/2084377289testbysam/KOTA/AGGARWAL GENERAL. (KOTA) 30.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	MAHAMAYA FASHION HOUSE	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/KOTA/MAHAMAYA FASHION HOUSE (KOTA) 18.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	NISHA GENERAL (KOTA)	', toys3: 'TOYS:-	', amount3: '	2257	',  url3: '	/2084377289testbysam/KOTA/NISHA GENERAL (KOTA) 260.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	NIKITA GENERAL (KOTA)	', toys4: 'TOYS:-	', amount4: ' 	1416	',  url4: '	/2084377289testbysam/KOTA/NIKITA (KOTA).htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	AKANKSHA GENERAL (KOTA)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/KOTA/AKANKSHA GENERAL(KOTA) 7.htm	', bags5: 'BAGS:-	', amountb5: '	889	',  urlb5: '	/HINDUSTAN BAGS/BAGS/AKANKSHA GENERAL (KOTA).htm	',
customer6: '	SARITA GENERAL (KOTA)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/KOTA/SARITA GENERAL (KOTA).htm	', bags6: 'BAGS:-	', amountb6: '	N/A	',  urlb6: '		',
customer7: '	SHAILESH GENERAL (KOTA)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/KOTA/SHAILESH GENERAL. (KOTA) 121.htm	', bags7: 'BAGS:-	', amountb7: '	N/A	',  urlb7: '		',
customer8: '	ALL IN ONE (KOTA)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/KOTA/ALL IN ONE (KOTA).htm	', bags8: 'BAGS:-	', amountb8: '	N/A	',  urlb8: '		',
customer9: '	KALPANA GENERAL BABAN (KOTA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/KOTA/KALPANA (KOTA) 85.htm	', bags9: 'BAGS:-	', amountb9: '	N/A	',  urlb9: '		',
customer10: '	AKANKSHA GENERAL (BABLU) (KOTA)	', toys10: 'TOYS:-	', amount10: '	6	',  url10: '	/2084377289testbysam/KOTA/AKANKSHA GENERAL BABLO (KOTA) 122.htm	', bags10: 'BAGS:-	', amountb10: '	N/A	',  urlb10: '		',
customer11: '	RAJA MOBILE (KOTA)	', toys11: 'TOYS:-	', amount11: '	1296	',  url11: '	/2084377289testbysam/KOTA/RAJA MOBILE (KOTA).htm	', bags11: 'BAGS:-	', amountb11: '	N/A	',  urlb11: '		',
												},
{id: 1, name: '	KOTMISONAR ', total: '(	0	)', 									
customer1: '	JANVI GENERAL (KOTMISONAR)	', toys1: 'TOYS:-	', amount1: ' 		',  url1: '		', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	KUNDA', total: ' (	4308	)', 									
customer1: '	CHANDRAKAR GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KUNDA/CHANDRAKAR GENERAL (KUNDA) 102.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	SHREE RADHA RANI (KUNDA)	', toys2: 'TOYS:-	', amount2: '	4307	',  url2: '	/2084377289testbysam/KUNDA/SHREE RADHA RANI (KUNDA).htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	SHRIRAM GENERAL (KUNDA)	', toys3: 'TOYS:-	', amount3: '	1	',  url3: '	/2084377289testbysam/KUNDA/SHRIRAM GENERAL. (KUNDA) 34.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	KANHA  FANCY (KUNDA)	', toys4: 'TOYS:-	', amount4: '	0	',  url4: '	/2084377289testbysam/KUNDA/KANHA FANCY (KUNDA).htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
												},
{id: 1, name: '	LAWAN', total: ' (	955	)', 									
customer1: '	VINOD LAWAN	', toys1: 'TOYS:-	', amount1: ' 	955	',  url1: '	/2084377289testbysam/LAWAN/VINOD (LAWAN).htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	LORMI ', total: '(	7449	)', 									
customer1: '	NANDANI GENERAL (LORMI)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/LORMI/NANDINI GENERAL (LORMI) 172.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	ASHISH GENERAL (LORMI)	', toys2: 'TOYS:-	', amount2: '	7448	',  url2: '	/2084377289testbysam/LORMI/ASHISH GENERAL .(LORMI) (NEW 5).htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	KESARWANI (LORMI)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/LORMI/KESARWANI GIFT (LORMI) 275.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	KANHA COLLECTION (LORMI)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/LORMI/KANHA COLLECTION .(LORMI).htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	KAVYA GENERAL (LORMI)	', toys5: 'TOYS:-	', amount5: ' 	0	',  url5: '	/2084377289testbysam/LORMI/KAVYA GENERAL (LORMI) (NEW 33).htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
customer6: '	MAMTA GENERAL (LORMI)	', toys6: 'TOYS:-	', amount6: ' 	1	',  url6: '	/2084377289testbysam/LORMI/MAMTA LORMI.htm	', bags6: 'BAGS:-	', amountb6: '	N/A	',  urlb6: '		',
												},
{id: 1, name: '	MALHAR', total: ' (	29252	)', 									
customer1: '	ANKIT FANCY (MALHAR)	', toys1: 'TOYS:-	', amount1: ' 	13101	',  url1: '	/2084377289testbysam/MALHAR/ANKITA (MALHAR) (NEW 7).htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	PURVI FANCY (MALHAR)	', toys2: 'TOYS:-	', amount2: '	5785	',  url2: '	/2084377289testbysam/MALHAR/PURVI FANCY (MALHAR) 290.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	JAANVI GENERAL (MALHAR)	', toys3: 'TOYS:-	', amount3: '	10366	',  url3: '	/2084377289testbysam/MALHAR/JANVI GENERAL (MALHAR) 25.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	JITENDRA (MALHAR)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/MALHAR/JITENDRA (MALHAR) 168.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
												},
{id: 1, name: '	MALKHARODA ', total: '(	41050	)', 									
customer1: '	PARI FANCY	', toys1: 'TOYS:-	', amount1: ' 	36988	',  url1: '	/2084377289testbysam/MALKHAROD/PARI FANCY (MALKHAROD) 184.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	PRAKASH FANCY	', toys2: 'TOYS:-	', amount2: ' 	4062	',  url2: '	/2084377289testbysam/MALKHAROD/PRAKASH FANCY (MALKHARODA).htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
												},
{id: 1, name: '	MANENDRAGARH', total: ' (	0	)', 									
customer1: '	AISHWARIYA GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/MANENDRAGARH/AISHWARIYA (MANENDRAGARH).htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	MARO ', total: '(	5	)', 									
customer1: '	RAJA MARO (MARO)	', toys1: 'TOYS:-	', amount1: ' 	1	',  url1: '	/2084377289testbysam/MARO/RAJA (MARO).htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	ANMOL  (MARO)	', toys2: 'TOYS:-	', amount2: '	4	',  url2: '	/2084377289testbysam/MARO/ANMOL (MARO).htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
												},
{id: 1, name: '	MARWAHI', total: ' (	19201	)', 									
customer1: '	LAXMI GENERAL (MARWAHI)	', toys1: 'TOYS:-	', amount1: ' 	12768	',  url1: '	/2084377289testbysam/MARWAHI/LAXMI GENERAL .(MARWAHI) 240.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	JAFFAR BOOT (MARWAHI)	', toys2: 'TOYS:-	', amount2: '	6433	',  url2: '	/2084377289testbysam/MARWAHI/JAFFAR BOOT .(MARWAHI) 5.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
												},
{id: 1, name: '	MASTURI ', total: '(	12226	)', 									
customer1: '	KISHORE RIKSHAW	', toys1: 'TOYS:-	', amount1: ' 	4178	',  url1: '	/2084377289testbysam/MASTURI/KISHORE RIKSHAW (MASTURI) 114.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	LAXMI GENERAL	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/MASTURI/LAXMI GENERAL (MASTURI) 273.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	KISHORE KIRANA (MASTURI)	', toys3: 'TOYS:-	', amount3: '	8048	',  url3: '	/2084377289testbysam/MASTURI/KISHORE KIRANA (MASTURI).htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
												},
{id: 1, name: '	MOHGAON ', total: '(	4511	)', 									
customer1: '	MANISH GENERAL	', toys1: 'TOYS:-	', amount1: ' 	4511	',  url1: '	/2084377289testbysam/MOHAGAON/MANISH (MOHGAON) 156.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	MUNGELI', total: ' (	24700	)', 									
customer1: '	TOY ZONE 	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/MUNGELI/TOY%20ZONE%20(MUNGELI).htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	BABA GENERAL	', toys2: 'TOYS:-	', amount2: '	-1	',  url2: '	/2084377289testbysam/MUNGELI/BABA%20GENERAL%20(MUNGELI)%20%2023.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	GURUNANAK GENERAL	', toys3: 'TOYS:-	', amount3: '	269	',  url3: '	/2084377289testbysam/MUNGELI/GURUNANAK%20GENERAL%20(MUNGELI)%2076.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	 JEENAT BENGALS (MUNGELI)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/MUNGELI/ZEENAT%20BENGALS%20(MUNGELI)%2045.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	PAYAL BAG HOUSE	', toys5: 'TOYS:-	', amount5: '	2350	',  url5: '	/2084377289testbysam/MUNGELI/PAYAL%20BAG%20(MUNGELI)%20171.htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
customer6: '	PRIYA LADIES	', toys6: 'TOYS:-	', amount6: '	7237	',  url6: '	/2084377289testbysam/MUNGELI/PRIYA%20LADIES%20(MUNGELI)%2099.htm	', bags6: 'BAGS:-	', amountb6: '	N/A	',  urlb6: '		',
customer7: '	SANGAM FANCY	', toys7: 'TOYS:-	', amount7: '	12340	',  url7: '	/2084377289testbysam/MUNGELI/SANGAM%20FANCY%20(MUNGELI)%20(NEW%20169).htm	', bags7: 'BAGS:-	', amountb7: '	N/A	',  urlb7: '		',
customer8: '	OM GENERAL (MUNGELI)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/MUNGELI/OM%20GENERAL%20(MUNGELI)%2087.htm	', bags8: 'BAGS:-	', amountb8: '	N/A	',  urlb8: '		',
customer9: '	K.V FASHION (MUNGELI)	', toys9: 'TOYS:-	', amount9: '	60	',  url9: '	/2084377289testbysam/MUNGELI/K.V FASHION (MUNGELI).htm	', bags9: 'BAGS:-	', amountb9: '	N/A	',  urlb9: '		',
customer10: '	SAGAR BAG  RAVI (MUNGELI)	', toys10: 'TOYS:-	', amount10: '	2445	',  url10: '	/2084377289testbysam/MUNGELI/SAGAR BAG RAVI (MUNGELI).htm	', bags10: 'BAGS:-	', amountb10: '	N/A	',  urlb10: '		',
												},
{id: 1, name: '	PACHPEDI ', total: '(	10547	)', 									
customer1: '	VINAY GENERAL (PACHPEDI)	', toys1: 'TOYS:-	', amount1: ' 	10551	',  url1: '	/2084377289testbysam/PACHPEDI/VINAY (PACHPEDI) 24.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	SAHIL (PACHPEDI)	', toys2: 'TOYS:-	', amount2: '	-4	',  url2: '	/2084377289testbysam/PACHPEDI/SAHIL (PACHPEDI) 119.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	JAISWAL ELECRICALS (PACHPEDI)	', toys3: 'TOYS:-	', amount3: '	14755	',  url3: '	/2084377289testbysam/PACHPEDI/JAISWAL ELECTRICAL (PACHPEDI).htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
												},
{id: 1, name: '	PAMGARH ', total: '(	9468	)', 									
customer1: '	BABA SCHOOL POINT (PAMGARH)	', toys1: 'TOYS:-	', amount1: ' 	8234	',  url1: '	/2084377289testbysam/PAMGARH/BABA%20SCHOOL%20POINT%20(PAMGARH)%2090.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	KABIR (PAMGARH)	', toys2: 'TOYS:-	', amount2: ' 	1234	',  url2: '	/2084377289testbysam/PAMGARH/KABIR (PAMGARH).htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
												},
												
{id: 1, name: '	PALI', total: ' (	67508	)', 									
customer1: '	ARADHYA GENERAL (PALI)	', toys1: 'TOYS:-	', amount1: ' 	1867	',  url1: '	/2084377289testbysam/PALI/ARADHYA GENERAL (PALI).htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	JAI  MAHAMAYA (PALI)	', toys2: 'TOYS:-	', amount2: '	16834	',  url2: '	/2084377289testbysam/PALI/JAI%20MAHAMAYA%20(PALI)%20267.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	SHIV BEEJ	', toys3: 'TOYS:-	', amount3: '	9	',  url3: '	/2084377289testbysam/PALI/SHIV%20BEEJ%20(PALI)%20255.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	DEEPAK READYMATE (PALI)	', toys4: 'TOYS:-	', amount4: ' 	10	',  url4: '	/2084377289testbysam/PALI/DEEPAK%20READYMATE%20(PALI).htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	SHRIJAN	', toys5: 'TOYS:-	', amount5: '	7098	',  url5: '	/2084377289testbysam/PALI/SHRIJAN%20(PALI)%20116.htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
customer6: '	SUMIT COLLECTION PALI	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/PALI/SUMIT%20COLLECTION%20.(PALI)%20285.htm	', bags6: 'BAGS:-	', amountb6: '	N/A	',  urlb6: '		',
customer7: '	UPHAR COLLECTION PALI	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/PALI/UPHAR%20COLLECTION%20(PALI)%20179.htm	', bags7: 'BAGS:-	', amountb7: '	N/A	',  urlb7: '		',
customer8: '	SANJAY BOOK DEPO (PALI)	', toys8: 'TOYS:-	', amount8: '	14135	',  url8: '	/2084377289testbysam/PALI/SANJAY%20BOOK%20DEPO.%20(PALI)%2054.htm	', bags8: 'BAGS:-	', amountb8: '	N/A	',  urlb8: '		',
customer9: '	SANJAY GIFT (PALI)	', toys9: 'TOYS:-	', amount9: '	27539	',  url9: '	/2084377289testbysam/PALI/SANJAY%20GIFT.%20(PALI)%20183.htm	', bags9: 'BAGS:-	', amountb9: '	N/A	',  urlb9: '		',
customer10: '	KHUSHI GENERAL (PALI)	', toys10: 'TOYS:-	', amount10: '	16	',  url10: '	/2084377289testbysam/PALI/KHUSHI GENERAL (PALI).htm	', bags10: 'BAGS:-	', amountb10: '	N/A	',  urlb10: '		',
												},
{id: 1, name: '	PANDARIYA', total: ' (	31908	)', 									
customer1: '	FIZZA GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/PANDARIYA/FIZZA GENERAL (PANDARIYA)  32.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	MARUTI GENERAL (PANDARIYA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/PANDARIYA/MARUTI GENERAL (PANDARIYA)  178.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	MATESHWARI (PANDARIYA)	', toys3: 'TOYS:-	', amount3: '	20	',  url3: '	/2084377289testbysam/PANDARIYA/MATESHWARI .(PANDARIYA) 95.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	OM SATIONARY (PANDARIYA)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/PANDARIYA/OM SATIONARY (PANDARIYA).htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	GURUANAK GENERAL (PANDARIYA)	', toys5: 'TOYS:-	', amount5: '	3514	',  url5: '	/2084377289testbysam/PANDARIYA/GURUNANAK GENERAL (PANDARIYA) 300.htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
customer6: '	ABHAY GENERAL (PANDARIYA)	', toys6: 'TOYS:-	', amount6: '	17522	',  url6: '	/2084377289testbysam/PANDARIYA/ABHAY GENERAL (PANDARIYA) 242.htm	', bags6: 'BAGS:-	', amountb6: '	N/A	',  urlb6: '		',
customer7: '	SOUGAAT GIFT (PANDARIYA)	', toys7: 'TOYS:-	', amount7: '	9009	',  url7: '	/2084377289testbysam/PANDARIYA/SOUGAAT GIFT (PANDARIYA).htm	', bags7: 'BAGS:-	', amountb7: '	N/A	',  urlb7: '		',
customer8: '	PRATHNA GENERAL (PANDARIYA)	', toys8: 'TOYS:-	', amount8: '	6	',  url8: '	/2084377289testbysam/PANDARIYA/PRATHNA GENERAL (PANDARIYA).htm	', bags8: 'BAGS:-	', amountb8: '	N/A	',  urlb8: '		',
customer9: '	SHOE POINT (PANDARIYA)	', toys9: 'TOYS:-	', amount9: '	1837	',  url9: '	/2084377289testbysam/PANDARIYA/SHOE POINT (PANDARIYA).htm	', bags9: 'BAGS:-	', amountb9: '	N/A	',  urlb9: '		',
												},
{id: 1, name: '	PANDATARAI', total: ' (	27629	)', 									
customer1: '	ARJUN GENERAL (PANDATARAI)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/PANDATARAI/ARJUN GENERAL (PANDATARAI) 181.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	DURGA GENERAL (PANDATARAI)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/PANDATARAI/DURGA GENERAL (PANDATARAI) 274.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	SATGURU	', toys3: 'TOYS:-	', amount3: '	5142	',  url3: '	/2084377289testbysam/PANDATARAI/SATGURU GENERAL (PANDATARAI)  162.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	VIDYA SUHAG	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/PANDATARAI/VIDYA SUHAG (PANDATARAI) 147.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	PREETI GENERAL (PANDATARAI)	', toys5: 'TOYS:-	', amount5: '	5702	',  url5: '	/2084377289testbysam/PANDATARAI/PREETI GENERAL. (PANDATARAI) 112.htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
customer6: '	GANESH (PANDATARAI)	', toys6: 'TOYS:-	', amount6: '	13175	',  url6: '	/2084377289testbysam/PANDATARAI/GANESH GENERAL (PANDATARAI)  279.htm	', bags6: 'BAGS:-	', amountb6: '	N/A	',  urlb6: '		',
customer7: '	PRACHI GENERAL (PANDATARAI)	', toys7: 'TOYS:-	', amount7: '	3610	',  url7: '	/2084377289testbysam/PANDATARAI/PRACHI GENERAL (PANDATARAI).htm	', bags7: 'BAGS:-	', amountb7: '	N/A	',  urlb7: '		',
												},
												
{id: 1, name: '	PANTORA ', total: '(	16673	)', 									
customer1: '	KRISHNA  KAPDA (PANTORA)	', toys1: 'TOYS:-	', amount1: ' 	16673	',  url1: '	/2084377289testbysam/PANTORA.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
												
{id: 1, name: '	PATHARIYA ', total: '(	29745	)', 									
customer1: '	AKASH BOOK DEPO (PATHARIYA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/PATHARIYA/AKASH%20BOOK%20DEPO%20(PATHARIYA)%20116.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	HARNARAYAN	', toys2: 'TOYS:-	', amount2: '	2095	',  url2: '	/2084377289testbysam/PATHARIYA/HARNARAYAN%20(PATHARIYA)%20%20199.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	MUKESH GENERAL 	', toys3: 'TOYS:-	', amount3: '	1	',  url3: '	/2084377289testbysam/PATHARIYA/MUKESH%20GENERAL%20(PATHARIYA)%20%20163.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	OM SAI KARAN (PATHARIYA)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/PATHARIYA/OM%20SAI%20(KARAN)%20.(PATHARIYA)%20%202.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	SHIV GENERAL (PATHARIYA)	', toys5: 'TOYS:-	', amount5: '	13639	',  url5: '	/2084377289testbysam/PATHARIYA/SHIV GENERAL .(PATHARIYA) 118.htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
customer6: '	SANTOSH GENERAL (PATHARIYA)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/PATHARIYA/SANTOSH%20PATHKAR.%20(PATHARIYA)%20192.htm	', bags6: 'BAGS:-	', amountb6: '	N/A	',  urlb6: '		',
customer7: '	PREETAM GENERAL (PATHARIYA)	', toys7: 'TOYS:-	', amount7: '	14000	',  url7: '	/2084377289testbysam/PATHARIYA/PREETAM%20(PATHARIYA)%20148.htm	', bags7: 'BAGS:-	', amountb7: '	N/A	',  urlb7: '		',
customer8: '	OM SUHAG (PATHARIYA)	', toys8: 'TOYS:-	', amount8: '	10	',  url8: '	/2084377289testbysam/PATHARIYA/OM%20SUHAG%20(PATHARIYA)%20%20100.htm	', bags8: 'BAGS:-	', amountb8: '	N/A	',  urlb8: '		',
customer9: '	LAXMI GENERAL (PATHARIYA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/PATHARIYA/LAXMI%20GENERAL%20(PATHARIYA).htm	', bags9: 'BAGS:-	', amountb9: '	N/A	',  urlb9: '		',
												},
{id: 1, name: '	PENDRA', total: ' (	141129	)', 									
customer1: '	SURYA GARMENTS (PENDRA)	', toys1: 'TOYS:-	', amount1: ' 	-30	',  url1: '	/2084377289testbysam/PENDRA/SURYA GARMENTS (PENDRA).htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	ARADHYA TRADERS	', toys2: 'TOYS:-	', amount2: '	14260	',  url2: '	/2084377289testbysam/PENDRA/ARADHYA GENERAL (PENDRA) 124.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	DECO POINT 	', toys3: 'TOYS:-	', amount3: '	1875	',  url3: '	/2084377289testbysam/PENDRA/DECO POINT (PENDRA) 33.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	PANDEY GENERAL	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/PENDRA/PANDEY GENERAL. (PENDRA)  140.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	R.T WOMENS	', toys5: 'TOYS:-	', amount5: '	20025	',  url5: '	/2084377289testbysam/PENDRA/R.T PENDRA (PENDRA) 88.htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
customer6: '	SADHANA PHOTO STUDIO	', toys6: 'TOYS:-	', amount6: '	3751	',  url6: '	/2084377289testbysam/PENDRA/SADHNA PHOTO STUDIO (PENDRA) 244.htm	', bags6: 'BAGS:-	', amountb6: '	N/A	',  urlb6: '		',
customer7: '	TIME CORNER (PENDRA)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/PENDRA/TIME CORNER. (PENDRA).htm	', bags7: 'BAGS:-	', amountb7: '	N/A	',  urlb7: '		',
customer8: '	SAI MAHASALE (PENDRA)	', toys8: 'TOYS:-	', amount8: '	31510	',  url8: '	/2084377289testbysam/PENDRA/SAI MAHASALE. (PENDRA) 176.htm	', bags8: 'BAGS:-	', amountb8: '	N/A	',  urlb8: '		',
customer9: '	SAI SAKTI (PENDRA)	', toys9: 'TOYS:-	', amount9: '	6575	',  url9: '	/2084377289testbysam/PENDRA/SAI SAKTI. (PENDRA) 186.htm	', bags9: 'BAGS:-	', amountb9: '	N/A	',  urlb9: '		',
customer10: '	POOJA JWELLERY (PENDRA)	', toys10: 'TOYS:-	', amount10: '	0	',  url10: '	/2084377289testbysam/PENDRA/POOJA JWELLERY. (PENDRA)  190.htm	', bags10: 'BAGS:-	', amountb10: '	N/A	',  urlb10: '		',
customer11: '	MAA SHARDA GIFT DEEPANSHU (PENDRA)	', toys11: 'TOYS:-	', amount11: '	0	',  url11: '	/2084377289testbysam/PENDRA/MAA SHARDA GIFT DEEPANSHU. (PENDRA).htm	', bags11: 'BAGS:-	', amountb11: '	N/A	',  urlb11: '		',
customer12: '	UPHAR GALLERY (PENDRA)	', toys12: 'TOYS:-	', amount12: '	0	',  url12: '	/2084377289testbysam/PENDRA/UPHAR GALLERY. (PENDRA) 198.htm	', bags12: 'BAGS:-	', amountb12: '	N/A	',  urlb12: '		',
customer13: '	GUPTA ENTERPRISES (PENDRA)	', toys13: 'TOYS:-	', amount13: '	33470	',  url13: '	/2084377289testbysam/PENDRA/GUPTA ENTERPRISES. (PENDRA) 200.htm	', bags13: 'BAGS:-	', amountb13: '	N/A	',  urlb13: '		',
customer14: '	SANJAY GENERAL (PENDRA)	', toys14: 'TOYS:-	', amount14: '	28829	',  url14: '	/2084377289testbysam/PENDRA/SANJAY GENERAL. (PENDRA).htm	', bags14: 'BAGS:-	', amountb14: '	N/A	',  urlb14: '		',
customer15: '	GANESH GENERAL (PENDRA)	', toys15: 'TOYS:-	', amount15: '		',  url15: '		', bags15: 'BAGS:-	', amountb15: '	N/A	',  urlb15: '		',
customer16: '	SONA GARMENTS (PENDRA)	', toys16: 'TOYS:-	', amount16: '	864	',  url16: '	/2084377289testbysam/PENDRA/SONA GARMENTS (PENDRA).htm	', bags16: 'BAGS:-	', amountb16: '	N/A	',  urlb16: '		',
												},
{id: 1, name: '	PODI ', total: '(	0	)', 									
customer1: '	SHIV SAHU (PODI)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/PODI/SHIV SAHU (PODI)  127.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	RAHOD', total: ' (	-1	)', 									
customer1: '	CHAAVI GENERAL 	', toys1: 'TOYS:-	', amount1: ' 	-1	',  url1: '	/2084377289testbysam/RAHOD/CHAVI (RAHOD) 12.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	RATANPUR ', total: '(	2681	)', 									
customer1: '	 GOLU RATANPUR	', toys1: 'TOYS:-	', amount1: ' 	360	',  url1: '	/2084377289testbysam/RATANPUR/GOLU (RATANPUR)  196.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	RAJA YADAV	', toys2: 'TOYS:-	', amount2: '	-1	',  url2: '	/2084377289testbysam/RATANPUR/RAJA YADAV (RATANPUR) 146.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	USHA CHAUHAN (RATANPUR)	', toys3: 'TOYS:-	', amount3: '	N/A	',  url3: '							',
customer4: '	RIYA GENERAL	', toys4: 'TOYS:-	', amount4: ' 	2322	',  url4: '	/2084377289testbysam/RATANPUR/RIYA. (RATANPUR)  253.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	SAKRI', total: '  (	4718	)', 									
customer1: '	GUPTA GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/SAKRI/GUPTA (SAKRI)  39.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	KAUSHIK GENERAL (SAKRI)	', toys2: 'TOYS:-	', amount2: '	189	',  url2: '	/2084377289testbysam/SAKRI/KAUSHIK GENERAL. (SAKRI) 261.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	SHRI RAM (SAKRI)	', toys3: 'TOYS:-	', amount3: '	4529	',  url3: '	/2084377289testbysam/SAKRI/SHRIRAM GENERAL (SAKRI)  20.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
												},
{id: 1, name: '	SAKTI ', total: '(	8396	)', 									
customer1: '	PAPPI GUPTA (SAKTI)	', toys1: 'TOYS:-	', amount1: ' 	-76	',  url1: '	/2084377289testbysam/SAKTI/PAPPI  GUPTA  (SAKTI).htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	DIWA FANCY (SAKTI)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/SAKTI/DIVA FANCY (SAKTI)  14.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	VIKAS (SAKTI)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/SAKTI/VIKAS (SAKTI) 296.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	ANMOL GIFT (SAKTI)	', toys4: 'TOYS:-	', amount4: '	8472	',  url4: '	/2084377289testbysam/SAKTI/ANMOL (SAKTI)  16.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	DULHAN SAARE (SAKTI)  	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/SAKTI/DULHA SAARE (SAKTI).htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
												},
{id: 1, name: '	SARAGAON ', total: '(	20679	)', 									
customer1: '	GOVIND KESARWANI	', toys1: 'TOYS:-	', amount1: ' 	20679	',  url1: '	/2084377289testbysam/SARAGAON/GOVIND KESARWANI (SARAGAON) 138.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	SARANGARH ', total: '(	37485	)', 									
customer1: '	VIKAS  TEXTILE (SARANGARH)	', toys1: 'TOYS:-	', amount1: ' 	470	',  url1: '	/2084377289testbysam/SARANGARH/VIKAS TEXTILE (SARANGARH).htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	ASHOK BOOK DEPO	', toys2: 'TOYS:-	', amount2: '	17545	',  url2: '	/2084377289testbysam/SARANGARH/ASHOK%20BOOK%20DEPO%20(SARANGARH)%209.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	KAMAL GENERAL (SARANGARH)	', toys3: 'TOYS:-	', amount3: '	14954	',  url3: '	/2084377289testbysam/SARANGARH/KAMAL (SARANGARH) 22_files.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	SANJAY STORE (SARANGARH)	', toys4: 'TOYS:-	', amount4: '	3361	',  url4: '	/2084377289testbysam/SARANGARH/SANJAY STORE (SARANGARH)  44.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	PRIYANKA GENERAL (SARANGARH)	', toys5: 'TOYS:-	', amount5: '	840	',  url5: '	/2084377289testbysam/SARANGARH/PRIYANKA (SARANGARH) 212.htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
customer6: '	SANTOSH VASTRALAY (SARANGARH)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/SARANGARH/SANTOSH VASTRALAY (SARANGARH) 220.htm	', bags6: 'BAGS:-	', amountb6: '	N/A	',  urlb6: '		',
customer7: '	NEW CLOTH STORE (SARANGARH)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/SARANGARH/NEW CLOTH (SARANGARH)  256.htm	', bags7: 'BAGS:-	', amountb7: '	N/A	',  urlb7: '		',
customer8: '	MAHALAXMI (SARANGARH)	', toys8: 'TOYS:-	', amount8: '	315	',  url8: '	/2084377289testbysam/SARANGARH/MAHALAXMI  GENERAL (SARANGARH).htm	', bags8: 'BAGS:-	', amountb8: '	N/A	',  urlb8: '		',
												},
{id: 1, name: '	SARGAON', total: ' (	3062	)', 									
customer1: '	SUNITA GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/SARGAON/SUNITA%20(SARGAON)%20%2047.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	RAJU FANCY STORE (SARGAON)	', toys2: 'TOYS:-	', amount2: '	-1	',  url2: '	/2084377289testbysam/SARGAON/RAJU%20(SARGAON)%2042.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	CHAYA GENERAL (SARGAON)	', toys3: 'TOYS:-	', amount3: '	3063	',  url3: '	/2084377289testbysam/SARGAON/CHAYA (SARGAON).htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
												},
{id: 1, name: '	SARSIWA ', total: '(	18969	)', 									
customer1: '	HEMA FANCY	', toys1: 'TOYS:-	', amount1: ' 	11084	',  url1: '	/2084377289testbysam/SARSIWA/HEMA FANCY (SARSIWA) 191.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	OM SAI SARSIWA	', toys2: 'TOYS:-	', amount2: '	1273	',  url2: '	/2084377289testbysam/SARSIWA/OM SAI (SARSIWA) 6.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	SHRIYA SHRINGAR (SARSIWA)	', toys3: 'TOYS:-	', amount3: '	6612	',  url3: '	/2084377289testbysam/SARSIWA/SHRIYA SHRINGAR (SARSIWA).htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	CHANDRAHASHNI (SARSIWA)	', toys4: 'TOYS:-	', amount4: '	2479	',  url4: '	/2084377289testbysam/SARSIWA/CHANDRAHASNI GENERAL (SARSIWA).htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
												},
												
{id: 1, name: '	SENDRI', total: ' (	0	)', 									
customer1: '	SHIVAM GENERAL	', toys1: 'TOYS:-	', amount1: ' 	 	',  url1: '	/2084377289testbysam/SENDRI/SHIVAM (SENDRI) 131.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	SHIVNI ', total: '(	18481	)', 									
customer1: '	KHAGESHWAR GENERAL	', toys1: 'TOYS:-	', amount1: ' 	15853	',  url1: '	/2084377289testbysam/SHIVNI/KHAGESHWAR (SHIVNI) 269.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	JAI AMBEL (SHIVNI)	', toys2: 'TOYS:-	', amount2: '	2629	',  url2: '	/2084377289testbysam/SHIVNI/JAI AMBE (SHIVNI) 208.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	NEW MAHAMAYA GENERAL (SHIVNI)	', toys3: 'TOYS:-	', amount3: '	-1	',  url3: '	/2084377289testbysam/SHIVNI/NEW MAHAMAYA GENERAL 2 (SHIVNI) (NEW 9).htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
												},
{id: 1, name: '	SHIVRINARAYN', total: ' (	13812	)', 									
customer1: '	MAHI SHRINGAR (SHIVRIN)	', toys1: 'TOYS:-	', amount1: ' 	1	',  url1: '	/2084377289testbysam/SHIVRINARAYAN/MAHI SHRINGAR (SHIVRINARAYN).htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	RUPESH  GENERAL	', toys2: 'TOYS:-	', amount2: '	5221	',  url2: '	/2084377289testbysam/SHIVRINARAYAN/RUPESH (SHIVRINARAYAN)  64.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	ATUL GENERAL	', toys3: 'TOYS:-	', amount3: '	375	',  url3: '	/2084377289testbysam/SHIVRINARAYAN/ATUL (SHIVRINARAYAN) 254.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	NARAYANI COLLECTION (SHIVRIN)	', toys4: 'TOYS:-	', amount4: '	8166	',  url4: '	/2084377289testbysam/SHIVRINARAYAN/NARAYANI (SHIVRINARAYAN) 136.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	LAXMI VASTRALAY (SHIVRI)	', toys5: 'TOYS:-	', amount5: '	49	',  url5: '	/2084377289testbysam/SHIVRINARAYAN/LAXMI VASTRALAY (SHIVRINARAYAN).htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
customer6: '	VIKAS GENERAL (SHIVRI)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/SHIVRINARAYAN/VIKAS GENERAL (SHIVRINARAYAN).htm	', bags6: 'BAGS:-	', amountb6: '	N/A	',  urlb6: '		',
												},
												
{id: 1, name: '	SILDHA', total: ' (	666	)', 									
customer1: '	SATYA NARAYAN (SILDHA)	', toys1: 'TOYS:-	', amount1: ' 	666	',  url1: '	/2084377289testbysam/SILDHA/SATYANARAYN (SILDHA).htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
												
												
{id: 1, name: '	SIPAT', total: ' (	12277	)', 									
customer1: '	DEEPAK GENERAL (SIPAT)	', toys1: 'TOYS:-	', amount1: ' 	2674	',  url1: '	/2084377289testbysam/SIPAT/DEEPAK%20(SIPAT)%2041.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	SITARAM  (SIPAT)	', toys2: 'TOYS:-	', amount2: '	9593	',  url2: '	/2084377289testbysam/SIPAT/SITARAM%20(SIPAT)%20%2094.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	SWARMANGLA GIFT HOUSE (SIPAT)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/SIPAT/SWARMANGLA%20(SIPAT).htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	SWARMANGLA PLASTIC (SIPAT)	', toys4: 'TOYS:-	', amount4: '	10	',  url4: '	/2084377289testbysam/SIPAT/SWARMANGLA%20PLASTIC%20(SIPAT)%20270.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
												},
{id: 1, name: '	SIRGITI ', total: '(	2314	)', 									
customer1: '	BABY SUHAG	', toys1: 'TOYS:-	', amount1: ' 	2313	',  url1: '	/2084377289testbysam/SIRGITI/BABY SUHAG (SIRGITTI) 21.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	KIRAN SIRGITI	', toys2: 'TOYS:-	', amount2: '		',  url2: '	<b><br>TOYS -	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	MAA KALI MUSIC (SIRGITI)	', toys3: 'TOYS:-	', amount3: '	1	',  url3: '	/2084377289testbysam/SIRGITI/MAA KALI MUSIC CENTER (SIRGITTI) 210.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
												},
{id: 1, name: '	TAKHATPUR', total: ' (	95869	)', 									
customer1: '	KISHAN (BELPAN)	', toys1: 'TOYS:-	', amount1: ' 	12445	',  url1: '	/2084377289testbysam/TAKHATPUR/KISHAN%20(BELPAN).htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	MAYUR GENERAL	', toys2: 'TOYS:-	', amount2: '	26686	',  url2: '	/2084377289testbysam/TAKHATPUR/MAYUR%20GENERAL%20(TAKHATPUR)%20276.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	MARUTI GENERAL (TAKHATPUR)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/TAKHATPUR/MARUTI%20(TAKAHTPUR)%2067.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	VIJAY STORE (TAKHATPUR)	', toys4: 'TOYS:-	', amount4: '	5075	',  url4: '	/2084377289testbysam/TAKHATPUR/VIJAY%20STORE%20(TAKHATPUR)%20-%20299.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	NAWAZ GENERAL	', toys5: 'TOYS:-	', amount5: '	8271	',  url5: '	/2084377289testbysam/TAKHATPUR/NAWAZ%20%20BHAI%20(TAKAHTPUR)%2075.htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
customer6: '	RAJESH GENERAL	', toys6: 'TOYS:-	', amount6: '	30000	',  url6: '	/2084377289testbysam/TAKHATPUR/RAJESH%20GENERAL%20(TAKAHTPUR)%20259.htm	', bags6: 'BAGS:-	', amountb6: '	N/A	',  urlb6: '		',
customer7: '	BHARAT BAG HOUSE	', toys7: 'TOYS:-	', amount7: '	13392	',  url7: '	/2084377289testbysam/TAKHATPUR/BHARAT%20BAG%20HOUSE%20(TAKHATPUR)%20194.htm	', bags7: 'BAGS:-	', amountb7: '	N/A	',  urlb7: '		',
												},
{id: 1, name: '	TAPKARA', total: ' (	13530	)', 									
customer1: '	 POOJA TAPKARA	', toys1: 'TOYS:-	', amount1: ' 	13530	',  url1: '	/2084377289testbysam/TAPKARA/POOJA (TAPKARA) 287.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	UDAIPUR ', total: '(	0	)', 									
customer1: '	PRIYA UDAIPUR	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/UDAIPUR/PRIYA  (UDAIPUR) 91.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	URGA', total: ' (	13096	)', 									
customer1: '	SHUSHMITA URGA	', toys1: 'TOYS:-	', amount1: ' 	13096	',  url1: '	/2084377289testbysam/URGA/SUSHMITA%20(URGA)%20125.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	USLAPUR', total: ' (	0	)', 									
customer1: '	SAI PROVISION	', toys1: 'TOYS:-	', amount1: ' 		',  url1: '		', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	VENKATNAGAR', total: ' (	16	)', 									
customer1: '	SANTOSH GENERAL	', toys1: 'TOYS:-	', amount1: ' 	16	',  url1: '	/2084377289testbysam/VENKATNAGAR/SANTOSH (VENKATNAGAR) 113.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
												
												
												
  ];												
  												
  return factory;												
}]);												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
