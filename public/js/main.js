

$(function () {
    $("#intro").on("click", function () {
        div = document.getElementById($(this).attr('id') + "Div");

        if(div.style.display === "none"){
            div.style.display = "block";
            $(this).attr("value", "<Intro>");
        }else{
            div.style.display = "none";
            $(this).attr("value", "<Intro>  </Intro>");
        }
    });
});
