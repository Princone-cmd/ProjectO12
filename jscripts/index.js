
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function () {
	const second = 1000;
	minute = second*60;
	hour = minute*60;
	day = hour*24;

	
	let bday = "July 06,2024 21:16:00",
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
			proceed = document.getElementById("proceedToPresentation"),
			content = document.getElementById("content");

			headline.innerText = "Happy Birthday\nCharan Cherry";
			headline.style.fontSize = "450%";
			headline.classList.add("type");

			countdown.style.display = "none";
			content.style.display = "block";
			proceed.disabled = true; 

			var fDura = 15 * 1000;
			var animationEnd = Date.now() + fDura;
			var defaults = { startVelocity: 20, spread: 360, ticks: 60, zIndex: 0, gravity: 0.1};

			let i = 60;
			var interval = setInterval(function() {
				
				var timeLeft = animationEnd - Date.now();
				proceed.innerText = "Wait ("+i+")";
				i = i-1;

				if (timeLeft <= 0) {
					proceed.disabled = false;
					proceed.innerText = "Continue";
					proceed.onclick = function(){
						location.replace("presentation.html");
					};
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




