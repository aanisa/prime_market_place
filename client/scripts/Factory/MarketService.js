var marketApp = angular.module('marketApp', []);

marketApp.Factory('MarketService', [function() {

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
