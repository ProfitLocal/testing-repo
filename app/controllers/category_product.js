
app.controller('category_productController', function($scope,$rootScope,dataSVC,$stateParams) {
	$rootScope.pageTitle='Back';
	$rootScope.backLink='#/app/home';
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
		dataSVC.getCategoryProduct(catid,0,20,function(result){
		console.log(result)
			$scope.products=result.data;
		});
	}
	$scope.loadSubCategory=function(catid){
		dataSVC.getSubCategory(catid,function(result){		
			$scope.category=result.data;
			if($scope.category.Child.length>0){
				$scope.category.Child[0].IsActive=true;
				$scope.loadProduct($scope.category.Child[0].CategoryId);
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