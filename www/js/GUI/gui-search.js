class GuiSearch {
    constructor(){

        this.search = new Search();

        $('.searchbutton').click((e) => {
            let searchPhrase = $('#search').val();
            this.search.findProducts(searchPhrase);
            this.showResults(this.search.searchResult);
        });

        // search on enter
        $('#search').keyup((e) => {
            if(e.which === 13){
                // you pressed enter
                $('.searchbutton').click();
            }
        });

    }

    showResults(products){
        $('.search-page').empty();
        for(let product of products){
            // create a new jQuery html object
            let htmlForProduct  = $(`
                <div class="product">
                    <h4>${product.namn}</h4>
                    <h5>${product.namn2}</h5>
                    <h4>${product.prisinklmoms}
                    <button class="btn btn-primary add">Lägg till</button>
                </div>
            `);
            // bind data to the html element
            htmlForProduct.data('product', product);
            // add the html element the DOM
            $('.search-page').append(htmlForProduct);
        }
    }
}


    

