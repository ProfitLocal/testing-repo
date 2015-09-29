app.directive('autoComplete', function($timeout,$rootScope,dataSVC) {
    return function(scope, element, attrs) {
        var apiurl="http://122.160.153.14:183/";
        scope.$watch('tags', function(newValue, oldValue) {
                element.autocomplete({
                    source: function( request, response ) {
                    $.ajax({
                      url: apiurl+"api/Home/GetArea/",
                      dataType: "json",
                      method: "post",
                      data: {
                        keyword: request.term
                      },
                      success: function( data ) {
                          response($.map(data.data, function (item) {
                            return { label: item.AreaName, value: item.AreaName, id: item.AreaID };
                        }))

                      },
                    });
                  },
                select: function (event, ui) {
                    $rootScope.pin = ui.item.value;
                    $rootScope.areaId =  ui.item.id;
                    scope.vm.seachSeller(); 
                }

                });
//            }
        });

    };
});