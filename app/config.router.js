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
                    .otherwise('/app/home');
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
//											   'app/directives/swiper.js',
                                                'app/directives/swiper_product.js',
                                                 'app/directives/swiper_package.js',
											   'app/directives/mySrc.js',
                                        ]
                                    });
                                }
                            ]
                        }
                    })

                    .state('location', {
                        url: '/location',
                        templateUrl: 'views/location.html',
                        ncyBreadcrumb: {
                            label: 'location'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'app/controllers/location.js'                                           
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
                                        ]
                                    });
                                }
                            ]
                        }

                })
                .state('app.cat', {
                    url: '/category/:catID',
                    templateUrl: 'views/category_product.html',
                    ncyBreadcrumb: {
                        label: 'home',
                        description: 'category_product Data'
                    },
                    resolve: {
                        deps: [
                                '$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                               'app/controllers/category_product.js' ,
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
                    .state('app.order', {
                        url: '/order',
                        templateUrl: 'views/order.html',
                        ncyBreadcrumb: {
                            label: 'location'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'app/controllers/order.js'                                           
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('app.checkout', {
                        url: '/checkout',
                        templateUrl: 'views/checkout.html',
                        ncyBreadcrumb: {
                            label: 'location'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'app/controllers/checkout.js'                                           
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('area', {
                        url: '/area',
                        templateUrl: 'views/partials/selectseller.html',
                        ncyBreadcrumb: {
                            label: 'location'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'app/controllers/sellerselection.js'                                           
                                        ]
                                    });
                                }
                            ]
                        }
                    })
            }
        ]
    );