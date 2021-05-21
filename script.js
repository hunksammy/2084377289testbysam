var element = document.getElementById("id01");element.innerHTML = "PAGDI -	78.04%	&nbsp;&nbsp;P.LEFT	21.96%	&nbsp;&nbsp;UPDATE - 20/05/2021  	&nbsp;&nbsp;BAL -	1566208	";					
												
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
												
{id: 1, name: '	AKALTARA		', 									
customer1: '	VINOD GENERAL (AKALTARA)	', toys1: 'TOYS:-	', amount1: '	2186	',  url1: '	/2084377289testbysam/AKALTARA/VINOD GENERAL (AKALTARA).htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	CHANDAN GENERAL (AKALTARA)	', toys2: 'TOYS:-	', amount2: '	3653	',  url2: '	/2084377289testbysam/AKALTARA/CHANDAN%20GENERAL%20(AKALTARA)%2029.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	DEEPAK GENERAL (AKALTARA)	', toys3: 'TOYS:-	', amount3: '	2651	',  url3: '	/2084377289testbysam/AKALTARA/DEEPAK%20(AKALTARA)%20130.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	SHRIMANAGALM (AKALTARA)	', toys4: 'TOYS:-	', amount4: '	5944	',  url4: '	/2084377289testbysam/AKALTARA/SHRIMANGALAM%20(AKALTARA)%20298.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	SHARMA GENERAL  (AKALTARA)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/AKALTARA/SHARMA%20GENERAL%20(AKALTARA)%20282.htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
customer6: '	SS FANCY (AKALTARA)	', toys6: 'TOYS:-	', amount6: '	1915	',  url6: '	/2084377289testbysam/AKALTARA/SS%20FANCY%20(AKALTARA).htm	', bags6: 'BAGS:-	', amountb6: '	N/A	',  urlb6: '		',
customer7: '	KANHA GENERAL (AKALTARA)	', toys7: 'TOYS:-	', amount7: '	11521	',  url7: '	/2084377289testbysam/AKALTARA/KANHA%20GENERAL%20(AKALTARA)%2050.htm	', bags7: 'BAGS:-	', amountb7: '	N/A	',  urlb7: '		',
												},
{id: 1, name: '	BALCO		', 									
customer1: '	SACHIN COLLECTION (BALCO)	', toys1: 'TOYS:-	', amount1: '	0	',  url1: '	/2084377289testbysam/BALCO/SACHIN COLLECTION (BALCO) 84.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	UPHAR COLLECTION (BALCO)	', toys2: 'TOYS:-	', amount2: '	1611	',  url2: '	/2084377289testbysam/BALCO/UPHAR COLLECTION (BALCO) 272.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	NAVEEN ELECTRONICS (BALCO)	', toys3: 'TOYS:-	', amount3: '	3	',  url3: '	/2084377289testbysam/BALCO/NAVEEN ELECTRONICS (BALCO)  232.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
												},
{id: 1, name: '	BALODA		', 									
customer1: '	ESHWAR GENERAL (BALODA)	', toys1: 'TOYS:-	', amount1: ' 	17910	',  url1: '	/2084377289testbysam/BALODA/ESHWAR%20GENERAL%20(BALODA)%2098.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	SAKSHI (BALODA)	', toys2: 'TOYS:-	', amount2: '	8880	',  url2: '	/2084377289testbysam/BALODA/SAKSHI%20GENERAL%20(BALODA)%20152.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	SHASHANK BOOK DEPO (BALODA)	', toys3: 'TOYS:-	', amount3: '	4951	',  url3: '	/2084377289testbysam/BALODA/SHASHANK%20GENERAL%20(BALODA)%2058.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	VARDHAMAN GENERAL (BALODA)	', toys4: 'TOYS:-	', amount4: '	8906	',  url4: '	/2084377289testbysam/BALODA/VARDHAMAN%20GENERAL%20(BALODA)%20126.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	LOVE KIRANA (BALODA)	', toys5: 'TOYS:-	', amount5: '	30444	',  url5: '	/2084377289testbysam/BALODA/LOVE%20KIRANA%20(BALODA)%20193.htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
customer6: '	VICKEY GENERAL (BALODA)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/BALODA/VICKEY%20GENERAL%20(BALODA)%2082.htm	', bags6: 'BAGS:-	', amountb6: '	N/A	',  urlb6: '		',
customer7: '	SHIVAM GENERAL (BALODA)	', toys7: 'TOYS:-	', amount7: '	14150	',  url7: '	/2084377289testbysam/BALODA/SHIVAM%20GENERAL%20(BALODA)%20217.htm	', bags7: 'BAGS:-	', amountb7: '	N/A	',  urlb7: '		',
customer8: '	B.L GUPTA (BALODA)	', toys8: 'TOYS:-	', amount8: '	3	',  url8: '	/2084377289testbysam/BALODA/B.L%20GUPTA%20(BALODA)%20258.htm	', bags8: 'BAGS:-	', amountb8: '	N/A	',  urlb8: '		',
customer9: '	GOYAL GENERAL (BALODA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/BALODA/GOYAL%20GENERAL%20(BALODA)%20263.htm	', bags9: 'BAGS:-	', amountb9: '	N/A	',  urlb9: '		',
												},
{id: 1, name: '	BAMNIDIH		', 									
customer1: '	CHANDINI GIFT	', toys1: 'TOYS:-	', amount1: ' 	22751	',  url1: '	/2084377289testbysam/BAMNIDIH/CHANDAN%20GENERAL%20(AKALTARA)%2029.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	BARADWAR		', 									
customer1: '	ASHIRWAD GENERAL (BARADWAR)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/BARADWAR/ASHIRWAD GENERAL (BARADWAR) 13.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	SIDDHI VINAYAK (BARADWAR)	', toys2: 'TOYS:-	', amount2: '	3825	',  url2: '	/2084377289testbysam/BARADWAR/SIDDHI VINAYAK GENERAL (BARADWAR) 268.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	SAMRAT GENERAL (BARADWAR)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/BARADWAR/SAMRATH GENERAL (BARADWAR).htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	SAKTIYA SETH (BARADWAR)	', toys4: 'TOYS:-	', amount4: '	0	',  url4: '	/2084377289testbysam/BARADWAR/SAKTIYA SETH (BARADWAR) 219.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
												},
												
