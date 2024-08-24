$(".servicios").click(function(){
    $("#serviciosCont").toggle();
});

function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}


$(document).ready(function() {
    function checkWindowSize() {
        if ($(window).width() > 500) {
            $('.servicios').hide();
        } else {
            $('.servicios').show();
        }
    }

    // Ejecuta la función cuando el documento esté listo
    checkWindowSize();

    // Ejecuta la función cada vez que se redimensione la ventana
    $(window).resize(function() {
        checkWindowSize();
    });
});

$(document).ready(function() {
    function checkWindowSize() {
        if ($(window).width() <= 500) {
            $('.grupo_card').hide();
        } else {
            $('.grupo_card').show();
        }
    }

    // Ejecuta la función cuando el documento esté listo
    checkWindowSize();

    // Ejecuta la función cada vez que se redimensione la ventana
    $(window).resize(function() {
        checkWindowSize();
    });
});