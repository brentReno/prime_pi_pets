myApp.controller("petsController", ['$scope','$http',function($scope,$http){
  console.log(" Pets Page");
  
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
