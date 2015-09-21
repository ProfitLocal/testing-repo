'use strict';

app.controller('AppCtrl', ['$scope','$rootScope', 'dataSVC','$localStorage','$modal','cordovaGeolocationService', function($scope,$rootScope, dataSVC, $localStorage,$modal,cordovaGeolocationService) {
	$rootScope.categories=[];
	$rootScope.appLoaded=false;
	$rootScope.isLocationFound=false;
	$rootScope.error='';
	//$rootScope.sellerID='';
    
	$rootScope.pageTitle='Kitbucket';
	$rootScope.backLink='#menu';
	$rootScope.backImage='glyphicon-menu-hamburger';
	$rootScope.cart={
		itemCount:0,
		total:0,
		items:[]
	};
	$rootScope.addToCart=function(obj){
		var	 isFound=false;
		for(var i=0;i<$rootScope.cart.items.length;i++)
		{
			if($rootScope.cart.items[i].SellerProductID==obj.SellerProductID)
			{
				isFound=true;
				$rootScope.cart.items[i].Qnt=$rootScope.cart.items[i].Qnt+1;
				obj.Qnt=$rootScope.cart.items[i].Qnt;
				break;
			}
		}
		if(isFound==false){
			$rootScope.cart.items.push({SellerProductID:obj.SellerProductID,ProductName:obj.ProductName,ProductImage:obj.ProductImage,OfferPrice:obj.OfferPrice,SellPrice:obj.SellPrice,Qnt:1});
			obj.Qnt=1;
		}
		$rootScope.cart.total=$rootScope.cart.total+parseFloat(obj.OfferPrice);
		$rootScope.cart.itemCount=$rootScope.cart.itemCount+1;
	}
	$rootScope.removeFromCart=function(obj){
		var	index=-1;
		if(obj.Qnt!=undefined&&obj.Qnt>0){
			for(var i=0;i<$rootScope.cart.items.length;i++)
			{
				if($rootScope.cart.items[i].SellerProductID==obj.SellerProductID)
				{
					$rootScope.cart.items[i].Qnt=$rootScope.cart.items[i].Qnt-1;
					obj.Qnt=$rootScope.cart.items[i].Qnt;
					if(obj.Qnt==0){
						
					index=i;
					}
					$rootScope.cart.total=$rootScope.cart.total-parseFloat(obj.OfferPrice);
					$rootScope.cart.itemCount=$rootScope.cart.itemCount-1;
					break;
				}
			}
		}
		if(index!=-1){
			
			$rootScope.cart.items.splice(index,1);
		}
	}
	$rootScope.open = function(windowClass, templateUrl, size, ctrl,obj,callback) {
		
        var modalInstance = $modal.open({
            windowClass: windowClass,
            templateUrl: templateUrl,
            controller: ctrl,
            size: size,
			resolve: {
				obj: function() { return obj; }
			},
			  controllerAs: "vm"
        });

        modalInstance.result.then(function(selectedItem) {			
			if(callback){
				callback(selectedItem);
			}
        }, function() {

        });
    };
	$rootScope.$storage = $localStorage.$default({
          seller: null
    });
	/*if($rootScope.$storage.seller==null){
		$rootScope.open('modal-message modal-success','views/partials/selectseller.html','','SellerSelectionController',{},function(res){
			$rootScope.appLoaded=true;
		});
	}
	else{
		$rootScope.appLoaded=true;
	}*/	
	
	$scope.loadDb=function(){
		var db = window.sqlitePlugin.openDatabase({name: "DB"});
		db.transaction(function(tx) {
			tx.executeSql('CREATE TABLE IF NOT EXISTS test_table (id integer primary key, data text, data_num integer)');
			tx.executeSql("INSERT INTO test_table (data, data_num) VALUES (?,?)", ["test", 100], function(tx, res) {
          alert("insertId: " + res.insertId + " -- probably 1");
          alert("rowsAffected: " + res.rowsAffected + " -- should be 1");
            tx.executeSql("select count(id) as cnt from test_table;", [], function(tx, res) {
              alert("res.rows.length: " + res.rows.length + " -- should be 1");
              alert("res.rows.item(0).cnt: " + res.rows.item(0).cnt + " -- should be 1");
            }, function(e) {
				alert("ERROR: " + e.message);
			});
			}, function(e) {
				alert("ERROR: " + e.message);
			});
			$rootScope.appLoaded=true;
		});
	}
	$scope.loadDb();
}]);