angular.module("marvel_test.services", [])
    .constant("key", "c1e15e338e12e2cae0d61b0c97c9873f")
    .service("marvelApi", function($http, key, $q){
        var self = this;


        /**
         * Builder for a request to Marvel Comics API
         * @param resource Shorthand to specify the resource
         * @returns {*} the request to chains method
         */
        this.Request = function(resource){
            var baseURl = "http://gateway.marvel.com/v1/public/";


            var request = this;
            request._method = "GET"; //Currently, MarvelAPi only support GET Request but maybe this field will be usefull int he future
            request._resource = resource ? resource : "";
            request._pathParams = [];
            request._queryParams = [];


            /**
             * Select the ressource to fetch from the Marvel Comics API
             * Resource can be : Comics, Comic series, Comic stories, Comic events and crossovers, Creators, Characters
             * @param newRessource Ressource to fetch
             * @returns {*} The request to chain methods
             */
            request.resource = function(newRessource){
                request._resource = newRessource;
                return request;
            };

            /**
             * Add a path parameter to the request
             * @param param The param to add
             * @returns {*} The request to chain methods
             */
            request.pathParam = function(param){
                request._pathParams.push(param);
                return request
            };

            /**
             * Add a query parameter to the request
             * @param key The name of the param
             * @param value The value of the param
             * @returns {*} The request to chain methods
             */
            request.queryParam = function(key, value){
                request._queryParams.push({key:key,value:value});
                return request
            };

            /**
             * Build the URL from the request informations and exec the request
             * @returns {*} A Promise
             */
            request.exec = function(){
                var deferred = $q.defer();
                var url = baseURl+request._resource;
                request._pathParams.forEach(function(param){
                    url+="/"+param;
                });
                url+="?apikey="+key;
                request._queryParams.forEach(function(param){
                    url+="&"+param.key+"="+param.value;
                });

                $http({
                    method:request._method,
                    url:url
                }).then(
                    function(result){
                        deferred.resolve(result);
                    },
                    function(error){
                        deferred.reject(error);
                    }
                );
                return deferred.promise;
            };

            return request;




        }

        this.get = function(){
            $http.get("http://gateway.marvel.com/v1/public/comics?apikey="+key).then(
                function success(result){
                    console.log(result)
                },
                function error(error){
                    console.log(error)
                }
            )
        }
    })
;