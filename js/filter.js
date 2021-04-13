let tshirts = document.querySelector("input[name=tshirts]");
let hoodies = document.querySelector("input[name=hoodies]");
let accessories = document.querySelector("input[name=accessories]");
let miscs = document.querySelector("input[name=misc]");

tshirts.addEventListener('change', function() {
    let target = document.querySelectorAll(".t-shirt");

    if (this.checked) {
        for(let i =0; i<target.length; i++){
            target[i].style.display = "block"
        }
    } else {
        for(let i =0; i<target.length; i++){
            target[i].style.display = "none"
        }
    }
});

hoodies.addEventListener('change', function() {
    let target = document.querySelectorAll(".hoodie");
    if (this.checked) {
        for(let i =0; i<target.length; i++){
            target[i].style.display = "block"
        }
    } else {
        for(let i =0; i<target.length; i++){
            target[i].style.display = "none"
        }
    }
});

accessories.addEventListener('change', function() {
    let target = document.querySelectorAll(".accessory");
    if (this.checked) {
        for(let i =0; i<target.length; i++){
            target[i].style.display = "block"
        }
    } else {
        for(let i =0; i<target.length; i++){
            target[i].style.display = "none"
        }
    }
});

miscs.addEventListener('change', function() {
    let target = document.querySelectorAll(".misc");
    if (this.checked) {
        for(let i =0; i<target.length; i++){
            target[i].style.display = "block"
        }
    } else {
        for(let i =0; i<target.length; i++){
            target[i].style.display = "none"
        }
    }
});


