//Sidebar Menu Handle
angular.module('app')
    .directive('sidebarMenu', function () {
       	return {
            scope: {
            },
            templateUrl: 'views/partials/sidebar.html',
            replace: true,
            controller: 'sidebarCtrl',
            controllerAs: 'ctrl'
        };
    })	
    .controller('sidebarCtrl', ['$scope', "dataSVC","$timeout", function($scope, dataSVC,$timeout) {
      $timeout(function(){
					$('nav#menu').mmenu({
					extensions	: [ 'effect-slide-menu', 'pageshadow' ],
					searchfield	: true,
					counters	: true,
					navbar 		: {
						title		: 'Kitbucket'
					},
					navbars		: [
						{
							position	: 'top',
							content		: [ 'searchfield' ]
						}, {
							position	: 'top',
							content		: [
								'prev',
								'title',
								'close'
							]
						}, {
							position	: 'bottom',
							content		: [
								'<a href="http://sumedhasoftech.com" target="_blank">Sumedha Softech</a>'
							]
						}
					]
				});
			},1000);
	}]);