{id: 1, name: '	BELGEHNA		', 									
customer1: '	RINKU GENERAL (BELGEHNA)	', toys1: 'TOYS:-	', amount1: '	3496	',  url1: '	/2084377289testbysam/BELGEHNA/RINKU (BELGEHNA) 109.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
{id: 1, name: '	BELTARA		', 									
customer1: '	PRATAB (BELTARA)	', toys1: 'TOYS:-	', amount1: '	12092	',  url1: '	/2084377289testbysam/BELTARA/PRATAB (BELTARA) 294.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
												},
												
{id: 1, name: '	BHATGAON		', 									
customer1: '	DEEPANSHU (BHATGAON)	', toys1: 'TOYS:-	', amount1: ' 	3216	',  url1: '	/2084377289testbysam/BHATGAON/DEEPANSHU GENERAL (BHATGAON) 19.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	MANPASAND (BHATGAON)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/BHATGAON/MANPASAND (BHATGAON) 92.htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	RIYA GENERAL (BHATGAON)	', toys3: 'TOYS:-	', amount3: ' 	5196	',  url3: '	/2084377289testbysam/BHATGAON/RIYA GENERAL (BHATGAON) 280.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	NAMDEV (BHATGAON)	', toys4: 'TOYS:-	', amount4: '	2	',  url4: '	/2084377289testbysam/BHATGAON/NAMDEV GENERAL (BHATGAON) 83.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
												},
{id: 1, name: '	BHILAIGARH		', 									
customer1: '	SONU GENERAL (BHILAIGARH)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/BHILAIGARH/SONU GENERAL (BHILAIGARH) 52.htm	', bags1: 'BAGS:-	', amountb1: '	N/A	',  urlb1: '		',
customer2: '	SS  SUPER MARKET (BHILAIGARH)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/BHILAIGARH/SS  SUPER MARKET (BHILAIGARH).htm	', bags2: 'BAGS:-	', amountb2: '	N/A	',  urlb2: '		',
customer3: '	TANU GENERAL (BHILAIGARH)	', toys3: 'TOYS:-	', amount3: '	6016	',  url3: '	/2084377289testbysam/BHILAIGARH/TANU GENERAL (BHILAIGARH) 251.htm	', bags3: 'BAGS:-	', amountb3: '	N/A	',  urlb3: '		',
customer4: '	LALIT GENERAL (BHILAIGARH)	', toys4: 'TOYS:-	', amount4: '	0	',  url4: '	/2084377289testbysam/BHILAIGARH/LALIT GENERAL (BHILAIGARH) 57.htm	', bags4: 'BAGS:-	', amountb4: '	N/A	',  urlb4: '		',
customer5: '	DEWANGAN GENERAL (BHILAIGARH)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/BHILAIGARH/DEWANGAN GENERAL (BHILAIGARH) 218.htm	', bags5: 'BAGS:-	', amountb5: '	N/A	',  urlb5: '		',
												},
{id: 1, name: '	BILASPUR		', 									
customer1: '	BOMBAY FASHION (RAJKISHORE)	', toys1: 'TOYS:-	', amount1: ' 	21033	',  url1: '	/2084377289testbysam/BILASPUR/BOMBAY FASHION (RAJKISHORE).htm						',
customer2: '	MOHAN NAGOI (BILASPUR)	', toys2: 'TOYS:-	', amount2: '	12676	',  url2: '	/2084377289testbysam/BILASPUR/MOHAN NAGOI (BILASPUR) 128.htm						',
customer3: '	POOJA SHRINGAR (BILASPUR)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/BILASPUR/POOJA SHRINGARH (BILASPUR) 107.htm						',
customer4: '	AKASH GENERAL (BUDHWARI)	', toys4: 'TOYS:-	', amount4: '	18690	',  url4: '	/2084377289testbysam/BILASPUR/AKASH GENERAL STORE (BUDHWARI) - 295.htm						',
customer5: '	SIDDHI VINAYAK (BILASPUR)	', toys5: 'TOYS:-	', amount5: '	33002	',  url5: '	/2084377289testbysam/BILASPUR/SIDDHI VINAYAK (BILASPUR).htm						',
customer6: '	PUSTAK BHAWAN (BILASPUR)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/BILASPUR/PUSHTAK BHAWAN (BILASPUR).htm						',
customer7: '	SEEMA SHRIVASTAV (BILASPUR)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/BILASPUR/SEEMA SHRIVASTAV (BILASPUR) 278.htm						',
customer8: '	SONI GIFT (DEVIKHURDH) (BSP)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/BILASPUR/SONI GIFT DEVRIKHURDH (BILASPUR) 155.htm						',
customer9: '	VIJAY TOYS TELIPARA	', toys9: 'TOYS:-	', amount9: '	3180	',  url9: '	/2084377289testbysam/BILASPUR/VIJAY TOYS (TELIPARA).htm						',
												},
{id: 1, name: '	BILHA		', 									
customer1: '	PAYAL FANCY (BILHA)	', toys1: 'TOYS:-	', amount1: ' 	2726	',  url1: '	/2084377289testbysam/BILHA/PAYAL%20FANCY%20(BILHA)%2066.htm						',
customer2: '	KISAN MEGA BIG BAZAR (BILHA)	', toys2: 'TOYS:-	', amount2: '	878	',  url2: '	/2084377289testbysam/BILHA/KISAN%20MEGA%20BIG%20BAZAR%20(BILHA)%2031.htm						',
customer3: '	RAJA DAILY NEEDS (BILHA)	', toys3: 'TOYS:-	', amount3: '	2970	',  url3: '	/2084377289testbysam/BILHA/RAJA%20DAILY%20NEEDS%20(BILHA).htm						',
												},
												
{id: 1, name: '	BIRRA		', 									
customer1: '	TOMESH (BIRRA)	', toys1: 'TOYS:-	', amount1: '	0	',  url1: '	/2084377289testbysam/BIRRA/TOMESH%20(BIRRA).htm						',
												},
{id: 1, name: '	BOADTARA		', 									
customer1: '	PRIYAL GENERAL (BODTARA)	', toys1: 'TOYS:-	', amount1: ' 	17780	',  url1: '	/2084377289testbysam/BOADTARA/PRIYAL (BOADTARA) 26.htm						',
customer2: '	MONIKA FANCY STORE (BOADTARA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/BOADTARA/MONIKA FANCY STORE (BOADTARA).htm						',
customer3: '	PUNNET SAHU  (BOADTARA)	', toys3: 'TOYS:-	', amount3: '	-5	',  url3: '	/2084377289testbysam/BOADTARA/PUNNET RAM  SAHU  (BOADTARA).htm						',
												},
{id: 1, name: '	BORLA		', 									
customer1: '	KESARWANI CLOTH (BORLA)	', toys1: 'TOYS:-	', amount1: ' 	4952	',  url1: '	/2084377289testbysam/BORLA/KESARWANI CLOTH (BORLA).htm						',
												},
												
{id: 1, name: '	CHAKKARBHATA		', 									
customer1: '	MAHAMAYA THRED HOUSE (CHBT)	', toys1: 'TOYS:-	', amount1: ' 	7999	',  url1: '	/2084377289testbysam/CHAKKARBHATA/MAHAMAYA%20THREAD%20(CHAKKARBHATA)%20103.htm						',
customer2: '	MAHESH STD (CHBT)	', toys2: 'TOYS:-	', amount2: '	16523	',  url2: '	/2084377289testbysam/CHAKKARBHATA/MAHESH%20STD%20(CHAKKARBHATA)%20161.htm						',
customer3: '	NEW JAI MATA DI  (CHBT)	', toys3: 'TOYS:-	', amount3: '	3727	',  url3: '	/2084377289testbysam/CHAKKARBHATA/NEW%20JAIMATA%20DI%20(CHAKKARBHATA)%2081.htm						',
customer4: '	BABA GENERAL (CHBT)	', toys4: 'TOYS:-	', amount4: ' 	6504	',  url4: '	/2084377289testbysam/CHAKKARBHATA/BABA%20GENERAL%20(CHAKKARBHATA)%20%20188.htm						',
customer5: '	LAXMI KITABGHAR (CHBT)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/CHAKKARBHATA/LAXMI%20KITAB%20GHAR%20(CHAKKARBHATA).htm						',
customer6: '	SIDDARTH (CHBT)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/CHAKKARBHATA/SIDDARTH%20(CHAKKARBHATA)%20139.htm						',
												},
{id: 1, name: '	CHAMPA		', 									
customer1: '	AMIT SHRINGAR AND GIFT (CHAMPA)	', toys1: 'TOYS:-	', amount1: ' 	4	',  url1: '	/2084377289testbysam/CHAMPA/AMIT SHRINGAR AND GIFT (CHAMPA).htm						',
customer2: '	SOHAM GIFT (CHAMPA)	', toys2: 'TOYS:-	', amount2: '	229	',  url2: '	/2084377289testbysam/CHAMPA/SOHAM GIFT (CHAMPA) 86.htm						',
customer3: '	HEMA SHRINGAR (CHAMPA)	', toys3: 'TOYS:-	', amount3: '	7426	',  url3: '	/2084377289testbysam/CHAMPA/HEMA SUHAG (CHAMPA).htm						',
customer4: '	RANI GENERAL (CHAMPA)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/CHAMPA/RANI GENERAL STORE (CHAMPA).htm						',
customer5: '	SHRINGAR SADAN (CHAMPA)	', toys5: 'TOYS:-	', amount5: '	20	',  url5: '	/2084377289testbysam/CHAMPA/SHRINGAR SAADAN (CHAMPA) 284.htm						',
customer6: '	RADHA SWAMI (CHAMPA)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/CHAMPA/RADHA%20SWAMI%20(CHAMPA).htm						',
customer7: '	MOHSIN (CHAMPA)	', toys7: 'TOYS:-	', amount7: '	1061	',  url7: '	/2084377289testbysam/CHAMPA/MOHSIN BHAI (CHAMPA) 271.htm						',
customer8: '	MAA BHAGWATI (CHAMPA)	', toys8: 'TOYS:-	', amount8: '	24076	',  url8: '	/2084377289testbysam/CHAMPA/MAA BHAGWATI (CHAMPA) 238.htm						',
customer9: '	POOJA NOVELTY (CHAMPA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/CHAMPA/POOJAA NOVELTY (CHAMPA) 40.htm						',
customer10: '	KANHA SUPERBAZAR (CHAMPA)	', toys10: 'TOYS:-	', amount10: '	0	',  url10: '	/2084377289testbysam/CHAMPA/KANHA SUPER BAZAAR (CHAMPA) 262.htm						',
customer11: '	ANIL DHARMIK (CHAMPA)	', toys11: 'TOYS:-	', amount11: '	6283	',  url11: '	/2084377289testbysam/CHAMPA/ANIL DHARMIK (CHAMPA).htm						',
												},
{id: 1, name: '	CHURRI		', 									
customer1: '	NEHA GENERAL (CHURI)	', toys1: 'TOYS:-	', amount1: ' 	10340	',  url1: '	/2084377289testbysam/CHURI/NEHA%20(CHURRI)%2071.htm						',
customer2: '	MAA KAUSA GAI (CHURRI)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/CHURI/MAA%20KAUSA%20GAI%20(CHURRI)%20292.htm						',
												},
												
{id: 1, name: '	DABRA		', 									
customer1: '	FASHION PARK (DABRA)	', toys1: 'TOYS:-	', amount1: ' 	23359	',  url1: '	/2084377289testbysam/DABRA/FASHION PARK (DABRA) 297.htm						',
												},
{id: 1, name: '	DHARAMJAYGARH		', 									
customer1: '	AKANKSHA  (DHARAMJAYGARH)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/DHARMJAYGARH/AKANSHA GENERAL (DHARAMJAYGARH) 3.htm						',
												},
												
{id: 1, name: '	DIPKA		', 									
customer1: '	KOLKATA MAHASALE (DIPKA)	', toys1: 'TOYS:-	', amount1: ' 	22926	',  url1: '	/2084377289testbysam/DIPKA/KOLKATA%20MAHA%20SALE%20(DIPKA)%2048.htm						',
customer2: '	NEW BOOK DEPO (DIPKA)	', toys2: 'TOYS:-	', amount2: '	2	',  url2: '	/2084377289testbysam/DIPKA/NEW%20BOOK%20DEPO.%20(DIPKA)%20110.htm						',
customer3: '	GEETA BOOK DEPO (DIPKA)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/DIPKA/GEETA%20BOOK%20DEPO.%20(DIPKA)%20266.htm						',
customer4: '	SHANTI SUHAG (DIPKA)	', toys4: 'TOYS:-	', amount4: ' 	5910	',  url4: '	/2084377289testbysam/DIPKA/SHANTI%20SUHAG%20(DIPKA)%20129.htm						',
customer5: '	KHUSHI BENGALS (DIPKA)	', toys5: 'TOYS:-	', amount5: '	-1	',  url5: '	/2084377289testbysam/DIPKA/KHUSHI%20BENGALS%20(DIPKA)%204.htm						',
customer6: '	VASU COLLECTION  (DIPA)	', toys6: 'TOYS:-	', amount6: '	1597	',  url6: '	/2084377289testbysam/DIPKA/VASU%20COLLECTION.%20(DIPKA)%20149.htm						',
												},
{id: 1, name: '	GANYARI		', 									
customer1: '	MISHRA GENERAL (GANYARI)	', toys1: 'TOYS:-	', amount1: ' 	1300	',  url1: '	/2084377289testbysam/GANYARI/MISHRA (GANYARI) 154.htm						',
												},
{id: 1, name: '	GOBIRPATH		', 									
customer1: '	PREETY GOBRIPATH (GOBRIPATH)	', toys1: 'TOYS:-	', amount1: ' 	-55	',  url1: '	/2084377289testbysam/GOBRIPATH/PREETI (GOBRIPATH) 97.htm						',
												},
												
{id: 1, name: '	HARDIBAZAR		', 									
customer1: '	ASHWANI SHRINGAR (HARDIBAZAR)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/HARDIBAZAR/ASHWINI GENERAL (HARDIBAZAR) 174.htm						',
customer2: '	SANSKRITI GENERAL  (HARDIBAZAR)	', toys2: 'TOYS:-	', amount2: '	15828	',  url2: '	/2084377289testbysam/HARDIBAZAR/SANSKRITI GENERAL (HARDIBAZAR).htm						',
customer3: '	NIKHIL FANCY (HARDIBAZAR)	', toys3: 'TOYS:-	', amount3: '	9049	',  url3: '	/2084377289testbysam/HARDIBAZAR/NIKHIL FANCY (HARDIBAZAR) 281.htm						',
customer4: '	 SONI SHRINGAR (HARDIBAZAR)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/HARDIBAZAR/SONI SHRINGAR (HARDIBAZAR) 72.htm						',
customer5: '	MANOJ KAPDA BAZAR (HARDIBAZAR)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/HARDIBAZAR/MANOJ KAPDA (HARDIBAZAR) 252.htm						',
												},
{id: 1, name: '	HARDIKALA		', 									
customer1: '	MANMOHAN (HARDIKALA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/HARDIKALA/MANMOHAN (HARDIKALA) 69.htm						',
customer2: '	SANAJY  (HARDIKALA)	', toys2: 'TOYS:-	', amount2: '	3	',  url2: '	/2084377289testbysam/HARDIKALA/SANJAY. (HARDIKALA) 291.htm						',
												},
{id: 1, name: '	HASOD		', 									
customer1: '	LAXMI FANCY (HASOD)	', toys1: 'TOYS:-	', amount1: ' 	46	',  url1: '	/2084377289testbysam/HASOD/LAXMI%20GENERAL%20(HASOD)%20145.htm						',
customer2: '	SAHU FANCY (HASOD)	', toys2: 'TOYS:-	', amount2: '	7531	',  url2: '	/2084377289testbysam/HASOD/SAHU%20FANCY%20(HASOD)%20301.htm						',
customer3: '	REKHA FANCY STORE (HASOD)	', toys3: 'TOYS:-	', amount3: '	7770	',  url3: '	/2084377289testbysam/HASOD/REKHA%20FANCY%20STORE%20(HASOD).htm						',
customer4: '	CHAVI GENERAL (HASOD)	', toys4: 'TOYS:-	', amount4: ' 	2462	',  url4: '	/2084377289testbysam/HASOD/CHAVVI%20GENERAL%20(HASOD).htm						',
customer5: '	MAHARAJ FANCY (HASOD)	', toys5: 'TOYS:-	', amount5: '	3191	',  url5: '	/2084377289testbysam/HASOD/MAHARAJ%20FANCY%20STORE%20(HASOD).htm						',
												},
{id: 1, name: '	JAITHARI		', 									
customer1: '	SHIV PLASTIC (JAITHARI)	', toys1: 'TOYS:-	', amount1: ' 	27542	',  url1: '	/2084377289testbysam/JAITHARI/MUSKAN (JAITHARI) 79.htm						',
customer2: '	MUSKAN FANCY (JAITHARI)	', toys2: 'TOYS:-	', amount2: '	12336	',  url2: '	/2084377289testbysam/JAITHARI/SHIV PLASTICS (JAITHARI) 143.htm						',
												},
{id: 1, name: '	JANJGIR		', 									
customer1: '	GARIMA FANCY (JANJGIR)	', toys1: 'TOYS:-	', amount1: ' 	4507	',  url1: '	/2084377289testbysam/JANJGIR/GARIMA FANCY (JANJGIR) 166.htm						',
customer2: '	PRATEEK GENERAL  (JANJGIR)	', toys2: 'TOYS:-	', amount2: '	5251	',  url2: '	/2084377289testbysam/JANJGIR/PRATEEK GENERAL (JANJGIR) 150.htm						',
customer3: '	NAMDEV GENERAL (JANJGIR)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/JANJGIR/NAMDEV GENERAL (JANJGIR) 158.htm						',
customer4: '	SATYAM GENERAL (JANJGIR)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/JANJGIR/SATYAM GENERAL (JANJGIR) 132.htm						',
customer5: '	SUPER BAG HOUSE (JANJGIR)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/JANJGIR/SUPER BAG HOUSE (JANJGIR) 37.htm						',
customer6: '	AKASH GENERAL (JANJGIR)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/JANJGIR/AKASH GENERAL STORE (JANJGIR) 11.htm						',
												},
{id: 1, name: '	JHARSUKDA		', 									
customer1: '	 FASHION PARK (JHARSUKDA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/JHARSUKDA/FASHION PARK (JHARSUKDA) 167.htm						',
customer2: '	GUDDU (JHARSUKDA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/JHARSUKDA/GUDDU (JHARSUKDA) 43.htm						',
												},
{id: 1, name: '	KATGHORA		', 									
customer1: '	ROOP SHRINGAR	', toys1: 'TOYS:-	', amount1: ' 	9318	',  url1: '	/2084377289testbysam/KATGHORA/ROOP%20SHRINGAR%20(KATGHORA)%20173.htm						',
customer2: '	MAHABALI (KATGHORA)	', toys2: 'TOYS:-	', amount2: '	9956	',  url2: '	/2084377289testbysam/KATGHORA/MAHABALI.%20(KATGHORA)%2063.htm						',
customer3: '	KAREENA BOOT HOUSE (KATGHORA)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/KATGHORA/KAREENA%20BOOT%20(KATGHOTA)%20(NEW%2029).htm						',
customer4: '	PRADEEP BHAIYA (KATGHORA)	', toys4: 'TOYS:-	', amount4: ' 	35739	',  url4: '	/2084377289testbysam/KATGHORA/PRADEEP%20BHAI.%20(KATGHORA)%20123.htm						',
customer5: '	PADUKA BOOT HOUSE (KATGHORA)	', toys5: 'TOYS:-	', amount5: '	10198	',  url5: '	/2084377289testbysam/KATGHORA/PADUKA%20BOOT%20(KATGHORA)%20250.htm						',
												},
{id: 1, name: '	KATGI		', 									
customer1: '	VIDHYARTHI GENERAL (KATGI)	', toys1: 'TOYS:-	', amount1: ' 	3194	',  url1: '	/2084377289testbysam/KATGI/VIDYARTH GENERAL (KATGI) 106.htm						',
customer2: '	MANOJ FASHION	', toys2: 'TOYS:-	', amount2: '	16162	',  url2: '	/2084377289testbysam/KATGI/MANOJ FASHION (KATGI) 164.htm						',
customer3: '	MAHAMAYA GENERAL (KATGI)	', toys3: 'TOYS:-	', amount3: '	3135	',  url3: '	/2084377289testbysam/KATGI/MAHAMAYA GENERAL. (KATGI) 170.htm						',
customer4: '	JYOTI GENRAL (KATGI)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/KATGI/JYOTI GENERAL (KATGI) 10.htm						',
customer5: '	PAWAN GENERAL STORE (KATGI)	', toys5: 'TOYS:-	', amount5: '	33288	',  url5: '	/2084377289testbysam/KATGI/PAWAN GENERAL (KATGI) 38.htm						',
customer6: '	SAI GENERAL (KATGI)	', toys6: 'TOYS:-	', amount6: '	11798	',  url6: '	/2084377289testbysam/KATGI/SAI GENERAL (KATGI) 264.htm						',
customer7: '	SURAJ GENERAL (KATGI)	', toys7: 'TOYS:-	', amount7: '	18138	',  url7: '	/2084377289testbysam/KATGI/SURAJ GENERAL. (KATGI) 27.htm						',
customer8: '	MANOJ GENERAL (KATGI)	', toys8: 'TOYS:-	', amount8: '	5041	',  url8: '	/2084377289testbysam/KATGI/MANOJ GENERAL. (KATGI) 68.htm						',
												},
{id: 1, name: '	KAWARDHA		', 									
customer1: '	GURUDEV GENERAL (KAWARDHA)	', toys1: 'TOYS:-	', amount1: ' 	1970	',  url1: '	/2084377289testbysam/KAWARDHA/GURUDEV GENERAL (KAWARDHA).htm						',
												},
{id: 1, name: '	KHAMRIYA		', 									
customer1: '	FAIR DEAL (KHAMARIYA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KHAMARIYA/FAIR%20DEAL.%20(KHAMARIYA)%20%2015.htm						',
customer2: '	SHUBHAM GENERAL (KHAMARIYA)	', toys2: 'TOYS:-	', amount2: '	13171	',  url2: '	/2084377289testbysam/KHAMARIYA/SHUBHAM (KAMARIYA)  180.htm						',
												},
{id: 1, name: '	KHAMI		', 									
customer1: '	AMISHA GENERAL (KHAMI)	', toys1: 'TOYS:-	', amount1: ' 	2	',  url1: '	/2084377289testbysam/KHAMI/AMISHA GENERAL (KHAMI).htm						',
customer2: '	SAHU GENERAL (KHAMI)	', toys2: 'TOYS:-	', amount2: ' 	5365	',  url2: '	/2084377289testbysam/KHAMI/SAHU GENERAL (KHAMI).htm						',
												},
{id: 1, name: '	KARNODH		', 									
customer1: '	ASHOK KARNODH	', toys1: 'TOYS:-	', amount1: ' 	12	',  url1: '	/2084377289testbysam/KARNODH/ASHOK (KARNODH) 144.htm						',
												},
{id: 1, name: '	KHARSIYA		', 									
customer1: '	ABHINANDAN (KHARSIYA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KHARSIYA/ABHINANDAN (KHARSIYA).htm						',
customer2: '	KRISHAN COLLECTION (KHARSIYA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/KHARSIYA/KRISHAN COLLECTION (KHARSIYA).htm						',
												},
{id: 1, name: '	KHAROD		', 									
customer1: '	MOHAN GENERAL 	', toys1: 'TOYS:-	', amount1: ' 	1	',  url1: '	/2084377289testbysam/KHAROD/MOHAN (KHAROD)  65.htm						',
												},
{id: 1, name: '	KASHDOL		', 									
customer1: '	MAA SHETLA (KASHDOL)	', toys1: 'TOYS:-	', amount1: ' 	12	',  url1: '	/2084377289testbysam/KASHDOL/MAA SHETLA. (KASHDOL) 108.htm						',
customer2: '	BALAJI (KASHDOL)	', toys2: 'TOYS:-	', amount2: '	2	',  url2: '	/2084377289testbysam/KASHDOL/BALAJI. (KASHDOL) 288.htm						',
												},
{id: 1, name: '	KORBA		', 									
customer1: '	BANSAL ENTERPRISES	', toys1: 'TOYS:-	', amount1: ' 	1901	',  url1: '	/2084377289testbysam/KORBA/BANSAL%20ENTERPRISES%20(KOSABADI)%20160.htm						',
												},
{id: 1, name: '	KOTA		', 									
customer1: '	AGGARWAL GENERAL (KOTA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KOTA/AGGARWAL GENERAL. (KOTA) 30.htm						',
customer2: '	MAHAMAYA FASHION HOUSE	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/KOTA/MAHAMAYA FASHION HOUSE (KOTA) 18.htm						',
customer3: '	NISHA GENERAL (KOTA)	', toys3: 'TOYS:-	', amount3: '	5430	',  url3: '	/2084377289testbysam/KOTA/NISHA GENERAL (KOTA) 260.htm						',
customer4: '	NIKITA GENERAL (KOTA)	', toys4: 'TOYS:-	', amount4: ' 	1416	',  url4: '	/2084377289testbysam/KOTA/NIKITA (KOTA).htm						',
customer5: '	AKANKSHA GENERAL (KOTA)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/KOTA/AKANKSHA GENERAL(KOTA) 7.htm						',
customer6: '	SARITA GENERAL (KOTA)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/KOTA/SARITA GENERAL (KOTA).htm						',
customer7: '	SHAILESH GENERAL (KOTA)	', toys7: 'TOYS:-	', amount7: '	7741	',  url7: '	/2084377289testbysam/KOTA/SHAILESH GENERAL. (KOTA) 121.htm						',
customer8: '	ALL IN ONE (KOTA)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/KOTA/ALL IN ONE (KOTA).htm						',
customer9: '	KALPANA GENERAL BABAN (KOTA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/KOTA/KALPANA (KOTA) 85.htm						',
customer10: '	AKANKSHA GENERAL (BABLU) (KOTA)	', toys10: 'TOYS:-	', amount10: '	510	',  url10: '	/2084377289testbysam/KOTA/AKANKSHA GENERAL BABLO (KOTA) 122.htm						',
												},
{id: 1, name: '	KOTMISONAR		', 									
customer1: '	JANVI GENERAL (KOTMISONAR)	', toys1: 'TOYS:-	', amount1: ' 		',  url1: '							',
												},
{id: 1, name: '	KUNDA		', 									
customer1: '	CHANDRAKAR GENERAL	', toys1: 'TOYS:-	', amount1: ' 	907	',  url1: '	/2084377289testbysam/KUNDA/CHANDRAKAR GENERAL (KUNDA) 102.htm						',
customer2: '	SHREE RADHA RANI (KUNDA)	', toys2: 'TOYS:-	', amount2: '	4930	',  url2: '	/2084377289testbysam/KUNDA/SHREE RADHA RANI (KUNDA).htm						',
customer3: '	SHRIRAM GENERAL (KUNDA)	', toys3: 'TOYS:-	', amount3: '	1	',  url3: '	/2084377289testbysam/KUNDA/SHRIRAM GENERAL. (KUNDA) 34.htm						',
												},
{id: 1, name: '	LAWAN		', 									
customer1: '	VINOD LAWAN	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/LAWAN/VINOD (LAWAN).htm						',
												},
{id: 1, name: '	LORMI		', 									
customer1: '	NANDANI GENERAL (LORMI)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/LORMI/NANDINI GENERAL (LORMI) 172.htm						',
customer2: '	ASHISH GENERAL (LORMI)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/LORMI/ASHISH GENERAL .(LORMI) (NEW 5).htm						',
customer3: '	KESARWANI (LORMI)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/LORMI/KESARWANI GIFT (LORMI) 275.htm						',
customer4: '	KANHA COLLECTION (LORMI)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/LORMI/KANHA COLLECTION .(LORMI).htm						',
customer5: '	KAVYA GENERAL (LORMI)	', toys5: 'TOYS:-	', amount5: ' 	0	',  url5: '	/2084377289testbysam/LORMI/KAVYA GENERAL (LORMI) (NEW 33).htm						',
customer6: '	MAMTA GENERAL (LORMI)	', toys6: 'TOYS:-	', amount6: ' 	1	',  url6: '	/2084377289testbysam/LORMI/MAMTA LORMI.htm						',
												},
{id: 1, name: '	MALHAR		', 									
customer1: '	ANKIT FANCY (MALHAR)	', toys1: 'TOYS:-	', amount1: ' 	15080	',  url1: '	/2084377289testbysam/MALHAR/ANKITA (MALHAR) (NEW 7).htm						',
customer2: '	PURVI FANCY (MALHAR)	', toys2: 'TOYS:-	', amount2: '	34545	',  url2: '	/2084377289testbysam/MALHAR/PURVI FANCY (MALHAR) 290.htm						',
customer3: '	JAANVI GENERAL (MALHAR)	', toys3: 'TOYS:-	', amount3: '	15812	',  url3: '	/2084377289testbysam/MALHAR/JANVI GENERAL (MALHAR) 25.htm						',
customer4: '	JITENDRA (MALHAR)	', toys4: 'TOYS:-	', amount4: ' 	1316	',  url4: '	/2084377289testbysam/MALHAR/JITENDRA (MALHAR) 168.htm						',
												},
{id: 1, name: '	MALKHARODA		', 									
customer1: '	PARI FANCY	', toys1: 'TOYS:-	', amount1: ' 	19833	',  url1: '	/2084377289testbysam/MALKHAROD/PARI FANCY (MALKHAROD) 184.htm						',
												},
{id: 1, name: '	MANENDRAGARH		', 									
customer1: '	AISHWARIYA GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/MANENDRAGARH/AISHWARIYA (MANENDRAGARH).htm						',
												},
{id: 1, name: '	MARO		', 									
customer1: '	RAJA MARO (MARO)	', toys1: 'TOYS:-	', amount1: ' 	9041	',  url1: '	/2084377289testbysam/MARO/RAJA (MARO).htm						',
customer2: '	ANMOL  (MARO)	', toys2: 'TOYS:-	', amount2: '	4	',  url2: '	/2084377289testbysam/MARO/ANMOL (MARO).htm						',
												},
{id: 1, name: '	MARWAHI		', 									
customer1: '	LAXMI GENERAL (MARWAHI)	', toys1: 'TOYS:-	', amount1: ' 	18247	',  url1: '	/2084377289testbysam/MARWAHI/LAXMI GENERAL .(MARWAHI) 240.htm						',
customer2: '	JAFFAR BOOT (MARWAHI)	', toys2: 'TOYS:-	', amount2: '	10227	',  url2: '	/2084377289testbysam/MARWAHI/JAFFAR BOOT .(MARWAHI) 5.htm						',
												},
{id: 1, name: '	MASTURI		', 									
customer1: '	KISHORE RIKSHAW	', toys1: 'TOYS:-	', amount1: ' 	12028	',  url1: '	/2084377289testbysam/MASTURI/KISHORE RIKSHAW (MASTURI) 114.htm						',
customer2: '	LAXMI GENERAL	', toys2: 'TOYS:-	', amount2: '	6800	',  url2: '	/2084377289testbysam/MASTURI/LAXMI GENERAL (MASTURI) 273.htm						',
												},
{id: 1, name: '	MOHGAON		', 									
customer1: '	MANISH GENERAL	', toys1: 'TOYS:-	', amount1: ' 	7171	',  url1: '	/2084377289testbysam/MOHAGAON/MANISH (MOHGAON) 156.htm						',
												},
{id: 1, name: '	MUNGELI		', 									
customer1: '	TOY ZONE 	', toys1: 'TOYS:-	', amount1: ' 	7820	',  url1: '	/2084377289testbysam/MUNGELI/TOY%20ZONE%20(MUNGELI).htm						',
customer2: '	BABA GENERAL	', toys2: 'TOYS:-	', amount2: '	-1	',  url2: '	/2084377289testbysam/MUNGELI/BABA%20GENERAL%20(MUNGELI)%20%2023.htm						',
customer3: '	GURUNANAK GENERAL	', toys3: 'TOYS:-	', amount3: '	1570	',  url3: '	/2084377289testbysam/MUNGELI/GURUNANAK%20GENERAL%20(MUNGELI)%2076.htm						',
customer4: '	 JEENAT BENGALS (MUNGELI)	', toys4: 'TOYS:-	', amount4: ' 	17995	',  url4: '	/2084377289testbysam/MUNGELI/ZEENAT%20BENGALS%20(MUNGELI)%2045.htm						',
customer5: '	PAYAL BAG HOUSE	', toys5: 'TOYS:-	', amount5: '	1360	',  url5: '	/2084377289testbysam/MUNGELI/PAYAL%20BAG%20(MUNGELI)%20171.htm						',
customer6: '	PRIYA LADIES	', toys6: 'TOYS:-	', amount6: '	2981	',  url6: '	/2084377289testbysam/MUNGELI/PRIYA%20LADIES%20(MUNGELI)%2099.htm						',
customer7: '	SANGAM FANCY	', toys7: 'TOYS:-	', amount7: '	12384	',  url7: '	/2084377289testbysam/MUNGELI/SANGAM%20FANCY%20(MUNGELI)%20(NEW%20169).htm						',
customer8: '	OM GENERAL (MUNGELI)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/MUNGELI/OM%20GENERAL%20(MUNGELI)%2087.htm						',
												},
{id: 1, name: '	PACHPEDI		', 									
customer1: '	VINAY GENERAL (PACHPEDI)	', toys1: 'TOYS:-	', amount1: ' 	25551	',  url1: '	/2084377289testbysam/PACHPEDI/VINAY (PACHPEDI) 24.htm						',
customer2: '	SAHIL (PACHPEDI)	', toys2: 'TOYS:-	', amount2: '	-4	',  url2: '	/2084377289testbysam/PACHPEDI/SAHIL (PACHPEDI) 119.htm						',
												},
{id: 1, name: '	PAMGARH		', 									
customer1: '	BABA SCHOOL POINT (PAMGARH)	', toys1: 'TOYS:-	', amount1: ' 	-3	',  url1: '	/2084377289testbysam/PAMGARH/BABA%20SCHOOL%20POINT%20(PAMGARH)%2090.htm						',
customer2: '	KABIR (PAMGARH)	', toys2: 'TOYS:-	', amount2: ' 	5620	',  url2: '	/2084377289testbysam/PAMGARH/KABIR (PAMGARH).htm						',
												},
												
{id: 1, name: '	PALI		', 									
customer1: '	ARADHYA GENERAL (PALI)	', toys1: 'TOYS:-	', amount1: ' 	2	',  url1: '	/2084377289testbysam/PALI/ARADHYA GENERAL (PALI).htm						',
customer2: '	JAI  MAHAMAYA (PALI)	', toys2: 'TOYS:-	', amount2: '	5764	',  url2: '	/2084377289testbysam/PALI/JAI%20MAHAMAYA%20(PALI)%20267.htm						',
customer3: '	SHIV BEEJ	', toys3: 'TOYS:-	', amount3: '	9	',  url3: '	/2084377289testbysam/PALI/SHIV%20BEEJ%20(PALI)%20255.htm						',
customer4: '	DEEPAK READYMATE (PALI)	', toys4: 'TOYS:-	', amount4: ' 	10	',  url4: '	/2084377289testbysam/PALI/DEEPAK%20READYMATE%20(PALI).htm						',
customer5: '	SHRIJAN	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/PALI/SHRIJAN%20(PALI)%20116.htm						',
customer6: '	SUMIT COLLECTION PALI	', toys6: 'TOYS:-	', amount6: '	2	',  url6: '	/2084377289testbysam/PALI/SUMIT%20COLLECTION%20.(PALI)%20285.htm						',
customer7: '	UPHAR COLLECTION PALI	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/PALI/UPHAR%20COLLECTION%20(PALI)%20179.htm						',
customer8: '	SANJAY BOOK DEPO (PALI)	', toys8: 'TOYS:-	', amount8: '	1	',  url8: '	/2084377289testbysam/PALI/SANJAY%20BOOK%20DEPO.%20(PALI)%2054.htm						',
customer9: '	SANJAY GIFT (PALI)	', toys9: 'TOYS:-	', amount9: '	16331	',  url9: '	/2084377289testbysam/PALI/SANJAY%20GIFT.%20(PALI)%20183.htm						',
customer10: '	KHUSHI GENERAL (PALI)	', toys10: 'TOYS:-	', amount10: '	16	',  url10: '	/2084377289testbysam/PALI/KHUSHI GENERAL (PALI).htm						',
												},
{id: 1, name: '	PANDARIYA		', 									
customer1: '	FIZZA GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/PANDARIYA/FIZZA GENERAL (PANDARIYA)  32.htm						',
customer2: '	MARUTI GENERAL (PANDARIYA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/PANDARIYA/MARUTI GENERAL (PANDARIYA)  178.htm						',
customer3: '	MATESHWARI (PANDARIYA)	', toys3: 'TOYS:-	', amount3: '	6820	',  url3: '	/2084377289testbysam/PANDARIYA/MATESHWARI .(PANDARIYA) 95.htm						',
customer4: '	OM SATIONARY (PANDARIYA)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/PANDARIYA/OM SATIONARY (PANDARIYA).htm						',
customer5: '	GURUANAK GENERAL (PANDARIYA)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/PANDARIYA/GURUNANAK GENERAL (PANDARIYA) 300.htm						',
customer6: '	ABHAY GENERAL (PANDARIYA)	', toys6: 'TOYS:-	', amount6: '	8004	',  url6: '	/2084377289testbysam/PANDARIYA/ABHAY GENERAL (PANDARIYA) 242.htm						',
customer7: '	SOUGAAT GIFT (PANDARIYA)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/PANDARIYA/SOUGAAT GIFT (PANDARIYA).htm						',
customer8: '	PRATHNA GENERAL (PANDARIYA)	', toys8: 'TOYS:-	', amount8: '	4356	',  url8: '	/2084377289testbysam/PANDARIYA/PRATHNA GENERAL (PANDARIYA).htm						',
												},
{id: 1, name: '	PANDATARAI		', 									
customer1: '	ARJUN GENERAL (PANDATARAI)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/PANDATARAI/ARJUN GENERAL (PANDATARAI) 181.htm						',
customer2: '	DURGA GENERAL (PANDATARAI)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/PANDATARAI/DURGA GENERAL (PANDATARAI) 274.htm						',
customer3: '	SATGURU	', toys3: 'TOYS:-	', amount3: '	26647	',  url3: '	/2084377289testbysam/PANDATARAI/SATGURU GENERAL (PANDATARAI)  162.htm						',
customer4: '	VIDYA SUHAG	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/PANDATARAI/VIDYA SUHAG (PANDATARAI) 147.htm						',
customer5: '	PREETI GENERAL (PANDATARAI)	', toys5: 'TOYS:-	', amount5: '	13702	',  url5: '	/2084377289testbysam/PANDATARAI/PREETI GENERAL. (PANDATARAI) 112.htm						',
customer6: '	GANESH (PANDATARAI)	', toys6: 'TOYS:-	', amount6: '	25145	',  url6: '	/2084377289testbysam/PANDATARAI/GANESH GENERAL (PANDATARAI)  279.htm						',
customer7: '	PRACHI GENERAL (PANDATARAI)	', toys7: 'TOYS:-	', amount7: '	23110	',  url7: '	/2084377289testbysam/PANDATARAI/PRACHI GENERAL (PANDATARAI).htm						',
												},
												
{id: 1, name: '	PANTORA		', 									
customer1: '	KRISHNA  KAPDA (PANTORA)	', toys1: 'TOYS:-	', amount1: ' 	2570	',  url1: '	/2084377289testbysam/PANTORA.htm						',
												},
												
{id: 1, name: '	PATHARIYA		', 									
customer1: '	AKASH BOOK DEPO (PATHARIYA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/PATHARIYA/AKASH%20BOOK%20DEPO%20(PATHARIYA)%20116.htm						',
customer2: '	HARNARAYAN	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/PATHARIYA/HARNARAYAN%20(PATHARIYA)%20%20199.htm						',
customer3: '	MUKESH GENERAL 	', toys3: 'TOYS:-	', amount3: '	1	',  url3: '	/2084377289testbysam/PATHARIYA/MUKESH%20GENERAL%20(PATHARIYA)%20%20163.htm						',
customer4: '	OM SAI KARAN (PATHARIYA)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/PATHARIYA/OM%20SAI%20(KARAN)%20.(PATHARIYA)%20%202.htm						',
customer5: '	SHIV GENERAL (PATHARIYA)	', toys5: 'TOYS:-	', amount5: '	11444	',  url5: '	/2084377289testbysam/PATHARIYA/SHIV GENERAL .(PATHARIYA) 118.htm						',
customer6: '	SANTOSH GENERAL (PATHARIYA)	', toys6: 'TOYS:-	', amount6: '	5359	',  url6: '	/2084377289testbysam/PATHARIYA/SANTOSH%20PATHKAR.%20(PATHARIYA)%20192.htm						',
customer7: '	PREETAM GENERAL (PATHARIYA)	', toys7: 'TOYS:-	', amount7: '	11623	',  url7: '	/2084377289testbysam/PATHARIYA/PREETAM%20(PATHARIYA)%20148.htm						',
customer8: '	OM SUHAG (PATHARIYA)	', toys8: 'TOYS:-	', amount8: '	10	',  url8: '	/2084377289testbysam/PATHARIYA/OM%20SUHAG%20(PATHARIYA)%20%20100.htm						',
customer9: '	LAXMI GENERAL (PATHARIYA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/PATHARIYA/LAXMI%20GENERAL%20(PATHARIYA).htm						',
												},
{id: 1, name: '	PENDRA		', 									
customer1: '	SURYA GARMENTS (PENDRA)	', toys1: 'TOYS:-	', amount1: ' 	6832	',  url1: '	/2084377289testbysam/PENDRA/SURYA GARMENTS (PENDRA).htm						',
customer2: '	ARADHYA TRADERS	', toys2: 'TOYS:-	', amount2: '	13010	',  url2: '	/2084377289testbysam/PENDRA/ARADHYA GENERAL (PENDRA) 124.htm						',
customer3: '	DECO POINT 	', toys3: 'TOYS:-	', amount3: '	3000	',  url3: '	/2084377289testbysam/PENDRA/DECO POINT (PENDRA) 33.htm						',
customer4: '	PANDEY GENERAL	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/PENDRA/PANDEY GENERAL. (PENDRA)  140.htm						',
customer5: '	R.T WOMENS	', toys5: 'TOYS:-	', amount5: '	35025	',  url5: '	/2084377289testbysam/PENDRA/R.T PENDRA (PENDRA) 88.htm						',
customer6: '	SADHANA PHOTO STUDIO	', toys6: 'TOYS:-	', amount6: '	11002	',  url6: '	/2084377289testbysam/PENDRA/SADHNA PHOTO STUDIO (PENDRA) 244.htm						',
customer7: '	TIME CORNER (PENDRA)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/PENDRA/TIME CORNER. (PENDRA).htm						',
customer8: '	SAI MAHASALE (PENDRA)	', toys8: 'TOYS:-	', amount8: '	37567	',  url8: '	/2084377289testbysam/PENDRA/SAI MAHASALE. (PENDRA) 176.htm						',
customer9: '	SAI SAKTI (PENDRA)	', toys9: 'TOYS:-	', amount9: '	7843	',  url9: '	/2084377289testbysam/PENDRA/SAI SAKTI. (PENDRA) 186.htm						',
customer10: '	POOJA JWELLERY (PENDRA)	', toys10: 'TOYS:-	', amount10: '	0	',  url10: '	/2084377289testbysam/PENDRA/POOJA JWELLERY. (PENDRA)  190.htm						',
customer11: '	MAA SHARDA GIFT DEEPANSHU (PENDRA)	', toys11: 'TOYS:-	', amount11: '	0	',  url11: '	/2084377289testbysam/PENDRA/SONA GARMENTS (PENDRA)_files.htm						',
customer12: '	UPHAR GALLERY (PENDRA)	', toys12: 'TOYS:-	', amount12: '	5860	',  url12: '	/2084377289testbysam/PENDRA/UPHAR GALLERY. (PENDRA) 198.htm						',
customer13: '	GUPTA ENTERPRISES (PENDRA)	', toys13: 'TOYS:-	', amount13: '	28147	',  url13: '	/2084377289testbysam/PENDRA/GUPTA ENTERPRISES. (PENDRA) 200.htm						',
customer14: '	SANJAY GENERAL (PENDRA)	', toys14: 'TOYS:-	', amount14: '	25175	',  url14: '	/2084377289testbysam/PENDRA/SANJAY GENERAL. (PENDRA).htm						',
customer15: '	GANESH GENERAL (PENDRA)	', toys15: 'TOYS:-	', amount15: '		',  url15: '							',
customer16: '	SONA GARMENTS (PENDRA)	', toys16: 'TOYS:-	', amount16: '	11138	',  url16: '	/2084377289testbysam/PENDRA/SONA GARMENTS (PENDRA).htm						',
												},
{id: 1, name: '	PODI		', 									
customer1: '	SHIV SAHU (PODI)	', toys1: 'TOYS:-	', amount1: ' 	3348	',  url1: '	/2084377289testbysam/PODI/SHIV SAHU (PODI)  127.htm						',
												},
{id: 1, name: '	RAHOD		', 									
customer1: '	CHAAVI GENERAL 	', toys1: 'TOYS:-	', amount1: ' 	-1	',  url1: '	/2084377289testbysam/RAHOD/CHAVI (RAHOD) 12.htm						',
												},
{id: 1, name: '	RATANPUR		', 									
customer1: '	 GOLU RATANPUR	', toys1: 'TOYS:-	', amount1: ' 	84	',  url1: '	/2084377289testbysam/RATANPUR/GOLU (RATANPUR)  196.htm						',
customer2: '	RAJA YADAV	', toys2: 'TOYS:-	', amount2: '	-1	',  url2: '	/2084377289testbysam/RATANPUR/RAJA YADAV (RATANPUR) 146.htm						',
customer3: '	USHA CHAUHAN (RATANPUR)	', toys3: 'TOYS:-	', amount3: '	N/A	',  url3: '							',
customer4: '	RIYA GENERAL	', toys4: 'TOYS:-	', amount4: ' 	10	',  url4: '	/2084377289testbysam/RATANPUR/RIYA. (RATANPUR)  253.htm						',
												},
{id: 1, name: '	SAKRI		', 									
customer1: '	GUPTA GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/SAKRI/GUPTA (SAKRI)  39.htm						',
customer2: '	KAUSHIK GENERAL (SAKRI)	', toys2: 'TOYS:-	', amount2: '	189	',  url2: '	/2084377289testbysam/SAKRI/KAUSHIK GENERAL. (SAKRI) 261.htm						',
customer3: '	SHRI RAM (SAKRI)	', toys3: 'TOYS:-	', amount3: '	4529	',  url3: '	/2084377289testbysam/SAKRI/SHRIRAM GENERAL (SAKRI)  20.htm						',
												},
{id: 1, name: '	SAKTI		', 									
customer1: '	PAPPI GUPTA (SAKTI)	', toys1: 'TOYS:-	', amount1: ' 	-76	',  url1: '	/2084377289testbysam/SAKTI/PAPPI  GUPTA  (SAKTI).htm						',
customer2: '	DIWA FANCY (SAKTI)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/SAKTI/DIVA FANCY (SAKTI)  14.htm						',
customer3: '	VIKAS (SAKTI)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/SAKTI/VIKAS (SAKTI) 296.htm						',
customer4: '	ANMOL GIFT (SAKTI)	', toys4: 'TOYS:-	', amount4: '	6925	',  url4: '	/2084377289testbysam/SAKTI/ANMOL (SAKTI)  16.htm						',
customer5: '	DULHAN SAARE (SAKTI)  	', toys5: 'TOYS:-	', amount5: '	11670	',  url5: '	/2084377289testbysam/SAKTI/DULHA SAARE (SAKTI).htm						',
												},
{id: 1, name: '	SARAGAON		', 									
customer1: '	GOVIND KESARWANI	', toys1: 'TOYS:-	', amount1: ' 	7004	',  url1: '	/2084377289testbysam/SARAGAON/GOVIND KESARWANI (SARAGAON) 138.htm						',
												},
{id: 1, name: '	SARANGARH		', 									
customer1: '	VIKAS  TEXTILE (SARANGARH)	', toys1: 'TOYS:-	', amount1: ' 	470	',  url1: '	/2084377289testbysam/SARANGARH/VIKAS TEXTILE (SARANGARH).htm						',
customer2: '	ASHOK BOOK DEPO	', toys2: 'TOYS:-	', amount2: '	8	',  url2: '	/2084377289testbysam/SARANGARH/ASHOK%20BOOK%20DEPO%20(SARANGARH)%209.htm						',
customer3: '	KAMAL GENERAL (SARANGARH)	', toys3: 'TOYS:-	', amount3: '	17900	',  url3: '	/2084377289testbysam/SARANGARH/KAMAL (SARANGARH) 22.htm						',
customer4: '	SANJAY STORE (SARANGARH)	', toys4: 'TOYS:-	', amount4: '	-2	',  url4: '	/2084377289testbysam/SARANGARH/SANJAY STORE (SARANGARH)  44.htm						',
customer5: '	PRIYANKA GENERAL (SARANGARH)	', toys5: 'TOYS:-	', amount5: '	840	',  url5: '	/2084377289testbysam/SARANGARH/PRIYANKA (SARANGARH) 212.htm						',
customer6: '	SANTOSH VASTRALAY (SARANGARH)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/SARANGARH/SANTOSH VASTRALAY (SARANGARH) 220.htm						',
customer7: '	NEW CLOTH STORE (SARANGARH)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/SARANGARH/NEW CLOTH (SARANGARH)  256.htm						',
customer8: '	MAHALAXMI (SARANGARH)	', toys8: 'TOYS:-	', amount8: '	1488	',  url8: '	/2084377289testbysam/SARANGARH/MAHALAXMI  GENERAL (SARANGARH).htm						',
												},
{id: 1, name: '	SARGAON		', 									
customer1: '	SUNITA GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/SARGAON/SUNITA%20(SARGAON)%20%2047.htm						',
customer2: '	RAJU FANCY STORE (SARGAON)	', toys2: 'TOYS:-	', amount2: '	-1	',  url2: '	/2084377289testbysam/SARGAON/RAJU%20(SARGAON)%2042.htm						',
												},
{id: 1, name: '	SARSIWA		', 									
customer1: '	HEMA FANCY	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/SARSIWA/HEMA FANCY (SARSIWA) 191.htm						',
customer2: '	OM SAI SARSIWA	', toys2: 'TOYS:-	', amount2: '	12755	',  url2: '	/2084377289testbysam/SARSIWA/OM SAI (SARSIWA) 6.htm						',
customer3: '	SHRIYA SHRINGAR (SARSIWA)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/SARSIWA/SHRIYA SHRINGAR (SARSIWA).htm						',
												},
												
{id: 1, name: '	SENDRI		', 									
customer1: '	SHIVAM GENERAL	', toys1: 'TOYS:-	', amount1: ' 	3	',  url1: '	/2084377289testbysam/SENDRI/SHIVAM (SENDRI) 131.htm						',
												},
{id: 1, name: '	SHIVNI		', 									
customer1: '	KHAGESHWAR GENERAL	', toys1: 'TOYS:-	', amount1: ' 	14965	',  url1: '	/2084377289testbysam/SHIVNI/KHAGESHWAR (SHIVNI) 269.htm						',
customer2: '	JAI AMBEL (SHIVNI)	', toys2: 'TOYS:-	', amount2: '	2647	',  url2: '	/2084377289testbysam/SHIVNI/JAI AMBE (SHIVNI) 208.htm						',
customer3: '	NEW MAHAMAYA GENERAL (SHIVNI)	', toys3: 'TOYS:-	', amount3: '	-1	',  url3: '	/2084377289testbysam/SHIVNI/NEW MAHAMAYA GENERAL 2 (SHIVNI) (NEW 9).htm						',
												},
{id: 1, name: '	SHIVRINARAYN		', 									
customer1: '	MAHI SHRINGAR (SHIVRIN)	', toys1: 'TOYS:-	', amount1: ' 	1551	',  url1: '	/2084377289testbysam/SHIVRINARAYAN/MAHI SHRINGAR (SHIVRINARAYN).htm						',
customer2: '	RUPESH  GENERAL	', toys2: 'TOYS:-	', amount2: '	1981	',  url2: '	/2084377289testbysam/SHIVRINARAYAN/RUPESH (SHIVRINARAYAN)  64.htm						',
customer3: '	ATUL GENERAL	', toys3: 'TOYS:-	', amount3: '	18276	',  url3: '	/2084377289testbysam/SHIVRINARAYAN/ATUL (SHIVRINARAYAN) 254.htm						',
customer4: '	NARAYANI COLLECTION (SHIVRIN)	', toys4: 'TOYS:-	', amount4: '	11664	',  url4: '	/2084377289testbysam/SHIVRINARAYAN/NARAYANI (SHIVRINARAYAN) 136.htm						',
customer5: '	LAXMI VASTRALAY (SHIVRI)	', toys5: 'TOYS:-	', amount5: '	24209	',  url5: '	/2084377289testbysam/SHIVRINARAYAN/LAXMI VASTRALAY (SHIVRINARAYAN).htm						',
customer6: '	VIKAS GENERAL (SHIVRI)	', toys6: 'TOYS:-	', amount6: '	8820	',  url6: '	/2084377289testbysam/SHIVRINARAYAN/VIKAS GENERAL (SHIVRINARAYAN).htm						',
												},
												
{id: 1, name: '	SILDHA		', 									
customer1: '	SATYA NARAYAN (SILDHA)	', toys1: 'TOYS:-	', amount1: ' 	666	',  url1: '	/2084377289testbysam/SILDHA/SATYANARAYN (SILDHA).htm						',
												},
												
												
{id: 1, name: '	SIPAT		', 									
customer1: '	DEEPAK GENERAL (SIPAT)	', toys1: 'TOYS:-	', amount1: ' 	1727	',  url1: '	/2084377289testbysam/SIPAT/DEEPAK%20(SIPAT)%2041.htm						',
customer2: '	SITARAM  (SIPAT)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/SIPAT/SITARAM%20(SIPAT)%20%2094.htm						',
customer3: '	SWARMANGLA GIFT HOUSE (SIPAT)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/SIPAT/SWARMANGLA%20(SIPAT).htm						',
customer4: '	SWARMANGLA PLASTIC (SIPAT)	', toys4: 'TOYS:-	', amount4: '	10	',  url4: '	/2084377289testbysam/SIPAT/SWARMANGLA%20PLASTIC%20(SIPAT)%20270.htm						',
												},
{id: 1, name: '	SIRGITI		', 									
customer1: '	BABY SUHAG	', toys1: 'TOYS:-	', amount1: ' 	2692	',  url1: '	/2084377289testbysam/SIRGITI/BABY SUHAG (SIRGITTI) 21.htm						',
customer2: '	KIRAN SIRGITI	', toys2: 'TOYS:-	', amount2: '		',  url2: '	<b><br>TOYS -						',
customer3: '	MAA KALI MUSIC (SIRGITI)	', toys3: 'TOYS:-	', amount3: '	1	',  url3: '	/2084377289testbysam/SIRGITI/MAA KALI MUSIC CENTER (SIRGITTI) 210.htm						',
												},
{id: 1, name: '	TAKHATPUR		', 									
customer1: '	KISHAN (BELPAN)	', toys1: 'TOYS:-	', amount1: ' 	12445	',  url1: '	/2084377289testbysam/TAKHATPUR/KISHAN%20(BELPAN).htm						',
customer2: '	MAYUR GENERAL	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/TAKHATPUR/MAYUR%20GENERAL%20(TAKHATPUR)%20276.htm						',
customer3: '	MARUTI GENERAL (TAKHATPUR)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/TAKHATPUR/MARUTI%20(TAKAHTPUR)%2067.htm						',
customer4: '	VIJAY STORE (TAKHATPUR)	', toys4: 'TOYS:-	', amount4: '	23075	',  url4: '	/2084377289testbysam/TAKHATPUR/VIJAY%20STORE%20(TAKHATPUR)%20-%20299.htm						',
customer5: '	NAWAZ GENERAL	', toys5: 'TOYS:-	', amount5: '	8557	',  url5: '	/2084377289testbysam/TAKHATPUR/NAWAZ%20%20BHAI%20(TAKAHTPUR)%2075.htm						',
customer6: '	RAJESH GENERAL	', toys6: 'TOYS:-	', amount6: '	20222	',  url6: '	/2084377289testbysam/TAKHATPUR/RAJESH%20GENERAL%20(TAKAHTPUR)%20259.htm						',
customer7: '	BHARAT BAG HOUSE	', toys7: 'TOYS:-	', amount7: '	4615	',  url7: '	/2084377289testbysam/TAKHATPUR/BHARAT%20BAG%20HOUSE%20(TAKHATPUR)%20194.htm						',
												},
{id: 1, name: '	TAPKARA		', 									
customer1: '	 POOJA TAPKARA	', toys1: 'TOYS:-	', amount1: ' 	24350	',  url1: '	/2084377289testbysam/TAPKARA/POOJA (TAPKARA) 287.htm						',
												},
{id: 1, name: '	UDAIPUR		', 									
customer1: '	PRIYA UDAIPUR	', toys1: 'TOYS:-	', amount1: ' 	16123	',  url1: '	/2084377289testbysam/UDAIPUR/PRIYA  (UDAIPUR) 91.htm						',
												},
{id: 1, name: '	URGA		', 									
customer1: '	SHUSHMITA URGA	', toys1: 'TOYS:-	', amount1: ' 	6264	',  url1: '	/2084377289testbysam/URGA/SUSHMITA%20(URGA)%20125.htm						',
												},
{id: 1, name: '	USLAPUR		', 									
customer1: '	SAI PROVISION	', toys1: 'TOYS:-	', amount1: ' 		',  url1: '							',
												},
{id: 1, name: '	VENKATNAGAR		', 									
customer1: '	SANTOSH GENERAL	', toys1: 'TOYS:-	', amount1: ' 	16	',  url1: '	/2084377289testbysam/VENKATNAGAR/SANTOSH (VENKATNAGAR) 113.htm						',
												},
												
												
												
  ];												
  												
  return factory;												
}]);												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
