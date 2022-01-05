$(document).ready(function () {
    pl = 01110000;
    al = 01100001;
    sl = 01110011;
    wl = 01110111;
    ol = 01101111;
    rl = 01110010;
    dl = 01100100;
    var n = localStorage.getItem("couter");
    if (n == null) {
        n = 0;
    }
    if (n < 9){
        n++;
    }
    localStorage.setItem("couter", n);

    n = 8
    if (n == 1) {
        //P
        a([0,1,1,1,0,0,0,0]);
    }
    else if(n == 2){
        //PA
        a(["P", 0,1,1,0,0,0,0,1])
    }
    else if(n == 3){
        //PAS
        a(["P", "A", 0,1,1,1,0,0,1,1])
    }
    else if(n == 4){
        //PASS
        a(["P", "A", "S", 0,1,1,1,1,0,1,1])
    }
    else if(n == 5){
        //PASSW
        a(["P", "A", "S", "S", 0,1,1,1,0,1,1,1])
    }
    else if(n == 6){
        //PASSWO
        a(["P", "A", "S", "S", "W", 0,1,1,0,1,1,1,1])
    }
    else if(n == 7){
        //PASSWOR
        a(["P", "A", "S", "S", "W", "O", 0,1,1,1,0,0,1,0])
    }
    else if(n == 8){
        //PASSWORD
        a(["P", "A", "S", "S", "W", "O", "R", 0,1,1,0,0,1,0,0])
    }
    else if(n == 9){
        a(["P", "A", "S", "S", "W", "O", "R", "D"])
    }

});

function a(text){
    //append each value of text as an individual <p>
    for (var i = 0; i < text.length; i++) {
        $("#top").append("<p>" + text[i] + "</p>");
    }    
}