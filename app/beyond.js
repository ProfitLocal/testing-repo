'use strict';

app.controller('AppCtrl', ['$rootScope', 'dataSVC', function($rootScope, dataSVC) {
	$rootScope.categories=[];
	$rootScope.appLoaded=false;
	$rootScope.error='';
    dataSVC.getCategories(function(d){
				//alert(d.Message);
				$rootScope.appLoaded=true;
				$rootScope.categories=d.data;
	});
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
			if($rootScope.cart.items[i].ProductID==obj.ProductID)
			{
				isFound=true;
				$rootScope.cart.items[i].Qnt=$rootScope.cart.items[i].Qnt+1;
				obj.Qnt=$rootScope.cart.items[i].Qnt;
				break;
			}
		}
		if(isFound==false){
			$rootScope.cart.items.push({ProductID:obj.ProductID,ProductName:obj.ProductName,ProductImage:obj.ProductImage,Qnt:1});
			obj.Qnt=1;
		}
		$rootScope.cart.total=$rootScope.cart.total+parseInt(obj.BasePrice);
		$rootScope.cart.itemCount=$rootScope.cart.itemCount+1;
	}
	$rootScope.removeFromCart=function(obj){
		var	index=-1;
		if(obj.Qnt!=undefined&&obj.Qnt>0){
			for(var i=0;i<$rootScope.cart.items.length;i++)
			{
				if($rootScope.cart.items[i].ProductID==obj.ProductID)
				{
					$rootScope.cart.items[i].Qnt=$rootScope.cart.items[i].Qnt-1;
					obj.Qnt=$rootScope.cart.items[i].Qnt;
					if(obj.Qnt==0){
						
					index=i;
					}
					$rootScope.cart.total=$rootScope.cart.total-parseInt(obj.BasePrice);
					$rootScope.cart.itemCount=$rootScope.cart.itemCount-1;
					break;
				}
			}
		}
		if(index!=-1){
			
			$rootScope.cart.items.splice(index,1);
		}
	}
}]);