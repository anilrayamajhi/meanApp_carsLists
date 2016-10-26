angular.module('theCarRepo')
  // .factory('CarFactory', ['$http', CarFactory])

  .factory('CarFactory', CarFactory)

CarFactory.$inject = ['$http']

function CarFactory($http){
 return {
   index: index,
   create: create,
   show: show,
   update: update,
   destroy: destroy
 }

 function index(){
   return $http.get('/api/cars')
 }

 function create(nCar){
    return $http.post('/api/cars', nCar)
 }

 function show($stateParams){
   return $http.get('api/cars/'+$stateParams)
 }

 function update(id, edCar){
   return $http.patch('api/cars/'+id, edCar)
 }

 function destroy(id){
   return $http.delete('api/cars/'+id)
 }
}
