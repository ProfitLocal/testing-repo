﻿'use strict';

app.controller('AppCtrl', [
        '$rootScope', 'dataSVC',
        function($rootScope, dataSVC) {
	$rootScope.categories=[];
           	dataSVC.getCategories(function(d){
				alert('s');
				$rootScope.categories=d.data;
			});
			$rootScope.pageTitle='Kitbucket';
			$rootScope.backLink='#menu';
        }
    ]);