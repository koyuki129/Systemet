new GuiSearch();
new GuiShoppingCart();

// Set the margin of main so that it is not hidden by header
// since the height of header is different depending on windows size
// to this when the page loads and on every resize

function addMarginToMain(){
    $('main').css("padding-top", $('header').height());
}

// on resize
$(window).resize(addMarginToMain);

function sleep(ms){
    return new Promise((res) => setTimeout(res, ms));
}

async function waitForImagesToLoad(){
    while(true){
        let images = $('img');
        let widths = [];
        images.each(function(){
            widths.push($(this).width());
        });
        if(!(widths.includes(0))){
            // Det finns inga bilder som är 0 pixlar breda
            // så alla har hunnit ladda.
            // Nu kan vi ropa på addMargin
            addMarginToMain();
        }
        await sleep(100);
    }
}

waitForImagesToLoad();