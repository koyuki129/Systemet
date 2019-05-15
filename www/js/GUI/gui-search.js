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
        let html = '<div>';
        for(let product of products){
            html += `
                <h4>${product.namn}</h4>
                <h4>${product.prisinklmoms}
                <button class="btn btn-primary">Lägg till</button>
            `
        }
        html += '</div>';
        $('.search-page').html(html);
    }
}


    

