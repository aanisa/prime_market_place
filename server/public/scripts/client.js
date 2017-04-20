var marketApp = angular.module('marketApp', []);

marketApp.controller('BalanceController', ['$scope', function($scope){
  console.log("inside BalanceController ");
}]);

marketApp.controller('BuyController', ['$scope', function($scope){
  console.log("inside BuyController");
  //temporary array of items
  $scope.availableItems = [{name:"kiwi",price:3},
                           {name:"jackfruit",price:14},
                           {name:"papaya",price:5},
                           {name:"kiwi",price:3},
                           {name:"kiwi",price:3},
                           {name:"kiwi",price:3},
                           {name:"kiwi",price:3},
                           {name:"kiwi",price:3},
                           {name:"kiwi",price:3},
                           {name:"kiwi",price:3},
                           {name:"kiwi",price:3},
                           {name:"kiwi",price:3}];

}]);

marketApp.controller('SellController', ['$scope', function($scope){
  console.log("inside SellController");
  //temporary array of purchased products
  $scope.itemsInCart = [{name:"kiwi",avgPrice:3,available:5},
                        {name:"jackfruit",avgPrice:3,available:3},
                        {name:"jackfruit",avgPrice:3,available:3},
                        {name:"jackfruit",avgPrice:3,available:3},
                        {name:"jackfruit",avgPrice:3,available:3},
                        {name:"jackfruit",avgPrice:3,available:3},
                        {name:"jackfruit",avgPrice:3,available:3},
                        {name:"jackfruit",avgPrice:3,available:3},
                        {name:"jackfruit",avgPrice:3,available:3},
                        {name:"jackfruit",avgPrice:3,available:3},
                        {name:"jackfruit",avgPrice:3,available:3},
                        {name:"papaya",avgPrice:3,available:4}];

}]);
