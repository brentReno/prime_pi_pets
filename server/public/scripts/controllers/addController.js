myApp.controller("addController", ["$scope", function($scope){
  console.log(" Add Page");

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
}]);
