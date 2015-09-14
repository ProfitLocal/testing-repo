
app.controller('locationCtrl', function($scope,$rootScope,dataSVC,cordovaGeolocationService) {
	$scope.isLoading=false;	
	
	//cordova.plugins.diagnostic.isLocationEnabled(function(enabled){//only android
		//alert(enabled)
			if(cordovaGeolocationService.checkGeolocationAvailability()){
				alert('a')
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
					
			cordova.plugins.diagnostic.switchToLocationSettings();
				},null);
		}
		else
		{
			alert('na')
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