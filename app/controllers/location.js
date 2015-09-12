
app.controller('locationCtrl', function($scope,$rootScope,dataSVC,cordovaGeolocationService) {
	$scope.isLoading=false;
	if(cordovaGeolocationService.checkGeolocationAvailability()){
		$scope.isLoading=true;
		cordovaGeolocationService.getCurrentPosition(function(position){
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
	else
	{
		cordova.plugins.diagnostic.switchToLocationSettings();
	}
});