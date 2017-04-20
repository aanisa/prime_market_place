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
          let price = this.price + utilities.randomNumber(.5,-.5);
          if (price > 9.99){
            price = 9.99
          }
          else if (price < .50){
            price = .50
          }
          this.price = price;
        }//ends changePrice
    }//ends marketItem

    class UserAcc {
        constructor(balance) {
            this.balance = balance;
            this.cart = [];
        }

        IncBal(salePrice) {
            this.balance += salePrice;
        }

        DecBal(salePrice) {
            this.balance -= salePrice;
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
            return avg;
        }
    } //end UserAcc Class

    const BALANCE = 100;

    //marketItems array of instantiated objects of class marketItem
    let marketItems = [];
    //market obect houses the array of marketItems is a portal
    let market = {};

    //instantiate a user with a balance
    let user = new UserAcc(BALANCE);

    //list of items which will be instantiated as objects of class marketItem
    let listOfItems = ['toaster', 'lamp', 'clock', 'blueRay player','apples','oranges','bananas','grapes','comic books','stuffed animals','jewelry','wine'];

    //for of loop which instantiates objects of class marketItem based on the listOfItems array
    for (index of listOfItems) {
      let newItem = new marketItem(index, utilities.randomNumber(9.99,.50));
      marketItems.push(newItem);
    }

    //adding merketItems array into market object
    market.marketItems = marketItems;


    let sellItem = (item) => {
      //balance + item.price (from MArketItems)
      user.IncBal(item.price);
      //remove from cart first instance of that item
      for (index of user.cart) {
          if (index === name) {
              user.cart.splice(index);
              return; // need to jump out of for of loop
          }//end if
      }//ends for loop
    }// end sellItem function

    let buyItem = (item) => {
      //balance - item.price (from MArketItems)
      user.DecBal(item.price);
      //add item to cart
      user.cart.push(item);
    }// end buyItem function

    return {
        user: user,
        market: market,
        sellItem: sellItem,
        buyItem: buyItem

    }

}]);
