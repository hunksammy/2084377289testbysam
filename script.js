document.write("TESTING BY SAMEER.");						
						
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
customer1: '	VINOD GENERAL (AKALTARA)	', amount1: '	2186	',  url1: '		',
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
{id: 1, name: '	BILHA	', 				
customer1: '	PAYAL FANCY (BILHA)	', amount1: ' 	1059	',  url1: '	/2084377289testbysam/BILHA/PAYAL%20FANCY%20(BILHA)%2066.htm	',
customer2: '	KISAN MEGA BIG BAZAR (BILHA)	', amount2: '	4470	',  url2: '	/2084377289testbysam/BILHA/KISAN%20MEGA%20BIG%20BAZAR%20(BILHA)%2031.htm	',
customer3: '	RAJA DAILY NEEDS (BILHA)	', amount3: '	3529	',  url3: '	/2084377289testbysam/BILHA/RAJA%20DAILY%20NEEDS%20(BILHA).htm	',
						},
						
{id: 1, name: '	BIRRA	', 				
customer1: '	TOMESH (BIRRA)	', amount1: '	0	',  url1: '	/2084377289testbysam/BIRRA/TOMESH%20(BIRRA).htm	',
						},
{id: 1, name: '	BOADTARA	', 				
customer1: '	PRIYAL GENERAL (BODTARA)	', amount1: ' 	29780	',  url1: '	https://drive.google.com/file/d/1hNGyEHqRAoTcF2xWYan4-9mEWs2R-STs/view?usp=sharing	',
customer2: '	MONIKA FANCY STORE (BOADTARA)	', amount2: '	6649	',  url2: '		',
customer3: '	PUNNET SAHU  (BOADTARA)	', amount3: '	6067	',  url3: '		',
						},
{id: 1, name: '	CHAKKARBHATA	', 				
customer1: '	MAHAMAYA THRED HOUSE (CHBT)	', amount1: ' 	1586	',  url1: '	/2084377289testbysam/CHAKKARBHATA/MAHAMAYA%20THREAD%20(CHAKKARBHATA)%20103.htm	',
customer2: '	MAHESH STD (CHBT)	', amount2: '	4856	',  url2: '	/2084377289testbysam/CHAKKARBHATA/MAHESH%20STD%20(CHAKKARBHATA)%20161.htm	',
customer3: '	NEW JAI MATA DI  (CHBT)	', amount3: '	13727	',  url3: '	/2084377289testbysam/CHAKKARBHATA/NEW%20JAIMATA%20DI%20(CHAKKARBHATA)%2081.htm	',
customer4: '	BABA GENERAL (CHBT)	', amount4: ' 	3	',  url4: '	/2084377289testbysam/CHAKKARBHATA/BABA%20GENERAL%20(CHAKKARBHATA)%20%20188.htm	',
customer5: '	LAXMI KITABGHAR (CHBT)	', amount5: '	0	',  url5: '	/2084377289testbysam/CHAKKARBHATA/LAXMI%20KITAB%20GHAR%20(CHAKKARBHATA).htm	',
customer6: '	SIDDARTH (CHBT)	', amount6: '	0	',  url6: '	/2084377289testbysam/CHAKKARBHATA/SIDDARTH%20(CHAKKARBHATA)%20139.htm	',
						},
{id: 1, name: '	CHAMPA	', 				
customer1: '	AMIT SHRINGAR AND GIFT (CHAMPA)	', amount1: ' 	4	',  url1: '	<b><br>TOYS -	',
customer2: '	SOHAM GIFT (CHAMPA)	', amount2: '	229	',  url2: '	<b><br>TOYS -	',
customer3: '	HEMA SHRINGAR (CHAMPA)	', amount3: '	0	',  url3: '	<b><br>TOYS -	',
customer4: '	RANI GENERAL (CHAMPA)	', amount4: ' 	0	',  url4: '	<b><br>TOYS -	',
customer5: '	SHRINGAR SADAN (CHAMPA)	', amount5: '	20	',  url5: '	<b><br>TOYS -	',
customer6: '	RADHA SWAMI (CHAMPA)	', amount6: '	0	',  url6: '	<b><br>TOYS -	',
customer7: '	MOHSIN (CHAMPA)	', amount7: '	3061	',  url7: '	<b><br>TOYS -	',
customer8: '	MAA BHAGWATI (CHAMPA)	', amount8: '	25157	',  url8: '	<b><br>TOYS -	',
customer9: '	POOJA NOVELTY (CHAMPA)	', amount9: '	0	',  url9: '	<b><br>TOYS -	',
customer10: '	KANHA SUPERBAZAR (CHAMPA)	', amount10: '	1	',  url10: '	<b><br>TOYS -	',
						},
{id: 1, name: '	CHURRI	', 				
customer1: '	NEHA GENERAL (CHURI)	', amount1: ' 	3103	',  url1: '	/2084377289testbysam/CHURI/NEHA%20(CHURRI)%2071.htm	',
customer2: '	MAA KAUSA GAI (CHURRI)	', amount2: '	0	',  url2: '	/2084377289testbysam/CHURI/MAA%20KAUSA%20GAI%20(CHURRI)%20292.htm	',
						},
						
{id: 1, name: '	DABRA	', 				
customer1: '	FASHION PARK (DABRA)	', amount1: ' 	9028	',  url1: '	<b><br>TOYS -	',
						},
{id: 1, name: '	DHARAMJAYGARH	', 				
customer1: '	AKANKSHA  (DHARAMJAYGARH)	', amount1: ' 	0	',  url1: '	<b><br>TOYS -	',
						},
						
