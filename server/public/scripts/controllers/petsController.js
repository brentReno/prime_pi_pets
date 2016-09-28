myApp.controller("petsController", ['$scope','$http','petFactory',function($scope,$http, petFactory){
  console.log(" Pets Page");
  $scope.allPets = [];

  petFactory.retrivePets().then(function(){
    $scope.allPets = petFactory.serverPets();
  });

  $scope.delete = function(pet){
    console.log("in deletePet");
    console.log(pet._id);
    var idToSend = {_id: pet._id};
    console.log(idToSend);
    $http({
      method: 'DELETE',
      url: '/pets',
      data: idToSend,
      headers: {"Content-Type": "application/json;charset=utf-8"}
    }).then(function ( response ){
      console.log('back from server with:', response);
    });
    viewPets();
  };// end delete

  //sort pets
  $scope.sortPets = function(value){
    $http({
      method: 'GET',
      url: '/pets/'+ value,
    }).then(function(response){
      console.log('back from server with:', response.data);
      $scope.allPets =response.data;
      console.log('all Pets:',$scope.allPets);
    });
  };


}]);// end petsController
