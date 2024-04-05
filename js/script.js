// ============ 1 For Toggle Button Show Or Hide ======== //
function togglebtn(){
    document.getElementById("toggleButton").classList.toggle("icon");
    document.getElementById("menuCollapse").classList.toggle("menuToggle");
}

// ============ 2 On Scroll Styling ======== //
window.addEventListener('scroll', function (){
    // For Navigation Styling  Background Color Appear//
    let navbar = document.querySelector('nav');
    if(window.pageYOffset > 50 ){
        navbar.classList.add('stick');
    }else{
        navbar.classList.remove('stick');
    }
    
    // For Menu Bar Fixed On Scroll
    let menuBar = document.querySelector('.menu-bar'); 
    if(window.pageYOffset > 50){
        menuBar.classList.add('stick');
    }else{
        menuBar.classList.remove('stick');
    }
});

// ============ 3 menu Anchor Active When We Click ON That ======= //
function home(){
    document.getElementById("homeLia").classList.add("active");
    document.getElementById("aboutLia").classList.remove("active");
    document.getElementById("artistLia").classList.remove("active");
    document.getElementById("scheduleLia").classList.remove("active");
    document.getElementById("pricingLia").classList.remove("active");
    document.getElementById("contactLia").classList.remove("active");
}

function about(){
    document.getElementById("aboutLia").classList.add("active");
    document.getElementById("artistLia").classList.remove("active");
    document.getElementById("scheduleLia").classList.remove("active");
    document.getElementById("pricingLia").classList.remove("active");
    document.getElementById("contactLia").classList.remove("active");
    document.getElementById("homeLia").classList.remove("active");
}

function artist(){
    document.getElementById("artistLia").classList.add("active");
    document.getElementById("scheduleLia").classList.remove("active");
    document.getElementById("pricingLia").classList.remove("active");
    document.getElementById("contactLia").classList.remove("active");
    document.getElementById("homeLia").classList.remove("active");
    document.getElementById("aboutLia").classList.remove("active");
}

function schedule(){
    document.getElementById("scheduleLia").classList.add("active");
    document.getElementById("pricingLia").classList.remove("active");
    document.getElementById("contactLia").classList.remove("active");
    document.getElementById("artistLia").classList.remove("active");
    document.getElementById("aboutLia").classList.remove("active");
    document.getElementById("homeLia").classList.remove("active");
}

function pricing(){
    document.getElementById("pricingLia").classList.add("active");
    document.getElementById("scheduleLia").classList.remove("active");
    document.getElementById("contactLia").classList.remove("active");
    document.getElementById("homeLia").classList.remove("active");
    document.getElementById("aboutLia").classList.remove("active");
    document.getElementById("artistLia").classList.remove("active");
}

function contact(){
    document.getElementById("contactLia").classList.add("active");
    document.getElementById("homeLia").classList.remove("active");
    document.getElementById("aboutLia").classList.remove("active");
    document.getElementById("artistLia").classList.remove("active");
    document.getElementById("scheduleLia").classList.remove("active");
    document.getElementById("pricingLia").classList.remove("active");
}
// ============ 4 For Contact Section Form or Map Show Hide On Click ======== //
document.getElementById("formBtn").addEventListener("click", function() {
    document.getElementById("formBtn").classList.add("active-Btn");
    document.getElementById("mapBtn").classList.remove("active-Btn");
    
    document.getElementById("formWrapper").classList.remove("hidden");
    document.getElementById("mapWrapper").classList.add("hidden");
});

document.getElementById("mapBtn").addEventListener("click", function() {
    document.getElementById("mapBtn").classList.add("active-Btn");
    document.getElementById("formBtn").classList.remove("active-Btn");
    
    document.getElementById("mapWrapper").classList.remove("hidden");
    document.getElementById("formWrapper").classList.add("hidden");
});