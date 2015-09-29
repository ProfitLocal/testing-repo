
app.controller('SellerSelectionController', function DBController($scope, $modalInstance, dataSVC,$localStorage,$rootScope) {
	var self=this;
	self.sellerList=[];
	self.seller={};
	self.pin=$rootScope.pin;
	self.areaId = $rootScope.areaId;
//        self.sellerList = $rootScope.sellerList;
//        console.log($rootScope.sellerList);
	self.seachSeller=function()
	{
            self.pin = $rootScope.pin;
            self.areaId = $rootScope.areaId;
		dataSVC.updateArea(self.areaId,function(d){
                    console.log(d);
                })
                dataSVC.getSeller(self.areaId,function(d){
			console.log(d)		
			self.sellerList=d.data;					
		})
                
	}
        
	if(self.pin!=undefined&&self.pin!=''){
		self.seachSeller();
		self.seller=$rootScope.$storage.seller;
	}
	self.selectedSeller=function(d)
	{
		/*$rootScope.$storage = $localStorage.$default({
          sellerID: ''
		});*/
                
                dataSVC.updateSeller(d.SellerID,function(response){
                    console.log(d);
                    if(response.status == true){
                       
                       
                    }
                })
                 $rootScope.$storage.seller=d; 
                $modalInstance.close('');
		
		
	}
	self.close=function(){	
		$modalInstance.close('');
	}
    self.check =function(selected,db){
		console.log(selected)
        var i = null;
        for(i in db){
            if(db[i].driver == selected.driver){
				console.log(db[i])
                return db[i];
            }
        }
		console.log(db[0])
		return db[0];
    }
});