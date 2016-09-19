angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.page2', {
    url: '/page2/:News',
    views: {
      'tab1': {
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
      }
    }
  })

  .state('tabsController.page3', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/page3.html',
        controller: 'page3Ctrl'
      }
    }
  })

  .state('tabsController.page4', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/page4.html',
        controller: 'page4Ctrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.vedio_title', {
    url: '/page5',
    views: {
      'tab2': {
        templateUrl: 'templates/vedio_title.html',
        controller: 'vedio_titleCtrl'
      }
    }
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.news_Page', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/news_Page.html',
        controller: 'news_PageCtrl'
      }
    }
  })

  .state('page9', {
    url: '/vedio_history',
    templateUrl: 'templates/page9.html',
    controller: 'page9Ctrl'
  })

  .state('tabsController.article_content', {
    url: '/article_content',
    views: {
      'tab3': {
        templateUrl: 'templates/article_content.html',
        controller: 'article_contentCtrl'
      }
    }
  })

  .state('page', {
    url: '/page11',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/page1/article_content')

  

});