angular.module("marvel_test.controllers", ["marvel_test.services"])
    .controller("HomeCtrl", function () {

    })
    .controller("CreatorCtrl", function ($scope, marvelApi, $rootScope) {

        $scope.currentPage    = 1;
        $scope.creatorsByPage = 20;

        $scope.getCreators = function () {
            console.log("Request");
            $rootScope.loading = true;
            marvelApi.Request("creators").queryParam("orderBy", "firstName").limit($scope.creatorsByPage).offset(($scope.currentPage - 1) * $scope.creatorsByPage).exec().then(
                function onSuccess(result) {
                    var datas          = result.data;
                    console.log(datas);
                    $scope.creators    = datas.data.results;
                    $scope.total       = datas.data.total;
                    $rootScope.loading = false;
                },
                function onError(error) {
                    alert(JSON.stringify(error));
                    $rootScope.loading = false;
                }
            )
        };
        $scope.getCreators();

    })
    .controller("CreatorSingleCtrl", function ($scope, $stateParams, marvelApi, $rootScope) {
        $scope.serieOpened = false;

        $scope.datas = {};

        $scope.elementByPage = 20;

        $scope.load = function (type, page) {
            $rootScope.loading = true;
            marvelApi.Request("creators").pathParam($stateParams.id).pathParam(type).limit($scope.elementByPage).offset($scope.elementByPage*(page-1)).exec().then(
                function onSuccess(result) {
                    $scope.datas[type] = {
                        elements:result.data.data.results,
                        page:page
                    };
                    console.log(result.data);
                    $rootScope.loading = false;
                },
                function onError(error) {
                    alert(JSON.stringify(error));
                    $rootScope.loading = false;
                }
            )
        };

        $scope.initialLoading = function (type) {
            if (!$scope.datas[type]) {
                $scope.load(type, 1)
            }
        };

        $scope.getCreator = function (id) {
            console.log("Request");
            marvelApi.Request("creators").pathParam(id).exec().then(
                function onSuccess(result) {
                    var datas      = result.data;
                    console.log(datas);
                    $scope.creator = datas.data.results[0];
                },
                function onError(error) {
                    alert(JSON.stringify(error));
                    $rootScope.loading = false;
                }
            )
        };
        $scope.getCreator($stateParams.id);

    })
    .controller("ComicCtrl", function () {

    })
;
