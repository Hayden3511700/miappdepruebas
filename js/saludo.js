let logueado = localStorage.getItem("contador2")
let usua_conect = localStorage.getItem("nombre")
document.getElementById('usuario').innerHTML = usua_conect;

if (logueado < 1) {
		(async () => {
			const {value: nombre} = await Swal.fire({
				title: "Bienvenido a mi portafolio web",
				confirmButtonText: 'Realizado',
				footer: 'Puedes utilizar tu apodo',
				background: '#EDCB54',
				allowOutsideClick: false,
				allowEscapeKey: false,
				allowEnterKey: false,
				stopKeydownPropagation: false,
			
				// Agregamos opciones de texto
				input: 'text',
				inputPlaceholder:'¿Quíen eres?',
				inputValue: '',
				
				  customClass: {
					input: 'input-saludo'
				  } ,
			
				imageUrl: "movimiento.gif",
				imageWidth: 300,
				imageHeight: 100,
				imageAlt: 'Saludo'
			});
	
		Swal.fire({
			title: `Mucho gusto ${nombre}`,
			background: '#EDCB54',
		});
		
		let contador2 = 1
	
		localStorage.setItem("nombre", nombre)
		localStorage.setItem("contador2", contador2) 
		let usua_conect = localStorage.getItem("nombre")
		document.getElementById('usuario').innerHTML = 'Usuario activo: ' + usua_conect;

		})()
}

document.getElementById('usuario').innerHTML = 'Usuario activo: ' + usua_conect;
	

 


