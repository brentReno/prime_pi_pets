console.log("client.js is sourced");

var myApp = angular.module("myApp", ["ngRoute"]);

//config routes
myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
    when("/home",{
      templateUrl: "/views/partials/home.html",
      controller: "homeController"
    }).
    when("/add", {
      templateUrl: "/views/partials/add.html",
      controller: "addController"
    }).
    when("/pets", {
      templateUrl:"/views/partials/pets.html",
      controller: "petsController"
    }).
    otherwise({
      redirectTo:"/home"
    });
}]);//end config routes
