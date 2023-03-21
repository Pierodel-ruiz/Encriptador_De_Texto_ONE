function copiarportapapeles(){
	let texto = document.getElementById("texto"); 
	texto.select();
	texto.setSelectionRange(0,99999);
	document.execCommand('copy');
	alert("TEXTO COPIADO");
}





function encriptar(){

	let texto = document.getElementById("texto").value;
	let tituloMensaje = document.getElementById("titulomensaje");
	let parrafo = document.getElementById("parrafomensaje");
	let muñeco = document.getElementById("muñeco");
	let mensaje = document.getElementById("mensaje");
	let copiar = document.getElementById("copiar");

	let textoCifrado = texto.replace(/e/gi, "enter")
	.replace(/i/gi, "imes")
	.replace(/a/gi, "ai")
	.replace(/o/gi, "ober")
	.replace(/u/gi, "ufat");

	if(texto.length != 0){

		document.getElementById("texto").value = textoCifrado;
		tituloMensaje.textContent = "";
		parrafo.textContent = "";
		mensaje.textContent = textoCifrado;
		muñeco.style.top = "0";
		muñeco.src = "Imagenes/text.png";
		copiar.style.display = "flex";

	}else{
		tituloMensaje.textContent = "Ningún mensaje fue encontrado";
		parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
		mensaje.textContent = "";
		muñeco.src = "Imagenes/Encriptador By Piero Delgado.png";
		copiar.style.display = "none";
		muñeco.style.top = "15%";
		alert("Debes Ingresar algun texto");

		
		

	}


}


function desencriptar(){

	let texto = document.getElementById("texto").value;
	let tituloMensaje = document.getElementById("titulomensaje");
	let parrafo = document.getElementById("parrafomensaje");
	let muñeco = document.getElementById("muñeco");
	let mensaje = document.getElementById("mensaje");

	let valorEstilo=0;

	let textoCifrado = texto.replace(/enter/gi, "e")
	.replace(/imes/gi, "i")
	.replace(/ai/gi, "a")
	.replace(/ober/gi, "o")
	.replace(/ufat/gi, "u");

	if(texto.length != 0){

		document.getElementById("texto").value = textoCifrado;
		muñeco.style.top = "15%";
		copiar.style.display = "none";
		tituloMensaje.textContent = "Texto Desencriptado con exito";

		var intervalo = setInterval(() => {
    	r=Math.floor(Math.random() * 255);
    	g=Math.floor(Math.random() * 255);
    	b=Math.floor(Math.random() * 255);
    	size=Math.floor(Math.random() * 50)+1;
 
   	 	tituloMensaje.style.color="rgb("+r+","+g+","+b+")";
    	tituloMensaje.classList.add([valorEstilo++]);
    	if (valorEstilo==4){

    		clearInterval(intervalo);
    		tituloMensaje.style.color = "#343A40";
    	} 
 
		}, 700);


		mensaje.textContent = "";
		parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
		muñeco.src = "Imagenes/Encriptador By Piero Delgado.png";

	}else{

		tituloMensaje.textContent = "Ningún mensaje fue encontrado";
		parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
		mensaje.textContent = "";
		copiar.style.display = "none";
		muñeco.style.top = "15%";
		muñeco.src = "Imagenes/Encriptador By Piero Delgado.png";
		alert("Debes Ingresar algun texto");

	}

}


