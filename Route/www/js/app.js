// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/app.html",
    controller: "AppCtrl"
  })
    .state('app.students', {
      url: "/students",
      views: {
        'students': {
          templateUrl: "templates/students.html",
          controller: 'StudentsCtrl'
        }
      }
    })
    .state('app.students.details', {
      url: "/details/:id/:age",
      views: {
        'details': {
          templateUrl: "templates/details.html",
          controller: 'StudentDetailsCtrl'
        }
      }
    })
    .state('app.classes', {
      url: "/classes",
      views: {
        'classes': {
          templateUrl: "templates/classes.html",
          controller: 'ClassesCtrl'
        }
      }
    })
    .state('app.classes.details', {
      url: "/details/:id"
    });

  $urlRouterProvider.otherwise("/app/students");
});
