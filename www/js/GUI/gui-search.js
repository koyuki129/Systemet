class GuiSearch {
    constructor() {

        this.search = new Search();

        $('.searchbutton').click((e) => {
            let searchPhrase = $('#search').val();
            this.search.findProducts(searchPhrase);
            this.showResults(this.search.searchResult);
            // $('#search').val();
        });

        // search on enter
        $('#search').keyup((e) => {
            if (e.which === 13) {
                // you pressed enter
                $('.searchbutton').click();
            }
        });

        $('.bokstavsordning').click((e) => {
            let searchPhrase = $('#search').val();
            this.search.sortProductsByName(searchPhrase);
            this.showResults(this.search.searchResult);
        });

    }

    showResults(products) {
        $('.search-page .search-result').empty();
        for (let product of products) {
            // create a new jQuery html object
            let htmlForProduct = $(`
                <div class="product">
                    <h2>${product.namn}</h2>
                    <h5>${product.namn2}</h5>
                    <h4>${product.prisinklmoms}</h4>
                    <button class="btn btn-primary add float-right">Lägg till</button>
                </div>
            `);
            // bind data to the html element
            htmlForProduct.data('product', product);
            // add the html element the DOM
            $('.search-page .search-result').append(htmlForProduct);
        }
    }
}