{id: 1, name: '	DIPKA	', 				
customer1: '	KOLKATA MAHASALE (DIPKA)	', amount1: ' 	34786	',  url1: '	/2084377289testbysam/DIPKA/KOLKATA%20MAHA%20SALE%20(DIPKA)%2048.htm	',
customer2: '	NEW BOOK DEPO (DIPKA)	', amount2: '	2	',  url2: '	/2084377289testbysam/DIPKA/NEW%20BOOK%20DEPO.%20(DIPKA)%20110.htm	',
customer3: '	GEETA BOOK DEPO (DIPKA)	', amount3: '	0	',  url3: '	/2084377289testbysam/DIPKA/GEETA%20BOOK%20DEPO.%20(DIPKA)%20266.htm	',
customer4: '	SHANTI SUHAG (DIPKA)	', amount4: ' 	1371	',  url4: '	/2084377289testbysam/DIPKA/SHANTI%20SUHAG%20(DIPKA)%20129.htm	',
customer5: '	KHUSHI BENGALS (DIPKA)	', amount5: '	-1	',  url5: '	/2084377289testbysam/DIPKA/KHUSHI%20BENGALS%20(DIPKA)%204.htm	',
customer6: '	VASU COLLECTION  (DIPA)	', amount6: '	1597	',  url6: '	/2084377289testbysam/DIPKA/VASU%20COLLECTION.%20(DIPKA)%20149.htm	',
						},
{id: 1, name: '	GANYARI	', 				
customer1: '	MISHRA GENERAL (GANYARI)	', amount1: ' 	1300	',  url1: '	https://drive.google.com/file/d/1HlQuBSvAT__u-8sn5CKsWBL40R_mBJql/view?usp=sharing	',
						},
{id: 1, name: '	GOBIRPATH	', 				
customer1: '	PREETY GOBRIPATH (GOBRIPATH)	', amount1: ' 	-55	',  url1: '	<b><br>TOYS -	',
						},
						
