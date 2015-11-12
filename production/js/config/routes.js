angular.module('Etchpost')
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/posts');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
  .state('posts', {
      url: '/posts',
      templateUrl: 'templates/posts/index.tmpl.html',
      controller:'Postctrl as postctrl'
  })

  // nested list with custom controller
  .state('newpost', {
      url: '/new',
      templateUrl: 'templates/posts/new.tmpl.html',
      controller: 'NewPostctrl as newPostctrl'
  })


  .state('login', {
      url: '/login',
      templateUrl: 'templates/posts/login.tmpl.html',
      controller: 'LoginCtrl as loginctrl'
  })

  // nested list with just some random string data
  .state('home.paragraph', {
      url: '/paragraph',
      template: 'I could sure use a drink right now.'
  })

});
