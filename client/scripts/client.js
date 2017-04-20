var marketApp = angular.module('marketApp', []);

marketApp.controller('BalanceController', ['$scope', 'MarketService', function($scope, MarketService){
  console.log("inside BalanceController ");
  // temporary variable that stores balance
  $scope.balance = 100;

}]);

marketApp.controller('BuyController', ['$scope', 'MarketService', function($scope, MarketService){
  console.log("inside BuyController");

  $scope.availableItems = MarketService.market.marketItems;
  console.log("$scope.availableItems", $scope.availableItems);
  $scope.buyOneItem = function(item) {
    console.log('buy button clicked, buying one', item);
    MarketService.buyItem(item);

  };

}]);

marketApp.controller('SellController', ['$scope', 'MarketService', function($scope, MarketService){
  console.log("inside SellController");
  MarketService.UpdateCartSummary();
  $scope.cartSummary = MarketService.user.cartSummary;

$scope.sellOneItem = function(item) {
    console.log('sell button clicked, selling one', item);
    MarketService.sellItem(item);
};


}]);
