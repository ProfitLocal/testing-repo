
app.controller('SellerSelectionController', function DBController($scope, dataSVC,$localStorage,$rootScope,$window) {
	var self=this;
	$scope.sellerList=[];
	$scope.seller={};
	$scope.pin=$rootScope.pin;
	$scope.areaId = $rootScope.areaId;
        $scope.isArea = false;
        $scope.isSeller = false;
//        self.sellerList = $rootScope.sellerList;
//        console.log($rootScope.$storage.seller);
        if ($rootScope.$storage.seller != null) {
//            console.log("here");
             $window.location.href = '#/app/home';
        }
	$scope.seachArea=function()
	{
            $scope.isArea = true;
            $scope.isSeller = false;
//            console.log("here");
//            $scope.pin = $rootScope.pin;
//            $scope.areaId = $rootScope.areaId;
//            console.log($scope.pin);
            dataSVC.getArea($scope.pin,function(d){
                    console.log(d)
                    if(d.data.length > 0){
                        $scope.areaList=d.data;
                    }
            })
//		dataSVC.updateArea($scope.areaId,function(d){
//                    console.log(d);
//                })
//                dataSVC.getSeller($scope.areaId,function(d){
//			console.log(d)		
//			$scope.sellerList=d.data;					
//		})
                
	}
        $scope.seachSeller=function(areaId)
	{
            $scope.isSeller = true;
            $scope.isArea = false;
//            console.log("here");
//            $scope.pin = $rootScope.pin;
//            $scope.areaId = $rootScope.areaId;
            
		dataSVC.updateArea(areaId,function(d){
//                    console.log(d);
                })
                dataSVC.getSeller(areaId,function(d){
//			console.log(d)		
			$scope.sellerList=d.data;					
		})
                
	}
	if($scope.pin!=undefined&&$scope.pin!=''){
		$scope.seachSeller();
		$scope.seller=$rootScope.$storage.seller;
	}
	$scope.selectedSeller=function(d)
	{
		/*$rootScope.$storage = $localStorage.$default({
          sellerID: ''
		});*/
                
                dataSVC.updateSeller(d.SellerID,function(response){
//                    console.log(d);
                    if(response.status == true){
                        $rootScope.$storage.seller=d; 
                        $window.location.href = '#/app/home';
                       
                    }
                })
                 
//                $modalInstance.close('');
		
		
	}
        $scope.updateArea = function(){
            $scope.isArea = true;
            $scope.isSeller = false;
        }
//	self.close=function(){	
//		$modalInstance.close('');
//	}
//    self.check =function(selected,db){
//		console.log(selected)
//        var i = null;
//        for(i in db){
//            if(db[i].driver == selected.driver){
//				console.log(db[i])
//                return db[i];
//            }
//        }
//		console.log(db[0])
//		return db[0];
//    }
});