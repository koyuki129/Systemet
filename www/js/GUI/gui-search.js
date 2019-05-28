class GuiSearch {
    constructor() {

        this.productsPerResultPage = 50;

        this.search = new Search();

        $('.searchbutton').click((e) => {
            let searchPhrase = $('#search').val();
            this.search.findProducts(searchPhrase);
            this.page = 1;
            this.totalPages = Math.ceil(this.search.searchResult.length / this.productsPerResultPage);
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
        let startIndexOfProducts = (this.page - 1) * this.productsPerResultPage;
        let endIndexOfProducts = startIndexOfProducts + 50;
        products = products.slice(startIndexOfProducts, endIndexOfProducts);
        $('.search-page .search-result').empty();
        for (let product of products) {
            // create a new jQuery html object
            let htmlForProduct = $(`
                <div class="product shadow p-3 mb-5 bg-white rounded">
                    <h2>${product.namn}</h2>
                    <h5>${product.namn2}</h5>
                    <h4>${product.prisinklmoms} SEK</h4>
                    <button class="btn btn-primary add float-right">Lägg till</button>
                    <hr>
                </div>
            `);
            // bind data to the html element
            htmlForProduct.data('product', product);
            // add the html element the DOM
            $('.search-page .search-result').append(htmlForProduct);
        }
        // html for navigating between result pages
        let start = Math.max(1, this.page - 5);
        let end = Math.min(this.totalPages, start + 9);
        let htmlForPageNav = $('<div class="search-result-page-nav"/>');
        for(let p = start; p <= end; p++){
            let el = $('<span>' + p + '</span>');
            this.addClickToPageNavEl(el, p);
            htmlForPageNav.append(el);
        }
        if(this.totalPages < 2){
            htmlForPageNav.empty();
            htmlForPageNav.append('<div>' + this.search.searchResult.length + " varor hittade.</div>");
        }
        else {
            htmlForPageNav.append('<div>' + this.search.searchResult.length + " varor hittade (" + this.totalPages + " sidor) </div>");
        }
        $('.search-page .search-result').append(htmlForPageNav);
    }

    addClickToPageNavEl(el, p){
        el.click(()=>{
            this.page = p;
            this.showResults(this.search.searchResult);
        });
    }

}




