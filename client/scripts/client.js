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
  };

}]);

marketApp.controller('SellController', ['$scope', 'MarketService', function($scope, MarketService){
  console.log("inside SellController");
  //temporary array of purchased products
  // $scope.itemsInCart = [{name:"Toaster",avgPrice:3,available:5},
  //                       {name:"Lamp",avgPrice:3,available:3},
  //                       {name:"Clock",avgPrice:3,available:3},
  //                       {name:"BlueRay Player",avgPrice:3,available:3},
  //                       {name:"Apples",avgPrice:3,available:3},
  //                       {name:"Oranges",avgPrice:3,available:3},
  //                       {name:"Bananas",avgPrice:3,available:3},
  //                       {name:"Grapes",avgPrice:3,available:3},
  //                       {name:"Comic Books",avgPrice:3,available:3},
  //                       {name:"Stuffed Animals",avgPrice:3,available:3},
  //                       {name:"Jewelry",avgPrice:3,available:3},
  //                       {name:"Wine",avgPrice:3,available:4}];
  $scope.itemsInCart = MarketService.

$scope.sellOneItem = function(item) {
    console.log('sell button clicked, selling one', item);
};


}]);
