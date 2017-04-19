var marketApp = angular.module('marketApp', []);

marketApp.factory('MarketService', [function() {

    class utilities{
        constructor(){}
        static randomNumber (max,min){
          return Math.floor(Math.random() * (1 + max - min ) + min);
        }
    }


    class marketItem{
        constructor(name, price){
          this.name = name;
          this.price = price;
        }//ends contructor

        changePrice(){


        }//ends changePrice
    }//ends marketItem

    class userAcc {
        constructor(balance, cart) {
            this.balance = balance;
            this.cart = cart;
        }

        IncBal(salePrice) {
            this.balance + salePrice;
        }

        DecBal(salePrice) {
            this.balance - salePrice;
        }

        CountItem(name) {
            let count = 0;
            for (index of cart) {
                if (index.name === name) {
                    count++;
                }
            }
            return count;
        }

        PriceAvg(name) {
            let avg = 0;
            let total = 0;
            let count = CountItem(name);
            for (index of cart) {
                if (index.name === name) {
                    total = total + index.price;
                }
            }
            avg = total / count
        }
    } //end UserAcc Class

    var user = new UserAcc;







    return {
        user: user

    }

}]);
