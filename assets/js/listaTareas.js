//Tachar una tarea específica clickeandola
$("ul").on("click", "li", function(){
   $(this).toggleClass("completado");
});

//Al clickear la X se borra la tarea
$("ul").on("click", "span", function(evt){
    //luego de desvanecerse en medio segundo se elimina del documento
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    evt.stopPropagation();
});

//Añadir un listener al input de tareas
$("input[type='text']").on("keypress", function(evt){
     if (evt.which === 13) {
        //guardo en una variable el texto de la nueva tarea 
        var tareaTexto = $(this).val();
        //vacío el contenido del input
        $(this).val("");
        //crear un nuevo li y agregarlo al ul
        //append() -> adjuntar, en este caso un li a un ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + tareaTexto + "</li>");
        
     }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle(400);
});