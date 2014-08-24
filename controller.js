var app = angular.module("search", ['ngRoute']);

app.factory('myService', function($http) {
  var promise;
  var myService = {
    async: function() {
      if ( !promise ) {
      	// promise = "This has been made using AngularJs";
        promise = $http.get('index.html').then(function (response) {
          
          return "This has been made using AngularJs";
        });
      }
      return promise;
    }
  };
  return myService;
});

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: 'about.html',
        controller: 'AboutController'
    })
      ;
}]);

app.controller('AboutController',function ($scope) {
	$scope.message = "This app is made by Kshitij Awadhiya. Contact him at kawadhiya21@gmail.com."
});

app.filter('searchFor', function(){
	return function(arr, searchString, Slocation){
		if(!searchString){
			return null;
		}
		var result = [];

		searchString = searchString.toLowerCase();
		angular.forEach(arr, function(item){
			console.log(item);
			console.log(Slocation);
			if(item.title.toLowerCase().indexOf(searchString) !== -1 && item.location == Slocation.locate){
				result.push(item);
			}
		});
		return result;
	};
});

function SearchController(myService,$scope){

	$scope.locations = [
		{
			locate : 'Banglore'
		},
		{
			locate : 'Chennai'
		},
		{
			locate : 'Hyderabad'
		}
	];

	$scope.tech = function () {
		var k = myService.async().then(function (d) {
			alert(d);
		})
		
	}

	$scope.hotels = [
		{
			url: 'http://www.makemytrip.com/hotels/davanam_sarovar_portico_suites-details-bangalore.html',
			title: 'Davanam Sarovar Portico Suites',
			image: 'http://images1.makemytrip.com/mmtimgs/images/upload/DavanamSarovarPorticoSuites_Exterior_View__Listing.jpg',
			location : 'Banglore'
		},
		{
			url: 'http://www.makemytrip.com/hotels/the_infantry_hotel-details-bangalore.html',
			title: 'The Infantry Hotel',
			image: 'http://images1.makemytrip.com/mmtimgs/images/upload/TheInfantryHotel_Exterior__View_Listing.jpg',
			location : 'Banglore'
		},
		{
			url: 'http://www.makemytrip.com/hotels/the_chancery_pavillion-details-bangalore.html',
			title: 'The Chancery Pavillion',
			image: 'http://images1.makemytrip.com/mmtimgs/images/upload/TheChanceryPavillion_Exterior_View_Listing.jpg',
			location : 'Banglore'
		},
		{
			url: 'http://www.makemytrip.com/hotels/the_regal_residency-details-bangalore.html',
			title: 'The Regal Residency',
			image: 'http://images1.makemytrip.com/mmtimgs/images/upload/128x96_Seagrape_Gardens_-_Now_Roerich_Grand_hotel_Listing.jpg?1379393121040',
			location : 'Banglore'
		},
		{
			url: 'http://hotelz.makemytrip.com/makemytrip/site/hotels/detail?city=HYD&country=IN&checkin=08242014&checkout=08252014&searchText=Hyderabad,%20India&region=&area=&roomStayQualifier=1e0e&hotelId=201107151100547977&p=1&i=1#/sb',
			title: 'Radisson Hyderabad Hitec city',
			image: 'http://img.mmtcdn.com/hotels/201107151100547977/r/Banquet%20Hall.jpg',
			location : 'Hyderabad'
		},
		{
			url: 'http://hotelz.makemytrip.com/makemytrip/site/hotels/detail?city=HYD&country=IN&checkin=08242014&checkout=08252014&searchText=Hyderabad,%20India&region=&area=&roomStayQualifier=1e0e&hotelId=201312261016594271&p=1&i=2#/sb',
			title: 'The Manohar Hotel',
			image: 'http://img.mmtcdn.com/hotels/201312261016594271/r/Lobby1407136166943.jpg',
			location : 'Hyderabad'
		},
		{
			url: 'http://hotelz.makemytrip.com/makemytrip/site/hotels/detail?city=HYD&country=IN&checkin=08242014&checkout=08252014&searchText=Hyderabad,%20India&region=&area=&roomStayQualifier=1e0e&hotelId=201011201347537252&p=1&i=3#/sb',
			title: 'Daspalla Hotel',
			image: 'http://img.mmtcdn.com/hotels/201011201347537252/r/Exterior_View_2.jpg',
			location : 'Hyderabad'
		},
		{
			url: 'http://hotelz.makemytrip.com/makemytrip/site/hotels/detail?city=MAA&country=IN&checkin=08242014&checkout=08252014&searchText=Chennai,%20India&region=&area=&roomStayQualifier=1e0e&hotelId=200806231705198865&p=1&i=1#/sb',
			title: 'Savera',
			image: 'http://img.mmtcdn.com/hotels/200806231705198865/r/Restaurant.jpg',
			location : 'Chennai'
		},
		{
			url: 'http://hotelz.makemytrip.com/makemytrip/site/hotels/detail?city=MAA&country=IN&checkin=08242014&checkout=08252014&searchText=Chennai,%20India&region=&area=&roomStayQualifier=1e0e&hotelId=201208221859122411&p=1&i=2#/sb',
			title: 'Ramada Chennai',
			image: 'http://img.mmtcdn.com/hotels/201208221859122411/r/Board%20walk%202.jpg',
			location : 'Chennai'
		},
		{
			url: 'http://hotelz.makemytrip.com/makemytrip/site/hotels/detail?city=MAA&country=IN&checkin=08242014&checkout=08252014&searchText=Chennai,%20India&region=&area=&roomStayQualifier=1e0e&hotelId=200704231530388478&p=1&i=3#/sb',
			title: 'Clarion',
			image: 'http://img.mmtcdn.com/hotels/200704231530388478/r/Pool_Side3.jpg',
			location : 'Chennai'
		},
	];

}