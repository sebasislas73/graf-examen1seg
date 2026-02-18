const image = document.getElementById("mainImage");

document.getElementById("xSmallBtn").addEventListener("click", function() {
    image.style.width = "75px";
});

document.getElementById("smallBtn").addEventListener("click", function() {
    image.style.width = "125px";
});

document.getElementById("mediumBtn").addEventListener("click", function() {
    image.style.width = "200px";
});

document.getElementById("largeBtn").addEventListener("click", function() {
    image.style.width = "275px";
});

document.getElementById("xLargeBtn").addEventListener("click", function() {
    image.style.width = "350px";
});
