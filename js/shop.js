// URL Params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('product')
console.log(product);
let products = "";
// Fetch JSON
fetch('data/products.json')
    .then(response => response.json())
    .then(data => printProduct(data));
// Print Products
function printProduct(json){
    let data = json;
    console.log(data);
    for(let i = 0; i<data['products'].length; i++){
        console.log(data['products'][i]['category']);
        console.log(data['products'][i]['collection']);
        console.log(data['products'][i]['name']);
        console.log(data['products'][i]['img']);
        console.log(data['products'][i]['price']);

        let collection = data['products'][i]['collection'];
        collection = collection.replace(" ", "-");
        let show = "<div class='column-75-25 products "+data['products'][i]['category']+" "+collection+"' id='product"+i+"' style='display: block;'>";
        if(product != null){
            if(product === "t-shirts"){
                document.getElementById("tshirts").checked = true;
                document.getElementById("hoodies").checked = false;
                document.getElementById("accessories").checked = false;
                document.getElementById("misc").checked = false;
                if(data['products'][i]['category'] !== "t-shirt"){
                    show = "<div class='column-75-25 products "+data['products'][i]['category']+" "+collection+"' id='product"+i+"' style='display: none;'>";
                } else {
                    show = "<div class='column-75-25 products "+data['products'][i]['category']+" "+collection+"' id='product"+i+"' style='display: block;'>";
                }
            }
            if(product === "hoodies"){
                document.getElementById("tshirts").checked = false;
                document.getElementById("hoodies").checked = true;
                document.getElementById("accessories").checked = false;
                document.getElementById("misc").checked = false;
                if(data['products'][i]['category'] !== "hoodie"){
                    show = "<div class='column-75-25 products "+data['products'][i]['category']+" "+collection+"' id='product"+i+"' style='display: none;'>";
                } else {
                    show = "<div class='column-75-25 products "+data['products'][i]['category']+" "+collection+"' id='product"+i+"' style='display: block;'>";
                }
            }
            if(product === "accessories") {
                document.getElementById("tshirts").checked = false;
                document.getElementById("hoodies").checked = false;
                document.getElementById("accessories").checked = true;
                document.getElementById("misc").checked = false;
                if (data['products'][i]['category'] !== "accessory") {
                    show = "<div class='column-75-25 products " + data['products'][i]['category'] + " " + collection + "' id='product" + i + "' style='display: none;'>";
                } else {
                    show = "<div class='column-75-25 products " + data['products'][i]['category'] + " " + collection + "' id='product" + i + "' style='display: block;'>";
                }
            }
            if(product === "misc") {
                document.getElementById("tshirts").checked = false;
                document.getElementById("hoodies").checked = false;
                document.getElementById("accessories").checked = false;
                document.getElementById("misc").checked = true;

                if (data['products'][i]['category'] !== "misc") {
                    show = "<div class='column-75-25 products " + data['products'][i]['category'] + " " + collection + "' id='product" + i + "' style='display: none;'>";
                } else {
                    show = "<div class='column-75-25 products " + data['products'][i]['category'] + " " + collection + "' id='product" + i + "' style='display: block;'>";
                }
            }
        } else {
            show = "<div class='column-75-25 products "+data['products'][i]['category']+" "+collection+"' id='product"+i+"' style='display: block;'>";
        }
        products += "" +
            "" +
            show +
            "<img src='img/products/"+ data['products'][i]['img'] +".png' alt='"+data['products'][i]['name']+"'>" +
            "<p class='mont collection'>"+ data['products'][i]['collection'] +" collection</p>" +
            "<p class='mont'>"+ data['products'][i]['name'] +"</p>" +
            "<p class='mont'>&#36;"+ data['products'][i]['price'] +"</p>" +
            "<a href='viewproduct.html' class='btn btn-primary m-t-2 font-size-1'>VIEW</a>" +
            "</div>" +
            ""
        ;
    }
    document.getElementById("shoplist").innerHTML += products;
}