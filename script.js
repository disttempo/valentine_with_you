$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_accept = $("#accept");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_accept.click( function() {
        open();
        alert('Tu siguiente respuesta será aceptando ser mi novio. Gracias por aceptar, mi amor (No te di más opciones). Te quiero');
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
   
});