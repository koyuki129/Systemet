class GuiShoppingCart {

    constructor() {
        //$('.start-page').hide();
        // $('.search-page').hide();
        // $('.cart-page').show();
        this.cart = new ShoppingCart();
        this.updateListOfProducts();

        $('.emptyCart').click((e) => {
            this.cart.emptyCart();
        });

        $('.add').click((e) => {
            this.cart.add();
            this.updateListOfProducts();
        });
        
    }


    updateListOfProducts() {
        // loop thru items in thingsToBuy
        // then add their html-code to .cart-items

        //  let itemsHtml = "<h3>Rödvin</h3><button>Buy</button>";

        // $('.cart-items').html(itemsHtml);

        let rows = this.cart.overviewOfCart();
        let html = `
            <table class="cart-items table">
            <thead>
                <tr>
                <th scope="col">Produkt</th>
                <th scope="col">Antal</th>
                <th scope="col">Summa</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
        `;
        for(let row of rows){
            html += `
                <tr>
                    <td>${row.product.namn}</td>
                    <td><input type="number" value="${row.quantity}"></td>
                    <td>${row.rowSum}</td>
                    <td><button class="btn btn-primary">Ta bort</td>
                </tr>
            `;
        }
        html += `
                </tbody>
            </table>
        `;
        $('.cart-items').html(html);

    }

}
