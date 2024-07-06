
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function () {
	const second = 1000;
	minute = second*60;
	hour = minute*60;
	day = hour*24;

	
	let bday = "July 06,2024 12:29:40",
	countdown = new Date(bday).getTime(),
	x=setInterval(function () {
		let now = new Date().getTime(),
		distance = countdown - now;

		document.getElementById("days").innerText = Math.floor(distance/(day));
		document.getElementById("hours").innerText = Math.floor((distance%(day))/(hour));
		document.getElementById("minutes").innerText = Math.floor((distance%(hour))/(minute));
		document.getElementById("seconds").innerText = Math.floor((distance%(minute))/(second));

		document.getElementById("bodyID").classList.remove('animateMe');

		if (distance < 0) {
			let 
			headline = document.getElementById("headline"),
			countdown = document.getElementById("countdown"),
			content = document.getElementById("content");

			headline.innerText = "It's My Birthday";

			countdown.style.display = "none";
			content.style.display = "block";
			var fDura = 15 * 1000;
			var animationEnd = Date.now() + fDura;
			var defaults = { startVelocity: 20, spread: 360, ticks: 60, zIndex: 0,angle: 60, gravity: 0};

			var interval = setInterval(function() {
				var timeLeft = animationEnd - Date.now();

				if (timeLeft <= 0) {
					return clearInterval(interval);
				}

				var particleCount = 50 * (timeLeft / fDura);
				// since particles fall down, start a bit higher than random
				confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
				confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
			}, 250);

			clearInterval(x);
			
			/*document.getElementById("bodyID").classList.toggle('animateMe');
			
  			location.replace("presentation.html");*/
		}


	},0);}());




