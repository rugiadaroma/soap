if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	// true for mobile device
	console.log("mobile device");
  }else{
	// false for not mobile device
	console.log("not mobile device");
	//location.replace('https://comboni.org');
	window.location.href = "./desktop.html";
  }