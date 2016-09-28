myApp.factory('petFactory', ['$http', function($http){
  console.log("Welcome to the pet factory!");
  var serverPets;
  var viewPets= function(){
      var promise =$http({
        method: 'GET',
        url: '/pets',
      }).then(function ( response ){
        console.log('back from server with:', response.data);
        serverPets =response.data;
        console.log('all Pets:',serverPets);
      });// end http Call
      return promise;
    };// end view pets
    return{
      retrivePets:viewPets,
      serverPets: function(){return serverPets;}
    };
}]);
