function iniciarSesion(){
	if(document.getElementById("elusuario")){
		if(document.getElementById("elpassword")){
			var usuario = document.getElementById("elusuario").value;
			var password = document.getElementById("elpassword").value;
			if(usuario=="samuel" && password=="123"){
				alert("Bienvenido "+usuario);
				window.location="usuario.html?Samuel";
				// location.replace("usuario.html");
			}else if (usuario=="admin" && password=="admin"){
				alert("Bienvenido "+usuario);
					window.location="admin/usuario.html?admin"
				// location.replace("usuario.html");
			} else{
				alert("El usuario o password no es correcto");
			}
		}
	}
}

function escribir1(){
var paramstr = window.location.search.substr(1);
var paramarr = paramstr.split ("?");
	

	document.getElementById('tex').innerHTML= paramarr;
var params = {};

for ( var i = 0; i < paramarr.length; i++) {
    var tmparr = paramarr[i].split("=");

    params[tmparr[0]] = tmparr[1];

}
if (params['variable']) {
   console.log('El valor del parámetro variable es: '+params['variable']);
} else {
   console.log('No se envió el parámetro variable');
}
function escribir(){
	var nombre = iniciarSesion().usuario;
	alert(nombre)
	}
 }

function registrarme(){
	var nombre = document.getElementById('nombre').value;
	if ( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ){
		alert('Debe llenar el campo de Nombre.')
		return false
	}
	var contraseña1 = document.getElementById("contras").value;
	var contraseña2 = document.getElementById("contras2").value;
	if( contraseña1 == null || contraseña1.length == 0 || /^\s+$/.test(contraseña1) ){
		alert('Debe llenar el campo de contraseña.')
		return false
	}else if( contraseña2 == null || contraseña2.length == 0 || /^\s+$/.test(contraseña2) ){
		alert('Debe llenar el campo de confirmar contraseña.')
		return false
	}
	if (contraseña1==contraseña2){

	}else{
		alert("contraseña no coiciden")
		return false
	}
	var correo = document.getElementById("correo").value    	
	var correo1 = document.getElementById("correo1").value;
	if ( correo == null || correo.length == 0 || /^\s+$/.test(correo) ){
		alert('Debe llenar el campo de correo electronico.')
		return false
	}else if ( correo1 == null || correo1.length == 0 || /^\s+$/.test(correo1) ){
		alert('Debe llenar el campo de Confirmar correo electronico.')
		return false
	}
	if(correo==correo1){
		alert("Hemos enviado un correo de confirmacion a tu correo electronico.")
		 location.replace("iniciosesion.html")
		limpiarFormulario1();
	}else{
		alert("El correo electronico no coinciden")
		return false
	}
}
function limpiarFormulario1(){
  document.getElementById('nombre').value="";
  document.getElementById('correo').value="";
  document.getElementById('correo1').value="";
  document.getElementById('contras').value="";
  document.getElementById('contras2').value="";
}
function habilitarFormRegistro(){
  document.getElementById("oculto").style.display = "block";
  document.getElementById("derechos").style.display = "none";
}

function deshabilitarFormRegistro(){
  document.getElementById("oculto").style.display = "none";
  document.getElementById("derechos").style.display = "block";
}





function categorias() {
	categoria = document.getElementById("categoria").value;
	descripcion = document.getElementById("descripcion").value;
	if( categoria == null || categoria.length == 0 || /^\s+$/.test(categoria) ){
		alert('Debe escribir una categoria')
		return false
	}else if ( descripcion == null || descripcion.length == 0 || /^\s+$/.test(descripcion) ){
		alert('Debe escribir una breve descripcion')
		return false
	}else{
		registrarCategoria();
		limpiarFormulario3();
	}
}
function registrarCategoria(/*boton = ""*/){
	//alert(boton);
	//if(boton == ""){
	    var categoria = document.getElementById('categoria').value;
	    var descripcion = document.getElementById('descripcion').value;
	    var filaNueva = document.createElement("TR");//creando una nueva fila
	    filaNueva.innerHTML += "<td>" + contarFilas() + "</td> <td>"+categoria+"</td><td style='text-align:justify;'><p>" + descripcion+"</p></td><td><button onclick='eliminarFila(this)'><input type='button' value='Eliminar';></button><button onclick='editar2(this)'><input type='button' value='editar'></button></td>";
	    document.getElementById("tbody").appendChild(filaNueva);
	/*}else{
		alert(boton)
		fila = boton.parentNode.parentNode;
		fila.childNodes[3].innerHTML = document.getElementById('categoria').value;
		fila.childNodes[5].innerHTML = document.getElementById('descripcion').value;
		document.getElementById("guardar").setAttribute("onclick","categorias()");
		limpiarFormulario3();
	}*/

}
function editar(boton){
	nodo = boton.parentNode.parentNode;//la fila TR donde se encuentra el boton
	//nodo = nodo.childNodes[1].textContent;
	document.getElementById('categoria').value = nodo.childNodes[3].textContent;
	document.getElementById('descripcion').value = nodo.childNodes[5].textContent;
	//document.getElementById("guardar").setAttribute("onclick","registrarCategoria('"+boton+"')");
	
	eliminarFila(boton);
	
		
    //nodo.parentNode.removeChild(nodo);
}

