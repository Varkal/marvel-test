angular.module("marvel_test", ["ui.router", "marvel_test.controllers", "marvel_test.services"])
    .config(function($stateProvider, $urlRouterProvider){

        $stateProvider
            .state('home', {
                url: "/home",
                controller:"HomeCtrl",
                templateUrl: "template/home.html"
            })
            .state('creator', {
                url: "/creator",
                controller:"CreatorCtrl",
                templateUrl: "template/creator.html"
            })
            .state('comic', {
                url: "/comic",
                controller:"ComicCtrl",
                templateUrl: "template/comic.html"
            })
        ;

        $urlRouterProvider.otherwise("/home");
    })
;
