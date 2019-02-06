
const img = document.querySelectorAll(".success-img");

img.forEach((currentvalue) => {
    currentvalue.addEventListener("mouseover", (e) => {
        currentvalue.style.color = "blue";
        setTimeout(function() {
            e.target.style.color = "";
        }, 300);
    });
});