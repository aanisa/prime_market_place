marketApp.factory('MarketService', [function() {
  class utilities{
        constructor(){}
        static randomNumber (max,min){
          console.log((Math.random() * (9.99 - 0.5 ) + 0.5).toFixed(2));
          return ((Math.random() * (max - min ) + min).toFixed(2));
        }
    }
    const BALANCE = 100;
    const MAXPRICE = 9.99;
    const MINPRICE = 0.50;
    const MAXPRICECHANGE = 0.5;
    const MINPRICECHANGE = -0.5

    class marketItem{
        constructor(name, price){
          this.name = name;
          this.price = price;
        }//ends contructor

        changePrice(){
          let price = this.price + utilities.randomNumber(MAXPRICECHANGE,MINPRICECHANGE);
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
            this.cartSummary = [];
        }

        IncBal(salePrice) {
            this.balance += salePrice;
        }

        DecBal(salePrice) {
            this.balance -= salePrice;
        }

        CountItem(name) {
            let count = 0;
            for (index of this.cart) {
                if (index.name === name) {
                    count++;
                }
            }
            return count;
        }

        PriceAvg(name) {
            let avg = 0;
            let total = 0;
            let count = this.CountItem(name);
            console.log('count is:',count);
            for (index of this.cart) {
                if (index.name === name) {
                    total = total + index.price;
                }
            }
            if(count == 0) {
              avg = 0;
            } else {
              avg = total / count
            }
            console.log('average is: ',avg);
            return avg;
        }


    } //end UserAcc Class

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
      let newItem = new marketItem(index, utilities.randomNumber(MAXPRICE,MINPRICE));
      marketItems.push(newItem);
    }

    //adding merketItems array into market object
    market.marketItems = marketItems;
    //builds the original summary array
    //UpdateCartSummary();

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
      UpdateCartSummary();
    }// end sellItem function

    let buyItem = (item) => {
      //balance - item.price (from MArketItems)
      user.DecBal(item.price);
      //add item to cart
      user.cart.push(item);
      UpdateCartSummary();

    }// end buyItem function

    let UpdateCartSummary = () => {
      for (index of listOfItems) {
        let summaryObject = {};
        summaryObject.name = index;
        summaryObject.avgPrice = user.PriceAvg(index);
        summaryObject.count = user.CountItem(index);
        user.cartSummary.push(summaryObject);
      }
    }


    return {
        user: user,
        market: market,
        sellItem: sellItem,
        buyItem: buyItem,
        UpdateCartSummary: UpdateCartSummary


    }

}]);
