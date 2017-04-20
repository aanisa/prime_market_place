var marketApp = angular.module('marketApp', []);

marketApp.controller('BalanceController', ['$scope', function($scope){
  console.log("inside BalanceController ");
  // temporary variable that stores balance
  $scope.balance = 100;

}]);

marketApp.controller('BuyController', ['$scope', function($scope){
  console.log("inside BuyController");
  //temporary array of items
  $scope.availableItems = [{name:"Toaster",price:3},
                           {name:"Lamp",price:14},
                           {name:"Clock",price:5},
                           {name:"BlueRay Player",price:3},
                           {name:"Apples",price:3},
                           {name:"Oranges",price:3},
                           {name:"Bananas",price:3},
                           {name:"Grapes",price:3},
                           {name:"Comic Books",price:3},
                           {name:"Stuffed Animals",price:3},
                           {name:"Jewelry",price:3},
                           {name:"Wine",price:3}];

  $scope.buyOneItem = function(item) {
   console.log('buy button clicked, buying one', item);
  };

}]);

marketApp.controller('SellController', ['$scope', function($scope){
  console.log("inside SellController");
  //temporary array of purchased products
  $scope.itemsInCart = [{name:"Toaster",avgPrice:3,available:5},
                        {name:"Lamp",avgPrice:3,available:3},
                        {name:"Clock",avgPrice:3,available:3},
                        {name:"BlueRay Player",avgPrice:3,available:3},
                        {name:"Apples",avgPrice:3,available:3},
                        {name:"Oranges",avgPrice:3,available:3},
                        {name:"Bananas",avgPrice:3,available:3},
                        {name:"Grapes",avgPrice:3,available:3},
                        {name:"Comic Books",avgPrice:3,available:3},
                        {name:"Stuffed Animals",avgPrice:3,available:3},
                        {name:"Jewelry",avgPrice:3,available:3},
                        {name:"Wine",avgPrice:3,available:4}];

$scope.sellOneItem = function(item) {
    console.log('sell button clicked, selling one', item);
};


}]);
