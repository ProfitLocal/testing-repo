
app.controller('category_productController', function($scope,$rootScope,dataSVC,$stateParams,$filter) {
	$rootScope.pageTitle='Back';
	$rootScope.backLink='#/app/home';
	$rootScope.backImage='glyphicon-menu-left';
	console.log('s')
	/*$scope.category={
		CategoryId:$stateParams.catID,
		CategoryName:'Test',
		Child:[
			{
				CategoryId:1,
				CategoryName:'Test 1',
				IsActive:true
			},
			{
				CategoryId:2,
				CategoryName:'Test 2',
				IsActive:false
			}
		]
	}*/
	$scope.products=[];
	$scope.loadProduct=function(catid){
		dataSVC.getCategoryProduct(catid,$rootScope.$storage.sellerID,0,20,function(result){
			console.log(result.data)
			$scope.products=result.data;
			for(var i=0;i<$scope.products.length;i++){
				var obj=($filter('filter')($rootScope.cart.items, $scope.products[i].SellerProductID, false));				
				if(obj.length>0){
					$scope.products[i].Qnt=obj[0].Qnt;
				}
			}
		});
	}
	$scope.loadSubCategory=function(catid){
		dataSVC.getSubCategory(catid,function(result){		
			$scope.category=result.data;
			if($scope.category.Child.length>0){
				var index=0;
				for(var i=0;i<$scope.category.Child.length;i++){
					if($scope.category.Child[i].CategoryId==catid){
						index=i;
						break;
					}
				}
				$scope.category.Child[index].IsActive=true;
				$scope.loadProduct($scope.category.Child[index].CategoryId);
			}
		});
	}
	$scope.loadSubCategory($stateParams.catID);
	$scope.setCategory=function(obj){
		for(var i=0;i<$scope.category.Child.length;i++){
			$scope.category.Child[i].IsActive=false;
		}
		obj.IsActive=true;
		$scope.loadProduct(obj.CategoryId);
	}
});