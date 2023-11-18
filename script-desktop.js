window.onload = function(){

const scrollElement = document.getElementById('slider');
// scrollElement.scroll(0,0)
var calsec = 1
var oldposition = 0	//position of the scroll
// let coor = document.getElementById('coor');	
// coor.innerHTML="pos: 0" + " calsec: " + calsec;
let items = document.querySelectorAll('section');
// const pics = document.getElementsByClassName('imgsoap')
winWidth = window.outerWidth
winX = window.screenX + window.outerWidth;
totalWidth = winWidth * items.length    

function ts1() {
	//Logo
	anime({
		targets: '.fpart',
		opacity: 1,
		duration: 10000,
		delay: anime.stagger(100) // increase delay by 100ms for each elements.
	});
	//Text
	document.getElementById('textrugiada').style.display = 'block' 	
	const masks = ['r', 'u', 'g', 'i', 'a1', 'd', 'a2']
	masks.forEach((mask, index, el) => {
		const id = `#mask-${mask}` // Prepend #mask- to each mask element name
		let path = document.querySelector(id)
		const length = path.getTotalLength() // Calculate the length of a path
		path.style.strokeDasharray = length; // Set the length to stroke-dasharray in the styles
		path.style.strokeDashoffset = length; // Set the length to stroke-dashoffset in the styles
	})

  }

ts1()

var ts2 = anime.timeline({
	easing: 'easeOutElastic(1, .6)',
	duration: 5000,
	delay: 1000,
	autoplay: false,
});
	ts2.add({
		targets: '#img1_sec2',
		scale: 1.1
	})
var ts3 = anime.timeline({
        easing: 'easeOutElastic(1, .6)',
        duration: 3000, 
		delay: 1000,
        autoplay: false,
    });    
    ts3
	.add({
	  targets: '.imgpos3a',
	  translateY: '95vh',
	  opacity: 1
	})
	.add({
		targets: '.imgpos3b',
		translateY: '95vh',
		opacity: 1
	}, '-=2000')
	.add({
		targets: '.imgpos3c',
		translateY: '95vh',
		opacity: 1
	}, '-=2000')

var ts4 = anime.timeline({
		duration: 1000, 
		delay: 1000,
		autoplay: false,
	});
	ts4
	.add({
	  targets: '#img1_sec4',
	  scale: 1.1
  })
  .add({
	  targets: '#img1_sec4b',
	  translateY: '-20vh'
  	})

var ts5 = anime.timeline({
		easing: 'easeOutElastic(1, .6)',
		duration: 3000,
		delay: 1000,
		autoplay: false,
	});
	ts5.add({
		targets: '#img1_sec5',
		scale: 1.1
	  });	

var ts6 = anime.timeline({
		easing: 'easeOutElastic(1, .6)',
		duration: 3000,
		delay: 1000,
		autoplay: false,
	});
	ts6.add({
		targets: '#img1_sec6',
		scale: 1.1,
		opacity: 1
	  });


var ts7 = anime.timeline({
		easing: 'easeOutElastic(1, .6)',
		duration: 3000,
		delay: 1000,
		autoplay: false,
	});
	ts7.add({
		targets: '#img1_sec7',
		scale: 1.1,
		opacity: 1
	  });

var ts8 = anime.timeline({
		easing: 'easeOutElastic(1, .6)',
		duration: 3000,
		delay: 1000,
		autoplay: false,
	});
	ts8.add({
		targets: '#img1_sec8',
		scale: 1.1,
		opacity: 1
	  });

var ts9 = anime.timeline({
		easing: 'easeOutElastic(1, .6)',
		duration: 3000,
		delay: 1000,
		autoplay: false,
	});
	ts9.add({
		targets: '#img1_sec9',
		scale: 1.1,
		opacity: 1
	  });

var ts10 = anime.timeline({
		easing: 'easeOutElastic(1, .6)',
		duration: 3000,
		delay: 1000,
		autoplay: false,
	});
	ts10.add({
		targets: '#img1_sec10',
		scale: 1.1,
		opacity: 1
	  });

var ts11 = anime.timeline({
		easing: 'easeOutElastic(1, .6)',
		duration: 3000,
		delay: 1000,
		autoplay: false,
	});
	ts11.add({
		targets: '#img1_sec11',
		scale: 1.1,
		opacity: 1
	  });

var ts12 = anime.timeline({
		easing: 'easeOutElastic(1, .6)',
		duration: 3000,
		delay: 1000,
		autoplay: false,
	});
	ts12.add({
		targets: '#img1_sec12',
		scale: 1.1,
		opacity: 1
	  });	  
var ts13 = anime.timeline({
		easing: 'easeOutElastic(1, .6)',
		duration: 3000,
		delay: 1000,
		autoplay: false,
	});
	ts13.add({
		begin: function(anim) {
			document.getElementById('textbox').style.display = 'block' 
			// Animation L'amore fa belle tutte le cose
			const masks = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25']
			masks.forEach((mask, index, el) => {
				const id = `#mask-${mask}` // Prepend #mask- to each mask element name
				let path = document.querySelector(id)
				const length = path.getTotalLength() // Calculate the length of a path
				path.style.strokeDasharray = length; // Set the length to stroke-dasharray in the styles
				path.style.strokeDashoffset = length; // Set the length to stroke-dashoffset in the styles
			})
		  }
	  });	
var ts14 = anime.timeline({
		easing: 'easeOutElastic(1, .6)',
		duration: 3000,
		delay: 1000,
		autoplay: false,
	});
	ts14.add({
		targets: '#img1_sec14',
		opacity: 1,
		scale: 6,
		rotate: '1turn'
	  });	


// Keypress listener
document.addEventListener('keydown', (event) => {
	const horizontalScrollPosition = scrollElement.scrollLeft;
	var name = event.key;
	var code = event.code;
	console.log(`Key pressed ${name} \r\n Key code value: ${code}`);
	var timer = null;
    if(timer !== null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(function() {	
		if(name == "ArrowRight" && calsec < items.length){
			calsec = calsec + 1;	
			doanimation(calsec)
			console.log('do ani')
		}else if(name == "ArrowLeft" && calsec > 1){
			calsec = calsec - 1;
			doanimation(calsec)
			console.log('do ani')
		}
		// coor.innerHTML="pos: " + horizontalScrollPosition + " calsec: " + calsec;
	}, 1000);
  }, false);


// Scroll listener
// var timer = null;
// scrollElement.addEventListener('scroll', function () {
//     const horizontalScrollPosition = scrollElement.scrollLeft;
//     var actsec = scrollElement.scrollLeft / winWidth
//     // console.log('scrolling', actsec)   
//     if(timer !== null) {
//         clearTimeout(timer);        
//     }
//     timer = setTimeout(function() {
// 		if (horizontalScrollPosition > oldposition){ // moving right
// 			oldposition = horizontalScrollPosition;
// 			calsec = calsec + 1;	
// 		}else{
// 			oldposition = horizontalScrollPosition;
// 			calsec = calsec - 1;
// 		}
// 		coor.innerHTML="pos: " + horizontalScrollPosition + " calsec: " + calsec;
//         doanimation(calsec)
//     }, 150);
// })

const doanimation = (sec) => {
    console.log('in function sec: ', sec)
    if (sec == 1){
		ts1()
    } else if (sec == 2){
        ts2.play()
		//reset logo of section 1
		elefpart = document.querySelectorAll('.fpart')
		elefpart.forEach(ele => {
			ele.style.opacity = 0
		});
		document.getElementById('textrugiada').style.display = 'none'
    } else if (sec == 3){ 
        ts3.play()
    } else if (sec == 4){
        ts4.play() 
    } else if (sec == 5){  
        ts5.play()
    } else if (sec == 6){ 
        ts6.play()
    } else if (sec == 7){
        ts7.play()     
    } else if (sec == 8){ 
        ts8.play()     
    } else if (sec == 9){
        ts9.play()     
    } else if (sec == 10){ 
        ts10.play()      
    } else if (sec == 11){ 
        ts11.play()  
    } else if (sec == 12){
        ts12.play()
		//reset sec 13
		document.getElementById('textbox').style.display = 'none'
		ts13.seek(0)
	} else if (sec == 13){
        ts13.play()
	} else if (sec == 14){
        ts14.play()
		//reset sec 13
		document.getElementById('textbox').style.display = 'none'
		ts13.seek(0)
    } else {
        console.log('do nothing')
    }
    
}


doanimation(1)

}