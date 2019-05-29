class GuiShoppingCart {

    constructor() {
        //$('.start-p((age').hide();
        // $('.search-page').hide();
        // $('.cart-page').show();
        window.cart = this.cart = new ShoppingCart();
        this.updateListOfProducts();
        $('.error').hide();
        $('.totPrice').text(this.cart.sumOfProducts())


        // När man skapar en eventhanterare så här:
        // $('.add').click((e) => {});
        // så gäller den bara element som redan finns i DOM:en

        // Gör man istället så här
        // $(document).on('click', '.add', (e) => {});
        // gäller det alla KOMMANDE/ej än existerande element också

        $(document).on('click', '.shoppingcart', function () {
            $('.cart-page').toggle();
            $(this).blur();
            window.scrollTo(0, 0);
        });

        $(document).on('click', '.add', (e) => {
            $('.cart-page').show();
            let theButtonClicked = $(e.currentTarget);
            let product = theButtonClicked.closest('.product').data('product');
            let quantityField = theButtonClicked.parent().parent().find('input');
            let quantity = quantityField.val() / 1;
            quantityField.val(1);
            this.cart.add(product, quantity);
            this.updateListOfProducts();
            if (product.iLager === 0) {
                $('.error').show();
                setTimeout(() => {
                    $('.error').fadeOut(1000);
                }, 3000);
            } else {
                $('.error').hide();
            }
            $('.totPrice').text(this.cart.sumOfProducts())

        });
        $(document).on('click', '.remove', (e) => {
            let theButtonClicked = $(e.currentTarget);
            let row = theButtonClicked.closest('tr');
            let product = row.data('product');
            this.cart.remove(product);
            this.updateListOfProducts();
            $('.totPrice').text(this.cart.sumOfProducts())
        });
        $(document).on('click', '.raise', (e) => {
            let theButtonClicked = $(e.currentTarget);
            let row = theButtonClicked.closest('tr');
            let product = row.data('product');
            this.cart.raiseQuantityByOne(product);
            this.updateListOfProducts();
            $('.totPrice').text(this.cart.sumOfProducts())
        });
        $(document).on('click', '.lower', (e) => {
            let theButtonClicked = $(e.currentTarget);
            let row = theButtonClicked.closest('tr');
            let product = row.data('product');
            this.cart.lowerQuantityByOne(product);
            this.updateListOfProducts();
            $('.totPrice').text(this.cart.sumOfProducts())
        });
        $(document).on('change', 'td input', (e) => {
            let theSubmitted = $(e.currentTarget);
            let row = theSubmitted.closest('tr');
            let product = row.data('product');
            this.cart.editQuantity(product, theSubmitted.val() / 1);
            this.updateListOfProducts();
            $('.totPrice').text(this.cart.sumOfProducts())
        });

        $(document).on('click', '.emptycart button', (e) => {
            this.cart.emptyCart();
            $('.totPrice').text(this.cart.sumOfProducts())
            this.updateListOfProducts();
        });

        $('.message').html(`<div class="goodbye alert alert-success" role="alert">
            <h4 class="alert-heading">Varukorgen är tom</h4>
            </div></p>`)

        $(document).on('click', '.checkout button', (e) => {
            $('.receipt').html(`<div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Tack för din beställning!</h4>
            <p>Dina varor kommer att anlända inom 3 arbetsdagar. Tänk på att varor som inte finns i lager kan ta upp till en vecka att anlända. </p>
             Ditt total pris är: ${this.cart.sumOfProducts() + " SEK"}</div></p>`);
            if (this.cart.thingsToBuy <= 0) {
                $('.receipt').hide();
            } else {
                $('.receipt').show();
            }

            setTimeout(function () { $('.receipt').fadeOut(); }, 5000);

            this.cart.checkout();
            this.updateListOfProducts();

            $('.totPrice').text(this.cart.sumOfProducts())

        });
    }


    updateListOfProducts() {
        // loop thru items in thingsToBuy
        // then add their html-code to .cart-items

        //  let itemsHtml = "<h3>Rödvin</h3><button>Buy</button>";

        // $('.cart-items').html(itemsHtml);

        let rows = this.cart.overviewOfCart();
        $('.shoppingcart .number-of-items').text(rows.length);

        if (rows.length > 0) {
            $('.empty-cart-alert').hide();
        }
        else {
            $('.empty-cart-alert').show();
        }

        let html = $(`
            <table class="cart-items table">
                <thead>
                    <tr>
                    <th scope="col"><h2>Produkt</h2></th>
                    <th scope="col"><h2>Antal</h2></th>
                    <th scope="col"><h2>Summa</h2></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        `);
        for (let row of rows) {
            let productRow = $(`
                <tr>
                    <td>${row.product.namn}</td>
                    <td>
                        <button class="btn btn-primary lower"> - </button>
                       <input type="number" class="inputNumber" value="${row.quantity}">
                        <button class="btn btn-primary raise"> + </button>
                    </td>
                    <td>${this.cart.getRowSum(row)}</td>
                    <td><button class="btn btn-primary remove">Ta bort</button></td>
                </tr>
            `);
            productRow.data('product', row.product);
            html.append(productRow);
        }
        $('.cart-items').html(html);

    }

}