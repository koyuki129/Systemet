class GuiShoppingCart{

    constructor() {
        //$('.start-page').hide();
       // $('.search-page').hide();
       // $('.cart-page').show();
        this.updateListOfProducts();
        $('.emptyCart').click((e) => {
            
        });
       
    }


    updateListOfProducts(){
        // loop thru items in thingsToBuy
        // then add their html-code to .cart-items

      //  let itemsHtml = "<h3>Rödvin</h3><button>Buy</button>";

        
       // $('.cart-items').html(itemsHtml);


    } 
}


let guiShoppingCart = new GuiShoppingCart();