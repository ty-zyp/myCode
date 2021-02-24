var myapp = angular.module('myapp', ['ui.router']);
myapp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/home',
    views: {
      mainView: {
        templateUrl: './views/home.main.tpl.html',
        controller: 'home.main.ctrl'
      }
    }
  }).state('info', {
    url: '/info/:name',
    views: {
      mainView: {
        templateUrl: './views/info.main.tpl.html',
        controller:'info.main.ctrl'
      }
      
    }
  })
  $urlRouterProvider.otherwise('/home');
}]);
myapp.controller('home.main.ctrl', ['$scope', '$http', function ($scope, $http) {
  $scope.getList = function () {
    $http({
      url: '/api/stu/list',
      method: 'get',
      params: { time: new Date().getTime() }
    }).then(function (res) {
      console.log('请求成功：', res.data);
      $scope.data = res.data.data;
    }, function (err) {
      console.log('请求失败：', err);
    });
  }
  $scope.getList();

  $scope.modify = function (obj, index) {
    console.log(obj, index);
    $scope.modifyObj = { ...obj };
  };
  $scope.sureModify = function () {
    $('#myModal').modal('hide');
    $http({
      url: '/api/stu/modify',
      method: 'post',
      data: {name:$scope.modifyObj.name,age:$scope.modifyObj.age,id:$scope.modifyObj.id}
    }).then(function (res) {
      $scope.getList();
      console.log(res);
    }, function (err) {
      console.log(err);
    })
  };
  $scope.add = function () {
    let id = new Date().getTime() + '';
    console.log('id:', id)
    $scope.modifyObj = {
      name: '',
      age: '',
      id: id
    };
  };
  $scope.delete = function (id) {
    $http({
      url: '/api/stu/delete',
      method: 'post',
      data: {id:id}
    }).then(function (res) {
      $scope.getList();
      console.log(res);
    }, function (err) {
      console.log(err);
    })
  }
}]);
myapp.controller('info.main.ctrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
  // $stateParams 用于获取路由参数
  var name = $stateParams.name;
  console.log(name);
  $http({
    url: '/api/stu/info',
    method: 'post',
    data:{name}
  }).then(function (res) {
    $scope.data = res.data.data;
  }, function (err) {
      
  })
}])