{id: 1, name: '	HARDIBAZAR	', 				
customer1: '	ASHWANI SHRINGAR (HARDIBAZAR)	', amount1: ' 	0	',  url1: '	/2084377289testbysam/HARDIBAZAR/ASHWINI%20GENERAL%20(HARDIBAZAR)%20174.htm	',
customer2: '	SANSKRITI GENERAL  (HARDIBAZAR)	', amount2: '	16170	',  url2: '	/2084377289testbysam/HARDIBAZAR/SANSKRITI%20GENERAL%20(HARDIBAZAR)%20141.htm	',
customer3: '	NIKHIL FANCY (HARDIBAZAR)	', amount3: '	2431	',  url3: '	/2084377289testbysam/HARDIBAZAR/NIKHIL%20FANCY%20(HARDIBAZAR)%20281.htm	',
customer4: '	 SONI SHRINGAR (HARDIBAZAR)	', amount4: ' 	0	',  url4: '	/2084377289testbysam/HARDIBAZAR/SONI%20SHRINGAR%20(HARDIBAZAR)%2072.htm	',
customer5: '	MANOJ KAPDA BAZAR (HARDIBAZAR)	', amount5: '	0	',  url5: '	/2084377289testbysam/HARDIBAZAR/MANOJ%20KAPDA%20(HARDIBAZAR)%20252.htm	',
						},
{id: 1, name: '	HARDIKALA	', 				
customer1: '	MANMOHAN (HARDIKALA)	', amount1: ' 	0	',  url1: '	<b><br>TOYS -	',
customer2: '	SANAJY  (HARDIKALA)	', amount2: '	3	',  url2: '	<b><br>TOYS -	',
						},
{id: 1, name: '	HASOD	', 				
customer1: '	LAXMI FANCY (HASOD)	', amount1: ' 	2896	',  url1: '	/2084377289testbysam/HASOD/LAXMI%20GENERAL%20(HASOD)%20145.htm	',
customer2: '	SAHU FANCY (HASOD)	', amount2: '	8539	',  url2: '	/2084377289testbysam/HASOD/SAHU%20FANCY%20(HASOD)%20301.htm	',
customer3: '	REKHA FANCY STORE (HASOD)	', amount3: '	7770	',  url3: '	/2084377289testbysam/HASOD/REKHA%20FANCY%20STORE%20(HASOD).htm	',
customer4: '	CHAVI GENERAL (HASOD)	', amount4: ' 	2462	',  url4: '	/2084377289testbysam/HASOD/CHAVVI%20GENERAL%20(HASOD).htm	',
customer5: '	MAHARAJ FANCY (HASOD)	', amount5: '	9191	',  url5: '	/2084377289testbysam/HASOD/MAHARAJ%20FANCY%20STORE%20(HASOD).htm	',
						},
{id: 1, name: '	JAITHARI	', 				
customer1: '	SHIV PLASTIC (JAITHARI)	', amount1: ' 	12787	',  url1: '	<b><br>TOYS -	',
customer2: '	MUSKAN FANCY (JAITHARI)	', amount2: '	0	',  url2: '	<b><br>TOYS -	',
						},
{id: 1, name: '	JANJGIR	', 				
customer1: '	GARIMA FANCY (JANJGIR)	', amount1: ' 	1	',  url1: '	https://drive.google.com/file/d/1Zkv0R-u7-ztsvWuh-98n6y57OKf0s1Bc/view?usp=sharing	',
customer2: '	PRATEEK GENERAL  (JANJGIR)	', amount2: '	5251	',  url2: '	https://drive.google.com/file/d/110klLeEDU72V88XKNqdTwaMUmtss8Kcs/view?usp=sharing	',
customer3: '	NAMDEV GENERAL (JANJGIR)	', amount3: '	0	',  url3: '	https://drive.google.com/file/d/1adiyTBA1cXmBuz3FhQLgz0Eh7VTUOmdi/view?usp=sharing	',
customer4: '	SATYAM GENERAL (JANJGIR)	', amount4: ' 	0	',  url4: '	https://drive.google.com/file/d/1iv8F-0o8mFq1zwVXTYgdfwX7YJHyOA7_/view?usp=sharing	',
customer5: '	SUPER BAG HOUSE (JANJGIR)	', amount5: '	0	',  url5: '	https://drive.google.com/file/d/1DGd4wdd_cRPyN3SOd9jx3dkV9CdQgr7I/view?usp=sharing	',
customer6: '	AKASH GENERAL (JANJGIR)	', amount6: '	0	',  url6: '	https://drive.google.com/file/d/1aNJ-YSBLA7RUBPmgeEkw6rSoHe0YJHoN/view?usp=sharing	',
						},
{id: 1, name: '	JHARSUKDA	', 				
customer1: '	 FASHION PARK (JHARSUKDA)	', amount1: ' 	0	',  url1: '	<b><br>TOYS -	',
customer2: '	GUDDU (JHARSUKDA)	', amount2: '	3484	',  url2: '	<b><br>TOYS -	',
						},
{id: 1, name: '	KATGHORA	', 				
customer1: '	ROOP SHRINGAR	', amount1: ' 	9318	',  url1: '	/2084377289testbysam/KATGHORA/ROOP%20SHRINGAR%20(KATGHORA)%20173.htm	',
customer2: '	MAHABALI (KATGHORA)	', amount2: '	0	',  url2: '	/2084377289testbysam/KATGHORA/MAHABALI.%20(KATGHORA)%2063.htm	',
customer3: '	KAREENA BOOT HOUSE (KATGHORA)	', amount3: '	0	',  url3: '	/2084377289testbysam/KATGHORA/KAREENA%20BOOT%20(KATGHOTA)%20(NEW%2029).htm	',
customer4: '	PRADEEP BHAIYA (KATGHORA)	', amount4: ' 	13894	',  url4: '	/2084377289testbysam/KATGHORA/PRADEEP%20BHAI.%20(KATGHORA)%20123.htm	',
customer5: '	PADUKA BOOT HOUSE (KATGHORA)	', amount5: '	0	',  url5: '	/2084377289testbysam/KATGHORA/PADUKA%20BOOT%20(KATGHORA)%20250.htm	',
						},
{id: 1, name: '	KATGI	', 				
customer1: '	VIDHYARTHI GENERAL (KATGI)	', amount1: ' 	9194	',  url1: '	/2084377289testbysam/KATGI/VIDYARTH GENERAL (KATGI) 106.htm	',
customer2: '	MANOJ FASHION	', amount2: '	27662	',  url2: '	/2084377289testbysam/KATGI/MANOJ FASHION (KATGI) 164.htm	',
customer3: '	MAHAMAYA GENERAL (KATGI)	', amount3: '	6258	',  url3: '	/2084377289testbysam/KATGI/MAHAMAYA GENERAL. (KATGI) 170.htm	',
customer4: '	JYOTI GENRAL (KATGI)	', amount4: ' 	0	',  url4: '	/2084377289testbysam/KATGI/JYOTI GENERAL (KATGI) 10.htm	',
customer5: '	PAWAN GENERAL STORE (KATGI)	', amount5: '	44288	',  url5: '	/2084377289testbysam/KATGI/PAWAN GENERAL (KATGI) 38.htm	',
customer6: '	SAI GENERAL (KATGI)	', amount6: '	11798	',  url6: '	/2084377289testbysam/KATGI/SAI GENERAL (KATGI) 264.htm	',
customer7: '	SURAJ GENERAL (KATGI)	', amount7: '	28138	',  url7: '	/2084377289testbysam/KATGI/SURAJ GENERAL. (KATGI) 27.htm	',
customer8: '	MANOJ GENERAL (KATGI)	', amount8: '	13041	',  url8: '	/2084377289testbysam/KATGI/MANOJ GENERAL. (KATGI) 68.htm	',
						},
{id: 1, name: '	KHAMRIYA	', 				
customer1: '	FAIR DEAL (KHAMARIYA)	', amount1: ' 	1136	',  url1: '	/2084377289testbysam/KHAMARIYA/FAIR%20DEAL.%20(KHAMARIYA)%20%2015.htm	',
customer2: '	SHUBHAM GENERAL (KHAMARIYA)	', amount2: '	6254	',  url2: '	/2084377289testbysam/KHAMARIYA/SHUBHAM%20(KAMARIYA)%20%20180.htm	',
						},
{id: 1, name: '	KARNODH	', 				
customer1: '	ASHOK KARNODH	', amount1: ' 	12	',  url1: '	<b><br>TOYS -	',
						},
{id: 1, name: '	KHARSIYA	', 				
customer1: '	ABHINANDAN (KHARSIYA)	', amount1: ' 	0	',  url1: '	<b><br>TOYS -	',
customer2: '	KRISHAN COLLECTION (KHARSIYA)	', amount2: '	10140	',  url2: '	<b><br>TOYS -	',
						},
{id: 1, name: '	KHAROD	', 				
customer1: '	MOHAN GENERAL 	', amount1: ' 	3101	',  url1: '	\2084377289testbysam\KHAROD\MOHAN (KHAROD)  65.htm	',
						},
{id: 1, name: '	KASHDOL	', 				
customer1: '	MAA SHETLA (KASHDOL)	', amount1: ' 	12	',  url1: '	/2084377289testbysam/KASHDOL/MAA SHETLA. (KASHDOL) 108.htm	',
customer2: '	BALAJI (KASHDOL)	', amount2: '	2	',  url2: '	/2084377289testbysam/KASHDOL/BALAJI. (KASHDOL) 288.htm	',
						},
{id: 1, name: '	KORBA	', 				
customer1: '	BANSAL ENTERPRISES	', amount1: ' 	4401	',  url1: '	/2084377289testbysam/KORBA/BANSAL%20ENTERPRISES%20(KOSABADI)%20160.htm	',
						},
{id: 1, name: '	KOTA	', 				
customer1: '	AGGARWAL GENERAL (KOTA)	', amount1: ' 	0	',  url1: '	<b><br>TOYS -	',
customer2: '	MAHAMAYA FASHION HOUSE	', amount2: '	0	',  url2: '	<b><br>TOYS -	',
customer3: '	NISHA GENERAL (KOTA)	', amount3: '	10	',  url3: '	<b><br>TOYS -	',
customer4: '	NIKITA GENERAL (KOTA)	', amount4: ' 	442	',  url4: '	<b><br>TOYS -	',
customer5: '	AKANKSHA GENERAL (KOTA)	', amount5: '	0	',  url5: '	<b><br>TOYS -	',
customer6: '	SARITA GENERAL (KOTA)	', amount6: '	0	',  url6: '	<b><br>TOYS -	',
customer7: '	SHAILESH GENERAL (KOTA)	', amount7: '	1595	',  url7: '	<b><br>TOYS -	',
customer8: '	ALL IN ONE (KOTA)	', amount8: '	0	',  url8: '	<b><br>TOYS -	',
customer9: '	KALPANA GENERAL BABAN (KOTA)	', amount9: '	0	',  url9: '	<b><br>TOYS -	',
customer10: '	AKANKSHA GENERAL (BABLU) (KOTA)	', amount10: '	10156	',  url10: '	<b><br>TOYS -	',
						},
{id: 1, name: '	KOTMISONAR	', 				
customer1: '	JANVI GENERAL (KOTMISONAR)	', amount1: ' 		',  url1: '	<b><br>TOYS -	',
						},
{id: 1, name: '	KUNDA	', 				
customer1: '	CHANDRAKAR GENERAL	', amount1: ' 	7	',  url1: '	https://drive.google.com/file/d/1k3zLxlfIVnbwOmSuPa2i2CDkLROUYSly/view?usp=sharing	',
customer2: '	SHREE RADHA RANI (KUNDA)	', amount2: '	0	',  url2: '	https://drive.google.com/file/d/1_nOlunb4tlReM34PpVAZp66keAIOsbX-/view?usp=sharing	',
customer3: '	SHRIRAM GENERAL (KUNDA)	', amount3: '	1	',  url3: '	https://drive.google.com/file/d/1TiktWsYVlQq3d-VdQkDhpZeR3kLJ6LuS/view?usp=sharing	',
						},
{id: 1, name: '	LAWAN	', 				
customer1: '	VINOD LAWAN	', amount1: ' 	0	',  url1: '	/2084377289testbysam/LAWAN/VINOD (LAWAN).htm	',
						},
{id: 1, name: '	LORMI	', 				
customer1: '	NANDANI GENERAL (LORMI)	', amount1: ' 	4485	',  url1: '	https://drive.google.com/file/d/1o2Wm0JByhnX-eVXNu2V4oZ5Q5rij85A7/view?usp=sharing	',
customer2: '	ASHISH GENERAL (LORMI)	', amount2: '	3164	',  url2: '	https://drive.google.com/file/d/1a1AVs7LAkhDdjLEypHPEEyOjHKaGgVNi/view?usp=sharing	',
customer3: '	KESARWANI (LORMI)	', amount3: '	0	',  url3: '	https://drive.google.com/file/d/1g_ezUi6ezDB6io_fyfkVPZxNML5QECGX/view?usp=sharing	',
customer4: '	KANHA COLLECTION (LORMI)	', amount4: ' 	0	',  url4: '	https://drive.google.com/file/d/15gKDGzkOwn18TKvYFHrfAIVJcXpKYFhq/view?usp=sharing	',
customer5: '	KAVYA GENERAL (LORMI)	', amount5: ' 	2753	',  url5: '	https://drive.google.com/file/d/1z7Q6PDFYQXoJChzMF-CQ0f9qPbscmgXr/view?usp=sharing	',
						},
{id: 1, name: '	MALHAR	', 				
customer1: '	ANKIT FANCY (MALHAR)	', amount1: ' 	-4	',  url1: '	/2084377289testbysam/MALHAR/ANKITA (MALHAR) (NEW 7).htm	',
customer2: '	PURVI FANCY (MALHAR)	', amount2: '	3	',  url2: '	/2084377289testbysam/MALHAR/PURVI FANCY (MALHAR) 290.htm	',
customer3: '	JAANVI GENERAL (MALHAR)	', amount3: '	18701	',  url3: '	/2084377289testbysam/MALHAR/JANVI GENERAL (MALHAR) 25.htm	',
customer4: '	JITENDRA (MALHAR)	', amount4: ' 	0	',  url4: '	/2084377289testbysam/MALHAR/JITENDRA (MALHAR) 168.htm	',
						},
{id: 1, name: '	MALKHARODA	', 				
customer1: '	PARI FANCY	', amount1: ' 	3661	',  url1: '	<b><br>TOYS -	',
						},
{id: 1, name: '	MANENDRAGARH	', 				
customer1: '	AISHWARIYA GENERAL	', amount1: ' 	0	',  url1: '	<b><br>TOYS -	',
						},
{id: 1, name: '	MARO	', 				
customer1: '	RAJA MARO (MARO)	', amount1: ' 	960	',  url1: '	<b><br>TOYS -	',
customer2: '	ANMOL  (MARO)	', amount2: '	2434	',  url2: '	<b><br>TOYS -	',
						},
{id: 1, name: '	MARWAHI	', 				
customer1: '	LAXMI GENERAL (MARWAHI)	', amount1: ' 	18809	',  url1: '	<b><br>TOYS -	',
customer2: '	JAFFAR BOOT (MARWAHI)	', amount2: '	18227	',  url2: '	<b><br>TOYS -	',
						},
{id: 1, name: '	MASTURI	', 				
customer1: '	KISHORE RIKSHAW	', amount1: ' 	4135	',  url1: '	/2084377289testbysam/MASTURI/KISHORE RIKSHAW (MASTURI) 114.htm	',
customer2: '	LAXMI GENERAL	', amount2: '	11707	',  url2: '	/2084377289testbysam/MASTURI/LAXMI GENERAL (MASTURI) 273.htm	',
						},
{id: 1, name: '	MOHGAON	', 				
customer1: '	MANISH GENERAL	', amount1: ' 	9042	',  url1: '	https://drive.google.com/file/d/1NJJwx3l3QFz5xtd7z4APeQYbjH7TCcBT/view?usp=sharing	',
						},
{id: 1, name: '	MUNGELI	', 				
customer1: '	TOY ZONE 	', amount1: ' 	0	',  url1: '	/2084377289testbysam/MUNGELI/TOY%20ZONE%20(MUNGELI).htm	',
customer2: '	BABA GENERAL	', amount2: '	-1	',  url2: '	/2084377289testbysam/MUNGELI/BABA%20GENERAL%20(MUNGELI)%20%2023.htm	',
customer3: '	GURUNANAK GENERAL	', amount3: '	1181	',  url3: '	/2084377289testbysam/MUNGELI/GURUNANAK%20GENERAL%20(MUNGELI)%2076.htm	',
customer4: '	 JEENAT BENGALS (MUNGELI)	', amount4: ' 	8497	',  url4: '	/2084377289testbysam/MUNGELI/ZEENAT%20BENGALS%20(MUNGELI)%2045.htm	',
customer5: '	PAYAL BAG HOUSE	', amount5: '	1308	',  url5: '	/2084377289testbysam/MUNGELI/PAYAL%20BAG%20(MUNGELI)%20171.htm	',
customer6: '	PRIYA LADIES	', amount6: '	6981	',  url6: '	/2084377289testbysam/MUNGELI/PRIYA%20LADIES%20(MUNGELI)%2099.htm	',
customer7: '	SANGAM FANCY	', amount7: '	7195	',  url7: '	/2084377289testbysam/MUNGELI/SANGAM%20FANCY%20(MUNGELI)%20(NEW%20169).htm	',
customer8: '	OM GENERAL (MUNGELI)	', amount8: '	0	',  url8: '	/2084377289testbysam/MUNGELI/OM%20GENERAL%20(MUNGELI)%2087.htm	',
						},
{id: 1, name: '	PACHPEDI	', 				
customer1: '	VINAY GENERAL (PACHPEDI)	', amount1: ' 	12557	',  url1: '	/2084377289testbysam/PACHPEDI/VINAY (PACHPEDI) 24.htm	',
customer2: '	SAHIL (PACHPEDI)	', amount2: '	-4	',  url2: '	/2084377289testbysam/PACHPEDI/SAHIL (PACHPEDI) 119.htm	',
						},
{id: 1, name: '	PAMGARH	', 				
customer1: '	BABA SCHOOL POINT (PAMGARH)	', amount1: ' 	-3	',  url1: '	/2084377289testbysam/PAMGARH/BABA%20SCHOOL%20POINT%20(PAMGARH)%2090.htm	',
						},
						
