app.directive('scrollMenu', function() {
        return {
			scope:{
				side:"=",
				aindex:"="
			},
            controller: 'ScrollMenuCtrl',
            controllerAs: 'ctrl'
        };
    })
    .controller('ScrollMenuCtrl', ['$scope', '$window', function($scope, $window) {
        var self = this;
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
            $scope.initialize(1)
            if ($scope.isRequired) {
                if ($scope.index > 0) {
                    var w = $('.sub_cat ul li:eq(' + ($scope.index - 1) + ')').innerWidth();
                    $scope.marginLeft = $scope.marginLeft - w;
                    $('.sub_cat ul').css('margin-left', "-" + $scope.marginLeft + "px");
                    $scope.index = $scope.index - 1;
					console.log('l')
                }
            }
        }
        $scope.rightClick = function() {
			console.log('r')
            $scope.initialize(2)
            if ($scope.isRequired) {
                if ($scope.index < $('.sub_cat ul li').size() - 1) {
                    var w = $('.sub_cat ul li:eq(' + ($scope.index) + ')').innerWidth();
                    $scope.marginLeft = $scope.marginLeft + w;
                    $('.sub_cat ul').css('margin-left', "-" + $scope.marginLeft + "px");
                    $scope.index = $scope.index + 1;
                }
            }
        }
		$scope.$watch('aindex',function(){
			 $scope.index =$scope.aindex;
			if($scope.aindex>0){
				if($scope.side=='right'){
					var w=0;
					for(var i=0;i<$scope.aindex;i++)
					{
						w += $('.sub_cat ul li:eq(' + (i) + ')').innerWidth();
					}
                    $scope.marginLeft = w;
                    $('.sub_cat ul').css('margin-left', "-" + $scope.marginLeft + "px");
				}
				else{
					var w=0;
					for(var i=0;i<$scope.aindex;i++)
					{
						w += $('.sub_cat ul li:eq(' + (i) + ')').innerWidth();
					}
                    $scope.marginLeft = w;
                    $('.sub_cat ul').css('margin-left', "-" + $scope.marginLeft + "px");				}
			}
			else{				
                $('.sub_cat ul').css('margin-left', "0px");
               
			}
		});
    }]);