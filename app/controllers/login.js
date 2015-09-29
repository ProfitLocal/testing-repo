/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('loginController', function($scope, $location, $window,$rootScope) {
    $scope.username = "";
    $scope.password = "";    
    $scope.userInfo = null;
    $scope.login = function() {
		$location.path("/app/home");
        if ($scope.username != undefined && $scope.password != undefined) {
            if ($scope.username.length > 0 && $scope.password.length > 0) {
			console.log('a');
				$location.path("/home");
            } else {
                if($scope.username.length <= 0 && $scope.password.length <= 0 ){
                    var msgError = "Username and Password is required";
                }else if($scope.username.length <= 0 ){
                    var msgError = "Username is required";
                }else{
                    var msgError = "Password is required";
                }
                $scope.showValidationMessages = true;
                $scope.errormsg = msgError;
               
            }
        } else {
            if($scope.username == undefined && $scope.password == undefined ){
                var msgError = "Username and Password is required";
            }else if($scope.username == undefined){
                var msgError = "Username is required";
            }else{
                var msgError = "Password is required";
            }
            $scope.showValidationMessages = true;
            $scope.errormsg = msgError;
        }
    };

});
