document.addEventListener('DOMContentLoaded', function() {
    var rating = document.querySelectorAll(".btn");
    var rates = document.querySelector("#star");
    var h=document.querySelector(".hello")

    rating.forEach((rate) => {
        rate.addEventListener("click", () => {
            console.log(rates,h)
        });
    });
});


