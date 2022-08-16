		//all
		function mudaFoto (foto) {
			document.getElementById("icone").src = foto;
		}
		//index
		function exibir (id) {
			document.getElementById(id).style.opacity = '75%'
		}
		//index
		function plus (but) {
			document.getElementById(but).style.opacity = '100%';
		}
		//marinha
		function aparecer (almi) {
			document.getElementById(almi).style.opacity = '100%';
			document.getElementById(almi).style.transition = '1s';
		}
		//marinha
		function sumir (almi) {
			document.getElementById(almi).style.opacity = '0%';
			document.getElementById(almi).style.transition = '0.2s';
		}
