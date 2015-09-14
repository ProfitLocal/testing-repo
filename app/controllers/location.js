
app.controller('locationCtrl', function($scope,$rootScope,dataSVC,cordovaGeolocationService) {
	$scope.isLoading=false;	
	
	$scope.openSetting=function(){
		
			cordova.plugins.diagnostic.switchToLocationSettings();
	}
	function checkConnection(){
		
		cordova.plugins.diagnostic.isLocationEnabled(function(enabled){//only android			
			$scope.isLoading=!enabled;
				if(enabled){	
					
					var w=cordovaGeolocationService.getCurrentPosition(function(position){
						 alert('Latitude: '          + position.coords.latitude          + '\n' +
						  'Longitude: '         + position.coords.longitude         + '\n' +
						  'Altitude: '          + position.coords.altitude          + '\n' +
						  'Accuracy: '          + position.coords.accuracy          + '\n' +
						  'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
						  'Heading: '           + position.coords.heading           + '\n' +
						  'Speed: '             + position.coords.speed             + '\n' +
						  'Timestamp: '         + position.timestamp                + '\n');
										
					},function(error){
						alert('code: '    + error.code    + '\n' +
						  'message: ' + error.message + '\n');
						
					},null);
			}		
			
		}, function(error){
				//alert('na2')
			//cordova.plugins.diagnostic.switchToLocationSettings();
		});
	}
	document.addEventListener("deviceready", function() {
		checkConnection();
		document.addEventListener("resume", function() {
			checkConnection();
		});
	});
});