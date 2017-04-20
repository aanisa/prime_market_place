marketApp.controller('BalanceController', ['$scope', [function($scope){
  $scope.user = MarketService.user;
  console.log(user);
}]]);