{id: 1, name: '	PALI	', 				
customer1: '	ARADHYA GENERAL (PALI)	', amount1: ' 	5362	',  url1: '	<b><br>TOYS -	',
customer2: '	JAI  MAHAMAYA (PALI)	', amount2: '	15764	',  url2: '	/2084377289testbysam/PALI/JAI%20MAHAMAYA%20(PALI)%20267.htm	',
customer3: '	SHIV BEEJ	', amount3: '	9	',  url3: '	/2084377289testbysam/PALI/SHIV%20BEEJ%20(PALI)%20255.htm	',
customer4: '	DEEPAK READYMATE (PALI)	', amount4: ' 	10	',  url4: '	/2084377289testbysam/PALI/DEEPAK%20READYMATE%20(PALI).htm	',
customer5: '	SHRIJAN	', amount5: '	3488	',  url5: '	/2084377289testbysam/PALI/SHRIJAN%20(PALI)%20116.htm	',
customer6: '	SUMIT COLLECTION PALI	', amount6: '	2	',  url6: '	/2084377289testbysam/PALI/SUMIT%20COLLECTION%20.(PALI)%20285.htm	',
customer7: '	UPHAR COLLECTION PALI	', amount7: '	0	',  url7: '	/2084377289testbysam/PALI/UPHAR%20COLLECTION%20(PALI)%20179.htm	',
customer8: '	SANJAY BOOK DEPO (PALI)	', amount8: '	1	',  url8: '	/2084377289testbysam/PALI/SANJAY%20BOOK%20DEPO.%20(PALI)%2054.htm	',
customer9: '	SANJAY GIFT (PALI)	', amount9: '	25406	',  url9: '	/2084377289testbysam/PALI/SANJAY%20GIFT.%20(PALI)%20183.htm	',
						},
{id: 1, name: '	PANDARIYA	', 				
customer1: '	FIZZA GENERAL	', amount1: ' 	0	',  url1: '	https://drive.google.com/file/d/1lPxQDKwsh6jKX1QMstlnW9kq-KfEeJCM/view?usp=sharing	',
customer2: '	MARUTI GENERAL (PANDARIYA)	', amount2: '	0	',  url2: '	https://drive.google.com/file/d/1a7JjZAjhV__9HXZMSJue-NE3HK2UW0GH/view?usp=sharing	',
customer3: '	MATESHWARI (PANDARIYA)	', amount3: '	10242	',  url3: '	https://drive.google.com/file/d/1cDGKAKVTAKWvnVn0Dl4jp_pR1OBv0EMd/view?usp=sharing	',
customer4: '	OM SATIONARY (PANDARIYA)	', amount4: ' 	0	',  url4: '	https://drive.google.com/file/d/1d4gU5EIqJf41uyz9h2CWFeCQ3ToEyUoT/view?usp=sharing	',
customer5: '	GURUANAK GENERAL (PANDARIYA)	', amount5: '	0	',  url5: '	https://drive.google.com/file/d/12O11oNUlba9BuO1OPU9s68_MMzOLE64e/view?usp=sharing	',
customer6: '	ABHAY GENERAL (PANDARIYA)	', amount6: '	4318	',  url6: '	https://drive.google.com/file/d/1SxfzdlnI67TP69Ar2X94Z4wDc9-sHd5L/view?usp=sharing	',
customer7: '	SOUGAAT GIFT (PANDARIYA)	', amount7: '	8988	',  url7: '	https://drive.google.com/file/d/1vkq6beWgDQT8izWggXGicCo_4Jxv9lPy/view?usp=sharing	',
						},
{id: 1, name: '	PANDATARAI	', 				
customer1: '	ARJUN GENERAL (PANDATARAI)	', amount1: ' 	0	',  url1: '	https://drive.google.com/file/d/1Ox2I0VhaYDwQ9podXkHGj7nDLTPN3DhZ/view?usp=sharing	',
customer2: '	DURGA GENERAL (PANDATARAI)	', amount2: '	0	',  url2: '	https://drive.google.com/file/d/1-0DaA2uxaGsTCRqd-zYxtMx4_LP90c7T/view?usp=sharing	',
customer3: '	SATGURU	', amount3: '	6706	',  url3: '	https://drive.google.com/file/d/18aJWgGVJy7KlCEDThk90DTPTI55N1xcD/view?usp=sharing	',
customer4: '	VIDYA SUHAG	', amount4: ' 	6797	',  url4: '	https://drive.google.com/file/d/1G4uBhMz4L8mhw1u7WMoMM6YpuGxtyMX5/view?usp=sharing	',
customer5: '	PREETI GENERAL (PANDATARAI)	', amount5: '	9517	',  url5: '	https://drive.google.com/file/d/1VTyw3yGzoIdv8UpM05k6DOt-pf3ZClFp/view?usp=sharing	',
customer6: '	GANESH (PANDATARAI)	', amount6: '	363	',  url6: '	https://drive.google.com/file/d/1AzOcHOhvIu8Qu_IZVI08MOIisUKEnRjJ/view?usp=sharing	',
						},
						
