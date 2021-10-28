//animation on scrolll
window.addEventListener("load", function(){
    AOS.init();

    //page lodaer
    document.querySelector(".page-loder").classList.add("fade-out");
    setTimeout(function(){
        document.querySelector(".page-loder").style.display="none";
    },600);
});
// toggle nav
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}
// close nav
document.addEventListener("click", function(event){
    if(event.target.closest(".nav-item")){
        toggleNav();
    }
})
//sticky
window.addEventListener("scroll", function(){
    if(this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky");
    }else{
        document.querySelector(".header").classList.remove("sticky");
    }
})
//menu tabs
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(event){
    if(event.target.classList.contains("menu-tab-item") && !event.target.classList.contains("active")){
        const target = event.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        event.target.classList.add("active")

        //content toggle
        const menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");


        AOS.init();
    }
})
