$(document).ready(function () {
    $(".burger-icon").click(function () {
        $(this).toggleClass("active");
        $(".menu-items").toggleClass("active");
    });
});