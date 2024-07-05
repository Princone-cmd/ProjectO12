(function () {
	const second = 1000;
	minute = second*60;
	hour = minute*60;
	day = hour*24;

	
	let bday = "July 15,2024 00:00:00",
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
			clearInterval(x);

			countdown.style.display = "none";
			content.style.display = "block";

			/*document.getElementById("bodyID").classList.toggle('animateMe');
			
  			location.replace("presentation.html");*/
		}


	},0);

}());


