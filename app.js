const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});

let wrap = document.querySelector('#wrapper');

//-------------------------ZMIENNE OBRAZKI W TLE----------------------------------------
	let url = "url('jpg/switch/jeden.png')";
	let url1 = "url('jpg/switch/dwa.png')";
	let url2 = "url('jpg/switch/trzy.png')";
	let obraz = document.getElementById('nazwy');

	function imgOne(){

		document.getElementById('nazwy').style.backgroundImage = url;
		obraz.setAttribute('style' , "background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0), #242125),url('jpg/switch/jeden.png') ");

	}

	function imgTwo(){

		document.getElementById('nazwy').style.backgroundImage = url1;
		obraz.setAttribute('style' , "background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0), #242125),url('jpg/switch/dwa.png') ");

	}

	function imgThree(){
		
		document.getElementById('nazwy').style.backgroundImage = url2;
		obraz.setAttribute('style' , "background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0), #242125),url('jpg/switch/trzy.png') ");

	}

	function backGrounds(){
		imgOne();
		 
		setInterval(imgTwo,5000);
		setInterval(imgThree,10000);
		setInterval(imgOne,15000);
	}
	backGrounds(); // odpalenie normalnie zmian tła

//-------------------------------------------------------------------------------------------