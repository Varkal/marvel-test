angular.module("marvel_test.controllers", ["marvel_test.services"])
    .controller("HomeCtrl", function(){

    })
    .controller("CreatorCtrl", function($scope, marvelApi, $rootScope){


        $scope.currentPage = 1;
        $scope.creatorsByPage = 20;

        $scope.getCreators = function(){
            console.log("Request");
            $rootScope.loading=true;
            marvelApi.Request("creators").queryParam("orderBy", "firstName").limit($scope.creatorsByPage).offset(($scope.currentPage-1)*$scope.creatorsByPage).exec().then(
                function onSuccess(result){
                    var datas = result.data;
                    console.log(datas);
                    $scope.creators = datas.data.results;
                    $scope.total = datas.data.total;
                    $rootScope.loading=false;
                },
                function onError(error){
                    alert(JSON.stringify(error));
                    $rootScope.loading=false;
                }
            )
        };
        $scope.getCreators();



    })
    .controller("ComicCtrl", function(){

    })
;
