angular.module("marvel_test.controllers", ["marvel_test.services"])
    .controller("HomeCtrl", function(){

    })
    .controller("CreatorCtrl", function($scope, marvelApi){

        $scope.currentPage = 1;
        $scope.creatorsByPage = 50;

        $scope.getCreators = function(){
            console.log("Request");
            marvelApi.Request("creators").queryParam("orderBy", "firstName").limit($scope.creatorsByPage).offset(($scope.currentPage-1)*$scope.creatorsByPage).exec().then(
                function onSuccess(result){
                    var datas = result.data;
                    console.log(datas);
                    $scope.creators = datas.data.results;
                    $scope.total = datas.data.total
                },
                function onError(error){
                    alert(JSON.stringify(error));
                }
            )
        };
        $scope.getCreators();



    })
    .controller("ComicCtrl", function(){

    })
;