function editar2(boton){
	nodo = boton.parentNode.parentNode;//la fila TR donde se encuentra el boton
	//nodo = nodo.childNodes[1].textContent;
	document.getElementById('categoria').value = nodo.childNodes[2].textContent;
	document.getElementById('descripcion').value = nodo.childNodes[3].textContent;
	//document.getElementById("guardar").setAttribute("onclick","registrarCategoria('"+boton+"')");

	eliminarFila(boton);
	
		
    //nodo.parentNode.removeChild(nodo);
}
function cancelar(boton){
	nodo = boton.parentNode.parentNode;
	var categori = nodo.childNodes[2].textContent;
	var descripcio = nodo.childNodes[3].textContent;
}
function cancelar2(boton){
	contenido = cancelar(boton)
	var filaNueva = document.createElement("TR");
	filaNueva.innerHTML += "<td>" + contarFilas() + "</td> <td>"+categori+"</td><td style='text-align:justify;'><p>" + descripcio+"</p></td><td><button onclick='eliminarFila(this)'><input type='button' value='Eliminar';></button><button onclick='editar2(this)'><input type='button' value='editar'></button></td>";
	    document.getElementById("tbody").appendChild(filaNueva);
}
function contarFilas(){
  var filas = document.getElementById("tabla").getElementsByTagName("tr");
  return filas.length;
}

function enumerarFilas(){
  nfilas = contarFilas();
  for (var y = 0; y < nfilas; y++){
    tabla = document.getElementById("tabla");
    if( y != 0){
      tabla.rows[y].cells[0].innerHTML = y;
    }
  }
}
function limpiarFormulario3(){
  document.getElementById('categoria').value="";
  document.getElementById('descripcion').value="";
}
function eliminarFila(boton){
    nodo = boton.parentNode.parentNode;//la fila TR donde se encuentra el boton
    nodo.parentNode.removeChild(nodo);
    enumerarFilas();
}
function eliminarFila1(boton){
    nodo = boton.parentNode.parentNode;//la fila TR donde se encuentra el boton
    nodo.parentNode.removeChild(nodo);
}

function correoe(){
	email = document.getElementById("email").value;
	email1 = document.getElementById("email1").value;
	if( email1 == null || email1.length == 0 || /^\s+$/.test(email1) ){
  		alert("Se debe llenar el campo de email")
	}else if( email == null || email.length == 0 || /^\s+$/.test(email) ){
  		alert("Se debe llenar el campo de confirmar email")
  	}else if ( email == email1){
		alert('Su correo ha sido cambiado exitosamente');
		location.replace("perfil.html");
		return true
	}else{
		alert('El correo no coinciden')
	}
}
function limpiarFormulario4(){
  document.getElementById('email').value="";
  document.getElementById('email1').value="";
}

function cambiar(){
		var contrasenaactual1 ='admin'||'abymayen';
		var contrasenaactual = document.getElementById("contra1").value;
		var nuevacontra = document.getElementById("contra2").value;
	    var confirmarcontra = document.getElementById("contra3").value;
	    if ( contrasenaactual == null || contrasenaactual.length == 0 || /^\s+$/.test(contrasenaactual) ){
	    	alert('llenar el campo de contraseña actual');
	    	return false;
	    }else if (contrasenaactual == contrasenaactual1){
	    	
	    }else{
	    	alert('su contraseña no coincide con la actual');
	    	return false;
	    } if (nuevacontra == null || nuevacontra.length == 0 || /^\s+$/.test(nuevacontra)){
	    	alert('llenar el campo de la nueva contraseña');
	    	return false;
	    }else if (confirmarcontra == null || confirmarcontra.length == 0 || /^\s+$/.test(confirmarcontra)){
	    	alert('llenar el campo de confirmar contraseña');
	    	return false
	    }
		if(contrasenaactual==nuevacontra){
				alert("su contraseña no puede ser igual que la actual");
				return false;
		}else if (nuevacontra==confirmarcontra){
	alert("su contraseña ha sido guardada exitosamente")
	limpiarFormulario5();
	location.replace("perfil.html")
	}else{
		alert("su contraseña no coincide con la nueva")
		return false;
	}
}
function limpiarFormulario5(){
  document.getElementById('contra1').value="";
  document.getElementById('contra2').value="";
  document.getElementById('contra3').value='';
}

function desactivar(){
	document.getElementById('ocultodesactivar').style.display = 'block';
}

function aceptar(){
	cancelar();
	alert("Cuenta desactivada exitosamente.")
	location.replace('../correo.html');
	location.replace("../inicio.html");

}

function cancelar(){
	document.getElementById('ocultodesactivar').style.display = 'none';
}

