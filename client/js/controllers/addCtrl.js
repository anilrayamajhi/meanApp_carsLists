angular.module('theCarRepo')
  .controller('AddController', ['$http', '$state', AddController])

function AddController($http, $state){
  var vm = this;

  // vm.newCar = {
  //   year: vm.year,
  //   make: vm.make,
  //   model: vm.model,
  //   description: vm.description,
  //   image: vm.url
  // }

  vm.createCar = function(){
    // $http({
    //   method:'POST',
    //   url:'/cars',
    //   data: vm.newCar
    // })
    $http.post('/api/cars', vm.newCar)
      .success(function(data){
        // console.log(data);
        $state.go('cars')
      })
  }
}
