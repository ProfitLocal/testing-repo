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
        $rootScope.$storage = $localStorage.$default({
            seller: null,
            user:null,
            orderId:null
        });
        
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
	
	
	document.addEventListener("deviceready", function() {
		alert('Device Name: '     + device.name     + '<br />' + 
								'Device Cordova: '  + device.cordova + '<br />' + 
								'Device Platform: ' + device.platform + '<br />' + 
								'Device UUID: '     + device.uuid     + '<br />' + 
								'Device Model: '    + device.model     + '<br />' + 
								'Device Version: '  + device.version  + '<br />');
		/* var networkState = navigator.connection.type;

	   var states = {};
		states[Connection.UNKNOWN]  = 'Unknown connection';
		states[Connection.ETHERNET] = 'Ethernet connection';
		states[Connection.WIFI]     = 'WiFi connection';
		states[Connection.CELL_2G]  = 'Cell 2G connection';
		states[Connection.CELL_3G]  = 'Cell 3G connection';
		states[Connection.CELL_4G]  = 'Cell 4G connection';
		states[Connection.CELL]     = 'Cell generic connection';
		states[Connection.NONE]     = 'No network connection';

		alert('Connection type: ' + states[networkState]);*/
		 dataSVC.getUser(device.uuid,device.platform,'',function(d){
            $rootScope.$storage.user = d.data;
            alert(d.status)
//            console.log(d);
            if(d.status == true){
                dataSVC.getProductOfCartByUserId(function(d){
                    console.log($rootScope.$storage.user);
                    if(d.status == true){
                        $rootScope.cart = d.data;
                    }else{
                         $rootScope.cart={
                                itemCount:0,
                                total:0,
                                items:[]
                        };
                    }
					console.log($rootScope.$storage.seller);
	if($rootScope.$storage.seller==null){
		$rootScope.open('modal-message modal-success','views/partials/selectseller.html','','SellerSelectionController',{},function(res){
			$rootScope.appLoaded=true;
		});
	}
	else{
		$rootScope.appLoaded=true;
	}
                })
            }
            
        })
	});
       
        
       
	$rootScope.addToCart=function(obj){
//            console.log(obj);
		var	 isFound=false;
                var IsPackage = false;
                if($rootScope.cart.itemCount <= 0){
                    $rootScope.$storage.orderId = 0;
                }
                dataSVC.addToCart(obj,IsPackage,function(d){
                    console.log($rootScope.cart.items);
                    console.log(obj);
                    if(d.status == true){
                        $rootScope.$storage.orderId =d.data.TempOrderID;
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
                });
//                console.log($rootScope.cart);
	}
	$rootScope.removeFromCart=function(obj){
		var	index=-1;
                var IsPackage = false;
                if(obj.Qnt!=undefined&&obj.Qnt>0){
                    console.log(obj.Qnt);
                dataSVC.removeFromCart(obj,IsPackage,function(d){
                    if(d.status == true){
                        
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
                        
                        if(index!=-1){

                                $rootScope.cart.items.splice(index,1);
                        }
                    }
            });
        }
	}
		
	//$rootScope.appLoaded=true;
	/*$scope.loadDb=function(){
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
			
		});
	}*/
	//$scope.loadDb();
        
}]);