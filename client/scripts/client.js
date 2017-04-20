var marketApp = angular.module('marketApp', []);

marketApp.controller('BalanceController', ['$scope', '$interval', 'MarketService', function($scope, $interval, MarketService){
  // temporary variable that stores balance
  $scope.balance = MarketService.balance;

}]);

marketApp.controller('MarketController', ['$scope', '$interval', 'MarketService', function($scope, $interval, MarketService){
  $scope.cartSummary = MarketService.cartSummary;
  $scope.availableItems = MarketService.market.marketItems;

  $scope.buyOneItem = function(item) {
    console.log('buy button clicked, buying one', item);
    MarketService.buyItem(item);
    console.log('cartSummary in BuyController',$scope.cartSummary);
  };

  $scope.sellOneItem = function(item) {
    console.log('sell button clicked, selling one', item);
    MarketService.sellItem(item);
    console.log('cartSummary in sellOneItem',$scope.cartSummary);
  };


  var change = $interval(function(){
    for (let i = 0; i < $scope.availableItems.length; i++) {
      $scope.availableItems[i].changePrice();
    }
  },5000);

}]);
