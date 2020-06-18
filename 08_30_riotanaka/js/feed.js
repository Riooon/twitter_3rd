$(".tweet").on("click", function(){
    $(".popup").fadeIn();
});

$(".popup-top i").on("click", function(){
    $(".popup").fadeOut();
});

// $(".popup-middle textarea").focus();

$(".settings-action").on("click", function(){
    $(".settings").css("display", "block");
});
$(".settings-end").on("click", function(){
    $(".settings").css("display", "none");
});