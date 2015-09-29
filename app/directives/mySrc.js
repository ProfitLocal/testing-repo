angular.module('app')
    .directive("mySrc", function() {
    return {
      link: function(scope, element, attrs) {
        var img, loadImage;
        img = null;
		console.log(attrs.mySrc)
        loadImage = function() {
		console.log('');
          element[0].src = "Images/nimage.png";

          img = new Image();
          img.src = attrs.mySrc;

          img.onload = function() {
            element[0].src = attrs.mySrc;
          };
        };

        scope.$watch((function() {
          return attrs.mySrc;
        }), function(newVal, oldVal) {
          if (oldVal !== newVal) {
            loadImage();
          }
        });
		  loadImage();
      }
    };
  });