if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	// true for mobile device
	console.log("Mobile device");

	//check orientation
	if (window.innerHeight < window.innerWidth) {
		// You are in landscape mode
		window.location.href = "./desktop.html";
	}

}else{
	// false for not mobile device
	console.log("Desktop device");

	//location.replace('https://comboni.org');
	window.location.href = "./desktop.html";
}