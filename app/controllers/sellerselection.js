
app.controller('SellerSelectionController', function DBController($scope, $modalInstance, dataSVC,$localStorage,$rootScope) {
	var self=this;
	self.sellerList=[];
	self.seller={};
	self.pin='';
	self.seachSeller=function()
	{
		dataSVC.getSeller(self.pin,function(d){
			console.log(d)		
self.sellerList=d.data;					
		})
	}
	self.selectedSeller=function(d)
	{
		/*$rootScope.$storage = $localStorage.$default({
          sellerID: ''
		});*/
		$rootScope.$storage.sellerID=d.SellerID;
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