{id: 1, name: '	PANTORA	', 				
customer1: '	KRISHNA  KAPDA (PANTORA)	', amount1: ' 	7570	',  url1: '	<b><br>TOYS -	',
						},
						
{id: 1, name: '	PATHARIYA	', 				
customer1: '	AKASH BOOK DEPO (PATHARIYA)	', amount1: ' 	0	',  url1: '	/2084377289testbysam/PATHARIYA/AKASH%20BOOK%20DEPO%20(PATHARIYA)%20116.htm	',
customer2: '	HARNARAYAN	', amount2: '	0	',  url2: '	/2084377289testbysam/PATHARIYA/HARNARAYAN%20(PATHARIYA)%20%20199.htm	',
customer3: '	MUKESH GENERAL 	', amount3: '	1	',  url3: '	/2084377289testbysam/PATHARIYA/MUKESH%20GENERAL%20(PATHARIYA)%20%20163.htm	',
customer4: '	OM SAI KARAN (PATHARIYA)	', amount4: ' 	12927	',  url4: '	/2084377289testbysam/PATHARIYA/OM%20SAI%20(KARAN)%20.(PATHARIYA)%20%202.htm	',
customer5: '	SHIV GENERAL (PATHARIYA)	', amount5: '	11064	',  url5: '	/2084377289testbysam/PATHARIYA/SHIV%20GENERAL%20.(PATHARIYA)%20118.htm	',
customer6: '	SANTOSH GENERAL (PATHARIYA)	', amount6: '	0	',  url6: '	/2084377289testbysam/PATHARIYA/SANTOSH%20PATHKAR.%20(PATHARIYA)%20192.htm	',
customer7: '	PREETAM GENERAL (PATHARIYA)	', amount7: '	11309	',  url7: '	/2084377289testbysam/PATHARIYA/PREETAM%20(PATHARIYA)%20148.htm	',
customer8: '	OM SUHAG (PATHARIYA)	', amount8: '	10	',  url8: '	/2084377289testbysam/PATHARIYA/OM%20SUHAG%20(PATHARIYA)%20%20100.htm	',
customer9: '	LAXMI GENERAL (PATHARIYA)	', amount9: '	0	',  url9: '	/2084377289testbysam/PATHARIYA/LAXMI%20GENERAL%20(PATHARIYA).htm	',
						},
{id: 1, name: '	PENDRA	', 				
customer1: '	SURYA GARMENTS (PENDRA)	', amount1: ' 	7446	',  url1: '	<b><br>TOYS -	',
customer2: '	ARADHYA TRADERS	', amount2: '	22010	',  url2: '	https://drive.google.com/file/d/1s-6ESjsVFbhAOnK-uIWLkkbecveL70-t/view?usp=sharing	',
customer3: '	DECO POINT 	', amount3: '	15	',  url3: '	https://drive.google.com/file/d/1bZUj3PaLw6aYRt4Q-r2yqwCfLVriyhCE/view?usp=sharing	',
customer4: '	PANDEY GENERAL	', amount4: ' 	0	',  url4: '	https://drive.google.com/file/d/1FlDkbJU48o98NY1h5wl0nNVczPuyCLqc/view?usp=sharing	',
customer5: '	R.T WOMENS	', amount5: '	15002	',  url5: '	https://drive.google.com/file/d/1jUPA_oQjL9y0qQC_ua1MDkbHjGgiggPe/view?usp=sharing	',
customer6: '	SADHANA PHOTO STUDIO	', amount6: '	7938	',  url6: '	https://drive.google.com/file/d/1pbbt3wk5EkZigLoAwpd9GKseZeQmi7zK/view?usp=sharing	',
customer7: '	TIME CORNER (PENDRA)	', amount7: '	0	',  url7: '	https://drive.google.com/file/d/1hYMhX7km-IwDI7P-CwACqyAib1XN5U-y/view?usp=sharing	',
customer8: '	SAI MAHASALE (PENDRA)	', amount8: '	30003	',  url8: '	https://drive.google.com/file/d/19FjJkGLnOwVlxg7L0VO7wvzNmdhyh87u/view?usp=sharing	',
customer9: '	SAI SAKTI (PENDRA)	', amount9: '	4471	',  url9: '	https://drive.google.com/file/d/1URLS1kMcVHO6xgvP2111UB3Flw5ctJL-/view?usp=sharing	',
customer10: '	POOJA JWELLERY (PENDRA)	', amount10: '	2997	',  url10: '	https://drive.google.com/file/d/12NoUu7Hi-gzS7SAgs1mOzclJOTrEb1xi/view?usp=sharing	',
customer11: '	MAA SHARDA GIFT DEEPANSHU (PENDRA)	', amount11: '	0	',  url11: '	https://drive.google.com/file/d/1ZeDQBfPk7jjKuGeAnaNB_W_9Zu9upYpU/view?usp=sharing	',
customer12: '	UPHAR GALLERY (PENDRA)	', amount12: '	4675	',  url12: '	https://drive.google.com/file/d/1sESeeSJwDW90R8WYvFrV3QiH9CY7OvGL/view?usp=sharing	',
customer13: '	GUPTA ENTERPRISES (PENDRA)	', amount13: '	39987	',  url13: '	https://drive.google.com/file/d/1IV8XGzBqnUM4IpmShmR6Lhla10Bc9Xi7/view?usp=sharing	',
customer14: '	SANJAY GENERAL (PENDRA)	', amount14: '	23806	',  url14: '	https://drive.google.com/file/d/1ybq2TSYiS0o407P0On9y5_zLe3H_qzdf/view?usp=sharing	',
customer15: '	GANESH GENERAL (PENDRA)	', amount15: '		',  url15: '		',
customer16: '	AJAY KESHRI SURYA GARMENTS	', amount16: '	0	',  url16: '	https://drive.google.com/file/d/1S7WDsOlZdTeYn6TKeLMOA_XbCa2GESw1/view?usp=sharing	',
						},
{id: 1, name: '	PODI	', 				
customer1: '	SHIV SAHU (PODI)	', amount1: ' 	3733	',  url1: '	<b><br>TOYS -	',
						},
{id: 1, name: '	RAHOD	', 				
customer1: '	CHAAVI GENERAL 	', amount1: ' 	1669	',  url1: '	\2084377289testbysam\RAHOD\CHAVI (RAHOD) 12.htm	',
						},
{id: 1, name: '	RATANPUR	', 				
customer1: '	 GOLU RATANPUR	', amount1: ' 	84	',  url1: '	<b><br>TOYS -	',
customer2: '	RAJA YADAV	', amount2: '	1099	',  url2: '	<b><br>TOYS -	',
customer3: '	USHA CHAUHAN (RATANPUR)	', amount3: '		',  url3: '	<b><br>TOYS -	',
customer4: '	RIYA GENERAL	', amount4: ' 	10	',  url4: '	<b><br>TOYS -	',
						},
{id: 1, name: '	SAKRI	', 				
customer1: '	GUPTA GENERAL	', amount1: ' 	0	',  url1: '	/2084377289testbysam/SAKRI/GUPTA%20(SAKRI)%20%2039.htm	',
customer2: '	KAUSHIK GENERAL (SAKRI)	', amount2: '	590	',  url2: '	/2084377289testbysam/SAKRI/KAUSHIK%20GENERAL.%20(SAKRI)%20261.htm	',
customer3: '	SHRI RAM (SAKRI)	', amount3: '	32	',  url3: '	/2084377289testbysam/SAKRI/SHRIRAM%20GENERAL%20(SAKRI)%20%2020.htm	',
						},
{id: 1, name: '	SAKTI	', 				
customer1: '	PAPPI GUPTA (SAKTI)	', amount1: ' 	0	',  url1: '	<b><br>TOYS -	',
customer2: '	DIWA FANCY (SAKTI)	', amount2: '	5962	',  url2: '	<b><br>TOYS -	',
customer3: '	VIKAS (SAKTI)	', amount3: '	0	',  url3: '	<b><br>TOYS -	',
customer4: '	ANMOL GIFT (SAKTI)	', amount4: '	122	',  url4: '	<b><br>TOYS -	',
						},
{id: 1, name: '	SARAGAON	', 				
customer1: '	GOVIND KESARWANI	', amount1: ' 	15034	',  url1: '	<b><br>TOYS -	',
						},
{id: 1, name: '	SARANGARH	', 				
customer1: '	VIKAS  TEXTILE (SARANGARH)	', amount1: ' 	470	',  url1: '	\2084377289testbysam\SARANGARH\VIKAS TEXTILE (SARANGARH).htm	',
customer2: '	ASHOK BOOK DEPO	', amount2: '	8	',  url2: '	/2084377289testbysam/SARANGARH/ASHOK%20BOOK%20DEPO%20(SARANGARH)%209.htm	',
customer3: '	KAMAL GENERAL (SARANGARH)	', amount3: '	22444	',  url3: '	\2084377289testbysam\SARANGARH\KAMAL (SARANGARH) 22.htm	',
customer4: '	SANJAY STORE (SARANGARH)	', amount4: '	-2	',  url4: '	\2084377289testbysam\SARANGARH\SANJAY STORE (SARANGARH)  44.htm	',
customer5: '	PRIYANKA GENERAL (SARANGARH)	', amount5: '	840	',  url5: '	\2084377289testbysam\SARANGARH\PRIYANKA (SARANGARH) 212.htm	',
customer6: '	SANTOSH VASTRALAY (SARANGARH)	', amount6: '	0	',  url6: '	\2084377289testbysam\SARANGARH\SANTOSH VASTRALAY (SARANGARH) 220.htm	',
customer7: '	NEW CLOTH STORE (SARANGARH)	', amount7: '	0	',  url7: '	\2084377289testbysam\SARANGARH\NEW CLOTH (SARANGARH)  256.htm	',
						},
{id: 1, name: '	SARGAON	', 				
customer1: '	SUNITA GENERAL	', amount1: ' 	0	',  url1: '	/2084377289testbysam/SARGAON/SUNITA%20(SARGAON)%20%2047.htm	',
customer2: '	RAJU FANCY STORE (SARGAON)	', amount2: '	2549	',  url2: '	/2084377289testbysam/SARGAON/RAJU%20(SARGAON)%2042.htm	',
						},
{id: 1, name: '	SARSIWA	', 				
customer1: '	HEMA FANCY	', amount1: ' 	0	',  url1: '	\2084377289testbysam\SARSIWA\HEMA FANCY (SARSIWA) 191.htm	',
customer2: '	OM SAI SARSIWA	', amount2: '	15013	',  url2: '	\2084377289testbysam\SARSIWA\OM SAI (SARSIWA) 6.htm	',
customer3: '	SHRIYA SHRINGAR (SARSIWA)	', amount3: '	0	',  url3: '	\2084377289testbysam\SARSIWA\SHRIYA SHRINGAR (SARSIWA).htm	',
						},
						
