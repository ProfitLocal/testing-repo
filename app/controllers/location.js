
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
	/*	alert('Device Name: '     + device.name     + '<br />' + 
                            'Device Cordova: '  + device.cordova + '<br />' + 
                            'Device Platform: ' + device.platform + '<br />' + 
                            'Device UUID: '     + device.uuid     + '<br />' + 
                            'Device Model: '    + device.model     + '<br />' + 
                            'Device Version: '  + device.version  + '<br />');*/
							 var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
		checkConnection();
		document.addEventListener("resume", function() {
			checkConnection();
		});
	});
});