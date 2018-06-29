
$(function() {
    
    $(".site-title").fadeIn(1200);
    $(".site-title2").delay(1200).fadeIn(1000);
    $(".site-title3").delay(2200).fadeIn(1000);
    $(".site-title4").delay(3200).fadeIn(2000);
});

$("#submit").on("click",function(){
    alert("🧀!Warning!: Your computer is on the process of downloading an untrusted cheese folder.🧀");
});
$(".more").on("click",function() {
    prompt("What is the most popular cheese recipe in the U.S?   1.Macaroni and cheese 2.Cheese pizza 3. Cheese barger 4. Cheese Nachos");
});