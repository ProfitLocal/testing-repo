
app.controller('locationCtrl', function($scope,$rootScope,dataSVC,cordovaGeolocationService) {
	$scope.isLoading=true;	
	
	//cordova.plugins.diagnostic.isLocationEnabled(function(enabled){//only android
	//	alert(enabled)
		//$scope.isLoading=!enabled;
			if(cordovaGeolocationService.checkGeolocationAvailability()){				
				
				var w=cordovaGeolocationService.watchPosition(function(position){
					 alert('Latitude: '          + position.coords.latitude          + '\n' +
					  'Longitude: '         + position.coords.longitude         + '\n' +
					  'Altitude: '          + position.coords.altitude          + '\n' +
					  'Accuracy: '          + position.coords.accuracy          + '\n' +
					  'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
					  'Heading: '           + position.coords.heading           + '\n' +
					  'Speed: '             + position.coords.speed             + '\n' +
					  'Timestamp: '         + position.timestamp                + '\n');
					  	cordovaGeolocationService.clearWatch(w);				
				},function(error){
					alert('code: '    + error.code    + '\n' +
					  'message: ' + error.message + '\n');
					
			cordova.plugins.diagnostic.switchToLocationSettings();
				},null);
		}
		else
		{
			cordova.plugins.diagnostic.switchToLocationSettings();
		}
	//}, function(error){
			//alert('na2')
	//	cordova.plugins.diagnostic.switchToLocationSettings();
	//});
	$scope.openSetting=function(){
		
			cordova.plugins.diagnostic.switchToLocationSettings();
	}
});