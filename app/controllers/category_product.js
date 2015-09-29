
app.controller('category_productController', function($scope,$rootScope,dataSVC,$stateParams,$filter,$window) {
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
	$scope.activec=0;
	$scope.loadProduct=function(catid){
		$scope.products=[];
		dataSVC.getCategoryProduct(catid,$rootScope.$storage.seller.SellerID,0,20,function(result){
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
			$rootScope.pageTitle=$scope.category.CategoryName;
			if($scope.category.Child.length>0){
				var index=0;
				for(var i=0;i<$scope.category.Child.length;i++){
					if($scope.category.Child[i].CategoryId==catid){
						index=i;
						break;
					}
				}
				$scope.category.Child[index].IsActive=true;
				$scope.activec=index;
				$scope.loadProduct($scope.category.Child[index].CategoryId);
			}
		});
	}
	$scope.loadSubCategory($stateParams.catID);
	var catIndex=0;
	$scope.setCategory=function(obj){
		for(var i=0;i<$scope.category.Child.length;i++){
			$scope.category.Child[i].IsActive=false;
			if(obj.CategoryId==$scope.category.Child[i].CategoryId){
				catIndex=i;
			}
		}
		obj.IsActive=true;
		$scope.activec=catIndex;
		 var mySwiper = new Swiper ('.swiper-container', {
		// Optional parameters
		slidesPerView: 3,
		spaceBetween: 0
    })    
		$scope.loadProduct(obj.CategoryId);
	}
	 var styles = {
    // appear from right
    right: '.enter-setup {   position:absolute;   -webkit-transition: 0.5s ease-out all;   -webkit-transform:translate3d(100%,0,0)  }  .enter-setup.enter-start {   position:absolute;  -webkit-transform:translate3d(0,0,0)}  .leave-setup {   position:absolute;   -webkit-transition: 0.5s ease-out all;   -webkit-transform:translate3d(0,0,0)} .leave-setup.leave-start {   position:absolute;  -webkit-transform:translate3d(-100%,0,0) };',
    // appear from left
    left: '.enter-setup {   position:absolute;   -webkit-transition: 0.5s ease-out all; -webkit-transform:translate3d(-100%,0,0)}  .enter-setup.enter-start {   position:absolute;   -webkit-transform:translate3d(0,0,0) }  .leave-setup {   position:absolute;   -webkit-t.animate-enter,.animate-leave{ -webkit-transition: 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;-moz-transition: 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;-ms-transition: 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all; -o-transition: 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all; transition: 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;} .animate-enter {left: 100%;}.animate-enter.animate-enter-active {left: 0;}.animate-leave {left: 0;}ransition: 0.5s ease-out all;  -webkit-transform:translate3d(0,0,0)} .leave-setup.leave-start {   position:absolute;  -webkit-transform:translate3d(100%,0,0) };'
  };
  $scope.style='left';
	$scope.goToPage=function(side){
		$scope.style=side;
		 $rootScope.style = styles[side];
		if(side=='right'){
			if(catIndex>0){
				catIndex=catIndex-1;
				$scope.setCategory($scope.category.Child[catIndex]);
			}
			
		}else{
			if(catIndex<$scope.category.Child.length-1){
				catIndex=catIndex+1;
				$scope.setCategory($scope.category.Child[catIndex]);
			}
		}
	} 
	$rootScope.style = styles['right'];
	
        $scope.index = 0;
        $scope.marginLeft = 0;
        $scope.isRequired = true;
        $scope.initialize = function(flag) {
            var w = $('.sub_cat').innerWidth();
            var mw = 0
            $('.sub_cat li').each(function() {
                mw += $(this).innerWidth();
            });

            /* var bw = $('.content-header-buttons').innerWidth();
           if (((bw + mw) - (flag == 2 ? $scope.marginLeft : 0)) > w) {
                $scope.isRequired = true;
            } else {
                /*$scope.index=0;
                $scope.marginLeft=0;
                $scope.isRequired = false;
            }*/
        };
        $scope.initialize();
        angular.element($window).bind('resize', function() {
            $('.sub_cat ul').css('margin-left', "0" + "px");
            return $scope.$apply();
        });
        $scope.leftClick = function() {
			console.log($scope.index+ 'l')
            $scope.initialize(1)
            if ($scope.isRequired) {
                if ($scope.index > 0) {
                    var w = $('.sub_cat ul li:eq(' + ($scope.index - 1) + ')').innerWidth();
                    $scope.marginLeft = $scope.marginLeft - w-10;
                    $('.sub_cat ul').css('margin-left', "-" + $scope.marginLeft + "px");
                    $scope.index = $scope.index - 1;
					console.log('l')
                }
				else{		
					$scope.marginLeft=0;			
					$('.sub_cat ul').css('margin-left', "0px");
				   
				}
            }
			
        }
        $scope.rightClick = function() {
			console.log($scope.index+ 'r')
            $scope.initialize(2)
            if ($scope.isRequired) {
                if ($scope.index < $('.sub_cat ul li').size() - 1) {
                    var w = $('.sub_cat ul li:eq(' + ($scope.index) + ')').innerWidth();
                    $scope.marginLeft = $scope.marginLeft + w+10;
                    $('.sub_cat ul').css('margin-left', "-" + $scope.marginLeft + "px");
                    $scope.index = $scope.index + 1;
                }
            }
        }
		$scope.$watch('activec',function(){
			console.log($scope.activec)
			 $scope.index =$scope.activec;
			if($scope.activec>0){
					var w=0;
					for(var i=0;i<$scope.activec;i++)
					{
						w += $('.sub_cat ul li:eq(' + (i) + ')').innerWidth();
					}
                    $scope.marginLeft = w+10;
                    $('.sub_cat ul').css('margin-left', "-" + $scope.marginLeft + "px");		
				}
			
			else{		
				$scope.marginLeft=0;			
                $('.sub_cat ul').css('margin-left', "0px");
               
			}
		});
});