this.logueado = false;

$("#entrar").click(function() {
	if ($("#usuario").val() == "admin" && $("#Contraseña").val() == "123") {
		logueado = true;
		if (logueado == true) {
			{
				window.location = "./pages/inicio.html" 
			}
		}

	}else{
		Swal.fire('Usuario o contraseña invalidos. Favor intentelo de nuevo');
	}
});

$("#Galeria").click(function(){
window.location= "./Galeria.html"

});

$("#PDF").click(function(){
window.location= "./pdf.html"

});
$("#salir").click(function(){
window.location= "../index.html"

});


window.addEventListener('load',function(){
	$('.container').fadeIn(1000);
});
