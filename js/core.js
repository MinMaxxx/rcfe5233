
function hideNotice(){
    document.getElementById("notice").style.display = "none";
}

function menu(){
    let state = document.getElementById("navbar-list").style;
    if(state.display === "block"){
        state.display = "none";
    } else {
        state.display = "block";
    }
}

function qtyMinus(){
    let target = document.getElementById("qty");
    if(target.value <= 1){
        return;
    }
    target.value--;
}

function qtyPlus(){
    let target = document.getElementById("qty");
    if(target.value >= 99){
        return;
    }
    target.value++;
}

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    if(scrollPercentRounded > 50){
        document.getElementById("scrollTop").style.opacity = "1";
        document.getElementById("scrollTop").style.display = "block";
    } else {
        document.getElementById("scrollTop").style.opacity = "0";
        document.getElementById("scrollTop").style.display = "block";
    }
});

function scrollSmoothTo(elementId) {
    let element = document.getElementById(elementId);
    element.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
}
/*
*
$(document).ready(function() {

				$(window).scroll(function(e){
					var scrollTop = $(window).scrollTop();
					var docHeight = $(document).height();
					var winHeight = $(window).height();
					var scrollPercent = (scrollTop) / (docHeight - winHeight);
					var scrollPercentRounded = Math.round(scrollPercent*100);

					if(scrollPercentRounded<50) {
						$("#toTop").css({
							display:'block',
							opacity: 0
						});
					} else {
						$("#toTop").css({
							display:'block',
							opacity: 1
						});
					}
				});
});
* */

function profileSidebar(c){

    document.getElementById("profile-sidebar-details").classList.remove("profile-sidebar-active");
    document.getElementById("profile-sidebar-order-history").classList.remove("profile-sidebar-active");
    document.getElementById("details").style.display = "none";
    document.getElementById("order-history").style.display = "none";

    switch(c) {
        case "details": {
            document.getElementById("profile-sidebar-details").classList.add("profile-sidebar-active");
            document.getElementById("details").style.display = "block";
            break;
        }
        case "order-history": {
            document.getElementById("profile-sidebar-order-history").classList.add("profile-sidebar-active");
            document.getElementById("order-history").style.display = "block";
            break;
        }
        default: {
            break;
        }
    }
}