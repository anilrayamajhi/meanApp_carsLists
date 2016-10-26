angular.module('theCarRepo')
  .controller('SingleCarController', SingleCarController)

SingleCarController.$inject = ['$http', '$stateParams', '$state', 'CarFactory']

function SingleCarController($http, $stateParams, $state, CarFactory){
  var vm = this;
  vm.selected = false;
  // console.log($stateParams);
  // $http.get('api/cars/'+$stateParams.id)
  CarFactory.show($stateParams.id)
    .success(function(car){
      vm.car = car;
      // console.log(vm.car);
    })

// $http.delete('api/cars/'+$stateParams)
  vm.destroyCar = function(){
    CarFactory.destroy(vm.car._id)
      .success(function(data){
        $state.go('cars')
      })
  }

  // vm.launchEdit = function(){
  //   vm.selected = true;
  //   console.log(vm.car);
  // }

  vm.editCar = function(){
    // console.log();
    // $http.patch('api/cars/'+$stateParams.id, vm.car)
    CarFactory.update($stateParams.id, vm.car)
      .success(function(data){
        vm.selected = false;
      })
  }
}
