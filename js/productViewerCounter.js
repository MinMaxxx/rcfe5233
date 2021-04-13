let productView = 10;

initializeProductView();

function initializeProductView(){
    let counter = document.getElementById("product-view-counter");
    counter.innerHTML = "<h3>&#128293; " + productView + " Viewing This Currently!</h3>";
    incrementProductViewCount(productView);
}

function incrementProductViewCount(){
    setInterval(function(){
        productView++;
        if((Math.floor(Math.random() * 101)) > 50 ){
            productView++;
        } else {
            // Realistic fake view count
            productView -= 2;
        }
        document.getElementById("product-view-counter").innerHTML = "<h3>&#128293; " + productView + " Viewing This Currently!</h3>";
        console.log(productView);
    },1000 * 1.25); // 1000 * seconds
}