{id: 1, name: '	SENDRI	', 				
customer1: '	SHIVAM GENERAL	', amount1: ' 	3	',  url1: '	<b><br>TOYS -	',
						},
{id: 1, name: '	SHIVNI	', 				
customer1: '	KHAGESHWAR GENERAL	', amount1: ' 	29546	',  url1: '	<b><br>TOYS -	',
customer2: '	JAI AMBEL (SHIVNI)	', amount2: '	5253	',  url2: '	<b><br>TOYS -	',
customer3: '	NEW MAHAMAYA GENERAL (SHIVNI)	', amount3: '	-1	',  url3: '	<b><br>TOYS -	',
						},
{id: 1, name: '	SHIVRINARAYN	', 				
customer1: '	MAHI SHRINGAR (SHIVRIN)	', amount1: ' 	4851	',  url1: '	\2084377289testbysam\SHIVRINARAYAN\MAHI SHRINGAR (SHIVRINARAYN).htm	',
customer2: '	RUPESH  GENERAL	', amount2: '	7981	',  url2: '	\2084377289testbysam\SHIVRINARAYAN\RUPESH (SHIVRINARAYAN)  64.htm	',
customer3: '	ATUL GENERAL	', amount3: '	2130	',  url3: '	\2084377289testbysam\SHIVRINARAYAN\ATUL (SHIVRINARAYAN) 254.htm	',
customer4: '	NARAYANI COLLECTION (SHIVRIN)	', amount4: '	10061	',  url4: '	\2084377289testbysam\SHIVRINARAYAN\NARAYANI (SHIVRINARAYAN) 136.htm	',
						},
						
