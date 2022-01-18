var slide = new Array("letrain.avif", "lescouloirpourallerowcendetente.avif", "lesapparta900eparmoisàpaname.avif", "lefantomdeheusslenfoiéderièreunevitre.avif");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}
setInterval("ChangeSlide(1)", 2000);