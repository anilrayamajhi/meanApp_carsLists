angular.module('theCarRepo')
  .controller('SingleCarController', SingleCarController)

SingleCarController.$inject = ['$http', '$stateParams', '$state', 'CarFactory']

function SingleCarController($http, $stateParams, $state, CarFactory){
  var vm = this;
  // console.log($stateParams);
  // $http.get('api/cars/'+$stateParams.id)
  CarFactory.show($stateParams.id)
    .success(function(car){
      vm.car = car;
      // console.log(vm.car);
    })

  vm.destroyCar = function(){
    CarFactory.destroy(vm.car._id)
      .success(function(data){
        $state.go('cars')
      })
  }
}
