$("#header-picture").ready(function(){
    $("#header-picture").click(function(){
        $(this).hide();
    });
});

$("#button").ready(function(){
    $("#button").click(function(){
        $(this).text("Thank you for visiting our website!");
    });
});

$(".list-item").ready(function(){
    $(".list-item").hover(function(){
        $(this).css("background-color", "#900000");
    });
});

$("#subheader").ready(function(){
    $("#subheader").click(function(){
        $(this).fadeOut();
    });
});

$("#description").ready(function(){
    $("#description").click(function(){
        $(this).css("font-size", "24px");
    });
});

$("#description").ready(function(){
    $("#description").click(function(){
        $("#description-2").fadeIn();
    });
});

$(".list-item").ready(function(){
    $(".list-item").hover(function(){
        $(this).css("color", "white");
    });
});
