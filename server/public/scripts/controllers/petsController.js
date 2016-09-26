myApp.controller("petsController", ['$scope','$http',function($scope,$http){
  console.log(" Pets Page");
  $scope.allPets = [];
  var viewPets= function(){
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
  viewPets();

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
