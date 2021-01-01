(function() {
	var arrow = document.getElementById('arrow');
	var secondBlock = document.getElementById('secondblock');

	var scroll = function (elementY, duration) { 
		var startingY = window.pageYOffset;
		var diff = elementY - startingY;
		var start;

		window.requestAnimationFrame(function step(timestamp) {
			if (!start) {
				start = timestamp;
			}
			var time = timestamp - start;
			var percent = Math.min(time / duration, 1);

			window.scrollTo(0, startingY + diff * percent);

			if (time < duration) {
				window.requestAnimationFrame(step);
			}
		})
	}
	
	arrow.addEventListener('click', function() {
		scroll(secondBlock.offsetTop, 300);
	})

})();



(function() {

	var container = document.getElementById('cookie');
	var button = document.getElementById('cookie-button');
	var body = document.querySelector('body')
	var accepted = localStorage.getItem('cookie-accepted') === 'true';


	if (!accepted) {
		container.classList.remove('hidden');
	}

	function hide() {
		container.classList.add('hidden');
		sessionStorage.setItem('cookie-accepted', 'true')
	}


	button.addEventListener('click', function() {
		hide();
	})


	body.onscroll = function() {
	    hide();
	};


})();







