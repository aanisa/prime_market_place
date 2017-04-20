var marketApp = angular.module('marketApp', []);

marketApp.factory('MarketService', [function() {
    const BALANCE = 100;

    //randomly generate a number, which will be used price in changePrice()
    class utilities {
        constructor() {}
        static randomNumber(max, min) {
            return Math.floor(Math.random() * (1 + max - min) + min);
        }
    }

    class marketItem {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        } //ends contructor

        changePrice() {
            let price = this.price + utilities.randomNumber(.5, -.5);
            if (price > 9.99) {
                price = 9.99
            } else if (price < .50) {
                price = .50
            }
            this.price = price;
        } //ends changePrice
    } //ends marketItem


    class UserAcc {
        constructor(balance) {
            this.balance = balance;
            this.cart = [];
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
            avg = total / count;
        }
    } //end UserAcc Class


    //create instance of UserAcc to return and make assesible to controllers
    let user = new UserAcc(BALANCE);


    let marketItems = [];
    let market = {};

    let listOfItems = ['apple'];
    for (index of listOfItems) {
        let newItem = new marketItem(index, utilities.randomNumber(9.99, .50));
        marketItems.push(newItem);
    }
    market.marketItems = mareketItems;


    let sellItem = (item) => {
        //balance + item.price (from MArketItems)
        user.balance += item;

        //remove from cart first instance of that item
        for (index of cart) {
            if (index === name) {
                cart.splice(index);
            }
        }

        // call this method     DecBal()
    }

    let buyItem = () => {

    }

    return {
        user: user,
        market: market,
        sellItem: sellItem,
        buyItem: buyItem

    }

}]);
