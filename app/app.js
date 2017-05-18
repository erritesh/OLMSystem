
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
   
    .when("/", 
              {templateUrl: "../app/adminapp/views/home.html",
                controller: "PageCtrl" })   
    // Pages
    .when("/dashboard",
           {templateUrl: "page/dashboard.html",
            controller: "PageCtrl"})
    .when("/contact",
           {templateUrl: "page/contact.html", 
           controller: "PageCtrl"})
    .when("/gallary",
           {templateUrl: "page/gallary.html",
            controller: "PageCtrl"})
    .when("/friend",
           {templateUrl: "page/friend.html",
            controller: "PageCtrl"})
    .when("/about",
           {templateUrl: "page/about.html", 
           controller: "PageCtrl"})
}]);
/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});