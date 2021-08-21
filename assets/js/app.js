const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click",function(){
    optionsContainer.classList.toggle("active");
});

optionsList.forEach(function(item){
    item.addEventListener("click",function(){
        selected.querySelector(".selected-language").innerHTML = item.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});