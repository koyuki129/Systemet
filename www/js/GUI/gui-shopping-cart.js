class GuiShoppingCart {

    constructor() {
        //$('.start-p((age').hide();
        // $('.search-page').hide();
        // $('.cart-page').show();
        this.cart = new ShoppingCart();
        this.updateListOfProducts();

        // När man skapar en eventhanterare så här:
        // $('.add').click((e) => {});
        // så gäller den bara element som redan finns i DOM:en

        // Gör man istället så här
        // $(document).on('click', '.add', (e) => {});
        // gäller det alla KOMMANDE/ej än existerande element också


        $('.emptyCart').click((e) => {
            this.cart.emptyCart();
        });

        $(document).on('click', '.add', (e) => {
            let theButtonClicked = $(e.currentTarget);
            let product = theButtonClicked.parents('.product').data('product');
            this.cart.add(product, 1);
            this.updateListOfProducts();
        });
        $(document).on('click', '.remove', (e) => {
            let theButtonClicked = $(e.currentTarget);
            let row = theButtonClicked.parents('tr');
            let product = row.data('product');
            this.cart.remove(product);
            this.updateListOfProducts();
        });
    
    }


    updateListOfProducts() {
        // loop thru items in thingsToBuy
        // then add their html-code to .cart-items

        //  let itemsHtml = "<h3>Rödvin</h3><button>Buy</button>";

        // $('.cart-items').html(itemsHtml);

        let rows = this.cart.overviewOfCart();
        let html = $(`
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
                </tbody>
            </table>
        `);
        for(let row of rows){
            let productRow = $(`
                <tr>
                    <td>${row.product.namn}</td>
                    <td><input type="number" value="${row.quantity}"></td>
                    <td>${row.rowSum}</td>
                    <td><button class="btn btn-primary remove">Ta bort</td>
                </tr>
            `);
            productRow.data('product', row.product);
            html.append(productRow);
        }
        $('.cart-items').html(html);

    }

}
