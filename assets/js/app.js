const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

function addActiveClass(item){
    item.classList.add("active");
}
function removeActiveClass(item){
    item.classList.remove("active");
}
function toggleActiveClass(item){
    item.classList.toggle("active");
}

selected.addEventListener("click",function(){
    toggleActiveClass(optionsContainer);
    toggleActiveClass(selected);
});

optionsList.forEach(function(item){
    item.addEventListener("click",function(){
        selected.querySelector(".selected-language").innerHTML = item.querySelector("label").innerHTML;
        removeActiveClass(optionsContainer);
        removeActiveClass(selected);
    });
});

const categoriesDropdown = document.querySelector(".categories-dropdown");
const categoryList = document.querySelector(".category-list");

categoriesDropdown.addEventListener("mouseover",function(item){
    addActiveClass(categoryList);
    addActiveClass(categoriesDropdown.querySelector(".nav-dropdown-text"));
})
categoriesDropdown.addEventListener("mouseleave",function(item){
    removeActiveClass(categoryList);
    removeActiveClass(categoriesDropdown.querySelector(".nav-dropdown-text"));
})

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar-nav");
const language = document.querySelector(".select-box");

hamburger.addEventListener("click",function(item){
    hamburger.classList.toggle("open");
    toggleActiveClass(nav);
    toggleActiveClass(language);
});