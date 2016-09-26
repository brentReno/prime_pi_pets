myApp.controller("petsController", ['$scope','$http',function($scope,$http){
  console.log(" Pets Page");
  $scope.allPets = [];
  var onLoad= function(){
    $http({
      method: 'GET',
      url: '/pets',
    }).then(function ( response ){
      console.log('back from server with:', response.data);
      $scope.allPets =response.data;
      console.log('all Pets:',$scope.allPets);
    });// end http Call
  };// end on load
  // call on load
  onLoad();

  $scope.delete = function(pet){
    console.log("in deletePet");
     console.log(pet._id);


  };// end delete pet
}]);// end petsController
