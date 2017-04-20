var marketApp = angular.module('marketApp', []);

marketApp.controller('BalanceController', ['$scope', 'MarketService', function($scope, MarketService){
  // temporary variable that stores balance
  $scope.balance = MarketService.user.balance;   // this doesn't update as it should...

}]);

marketApp.controller('BuyController', ['$scope', 'MarketService', function($scope, MarketService){
  // $scope.cartSummary = MarketService.user.cartSummary;

  $scope.availableItems = MarketService.market.marketItems;
  // MarketService.UpdateCartSummary();

  $scope.buyOneItem = function(item) {
    console.log('BUYING ONE:',item.name, 'FOR: $',item.price);
    MarketService.buyItem(item);

    // console.log($scope.cartSummary);

  };

}]);

marketApp.controller('SellController', ['$scope', 'MarketService', function($scope, MarketService){
  // MarketService.UpdateCartSummary();
//   $scope.cartSummary = MarketService.user.cartSummary;
// $scope.sellOneItem = function(item) {
//     // console.log('sell button clicked, selling one', item);
//     MarketService.sellItem(item);
// };
}]);
