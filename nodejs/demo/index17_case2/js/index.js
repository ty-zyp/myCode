var myapp = angular.module('myapp', ['ui.router']);
myapp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/home',
    views: {
      head: {
        template: '<h1>头部内容</h1>'
      },
      body: {
        templateUrl: './views/body.main.tpl.html',
        controller: 'body.main.ctrl'
      },
      foot: {
        template: '<h1>脚部内容</h1>'
      },
    }
  }).state('home.tab1', {
    url: '/tab1',
    views: {
      tab: {
        templateUrl: './views/tab1.main.tpl.html',
        controller:'tab1.main.ctrl'
      }
    }
  }).state('home.tab2', {
    url: '/tab2',
    views: {
      tab: {
        templateUrl: './views/tab2.main.tpl.html',
        controller:'tab2.main.ctrl'
      }
    }
  })
  $urlRouterProvider.otherwise('/home');
}]);
myapp.controller('body.main.ctrl', ['$scope', function ($scope) {
  $scope.name="张三"
}])
myapp.controller('tab1.main.ctrl', ['$scope', function ($scope) {
  $scope.age="22"
}])
myapp.controller('tab2.main.ctrl', ['$scope', function ($scope) {
  $scope.salary="2200"
}])