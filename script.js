var element = document.getElementById("id01");element.innerHTML = "BAGS - 	22-10-21	&nbsp;&nbsp;		&nbsp;&nbsp;TOYS - 22/06/2022  	&nbsp;&nbsp;BAL -	1498039						";					
																	
																	
																	
																	
																	
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
																	
{id: 1, name: '	AKALTARA', total: '  (	43116	)', 														
customer1: '	VINOD GENERAL (AKALTARA)	', toys1: 'TOYS:-	', amount1: '	0	',  url1: '	/2084377289testbysam/AKALTARA/VINOD GENERAL (AKALTARA).htm	', GIFTS1: 'PAYMENT	', amountg1: '	917987310107	',  urlg1: '	https://api.whatsapp.com/send?phone=917987310107&text=नमस्कार ! *VINOD GENERAL (AKALTARA)* भाइया आपका बकाया बैलेंस  *0Rs.* है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone=917987310107&text=नमस्कार ! *VINOD GENERAL (AKALTARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer2: '	CHANDAN GENERAL (AKALTARA)	', toys2: 'TOYS:-	', amount2: '	3520	',  url2: '	/2084377289testbysam/AKALTARA/CHANDAN%20GENERAL%20(AKALTARA)%2029.htm	', GIFTS2: 'PAYMENT	', amountg2: '	919827734802	',  urlg2: '	https://api.whatsapp.com/send?phone= 919827734802&text=नमस्कार ! *CHANDAN GENERAL (AKALTARA)* भाइया आपका बकाया बैलेंस  *3520Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone=919827734802&text=नमस्कार ! *CHANDAN GENERAL (AKALTARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer3: '	DEEPAK GENERAL (AKALTARA)	', toys3: 'TOYS:-	', amount3: '	20568	',  url3: '	/2084377289testbysam/AKALTARA/DEEPAK%20(AKALTARA)%20130.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *DEEPAK GENERAL (AKALTARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer4: '	SHRIMANAGALM (AKALTARA)	', toys4: 'TOYS:-	', amount4: '	0	',  url4: '	/2084377289testbysam/AKALTARA/SHRIMANGALAM%20(AKALTARA)%20298.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *SHRIMANAGALM (AKALTARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer5: '	SHARMA GENERAL  (AKALTARA)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/AKALTARA/SHARMA%20GENERAL%20(AKALTARA)%20282.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *SHARMA GENERAL  (AKALTARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer6: '	SS FANCY (AKALTARA)	', toys6: 'TOYS:-	', amount6: '	6920	',  url6: '	/2084377289testbysam/AKALTARA/SS%20FANCY%20(AKALTARA).htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '		', bags6: 'ORDER	', amountb6: '		',  urlb6: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *SS FANCY (AKALTARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer7: '	KANHA GENERAL (AKALTARA)	', toys7: 'TOYS:-	', amount7: '	12108	',  url7: '	/2084377289testbysam/AKALTARA/KANHA%20GENERAL%20(AKALTARA)%2050.htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '		', bags7: 'ORDER	', amountb7: '		',  urlb7: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *KANHA GENERAL (AKALTARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer8: '	SANTOSH GENERAL (AKALTARA)	', toys8: 'TOYS:-	', amount8: '	7	',  url8: '	/2084377289testbysam/AKALTARA/SANTOSH  GENERAL (AKALTARA).htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '		', bags8: 'ORDER	', amountb8: '		',  urlb8: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *SANTOSH GENERAL (AKALTARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	BALCO', total: '  (	0	)', 														
customer1: '	SACHIN COLLECTION (BALCO)	', toys1: 'TOYS:-	', amount1: '	0	',  url1: '	/2084377289testbysam/BALCO/SACHIN COLLECTION (BALCO) 84.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *SACHIN COLLECTION (BALCO)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer2: '	UPHAR COLLECTION (BALCO)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/BALCO/UPHAR COLLECTION (BALCO) 272.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *UPHAR COLLECTION (BALCO)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer3: '	NAVEEN ELECTRONICS (BALCO)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/BALCO/NAVEEN ELECTRONICS (BALCO)  232.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *NAVEEN ELECTRONICS (BALCO)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	BALODA', total: '  (	85675	)', 														
customer1: '	ESHWAR GENERAL (BALODA)	', toys1: 'TOYS:-	', amount1: ' 	10573	',  url1: '	/2084377289testbysam/BALODA/ESHWAR%20GENERAL%20(BALODA)%2098.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *ESHWAR GENERAL (BALODA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer2: '	SAKSHI (BALODA)	', toys2: 'TOYS:-	', amount2: '	31513	',  url2: '	/2084377289testbysam/BALODA/SAKSHI%20GENERAL%20(BALODA)%20152.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *SAKSHI (BALODA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer3: '	SHASHANK BOOK DEPO (BALODA)	', toys3: 'TOYS:-	', amount3: '	-1900	',  url3: '	/2084377289testbysam/BALODA/SHASHANK%20GENERAL%20(BALODA)%2058.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '	2950	',  urlb3: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *SHASHANK BOOK DEPO (BALODA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer4: '	VARDHAMAN GENERAL (BALODA)	', toys4: 'TOYS:-	', amount4: '	14753	',  url4: '	/2084377289testbysam/BALODA/VARDHAMAN%20GENERAL%20(BALODA)%20126.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *VARDHAMAN GENERAL (BALODA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer5: '	LOVE KIRANA (BALODA)	', toys5: 'TOYS:-	', amount5: '	27509	',  url5: '	/2084377289testbysam/BALODA/LOVE%20KIRANA%20(BALODA)%20193_files.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *LOVE KIRANA (BALODA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer6: '	VICKEY GENERAL (BALODA)	', toys6: 'TOYS:-	', amount6: '	2160	',  url6: '	/2084377289testbysam/BALODA/VICKEY%20GENERAL%20(BALODA)%2082.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '		', bags6: 'ORDER	', amountb6: '	3420	',  urlb6: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *VICKEY GENERAL (BALODA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer7: '	SHIVAM GENERAL (BALODA)	', toys7: 'TOYS:-	', amount7: '	1063	',  url7: '	/2084377289testbysam/BALODA/SHIVAM%20GENERAL%20(BALODA)%20217.htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '		', bags7: 'ORDER	', amountb7: '		',  urlb7: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *SHIVAM GENERAL (BALODA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer8: '	B.L GUPTA (BALODA)	', toys8: 'TOYS:-	', amount8: '	4	',  url8: '	/2084377289testbysam/BALODA/B.L%20GUPTA%20(BALODA)%20258.htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '		', bags8: 'ORDER	', amountb8: '		',  urlb8: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *B.L GUPTA (BALODA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer9: '	GOYAL GENERAL (BALODA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/BALODA/GOYAL%20GENERAL%20(BALODA)%20263.htm	', GIFTS9: 'PAYMENT	', amountg9: '		',  urlg9: '		', bags9: 'ORDER	', amountb9: '		',  urlb9: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *GOYAL GENERAL (BALODA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	BAMNIDIH', total: '(	22751	)', 														
customer1: '	CHANDINI GIFT	', toys1: 'TOYS:-	', amount1: ' 	22751	',  url1: '	/2084377289testbysam/BAMNIDIH/CHANDAN%20GENERAL%20(AKALTARA)%2029.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *CHANDINI GIFT* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	BARADWAR', total: ' (	16583	)', 														
customer1: '	ASHIRWAD GENERAL (BARADWAR)	', toys1: 'TOYS:-	', amount1: ' 	1843	',  url1: '	/2084377289testbysam/BARADWAR/ASHIRWAD GENERAL (BARADWAR) 13.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '	0	',  urlb1: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *ASHIRWAD GENERAL (BARADWAR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer2: '	SIDDHI VINAYAK (BARADWAR)	', toys2: 'TOYS:-	', amount2: '	5115	',  url2: '	/2084377289testbysam/BARADWAR/SIDDHI VINAYAK GENERAL (BARADWAR) 268.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *SIDDHI VINAYAK (BARADWAR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer3: '	SAMRAT GENERAL (BARADWAR)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/BARADWAR/SAMRATH GENERAL (BARADWAR).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *SAMRAT GENERAL (BARADWAR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer4: '	SAKTIYA SETH (BARADWAR)	', toys4: 'TOYS:-	', amount4: '	0	',  url4: '	/2084377289testbysam/BARADWAR/SAKTIYA SETH (BARADWAR) 219.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *SAKTIYA SETH (BARADWAR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer5: '	LAXMI DEPARTMENTAL  (BARADWAR)	', toys5: 'TOYS:-	', amount5: '	9625	',  url5: '	/2084377289testbysam/BARADWAR/LAXMI  DEPARTMENTAL (BARADWAR).htm	', GIFTS5: 'PAYMENT	', amountg4: '		',  urlg5: '		', bags5: 'ORDER	', amountb4: '		',  urlb5: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *LAXMI DEPARTMENTAL  (BARADWAR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	BARAMKELA', total: ' (	13345	)', 														
customer1: '	ANNPURNA FANCY (BARAMKELA)	', toys1: 'TOYS:-	', amount1: '	13345	',  url1: '	\2084377289testbysam\BARAMKELA\ANNPURNA STORE (BARAMKELA).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *ANNPURNA FANCY (BARAMKELA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
																	},
																	
{id: 1, name: '	BELGEHNA', total: ' (	29090	)', 														
customer1: '	RINKU GENERAL (BELGEHNA)	', toys1: 'TOYS:-	', amount1: '	29090	',  url1: '	/2084377289testbysam/BELGEHNA/RINKU (BELGEHNA).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *RINKU GENERAL (BELGEHNA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer2: '	SURYA GENERAL (BELGEHNA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/BELGEHNA/SURYA (BELGEHNA).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *SURYA GENERAL (BELGEHNA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	BELTARA', total: ' (	2493	)', 														
customer1: '	PRATAB (BELTARA)	', toys1: 'TOYS:-	', amount1: '	2493	',  url1: '	/2084377289testbysam/BELTARA/PRATAB (BELTARA) 294.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *PRATAB (BELTARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	BHATAPARA ', total: '(	0	)', 														
customer1: '	ANDAAZ BAG (BHATAPARA)	', toys1: 'TOYS:-	', amount1: '	0	',  url1: '	/2084377289testbysam/BHATAPARA/ANDAAZ COLLECTION (BHATAPARA).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *ANDAAZ BAG (BHATAPARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	BHATGAON', total: ' (	3215	)', 														
customer1: '	DEEPANSHU (BHATGAON)	', toys1: 'TOYS:-	', amount1: ' 	3216	',  url1: '	/2084377289testbysam/BHATGAON/DEEPANSHU GENERAL (BHATGAON) 19.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '	2047	',  urlb1: '	https://api.whatsapp.com/send?phone=&text=नमस्कार ! *DEEPANSHU (BHATGAON)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे  http://bit.ly/hindustantoys	',
customer2: '	MANPASAND (BHATGAON)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/BHATGAON/MANPASAND (BHATGAON) 92.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	RIYA GENERAL (BHATGAON)	', toys3: 'TOYS:-	', amount3: ' 	0	',  url3: '	/2084377289testbysam/BHATGAON/RIYA GENERAL (BHATGAON) 280.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
customer4: '	NAMDEV (BHATGAON)	', toys4: 'TOYS:-	', amount4: '	-1	',  url4: '	/2084377289testbysam/BHATGAON/NAMDEV GENERAL (BHATGAON) 83.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
																	},
{id: 1, name: '	BHILAIGARH', total: ' (	22247	)', 														
customer1: '	SONU GENERAL (BHILAIGARH)	', toys1: 'TOYS:-	', amount1: ' 	7532	',  url1: '	/2084377289testbysam/BHILAIGARH/SONU GENERAL (BHILAIGARH) 52.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	SS  SUPER MARKET (BHILAIGARH)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/BHILAIGARH/SS  SUPER MARKET (BHILAIGARH).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	TANU GENERAL (BHILAIGARH)	', toys3: 'TOYS:-	', amount3: '	10386	',  url3: '	/2084377289testbysam/BHILAIGARH/TANU GENERAL (BHILAIGARH) 251.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
customer4: '	LALIT GENERAL (BHILAIGARH)	', toys4: 'TOYS:-	', amount4: '	39	',  url4: '	/2084377289testbysam/BHILAIGARH/LALIT GENERAL (BHILAIGARH) 57.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	DEWANGAN GENERAL (BHILAIGARH)	', toys5: 'TOYS:-	', amount5: '	4290	',  url5: '	/2084377289testbysam/BHILAIGARH/DEWANGAN GENERAL (BHILAIGARH) 218.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '	6722	',  urlb5: '	/2084377289testbysam/BAGS/DEWANGAN GENERAL (BHILAIGARH).htm	',
																	},
{id: 1, name: '	BILASPUR ', total: '(	73396	)', 														
customer1: '	BOMBAY FASHION (RAJKISHORE)	', toys1: 'TOYS:-	', amount1: ' 	13033	',  url1: '	/2084377289testbysam/BILASPUR/BOMBAY FASHION (RAJKISHORE).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	MOHAN NAGOI (BILASPUR)	', toys2: 'TOYS:-	', amount2: '	26255	',  url2: '	/2084377289testbysam/BILASPUR/MOHAN NAGOI (BILASPUR) 128.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	POOJA SHRINGAR (BILASPUR)	', toys3: 'TOYS:-	', amount3: '	1308	',  url3: '	/2084377289testbysam/BILASPUR/POOJA SHRINGARH (BILASPUR) 107.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '	3602	',  urlb3: '	/2084377289testbysam/BAGS/POOJA SHRINGAR (BILASPUR).htm	',
customer4: '	AKASH GENERAL (BUDHWARI)	', toys4: 'TOYS:-	', amount4: '	0	',  url4: '	/2084377289testbysam/BILASPUR/AKASH GENERAL STORE (BUDHWARI) - 295.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	SIDDHI VINAYAK (BILASPUR)	', toys5: 'TOYS:-	', amount5: '	33002	',  url5: '	/2084377289testbysam/BILASPUR/SIDDHI VINAYAK (BILASPUR).htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '		',
customer6: '	PUSTAK BHAWAN (BILASPUR)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/BILASPUR/PUSHTAK BHAWAN (BILASPUR).htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '		', bags6: 'ORDER	', amountb6: '		',  urlb6: '		',
customer7: '	SEEMA SHRIVASTAV (BILASPUR)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/BILASPUR/SEEMA SHRIVASTAV (BILASPUR) 278.htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '		', bags7: 'ORDER	', amountb7: '		',  urlb7: '		',
customer8: '	SONI GIFT (DEVIKHURDH) (BSP)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/BILASPUR/SONI GIFT DEVRIKHURDH (BILASPUR) 155.htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '		', bags8: 'ORDER	', amountb8: '		',  urlb8: '		',
customer9: '	VIJAY TOYS TELIPARA	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/BILASPUR/VIJAY TOYS (TELIPARA).htm	', GIFTS9: 'PAYMENT	', amountg9: '		',  urlg9: '		', bags9: 'ORDER	', amountb9: '		',  urlb9: '		',
customer10: '	HITESH BAJAJ	', toys10: 'TOYS:-	', amount10: '	0	',  url10: '	/2084377289testbysam/BILASPUR/HITESH BAJAJ (BILASPUR).htm	', GIFTS10: 'PAYMENT	', amountg10: '		',  urlg10: '		', bags10: 'ORDER	', amountb10: '		',  urlb10: '		',
customer11: '	HELLO DUDE (SUNIL)	', toys11: 'TOYS:-	', amount11: '	-202	',  url11: '	/2084377289testbysam/BILASPUR/HELLO DUDE (SUNIL JAGYASI).htm	', GIFTS11: 'PAYMENT	', amountg11: '		',  urlg11: '		', bags11: 'ORDER	', amountb11: '		',  urlb11: '		',
customer12: '	BABY  WORLD  (RAVI KHANNA)	', toys12: 'TOYS:-	', amount12: '	20767	',  url12: '	/2084377289testbysam/BILASPUR/BABY WORLD  (RAVI  KHANNA).htm	', GIFTS12: 'PAYMENT	', amountg12: '		',  urlg12: '		', bags12: 'ORDER	', amountb12: '		',  urlb12: '		',
																	},
{id: 1, name: '	BILHA', total: ' (	1996	)', 														
customer1: '	PAYAL FANCY (BILHA)	', toys1: 'TOYS:-	', amount1: ' 	1996	',  url1: '	/2084377289testbysam/BILHA/PAYAL%20FANCY%20(BILHA)%2066.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	KISAN MEGA BIG BAZAR (BILHA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/BILHA/KISAN%20MEGA%20BIG%20BAZAR%20(BILHA)%2031.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	RAJA DAILY NEEDS (BILHA)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/BILHA/RAJA%20DAILY%20NEEDS%20(BILHA).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
																	},
																	
{id: 1, name: '	BIRRA', total: ' (	30	)', 														
customer1: '	TOMESH (BIRRA)	', toys1: 'TOYS:-	', amount1: '	30	',  url1: '	/2084377289testbysam/BIRRA/TOMESH%20(BIRRA).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	SUMAN (BIRRA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/BIRRA/SUMAN (BIRRA).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	NAMDEV (BIRRA)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/BIRRA/RACKET RATIO.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
																	},
{id: 1, name: '	BOADTARA', total: ' (	1706	)', 														
customer1: '	PRIYAL GENERAL (BODTARA)	', toys1: 'TOYS:-	', amount1: ' 	10	',  url1: '	/2084377289testbysam/BOADTARA/PRIYAL (BOADTARA) 26.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '	15510	',  urlb1: '	/2084377289testbysam/BAGS/PRIYAL GENERAL (BOADTARA).htm	',
customer2: '	MONIKA FANCY STORE (BOADTARA)	', toys2: 'TOYS:-	', amount2: '	3	',  url2: '	/2084377289testbysam/BOADTARA/MONIKA FANCY STORE (BOADTARA).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	PUNNET SAHU  (BOADTARA)	', toys3: 'TOYS:-	', amount3: '	1693	',  url3: '	/2084377289testbysam/BOADTARA/PUNNET RAM  SAHU  (BOADTARA).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
																	},
{id: 1, name: '	BORLA', total: ' (	0	)', 														
customer1: '	KESARWANI CLOTH (BORLA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/BORLA/KESARWANI CLOTH (BORLA).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
																	},
																	
{id: 1, name: '	CHAITMA', total: ' (	6864	)', 														
customer1: '	JEET (CHAITMA)	', toys1: 'TOYS:-	', amount1: ' 	6864	',  url1: '	/2084377289testbysam/CHAITMA/JEET CHAITMA.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
																	},
																	
{id: 1, name: '	CHAKRBHTA ', total: ' (	37822	)', 														
customer1: '	MAHAMAYA THRED HOUSE (CHBT)	', toys1: 'TOYS:-	', amount1: ' 	11899	',  url1: '	/2084377289testbysam/CHAKKARBHATA/MAHAMAYA%20THREAD%20(CHAKKARBHATA)%20103.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	MAHESH STD (CHBT)	', toys2: 'TOYS:-	', amount2: '	25923	',  url2: '	/2084377289testbysam/CHAKKARBHATA/MAHESH%20STD%20(CHAKKARBHATA)%20161.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	NEW JAI MATA DI  (CHBT)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/CHAKKARBHATA/NEW%20JAIMATA%20DI%20(CHAKKARBHATA)%2081.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '	2619	',  urlb3: '	/2084377289testbysam/BAGS/JAI MATA  DI (CHAKKARBHATA).htm	',
customer4: '	BABA GENERAL (CHBT)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/CHAKKARBHATA/BABA%20GENERAL%20(CHAKKARBHATA)%20%20188.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	LAXMI KITABGHAR (CHBT)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/CHAKKARBHATA/LAXMI%20KITAB%20GHAR%20(CHAKKARBHATA).htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '		',
customer6: '	SIDDARTH (CHBT)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/CHAKKARBHATA/SIDDARTH%20(CHAKKARBHATA)%20139.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '		', bags6: 'ORDER	', amountb6: '		',  urlb6: '		',
customer7: '	MAHAMAYA GENERAL (CHBT)	', toys7: 'TOYS:-	', amount7: '	16915	',  url7: '	/2084377289testbysam/CHAKKARBHATA/COUSTOMER CONTACT AND REMINDER.htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '		', bags7: 'ORDER	', amountb7: '		',  urlb7: '		',
																	},
{id: 1, name: '	CHAMPA', total: ' (	25245	)', 														
customer1: '	AMIT SHRINGAR AND GIFT (CHAMPA)	', toys1: 'TOYS:-	', amount1: ' 	4	',  url1: '	/2084377289testbysam/CHAMPA/AMIT SHRINGAR AND GIFT (CHAMPA).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	SOHAM GIFT (CHAMPA)	', toys2: 'TOYS:-	', amount2: '	229	',  url2: '	/2084377289testbysam/CHAMPA/SOHAM GIFT (CHAMPA) 86.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '	669	',  urlb2: '	/2084377289testbysam/BAGS/SOHAM GIFT (CHAMPA).htm	',
customer3: '	HEMA SHRINGAR (CHAMPA)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/CHAMPA/HEMA SUHAG (CHAMPA).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
customer4: '	RANI GENERAL (CHAMPA)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/CHAMPA/RANI GENERAL STORE (CHAMPA).htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	SHRINGAR SADAN (CHAMPA)	', toys5: 'TOYS:-	', amount5: '	-11	',  url5: '	/2084377289testbysam/CHAMPA/SHRINGAR SAADAN (CHAMPA) 284.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '		',
customer6: '	RADHA SWAMI (CHAMPA)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/CHAMPA/RADHA%20SWAMI%20(CHAMPA).htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '		', bags6: 'ORDER	', amountb6: '		',  urlb6: '		',
customer7: '	MOHSIN (CHAMPA)	', toys7: 'TOYS:-	', amount7: '	3164	',  url7: '	/2084377289testbysam/CHAMPA/MOHSIN BHAI (CHAMPA) 271.htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '		', bags7: 'ORDER	', amountb7: '		',  urlb7: '		',
customer8: '	MAA BHAGWATI (CHAMPA)	', toys8: 'TOYS:-	', amount8: '	2482	',  url8: '	/2084377289testbysam/CHAMPA/MAA BHAGWATI (CHAMPA) 238.htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '		', bags8: 'ORDER	', amountb8: '		',  urlb8: '		',
customer9: '	POOJA NOVELTY (CHAMPA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/CHAMPA/POOJAA NOVELTY (CHAMPA) 40.htm	', GIFTS9: 'PAYMENT	', amountg9: '		',  urlg9: '		', bags9: 'ORDER	', amountb9: '		',  urlb9: '		',
customer10: '	KANHA SUPERBAZAR (CHAMPA)	', toys10: 'TOYS:-	', amount10: '	2277	',  url10: '	/2084377289testbysam/CHAMPA/KANHA SUPER BAZAAR (CHAMPA) 262.htm	', GIFTS10: 'PAYMENT	', amountg10: '		',  urlg10: '		', bags10: 'ORDER	', amountb10: '		',  urlb10: '		',
customer11: '	ANIL DHARMIK (CHAMPA)	', toys11: 'TOYS:-	', amount11: '	17100	',  url11: '	/2084377289testbysam/CHAMPA/ANIL DHARMIK (CHAMPA).htm	', GIFTS11: 'PAYMENT	', amountg11: '		',  urlg11: '		', bags11: 'ORDER	', amountb11: '		',  urlb11: '		',
																	},
{id: 1, name: '	CHURRI ', total: '(	27137	)', 														
customer1: '	NEHA GENERAL (CHURI)	', toys1: 'TOYS:-	', amount1: ' 	21233	',  url1: '	/2084377289testbysam/CHURI/NEHA%20(CHURRI)%2071.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	MAA KAUSA GAI (CHURRI)	', toys2: 'TOYS:-	', amount2: '	5904	',  url2: '	/2084377289testbysam/CHURI/MAA%20KAUSA%20GAI%20(CHURRI)%20292.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
																	},
																	
{id: 1, name: '	DABRA', total: ' (	10261	)', 														
customer1: '	FASHION PARK (DABRA)	', toys1: 'TOYS:-	', amount1: ' 	10261	',  url1: '	/2084377289testbysam/DABRA/FASHION PARK (DABRA) 297.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
																	},
{id: 1, name: '	DHARAMJAYGARH', total: ' (	0	)', 														
customer1: '	AKANKSHA  (DHARAMJAYGARH)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/DHARMJAYGARH/AKANSHA GENERAL (DHARAMJAYGARH) 3.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
																	},
																	
{id: 1, name: '	DIPKA', total: ' (	44469	)', 														
customer1: '	KOLKATA MAHASALE (DIPKA)	', toys1: 'TOYS:-	', amount1: ' 	11504	',  url1: '	/2084377289testbysam/DIPKA/KOLKATA%20MAHA%20SALE%20(DIPKA)%2048.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '	12995	',  urlb1: '	/2084377289testbysam/BAGS/DETAILS.htm	',
customer2: '	NEW BOOK DEPO (DIPKA)	', toys2: 'TOYS:-	', amount2: '	9	',  url2: '	/2084377289testbysam/DIPKA/NEW%20BOOK%20DEPO.%20(DIPKA)%20110.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	GEETA BOOK DEPO (DIPKA)	', toys3: 'TOYS:-	', amount3: '	21949	',  url3: '	/2084377289testbysam/DIPKA/GEETA%20BOOK%20DEPO.%20(DIPKA)%20266.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
customer4: '	SHANTI SUHAG (DIPKA)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/DIPKA/SHANTI%20SUHAG%20(DIPKA)%20129.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '	25	',  urlb4: '	/2084377289testbysam/BAGS/SHANTI SUHAG  (DIPKA).htm	',
customer5: '	KHUSHI BENGALS (DIPKA)	', toys5: 'TOYS:-	', amount5: '	10581	',  url5: '	/2084377289testbysam/DIPKA/KHUSHI%20BENGALS%20(DIPKA)%204.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '		',
customer6: '	VASU COLLECTION  (DIPA)	', toys6: 'TOYS:-	', amount6: '	426	',  url6: '	/2084377289testbysam/DIPKA/VASU%20COLLECTION.%20(DIPKA)%20149.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '		', bags6: 'ORDER	', amountb6: '		',  urlb6: '		',
																	},
{id: 1, name: '	GANYARI', total: ' (	700	)', 														
customer1: '	MISHRA GENERAL (GANYARI)	', toys1: 'TOYS:-	', amount1: ' 	700	',  url1: '	/2084377289testbysam/GANYARI/MISHRA (GANYARI) 154.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
																	},
{id: 1, name: '	GOBIRPATH', total: ' (	0	)', 														
customer1: '	PREETY GOBRIPATH (GOBRIPATH)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/GOBRIPATH/PREETI (GOBRIPATH) 97.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	PRATAB  GOBRIPAT	', toys2: 'TOYS:-	', amount2: ' 	0	',  url2: '	/2084377289testbysam/GOBRIPATH/PRATAB (GOBRIPAT).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
																	},
																	
{id: 1, name: '	HARDIBAZAR ', total: '(	17421	)', 														
customer1: '	ASHWANI SHRINGAR (HARDIBAZAR)	', toys1: 'TOYS:-	', amount1: ' 	4360	',  url1: '	/2084377289testbysam/HARDIBAZAR/ASHWINI GENERAL (HARDIBAZAR) 174.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	SANSKRITI GENERAL  (HARDIBAZAR)	', toys2: 'TOYS:-	', amount2: '	4197	',  url2: '	/2084377289testbysam/HARDIBAZAR/SANSKRITI GENERAL (HARDIBAZAR).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	NIKHIL FANCY (HARDIBAZAR)	', toys3: 'TOYS:-	', amount3: '	2	',  url3: '	/2084377289testbysam/HARDIBAZAR/NIKHIL FANCY (HARDIBAZAR) 281.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '	4	',  urlb3: '	/2084377289testbysam/BAGS/NIKHIL FANCY (HARDIBAZAR).htm	',
customer4: '	 SONI SHRINGAR (HARDIBAZAR)	', toys4: 'TOYS:-	', amount4: ' 	3382	',  url4: '	/2084377289testbysam/HARDIBAZAR/SONI SHRINGAR (HARDIBAZAR) 72.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	MANOJ KAPDA BAZAR (HARDIBAZAR)	', toys5: 'TOYS:-	', amount5: '	5480	',  url5: '	/2084377289testbysam/HARDIBAZAR/MANOJ KAPDA (HARDIBAZAR) 252.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '		',
																	},
{id: 1, name: '	HARDIKALA', total: ' (	0	)', 														
customer1: '	MANMOHAN (HARDIKALA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/HARDIKALA/MANMOHAN (HARDIKALA) 69.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	SANAJY  (HARDIKALA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/HARDIKALA/SANJAY. (HARDIKALA) 291.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
																	},
{id: 1, name: '	HASOD', total: ' (	10683	)', 														
customer1: '	LAXMI FANCY (HASOD)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/HASOD/LAXMI%20GENERAL%20(HASOD)%20145.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	SAHU FANCY (HASOD)	', toys2: 'TOYS:-	', amount2: '	6	',  url2: '	/2084377289testbysam/HASOD/SAHU%20FANCY%20(HASOD)%20301.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	REKHA FANCY STORE (HASOD)	', toys3: 'TOYS:-	', amount3: '	8215	',  url3: '	/2084377289testbysam/HASOD/REKHA%20FANCY%20STORE%20(HASOD).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '	0	',  urlb3: '	/2084377289testbysam/BAGS/REKHA FANCY (HASOD).htm	',
customer4: '	CHAVI GENERAL (HASOD)	', toys4: 'TOYS:-	', amount4: ' 	2462	',  url4: '	/2084377289testbysam/HASOD/CHAVVI%20GENERAL%20(HASOD).htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	MAHARAJ FANCY (HASOD)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/HASOD/MAHARAJ%20FANCY%20STORE%20(HASOD).htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '		',
																	},
{id: 1, name: '	JAIJAIPURI', total: ' (	121	)', 														
customer1: '	TOMESH CHASHMA	', toys1: 'TOYS:-	', amount1: ' 	6	',  url1: '	/2084377289testbysam/JAIJAIPUR/TOMESH (JAIJAIPUR).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	KHUSHI  GENERAL  	', toys2: 'TOYS:-	', amount2: '	115	',  url2: '	/2084377289testbysam/JAIJAIPUR/KHUSHI GENERAL (JAYJAYPUR).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
																	},
{id: 1, name: '	JAITHARI', total: ' (	26116	)', 														
customer1: '	SHIV PLASTIC (JAITHARI)	', toys1: 'TOYS:-	', amount1: ' 	12916	',  url1: '	/2084377289testbysam/JAITHARI/MUSKAN (JAITHARI) 79.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	MUSKAN FANCY (JAITHARI)	', toys2: 'TOYS:-	', amount2: '	13200	',  url2: '	/2084377289testbysam/JAITHARI/SHIV PLASTICS (JAITHARI) 143.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	ANKIT (JAITHARI)	', toys3: 'TOYS:-	', amount3: '	4110	',  url3: '	/2084377289testbysam/JAITHARI/ANKIT (JAITHARI).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
																	},
{id: 1, name: '	JANJGIR', total: ' (	6078	)', 														
customer1: '	GARIMA FANCY (JANJGIR)	', toys1: 'TOYS:-	', amount1: ' 	2962	',  url1: '	/2084377289testbysam/JANJGIR/GARIMA FANCY (JANJGIR) 166.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	PRATEEK GENERAL  (JANJGIR)	', toys2: 'TOYS:-	', amount2: '	3116	',  url2: '	/2084377289testbysam/JANJGIR/PRATEEK GENERAL (JANJGIR) 150.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	NAMDEV GENERAL (JANJGIR)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/JANJGIR/NAMDEV GENERAL (JANJGIR) 158.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
customer4: '	SATYAM GENERAL (JANJGIR)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/JANJGIR/SATYAM GENERAL (JANJGIR) 132.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	SUPER BAG HOUSE (JANJGIR)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/JANJGIR/SUPER BAG HOUSE (JANJGIR) 37.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '		',
customer6: '	AKASH GENERAL (JANJGIR)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/JANJGIR/AKASH GENERAL STORE (JANJGIR) 11.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '		', bags6: 'ORDER	', amountb6: '		',  urlb6: '		',
customer7: '	MADANLAL KAPDA (JANJGIR)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/JANJGIR/MADANLAL (JANJGIR).htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '		', bags7: 'ORDER	', amountb7: '		',  urlb7: '		',
customer8: '	RAJESH GENERAL (JANJGUR	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/JANJGIR/RAJESH GENERAL (JANJGIR).htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '		', bags8: 'ORDER	', amountb8: '		',  urlb8: '		',
																	},
{id: 1, name: '	JHARSUKDA ', total: '(	10134	)', 														
customer1: '	 FASHION PARK (JHARSUKDA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/JHARSUKDA/FASHION PARK (JHARSUKDA) 167.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	GUDDU (JHARSUKDA)	', toys2: 'TOYS:-	', amount2: '	10134	',  url2: '	/2084377289testbysam/JHARSUKDA/GUDDU (JHARSUKDA) 43.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
																	},
{id: 1, name: '	JONDHRA ', total: '(	9193	)', 														
customer1: '	BABA GENERAL (JONDHRA)	', toys1: 'TOYS:-	', amount1: ' 	9193	',  url1: '	/2084377289testbysam/JONDHRA/BABA GENERAL (JONDHRA).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	PURAN (JONDHARA)	', toys2: 'TOYS:-	', amount2: ' 	1000	',  url2: '	/2084377289testbysam/JONDHRA/PURAN FANCY  (JONDHARA).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	SAHELI BEAUTY (JONDHARA)	', toys3: 'TOYS:-	', amount3: ' 	5216	',  url3: '	/2084377289testbysam/JONDHRA/SAHELI BEAUTY (JONDHARA).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
																	
																	},
{id: 1, name: '	KATGHORA', total: ' (	11615	)', 														
customer1: '	ROOP SHRINGAR	', toys1: 'TOYS:-	', amount1: ' 	2518	',  url1: '	/2084377289testbysam/KATGHORA/ROOP%20SHRINGAR%20(KATGHORA)%20173.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	MAHABALI (KATGHORA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/KATGHORA/MAHABALI.%20(KATGHORA)%2063.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	KAREENA BOOT HOUSE (KATGHORA)	', toys3: 'TOYS:-	', amount3: '	300	',  url3: '	/2084377289testbysam/KATGHORA/KAREENA%20BOOT%20(KATGHOTA)%20(NEW%2029).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
customer4: '	PRADEEP BHAIYA (KATGHORA)	', toys4: 'TOYS:-	', amount4: ' 	8797	',  url4: '	/2084377289testbysam/KATGHORA/PRADEEP BHAI (KATGHORA).htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	PADUKA BOOT HOUSE (KATGHORA)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/KATGHORA/PADUKA%20BOOT%20(KATGHORA)%20250.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '		',
customer6: '	TIRUPATI GENERAL (KATGORA)	', toys6: 'TOYS:-	', amount6: '	2	',  url6: '	/2084377289testbysam/KATGHORA/TIRUPATI GENERAL (KATGHORA).htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '		', bags6: 'ORDER	', amountb6: '		',  urlb6: '		',
customer7: '	SHUBH KADAM (KATGHORA)	', toys7: 'TOYS:-	', amount7: '	2199	',  url7: '	/2084377289testbysam/KATGHORA/PADUKA BOOT (KATGHORA) 250_files.htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '		', bags7: 'ORDER	', amountb7: '		',  urlb7: '		',
customer8: '	TANISHA COLLECTION (KATGHORA)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/KATGHORA/TANSIHA COLLECTION (KATGHORA).htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '		', bags8: 'ORDER	', amountb8: '		',  urlb8: '		',
customer9: '	GAURI UPHAR (KATGHORA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/KATGHORA/GAURI UPHAR (KATGHORA).htm	', GIFTS9: 'PAYMENT	', amountg9: '		',  urlg9: '		', bags9: 'ORDER	', amountb9: '		',  urlb9: '		',
																	},
{id: 1, name: '	KATGI', total: ' (	59737	)', 														
customer1: '	VIDHYARTHI GENERAL (KATGI)	', toys1: 'TOYS:-	', amount1: ' 	3	',  url1: '	/2084377289testbysam/KATGI/VIDYARTH GENERAL (KATGI) 106.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	MANOJ FASHION	', toys2: 'TOYS:-	', amount2: '	26346	',  url2: '	/2084377289testbysam/KATGI/MANOJ FASHION (KATGI) 164.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	MAHAMAYA GENERAL (KATGI)	', toys3: 'TOYS:-	', amount3: '	2	',  url3: '	/2084377289testbysam/KATGI/MAHAMAYA GENERAL. (KATGI) 170_files.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
customer4: '	JYOTI GENRAL (KATGI)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/KATGI/JYOTI GENERAL (KATGI) 10.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	PAWAN GENERAL STORE (KATGI)	', toys5: 'TOYS:-	', amount5: '	29295	',  url5: '	/2084377289testbysam/KATGI/PAWAN GENERAL (KATGI) 38.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '	-44	',  urlb5: '	/2084377289testbysam/BAGS/PAWAN  GENERAL (KATGI).htm	',
customer6: '	SAI GENERAL (KATGI)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/KATGI/SAI GENERAL (KATGI) 264.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '		', bags6: 'ORDER	', amountb6: '		',  urlb6: '		',
customer7: '	SURAJ GENERAL (KATGI)	', toys7: 'TOYS:-	', amount7: '	-2497	',  url7: '	/2084377289testbysam/KATGI/SURAJ GENERAL. (KATGI) 27.htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '		', bags7: 'ORDER	', amountb7: '		',  urlb7: '		',
customer8: '	MANOJ GENERAL (KATGI)	', toys8: 'TOYS:-	', amount8: '	6588	',  url8: '	/2084377289testbysam/KATGI/MANOJ GENERAL. (KATGI) 68.htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '		', bags8: 'ORDER	', amountb8: '		',  urlb8: '		',
																	},
{id: 1, name: '	KAWARDHA ', total: '(	0	)', 														
customer1: '	GURUDEV GENERAL (KAWARDHA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KAWARDHA/GURUDEV GENERAL (KAWARDHA).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	RAJESH FANCY (KAWARDHA)	', toys2: 'TOYS:-	', amount2: ' 	3242	',  url2: '	/2084377289testbysam/KAWARDHA/RAJESH FANCY (KAWARDHA).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	JAIN BENGALS (KAWARDHA)	', toys3: 'TOYS:-	', amount3: '		',  url3: '	/2084377289testbysam/KAWARDHA/JAIN BENGALS (KAWARDHA).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
																	},
{id: 1, name: '	KHAMRIYA', total: ' (	2505	)', 														
customer1: '	FAIR DEAL (KHAMARIYA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KHAMARIYA/FAIR%20DEAL.%20(KHAMARIYA)%20%2015.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	SHUBHAM GENERAL (KHAMARIYA)	', toys2: 'TOYS:-	', amount2: '	2505	',  url2: '	/2084377289testbysam/KHAMARIYA/SHUBHAM (KAMARIYA)  180.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
																	},
{id: 1, name: '	KHAMI', total: ' (	9006	)', 														
customer1: '	AMISHA GENERAL (KHAMI)	', toys1: 'TOYS:-	', amount1: ' 	6	',  url1: '	/2084377289testbysam/KHAMI/AMISHA GENERAL (KHAMI).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	SAHU GENERAL (KHAMI)	', toys2: 'TOYS:-	', amount2: ' 	9000	',  url2: '	/2084377289testbysam/KHAMI/SAHU GENERAL (KHAMI).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
																	},
{id: 1, name: '	KARNODH ', total: '(	0	)', 														
customer1: '	ASHOK KARNODH	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KARNODH/ASHOK (KARNODH) 144.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
																	},
{id: 1, name: '	KHARSIYA ', total: '(	-3935	)', 														
customer1: '	ABHINANDAN (KHARSIYA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KHARSIYA/ABHINANDAN (KHARSIYA).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	KRISHAN COLLECTION (KHARSIYA)	', toys2: 'TOYS:-	', amount2: '	-3935	',  url2: '	/2084377289testbysam/KHARSIYA/KRISHAN COLLECTION (KHARSIYA).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
																	},
{id: 1, name: '	KHAROD', total: ' (	0	)', 														
customer1: '	MOHAN GENERAL 	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KHAROD/MOHAN (KHAROD)  65.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
																	},
{id: 1, name: '	KASHDOL', total: ' (	4067	)', 														
customer1: '	MAA SHETLA (KASHDOL)	', toys1: 'TOYS:-	', amount1: ' 	4059	',  url1: '	/2084377289testbysam/KASHDOL/MAA SHETLA. (KASHDOL) 108.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '	2916	',  urlb1: '	/2084377289testbysam/BAGS/MAA SHETLA (KASHDOL).htm	',
customer2: '	BALAJI (KASHDOL)	', toys2: 'TOYS:-	', amount2: '	8	',  url2: '	/2084377289testbysam/KASHDOL/BALAJI. (KASHDOL) 288.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
																	},
{id: 1, name: '	KORBA', total: ' (	1	)', 														
customer1: '	BANSAL ENTERPRISES	', toys1: 'TOYS:-	', amount1: ' 	1	',  url1: '	/2084377289testbysam/KORBA/BANSAL%20ENTERPRISES%20(KOSABADI)%20160.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	GARIMA FANCY (NIHARIKA)	', toys2: 'TOYS:-	', amount2: ' 	9927	',  url2: '	/2084377289testbysam/KORBA/GARIMA FANCY (NIHARIKA).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
																	},
{id: 1, name: '	KOTA', total: ' (	9753	)', 														
customer1: '	AGGARWAL GENERAL (KOTA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KOTA/AGGARWAL GENERAL. (KOTA) 30.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	MAHAMAYA FASHION HOUSE	', toys2: 'TOYS:-	', amount2: '	3	',  url2: '	/2084377289testbysam/KOTA/MAHAMAYA FASHION HOUSE (KOTA) 18.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	NISHA GENERAL (KOTA)	', toys3: 'TOYS:-	', amount3: '	1290	',  url3: '	/2084377289testbysam/KOTA/NISHA GENERAL (KOTA) 260.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
customer4: '	NIKITA GENERAL (KOTA)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/KOTA/NIKITA (KOTA).htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	AKANKSHA GENERAL (KOTA)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/KOTA/AKANKSHA GENERAL(KOTA) 7.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '	889	',  urlb5: '	/2084377289testbysam/BAGS/AKANKSHA GENERAL (KOTA).htm	',
customer6: '	SARITA GENERAL (KOTA)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/KOTA/SARITA GENERAL (KOTA).htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '		', bags6: 'ORDER	', amountb6: '		',  urlb6: '		',
customer7: '	SHAILESH GENERAL (KOTA)	', toys7: 'TOYS:-	', amount7: '	7914	',  url7: '	/2084377289testbysam/KOTA/SHAILESH GENERAL. (KOTA) 121.htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '		', bags7: 'ORDER	', amountb7: '	0	',  urlb7: '	/2084377289testbysam/BAGS/SHAILESH GENERAL (KOTA).htm	',
customer8: '	ALL IN ONE (KOTA)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/KOTA/ALL IN ONE (KOTA).htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '		', bags8: 'ORDER	', amountb8: '		',  urlb8: '		',
customer9: '	KALPANA GENERAL BABAN (KOTA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/KOTA/KALPANA (KOTA) 85.htm	', GIFTS9: 'PAYMENT	', amountg9: '		',  urlg9: '		', bags9: 'ORDER	', amountb9: '		',  urlb9: '		',
customer10: '	AKANKSHA GENERAL (BABLU) (KOTA)	', toys10: 'TOYS:-	', amount10: '	546	',  url10: '	/2084377289testbysam/KOTA/AKANKSHA GENERAL BABLO (KOTA) 122.htm	', GIFTS10: 'PAYMENT	', amountg10: '		',  urlg10: '		', bags10: 'ORDER	', amountb10: '		',  urlb10: '		',
customer11: '	RAJA MOBILE (KOTA)	', toys11: 'TOYS:-	', amount11: '	0	',  url11: '	/2084377289testbysam/KOTA/RAJA MOBILE (KOTA).htm	', GIFTS11: 'PAYMENT	', amountg11: '		',  urlg11: '		', bags11: 'ORDER	', amountb11: '		',  urlb11: '		',
customer12: '	GUPTA JI (KOTA)	', toys12: 'TOYS:-	', amount12: '	10	',  url12: '	/2084377289testbysam/KOTA/GUPTA JI (KOTA).htm	', GIFTS12: 'PAYMENT	', amountg12: '		',  urlg12: '		', bags12: 'ORDER	', amountb12: '		',  urlb12: '		',
customer13: '	MULCHAND (KOTA)	', toys13: 'TOYS:-	', amount13: '	4	',  url13: '	/2084377289testbysam/KOTA/MULCHAND (KOTA).htm	', GIFTS13: 'PAYMENT	', amountg13: '		',  urlg13: '		', bags13: 'ORDER	', amountb13: '		',  urlb13: '		',
																	},
{id: 1, name: '	KOTMISONAR ', total: '(	0	)', 														
customer1: '	JANVI GENERAL (KOTMISONAR)	', toys1: 'TOYS:-	', amount1: ' 		',  url1: '		', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
																	},
{id: 1, name: '	KUNDA', total: ' (	1782	)', 														
customer1: '	CHANDRAKAR GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KUNDA/CHANDRAKAR GENERAL (KUNDA) 102.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '	9880	',  urlb1: '	/2084377289testbysam/BAGS/NEW CHANDRAKAR (KUNDA).htm	',
customer2: '	SHREE RADHA RANI (KUNDA)	', toys2: 'TOYS:-	', amount2: '	1779	',  url2: '	/2084377289testbysam/KUNDA/SHREE RADHA RANI (KUNDA).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	SHRIRAM GENERAL (KUNDA)	', toys3: 'TOYS:-	', amount3: '	3	',  url3: '	/2084377289testbysam/KUNDA/SHRIRAM GENERAL. (KUNDA) 34.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '	0	',  urlb3: '	/2084377289testbysam/BAGS/SHRIRAM GENERAL (KUNDA).htm	',
customer4: '	KANHA  FANCY (KUNDA)	', toys4: 'TOYS:-	', amount4: '	12150	',  url4: '	/2084377289testbysam/KUNDA/KANHA FANCY (KUNDA).htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	TD GENERAL	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/KUNDA/TD GENERAL (RUSSEY KUNDA).htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '		',
																	},
{id: 1, name: '	LAWAN', total: ' (	0	)', 														
customer1: '	VINOD LAWAN	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/LAWAN/VINOD (LAWAN).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
																	},
{id: 1, name: '	LORMI ', total: '(	27315	)', 														
customer1: '	NANDANI GENERAL (LORMI)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/LORMI/NANDINI GENERAL (LORMI) 172.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	ASHISH GENERAL (LORMI)	', toys2: 'TOYS:-	', amount2: '	23075	',  url2: '	/2084377289testbysam/LORMI/ASHISH GENERAL .(LORMI) (NEW 5).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	KESARWANI (LORMI)	', toys3: 'TOYS:-	', amount3: '	4239	',  url3: '	/2084377289testbysam/LORMI/KESARWANI GIFT (LORMI) 275.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
customer4: '	KANHA COLLECTION (LORMI)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/LORMI/KANHA COLLECTION .(LORMI).htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	KAVYA GENERAL (LORMI)	', toys5: 'TOYS:-	', amount5: ' 	0	',  url5: '	/2084377289testbysam/LORMI/KAVYA GENERAL (LORMI) (NEW 33).htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '		',
customer6: '	MAMTA GENERAL (LORMI)	', toys6: 'TOYS:-	', amount6: ' 	1	',  url6: '	/2084377289testbysam/LORMI/MAMTA LORMI.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '		', bags6: 'ORDER	', amountb6: '		',  urlb6: '		',
customer7: '	SALUJA BAG (LORMI)	', toys7: 'TOYS:-	', amount7: ' 	23880	',  url7: '	/2084377289testbysam/LORMI/SALUJA BAG (LORMI).htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '		', bags7: 'ORDER	', amountb7: '	12020	',  urlb7: '	/2084377289testbysam/BAGS/SALUJA BAG (LORMI).htm	',
customer8: '	PARIDHAN AKHRAR (LORMI)	', toys8: 'TOYS:-	', amount8: ' 		',  url8: '		', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '		', bags8: 'ORDER	', amountb8: '		',  urlb8: '		',
																	},
{id: 1, name: '	MALHAR', total: ' (	57348	)', 														
customer1: '	ANKIT FANCY (MALHAR)	', toys1: 'TOYS:-	', amount1: ' 	31884	',  url1: '	/2084377289testbysam/MALHAR/ANKITA (MALHAR) (NEW 7).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	PURVI FANCY (MALHAR)	', toys2: 'TOYS:-	', amount2: '	2687	',  url2: '	/2084377289testbysam/MALHAR/PURVI FANCY (MALHAR) 290.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	JAANVI GENERAL (MALHAR)	', toys3: 'TOYS:-	', amount3: '	22777	',  url3: '	/2084377289testbysam/MALHAR/JANVI GENERAL (MALHAR) 25.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '	10975	',  urlb3: '	/2084377289testbysam/BAGS/JANVI  (MALHAR).htm	',
customer4: '	JITENDRA (MALHAR)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/MALHAR/JITENDRA (MALHAR) 168.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
																	},
{id: 1, name: '	MALKHARODA ', total: '(	23041	)', 														
customer1: '	PARI FANCY	', toys1: 'TOYS:-	', amount1: ' 	17815	',  url1: '	/2084377289testbysam/MALKHAROD/PARI FANCY (MALKHAROD) 184.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '	9962	',  urlb1: '	/2084377289testbysam/BAGS/PARI FANCY (MALKHAROD).htm	',
customer2: '	PRAKASH FANCY	', toys2: 'TOYS:-	', amount2: ' 	5226	',  url2: '	/2084377289testbysam/MALKHAROD/PRAKASH FANCY (MALKHARODA).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	SHARDA FANCY	', toys3: 'TOYS:-	', amount3: ' 	0	',  url3: '	/2084377289testbysam/MALKHAROD/SHARDA FANCY (MALKHARODA).htm	', bag3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bag3: 'ORDER	', amountb3: '		',  urlb3: '		',
																	},
{id: 1, name: '	MANENDRAGARH', total: ' (	0	)', 														
customer1: '	AISHWARIYA GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/MANENDRAGARH/AISHWARIYA (MANENDRAGARH).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
																	},
{id: 1, name: '	MARO ', total: '(	1534	)', 														
customer1: '	RAJA MARO (MARO)	', toys1: 'TOYS:-	', amount1: ' 	1530	',  url1: '	/2084377289testbysam/MARO/RAJA (MARO).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	ANMOL  (MARO)	', toys2: 'TOYS:-	', amount2: '	4	',  url2: '	/2084377289testbysam/MARO/ANMOL (MARO).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
																	},
{id: 1, name: '	MARWAHI', total: ' (	39355	)', 														
customer1: '	LAXMI GENERAL (MARWAHI)	', toys1: 'TOYS:-	', amount1: ' 	18402	',  url1: '	/2084377289testbysam/MARWAHI/LAXMI GENERAL .(MARWAHI) 240.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	JAFFAR BOOT (MARWAHI)	', toys2: 'TOYS:-	', amount2: '	20953	',  url2: '	/2084377289testbysam/MARWAHI/JAFFAR BOOT .(MARWAHI) 5.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '	439	',  urlb2: '	/2084377289testbysam/BAGS/JAFFAR BOOT (MARWAHI).htm	',
																	},
{id: 1, name: '	MASTURI ', total: '(	11878	)', 														
customer1: '	KISHORE RIKSHAW	', toys1: 'TOYS:-	', amount1: ' 	8083	',  url1: '	/2084377289testbysam/MASTURI/KISHORE RIKSHAW (MASTURI) 114.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	LAXMI GENERAL	', toys2: 'TOYS:-	', amount2: '	3795	',  url2: '	/2084377289testbysam/MASTURI/LAXMI GENERAL (MASTURI) 273.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '	0	',  urlb2: '	/2084377289testbysam/BAGS/LAXMI GENERAL (MASTURI).htm	',
customer3: '	KISHORE KIRANA (MASTURI)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/MASTURI/KISHORE KIRANA (MASTURI).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
																	},
{id: 1, name: '	MOHGAON ', total: '(	10706	)', 														
customer1: '	MANISH GENERAL	', toys1: 'TOYS:-	', amount1: ' 	10706	',  url1: '	/2084377289testbysam/MOHAGAON/MANISH (MOHGAON) 156.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	SHUBHAM GENERAL (MOHGAON)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/MOHAGAON/SHUBHAM GENERAL (MOHGAON).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
																	},
{id: 1, name: '	MUNGELI', total: ' (	19379	)', 														
customer1: '	TOY ZONE 	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/MUNGELI/TOY%20ZONE%20(MUNGELI).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	BABA GENERAL	', toys2: 'TOYS:-	', amount2: '	-1	',  url2: '	/2084377289testbysam/MUNGELI/BABA%20GENERAL%20(MUNGELI)%20%2023.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	GURUNANAK GENERAL	', toys3: 'TOYS:-	', amount3: '	716	',  url3: '	/2084377289testbysam/MUNGELI/GURUNANAK%20GENERAL%20(MUNGELI)%2076.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
customer4: '	 JEENAT BENGALS (MUNGELI)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/MUNGELI/ZEENAT%20BENGALS%20(MUNGELI)%2045.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	PAYAL BAG HOUSE	', toys5: 'TOYS:-	', amount5: '	2042	',  url5: '	/2084377289testbysam/MUNGELI/PAYAL%20BAG%20(MUNGELI)%20171.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '		',
customer6: '	PRIYA LADIES	', toys6: 'TOYS:-	', amount6: '	5197	',  url6: '	/2084377289testbysam/MUNGELI/PRIYA%20LADIES%20(MUNGELI)%2099.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '		', bags6: 'ORDER	', amountb6: '		',  urlb6: '		',
customer7: '	SANGAM FANCY	', toys7: 'TOYS:-	', amount7: '	10924	',  url7: '	/2084377289testbysam/MUNGELI/SANGAM%20FANCY%20(MUNGELI)%20(NEW%20169).htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '		', bags7: 'ORDER	', amountb7: '		',  urlb7: '		',
customer8: '	OM GENERAL (MUNGELI)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/MUNGELI/OM%20GENERAL%20(MUNGELI)%2087.htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '		', bags8: 'ORDER	', amountb8: '		',  urlb8: '		',
customer9: '	K.V FASHION (MUNGELI)	', toys9: 'TOYS:-	', amount9: '	500	',  url9: '	/2084377289testbysam/MUNGELI/K.V FASHION (MUNGELI).htm	', GIFTS9: 'PAYMENT	', amountg9: '		',  urlg9: '		', bags9: 'ORDER	', amountb9: '		',  urlb9: '		',
customer10: '	SAGAR BAG  RAVI (MUNGELI)	', toys10: 'TOYS:-	', amount10: '	1	',  url10: '	/2084377289testbysam/MUNGELI/SAGAR BAG RAVI (MUNGELI).htm	', GIFTS10: 'PAYMENT	', amountg10: '		',  urlg10: '		', bags10: 'ORDER	', amountb10: '		',  urlb10: '		',
customer11: '	MAA PARMESHWARI (MUNGELI)	', toys11: 'TOYS:-	', amount11: '	1350	',  url11: '	/2084377289testbysam/MUNGELI/MAA PARMESHWARI (MUNGELI).htm	', GIFTS11: 'PAYMENT	', amountg11: '		',  urlg11: '		', bags11: 'ORDER	', amountb11: '		',  urlb11: '		',
customer12: '	GULSHAN FANCY (MUNGELI)	', toys12: 'TOYS:-	', amount12: '	22	',  url12: '	/2084377289testbysam/MUNGELI/GULSHAN FANCY (MUNGELI).htm	', GIFTS12: 'PAYMENT	', amountg12: '		',  urlg12: '		', bags12: 'ORDER	', amountb12: '		',  urlb12: '		',
customer13: '	MAHALAXMI FANCY (MUNGELI)	', toys13: 'TOYS:-	', amount13: '	4948	',  url13: '	/2084377289testbysam/MUNGELI/MAHALAXMI FANCY (MUNGELI).htm	', GIFTS13: 'PAYMENT	', amountg13: '		',  urlg13: '		', bags13: 'ORDER	', amountb13: '		',  urlb13: '		',
																	},
{id: 1, name: '	SILLI', total: ' (	3089	)', 														
customer1: '	OM LAXMI (SILLI)	', toys1: 'TOYS:-	', amount1: ' 	3089	',  url1: '	/2084377289testbysam/SILLI/OM LAXMI SILLI.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
																	},
																	
{id: 1, name: '	PACHPEDI ', total: '(	14195	)', 														
customer1: '	VINAY GENERAL (PACHPEDI)	', toys1: 'TOYS:-	', amount1: ' 	6500	',  url1: '	/2084377289testbysam/PACHPEDI/VINAY (PACHPEDI) 24.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	SAHIL (PACHPEDI)	', toys2: 'TOYS:-	', amount2: '	7695	',  url2: '	/2084377289testbysam/PACHPEDI/SAHIL (PACHPEDI) 119.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	JAISWAL ELECRICALS (PACHPEDI)	', toys3: 'TOYS:-	', amount3: '	3984	',  url3: '	/2084377289testbysam/PACHPEDI/JAISWAL ELECTRICAL (PACHPEDI).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
																	},
{id: 1, name: '	PAMGARH ', total: '(	0	)', 														
customer1: '	BABA SCHOOL POINT (PAMGARH)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/PAMGARH/BABA%20SCHOOL%20POINT%20(PAMGARH)%2090.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	KABIR (PAMGARH)	', toys2: 'TOYS:-	', amount2: ' 	0	',  url2: '	/2084377289testbysam/PAMGARH/KABIR (PAMGARH).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
																	},
																	
{id: 1, name: '	PALI', total: ' (	31126	)', 														
customer1: '	ARADHYA GENERAL (PALI)	', toys1: 'TOYS:-	', amount1: ' 	1332	',  url1: '	/2084377289testbysam/PALI/ARADHYA GENERAL (PALI).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	JAI  MAHAMAYA (PALI)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/PALI/JAI%20MAHAMAYA%20(PALI)%20267.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '	750	',  urlb2: '	/2084377289testbysam/BAGS/JAI MAHAMAYA GENERAL (PALI).htm	',
customer3: '	SHIV BEEJ	', toys3: 'TOYS:-	', amount3: '	14369	',  url3: '	/2084377289testbysam/PALI/SHIV%20BEEJ%20(PALI)%20255.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
customer4: '	DEEPAK READYMATE (PALI)	', toys4: 'TOYS:-	', amount4: ' 	10	',  url4: '	/2084377289testbysam/PALI/DEEPAK%20READYMATE%20(PALI).htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '	1679	',  urlb4: '	/2084377289testbysam/BAGS/SHRIJAN (PALI).htm	',
customer5: '	SHRIJAN	', toys5: 'TOYS:-	', amount5: '	3004	',  url5: '	/2084377289testbysam/PALI/SHRIJAN%20(PALI)%20116.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '		',
customer6: '	SUMIT COLLECTION PALI	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/PALI/SUMIT%20COLLECTION%20.(PALI)%20285.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '		', bags6: 'ORDER	', amountb6: '		',  urlb6: '		',
customer7: '	UPHAR COLLECTION PALI	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/PALI/UPHAR%20COLLECTION%20(PALI)%20179.htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '		', bags7: 'ORDER	', amountb7: '		',  urlb7: '		',
customer8: '	SANJAY BOOK DEPO (PALI)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/PALI/SANJAY%20BOOK%20DEPO.%20(PALI)%2054.htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '		', bags8: 'ORDER	', amountb8: '		',  urlb8: '		',
customer9: '	SANJAY GIFT (PALI)	', toys9: 'TOYS:-	', amount9: '	12409	',  url9: '	/2084377289testbysam/PALI/SANJAY%20GIFT.%20(PALI)%20183.htm	', GIFTS9: 'PAYMENT	', amountg9: '		',  urlg9: '		', bags9: 'ORDER	', amountb9: '		',  urlb9: '		',
customer10: '	KHUSHI GENERAL (PALI)	', toys10: 'TOYS:-	', amount10: '	2	',  url10: '	/2084377289testbysam/PALI/KHUSHI GENERAL (PALI).htm	', GIFTS10: 'PAYMENT	', amountg10: '		',  urlg10: '		', bags10: 'ORDER	', amountb10: '		',  urlb10: '		',
																	},
{id: 1, name: '	PANDARIYA', total: ' (	13741	)', 														
customer1: '	FIZZA GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/PANDARIYA/FIZZA GENERAL (PANDARIYA)  32.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	MARUTI GENERAL (PANDARIYA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/PANDARIYA/MARUTI GENERAL (PANDARIYA)  178.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	MATESHWARI (PANDARIYA)	', toys3: 'TOYS:-	', amount3: '	20	',  url3: '	/2084377289testbysam/PANDARIYA/MATESHWARI .(PANDARIYA) 95.htm	', GIFTS3: 'PAYMENT	', amountg3: '	8614	',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
customer4: '	OM SATIONARY (PANDARIYA)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/PANDARIYA/OM SATIONARY (PANDARIYA).htm	', GIFTS4: 'PAYMENT	', amountg4: '	2877	',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	GURUANAK GENERAL (PANDARIYA)	', toys5: 'TOYS:-	', amount5: '	14	',  url5: '	/2084377289testbysam/PANDARIYA/GURUNANAK GENERAL (PANDARIYA) 300.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '		',
customer6: '	ABHAY GENERAL (PANDARIYA)	', toys6: 'TOYS:-	', amount6: '	4161	',  url6: '	/2084377289testbysam/PANDARIYA/ABHAY GENERAL (PANDARIYA) 242.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '		', bags6: 'ORDER	', amountb6: '		',  urlb6: '		',
customer7: '	SOUGAAT GIFT (PANDARIYA)	', toys7: 'TOYS:-	', amount7: '	8440	',  url7: '	/2084377289testbysam/PANDARIYA/SOUGAAT GIFT (PANDARIYA).htm	', GIFTS7: 'PAYMENT	', amountg7: '	6171	',  urlg7: '		', bags7: 'ORDER	', amountb7: '		',  urlb7: '		',
customer8: '	PRATHNA GENERAL (PANDARIYA)	', toys8: 'TOYS:-	', amount8: '	1106	',  url8: '	/2084377289testbysam/PANDARIYA/PRATHNA GENERAL (PANDARIYA).htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '		', bags8: 'ORDER	', amountb8: '		',  urlb8: '		',
customer9: '	SHOE POINT (PANDARIYA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/PANDARIYA/SHOE POINT (PANDARIYA).htm	', GIFTS9: 'PAYMENT	', amountg9: '		',  urlg9: '		', bags9: 'ORDER	', amountb9: '		',  urlb9: '		',
customer10: '	RAKHIKA GENERAL (PANDARIYA)	', toys10: 'TOYS:-	', amount10: '	0	',  url10: '	/2084377289testbysam/PANDARIYA/RADHIKA GENERAL (PANDARIYA).htm	', GIFTS10: 'PAYMENT	', amountg10: '		',  urlg10: '		', bags10: 'ORDER	', amountb10: '		',  urlb10: '		',
																	},
{id: 1, name: '	PANDATARAI', total: ' (	27650	)', 														
customer1: '	ARJUN GENERAL (PANDATARAI)	', toys1: 'TOYS:-	', amount1: ' 	3	',  url1: '	/2084377289testbysam/PANDATARAI/ARJUN GENERAL (PANDATARAI) 181.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	DURGA GENERAL (PANDATARAI)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/PANDATARAI/DURGA GENERAL (PANDATARAI) 274.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	SATGURU	', toys3: 'TOYS:-	', amount3: '	3176	',  url3: '	/2084377289testbysam/PANDATARAI/SATGURU GENERAL (PANDATARAI)  162.htm	', GIFTS3: 'PAYMENT	', amountg3: '	3238	',  urlg3: '		', bags3: 'ORDER	', amountb3: '	2246	',  urlb3: '	/2084377289testbysam/BAGS/SATGURU GENERAL (PANDATARAI).htm	',
customer4: '	VIDYA SUHAG	', toys4: 'TOYS:-	', amount4: ' 	2194	',  url4: '	/2084377289testbysam/PANDATARAI/VIDYA SUHAG (PANDATARAI) 147.htm	', GIFTS4: 'PAYMENT	', amountg4: '	18250	',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	PREETI GENERAL (PANDATARAI)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/PANDATARAI/PREETI GENERAL. (PANDATARAI) 112.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '		',
customer6: '	GANESH (PANDATARAI)	', toys6: 'TOYS:-	', amount6: '	19237	',  url6: '	/2084377289testbysam/PANDATARAI/GANESH GENERAL (PANDATARAI)  279.htm	', GIFTS6: 'PAYMENT	', amountg6: '	26135	',  urlg6: '		', bags6: 'ORDER	', amountb6: '		',  urlb6: '		',
customer7: '	PRACHI GENERAL (PANDATARAI)	', toys7: 'TOYS:-	', amount7: '	3040	',  url7: '	/2084377289testbysam/PANDATARAI/PRACHI GENERAL (PANDATARAI).htm	', GIFTS7: 'PAYMENT	', amountg7: '	3472	',  urlg7: '		', bags7: 'ORDER	', amountb7: '		',  urlb7: '		',
customer8: '	KABIR GENERAL (PANDATARAI)	', toys8: 'TOYS:-	', amount8: '		',  url8: '		', GIFTS8: 'PAYMENT	', amountg8: '	9309	',  urlg8: '		', bags8: 'ORDER	', amountb8: '		',  urlb8: '		',
																	},
																	
{id: 1, name: '	PANTORA ', total: '(	3482	)', 														
customer1: '	KRISHNA  KAPDA (PANTORA)	', toys1: 'TOYS:-	', amount1: ' 	3482	',  url1: '	/2084377289testbysam/PANTORA/KRISHNA KAPDA DUKAN (PANTORA).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	ANIL SHRINGAR  (PANTORA)	', toys2: 'TOYS:-	', amount2: ' 	-1	',  url2: '	/2084377289testbysam/PANTORA/ANIL SHRINGAR (PANTORA).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
																	},
																	
{id: 1, name: '	PATHARIYA ', total: '(	35854	)', 														
customer1: '	AKASH BOOK DEPO (PATHARIYA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/PATHARIYA/AKASH%20BOOK%20DEPO%20(PATHARIYA)%20116.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	HARNARAYAN	', toys2: 'TOYS:-	', amount2: '	4420	',  url2: '	/2084377289testbysam/PATHARIYA/HARNARAYAN%20(PATHARIYA)%20%20199.htm	', GIFTS2: 'PAYMENT	', amountg2: '	1341	',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	MUKESH GENERAL 	', toys3: 'TOYS:-	', amount3: '	1	',  url3: '	/2084377289testbysam/PATHARIYA/MUKESH%20GENERAL%20(PATHARIYA)%20%20163.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
customer4: '	OM SAI KARAN (PATHARIYA)	', toys4: 'TOYS:-	', amount4: ' 	4784	',  url4: '	/2084377289testbysam/PATHARIYA/OM%20SAI%20(KARAN)%20.(PATHARIYA)%20%202.htm	', GIFTS4: 'PAYMENT	', amountg4: '	8758	',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	SHIV GENERAL (PATHARIYA)	', toys5: 'TOYS:-	', amount5: '	13180	',  url5: '	/2084377289testbysam/PATHARIYA/SHIV GENERAL .(PATHARIYA) 118.htm	', GIFTS5: 'PAYMENT	', amountg5: '	30179	',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '		',
customer6: '	SANTOSH GENERAL (PATHARIYA)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/PATHARIYA/SANTOSH%20PATHKAR.%20(PATHARIYA)%20192.htm	', GIFTS6: 'PAYMENT	', amountg6: '	888	',  urlg6: '		', bags6: 'ORDER	', amountb6: '		',  urlb6: '		',
customer7: '	PREETAM GENERAL (PATHARIYA)	', toys7: 'TOYS:-	', amount7: '	13459	',  url7: '	/2084377289testbysam/PATHARIYA/PREETAM%20(PATHARIYA)%20148.htm	', GIFTS7: 'PAYMENT	', amountg7: '	19022	',  urlg7: '		', bags7: 'ORDER	', amountb7: '		',  urlb7: '		',
customer8: '	OM SUHAG (PATHARIYA)	', toys8: 'TOYS:-	', amount8: '	10	',  url8: '	/2084377289testbysam/PATHARIYA/OM%20SUHAG%20(PATHARIYA)%20%20100.htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '		', bags8: 'ORDER	', amountb8: '		',  urlb8: '		',
customer9: '	LAXMI GENERAL (PATHARIYA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/PATHARIYA/LAXMI%20GENERAL%20(PATHARIYA).htm	', GIFTS9: 'PAYMENT	', amountg9: '		',  urlg9: '		', bags9: 'ORDER	', amountb9: '		',  urlb9: '		',
customer10: '	SONI HARDWARE (PATHARIYA)	', toys10: 'TOYS:-	', amount10: '	6490	',  url10: '	/2084377289testbysam/PATHARIYA/SONI HARDWARE (PATHARIYA).htm	', GIFTS10: 'PAYMENT	', amountg10: '		',  urlg10: '		', bags10: 'ORDER	', amountb10: '		',  urlb10: '		',
customer11: '	PANDEY KIRANA (PATHARIYA)	', toys11: 'TOYS:-	', amount11: '	2625	',  url11: '	/2084377289testbysam/PATHARIYA/PANDAY  KIRANA (PATHARIYA).htm	', GIFTS11: 'PAYMENT	', amountg11: '		',  urlg11: '		', bags11: 'ORDER	', amountb11: '		',  urlb11: '		',
																	},
{id: 1, name: '	PENDRA', total: ' (	91005	)', 														
customer1: '	SURYA GARMENTS (PENDRA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/PENDRA/SURYA GARMENTS (PENDRA).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	ARADHYA TRADERS	', toys2: 'TOYS:-	', amount2: '	24784	',  url2: '	/2084377289testbysam/PENDRA/ARADHYA GENERAL (PENDRA) 124.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	DECO POINT 	', toys3: 'TOYS:-	', amount3: '	1028	',  url3: '	/2084377289testbysam/PENDRA/DECO POINT (PENDRA) 33.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
customer4: '	PANDEY GENERAL	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/PENDRA/PANDEY GENERAL. (PENDRA)  140.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	R.T WOMENS	', toys5: 'TOYS:-	', amount5: '	8353	',  url5: '	/2084377289testbysam/PENDRA/R.T PENDRA (PENDRA) 88.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '		',
customer6: '	SADHANA PHOTO STUDIO	', toys6: 'TOYS:-	', amount6: '	6421	',  url6: '	/2084377289testbysam/PENDRA/SADHNA PHOTO STUDIO (PENDRA) 244.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '		', bags6: 'ORDER	', amountb6: '	1140	',  urlb6: '	/2084377289testbysam/BAGS/SADHNA PHOTO STUDIO (PENDRA).htm	',
customer7: '	TIME CORNER (PENDRA)	', toys7: 'TOYS:-	', amount7: '	400	',  url7: '	/2084377289testbysam/PENDRA/TIME CORNER. (PENDRA).htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '		', bags7: 'ORDER	', amountb7: '		',  urlb7: '		',
customer8: '	SAI MAHASALE (PENDRA)	', toys8: 'TOYS:-	', amount8: '	17874	',  url8: '	/2084377289testbysam/PENDRA/SAI MAHASALE. (PENDRA) 176.htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '		', bags8: 'ORDER	', amountb8: '		',  urlb8: '		',
customer9: '	SAI SAKTI (PENDRA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/PENDRA/SAI SAKTI. (PENDRA) 186.htm	', GIFTS9: 'PAYMENT	', amountg9: '		',  urlg9: '		', bags9: 'ORDER	', amountb9: '		',  urlb9: '		',
customer10: '	POOJA JWELLERY (PENDRA)	', toys10: 'TOYS:-	', amount10: '	0	',  url10: '	/2084377289testbysam/PENDRA/POOJA JWELLERY. (PENDRA)  190.htm	', GIFTS10: 'PAYMENT	', amountg10: '		',  urlg10: '		', bags10: 'ORDER	', amountb10: '		',  urlb10: '		',
customer11: '	MAA SHARDA GIFT DEEPANSHU (PENDRA)	', toys11: 'TOYS:-	', amount11: '	5980	',  url11: '	/2084377289testbysam/PENDRA/MAA SHARDA GIFT DEEPANSHU. (PENDRA).htm	', GIFTS11: 'PAYMENT	', amountg11: '		',  urlg11: '		', bags11: 'ORDER	', amountb11: '		',  urlb11: '		',
customer12: '	UPHAR GALLERY (PENDRA)	', toys12: 'TOYS:-	', amount12: '	1993	',  url12: '	/2084377289testbysam/PENDRA/UPHAR GALLERY. (PENDRA) 198.htm	', GIFTS12: 'PAYMENT	', amountg12: '		',  urlg12: '		', bags12: 'ORDER	', amountb12: '	1015	',  urlb12: '	/2084377289testbysam/BAGS/UPHAR GALLERY  (PENDRA).htm	',
customer13: '	GUPTA ENTERPRISES (PENDRA)	', toys13: 'TOYS:-	', amount13: '	0	',  url13: '	/2084377289testbysam/PENDRA/GUPTA ENTERPRISES. (PENDRA) 200.htm	', GIFTS13: 'PAYMENT	', amountg13: '		',  urlg13: '		', bags13: 'ORDER	', amountb13: '		',  urlb13: '		',
customer14: '	SANJAY GENERAL (PENDRA)	', toys14: 'TOYS:-	', amount14: '	24127	',  url14: '	/2084377289testbysam/PENDRA/SANJAY GENERAL. (PENDRA).htm	', GIFTS14: 'PAYMENT	', amountg14: '		',  urlg14: '		', bags14: 'ORDER	', amountb14: '		',  urlb14: '		',
customer15: '	GANESH GENERAL (PENDRA)	', toys15: 'TOYS:-	', amount15: '		',  url15: '		', GIFTS15: 'PAYMENT	', amountg15: '		',  urlg15: '		', bags15: 'ORDER	', amountb15: '	590	',  urlb15: '	/2084377289testbysam/BAGS/GANESH GENERAL (PENDRA).htm	',
customer16: '	SONA GARMENTS (PENDRA)	', toys16: 'TOYS:-	', amount16: '	45	',  url16: '	/2084377289testbysam/PENDRA/SONA GARMENTS (PENDRA).htm	', GIFTS16: 'PAYMENT	', amountg16: '		',  urlg16: '		', bags16: 'ORDER	', amountb16: '		',  urlb16: '		',
customer17: '	DIPTI GENERAL STORE (PENDRA)	', toys17: 'TOYS:-	', amount17: '	3195	',  url17: '	/2084377289testbysam/PENDRA/DIPTI GENERAL STORE (PENDRA).htm	', GIFTS17: 'PAYMENT	', amountg17: '		',  urlg17: '		', bags17: 'ORDER	', amountb17: '		',  urlb17: '		',
customer18: '	JAI DURGA GARMENTS (PENDRA	', toys18: 'TOYS:-	', amount18: '	220	',  url17: '	/2084377289testbysam/PENDRA/JAI DURGA GARMENTS (PENDRA).htm	', GIFTS17: 'PAYMENT	', amountg17: '		',  urlg17: '		', bags17: 'ORDER	', amountb17: '		',  urlb17: '		',
customer19: '	VINAYAK MENSWEAR (PENDRA)	', toys19: 'TOYS:-	', amount19: '	0	',  url19: '	/2084377289testbysam/PENDRA/VINAYAK MENS (PENDRA).htm	', GIFTS19: 'PAYMENT	', amountg19: '		',  urlg19: '		', bags19: 'ORDER	', amountb19: '		',  urlb19: '		',
																	},
{id: 1, name: '	PODI ', total: '(	0	)', 														
customer1: '	SHIV SAHU (PODI)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/PODI/SHIV SAHU (PODI)  127.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
																	},
{id: 1, name: '	RAHOD', total: ' (	-1	)', 														
customer1: '	CHAAVI GENERAL 	', toys1: 'TOYS:-	', amount1: ' 	-1	',  url1: '	/2084377289testbysam/RAHOD/CHAVI (RAHOD) 12.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
																	},
																	
{id: 1, name: '	RAIGARH', total: ' (	16287	)', 														
customer1: '	THE  BIG  BASKET (RAIGARH)	', toys1: 'TOYS:-	', amount1: ' 	16287	',  url1: '	/2084377289testbysam/RAIGARH/THE  BIG  BASKET (RAIGARH).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
																	},
																	
{id: 1, name: '	RATANPUR ', total: '(	3464	)', 														
customer1: '	 GOLU RATANPUR	', toys1: 'TOYS:-	', amount1: ' 	360	',  url1: '	/2084377289testbysam/RATANPUR/GOLU (RATANPUR)  196.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	RAJA YADAV	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/RATANPUR/RAJA YADAV (RATANPUR) 146.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '	5247	',  urlb2: '	/2084377289testbysam/BAGS/RAJA  YADAV  (RATANPUR).htm	',
customer3: '	USHA CHAUHAN (RATANPUR)	', toys3: 'TOYS:-	', amount3: '	3104	',  url3: '	/2084377289testbysam/RATANPUR/USHA CHAUHAN (RATANPUR).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '	4151	',  urlb3: '	/2084377289testbysam/BAGS/USHA CHAUHAN (RATANPUR).htm	',
customer4: '	RIYA GENERAL	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/RATANPUR/RIYA. (RATANPUR)  253.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
																	},
{id: 1, name: '	SAKRI', total: '  (	150	)', 														
customer1: '	GUPTA GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/SAKRI/GUPTA (SAKRI)  39.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '	642	',  urlb1: '	/2084377289testbysam/BAGS/GUPTA  GENERAL (SAKRI).htm	',
customer2: '	KAUSHIK GENERAL (SAKRI)	', toys2: 'TOYS:-	', amount2: '	189	',  url2: '	/2084377289testbysam/SAKRI/KAUSHIK GENERAL. (SAKRI) 261.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	SHRI RAM (SAKRI)	', toys3: 'TOYS:-	', amount3: '	-39	',  url3: '	/2084377289testbysam/SAKRI/SHRIRAM GENERAL (SAKRI)  20.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
																	},
{id: 1, name: '	SAKTI ', total: '(	7854	)', 														
customer1: '	PAPPI GUPTA (SAKTI)	', toys1: 'TOYS:-	', amount1: ' 	4	',  url1: '	/2084377289testbysam/SAKTI/PAPPI  GUPTA  (SAKTI).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	DIWA FANCY (SAKTI)	', toys2: 'TOYS:-	', amount2: '	7850	',  url2: '	/2084377289testbysam/SAKTI/DIVA FANCY (SAKTI)  14.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	VIKAS (SAKTI)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/SAKTI/VIKAS (SAKTI) 296.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
customer4: '	ANMOL GIFT (SAKTI)	', toys4: 'TOYS:-	', amount4: '	0	',  url4: '	/2084377289testbysam/SAKTI/ANMOL (SAKTI)  16.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	DULHAN SAARE (SAKTI)  	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/SAKTI/DULHA SAARE (SAKTI).htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '		',
customer6: '	GIFT PALACE (SAKTI)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/SAKTI/GIFT PALACE (SAKTI).htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '		', bags6: 'ORDER	', amountb6: '		',  urlb6: '		',
customer7: '	KRISHNA POOJA BHANDAR (SAKTI)	', toys7: 'TOYS:-	', amount7: '	46537	',  url7: '	/2084377289testbysam/SAKTI/KRISHNA POOJA BHANDAR (SAKTI).htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '		', bags7: 'ORDER	', amountb7: '		',  urlb7: '		',
																	},
{id: 1, name: '	SARAGAON ', total: '(	14684	)', 														
customer1: '	GOVIND KESARWANI	', toys1: 'TOYS:-	', amount1: ' 	14684	',  url1: '	/2084377289testbysam/SARAGAON/GOVIND KESARWANI (SARAGAON) 138.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
																	},
{id: 1, name: '	SARANGARH ', total: '(	48279	)', 														
customer1: '	VIKAS  TEXTILE (SARANGARH)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/SARANGARH/VIKAS TEXTILE (SARANGARH).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	ASHOK BOOK DEPO	', toys2: 'TOYS:-	', amount2: '	9258	',  url2: '	/2084377289testbysam/SARANGARH/ASHOK%20BOOK%20DEPO%20(SARANGARH)%209.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	KAMAL GENERAL (SARANGARH)	', toys3: 'TOYS:-	', amount3: '	24606	',  url3: '	/2084377289testbysam/SARANGARH/KAMAL (SARANGARH) 22_files.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
customer4: '	SANJAY STORE (SARANGARH)	', toys4: 'TOYS:-	', amount4: '	71	',  url4: '	/2084377289testbysam/SARANGARH/SANJAY STORE (SARANGARH)  44.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	PRIYANKA GENERAL (SARANGARH)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/SARANGARH/PRIYANKA (SARANGARH) 212.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '		',
customer6: '	SANTOSH VASTRALAY (SARANGARH)	', toys6: 'TOYS:-	', amount6: '	90	',  url6: '	/2084377289testbysam/SARANGARH/SANTOSH VASTRALAY (SARANGARH) 220.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '		', bags6: 'ORDER	', amountb6: '		',  urlb6: '		',
customer7: '	NEW CLOTH STORE (SARANGARH)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/SARANGARH/NEW CLOTH (SARANGARH)  256.htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '		', bags7: 'ORDER	', amountb7: '		',  urlb7: '		',
customer8: '	MAHALAXMI (SARANGARH)	', toys8: 'TOYS:-	', amount8: '	14254	',  url8: '	/2084377289testbysam/SARANGARH/MAHALAXMI  GENERAL (SARANGARH).htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '		', bags8: 'ORDER	', amountb8: '		',  urlb8: '		',
customer9: '	MUKESH VASTRALAY (SARANGARH)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/SARANGARH/MUKESH VASTRALAY (SARANGARH).htm	', GIFTS9: 'PAYMENT	', amountg9: '		',  urlg9: '		', bags9: 'ORDER	', amountb9: '		',  urlb9: '		',
customer10: '	NIKHIL SUHAG (SARANGARH)	', toys10: 'TOYS:-	', amount10: '	72	',  url10: '	/2084377289testbysam/SARANGARH/NIKHIL FANCY (SARANGARH).htm	', GIFTS10: 'PAYMENT	', amountg10: '		',  urlg10: '		', bags10: 'ORDER	', amountb10: '		',  urlb10: '		',
																	},
{id: 1, name: '	SARGAON', total: ' (	999	)', 														
customer1: '	SUNITA GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/SARGAON/SUNITA%20(SARGAON)%20%2047.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	RAJU FANCY STORE (SARGAON)	', toys2: 'TOYS:-	', amount2: '	-1	',  url2: '	/2084377289testbysam/SARGAON/RAJU%20(SARGAON)%2042.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '	4171	',  urlb2: '	/2084377289testbysam/BAGS/ASHIRWAD GENERAL (BARADWAR)_files.htm	',
customer3: '	CHAYA GENERAL (SARGAON)	', toys3: 'TOYS:-	', amount3: '	1000	',  url3: '	/2084377289testbysam/SARGAON/CHAYA (SARGAON).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
customer4: '	SHIVAM (SARGAON)	', toys4: 'TOYS:-	', amount4: '	3710	',  url4: '	/2084377289testbysam/SARGAON/SHIVAM SARGAON.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
																	},
{id: 1, name: '	SARSIWA ', total: '(	15002	)', 														
customer1: '	HEMA FANCY	', toys1: 'TOYS:-	', amount1: ' 	4042	',  url1: '	/2084377289testbysam/SARSIWA/HEMA FANCY (SARSIWA) 191.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	OM SAI SARSIWA	', toys2: 'TOYS:-	', amount2: '	10960	',  url2: '	/2084377289testbysam/SARSIWA/OM SAI (SARSIWA) 6.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '	1146	',  urlb2: '	/2084377289testbysam/BAGS/OM SAI (SARSIWA).htm	',
customer3: '	SHRIYA SHRINGAR (SARSIWA)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/SARSIWA/SHRIYA SHRINGAR (SARSIWA).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
customer4: '	CHANDRAHASHNI (SARSIWA)	', toys4: 'TOYS:-	', amount4: '	0	',  url4: '	/2084377289testbysam/SARSIWA/CHANDRAHASNI GENERAL (SARSIWA).htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	SWASTIK GENRAL (SARSIWA)	', toys5: 'TOYS:-	', amount5: '	3056	',  url5: '	/2084377289testbysam/SARSIWA/SWASTIK%20GENERAL%20(SARSIWA).htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '		',
																	},
																	
{id: 1, name: '	SENDRI', total: ' (	0	)', 														
customer1: '	SHIVAM GENERAL	', toys1: 'TOYS:-	', amount1: ' 	 	',  url1: '	/2084377289testbysam/SENDRI/SHIVAM (SENDRI) 131.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
																	},
{id: 1, name: '	SHIVNI ', total: '(	12363	)', 														
customer1: '	KHAGESHWAR GENERAL	', toys1: 'TOYS:-	', amount1: ' 	12363	',  url1: '	/2084377289testbysam/SHIVNI/KHAGESHWAR (SHIVNI) 269.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	JAI AMBEL (SHIVNI)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/SHIVNI/JAI AMBE (SHIVNI) 208.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	NEW MAHAMAYA GENERAL (SHIVNI)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/SHIVNI/NEW MAHAMAYA GENERAL 2 (SHIVNI) (NEW 9).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
																	},
{id: 1, name: '	SHIVRINARAYN', total: ' (	24979	)', 														
customer1: '	MAHI SHRINGAR (SHIVRIN)	', toys1: 'TOYS:-	', amount1: ' 	8810	',  url1: '	/2084377289testbysam/SHIVRINARAYAN/MAHI SHRINGAR (SHIVRINARAYN).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	RUPESH  GENERAL	', toys2: 'TOYS:-	', amount2: '	8530	',  url2: '	/2084377289testbysam/SHIVRINARAYAN/RUPESH (SHIVRINARAYAN)  64.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	ATUL GENERAL	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/SHIVRINARAYATUL (SHIVRINARAYAN) 254.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
customer4: '	NARAYANI COLLECTION (SHIVRIN)	', toys4: 'TOYS:-	', amount4: '	4	',  url4: '	/2084377289testbysam/SHIVRINARAYAN/NARAYANI (SHIVRINARAYAN) 136.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	LAXMI VASTRALAY (SHIVRI)	', toys5: 'TOYS:-	', amount5: '	7635	',  url5: '	/2084377289testbysam/SHIVRINARAYAN/LAXMI VASTRALAY (SHIVRINARAYAN).htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '		',
customer6: '	VIKAS GENERAL (SHIVRI)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/SHIVRINARAYAN/VIKAS GENERAL (SHIVRINARAYAN).htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '		', bags6: 'ORDER	', amountb6: '		',  urlb6: '		',
																	},
																	
{id: 1, name: '	SILDHA', total: ' (	0	)', 														
customer1: '	SATYA NARAYAN (SILDHA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/SILDHA/SATYANARAYN (SILDHA).htm											',
																	},
																	
																	
{id: 1, name: '	SIPAT', total: ' (	6038	)', 														
customer1: '	DEEPAK GENERAL (SIPAT)	', toys1: 'TOYS:-	', amount1: ' 	6028	',  url1: '	/2084377289testbysam/SIPAT/DEEPAK%20(SIPAT)%2041.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	SITARAM  (SIPAT)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/SIPAT/SITARAM%20(SIPAT)%20%2094.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	SWARMANGLA GIFT HOUSE (SIPAT)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/SIPAT/SWARMANGLA%20(SIPAT).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
customer4: '	SWARMANGLA PLASTIC (SIPAT)	', toys4: 'TOYS:-	', amount4: '	10	',  url4: '	/2084377289testbysam/SIPAT/SWARMANGLA%20PLASTIC%20(SIPAT)%20270.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	VIKAS SIPAT	', toys5: 'TOYS:-	', amount5: '	6352	',  url5: '	/2084377289testbysam/SIPAT/VIKAS  (SIPAT).htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '		',
																	},
{id: 1, name: '	SIRGITI ', total: '(	2243	)', 														
customer1: '	BABY SUHAG	', toys1: 'TOYS:-	', amount1: ' 	2242	',  url1: '	/2084377289testbysam/SIRGITI/BABY SUHAG (SIRGITTI) 21.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	KIRAN SIRGITI	', toys2: 'TOYS:-	', amount2: '		',  url2: '	<b><br>TOYS -	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '		', bags2: 'ORDER	', amountb2: '	11861	',  urlb2: '	/2084377289testbysam/BAGS/KIRAN (SIRGITI).htm	',
customer3: '	MAA KALI MUSIC (SIRGITI)	', toys3: 'TOYS:-	', amount3: '	1	',  url3: '	/2084377289testbysam/SIRGITI/MAA KALI MUSIC CENTER (SIRGITTI) 210.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
																	},
{id: 1, name: '	TAKHATPUR', total: ' (	74139	)', 														
customer1: '	KISHAN (BELPAN)	', toys1: 'TOYS:-	', amount1: ' 	10445	',  url1: '	/2084377289testbysam/TAKHATPUR/KISHAN%20(BELPAN).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	MAYUR GENERAL	', toys2: 'TOYS:-	', amount2: '	27192	',  url2: '	/2084377289testbysam/TAKHATPUR/MAYUR%20GENERAL%20(TAKHATPUR)%20276.htm	', GIFTS2: 'PAYMENT	', amountg2: '	6687	',  urlg2: '		', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
customer3: '	MARUTI GENERAL (TAKHATPUR)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/TAKHATPUR/MARUTI%20(TAKAHTPUR)%2067.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '		', bags3: 'ORDER	', amountb3: '		',  urlb3: '		',
customer4: '	VIJAY STORE (TAKHATPUR)	', toys4: 'TOYS:-	', amount4: '	17196	',  url4: '	/2084377289testbysam/TAKHATPUR/VIJAY%20STORE%20(TAKHATPUR)%20-%20299.htm	', GIFTS4: 'PAYMENT	', amountg4: '	918770412501	',  urlg4: '		', bags4: 'ORDER	', amountb4: '		',  urlb4: '		',
customer5: '	NAWAZ GENERAL	', toys5: 'TOYS:-	', amount5: '	7278	',  url5: '	/2084377289testbysam/TAKHATPUR/NAWAZ%20%20BHAI%20(TAKAHTPUR)%2075.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '		', bags5: 'ORDER	', amountb5: '		',  urlb5: '		',
customer6: '	RAJESH GENERAL	', toys6: 'TOYS:-	', amount6: '	6026	',  url6: '	/2084377289testbysam/TAKHATPUR/RAJESH%20GENERAL%20(TAKAHTPUR)%20259.htm	', GIFTS6: 'PAYMENT	', amountg6: '	10025	',  urlg6: '		', bags6: 'ORDER	', amountb6: '		',  urlb6: '		',
customer7: '	BHARAT BAG HOUSE	', toys7: 'TOYS:-	', amount7: '	6002	',  url7: '	/2084377289testbysam/TAKHATPUR/BHARAT%20BAG%20HOUSE%20(TAKHATPUR)%20194.htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '		', bags7: 'ORDER	', amountb7: '		',  urlb7: '		',
customer8: '	SHREE SHRINGARIKA (TAKHATPUR)	', toys8: 'TOYS:-	', amount8: '	814	',  url8: '	/2084377289testbysam/TAKHATPUR/TESTING NEW DETAILS.htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '		', bags8: 'ORDER	', amountb8: '		',  urlb8: '		',
																	},
{id: 1, name: '	TAPKARA', total: ' (	7217	)', 														
customer1: '	 POOJA TAPKARA	', toys1: 'TOYS:-	', amount1: ' 	7217	',  url1: '	/2084377289testbysam/TAPKARA/POOJA (TAPKARA) 287.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '	10108	',  urlb1: '	/2084377289testbysam/BAGS/POOJA (TAPKARA).htm	',
																	},
{id: 1, name: '	UDAIPUR ', total: '(	18665	)', 														
customer1: '	PRIYA UDAIPUR	', toys1: 'TOYS:-	', amount1: ' 	18665	',  url1: '	/2084377289testbysam/UDAIPUR/PRIYA  (UDAIPUR) 91.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '	20437	',  urlb1: '	/2084377289testbysam/BAGS/PRIYA (UDAIPUR).htm	',
																	},
{id: 1, name: '	URGA', total: ' (	9742	)', 														
customer1: '	SHUSHMITA URGA	', toys1: 'TOYS:-	', amount1: ' 	9742	',  url1: '	/2084377289testbysam/URGA/SUSHMITA%20(URGA)%20125.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '	12714	',  urlb1: '	/2084377289testbysam/BAGS/SHUSHMITA (URGA).htm	',
																	},
{id: 1, name: '	USLAPUR', total: ' (	0	)', 														
customer1: '	SAI PROVISION	', toys1: 'TOYS:-	', amount1: ' 		',  url1: '		', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '	3089	',  urlb1: '	/2084377289testbysam/BAGS/SAI PROVISION (BILASPUR).htm	',
																	},
{id: 1, name: '	VENKATNAGAR', total: ' (	16	)', 														
customer1: '	SANTOSH GENERAL	', toys1: 'TOYS:-	', amount1: ' 	16	',  url1: '	/2084377289testbysam/VENKATNAGAR/SANTOSH (VENKATNAGAR) 113.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '		', bags1: 'ORDER	', amountb1: '	0	',  urlb1: '	/2084377289testbysam/BAGS/SANSTOSH GENERAL (VENKATNAGAR).htm	',
																	
																	},
																	
																	
																	
  ];																	
  																	
  return factory;																	
}]);																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
