angular.module('theCarRepo')
  // .factory('CarFactory', ['$http', CarFactory])

  .factory('CarFactory', CarFactory)

CarFactory.$inject = ['$http']

function CarFactory($http){
 return {
   index,
   show,
   destroy
 }

 function index(){
   return $http.get('/api/cars')
 }

 function show($stateParams){
   return $http.get('api/cars/'+$stateParams)
 }

 function destroy(id){
   return $http.delete('api/cars/'+id)
 }
}
