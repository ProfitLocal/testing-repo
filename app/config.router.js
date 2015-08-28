'use strict';
angular.module('app')
    .run(
        [
            '$rootScope', '$state', '$stateParams', '$location',
            function ($rootScope, $state, $stateParams, $location) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
				console.log('s');
              $rootScope.$on("$routeChangeSuccess", function (userInfo) {
                    console.log(userInfo);
                });

                $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {

                    if (error && error.authenticated === false) {
                        console.log(error.authenticated === false);
                        $state.go("login");
                    }
                });
            }
        ]
    )
    .config(
        [
            '$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider
                    .otherwise('/login');
                $stateProvider
                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'views/layout.html',
                    resolve: {
                        deps: [
                                '$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                               'lib/mmenu/css/jquery.mmenu.all.css',
											   'lib/mmenu/js/jquery.mmenu.min.all.js',
											   'https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.1.2/css/swiper.min.css',
											   'https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.1.2/js/swiper.jquery.min.js',
											   'assets/css/custom.css',
											   'app/directives/menu.js',
                                        ]
                                    });
                                }
                            ]
                        }
                    })

                .state('app.home', {
                    url: '/home',
                    templateUrl: 'views/home.html',
                    ncyBreadcrumb: {
                        label: 'home',
                        description: 'home Data'
                    },
                    resolve: {
                        deps: [
                                '$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                               'app/controllers/home.js' ,
											   'app/directives/menu.js',
											   'app/directives/swiper.js',
                                        ]
                                    });
                                }
                            ]
                        }

                })
                    .state('login', {
                        url: '/login',
                        templateUrl: 'views/login.html',
                        ncyBreadcrumb: {
                            label: 'Login'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'app/controllers/login.js'                                           
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('register', {
                        url: '/register',
                        templateUrl: 'views/register.html',
                        ncyBreadcrumb: {
                            label: 'register'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'app/controllers/register.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
            }
        ]
    );