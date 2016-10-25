angular.module('theCarRepo')
  .controller('CarsController', CarsController)

CarsController.$inject = ['$scope', '$state', 'CarFactory']

function CarsController($scope, $state, CarFactory) {
  var vm = this

  // limit car description length on cars index:
  vm.textLimit = 140

  // get all cars when controller loads:
  // $http.get('/api/cars')
  CarFactory.index()
    .success(function(data) {
      vm.cars = data
    })

  vm.destroyCar = function(car, index){
    CarFactory.destroy(car._id)
      .success(function(data){
        console.log(data);
        // vm.cars.splice(vm.cars.[indexOf(car)], 1)
        vm.cars.splice(index, 1)
      })
  }
}
