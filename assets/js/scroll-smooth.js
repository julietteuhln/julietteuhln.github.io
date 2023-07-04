$(document).ready(function() {
		$('a[href^="#"]').on('click', function(e) { // Au clic sur la balise <a> ayant une valeur dans l'attribut href commençant par #
			e.preventDefault();
			var section = $(this).attr('href'); // variable ou est stockée la section ciblée
			var speed = 900; // variable ou est stockée la durée de l'animation en milliseconde
			$('html, body').animate( { scrollTop: $(section).offset().top-135 }, speed ); // lancement de l'animation qui scroll vers le haut de la section ciblée
	
		});
	});