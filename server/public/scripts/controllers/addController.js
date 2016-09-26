myApp.controller("addController", ["$scope", '$http',function($scope,$http){
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

//post call
  $http({
    method: 'POST',
      url: '/newPet',
      data: newPet,
    }).then(function ( response ){
      console.log('back from server with:', response);
    });
     var addPet = angular.element( document.querySelector( '.add' ));
     addPet.append('<p class="addedPet"> Your pet was added succesfully!</p>');
    };//end addPet
}]);