{id: 1, name: '	SILDHA	', 				
customer1: '	SATYA NARAYAN (SILDHA)	', amount1: ' 	7501	',  url1: '	<b><br>TOYS -	',
						},
						
						
{id: 1, name: '	SIPAT	', 				
customer1: '	DEEPAK GENERAL (SIPAT)	', amount1: ' 	3227	',  url1: '	/2084377289testbysam/SIPAT/DEEPAK%20(SIPAT)%2041.htm	',
customer2: '	SITARAM  (SIPAT)	', amount2: '	0	',  url2: '	/2084377289testbysam/SIPAT/SITARAM%20(SIPAT)%20%2094.htm	',
customer3: '	SWARMANGLA GIFT HOUSE (SIPAT)	', amount3: '	0	',  url3: '	/2084377289testbysam/SIPAT/SWARMANGLA%20(SIPAT).htm	',
customer4: '	SWARMANGLA PLASTIC (SIPAT)	', amount4: '	10	',  url4: '	/2084377289testbysam/SIPAT/SWARMANGLA%20PLASTIC%20(SIPAT)%20270.htm	',
						},
{id: 1, name: '	SIRGITI	', 				
customer1: '	BABY SUHAG	', amount1: ' 	1466	',  url1: '	<b><br>TOYS -	',
customer2: '	KIRAN SIRGITI	', amount2: '		',  url2: '	<b><br>TOYS -	',
customer3: '	MAA KALI MUSIC (SIRGITI)	', amount3: '	1	',  url3: '	<b><br>TOYS -	',
						},
{id: 1, name: '	TAKHATPUR	', 				
customer1: '	KISHAN (BELPAN)	', amount1: ' 	12445	',  url1: '	/2084377289testbysam/TAKHATPUR/KISHAN%20(BELPAN).htm	',
customer2: '	MAYUR GENERAL	', amount2: '	-727	',  url2: '	/2084377289testbysam/TAKHATPUR/MAYUR%20GENERAL%20(TAKHATPUR)%20276.htm	',
customer3: '	MARUTI GENERAL (TAKHATPUR)	', amount3: '	0	',  url3: '	/2084377289testbysam/TAKHATPUR/MARUTI%20(TAKAHTPUR)%2067.htm	',
customer4: '	VIJAY STORE (TAKHATPUR)	', amount4: '	32075	',  url4: '	/2084377289testbysam/TAKHATPUR/VIJAY%20STORE%20(TAKHATPUR)%20-%20299.htm	',
customer5: '	NAWAZ GENERAL	', amount5: '	8749	',  url5: '	/2084377289testbysam/TAKHATPUR/NAWAZ%20%20BHAI%20(TAKAHTPUR)%2075.htm	',
customer6: '	RAJESH GENERAL	', amount6: '	6496	',  url6: '	/2084377289testbysam/TAKHATPUR/RAJESH%20GENERAL%20(TAKAHTPUR)%20259.htm	',
customer7: '	BHARAT BAG HOUSE	', amount7: '	8615	',  url7: '	/2084377289testbysam/TAKHATPUR/BHARAT%20BAG%20HOUSE%20(TAKHATPUR)%20194.htm	',
						},
{id: 1, name: '	TAPKARA	', 				
customer1: '	 POOJA TAPKARA	', amount1: ' 	34350	',  url1: '	<b><br>TOYS -	',
						},
{id: 1, name: '	UDAIPUR	', 				
customer1: '	PRIYA UDAIPUR	', amount1: ' 	8854	',  url1: '	<b><br>TOYS -	',
						},
{id: 1, name: '	URGA	', 				
customer1: '	SHUSHMITA URGA	', amount1: ' 	7764	',  url1: '	/2084377289testbysam/URGA/SUSHMITA%20(URGA)%20125.htm	',
						},
{id: 1, name: '	USLAPUR	', 				
customer1: '	SAI PROVISION	', amount1: ' 		',  url1: '	<b><br>TOYS -	',
						},
{id: 1, name: '	VENKATNAGAR	', 				
customer1: '	SANTOSH GENERAL	', amount1: ' 	5816	',  url1: '	<b><br>TOYS -	',
						},
						
						
 {id: 9, name: 'BILHA', calories: '167', ingredients: 'soup with chicken and potatoes', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/healthy-chili_373x.jpg'}						
  ];						
  						
  return factory;						
}]);						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
