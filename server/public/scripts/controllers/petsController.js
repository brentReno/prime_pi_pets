myApp.controller("petsController", ['$scope','$http',function($scope,$http){
  console.log(" Pets Page");
  //get pet info
  $scope.addPet = function(){
    console.log('in addPet', $scope);

    var newPet = {
      petName: $scope.petName,
      petType: $scope.petType,
      petAge: $scope.petAge,
      picLink: $scope.petPic
    }; // end new item
    console.log('sending:',newPet);
  };//end addPet

  var onLoad= function(){
    $http({
      method: 'GET',
      url: '/pets',
    }).then(function ( response ){
      console.log('back from server with:', response);
    });// end http Call
  };// end on load
  // call on load
  onLoad();
}]);// end petsController
