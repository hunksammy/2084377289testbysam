var element = document.getElementById("id01");element.innerHTML = "BAGS - 	22-10-21	&nbsp;&nbsp;		&nbsp;&nbsp;TOYS - 27/07/2022  	&nbsp;&nbsp;BAL -	1389299						";					
																	
																	
																	
																	
																	
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
																	
{id: 1, name: '	AKALTARA', total: '  (	33897	)', 														
customer1: '	VINOD GENERAL (AKALTARA)	', toys1: 'TOYS:-	', amount1: '	0	',  url1: '	/2084377289testbysam/AKALTARA/VINOD GENERAL (AKALTARA).htm	', GIFTS1: 'PAYMENT	', amountg1: '	917987310107	',  urlg1: '	https://api.whatsapp.com/send?phone= 917987310107&text=नमस्कार ! *VINOD GENERAL (AKALTARA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= 917987310107&text=नमस्कार ! *VINOD GENERAL (AKALTARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	CHANDAN GENERAL (AKALTARA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/AKALTARA/CHANDAN%20GENERAL%20(AKALTARA)%2029.htm	', GIFTS2: 'PAYMENT	', amountg2: '	919926253020	',  urlg2: '	https://api.whatsapp.com/send?phone= 919926253020&text=नमस्कार ! *CHANDAN GENERAL (AKALTARA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= 919926253020&text=नमस्कार ! *CHANDAN GENERAL (AKALTARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	DEEPAK GENERAL (AKALTARA)	', toys3: 'TOYS:-	', amount3: '	20568	',  url3: '	/2084377289testbysam/AKALTARA/DEEPAK%20(AKALTARA)%20130.htm	', GIFTS3: 'PAYMENT	', amountg3: '	917000383606	',  urlg3: '	https://api.whatsapp.com/send?phone= 917000383606&text=नमस्कार ! *DEEPAK GENERAL (AKALTARA)* भाइया आपका बकाया बैलेंस  *20568 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= 917000383606&text=नमस्कार ! *DEEPAK GENERAL (AKALTARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	SHRIMANAGALM (AKALTARA)	', toys4: 'TOYS:-	', amount4: '	9901	',  url4: '	/2084377289testbysam/AKALTARA/SHRIMANGALAM%20(AKALTARA)%20298.htm	', GIFTS4: 'PAYMENT	', amountg4: '	917999721900	',  urlg4: '	https://api.whatsapp.com/send?phone= 917999721900&text=नमस्कार ! *SHRIMANAGALM (AKALTARA)* भाइया आपका बकाया बैलेंस  *9901 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= 917999721900&text=नमस्कार ! *SHRIMANAGALM (AKALTARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	SHARMA GENERAL  (AKALTARA)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/AKALTARA/SHARMA%20GENERAL%20(AKALTARA)%20282.htm	', GIFTS5: 'PAYMENT	', amountg5: '	919301187738	',  urlg5: '	https://api.whatsapp.com/send?phone= 919301187738&text=नमस्कार ! *SHARMA GENERAL  (AKALTARA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= 919301187738&text=नमस्कार ! *SHARMA GENERAL  (AKALTARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer6: '	SS FANCY (AKALTARA)	', toys6: 'TOYS:-	', amount6: '	3420	',  url6: '	/2084377289testbysam/AKALTARA/SS%20FANCY%20(AKALTARA).htm	', GIFTS6: 'PAYMENT	', amountg6: '	919301817128	',  urlg6: '	https://api.whatsapp.com/send?phone= 919301817128&text=नमस्कार ! *SS FANCY (AKALTARA)* भाइया आपका बकाया बैलेंस  *3420 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags6: 'ORDER	', amountb6: '		',  urlb6: '	https://api.whatsapp.com/send?phone= 919301817128&text=नमस्कार ! *SS FANCY (AKALTARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer7: '	KANHA GENERAL (AKALTARA)	', toys7: 'TOYS:-	', amount7: '	8	',  url7: '	/2084377289testbysam/AKALTARA/KANHA%20GENERAL%20(AKALTARA)%2050.htm	', GIFTS7: 'PAYMENT	', amountg7: '	918349442815	',  urlg7: '	https://api.whatsapp.com/send?phone= 918349442815&text=नमस्कार ! *KANHA GENERAL (AKALTARA)* भाइया आपका बकाया बैलेंस  *8 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags7: 'ORDER	', amountb7: '		',  urlb7: '	https://api.whatsapp.com/send?phone= 918349442815&text=नमस्कार ! *KANHA GENERAL (AKALTARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer8: '	SANTOSH GENERAL (AKALTARA)	', toys8: 'TOYS:-	', amount8: '	7	',  url8: '	/2084377289testbysam/AKALTARA/SANTOSH  GENERAL (AKALTARA).htm	', GIFTS8: 'PAYMENT	', amountg8: '	917999954030	',  urlg8: '	https://api.whatsapp.com/send?phone= 917999954030&text=नमस्कार ! *SANTOSH GENERAL (AKALTARA)* भाइया आपका बकाया बैलेंस  *7 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags8: 'ORDER	', amountb8: '		',  urlb8: '	https://api.whatsapp.com/send?phone= 917999954030&text=नमस्कार ! *SANTOSH GENERAL (AKALTARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	BALCO', total: '  (	0	)', 														
customer1: '	SACHIN COLLECTION (BALCO)	', toys1: 'TOYS:-	', amount1: '	0	',  url1: '	/2084377289testbysam/BALCO/SACHIN COLLECTION (BALCO) 84.htm	', GIFTS1: 'PAYMENT	', amountg1: '	919630044480	',  urlg1: '	https://api.whatsapp.com/send?phone= 919630044480&text=नमस्कार ! *SACHIN COLLECTION (BALCO)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= 919630044480&text=नमस्कार ! *SACHIN COLLECTION (BALCO)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	UPHAR COLLECTION (BALCO)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/BALCO/UPHAR COLLECTION (BALCO) 272.htm	', GIFTS2: 'PAYMENT	', amountg2: '	917828584271	',  urlg2: '	https://api.whatsapp.com/send?phone= 917828584271&text=नमस्कार ! *UPHAR COLLECTION (BALCO)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= 917828584271&text=नमस्कार ! *UPHAR COLLECTION (BALCO)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	NAVEEN ELECTRONICS (BALCO)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/BALCO/NAVEEN ELECTRONICS (BALCO)  232.htm	', GIFTS3: 'PAYMENT	', amountg3: '	919039313922	',  urlg3: '	https://api.whatsapp.com/send?phone= 919039313922&text=नमस्कार ! *NAVEEN ELECTRONICS (BALCO)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= 919039313922&text=नमस्कार ! *NAVEEN ELECTRONICS (BALCO)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	BALODA', total: '  (	62316	)', 														
customer1: '	ESHWAR GENERAL (BALODA)	', toys1: 'TOYS:-	', amount1: ' 	7748	',  url1: '	/2084377289testbysam/BALODA/ESHWAR%20GENERAL%20(BALODA)%2098.htm	', GIFTS1: 'PAYMENT	', amountg1: '	916264846493	',  urlg1: '	https://api.whatsapp.com/send?phone= 916264846493&text=नमस्कार ! *ESHWAR GENERAL (BALODA)* भाइया आपका बकाया बैलेंस  *7748 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= 916264846493&text=नमस्कार ! *ESHWAR GENERAL (BALODA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	SAKSHI (BALODA)	', toys2: 'TOYS:-	', amount2: '	23914	',  url2: '	/2084377289testbysam/BALODA/SAKSHI%20GENERAL%20(BALODA)%20152.htm	', GIFTS2: 'PAYMENT	', amountg2: '	918120340667	',  urlg2: '	https://api.whatsapp.com/send?phone= 918120340667&text=नमस्कार ! *SAKSHI (BALODA)* भाइया आपका बकाया बैलेंस  *23914 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= 918120340667&text=नमस्कार ! *SAKSHI (BALODA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	SHASHANK BOOK DEPO (BALODA)	', toys3: 'TOYS:-	', amount3: '	-1900	',  url3: '	/2084377289testbysam/BALODA/SHASHANK%20GENERAL%20(BALODA)%2058.htm	', GIFTS3: 'PAYMENT	', amountg3: '	918982880012	',  urlg3: '	https://api.whatsapp.com/send?phone= 918982880012&text=नमस्कार ! *SHASHANK BOOK DEPO (BALODA)* भाइया आपका बकाया बैलेंस  *-1900 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '	2950	',  urlb3: '	https://api.whatsapp.com/send?phone= 918982880012&text=नमस्कार ! *SHASHANK BOOK DEPO (BALODA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	VARDHAMAN GENERAL (BALODA)	', toys4: 'TOYS:-	', amount4: '	9045	',  url4: '	/2084377289testbysam/BALODA/VARDHAMAN%20GENERAL%20(BALODA)%20126.htm	', GIFTS4: 'PAYMENT	', amountg4: '	917415335833	',  urlg4: '	https://api.whatsapp.com/send?phone= 917415335833&text=नमस्कार ! *VARDHAMAN GENERAL (BALODA)* भाइया आपका बकाया बैलेंस  *9045 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= 917415335833&text=नमस्कार ! *VARDHAMAN GENERAL (BALODA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	LOVE KIRANA (BALODA)	', toys5: 'TOYS:-	', amount5: '	17509	',  url5: '	/2084377289testbysam/BALODA/LOVE%20KIRANA%20(BALODA)%20193_files.htm	', GIFTS5: 'PAYMENT	', amountg5: '	918602127286	',  urlg5: '	https://api.whatsapp.com/send?phone= 918602127286&text=नमस्कार ! *LOVE KIRANA (BALODA)* भाइया आपका बकाया बैलेंस  *17509 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= 918602127286&text=नमस्कार ! *LOVE KIRANA (BALODA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer6: '	VICKEY GENERAL (BALODA)	', toys6: 'TOYS:-	', amount6: '	5993	',  url6: '	/2084377289testbysam/BALODA/VICKEY%20GENERAL%20(BALODA)%2082.htm	', GIFTS6: 'PAYMENT	', amountg6: '	918818816083	',  urlg6: '	https://api.whatsapp.com/send?phone= 918818816083&text=नमस्कार ! *VICKEY GENERAL (BALODA)* भाइया आपका बकाया बैलेंस  *5993 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags6: 'ORDER	', amountb6: '	3420	',  urlb6: '	https://api.whatsapp.com/send?phone= 918818816083&text=नमस्कार ! *VICKEY GENERAL (BALODA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer7: '	SHIVAM GENERAL (BALODA)	', toys7: 'TOYS:-	', amount7: '	3	',  url7: '	/2084377289testbysam/BALODA/SHIVAM%20GENERAL%20(BALODA)%20217.htm	', GIFTS7: 'PAYMENT	', amountg7: '	919827458963	',  urlg7: '	https://api.whatsapp.com/send?phone= 919827458963&text=नमस्कार ! *SHIVAM GENERAL (BALODA)* भाइया आपका बकाया बैलेंस  *3 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags7: 'ORDER	', amountb7: '		',  urlb7: '	https://api.whatsapp.com/send?phone= 919827458963&text=नमस्कार ! *SHIVAM GENERAL (BALODA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer8: '	B.L GUPTA (BALODA)	', toys8: 'TOYS:-	', amount8: '	4	',  url8: '	/2084377289testbysam/BALODA/B.L%20GUPTA%20(BALODA)%20258.htm	', GIFTS8: 'PAYMENT	', amountg8: '	919685500942	',  urlg8: '	https://api.whatsapp.com/send?phone= 919685500942&text=नमस्कार ! *B.L GUPTA (BALODA)* भाइया आपका बकाया बैलेंस  *4 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags8: 'ORDER	', amountb8: '		',  urlb8: '	https://api.whatsapp.com/send?phone= 919685500942&text=नमस्कार ! *B.L GUPTA (BALODA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer9: '	GOYAL GENERAL (BALODA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/BALODA/GOYAL%20GENERAL%20(BALODA)%20263.htm	', GIFTS9: 'PAYMENT	', amountg9: '	917566826721	',  urlg9: '	https://api.whatsapp.com/send?phone= 917566826721&text=नमस्कार ! *GOYAL GENERAL (BALODA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags9: 'ORDER	', amountb9: '		',  urlb9: '	https://api.whatsapp.com/send?phone= 917566826721&text=नमस्कार ! *GOYAL GENERAL (BALODA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	BAMNIDIH', total: '(	22751	)', 														
customer1: '	CHANDINI GIFT	', toys1: 'TOYS:-	', amount1: ' 	22751	',  url1: '		', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *CHANDINI GIFT* भाइया आपका बकाया बैलेंस  *22751 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *CHANDINI GIFT* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	BARADWAR', total: ' (	1808	)', 														
customer1: '	ASHIRWAD GENERAL (BARADWAR)	', toys1: 'TOYS:-	', amount1: ' 	3	',  url1: '	/2084377289testbysam/BARADWAR/ASHIRWAD GENERAL (BARADWAR) 13.htm	', GIFTS1: 'PAYMENT	', amountg1: '	919425543411	',  urlg1: '	https://api.whatsapp.com/send?phone= 919425543411&text=नमस्कार ! *ASHIRWAD GENERAL (BARADWAR)* भाइया आपका बकाया बैलेंस  *3 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '	0	',  urlb1: '	https://api.whatsapp.com/send?phone= 919425543411&text=नमस्कार ! *ASHIRWAD GENERAL (BARADWAR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	SIDDHI VINAYAK (BARADWAR)	', toys2: 'TOYS:-	', amount2: '	1805	',  url2: '	/2084377289testbysam/BARADWAR/SIDDHI VINAYAK GENERAL (BARADWAR) 268.htm	', GIFTS2: 'PAYMENT	', amountg2: '	917000252863	',  urlg2: '	https://api.whatsapp.com/send?phone= 917000252863&text=नमस्कार ! *SIDDHI VINAYAK (BARADWAR)* भाइया आपका बकाया बैलेंस  *1805 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= 917000252863&text=नमस्कार ! *SIDDHI VINAYAK (BARADWAR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	SAMRAT GENERAL (BARADWAR)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/BARADWAR/SAMRATH GENERAL (BARADWAR).htm	', GIFTS3: 'PAYMENT	', amountg3: '	919893535870	',  urlg3: '	https://api.whatsapp.com/send?phone= 919893535870&text=नमस्कार ! *SAMRAT GENERAL (BARADWAR)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= 919893535870&text=नमस्कार ! *SAMRAT GENERAL (BARADWAR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	SAKTIYA SETH (BARADWAR)	', toys4: 'TOYS:-	', amount4: '	0	',  url4: '	/2084377289testbysam/BARADWAR/SAKTIYA SETH (BARADWAR) 219.htm	', GIFTS4: 'PAYMENT	', amountg4: '	919300236171	',  urlg4: '	https://api.whatsapp.com/send?phone= 919300236171&text=नमस्कार ! *SAKTIYA SETH (BARADWAR)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= 919300236171&text=नमस्कार ! *SAKTIYA SETH (BARADWAR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	LAXMI DEPARTMENTAL  (BARADWAR)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/BARADWAR/LAXMI  DEPARTMENTAL (BARADWAR).htm	', GIFTS5: 'PAYMENT	', amountg4: '	918823050391	',  urlg5: '	https://api.whatsapp.com/send?phone= 918823050391&text=नमस्कार ! *LAXMI DEPARTMENTAL  (BARADWAR)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb4: '		',  urlb5: '	https://api.whatsapp.com/send?phone= 918823050391&text=नमस्कार ! *LAXMI DEPARTMENTAL  (BARADWAR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	BARAMKELA', total: ' (	26118	)', 														
customer1: '	ANNPURNA FANCY (BARAMKELA)	', toys1: 'TOYS:-	', amount1: '	26118	',  url1: '	\2084377289testbysam\BARAMKELA\ANNPURNA STORE (BARAMKELA).htm	', GIFTS1: 'PAYMENT	', amountg1: '	918349952375	',  urlg1: '	https://api.whatsapp.com/send?phone= 918349952375&text=नमस्कार ! *ANNPURNA FANCY (BARAMKELA)* भाइया आपका बकाया बैलेंस  *26118 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= 918349952375&text=नमस्कार ! *ANNPURNA FANCY (BARAMKELA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
																	
{id: 1, name: '	BELGEHNA', total: ' (	25822	)', 														
customer1: '	RINKU GENERAL (BELGEHNA)	', toys1: 'TOYS:-	', amount1: '	25822	',  url1: '	/2084377289testbysam/BELGEHNA/RINKU (BELGEHNA).htm	', GIFTS1: 'PAYMENT	', amountg1: '	917694967201	',  urlg1: '	https://api.whatsapp.com/send?phone= 917694967201&text=नमस्कार ! *RINKU GENERAL (BELGEHNA)* भाइया आपका बकाया बैलेंस  *25822 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= 917694967201&text=नमस्कार ! *RINKU GENERAL (BELGEHNA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	SURYA GENERAL (BELGEHNA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/BELGEHNA/SURYA (BELGEHNA).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SURYA GENERAL (BELGEHNA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SURYA GENERAL (BELGEHNA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	BELTARA', total: ' (	2493	)', 														
customer1: '	PRATAB (BELTARA)	', toys1: 'TOYS:-	', amount1: '	2493	',  url1: '	/2084377289testbysam/BELTARA/PRATAB (BELTARA) 294.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PRATAB (BELTARA)* भाइया आपका बकाया बैलेंस  *2493 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PRATAB (BELTARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	BHATAPARA ', total: '(	0	)', 														
customer1: '	ANDAAZ BAG (BHATAPARA)	', toys1: 'TOYS:-	', amount1: '	0	',  url1: '	/2084377289testbysam/BHATAPARA/ANDAAZ COLLECTION (BHATAPARA).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ANDAAZ BAG (BHATAPARA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ANDAAZ BAG (BHATAPARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	BHATGAON', total: ' (	11312	)', 														
customer1: '	DEEPANSHU (BHATGAON)	', toys1: 'TOYS:-	', amount1: ' 	3216	',  url1: '	/2084377289testbysam/BHATGAON/DEEPANSHU GENERAL (BHATGAON) 19.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *DEEPANSHU (BHATGAON)* भाइया आपका बकाया बैलेंस  *3216 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '	2047	',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *DEEPANSHU (BHATGAON)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	MANPASAND (BHATGAON)	', toys2: 'TOYS:-	', amount2: '	8097	',  url2: '	/2084377289testbysam/BHATGAON/MANPASAND (BHATGAON) 92.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MANPASAND (BHATGAON)* भाइया आपका बकाया बैलेंस  *8097 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MANPASAND (BHATGAON)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	RIYA GENERAL (BHATGAON)	', toys3: 'TOYS:-	', amount3: ' 	0	',  url3: '	/2084377289testbysam/BHATGAON/RIYA GENERAL (BHATGAON) 280.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RIYA GENERAL (BHATGAON)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RIYA GENERAL (BHATGAON)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	NAMDEV (BHATGAON)	', toys4: 'TOYS:-	', amount4: '	-1	',  url4: '	/2084377289testbysam/BHATGAON/NAMDEV GENERAL (BHATGAON) 83.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NAMDEV (BHATGAON)* भाइया आपका बकाया बैलेंस  *-1 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NAMDEV (BHATGAON)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	BHILAIGARH', total: ' (	11056	)', 														
customer1: '	SONU GENERAL (BHILAIGARH)	', toys1: 'TOYS:-	', amount1: ' 	2832	',  url1: '	/2084377289testbysam/BHILAIGARH/SONU GENERAL (BHILAIGARH) 52.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SONU GENERAL (BHILAIGARH)* भाइया आपका बकाया बैलेंस  *2832 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SONU GENERAL (BHILAIGARH)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	SS  SUPER MARKET (BHILAIGARH)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/BHILAIGARH/SS  SUPER MARKET (BHILAIGARH).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SS  SUPER MARKET (BHILAIGARH)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SS  SUPER MARKET (BHILAIGARH)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	TANU GENERAL (BHILAIGARH)	', toys3: 'TOYS:-	', amount3: '	6823	',  url3: '	/2084377289testbysam/BHILAIGARH/TANU GENERAL (BHILAIGARH) 251.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *TANU GENERAL (BHILAIGARH)* भाइया आपका बकाया बैलेंस  *6823 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *TANU GENERAL (BHILAIGARH)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	LALIT GENERAL (BHILAIGARH)	', toys4: 'TOYS:-	', amount4: '	39	',  url4: '	/2084377289testbysam/BHILAIGARH/LALIT GENERAL (BHILAIGARH) 57.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *LALIT GENERAL (BHILAIGARH)* भाइया आपका बकाया बैलेंस  *39 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *LALIT GENERAL (BHILAIGARH)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	DEWANGAN GENERAL (BHILAIGARH)	', toys5: 'TOYS:-	', amount5: '	1362	',  url5: '	/2084377289testbysam/BHILAIGARH/DEWANGAN GENERAL (BHILAIGARH) 218.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *DEWANGAN GENERAL (BHILAIGARH)* भाइया आपका बकाया बैलेंस  *1362 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '	6722	',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *DEWANGAN GENERAL (BHILAIGARH)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	BILASPUR ', total: '(	78643	)', 														
customer1: '	BOMBAY FASHION (RAJKISHORE)	', toys1: 'TOYS:-	', amount1: ' 	11533	',  url1: '	/2084377289testbysam/BILASPUR/BOMBAY FASHION (RAJKISHORE).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *BOMBAY FASHION (RAJKISHORE)* भाइया आपका बकाया बैलेंस  *11533 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *BOMBAY FASHION (RAJKISHORE)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	MOHAN NAGOI (BILASPUR)	', toys2: 'TOYS:-	', amount2: '	23002	',  url2: '	/2084377289testbysam/BILASPUR/MOHAN NAGOI (BILASPUR) 128.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MOHAN NAGOI (BILASPUR)* भाइया आपका बकाया बैलेंस  *23002 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MOHAN NAGOI (BILASPUR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	POOJA SHRINGAR (BILASPUR)	', toys3: 'TOYS:-	', amount3: '	1308	',  url3: '	/2084377289testbysam/BILASPUR/POOJA SHRINGARH (BILASPUR) 107.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *POOJA SHRINGAR (BILASPUR)* भाइया आपका बकाया बैलेंस  *1308 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '	3602	',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *POOJA SHRINGAR (BILASPUR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	AKASH GENERAL (BUDHWARI)	', toys4: 'TOYS:-	', amount4: '	0	',  url4: '	/2084377289testbysam/BILASPUR/AKASH GENERAL STORE (BUDHWARI) - 295.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *AKASH GENERAL (BUDHWARI)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *AKASH GENERAL (BUDHWARI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	SIDDHI VINAYAK (BILASPUR)	', toys5: 'TOYS:-	', amount5: '	33002	',  url5: '	/2084377289testbysam/BILASPUR/SIDDHI VINAYAK (BILASPUR).htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SIDDHI VINAYAK (BILASPUR)* भाइया आपका बकाया बैलेंस  *33002 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SIDDHI VINAYAK (BILASPUR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer6: '	PUSTAK BHAWAN (BILASPUR)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/BILASPUR/PUSHTAK BHAWAN (BILASPUR).htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PUSTAK BHAWAN (BILASPUR)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags6: 'ORDER	', amountb6: '		',  urlb6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PUSTAK BHAWAN (BILASPUR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer7: '	SEEMA SHRIVASTAV (BILASPUR)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/BILASPUR/SEEMA SHRIVASTAV (BILASPUR) 278.htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SEEMA SHRIVASTAV (BILASPUR)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags7: 'ORDER	', amountb7: '		',  urlb7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SEEMA SHRIVASTAV (BILASPUR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer8: '	SONI GIFT (DEVIKHURDH) (BSP)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/BILASPUR/SONI GIFT DEVRIKHURDH (BILASPUR) 155.htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SONI GIFT (DEVIKHURDH) (BSP)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags8: 'ORDER	', amountb8: '		',  urlb8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SONI GIFT (DEVIKHURDH) (BSP)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer9: '	VIJAY TOYS TELIPARA	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/BILASPUR/VIJAY TOYS (TELIPARA).htm	', GIFTS9: 'PAYMENT	', amountg9: '		',  urlg9: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VIJAY TOYS TELIPARA* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags9: 'ORDER	', amountb9: '		',  urlb9: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VIJAY TOYS TELIPARA* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer10: '	HITESH BAJAJ	', toys10: 'TOYS:-	', amount10: '	0	',  url10: '	/2084377289testbysam/BILASPUR/HITESH BAJAJ (BILASPUR).htm	', GIFTS10: 'PAYMENT	', amountg10: '		',  urlg10: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *HITESH BAJAJ* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags10: 'ORDER	', amountb10: '		',  urlb10: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *HITESH BAJAJ* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer11: '	HELLO DUDE (SUNIL)	', toys11: 'TOYS:-	', amount11: '	9798	',  url11: '	/2084377289testbysam/BILASPUR/HELLO DUDE (SUNIL JAGYASI).htm	', GIFTS11: 'PAYMENT	', amountg11: '		',  urlg11: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *HELLO DUDE (SUNIL)* भाइया आपका बकाया बैलेंस  *9798 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags11: 'ORDER	', amountb11: '		',  urlb11: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *HELLO DUDE (SUNIL)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer12: '	BABY  WORLD  (RAVI KHANNA)	', toys12: 'TOYS:-	', amount12: '	16876	',  url12: '	/2084377289testbysam/BILASPUR/BABY WORLD  (RAVI  KHANNA).htm	', GIFTS12: 'PAYMENT	', amountg12: '		',  urlg12: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *BABY  WORLD  (RAVI KHANNA)* भाइया आपका बकाया बैलेंस  *16876 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags12: 'ORDER	', amountb12: '		',  urlb12: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *BABY  WORLD  (RAVI KHANNA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer13: '	HARSH (JUNA BILASPUR)	', toys13: 'TOYS:-	', amount13: '	2801	',  url13: '	/2084377289testbysam/BILASPUR/HARSH JUNA BILASPUR.htm	', GIFTS13: 'PAYMENT	', amountg13: '		',  urlg13: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *HARSH (JUNA BILASPUR)* भाइया आपका बकाया बैलेंस  *2801 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags13: 'ORDER	', amountb13: '		',  urlb13: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *HARSH (JUNA BILASPUR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	BILHA', total: ' (	1996	)', 														
customer1: '	PAYAL FANCY (BILHA)	', toys1: 'TOYS:-	', amount1: ' 	1996	',  url1: '	/2084377289testbysam/BILHA/PAYAL%20FANCY%20(BILHA)%2066.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PAYAL FANCY (BILHA)* भाइया आपका बकाया बैलेंस  *1996 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PAYAL FANCY (BILHA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	KISAN MEGA BIG BAZAR (BILHA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/BILHA/KISAN%20MEGA%20BIG%20BAZAR%20(BILHA)%2031.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KISAN MEGA BIG BAZAR (BILHA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KISAN MEGA BIG BAZAR (BILHA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	RAJA DAILY NEEDS (BILHA)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/BILHA/RAJA%20DAILY%20NEEDS%20(BILHA).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RAJA DAILY NEEDS (BILHA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RAJA DAILY NEEDS (BILHA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
																	
{id: 1, name: '	BIRRA', total: ' (	33	)', 														
customer1: '	TOMESH (BIRRA)	', toys1: 'TOYS:-	', amount1: '	33	',  url1: '	/2084377289testbysam/BIRRA/TOMESH%20(BIRRA).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *TOMESH (BIRRA)* भाइया आपका बकाया बैलेंस  *33 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *TOMESH (BIRRA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	SUMAN (BIRRA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/BIRRA/SUMAN (BIRRA).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SUMAN (BIRRA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SUMAN (BIRRA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	NAMDEV (BIRRA)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/BIRRA/RACKET RATIO.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NAMDEV (BIRRA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NAMDEV (BIRRA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	BOADTARA', total: ' (	16	)', 														
customer1: '	PRIYAL GENERAL (BODTARA)	', toys1: 'TOYS:-	', amount1: ' 	10	',  url1: '	/2084377289testbysam/BOADTARA/PRIYAL (BOADTARA) 26.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PRIYAL GENERAL (BODTARA)* भाइया आपका बकाया बैलेंस  *10 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '	15510	',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PRIYAL GENERAL (BODTARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	MONIKA FANCY STORE (BOADTARA)	', toys2: 'TOYS:-	', amount2: '	3	',  url2: '	/2084377289testbysam/BOADTARA/MONIKA FANCY STORE (BOADTARA).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MONIKA FANCY STORE (BOADTARA)* भाइया आपका बकाया बैलेंस  *3 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MONIKA FANCY STORE (BOADTARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	PUNNET SAHU  (BOADTARA)	', toys3: 'TOYS:-	', amount3: '	3	',  url3: '	/2084377289testbysam/BOADTARA/PUNNET RAM  SAHU  (BOADTARA).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PUNNET SAHU  (BOADTARA)* भाइया आपका बकाया बैलेंस  *3 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PUNNET SAHU  (BOADTARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	BORLA', total: ' (	0	)', 														
customer1: '	KESARWANI CLOTH (BORLA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/BORLA/KESARWANI CLOTH (BORLA).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KESARWANI CLOTH (BORLA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KESARWANI CLOTH (BORLA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
																	
{id: 1, name: '	CHAITMA', total: ' (	3661	)', 														
customer1: '	JEET (CHAITMA)	', toys1: 'TOYS:-	', amount1: ' 	3661	',  url1: '	/2084377289testbysam/CHAITMA/JEET CHAITMA.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *JEET (CHAITMA)* भाइया आपका बकाया बैलेंस  *3661 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *JEET (CHAITMA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
																	
{id: 1, name: '	CHAKRBHTA ', total: ' (	23007	)', 														
customer1: '	MAHAMAYA THRED HOUSE (CHBT)	', toys1: 'TOYS:-	', amount1: ' 	4399	',  url1: '	/2084377289testbysam/CHAKKARBHATA/MAHAMAYA%20THREAD%20(CHAKKARBHATA)%20103.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAHAMAYA THRED HOUSE (CHBT)* भाइया आपका बकाया बैलेंस  *4399 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAHAMAYA THRED HOUSE (CHBT)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	MAHESH STD (CHBT)	', toys2: 'TOYS:-	', amount2: '	18608	',  url2: '	/2084377289testbysam/CHAKKARBHATA/MAHESH%20STD%20(CHAKKARBHATA)%20161.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAHESH STD (CHBT)* भाइया आपका बकाया बैलेंस  *18608 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAHESH STD (CHBT)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	NEW JAI MATA DI  (CHBT)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/CHAKKARBHATA/NEW%20JAIMATA%20DI%20(CHAKKARBHATA)%2081.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NEW JAI MATA DI  (CHBT)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '	2619	',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NEW JAI MATA DI  (CHBT)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	BABA GENERAL (CHBT)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/CHAKKARBHATA/BABA%20GENERAL%20(CHAKKARBHATA)%20%20188.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *BABA GENERAL (CHBT)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *BABA GENERAL (CHBT)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	LAXMI KITABGHAR (CHBT)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/CHAKKARBHATA/LAXMI%20KITAB%20GHAR%20(CHAKKARBHATA).htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *LAXMI KITABGHAR (CHBT)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *LAXMI KITABGHAR (CHBT)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer6: '	SIDDARTH (CHBT)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/CHAKKARBHATA/SIDDARTH%20(CHAKKARBHATA)%20139.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SIDDARTH (CHBT)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags6: 'ORDER	', amountb6: '		',  urlb6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SIDDARTH (CHBT)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer7: '	MAHAMAYA GENERAL (CHBT)	', toys7: 'TOYS:-	', amount7: '	8915	',  url7: '	/2084377289testbysam/CHAKKARBHATA/COUSTOMER CONTACT AND REMINDER.htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAHAMAYA GENERAL (CHBT)* भाइया आपका बकाया बैलेंस  *8915 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags7: 'ORDER	', amountb7: '		',  urlb7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAHAMAYA GENERAL (CHBT)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	CHAMPA', total: ' (	19959	)', 														
customer1: '	AMIT SHRINGAR AND GIFT (CHAMPA)	', toys1: 'TOYS:-	', amount1: ' 	4	',  url1: '	/2084377289testbysam/CHAMPA/AMIT SHRINGAR AND GIFT (CHAMPA).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *AMIT SHRINGAR AND GIFT (CHAMPA)* भाइया आपका बकाया बैलेंस  *4 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *AMIT SHRINGAR AND GIFT (CHAMPA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	SOHAM GIFT (CHAMPA)	', toys2: 'TOYS:-	', amount2: '	229	',  url2: '	/2084377289testbysam/CHAMPA/SOHAM GIFT (CHAMPA) 86.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SOHAM GIFT (CHAMPA)* भाइया आपका बकाया बैलेंस  *229 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '	669	',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SOHAM GIFT (CHAMPA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	HEMA SHRINGAR (CHAMPA)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/CHAMPA/HEMA SUHAG (CHAMPA).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *HEMA SHRINGAR (CHAMPA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *HEMA SHRINGAR (CHAMPA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	RANI GENERAL (CHAMPA)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/CHAMPA/RANI GENERAL STORE (CHAMPA).htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RANI GENERAL (CHAMPA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RANI GENERAL (CHAMPA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	SHRINGAR SADAN (CHAMPA)	', toys5: 'TOYS:-	', amount5: '	-11	',  url5: '	/2084377289testbysam/CHAMPA/SHRINGAR SAADAN (CHAMPA) 284.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHRINGAR SADAN (CHAMPA)* भाइया आपका बकाया बैलेंस  *-11 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHRINGAR SADAN (CHAMPA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer6: '	RADHA SWAMI (CHAMPA)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/CHAMPA/RADHA%20SWAMI%20(CHAMPA).htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RADHA SWAMI (CHAMPA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags6: 'ORDER	', amountb6: '		',  urlb6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RADHA SWAMI (CHAMPA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer7: '	MOHSIN (CHAMPA)	', toys7: 'TOYS:-	', amount7: '	2635	',  url7: '	/2084377289testbysam/CHAMPA/MOHSIN BHAI (CHAMPA) 271.htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MOHSIN (CHAMPA)* भाइया आपका बकाया बैलेंस  *2635 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags7: 'ORDER	', amountb7: '		',  urlb7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MOHSIN (CHAMPA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer8: '	MAA BHAGWATI (CHAMPA)	', toys8: 'TOYS:-	', amount8: '	2	',  url8: '	/2084377289testbysam/CHAMPA/MAA BHAGWATI (CHAMPA) 238.htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAA BHAGWATI (CHAMPA)* भाइया आपका बकाया बैलेंस  *2 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags8: 'ORDER	', amountb8: '		',  urlb8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAA BHAGWATI (CHAMPA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer9: '	POOJA NOVELTY (CHAMPA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/CHAMPA/POOJAA NOVELTY (CHAMPA) 40.htm	', GIFTS9: 'PAYMENT	', amountg9: '		',  urlg9: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *POOJA NOVELTY (CHAMPA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags9: 'ORDER	', amountb9: '		',  urlb9: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *POOJA NOVELTY (CHAMPA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer10: '	KANHA SUPERBAZAR (CHAMPA)	', toys10: 'TOYS:-	', amount10: '	0	',  url10: '	/2084377289testbysam/CHAMPA/KANHA SUPER BAZAAR (CHAMPA) 262.htm	', GIFTS10: 'PAYMENT	', amountg10: '		',  urlg10: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KANHA SUPERBAZAR (CHAMPA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags10: 'ORDER	', amountb10: '		',  urlb10: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KANHA SUPERBAZAR (CHAMPA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer11: '	ANIL DHARMIK (CHAMPA)	', toys11: 'TOYS:-	', amount11: '	17100	',  url11: '	/2084377289testbysam/CHAMPA/ANIL DHARMIK (CHAMPA).htm	', GIFTS11: 'PAYMENT	', amountg11: '		',  urlg11: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ANIL DHARMIK (CHAMPA)* भाइया आपका बकाया बैलेंस  *17100 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags11: 'ORDER	', amountb11: '		',  urlb11: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ANIL DHARMIK (CHAMPA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	CHURRI ', total: '(	22162	)', 														
customer1: '	NEHA GENERAL (CHURI)	', toys1: 'TOYS:-	', amount1: ' 	17758	',  url1: '	/2084377289testbysam/CHURI/NEHA%20(CHURRI)%2071.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NEHA GENERAL (CHURI)* भाइया आपका बकाया बैलेंस  *17758 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NEHA GENERAL (CHURI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	MAA KAUSA GAI (CHURRI)	', toys2: 'TOYS:-	', amount2: '	4404	',  url2: '	/2084377289testbysam/CHURI/MAA%20KAUSA%20GAI%20(CHURRI)%20292.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAA KAUSA GAI (CHURRI)* भाइया आपका बकाया बैलेंस  *4404 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAA KAUSA GAI (CHURRI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
																	
{id: 1, name: '	DABRA', total: ' (	32052	)', 														
customer1: '	FASHION PARK (DABRA)	', toys1: 'TOYS:-	', amount1: ' 	32052	',  url1: '	/2084377289testbysam/DABRA/FASHION PARK (DABRA) 297.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *FASHION PARK (DABRA)* भाइया आपका बकाया बैलेंस  *32052 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *FASHION PARK (DABRA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	DHARAMJAYGARH', total: ' (	14552	)', 														
customer1: '	AKANKSHA  (DHARAMJAYGARH)	', toys1: 'TOYS:-	', amount1: ' 	14552	',  url1: '	/2084377289testbysam/DHARMJAYGARH/AKANSHA GENERAL (DHARAMJAYGARH) 3.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *AKANKSHA  (DHARAMJAYGARH)* भाइया आपका बकाया बैलेंस  *14552 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *AKANKSHA  (DHARAMJAYGARH)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
																	
{id: 1, name: '	DIPKA', total: ' (	79949	)', 														
customer1: '	KOLKATA MAHASALE (DIPKA)	', toys1: 'TOYS:-	', amount1: ' 	43263	',  url1: '	/2084377289testbysam/DIPKA/KOLKATA%20MAHA%20SALE%20(DIPKA)%2048.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KOLKATA MAHASALE (DIPKA)* भाइया आपका बकाया बैलेंस  *43263 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '	12995	',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KOLKATA MAHASALE (DIPKA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	NEW BOOK DEPO (DIPKA)	', toys2: 'TOYS:-	', amount2: '	9	',  url2: '	/2084377289testbysam/DIPKA/NEW%20BOOK%20DEPO.%20(DIPKA)%20110.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NEW BOOK DEPO (DIPKA)* भाइया आपका बकाया बैलेंस  *9 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NEW BOOK DEPO (DIPKA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	GEETA BOOK DEPO (DIPKA)	', toys3: 'TOYS:-	', amount3: '	25287	',  url3: '	/2084377289testbysam/DIPKA/GEETA%20BOOK%20DEPO.%20(DIPKA)%20266.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GEETA BOOK DEPO (DIPKA)* भाइया आपका बकाया बैलेंस  *25287 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GEETA BOOK DEPO (DIPKA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	SHANTI SUHAG (DIPKA)	', toys4: 'TOYS:-	', amount4: ' 	3383	',  url4: '	/2084377289testbysam/DIPKA/SHANTI%20SUHAG%20(DIPKA)%20129.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHANTI SUHAG (DIPKA)* भाइया आपका बकाया बैलेंस  *3383 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '	25	',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHANTI SUHAG (DIPKA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	KHUSHI BENGALS (DIPKA)	', toys5: 'TOYS:-	', amount5: '	7581	',  url5: '	/2084377289testbysam/DIPKA/KHUSHI%20BENGALS%20(DIPKA)%204.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KHUSHI BENGALS (DIPKA)* भाइया आपका बकाया बैलेंस  *7581 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KHUSHI BENGALS (DIPKA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer6: '	VASU COLLECTION  (DIPA)	', toys6: 'TOYS:-	', amount6: '	426	',  url6: '	/2084377289testbysam/DIPKA/VASU%20COLLECTION.%20(DIPKA)%20149.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VASU COLLECTION  (DIPA)* भाइया आपका बकाया बैलेंस  *426 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags6: 'ORDER	', amountb6: '		',  urlb6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VASU COLLECTION  (DIPA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	GANYARI', total: ' (	700	)', 														
customer1: '	MISHRA GENERAL (GANYARI)	', toys1: 'TOYS:-	', amount1: ' 	700	',  url1: '	/2084377289testbysam/GANYARI/MISHRA (GANYARI) 154.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MISHRA GENERAL (GANYARI)* भाइया आपका बकाया बैलेंस  *700 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MISHRA GENERAL (GANYARI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	GOBIRPATH', total: ' (	0	)', 														
customer1: '	PREETY GOBRIPATH (GOBRIPATH)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/GOBRIPATH/PREETI (GOBRIPATH) 97.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PREETY GOBRIPATH (GOBRIPATH)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PREETY GOBRIPATH (GOBRIPATH)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	PRATAB  GOBRIPAT	', toys2: 'TOYS:-	', amount2: ' 	0	',  url2: '	/2084377289testbysam/GOBRIPATH/PRATAB (GOBRIPAT).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PRATAB  GOBRIPAT* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PRATAB  GOBRIPAT* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
																	
{id: 1, name: '	HARDIBAZAR ', total: '(	17862	)', 														
customer1: '	ASHWANI SHRINGAR (HARDIBAZAR)	', toys1: 'TOYS:-	', amount1: ' 	10	',  url1: '	/2084377289testbysam/HARDIBAZAR/ASHWINI GENERAL (HARDIBAZAR) 174.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ASHWANI SHRINGAR (HARDIBAZAR)* भाइया आपका बकाया बैलेंस  *10 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ASHWANI SHRINGAR (HARDIBAZAR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	SANSKRITI GENERAL  (HARDIBAZAR)	', toys2: 'TOYS:-	', amount2: '	2244	',  url2: '	/2084377289testbysam/HARDIBAZAR/SANSKRITI GENERAL (HARDIBAZAR).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SANSKRITI GENERAL  (HARDIBAZAR)* भाइया आपका बकाया बैलेंस  *2244 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SANSKRITI GENERAL  (HARDIBAZAR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	NIKHIL FANCY (HARDIBAZAR)	', toys3: 'TOYS:-	', amount3: '	2	',  url3: '	/2084377289testbysam/HARDIBAZAR/NIKHIL FANCY (HARDIBAZAR) 281.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NIKHIL FANCY (HARDIBAZAR)* भाइया आपका बकाया बैलेंस  *2 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '	4	',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NIKHIL FANCY (HARDIBAZAR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	 SONI SHRINGAR (HARDIBAZAR)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/HARDIBAZAR/SONI SHRINGAR (HARDIBAZAR) 72.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! * SONI SHRINGAR (HARDIBAZAR)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! * SONI SHRINGAR (HARDIBAZAR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	MANOJ KAPDA BAZAR (HARDIBAZAR)	', toys5: 'TOYS:-	', amount5: '	15606	',  url5: '	/2084377289testbysam/HARDIBAZAR/MANOJ KAPDA (HARDIBAZAR) 252.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MANOJ KAPDA BAZAR (HARDIBAZAR)* भाइया आपका बकाया बैलेंस  *15606 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MANOJ KAPDA BAZAR (HARDIBAZAR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	HARDIKALA', total: ' (	0	)', 														
customer1: '	MANMOHAN (HARDIKALA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/HARDIKALA/MANMOHAN (HARDIKALA) 69.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MANMOHAN (HARDIKALA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MANMOHAN (HARDIKALA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	SANAJY  (HARDIKALA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/HARDIKALA/SANJAY. (HARDIKALA) 291.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SANAJY  (HARDIKALA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SANAJY  (HARDIKALA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	HASOD', total: ' (	10494	)', 														
customer1: '	LAXMI FANCY (HASOD)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/HASOD/LAXMI%20GENERAL%20(HASOD)%20145.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *LAXMI FANCY (HASOD)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *LAXMI FANCY (HASOD)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	SAHU FANCY (HASOD)	', toys2: 'TOYS:-	', amount2: '	6	',  url2: '	/2084377289testbysam/HASOD/SAHU%20FANCY%20(HASOD)%20301.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SAHU FANCY (HASOD)* भाइया आपका बकाया बैलेंस  *6 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SAHU FANCY (HASOD)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	REKHA FANCY STORE (HASOD)	', toys3: 'TOYS:-	', amount3: '	3215	',  url3: '	/2084377289testbysam/HASOD/REKHA%20FANCY%20STORE%20(HASOD).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *REKHA FANCY STORE (HASOD)* भाइया आपका बकाया बैलेंस  *3215 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '	0	',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *REKHA FANCY STORE (HASOD)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	CHAVI GENERAL (HASOD)	', toys4: 'TOYS:-	', amount4: ' 	2462	',  url4: '	/2084377289testbysam/HASOD/CHAVVI%20GENERAL%20(HASOD).htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *CHAVI GENERAL (HASOD)* भाइया आपका बकाया बैलेंस  *2462 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *CHAVI GENERAL (HASOD)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	MAHARAJ FANCY (HASOD)	', toys5: 'TOYS:-	', amount5: '	4811	',  url5: '	/2084377289testbysam/HASOD/MAHARAJ%20FANCY%20STORE%20(HASOD).htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAHARAJ FANCY (HASOD)* भाइया आपका बकाया बैलेंस  *4811 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAHARAJ FANCY (HASOD)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	JAIJAIPURI', total: ' (	20912	)', 														
customer1: '	TOMESH CHASHMA	', toys1: 'TOYS:-	', amount1: ' 	6	',  url1: '	/2084377289testbysam/JAIJAIPUR/TOMESH (JAIJAIPUR).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *TOMESH CHASHMA* भाइया आपका बकाया बैलेंस  *6 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *TOMESH CHASHMA* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	KHUSHI  GENERAL  	', toys2: 'TOYS:-	', amount2: '	20906	',  url2: '	/2084377289testbysam/JAIJAIPUR/KHUSHI GENERAL (JAYJAYPUR).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KHUSHI  GENERAL  * भाइया आपका बकाया बैलेंस  *20906 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KHUSHI  GENERAL  * भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	JAITHARI', total: ' (	5862	)', 														
customer1: '	SHIV PLASTIC (JAITHARI)	', toys1: 'TOYS:-	', amount1: ' 	5862	',  url1: '	/2084377289testbysam/JAITHARI/MUSKAN (JAITHARI) 79.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHIV PLASTIC (JAITHARI)* भाइया आपका बकाया बैलेंस  *5862 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHIV PLASTIC (JAITHARI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	MUSKAN FANCY (JAITHARI)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/JAITHARI/SHIV PLASTICS (JAITHARI) 143.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MUSKAN FANCY (JAITHARI)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MUSKAN FANCY (JAITHARI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	ANKIT (JAITHARI)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/JAITHARI/ANKIT (JAITHARI).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ANKIT (JAITHARI)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ANKIT (JAITHARI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	JANJGIR', total: ' (	7943	)', 														
customer1: '	GARIMA FANCY (JANJGIR)	', toys1: 'TOYS:-	', amount1: ' 	2462	',  url1: '	/2084377289testbysam/JANJGIR/GARIMA FANCY (JANJGIR) 166.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GARIMA FANCY (JANJGIR)* भाइया आपका बकाया बैलेंस  *2462 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GARIMA FANCY (JANJGIR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	PRATEEK GENERAL  (JANJGIR)	', toys2: 'TOYS:-	', amount2: '	5481	',  url2: '	/2084377289testbysam/JANJGIR/PRATEEK GENERAL (JANJGIR) 150.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PRATEEK GENERAL  (JANJGIR)* भाइया आपका बकाया बैलेंस  *5481 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PRATEEK GENERAL  (JANJGIR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	NAMDEV GENERAL (JANJGIR)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/JANJGIR/NAMDEV GENERAL (JANJGIR) 158.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NAMDEV GENERAL (JANJGIR)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NAMDEV GENERAL (JANJGIR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	SATYAM GENERAL (JANJGIR)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/JANJGIR/SATYAM GENERAL (JANJGIR) 132.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SATYAM GENERAL (JANJGIR)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SATYAM GENERAL (JANJGIR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	SUPER BAG HOUSE (JANJGIR)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/JANJGIR/SUPER BAG HOUSE (JANJGIR) 37.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SUPER BAG HOUSE (JANJGIR)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SUPER BAG HOUSE (JANJGIR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer6: '	AKASH GENERAL (JANJGIR)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/JANJGIR/AKASH GENERAL STORE (JANJGIR) 11.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *AKASH GENERAL (JANJGIR)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags6: 'ORDER	', amountb6: '		',  urlb6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *AKASH GENERAL (JANJGIR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer7: '	MADANLAL KAPDA (JANJGIR)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/JANJGIR/MADANLAL (JANJGIR).htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MADANLAL KAPDA (JANJGIR)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags7: 'ORDER	', amountb7: '		',  urlb7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MADANLAL KAPDA (JANJGIR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer8: '	RAJESH GENERAL (JANJGUR	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/JANJGIR/RAJESH GENERAL (JANJGIR).htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RAJESH GENERAL (JANJGUR* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags8: 'ORDER	', amountb8: '		',  urlb8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RAJESH GENERAL (JANJGUR* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	JHARSUKDA ', total: '(	5004	)', 														
customer1: '	 FASHION PARK (JHARSUKDA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/JHARSUKDA/FASHION PARK (JHARSUKDA) 167.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! * FASHION PARK (JHARSUKDA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! * FASHION PARK (JHARSUKDA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	GUDDU (JHARSUKDA)	', toys2: 'TOYS:-	', amount2: '	5004	',  url2: '	/2084377289testbysam/JHARSUKDA/GUDDU (JHARSUKDA) 43.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GUDDU (JHARSUKDA)* भाइया आपका बकाया बैलेंस  *5004 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GUDDU (JHARSUKDA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	JONDHRA ', total: '(	9833	)', 														
customer1: '	BABA GENERAL (JONDHRA)	', toys1: 'TOYS:-	', amount1: ' 	9833	',  url1: '	/2084377289testbysam/JONDHRA/BABA GENERAL (JONDHRA).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *BABA GENERAL (JONDHRA)* भाइया आपका बकाया बैलेंस  *9833 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *BABA GENERAL (JONDHRA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	PURAN (JONDHARA)	', toys2: 'TOYS:-	', amount2: ' 	0	',  url2: '	/2084377289testbysam/JONDHRA/PURAN FANCY  (JONDHARA).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PURAN (JONDHARA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PURAN (JONDHARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	SAHELI BEAUTY (JONDHARA)	', toys3: 'TOYS:-	', amount3: ' 	8140	',  url3: '	/2084377289testbysam/JONDHRA/SAHELI BEAUTY (JONDHARA).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SAHELI BEAUTY (JONDHARA)* भाइया आपका बकाया बैलेंस  *8140 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SAHELI BEAUTY (JONDHARA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	
																	},
{id: 1, name: '	KATGHORA', total: ' (	8215	)', 														
customer1: '	ROOP SHRINGAR	', toys1: 'TOYS:-	', amount1: ' 	2118	',  url1: '	/2084377289testbysam/KATGHORA/ROOP%20SHRINGAR%20(KATGHORA)%20173.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ROOP SHRINGAR* भाइया आपका बकाया बैलेंस  *2118 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ROOP SHRINGAR* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	MAHABALI (KATGHORA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/KATGHORA/MAHABALI.%20(KATGHORA)%2063.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAHABALI (KATGHORA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAHABALI (KATGHORA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	KAREENA BOOT HOUSE (KATGHORA)	', toys3: 'TOYS:-	', amount3: '	300	',  url3: '	/2084377289testbysam/KATGHORA/KAREENA%20BOOT%20(KATGHOTA)%20(NEW%2029).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KAREENA BOOT HOUSE (KATGHORA)* भाइया आपका बकाया बैलेंस  *300 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KAREENA BOOT HOUSE (KATGHORA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	PRADEEP BHAIYA (KATGHORA)	', toys4: 'TOYS:-	', amount4: ' 	5797	',  url4: '	/2084377289testbysam/KATGHORA/PRADEEP BHAI (KATGHORA).htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PRADEEP BHAIYA (KATGHORA)* भाइया आपका बकाया बैलेंस  *5797 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PRADEEP BHAIYA (KATGHORA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	PADUKA BOOT HOUSE (KATGHORA)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/KATGHORA/PADUKA%20BOOT%20(KATGHORA)%20250.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PADUKA BOOT HOUSE (KATGHORA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PADUKA BOOT HOUSE (KATGHORA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer6: '	TIRUPATI GENERAL (KATGORA)	', toys6: 'TOYS:-	', amount6: '	2997	',  url6: '	/2084377289testbysam/KATGHORA/TIRUPATI GENERAL (KATGHORA).htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *TIRUPATI GENERAL (KATGORA)* भाइया आपका बकाया बैलेंस  *2997 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags6: 'ORDER	', amountb6: '		',  urlb6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *TIRUPATI GENERAL (KATGORA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer7: '	SHUBH KADAM (KATGHORA)	', toys7: 'TOYS:-	', amount7: '	699	',  url7: '	/2084377289testbysam/KATGHORA/PADUKA BOOT (KATGHORA) 250_files.htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHUBH KADAM (KATGHORA)* भाइया आपका बकाया बैलेंस  *699 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags7: 'ORDER	', amountb7: '		',  urlb7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHUBH KADAM (KATGHORA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer8: '	TANISHA COLLECTION (KATGHORA)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/KATGHORA/TANSIHA COLLECTION (KATGHORA).htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *TANISHA COLLECTION (KATGHORA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags8: 'ORDER	', amountb8: '		',  urlb8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *TANISHA COLLECTION (KATGHORA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer9: '	GAURI UPHAR (KATGHORA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/KATGHORA/GAURI UPHAR (KATGHORA).htm	', GIFTS9: 'PAYMENT	', amountg9: '		',  urlg9: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GAURI UPHAR (KATGHORA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags9: 'ORDER	', amountb9: '		',  urlb9: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GAURI UPHAR (KATGHORA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	KATGI', total: ' (	69012	)', 														
customer1: '	VIDHYARTHI GENERAL (KATGI)	', toys1: 'TOYS:-	', amount1: ' 	3	',  url1: '	/2084377289testbysam/KATGI/VIDYARTH GENERAL (KATGI) 106.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VIDHYARTHI GENERAL (KATGI)* भाइया आपका बकाया बैलेंस  *3 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VIDHYARTHI GENERAL (KATGI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	MANOJ FASHION	', toys2: 'TOYS:-	', amount2: '	27429	',  url2: '	/2084377289testbysam/KATGI/MANOJ FASHION (KATGI) 164.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MANOJ FASHION* भाइया आपका बकाया बैलेंस  *27429 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MANOJ FASHION* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	MAHAMAYA GENERAL (KATGI)	', toys3: 'TOYS:-	', amount3: '	6125	',  url3: '	/2084377289testbysam/KATGI/MAHAMAYA GENERAL. (KATGI) 170_files.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAHAMAYA GENERAL (KATGI)* भाइया आपका बकाया बैलेंस  *6125 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAHAMAYA GENERAL (KATGI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	JYOTI GENRAL (KATGI)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/KATGI/JYOTI GENERAL (KATGI) 10.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *JYOTI GENRAL (KATGI)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *JYOTI GENRAL (KATGI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	PAWAN GENERAL STORE (KATGI)	', toys5: 'TOYS:-	', amount5: '	12295	',  url5: '	/2084377289testbysam/KATGI/PAWAN GENERAL (KATGI) 38.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PAWAN GENERAL STORE (KATGI)* भाइया आपका बकाया बैलेंस  *12295 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '	-44	',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PAWAN GENERAL STORE (KATGI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer6: '	SAI GENERAL (KATGI)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/KATGI/SAI GENERAL (KATGI) 264.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SAI GENERAL (KATGI)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags6: 'ORDER	', amountb6: '		',  urlb6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SAI GENERAL (KATGI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer7: '	SURAJ GENERAL (KATGI)	', toys7: 'TOYS:-	', amount7: '	-2497	',  url7: '	/2084377289testbysam/KATGI/SURAJ GENERAL. (KATGI) 27.htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SURAJ GENERAL (KATGI)* भाइया आपका बकाया बैलेंस  *-2497 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags7: 'ORDER	', amountb7: '		',  urlb7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SURAJ GENERAL (KATGI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer8: '	MANOJ GENERAL (KATGI)	', toys8: 'TOYS:-	', amount8: '	25657	',  url8: '	/2084377289testbysam/KATGI/MANOJ GENERAL. (KATGI) 68.htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MANOJ GENERAL (KATGI)* भाइया आपका बकाया बैलेंस  *25657 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags8: 'ORDER	', amountb8: '		',  urlb8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MANOJ GENERAL (KATGI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	KAWARDHA ', total: '(	0	)', 														
customer1: '	GURUDEV GENERAL (KAWARDHA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KAWARDHA/GURUDEV GENERAL (KAWARDHA).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GURUDEV GENERAL (KAWARDHA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GURUDEV GENERAL (KAWARDHA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	RAJESH FANCY (KAWARDHA)	', toys2: 'TOYS:-	', amount2: ' 	1742	',  url2: '	/2084377289testbysam/KAWARDHA/RAJESH FANCY (KAWARDHA).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RAJESH FANCY (KAWARDHA)* भाइया आपका बकाया बैलेंस  *1742 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RAJESH FANCY (KAWARDHA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	JAIN BENGALS (KAWARDHA)	', toys3: 'TOYS:-	', amount3: '		',  url3: '	/2084377289testbysam/KAWARDHA/JAIN BENGALS (KAWARDHA).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *JAIN BENGALS (KAWARDHA)* भाइया आपका बकाया बैलेंस  * Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *JAIN BENGALS (KAWARDHA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	KHAMRIYA', total: ' (	15223	)', 														
customer1: '	FAIR DEAL (KHAMARIYA)	', toys1: 'TOYS:-	', amount1: ' 	6078	',  url1: '	/2084377289testbysam/KHAMARIYA/FAIR%20DEAL.%20(KHAMARIYA)%20%2015.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *FAIR DEAL (KHAMARIYA)* भाइया आपका बकाया बैलेंस  *6078 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *FAIR DEAL (KHAMARIYA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	SHUBHAM GENERAL (KHAMARIYA)	', toys2: 'TOYS:-	', amount2: '	9145	',  url2: '	/2084377289testbysam/KHAMARIYA/SHUBHAM (KAMARIYA)  180.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHUBHAM GENERAL (KHAMARIYA)* भाइया आपका बकाया बैलेंस  *9145 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHUBHAM GENERAL (KHAMARIYA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	KHAMI', total: ' (	3506	)', 														
customer1: '	AMISHA GENERAL (KHAMI)	', toys1: 'TOYS:-	', amount1: ' 	6	',  url1: '	/2084377289testbysam/KHAMI/AMISHA GENERAL (KHAMI).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *AMISHA GENERAL (KHAMI)* भाइया आपका बकाया बैलेंस  *6 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *AMISHA GENERAL (KHAMI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	SAHU GENERAL (KHAMI)	', toys2: 'TOYS:-	', amount2: ' 	3500	',  url2: '	/2084377289testbysam/KHAMI/SAHU GENERAL (KHAMI).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SAHU GENERAL (KHAMI)* भाइया आपका बकाया बैलेंस  *3500 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SAHU GENERAL (KHAMI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	KARNODH ', total: '(	0	)', 														
customer1: '	ASHOK KARNODH	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KARNODH/ASHOK (KARNODH) 144.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ASHOK KARNODH* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ASHOK KARNODH* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	KHARSIYA ', total: '(	-3935	)', 														
customer1: '	ABHINANDAN (KHARSIYA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KHARSIYA/ABHINANDAN (KHARSIYA).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ABHINANDAN (KHARSIYA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ABHINANDAN (KHARSIYA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	KRISHAN COLLECTION (KHARSIYA)	', toys2: 'TOYS:-	', amount2: '	-3935	',  url2: '	/2084377289testbysam/KHARSIYA/KRISHAN COLLECTION (KHARSIYA).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KRISHAN COLLECTION (KHARSIYA)* भाइया आपका बकाया बैलेंस  *-3935 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KRISHAN COLLECTION (KHARSIYA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	KHAROD', total: ' (	2856	)', 														
customer1: '	MOHAN GENERAL 	', toys1: 'TOYS:-	', amount1: ' 	2856	',  url1: '	/2084377289testbysam/KHAROD/MOHAN (KHAROD)  65.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MOHAN GENERAL * भाइया आपका बकाया बैलेंस  *2856 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MOHAN GENERAL * भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	KASHDOL', total: ' (	3205	)', 														
customer1: '	MAA SHETLA (KASHDOL)	', toys1: 'TOYS:-	', amount1: ' 	3197	',  url1: '	/2084377289testbysam/KASHDOL/MAA SHETLA. (KASHDOL) 108.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAA SHETLA (KASHDOL)* भाइया आपका बकाया बैलेंस  *3197 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '	2916	',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAA SHETLA (KASHDOL)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	BALAJI (KASHDOL)	', toys2: 'TOYS:-	', amount2: '	8	',  url2: '	/2084377289testbysam/KASHDOL/BALAJI. (KASHDOL) 288.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *BALAJI (KASHDOL)* भाइया आपका बकाया बैलेंस  *8 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *BALAJI (KASHDOL)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	KORBA', total: ' (	1	)', 														
customer1: '	BANSAL ENTERPRISES	', toys1: 'TOYS:-	', amount1: ' 	1	',  url1: '	/2084377289testbysam/KORBA/BANSAL%20ENTERPRISES%20(KOSABADI)%20160.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *BANSAL ENTERPRISES* भाइया आपका बकाया बैलेंस  *1 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *BANSAL ENTERPRISES* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	GARIMA FANCY (NIHARIKA)	', toys2: 'TOYS:-	', amount2: ' 	9927	',  url2: '	/2084377289testbysam/KORBA/GARIMA FANCY (NIHARIKA).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GARIMA FANCY (NIHARIKA)* भाइया आपका बकाया बैलेंस  *9927 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GARIMA FANCY (NIHARIKA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	KOTA', total: ' (	1349	)', 														
customer1: '	AGGARWAL GENERAL (KOTA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KOTA/AGGARWAL GENERAL. (KOTA) 30.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *AGGARWAL GENERAL (KOTA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *AGGARWAL GENERAL (KOTA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	MAHAMAYA FASHION HOUSE	', toys2: 'TOYS:-	', amount2: '	3	',  url2: '	/2084377289testbysam/KOTA/MAHAMAYA FASHION HOUSE (KOTA) 18.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAHAMAYA FASHION HOUSE* भाइया आपका बकाया बैलेंस  *3 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAHAMAYA FASHION HOUSE* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	NISHA GENERAL (KOTA)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/KOTA/NISHA GENERAL (KOTA) 260.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NISHA GENERAL (KOTA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NISHA GENERAL (KOTA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	NIKITA GENERAL (KOTA)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/KOTA/NIKITA (KOTA).htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NIKITA GENERAL (KOTA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NIKITA GENERAL (KOTA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	AKANKSHA GENERAL (KOTA)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/KOTA/AKANKSHA GENERAL(KOTA) 7.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *AKANKSHA GENERAL (KOTA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '	889	',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *AKANKSHA GENERAL (KOTA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer6: '	SARITA GENERAL (KOTA)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/KOTA/SARITA GENERAL (KOTA).htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SARITA GENERAL (KOTA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags6: 'ORDER	', amountb6: '		',  urlb6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SARITA GENERAL (KOTA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer7: '	SHAILESH GENERAL (KOTA)	', toys7: 'TOYS:-	', amount7: '	1330	',  url7: '	/2084377289testbysam/KOTA/SHAILESH GENERAL. (KOTA) 121.htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHAILESH GENERAL (KOTA)* भाइया आपका बकाया बैलेंस  *1330 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags7: 'ORDER	', amountb7: '	0	',  urlb7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHAILESH GENERAL (KOTA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer8: '	ALL IN ONE (KOTA)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/KOTA/ALL IN ONE (KOTA).htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ALL IN ONE (KOTA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags8: 'ORDER	', amountb8: '		',  urlb8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ALL IN ONE (KOTA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer9: '	KALPANA GENERAL BABAN (KOTA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/KOTA/KALPANA (KOTA) 85.htm	', GIFTS9: 'PAYMENT	', amountg9: '		',  urlg9: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KALPANA GENERAL BABAN (KOTA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags9: 'ORDER	', amountb9: '		',  urlb9: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KALPANA GENERAL BABAN (KOTA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer10: '	AKANKSHA GENERAL (BABLU) (KOTA)	', toys10: 'TOYS:-	', amount10: '	16	',  url10: '	/2084377289testbysam/KOTA/AKANKSHA GENERAL BABLO (KOTA) 122.htm	', GIFTS10: 'PAYMENT	', amountg10: '		',  urlg10: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *AKANKSHA GENERAL (BABLU) (KOTA)* भाइया आपका बकाया बैलेंस  *16 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags10: 'ORDER	', amountb10: '		',  urlb10: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *AKANKSHA GENERAL (BABLU) (KOTA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer11: '	RAJA MOBILE (KOTA)	', toys11: 'TOYS:-	', amount11: '	0	',  url11: '	/2084377289testbysam/KOTA/RAJA MOBILE (KOTA).htm	', GIFTS11: 'PAYMENT	', amountg11: '		',  urlg11: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RAJA MOBILE (KOTA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags11: 'ORDER	', amountb11: '		',  urlb11: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RAJA MOBILE (KOTA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer12: '	GUPTA JI (KOTA)	', toys12: 'TOYS:-	', amount12: '	10	',  url12: '	/2084377289testbysam/KOTA/GUPTA JI (KOTA).htm	', GIFTS12: 'PAYMENT	', amountg12: '		',  urlg12: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GUPTA JI (KOTA)* भाइया आपका बकाया बैलेंस  *10 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags12: 'ORDER	', amountb12: '		',  urlb12: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GUPTA JI (KOTA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer13: '	MULCHAND (KOTA)	', toys13: 'TOYS:-	', amount13: '	4	',  url13: '	/2084377289testbysam/KOTA/MULCHAND (KOTA).htm	', GIFTS13: 'PAYMENT	', amountg13: '		',  urlg13: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MULCHAND (KOTA)* भाइया आपका बकाया बैलेंस  *4 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags13: 'ORDER	', amountb13: '		',  urlb13: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MULCHAND (KOTA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer14: '	OM PRAKASH  (KOTA)	', toys14: 'TOYS:-	', amount14: '	3	',  url14: '	/2084377289testbysam/KOTA/OM PRAKASH (KOTA).htm	', GIFTS14: 'PAYMENT	', amountg14: '	918103589710	',  urlg14: '	https://api.whatsapp.com/send?phone= 918103589710&text=नमस्कार ! *OM PRAKASH  (KOTA)* भाइया आपका बकाया बैलेंस  *3 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags14: 'ORDER	', amountb14: '		',  urlb14: '	https://api.whatsapp.com/send?phone= 918103589710&text=नमस्कार ! *OM PRAKASH  (KOTA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	KOTMISONAR ', total: '(	0	)', 														
customer1: '	JANVI GENERAL (KOTMISONAR)	', toys1: 'TOYS:-	', amount1: ' 		',  url1: '		', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *JANVI GENERAL (KOTMISONAR)* भाइया आपका बकाया बैलेंस  * Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *JANVI GENERAL (KOTMISONAR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	KUNDA', total: ' (	2	)', 														
customer1: '	CHANDRAKAR GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/KUNDA/CHANDRAKAR GENERAL (KUNDA) 102.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *CHANDRAKAR GENERAL* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '	9880	',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *CHANDRAKAR GENERAL* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	SHREE RADHA RANI (KUNDA)	', toys2: 'TOYS:-	', amount2: '	-1	',  url2: '	/2084377289testbysam/KUNDA/SHREE RADHA RANI (KUNDA).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHREE RADHA RANI (KUNDA)* भाइया आपका बकाया बैलेंस  *-1 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHREE RADHA RANI (KUNDA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	SHRIRAM GENERAL (KUNDA)	', toys3: 'TOYS:-	', amount3: '	3	',  url3: '	/2084377289testbysam/KUNDA/SHRIRAM GENERAL. (KUNDA) 34.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHRIRAM GENERAL (KUNDA)* भाइया आपका बकाया बैलेंस  *3 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '	0	',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHRIRAM GENERAL (KUNDA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	KANHA  FANCY (KUNDA)	', toys4: 'TOYS:-	', amount4: '	7650	',  url4: '	/2084377289testbysam/KUNDA/KANHA FANCY (KUNDA).htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KANHA  FANCY (KUNDA)* भाइया आपका बकाया बैलेंस  *7650 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KANHA  FANCY (KUNDA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	TD GENERAL	', toys5: 'TOYS:-	', amount5: '	4126	',  url5: '	/2084377289testbysam/KUNDA/TD GENERAL (RUSSEY KUNDA).htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *TD GENERAL* भाइया आपका बकाया बैलेंस  *4126 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *TD GENERAL* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	LAWAN', total: ' (	0	)', 														
customer1: '	VINOD LAWAN	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/LAWAN/VINOD (LAWAN).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VINOD LAWAN* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VINOD LAWAN* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	LORMI ', total: '(	30726	)', 														
customer1: '	NANDANI GENERAL (LORMI)	', toys1: 'TOYS:-	', amount1: ' 	3050	',  url1: '	/2084377289testbysam/LORMI/NANDINI GENERAL (LORMI) 172.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NANDANI GENERAL (LORMI)* भाइया आपका बकाया बैलेंस  *3050 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NANDANI GENERAL (LORMI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	ASHISH GENERAL (LORMI)	', toys2: 'TOYS:-	', amount2: '	17075	',  url2: '	/2084377289testbysam/LORMI/ASHISH GENERAL .(LORMI) (NEW 5).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ASHISH GENERAL (LORMI)* भाइया आपका बकाया बैलेंस  *17075 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ASHISH GENERAL (LORMI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	KESARWANI (LORMI)	', toys3: 'TOYS:-	', amount3: '	10600	',  url3: '	/2084377289testbysam/LORMI/KESARWANI GIFT (LORMI) 275.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KESARWANI (LORMI)* भाइया आपका बकाया बैलेंस  *10600 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KESARWANI (LORMI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	KANHA COLLECTION (LORMI)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/LORMI/KANHA COLLECTION .(LORMI).htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KANHA COLLECTION (LORMI)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KANHA COLLECTION (LORMI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	KAVYA GENERAL (LORMI)	', toys5: 'TOYS:-	', amount5: ' 	0	',  url5: '	/2084377289testbysam/LORMI/KAVYA GENERAL (LORMI) (NEW 33).htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KAVYA GENERAL (LORMI)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KAVYA GENERAL (LORMI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer6: '	MAMTA GENERAL (LORMI)	', toys6: 'TOYS:-	', amount6: ' 	1	',  url6: '	/2084377289testbysam/LORMI/MAMTA LORMI.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAMTA GENERAL (LORMI)* भाइया आपका बकाया बैलेंस  *1 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags6: 'ORDER	', amountb6: '		',  urlb6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAMTA GENERAL (LORMI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer7: '	SALUJA BAG (LORMI)	', toys7: 'TOYS:-	', amount7: ' 	18880	',  url7: '	/2084377289testbysam/LORMI/SALUJA BAG (LORMI).htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SALUJA BAG (LORMI)* भाइया आपका बकाया बैलेंस  *18880 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags7: 'ORDER	', amountb7: '	12020	',  urlb7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SALUJA BAG (LORMI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer8: '	PARIDHAN AKHRAR (LORMI)	', toys8: 'TOYS:-	', amount8: ' 		',  url8: '		', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PARIDHAN AKHRAR (LORMI)* भाइया आपका बकाया बैलेंस  * Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags8: 'ORDER	', amountb8: '		',  urlb8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PARIDHAN AKHRAR (LORMI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	MALHAR', total: ' (	58985	)', 														
customer1: '	ANKIT FANCY (MALHAR)	', toys1: 'TOYS:-	', amount1: ' 	38021	',  url1: '	/2084377289testbysam/MALHAR/ANKITA (MALHAR) (NEW 7).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ANKIT FANCY (MALHAR)* भाइया आपका बकाया बैलेंस  *38021 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ANKIT FANCY (MALHAR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	PURVI FANCY (MALHAR)	', toys2: 'TOYS:-	', amount2: '	1187	',  url2: '	/2084377289testbysam/MALHAR/PURVI FANCY (MALHAR) 290.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PURVI FANCY (MALHAR)* भाइया आपका बकाया बैलेंस  *1187 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PURVI FANCY (MALHAR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	JAANVI GENERAL (MALHAR)	', toys3: 'TOYS:-	', amount3: '	19777	',  url3: '	/2084377289testbysam/MALHAR/JANVI GENERAL (MALHAR) 25.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *JAANVI GENERAL (MALHAR)* भाइया आपका बकाया बैलेंस  *19777 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '	10975	',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *JAANVI GENERAL (MALHAR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	JITENDRA (MALHAR)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/MALHAR/JITENDRA (MALHAR) 168.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *JITENDRA (MALHAR)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *JITENDRA (MALHAR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	MALKHARODA ', total: '(	30441	)', 														
customer1: '	PARI FANCY	', toys1: 'TOYS:-	', amount1: ' 	26777	',  url1: '	/2084377289testbysam/MALKHAROD/PARI FANCY (MALKHAROD) 184.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PARI FANCY* भाइया आपका बकाया बैलेंस  *26777 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '	9962	',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PARI FANCY* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	PRAKASH FANCY	', toys2: 'TOYS:-	', amount2: ' 	3664	',  url2: '	/2084377289testbysam/MALKHAROD/PRAKASH FANCY (MALKHARODA).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PRAKASH FANCY* भाइया आपका बकाया बैलेंस  *3664 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PRAKASH FANCY* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	SHARDA FANCY	', toys3: 'TOYS:-	', amount3: ' 	0	',  url3: '	/2084377289testbysam/MALKHAROD/SHARDA FANCY (MALKHARODA).htm	', bag3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHARDA FANCY* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bag3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHARDA FANCY* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	MANENDRAGARH', total: ' (	0	)', 														
customer1: '	AISHWARIYA GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/MANENDRAGARH/AISHWARIYA (MANENDRAGARH).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *AISHWARIYA GENERAL* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *AISHWARIYA GENERAL* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	MARO ', total: '(	4	)', 														
customer1: '	RAJA MARO (MARO)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/MARO/RAJA (MARO).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RAJA MARO (MARO)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RAJA MARO (MARO)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	ANMOL  (MARO)	', toys2: 'TOYS:-	', amount2: '	4	',  url2: '	/2084377289testbysam/MARO/ANMOL (MARO).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ANMOL  (MARO)* भाइया आपका बकाया बैलेंस  *4 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ANMOL  (MARO)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	MARWAHI', total: ' (	32294	)', 														
customer1: '	LAXMI GENERAL (MARWAHI)	', toys1: 'TOYS:-	', amount1: ' 	27341	',  url1: '	/2084377289testbysam/MARWAHI/LAXMI GENERAL .(MARWAHI) 240.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *LAXMI GENERAL (MARWAHI)* भाइया आपका बकाया बैलेंस  *27341 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *LAXMI GENERAL (MARWAHI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	JAFFAR BOOT (MARWAHI)	', toys2: 'TOYS:-	', amount2: '	4953	',  url2: '	/2084377289testbysam/MARWAHI/JAFFAR BOOT .(MARWAHI) 5.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *JAFFAR BOOT (MARWAHI)* भाइया आपका बकाया बैलेंस  *4953 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '	439	',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *JAFFAR BOOT (MARWAHI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	MASTURI ', total: '(	9170	)', 														
customer1: '	KISHORE RIKSHAW	', toys1: 'TOYS:-	', amount1: ' 	5478	',  url1: '	/2084377289testbysam/MASTURI/KISHORE RIKSHAW (MASTURI) 114.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KISHORE RIKSHAW* भाइया आपका बकाया बैलेंस  *5478 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KISHORE RIKSHAW* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	LAXMI GENERAL	', toys2: 'TOYS:-	', amount2: '	3692	',  url2: '	/2084377289testbysam/MASTURI/LAXMI GENERAL (MASTURI) 273.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *LAXMI GENERAL* भाइया आपका बकाया बैलेंस  *3692 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '	0	',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *LAXMI GENERAL* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	KISHORE KIRANA (MASTURI)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/MASTURI/KISHORE KIRANA (MASTURI).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KISHORE KIRANA (MASTURI)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KISHORE KIRANA (MASTURI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	MOHGAON ', total: '(	4089	)', 														
customer1: '	MANISH GENERAL	', toys1: 'TOYS:-	', amount1: ' 	4089	',  url1: '	/2084377289testbysam/MOHAGAON/MANISH (MOHGAON) 156.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MANISH GENERAL* भाइया आपका बकाया बैलेंस  *4089 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MANISH GENERAL* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	SHUBHAM GENERAL (MOHGAON)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/MOHAGAON/SHUBHAM GENERAL (MOHGAON).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHUBHAM GENERAL (MOHGAON)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHUBHAM GENERAL (MOHGAON)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	MUNGELI', total: ' (	15369	)', 														
customer1: '	TOY ZONE 	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/MUNGELI/TOY%20ZONE%20(MUNGELI).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *TOY ZONE * भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *TOY ZONE * भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	BABA GENERAL	', toys2: 'TOYS:-	', amount2: '	-1	',  url2: '	/2084377289testbysam/MUNGELI/BABA%20GENERAL%20(MUNGELI)%20%2023.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *BABA GENERAL* भाइया आपका बकाया बैलेंस  *-1 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *BABA GENERAL* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	GURUNANAK GENERAL	', toys3: 'TOYS:-	', amount3: '	319	',  url3: '	/2084377289testbysam/MUNGELI/GURUNANAK%20GENERAL%20(MUNGELI)%2076.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GURUNANAK GENERAL* भाइया आपका बकाया बैलेंस  *319 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GURUNANAK GENERAL* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	 JEENAT BENGALS (MUNGELI)	', toys4: 'TOYS:-	', amount4: ' 	2842	',  url4: '	/2084377289testbysam/MUNGELI/ZEENAT%20BENGALS%20(MUNGELI)%2045.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! * JEENAT BENGALS (MUNGELI)* भाइया आपका बकाया बैलेंस  *2842 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! * JEENAT BENGALS (MUNGELI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	PAYAL BAG HOUSE	', toys5: 'TOYS:-	', amount5: '	3284	',  url5: '	/2084377289testbysam/MUNGELI/PAYAL%20BAG%20(MUNGELI)%20171.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PAYAL BAG HOUSE* भाइया आपका बकाया बैलेंस  *3284 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PAYAL BAG HOUSE* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer6: '	PRIYA LADIES	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/MUNGELI/PRIYA%20LADIES%20(MUNGELI)%2099.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PRIYA LADIES* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags6: 'ORDER	', amountb6: '		',  urlb6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PRIYA LADIES* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer7: '	SANGAM FANCY	', toys7: 'TOYS:-	', amount7: '	8424	',  url7: '	/2084377289testbysam/MUNGELI/SANGAM%20FANCY%20(MUNGELI)%20(NEW%20169).htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SANGAM FANCY* भाइया आपका बकाया बैलेंस  *8424 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags7: 'ORDER	', amountb7: '		',  urlb7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SANGAM FANCY* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer8: '	OM GENERAL (MUNGELI)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/MUNGELI/OM%20GENERAL%20(MUNGELI)%2087.htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *OM GENERAL (MUNGELI)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags8: 'ORDER	', amountb8: '		',  urlb8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *OM GENERAL (MUNGELI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer9: '	K.V FASHION (MUNGELI)	', toys9: 'TOYS:-	', amount9: '	500	',  url9: '	/2084377289testbysam/MUNGELI/K.V FASHION (MUNGELI).htm	', GIFTS9: 'PAYMENT	', amountg9: '		',  urlg9: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *K.V FASHION (MUNGELI)* भाइया आपका बकाया बैलेंस  *500 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags9: 'ORDER	', amountb9: '		',  urlb9: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *K.V FASHION (MUNGELI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer10: '	SAGAR BAG  RAVI (MUNGELI)	', toys10: 'TOYS:-	', amount10: '	1	',  url10: '	/2084377289testbysam/MUNGELI/SAGAR BAG RAVI (MUNGELI).htm	', GIFTS10: 'PAYMENT	', amountg10: '		',  urlg10: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SAGAR BAG  RAVI (MUNGELI)* भाइया आपका बकाया बैलेंस  *1 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags10: 'ORDER	', amountb10: '		',  urlb10: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SAGAR BAG  RAVI (MUNGELI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer11: '	MAA PARMESHWARI (MUNGELI)	', toys11: 'TOYS:-	', amount11: '	0	',  url11: '	/2084377289testbysam/MUNGELI/MAA PARMESHWARI (MUNGELI).htm	', GIFTS11: 'PAYMENT	', amountg11: '		',  urlg11: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAA PARMESHWARI (MUNGELI)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags11: 'ORDER	', amountb11: '		',  urlb11: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAA PARMESHWARI (MUNGELI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer12: '	GULSHAN FANCY (MUNGELI)	', toys12: 'TOYS:-	', amount12: '	22	',  url12: '	/2084377289testbysam/MUNGELI/GULSHAN FANCY (MUNGELI).htm	', GIFTS12: 'PAYMENT	', amountg12: '		',  urlg12: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GULSHAN FANCY (MUNGELI)* भाइया आपका बकाया बैलेंस  *22 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags12: 'ORDER	', amountb12: '		',  urlb12: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GULSHAN FANCY (MUNGELI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer13: '	MAHALAXMI FANCY (MUNGELI)	', toys13: 'TOYS:-	', amount13: '	2948	',  url13: '	/2084377289testbysam/MUNGELI/MAHALAXMI FANCY (MUNGELI).htm	', GIFTS13: 'PAYMENT	', amountg13: '		',  urlg13: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAHALAXMI FANCY (MUNGELI)* भाइया आपका बकाया बैलेंस  *2948 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags13: 'ORDER	', amountb13: '		',  urlb13: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAHALAXMI FANCY (MUNGELI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	SILLI', total: ' (	3089	)', 														
customer1: '	OM LAXMI (SILLI)	', toys1: 'TOYS:-	', amount1: ' 	3089	',  url1: '	/2084377289testbysam/SILLI/OM LAXMI SILLI.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *OM LAXMI (SILLI)* भाइया आपका बकाया बैलेंस  *3089 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *OM LAXMI (SILLI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
																	
{id: 1, name: '	PACHPEDI ', total: '(	10195	)', 														
customer1: '	VINAY GENERAL (PACHPEDI)	', toys1: 'TOYS:-	', amount1: ' 	4500	',  url1: '	/2084377289testbysam/PACHPEDI/VINAY (PACHPEDI) 24.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VINAY GENERAL (PACHPEDI)* भाइया आपका बकाया बैलेंस  *4500 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VINAY GENERAL (PACHPEDI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	SAHIL (PACHPEDI)	', toys2: 'TOYS:-	', amount2: '	5695	',  url2: '	/2084377289testbysam/PACHPEDI/SAHIL (PACHPEDI) 119.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SAHIL (PACHPEDI)* भाइया आपका बकाया बैलेंस  *5695 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SAHIL (PACHPEDI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	JAISWAL ELECRICALS (PACHPEDI)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/PACHPEDI/JAISWAL ELECTRICAL (PACHPEDI).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *JAISWAL ELECRICALS (PACHPEDI)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *JAISWAL ELECRICALS (PACHPEDI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	PAMGARH ', total: '(	0	)', 														
customer1: '	BABA SCHOOL POINT (PAMGARH)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/PAMGARH/BABA%20SCHOOL%20POINT%20(PAMGARH)%2090.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *BABA SCHOOL POINT (PAMGARH)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '		',
customer2: '	KABIR (PAMGARH)	', toys2: 'TOYS:-	', amount2: ' 	0	',  url2: '	/2084377289testbysam/PAMGARH/KABIR (PAMGARH).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KABIR (PAMGARH)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '		',
																	},
																	
{id: 1, name: '	PALI', total: ' (	36818	)', 														
customer1: '	ARADHYA GENERAL (PALI)	', toys1: 'TOYS:-	', amount1: ' 	1332	',  url1: '	/2084377289testbysam/PALI/ARADHYA GENERAL (PALI).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ARADHYA GENERAL (PALI)* भाइया आपका बकाया बैलेंस  *1332 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ARADHYA GENERAL (PALI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	JAI  MAHAMAYA (PALI)	', toys2: 'TOYS:-	', amount2: '	20696	',  url2: '	/2084377289testbysam/PALI/JAI%20MAHAMAYA%20(PALI)%20267.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *JAI  MAHAMAYA (PALI)* भाइया आपका बकाया बैलेंस  *20696 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '	750	',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *JAI  MAHAMAYA (PALI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	SHIV BEEJ	', toys3: 'TOYS:-	', amount3: '	4369	',  url3: '	/2084377289testbysam/PALI/SHIV%20BEEJ%20(PALI)%20255.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHIV BEEJ* भाइया आपका बकाया बैलेंस  *4369 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHIV BEEJ* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	DEEPAK READYMATE (PALI)	', toys4: 'TOYS:-	', amount4: ' 	10	',  url4: '	/2084377289testbysam/PALI/DEEPAK%20READYMATE%20(PALI).htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *DEEPAK READYMATE (PALI)* भाइया आपका बकाया बैलेंस  *10 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '	1679	',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *DEEPAK READYMATE (PALI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	SHRIJAN	', toys5: 'TOYS:-	', amount5: '	3000	',  url5: '	/2084377289testbysam/PALI/SHRIJAN%20(PALI)%20116.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHRIJAN* भाइया आपका बकाया बैलेंस  *3000 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHRIJAN* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer6: '	SUMIT COLLECTION PALI	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/PALI/SUMIT%20COLLECTION%20.(PALI)%20285.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SUMIT COLLECTION PALI* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags6: 'ORDER	', amountb6: '		',  urlb6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SUMIT COLLECTION PALI* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer7: '	UPHAR COLLECTION PALI	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/PALI/UPHAR%20COLLECTION%20(PALI)%20179.htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *UPHAR COLLECTION PALI* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags7: 'ORDER	', amountb7: '		',  urlb7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *UPHAR COLLECTION PALI* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer8: '	SANJAY BOOK DEPO (PALI)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/PALI/SANJAY%20BOOK%20DEPO.%20(PALI)%2054.htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SANJAY BOOK DEPO (PALI)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags8: 'ORDER	', amountb8: '		',  urlb8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SANJAY BOOK DEPO (PALI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer9: '	SANJAY GIFT (PALI)	', toys9: 'TOYS:-	', amount9: '	7409	',  url9: '	/2084377289testbysam/PALI/SANJAY%20GIFT.%20(PALI)%20183.htm	', GIFTS9: 'PAYMENT	', amountg9: '		',  urlg9: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SANJAY GIFT (PALI)* भाइया आपका बकाया बैलेंस  *7409 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags9: 'ORDER	', amountb9: '		',  urlb9: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SANJAY GIFT (PALI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer10: '	KHUSHI GENERAL (PALI)	', toys10: 'TOYS:-	', amount10: '	2	',  url10: '	/2084377289testbysam/PALI/KHUSHI GENERAL (PALI).htm	', GIFTS10: 'PAYMENT	', amountg10: '		',  urlg10: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KHUSHI GENERAL (PALI)* भाइया आपका बकाया बैलेंस  *2 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags10: 'ORDER	', amountb10: '		',  urlb10: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KHUSHI GENERAL (PALI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	PANDARIYA', total: ' (	19238	)', 														
customer1: '	FIZZA GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/PANDARIYA/FIZZA GENERAL (PANDARIYA)  32.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *FIZZA GENERAL* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *FIZZA GENERAL* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	MARUTI GENERAL (PANDARIYA)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/PANDARIYA/MARUTI GENERAL (PANDARIYA)  178.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MARUTI GENERAL (PANDARIYA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MARUTI GENERAL (PANDARIYA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	MATESHWARI (PANDARIYA)	', toys3: 'TOYS:-	', amount3: '	20	',  url3: '	/2084377289testbysam/PANDARIYA/MATESHWARI .(PANDARIYA) 95.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MATESHWARI (PANDARIYA)* भाइया आपका बकाया बैलेंस  *20 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MATESHWARI (PANDARIYA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	OM SATIONARY (PANDARIYA)	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/PANDARIYA/OM SATIONARY (PANDARIYA).htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *OM SATIONARY (PANDARIYA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *OM SATIONARY (PANDARIYA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	GURUANAK GENERAL (PANDARIYA)	', toys5: 'TOYS:-	', amount5: '	14	',  url5: '	/2084377289testbysam/PANDARIYA/GURUNANAK GENERAL (PANDARIYA) 300.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GURUANAK GENERAL (PANDARIYA)* भाइया आपका बकाया बैलेंस  *14 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GURUANAK GENERAL (PANDARIYA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer6: '	ABHAY GENERAL (PANDARIYA)	', toys6: 'TOYS:-	', amount6: '	161	',  url6: '	/2084377289testbysam/PANDARIYA/ABHAY GENERAL (PANDARIYA) 242.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ABHAY GENERAL (PANDARIYA)* भाइया आपका बकाया बैलेंस  *161 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags6: 'ORDER	', amountb6: '		',  urlb6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ABHAY GENERAL (PANDARIYA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer7: '	SOUGAAT GIFT (PANDARIYA)	', toys7: 'TOYS:-	', amount7: '	19043	',  url7: '	/2084377289testbysam/PANDARIYA/SOUGAAT GIFT (PANDARIYA).htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SOUGAAT GIFT (PANDARIYA)* भाइया आपका बकाया बैलेंस  *19043 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags7: 'ORDER	', amountb7: '		',  urlb7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SOUGAAT GIFT (PANDARIYA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer8: '	PRATHNA GENERAL (PANDARIYA)	', toys8: 'TOYS:-	', amount8: '	0	',  url8: '	/2084377289testbysam/PANDARIYA/PRATHNA GENERAL (PANDARIYA).htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PRATHNA GENERAL (PANDARIYA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags8: 'ORDER	', amountb8: '		',  urlb8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PRATHNA GENERAL (PANDARIYA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer9: '	SHOE POINT (PANDARIYA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/PANDARIYA/SHOE POINT (PANDARIYA).htm	', GIFTS9: 'PAYMENT	', amountg9: '		',  urlg9: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHOE POINT (PANDARIYA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags9: 'ORDER	', amountb9: '		',  urlb9: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHOE POINT (PANDARIYA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer10: '	RAKHIKA GENERAL (PANDARIYA)	', toys10: 'TOYS:-	', amount10: '	0	',  url10: '	/2084377289testbysam/PANDARIYA/RADHIKA GENERAL (PANDARIYA).htm	', GIFTS10: 'PAYMENT	', amountg10: '		',  urlg10: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RAKHIKA GENERAL (PANDARIYA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags10: 'ORDER	', amountb10: '		',  urlb10: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RAKHIKA GENERAL (PANDARIYA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	PANDATARAI', total: ' (	17873	)', 														
customer1: '	ARJUN GENERAL (PANDATARAI)	', toys1: 'TOYS:-	', amount1: ' 	3	',  url1: '	/2084377289testbysam/PANDATARAI/ARJUN GENERAL (PANDATARAI) 181.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ARJUN GENERAL (PANDATARAI)* भाइया आपका बकाया बैलेंस  *3 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ARJUN GENERAL (PANDATARAI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	DURGA GENERAL (PANDATARAI)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/PANDATARAI/DURGA GENERAL (PANDATARAI) 274.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *DURGA GENERAL (PANDATARAI)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *DURGA GENERAL (PANDATARAI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	SATGURU	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/PANDATARAI/SATGURU GENERAL (PANDATARAI)  162.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SATGURU* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '	2246	',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SATGURU* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	VIDYA SUHAG	', toys4: 'TOYS:-	', amount4: ' 	4093	',  url4: '	/2084377289testbysam/PANDATARAI/VIDYA SUHAG (PANDATARAI) 147.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VIDYA SUHAG* भाइया आपका बकाया बैलेंस  *4093 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VIDYA SUHAG* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	PREETI GENERAL (PANDATARAI)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/PANDATARAI/PREETI GENERAL. (PANDATARAI) 112.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PREETI GENERAL (PANDATARAI)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PREETI GENERAL (PANDATARAI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer6: '	GANESH (PANDATARAI)	', toys6: 'TOYS:-	', amount6: '	12237	',  url6: '	/2084377289testbysam/PANDATARAI/GANESH GENERAL (PANDATARAI)  279.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GANESH (PANDATARAI)* भाइया आपका बकाया बैलेंस  *12237 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags6: 'ORDER	', amountb6: '		',  urlb6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GANESH (PANDATARAI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer7: '	PRACHI GENERAL (PANDATARAI)	', toys7: 'TOYS:-	', amount7: '	1540	',  url7: '	/2084377289testbysam/PANDATARAI/PRACHI GENERAL (PANDATARAI).htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PRACHI GENERAL (PANDATARAI)* भाइया आपका बकाया बैलेंस  *1540 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags7: 'ORDER	', amountb7: '		',  urlb7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PRACHI GENERAL (PANDATARAI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer8: '	KABIR GENERAL (PANDATARAI)	', toys8: 'TOYS:-	', amount8: '		',  url8: '		', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KABIR GENERAL (PANDATARAI)* भाइया आपका बकाया बैलेंस  * Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags8: 'ORDER	', amountb8: '		',  urlb8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KABIR GENERAL (PANDATARAI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
																	
{id: 1, name: '	PANTORA ', total: '(	17011	)', 														
customer1: '	KRISHNA  KAPDA (PANTORA)	', toys1: 'TOYS:-	', amount1: ' 	17011	',  url1: '	/2084377289testbysam/PANTORA/KRISHNA KAPDA DUKAN (PANTORA).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KRISHNA  KAPDA (PANTORA)* भाइया आपका बकाया बैलेंस  *17011 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KRISHNA  KAPDA (PANTORA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	ANIL SHRINGAR  (PANTORA)	', toys2: 'TOYS:-	', amount2: ' 	-1	',  url2: '	/2084377289testbysam/PANTORA/ANIL SHRINGAR (PANTORA).htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ANIL SHRINGAR  (PANTORA)* भाइया आपका बकाया बैलेंस  *-1 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ANIL SHRINGAR  (PANTORA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
																	
{id: 1, name: '	PATHARIYA ', total: '(	19776	)', 														
customer1: '	AKASH BOOK DEPO (PATHARIYA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/PATHARIYA/AKASH%20BOOK%20DEPO%20(PATHARIYA)%20116.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *AKASH BOOK DEPO (PATHARIYA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *AKASH BOOK DEPO (PATHARIYA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	HARNARAYAN	', toys2: 'TOYS:-	', amount2: '	1420	',  url2: '	/2084377289testbysam/PATHARIYA/HARNARAYAN%20(PATHARIYA)%20%20199.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *HARNARAYAN* भाइया आपका बकाया बैलेंस  *1420 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *HARNARAYAN* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	MUKESH GENERAL 	', toys3: 'TOYS:-	', amount3: '	1	',  url3: '	/2084377289testbysam/PATHARIYA/MUKESH%20GENERAL%20(PATHARIYA)%20%20163.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MUKESH GENERAL * भाइया आपका बकाया बैलेंस  *1 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MUKESH GENERAL * भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	OM SAI KARAN (PATHARIYA)	', toys4: 'TOYS:-	', amount4: ' 	2101	',  url4: '	/2084377289testbysam/PATHARIYA/OM%20SAI%20(KARAN)%20.(PATHARIYA)%20%202.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *OM SAI KARAN (PATHARIYA)* भाइया आपका बकाया बैलेंस  *2101 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *OM SAI KARAN (PATHARIYA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	SHIV GENERAL (PATHARIYA)	', toys5: 'TOYS:-	', amount5: '	7244	',  url5: '	/2084377289testbysam/PATHARIYA/SHIV GENERAL .(PATHARIYA) 118.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHIV GENERAL (PATHARIYA)* भाइया आपका बकाया बैलेंस  *7244 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHIV GENERAL (PATHARIYA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer6: '	SANTOSH GENERAL (PATHARIYA)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/PATHARIYA/SANTOSH%20PATHKAR.%20(PATHARIYA)%20192.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SANTOSH GENERAL (PATHARIYA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags6: 'ORDER	', amountb6: '		',  urlb6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SANTOSH GENERAL (PATHARIYA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer7: '	PREETAM GENERAL (PATHARIYA)	', toys7: 'TOYS:-	', amount7: '	9000	',  url7: '	/2084377289testbysam/PATHARIYA/PREETAM%20(PATHARIYA)%20148.htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PREETAM GENERAL (PATHARIYA)* भाइया आपका बकाया बैलेंस  *9000 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags7: 'ORDER	', amountb7: '		',  urlb7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PREETAM GENERAL (PATHARIYA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer8: '	OM SUHAG (PATHARIYA)	', toys8: 'TOYS:-	', amount8: '	10	',  url8: '	/2084377289testbysam/PATHARIYA/OM%20SUHAG%20(PATHARIYA)%20%20100.htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *OM SUHAG (PATHARIYA)* भाइया आपका बकाया बैलेंस  *10 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags8: 'ORDER	', amountb8: '		',  urlb8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *OM SUHAG (PATHARIYA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer9: '	LAXMI GENERAL (PATHARIYA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/PATHARIYA/LAXMI%20GENERAL%20(PATHARIYA).htm	', GIFTS9: 'PAYMENT	', amountg9: '		',  urlg9: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *LAXMI GENERAL (PATHARIYA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags9: 'ORDER	', amountb9: '		',  urlb9: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *LAXMI GENERAL (PATHARIYA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer10: '	SONI HARDWARE (PATHARIYA)	', toys10: 'TOYS:-	', amount10: '	0	',  url10: '	/2084377289testbysam/PATHARIYA/SONI HARDWARE (PATHARIYA).htm	', GIFTS10: 'PAYMENT	', amountg10: '		',  urlg10: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SONI HARDWARE (PATHARIYA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags10: 'ORDER	', amountb10: '		',  urlb10: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SONI HARDWARE (PATHARIYA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer11: '	PANDEY KIRANA (PATHARIYA)	', toys11: 'TOYS:-	', amount11: '	10	',  url11: '	/2084377289testbysam/PATHARIYA/PANDAY  KIRANA (PATHARIYA).htm	', GIFTS11: 'PAYMENT	', amountg11: '		',  urlg11: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PANDEY KIRANA (PATHARIYA)* भाइया आपका बकाया बैलेंस  *10 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags11: 'ORDER	', amountb11: '		',  urlb11: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PANDEY KIRANA (PATHARIYA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	PENDRA', total: ' (	106415	)', 														
customer1: '	SURYA GARMENTS (PENDRA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/PENDRA/SURYA GARMENTS (PENDRA).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SURYA GARMENTS (PENDRA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SURYA GARMENTS (PENDRA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	ARADHYA TRADERS	', toys2: 'TOYS:-	', amount2: '	18784	',  url2: '	/2084377289testbysam/PENDRA/ARADHYA GENERAL (PENDRA) 124.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ARADHYA TRADERS* भाइया आपका बकाया बैलेंस  *18784 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ARADHYA TRADERS* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	DECO POINT 	', toys3: 'TOYS:-	', amount3: '	1028	',  url3: '	/2084377289testbysam/PENDRA/DECO POINT (PENDRA) 33.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *DECO POINT * भाइया आपका बकाया बैलेंस  *1028 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *DECO POINT * भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	PANDEY GENERAL	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/PENDRA/PANDEY GENERAL. (PENDRA)  140.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PANDEY GENERAL* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PANDEY GENERAL* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	R.T WOMENS	', toys5: 'TOYS:-	', amount5: '	5353	',  url5: '	/2084377289testbysam/PENDRA/R.T PENDRA (PENDRA) 88.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *R.T WOMENS* भाइया आपका बकाया बैलेंस  *5353 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *R.T WOMENS* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer6: '	SADHANA PHOTO STUDIO	', toys6: 'TOYS:-	', amount6: '	14809	',  url6: '	/2084377289testbysam/PENDRA/SADHNA PHOTO STUDIO (PENDRA) 244.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SADHANA PHOTO STUDIO* भाइया आपका बकाया बैलेंस  *14809 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags6: 'ORDER	', amountb6: '	1140	',  urlb6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SADHANA PHOTO STUDIO* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer7: '	TIME CORNER (PENDRA)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/PENDRA/TIME CORNER. (PENDRA).htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *TIME CORNER (PENDRA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags7: 'ORDER	', amountb7: '		',  urlb7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *TIME CORNER (PENDRA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer8: '	SAI MAHASALE (PENDRA)	', toys8: 'TOYS:-	', amount8: '	28811	',  url8: '	/2084377289testbysam/PENDRA/SAI MAHASALE. (PENDRA) 176.htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SAI MAHASALE (PENDRA)* भाइया आपका बकाया बैलेंस  *28811 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags8: 'ORDER	', amountb8: '		',  urlb8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SAI MAHASALE (PENDRA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer9: '	SAI SAKTI (PENDRA)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/PENDRA/SAI SAKTI. (PENDRA) 186.htm	', GIFTS9: 'PAYMENT	', amountg9: '		',  urlg9: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SAI SAKTI (PENDRA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags9: 'ORDER	', amountb9: '		',  urlb9: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SAI SAKTI (PENDRA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer10: '	POOJA JWELLERY (PENDRA)	', toys10: 'TOYS:-	', amount10: '	0	',  url10: '	/2084377289testbysam/PENDRA/POOJA JWELLERY. (PENDRA)  190.htm	', GIFTS10: 'PAYMENT	', amountg10: '		',  urlg10: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *POOJA JWELLERY (PENDRA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags10: 'ORDER	', amountb10: '		',  urlb10: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *POOJA JWELLERY (PENDRA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer11: '	MAA SHARDA GIFT DEEPANSHU (PENDRA)	', toys11: 'TOYS:-	', amount11: '	4980	',  url11: '	/2084377289testbysam/PENDRA/MAA SHARDA GIFT DEEPANSHU. (PENDRA).htm	', GIFTS11: 'PAYMENT	', amountg11: '		',  urlg11: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAA SHARDA GIFT DEEPANSHU (PENDRA)* भाइया आपका बकाया बैलेंस  *4980 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags11: 'ORDER	', amountb11: '		',  urlb11: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAA SHARDA GIFT DEEPANSHU (PENDRA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer12: '	UPHAR GALLERY (PENDRA)	', toys12: 'TOYS:-	', amount12: '	0	',  url12: '	/2084377289testbysam/PENDRA/UPHAR GALLERY. (PENDRA) 198.htm	', GIFTS12: 'PAYMENT	', amountg12: '		',  urlg12: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *UPHAR GALLERY (PENDRA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags12: 'ORDER	', amountb12: '	1015	',  urlb12: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *UPHAR GALLERY (PENDRA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer13: '	GUPTA ENTERPRISES (PENDRA)	', toys13: 'TOYS:-	', amount13: '	0	',  url13: '	/2084377289testbysam/PENDRA/GUPTA ENTERPRISES. (PENDRA) 200.htm	', GIFTS13: 'PAYMENT	', amountg13: '		',  urlg13: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GUPTA ENTERPRISES (PENDRA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags13: 'ORDER	', amountb13: '		',  urlb13: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GUPTA ENTERPRISES (PENDRA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer14: '	SANJAY GENERAL (PENDRA)	', toys14: 'TOYS:-	', amount14: '	32605	',  url14: '	/2084377289testbysam/PENDRA/SANJAY GENERAL. (PENDRA).htm	', GIFTS14: 'PAYMENT	', amountg14: '		',  urlg14: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SANJAY GENERAL (PENDRA)* भाइया आपका बकाया बैलेंस  *32605 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags14: 'ORDER	', amountb14: '		',  urlb14: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SANJAY GENERAL (PENDRA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer15: '	GANESH GENERAL (PENDRA)	', toys15: 'TOYS:-	', amount15: '		',  url15: '		', GIFTS15: 'PAYMENT	', amountg15: '		',  urlg15: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GANESH GENERAL (PENDRA)* भाइया आपका बकाया बैलेंस  * Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags15: 'ORDER	', amountb15: '	590	',  urlb15: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GANESH GENERAL (PENDRA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer16: '	SONA GARMENTS (PENDRA)	', toys16: 'TOYS:-	', amount16: '	45	',  url16: '	/2084377289testbysam/PENDRA/SONA GARMENTS (PENDRA).htm	', GIFTS16: 'PAYMENT	', amountg16: '		',  urlg16: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SONA GARMENTS (PENDRA)* भाइया आपका बकाया बैलेंस  *45 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags16: 'ORDER	', amountb16: '		',  urlb16: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SONA GARMENTS (PENDRA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer17: '	DIPTI GENERAL STORE (PENDRA)	', toys17: 'TOYS:-	', amount17: '	0	',  url17: '	/2084377289testbysam/PENDRA/DIPTI GENERAL STORE (PENDRA).htm	', GIFTS17: 'PAYMENT	', amountg17: '		',  urlg17: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *DIPTI GENERAL STORE (PENDRA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags17: 'ORDER	', amountb17: '		',  urlb17: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *DIPTI GENERAL STORE (PENDRA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer18: '	JAI DURGA GARMENTS (PENDRA	', toys18: 'TOYS:-	', amount18: '	220	',  url17: '	/2084377289testbysam/PENDRA/JAI DURGA GARMENTS (PENDRA).htm	', GIFTS17: 'PAYMENT	', amountg17: '		',  urlg17: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *JAI DURGA GARMENTS (PENDRA* भाइया आपका बकाया बैलेंस  *220 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags17: 'ORDER	', amountb17: '		',  urlb17: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *JAI DURGA GARMENTS (PENDRA* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer19: '	VINAYAK MENSWEAR (PENDRA)	', toys19: 'TOYS:-	', amount19: '	0	',  url19: '	/2084377289testbysam/PENDRA/VINAYAK MENS (PENDRA).htm	', GIFTS19: 'PAYMENT	', amountg19: '		',  urlg19: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VINAYAK MENSWEAR (PENDRA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags19: 'ORDER	', amountb19: '		',  urlb19: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VINAYAK MENSWEAR (PENDRA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	PODI ', total: '(	0	)', 														
customer1: '	SHIV SAHU (PODI)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/PODI/SHIV SAHU (PODI)  127.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHIV SAHU (PODI)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHIV SAHU (PODI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	RAHOD', total: ' (	-1	)', 														
customer1: '	CHAAVI GENERAL 	', toys1: 'TOYS:-	', amount1: ' 	-1	',  url1: '	/2084377289testbysam/RAHOD/CHAVI (RAHOD) 12.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *CHAAVI GENERAL * भाइया आपका बकाया बैलेंस  *-1 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *CHAAVI GENERAL * भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
																	
{id: 1, name: '	RAIGARH', total: ' (	16287	)', 														
customer1: '	THE  BIG  BASKET (RAIGARH)	', toys1: 'TOYS:-	', amount1: ' 	16287	',  url1: '	/2084377289testbysam/RAIGARH/THE  BIG  BASKET (RAIGARH).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *THE  BIG  BASKET (RAIGARH)* भाइया आपका बकाया बैलेंस  *16287 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *THE  BIG  BASKET (RAIGARH)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
																	
{id: 1, name: '	RATANPUR ', total: '(	649	)', 														
customer1: '	 GOLU RATANPUR	', toys1: 'TOYS:-	', amount1: ' 	360	',  url1: '	/2084377289testbysam/RATANPUR/GOLU (RATANPUR)  196.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! * GOLU RATANPUR* भाइया आपका बकाया बैलेंस  *360 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! * GOLU RATANPUR* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	RAJA YADAV	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/RATANPUR/RAJA YADAV (RATANPUR) 146.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RAJA YADAV* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '	5247	',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RAJA YADAV* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	USHA CHAUHAN (RATANPUR)	', toys3: 'TOYS:-	', amount3: '	289	',  url3: '	/2084377289testbysam/RATANPUR/USHA CHAUHAN (RATANPUR).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *USHA CHAUHAN (RATANPUR)* भाइया आपका बकाया बैलेंस  *289 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '	4151	',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *USHA CHAUHAN (RATANPUR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	RIYA GENERAL	', toys4: 'TOYS:-	', amount4: ' 	0	',  url4: '	/2084377289testbysam/RATANPUR/RIYA. (RATANPUR)  253.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RIYA GENERAL* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RIYA GENERAL* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	SAKRI', total: '  (	150	)', 														
customer1: '	GUPTA GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/SAKRI/GUPTA (SAKRI)  39.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GUPTA GENERAL* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '	642	',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GUPTA GENERAL* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	KAUSHIK GENERAL (SAKRI)	', toys2: 'TOYS:-	', amount2: '	189	',  url2: '	/2084377289testbysam/SAKRI/KAUSHIK GENERAL. (SAKRI) 261.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KAUSHIK GENERAL (SAKRI)* भाइया आपका बकाया बैलेंस  *189 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KAUSHIK GENERAL (SAKRI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	SHRI RAM (SAKRI)	', toys3: 'TOYS:-	', amount3: '	-39	',  url3: '	/2084377289testbysam/SAKRI/SHRIRAM GENERAL (SAKRI)  20.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHRI RAM (SAKRI)* भाइया आपका बकाया बैलेंस  *-39 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHRI RAM (SAKRI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	SAKTI ', total: '(	7854	)', 														
customer1: '	PAPPI GUPTA (SAKTI)	', toys1: 'TOYS:-	', amount1: ' 	4	',  url1: '	/2084377289testbysam/SAKTI/PAPPI  GUPTA  (SAKTI).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PAPPI GUPTA (SAKTI)* भाइया आपका बकाया बैलेंस  *4 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PAPPI GUPTA (SAKTI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	DIWA FANCY (SAKTI)	', toys2: 'TOYS:-	', amount2: '	7850	',  url2: '	/2084377289testbysam/SAKTI/DIVA FANCY (SAKTI)  14.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *DIWA FANCY (SAKTI)* भाइया आपका बकाया बैलेंस  *7850 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *DIWA FANCY (SAKTI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	VIKAS (SAKTI)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/SAKTI/VIKAS (SAKTI) 296.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VIKAS (SAKTI)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VIKAS (SAKTI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	ANMOL GIFT (SAKTI)	', toys4: 'TOYS:-	', amount4: '	0	',  url4: '	/2084377289testbysam/SAKTI/ANMOL (SAKTI)  16.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ANMOL GIFT (SAKTI)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ANMOL GIFT (SAKTI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	DULHAN SAARE (SAKTI)  	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/SAKTI/DULHA SAARE (SAKTI).htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *DULHAN SAARE (SAKTI)  * भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *DULHAN SAARE (SAKTI)  * भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer6: '	GIFT PALACE (SAKTI)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/SAKTI/GIFT PALACE (SAKTI).htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GIFT PALACE (SAKTI)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags6: 'ORDER	', amountb6: '		',  urlb6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GIFT PALACE (SAKTI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer7: '	KRISHNA POOJA BHANDAR (SAKTI)	', toys7: 'TOYS:-	', amount7: '	31537	',  url7: '	/2084377289testbysam/SAKTI/KRISHNA POOJA BHANDAR (SAKTI).htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KRISHNA POOJA BHANDAR (SAKTI)* भाइया आपका बकाया बैलेंस  *31537 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags7: 'ORDER	', amountb7: '		',  urlb7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KRISHNA POOJA BHANDAR (SAKTI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	SARAGAON ', total: '(	6284	)', 														
customer1: '	GOVIND KESARWANI	', toys1: 'TOYS:-	', amount1: ' 	6284	',  url1: '	/2084377289testbysam/SARAGAON/GOVIND KESARWANI (SARAGAON) 138.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GOVIND KESARWANI* भाइया आपका बकाया बैलेंस  *6284 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *GOVIND KESARWANI* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	SARANGARH ', total: '(	25983	)', 														
customer1: '	VIKAS  TEXTILE (SARANGARH)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/SARANGARH/VIKAS TEXTILE (SARANGARH).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VIKAS  TEXTILE (SARANGARH)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VIKAS  TEXTILE (SARANGARH)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	ASHOK BOOK DEPO	', toys2: 'TOYS:-	', amount2: '	-742	',  url2: '	/2084377289testbysam/SARANGARH/ASHOK%20BOOK%20DEPO%20(SARANGARH)%209.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ASHOK BOOK DEPO* भाइया आपका बकाया बैलेंस  *-742 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ASHOK BOOK DEPO* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	KAMAL GENERAL (SARANGARH)	', toys3: 'TOYS:-	', amount3: '	19810	',  url3: '	/2084377289testbysam/SARANGARH/KAMAL (SARANGARH) 22_files.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KAMAL GENERAL (SARANGARH)* भाइया आपका बकाया बैलेंस  *19810 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KAMAL GENERAL (SARANGARH)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	SANJAY STORE (SARANGARH)	', toys4: 'TOYS:-	', amount4: '	71	',  url4: '	/2084377289testbysam/SARANGARH/SANJAY STORE (SARANGARH)  44.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SANJAY STORE (SARANGARH)* भाइया आपका बकाया बैलेंस  *71 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SANJAY STORE (SARANGARH)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	PRIYANKA GENERAL (SARANGARH)	', toys5: 'TOYS:-	', amount5: '	0	',  url5: '	/2084377289testbysam/SARANGARH/PRIYANKA (SARANGARH) 212.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PRIYANKA GENERAL (SARANGARH)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PRIYANKA GENERAL (SARANGARH)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer6: '	SANTOSH VASTRALAY (SARANGARH)	', toys6: 'TOYS:-	', amount6: '	90	',  url6: '	/2084377289testbysam/SARANGARH/SANTOSH VASTRALAY (SARANGARH) 220.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SANTOSH VASTRALAY (SARANGARH)* भाइया आपका बकाया बैलेंस  *90 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags6: 'ORDER	', amountb6: '		',  urlb6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SANTOSH VASTRALAY (SARANGARH)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer7: '	NEW CLOTH STORE (SARANGARH)	', toys7: 'TOYS:-	', amount7: '	0	',  url7: '	/2084377289testbysam/SARANGARH/NEW CLOTH (SARANGARH)  256.htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NEW CLOTH STORE (SARANGARH)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags7: 'ORDER	', amountb7: '		',  urlb7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NEW CLOTH STORE (SARANGARH)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer8: '	MAHALAXMI (SARANGARH)	', toys8: 'TOYS:-	', amount8: '	6754	',  url8: '	/2084377289testbysam/SARANGARH/MAHALAXMI  GENERAL (SARANGARH).htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAHALAXMI (SARANGARH)* भाइया आपका बकाया बैलेंस  *6754 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags8: 'ORDER	', amountb8: '		',  urlb8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAHALAXMI (SARANGARH)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer9: '	MUKESH VASTRALAY (SARANGARH)	', toys9: 'TOYS:-	', amount9: '	0	',  url9: '	/2084377289testbysam/SARANGARH/MUKESH VASTRALAY (SARANGARH).htm	', GIFTS9: 'PAYMENT	', amountg9: '		',  urlg9: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MUKESH VASTRALAY (SARANGARH)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags9: 'ORDER	', amountb9: '		',  urlb9: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MUKESH VASTRALAY (SARANGARH)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer10: '	NIKHIL SUHAG (SARANGARH)	', toys10: 'TOYS:-	', amount10: '	72	',  url10: '	/2084377289testbysam/SARANGARH/NIKHIL FANCY (SARANGARH).htm	', GIFTS10: 'PAYMENT	', amountg10: '		',  urlg10: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NIKHIL SUHAG (SARANGARH)* भाइया आपका बकाया बैलेंस  *72 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags10: 'ORDER	', amountb10: '		',  urlb10: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NIKHIL SUHAG (SARANGARH)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	SARGAON', total: ' (	1747	)', 														
customer1: '	SUNITA GENERAL	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/SARGAON/SUNITA%20(SARGAON)%20%2047.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SUNITA GENERAL* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SUNITA GENERAL* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	RAJU FANCY STORE (SARGAON)	', toys2: 'TOYS:-	', amount2: '	-1	',  url2: '	/2084377289testbysam/SARGAON/RAJU%20(SARGAON)%2042.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RAJU FANCY STORE (SARGAON)* भाइया आपका बकाया बैलेंस  *-1 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '	4171	',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RAJU FANCY STORE (SARGAON)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	CHAYA GENERAL (SARGAON)	', toys3: 'TOYS:-	', amount3: '	1748	',  url3: '	/2084377289testbysam/SARGAON/CHAYA (SARGAON).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *CHAYA GENERAL (SARGAON)* भाइया आपका बकाया बैलेंस  *1748 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *CHAYA GENERAL (SARGAON)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	SHIVAM (SARGAON)	', toys4: 'TOYS:-	', amount4: '	0	',  url4: '	/2084377289testbysam/SARGAON/SHIVAM SARGAON.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHIVAM (SARGAON)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHIVAM (SARGAON)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	SARSIWA ', total: '(	3502	)', 														
customer1: '	HEMA FANCY	', toys1: 'TOYS:-	', amount1: ' 	2542	',  url1: '	/2084377289testbysam/SARSIWA/HEMA FANCY (SARSIWA) 191.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *HEMA FANCY* भाइया आपका बकाया बैलेंस  *2542 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *HEMA FANCY* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	OM SAI SARSIWA	', toys2: 'TOYS:-	', amount2: '	960	',  url2: '	/2084377289testbysam/SARSIWA/OM SAI (SARSIWA) 6.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *OM SAI SARSIWA* भाइया आपका बकाया बैलेंस  *960 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '	1146	',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *OM SAI SARSIWA* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	SHRIYA SHRINGAR (SARSIWA)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/SARSIWA/SHRIYA SHRINGAR (SARSIWA).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHRIYA SHRINGAR (SARSIWA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHRIYA SHRINGAR (SARSIWA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	CHANDRAHASHNI (SARSIWA)	', toys4: 'TOYS:-	', amount4: '	0	',  url4: '	/2084377289testbysam/SARSIWA/CHANDRAHASNI GENERAL (SARSIWA).htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *CHANDRAHASHNI (SARSIWA)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *CHANDRAHASHNI (SARSIWA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	SWASTIK GENRAL (SARSIWA)	', toys5: 'TOYS:-	', amount5: '	90	',  url5: '	/2084377289testbysam/SARSIWA/SWASTIK%20GENERAL%20(SARSIWA).htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SWASTIK GENRAL (SARSIWA)* भाइया आपका बकाया बैलेंस  *90 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SWASTIK GENRAL (SARSIWA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer6: '	LAXMI FANCY (SARSIWA)	', toys6: 'TOYS:-	', amount6: '	5357	',  url6: '	/2084377289testbysam/SARSIWA/LAXMI FANCY (SARSIWA).htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *LAXMI FANCY (SARSIWA)* भाइया आपका बकाया बैलेंस  *5357 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags6: 'ORDER	', amountb6: '		',  urlb6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *LAXMI FANCY (SARSIWA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
																	
{id: 1, name: '	SENDRI', total: ' (	0	)', 														
customer1: '	SHIVAM GENERAL	', toys1: 'TOYS:-	', amount1: ' 	 	',  url1: '	/2084377289testbysam/SENDRI/SHIVAM (SENDRI) 131.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHIVAM GENERAL* भाइया आपका बकाया बैलेंस  *  Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHIVAM GENERAL* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	SHIVNI ', total: '(	13120	)', 														
customer1: '	KHAGESHWAR GENERAL	', toys1: 'TOYS:-	', amount1: ' 	13120	',  url1: '	/2084377289testbysam/SHIVNI/KHAGESHWAR (SHIVNI) 269.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KHAGESHWAR GENERAL* भाइया आपका बकाया बैलेंस  *13120 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KHAGESHWAR GENERAL* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	JAI AMBEL (SHIVNI)	', toys2: 'TOYS:-	', amount2: '	0	',  url2: '	/2084377289testbysam/SHIVNI/JAI AMBE (SHIVNI) 208.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *JAI AMBEL (SHIVNI)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *JAI AMBEL (SHIVNI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	NEW MAHAMAYA GENERAL (SHIVNI)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/SHIVNI/NEW MAHAMAYA GENERAL 2 (SHIVNI) (NEW 9).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NEW MAHAMAYA GENERAL (SHIVNI)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NEW MAHAMAYA GENERAL (SHIVNI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	SHIVRINARAYN', total: ' (	21807	)', 														
customer1: '	MAHI SHRINGAR (SHIVRIN)	', toys1: 'TOYS:-	', amount1: ' 	8379	',  url1: '	/2084377289testbysam/SHIVRINARAYAN/MAHI SHRINGAR (SHIVRINARAYN).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAHI SHRINGAR (SHIVRIN)* भाइया आपका बकाया बैलेंस  *8379 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAHI SHRINGAR (SHIVRIN)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	RUPESH  GENERAL	', toys2: 'TOYS:-	', amount2: '	12394	',  url2: '	/2084377289testbysam/SHIVRINARAYAN/RUPESH (SHIVRINARAYAN)  64.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RUPESH  GENERAL* भाइया आपका बकाया बैलेंस  *12394 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RUPESH  GENERAL* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	ATUL GENERAL	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/SHIVRINARAYATUL (SHIVRINARAYAN) 254.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ATUL GENERAL* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *ATUL GENERAL* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	NARAYANI COLLECTION (SHIVRIN)	', toys4: 'TOYS:-	', amount4: '	4	',  url4: '	/2084377289testbysam/SHIVRINARAYAN/NARAYANI (SHIVRINARAYAN) 136.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NARAYANI COLLECTION (SHIVRIN)* भाइया आपका बकाया बैलेंस  *4 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NARAYANI COLLECTION (SHIVRIN)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	LAXMI VASTRALAY (SHIVRI)	', toys5: 'TOYS:-	', amount5: '	1030	',  url5: '	/2084377289testbysam/SHIVRINARAYAN/LAXMI VASTRALAY (SHIVRINARAYAN).htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *LAXMI VASTRALAY (SHIVRI)* भाइया आपका बकाया बैलेंस  *1030 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *LAXMI VASTRALAY (SHIVRI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer6: '	VIKAS GENERAL (SHIVRI)	', toys6: 'TOYS:-	', amount6: '	0	',  url6: '	/2084377289testbysam/SHIVRINARAYAN/VIKAS GENERAL (SHIVRINARAYAN).htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VIKAS GENERAL (SHIVRI)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags6: 'ORDER	', amountb6: '		',  urlb6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VIKAS GENERAL (SHIVRI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
																	
{id: 1, name: '	SILDHA', total: ' (	0	)', 														
customer1: '	SATYA NARAYAN (SILDHA)	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/SILDHA/SATYANARAYN (SILDHA).htm										https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SATYA NARAYAN (SILDHA)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
																	
																	
{id: 1, name: '	SIPAT', total: ' (	12824	)', 														
customer1: '	DEEPAK GENERAL (SIPAT)	', toys1: 'TOYS:-	', amount1: ' 	1528	',  url1: '	/2084377289testbysam/SIPAT/DEEPAK%20(SIPAT)%2041.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *DEEPAK GENERAL (SIPAT)* भाइया आपका बकाया बैलेंस  *1528 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *DEEPAK GENERAL (SIPAT)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	SITARAM  (SIPAT)	', toys2: 'TOYS:-	', amount2: '	11286	',  url2: '	/2084377289testbysam/SIPAT/SITARAM%20(SIPAT)%20%2094.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SITARAM  (SIPAT)* भाइया आपका बकाया बैलेंस  *11286 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SITARAM  (SIPAT)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	SWARMANGLA GIFT HOUSE (SIPAT)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/SIPAT/SWARMANGLA%20(SIPAT).htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SWARMANGLA GIFT HOUSE (SIPAT)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SWARMANGLA GIFT HOUSE (SIPAT)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	SWARMANGLA PLASTIC (SIPAT)	', toys4: 'TOYS:-	', amount4: '	10	',  url4: '	/2084377289testbysam/SIPAT/SWARMANGLA%20PLASTIC%20(SIPAT)%20270.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SWARMANGLA PLASTIC (SIPAT)* भाइया आपका बकाया बैलेंस  *10 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SWARMANGLA PLASTIC (SIPAT)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	VIKAS SIPAT	', toys5: 'TOYS:-	', amount5: '	4002	',  url5: '	/2084377289testbysam/SIPAT/VIKAS  (SIPAT).htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VIKAS SIPAT* भाइया आपका बकाया बैलेंस  *4002 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VIKAS SIPAT* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	SIRGITI ', total: '(	2243	)', 														
customer1: '	BABY SUHAG	', toys1: 'TOYS:-	', amount1: ' 	2242	',  url1: '	/2084377289testbysam/SIRGITI/BABY SUHAG (SIRGITTI) 21.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *BABY SUHAG* भाइया आपका बकाया बैलेंस  *2242 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *BABY SUHAG* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	KIRAN SIRGITI	', toys2: 'TOYS:-	', amount2: '		',  url2: '	<b><br>TOYS -	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KIRAN SIRGITI* भाइया आपका बकाया बैलेंस  * Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '	11861	',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KIRAN SIRGITI* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	MAA KALI MUSIC (SIRGITI)	', toys3: 'TOYS:-	', amount3: '	1	',  url3: '	/2084377289testbysam/SIRGITI/MAA KALI MUSIC CENTER (SIRGITTI) 210.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAA KALI MUSIC (SIRGITI)* भाइया आपका बकाया बैलेंस  *1 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAA KALI MUSIC (SIRGITI)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	TAKHATPUR', total: ' (	55739	)', 														
customer1: '	KISHAN (BELPAN)	', toys1: 'TOYS:-	', amount1: ' 	10445	',  url1: '	/2084377289testbysam/TAKHATPUR/KISHAN%20(BELPAN).htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KISHAN (BELPAN)* भाइया आपका बकाया बैलेंस  *10445 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '		',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *KISHAN (BELPAN)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer2: '	MAYUR GENERAL	', toys2: 'TOYS:-	', amount2: '	20988	',  url2: '	/2084377289testbysam/TAKHATPUR/MAYUR%20GENERAL%20(TAKHATPUR)%20276.htm	', GIFTS2: 'PAYMENT	', amountg2: '		',  urlg2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAYUR GENERAL* भाइया आपका बकाया बैलेंस  *20988 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags2: 'ORDER	', amountb2: '		',  urlb2: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MAYUR GENERAL* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer3: '	MARUTI GENERAL (TAKHATPUR)	', toys3: 'TOYS:-	', amount3: '	0	',  url3: '	/2084377289testbysam/TAKHATPUR/MARUTI%20(TAKAHTPUR)%2067.htm	', GIFTS3: 'PAYMENT	', amountg3: '		',  urlg3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MARUTI GENERAL (TAKHATPUR)* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags3: 'ORDER	', amountb3: '		',  urlb3: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *MARUTI GENERAL (TAKHATPUR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer4: '	VIJAY STORE (TAKHATPUR)	', toys4: 'TOYS:-	', amount4: '	7000	',  url4: '	/2084377289testbysam/TAKHATPUR/VIJAY%20STORE%20(TAKHATPUR)%20-%20299.htm	', GIFTS4: 'PAYMENT	', amountg4: '		',  urlg4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VIJAY STORE (TAKHATPUR)* भाइया आपका बकाया बैलेंस  *7000 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags4: 'ORDER	', amountb4: '		',  urlb4: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *VIJAY STORE (TAKHATPUR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer5: '	NAWAZ GENERAL	', toys5: 'TOYS:-	', amount5: '	7278	',  url5: '	/2084377289testbysam/TAKHATPUR/NAWAZ%20%20BHAI%20(TAKAHTPUR)%2075.htm	', GIFTS5: 'PAYMENT	', amountg5: '		',  urlg5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NAWAZ GENERAL* भाइया आपका बकाया बैलेंस  *7278 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags5: 'ORDER	', amountb5: '		',  urlb5: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *NAWAZ GENERAL* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer6: '	RAJESH GENERAL	', toys6: 'TOYS:-	', amount6: '	4026	',  url6: '	/2084377289testbysam/TAKHATPUR/RAJESH%20GENERAL%20(TAKAHTPUR)%20259.htm	', GIFTS6: 'PAYMENT	', amountg6: '		',  urlg6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RAJESH GENERAL* भाइया आपका बकाया बैलेंस  *4026 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags6: 'ORDER	', amountb6: '		',  urlb6: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *RAJESH GENERAL* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer7: '	BHARAT BAG HOUSE	', toys7: 'TOYS:-	', amount7: '	6002	',  url7: '	/2084377289testbysam/TAKHATPUR/BHARAT%20BAG%20HOUSE%20(TAKHATPUR)%20194.htm	', GIFTS7: 'PAYMENT	', amountg7: '		',  urlg7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *BHARAT BAG HOUSE* भाइया आपका बकाया बैलेंस  *6002 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags7: 'ORDER	', amountb7: '		',  urlb7: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *BHARAT BAG HOUSE* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
customer8: '	SHREE SHRINGARIKA (TAKHATPUR)	', toys8: 'TOYS:-	', amount8: '	2514	',  url8: '	/2084377289testbysam/TAKHATPUR/TESTING NEW DETAILS.htm	', GIFTS8: 'PAYMENT	', amountg8: '		',  urlg8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHREE SHRINGARIKA (TAKHATPUR)* भाइया आपका बकाया बैलेंस  *2514 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags8: 'ORDER	', amountb8: '		',  urlb8: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHREE SHRINGARIKA (TAKHATPUR)* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	TAPKARA', total: ' (	0	)', 														
customer1: '	 POOJA TAPKARA	', toys1: 'TOYS:-	', amount1: ' 	0	',  url1: '	/2084377289testbysam/TAPKARA/POOJA (TAPKARA) 287.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! * POOJA TAPKARA* भाइया आपका बकाया बैलेंस  *0 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '	10108	',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! * POOJA TAPKARA* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	UDAIPUR ', total: '(	18665	)', 														
customer1: '	PRIYA UDAIPUR	', toys1: 'TOYS:-	', amount1: ' 	18665	',  url1: '	/2084377289testbysam/UDAIPUR/PRIYA  (UDAIPUR) 91.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PRIYA UDAIPUR* भाइया आपका बकाया बैलेंस  *18665 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '	20437	',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *PRIYA UDAIPUR* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	URGA', total: ' (	9742	)', 														
customer1: '	SHUSHMITA URGA	', toys1: 'TOYS:-	', amount1: ' 	9742	',  url1: '	/2084377289testbysam/URGA/SUSHMITA%20(URGA)%20125.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHUSHMITA URGA* भाइया आपका बकाया बैलेंस  *9742 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '	12714	',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SHUSHMITA URGA* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	USLAPUR', total: ' (	0	)', 														
customer1: '	SAI PROVISION	', toys1: 'TOYS:-	', amount1: ' 		',  url1: '		', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SAI PROVISION* भाइया आपका बकाया बैलेंस  * Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '	3089	',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SAI PROVISION* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	},
{id: 1, name: '	VENKATNAGAR', total: ' (	16	)', 														
customer1: '	SANTOSH GENERAL	', toys1: 'TOYS:-	', amount1: ' 	16	',  url1: '	/2084377289testbysam/VENKATNAGAR/SANTOSH (VENKATNAGAR) 113.htm	', GIFTS1: 'PAYMENT	', amountg1: '		',  urlg1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SANTOSH GENERAL* भाइया आपका बकाया बैलेंस  *16 Rs.*  है.. कृपया कुछ अमाउंट ऑनलाइन ट्रांसफर करे. धन्यवाद ! 	', bags1: 'ORDER	', amountb1: '	0	',  urlb1: '	https://api.whatsapp.com/send?phone= &text=नमस्कार ! *SANTOSH GENERAL* भाइया आज काफी नई वैरायटी अपडेट हुई है आर्डर देने के लिए निचे लिंक पर क्लिक करे.  http://bit.ly/hindustantoys	',
																	
																	},
																	
																	
																	
  ];																	
  																	
  return factory;																	
}]);																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
																	
