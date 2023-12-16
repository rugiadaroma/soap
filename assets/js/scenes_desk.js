window.onload = function() {
	var control = document.getElementById('control'); //element at 100vh
	var rect = control.getBoundingClientRect().top;	//get px of 100vh
	var winx = window.innerWidth
	var winh = window.innerHeight
	var winy = window.innerHeight * rect/winh	//get the ratio
	//vh is the corrected unit for mobile browser.
	let vh = winy * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

var controller = new ScrollMagic.Controller({
	vertical: true,
	refreshInterval: 0, // disable
});

// *********************************************
// ******    Section 01   *********************
// *********************************************
// background section 1
var tween1_1 = TweenMax.to(".sec01", 1, {backgroundColor: "#bee6f4",});
var scene1_1 = new ScrollMagic.Scene({
	triggerElement: ".sec01", 
	duration: winy, 
	offset: winy/2,
}).setTween(tween1_1)
.setPin('.sec01')
// .addIndicators({name: 'sec'})
.addTo(controller);

// Come la rugiada ...
var tween1_2 = TweenMax.to("#sec01_01", 1, {opacity: 1});
var scene1_2 = new ScrollMagic.Scene({
	triggerElement: "#sec01_01", 
	duration: winy/2, 
	offset: winy*.4,
}).setTween(tween1_1)
// .setPin("#sec01_01")
// .addIndicators({name: 'come...'})
.addTo(controller);

// Blue wave
var tween1_3 = TweenMax.to("#sec01_02", 1, {y: "-200%"});
var scene1_3 = new ScrollMagic.Scene({
	triggerElement: "#sec01_01", 
	duration: winy, 
	offset: winy*.4,
}).setTween(tween1_3)
// .addIndicators({name: 'blue wave'})
.addTo(controller);

// Logo
var timelinelogo = new TimelineMax()
var logoparts = document.getElementsByClassName('fpart');
//Equal Tween for all
// for(var i = 0; i < logoparts.length; i++){
// 	console.log(logoparts[i])
// 	timelinelogo.add(TweenMax.to(logoparts[i], .1, {opacity: 1}))
// }
//Unique Tween for each part
timelinelogo
	.fromTo(logoparts[2], .1, {opacity: 0},{opacity: 1})
	// .fromTo(logoparts[3], .1, {opacity: 0},{opacity: 1})
	// .fromTo(logoparts[4], .1, {opacity: 0},{opacity: 1})
	.fromTo(logoparts[6], .1, {opacity: 0},{opacity: 1})
	.fromTo(logoparts[7], .1, {opacity: 0},{opacity: 1})
	.fromTo(logoparts[8], .1, {opacity: 0},{opacity: 1}, '-=.1')
	.fromTo(logoparts[9], .1, {opacity: 0},{opacity: 1})
	.fromTo(logoparts[10], .1, {opacity: 0},{opacity: 1}, '-=.1')
	.fromTo(logoparts[11], .1, {opacity: 0},{opacity: 1})
	.fromTo(logoparts[12], .1, {opacity: 0},{opacity: 1}, '-=.1')
	.fromTo(logoparts[13], .1, {opacity: 0},{opacity: 1})
	.fromTo(logoparts[14], .1, {opacity: 0},{opacity: 1}, '-=.1')
	.fromTo(logoparts[15], .1, {opacity: 0},{opacity: 1})
	.fromTo(logoparts[16], .1, {opacity: 0},{opacity: 1}, '-=.1')
	.fromTo(logoparts[17], .1, {opacity: 0},{opacity: 1})
	.fromTo(logoparts[18], .1, {opacity: 0},{opacity: 1}, '-=.1')
	.fromTo(logoparts[19], .1, {opacity: 0},{opacity: 1})
	.fromTo(logoparts[20], .1, {opacity: 0},{opacity: 1}, '-=.1')
	.fromTo(logoparts[21], .1, {opacity: 0},{opacity: 1})
	.fromTo(logoparts[22], .1, {opacity: 0},{opacity: 1}, '-=.1')
	.fromTo(logoparts[23], .1, {opacity: 0},{opacity: 1})
	.fromTo(logoparts[24], .1, {opacity: 0},{opacity: 1}, '-=.1')
	.fromTo(logoparts[25], .1, {opacity: 0},{opacity: 1})
	.fromTo(logoparts[26], .1, {opacity: 0},{opacity: 1}, '-=.1')
	.fromTo(logoparts[27], .1, {opacity: 0},{opacity: 1})
	.fromTo(logoparts[28], .1, {opacity: 0},{opacity: 1}, '-=.1')
	.fromTo(logoparts[29], .1, {opacity: 0},{opacity: 1})
	.fromTo(logoparts[30], .1, {opacity: 0},{opacity: 1}, '-=.1')
	.fromTo(logoparts[33], .1, {opacity: 0},{opacity: 1})
	.fromTo(logoparts[34], .1, {opacity: 0},{opacity: 1}, '-=.1')
	.fromTo(logoparts[35], .1, {opacity: 0},{opacity: 1})
	.fromTo(logoparts[36], .1, {opacity: 0},{opacity: 1}, '-=.1')
	.fromTo(logoparts[37], .1, {opacity: 0},{opacity: 1})
	.fromTo(logoparts[5], .1, {opacity: 0},{opacity: 1}) //white background
	// .fromTo(logoparts[38], .1, {opacity: 0},{opacity: 1})
	//.fromTo(logoparts[31], .1, {opacity: 0},{opacity: 1}) //White letters
	//.fromTo(logoparts[32], .1, {opacity: 0},{opacity: 1}, '-=.1') //White R
var scenelogo = new ScrollMagic.Scene(
	{offset: 0,
	duration: winy, 
	tweenChanges: true
	})
	.setTween(timelinelogo)
	// .addIndicators({name: 'logo'})
	.addTo(controller);	

//Text Rugiada
const masks = ['r', 'u', 'g', 'i', 'a1', 'd', 'a2']
masks.forEach((mask, index, el) => {
	const id = `#mask-${mask}` // Prepend #mask- to each mask element name
	let path = document.querySelector(id)
	const length = path.getTotalLength() // Calculate the length of a path
	path.style.strokeDasharray = length; // Set the length to stroke-dasharray in the styles
	path.style.strokeDashoffset = length; // Set the length to stroke-dashoffset in the styles
})
var tween = new TimelineMax()
	.add(TweenMax.to('.textcontainer', .2, {opacity: 1})) 
	.add(TweenMax.to('#mask-r', .2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
	.add(TweenMax.to('#mask-u', .2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
	.add(TweenMax.to('#mask-g', .2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
	.add(TweenMax.to('#mask-i', .2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
	.add(TweenMax.to('#mask-a1', .2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
	.add(TweenMax.to('#mask-d', .2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
	.add(TweenMax.to('#mask-a2', .2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
var scene = new ScrollMagic.Scene({
	triggerElement: "#rugiadatext", 
	offset: 0,
	duration: winy, 
	tweenChanges: true
})
	.setTween(tween)
	// .addIndicators({name: 'Rugiada text'}) 
	.addTo(controller);


// *********************************************
// ******    Section 02   *********************
// *********************************************
// background section 2
var tween2_1 = TweenMax.to(".sec02", 1, {backgroundColor: "#c1d1ac",});
var scene2_1 = new ScrollMagic.Scene({
	triggerElement: ".sec02", 
	duration: winy, 
	offset: winy/2,
}).setTween(tween2_1)
// .setPin('.sec01')
// .addIndicators({name: 'sec 2'})
.addTo(controller);

// Green wave
var tween2_2 = TweenMax.to("#sec02_01", 1, {y: "-100%"});
var scene2_2 = new ScrollMagic.Scene({
	triggerElement: ".sec02", 
	duration: winy*1.5, 
	offset: 0,
}).setTween(tween2_2)
// .addIndicators({name: 'green wave'})
.addTo(controller);

//bold words
var timelineboldword1 = new TimelineMax()
	.add(TweenMax.to("#bold1", 1, {fontWeight: 'bold'}))
	.add(TweenMax.to("#bold2", 1, {fontWeight: 'bold'}))
	.add(TweenMax.to("#bold3", 1, {fontWeight: 'bold'}))
	.add(TweenMax.to("#bold4", 1, {fontWeight: 'bold'}))
	.add(TweenMax.to("#bold5", 1, {fontWeight: 'bold'}))
	.add(TweenMax.to("#bold6", 1, {fontWeight: 'bold'}))
var scene2_2 = new ScrollMagic.Scene({
	triggerElement: "#bold1", 
	duration: winy*1.5, 
	offset: 0,
}).setTween(timelineboldword1)
// .setPin('.sec01')
// .addIndicators({name: 'bold1'})
.addTo(controller);

// Move hands
var panPos = 100;
var tween2_3 = TweenMax.to("#imghands", 1, {x: -winx/2});
var scene2_3 = new ScrollMagic.Scene({
	triggerElement: ".img1", 
	duration: winy/2, 
	offset: 0,
}).setTween(tween2_3)
// .addIndicators({name: 'hands'})
.addTo(controller);


// *********************************************
// ******    Section 03   *********************
// *********************************************
// background section 3
var tween4_1 = TweenMax.to(".sec03", 1, {backgroundColor: "#fac7d0",});
var scene4_1 = new ScrollMagic.Scene({
	triggerElement: ".sec03", 
	duration: winy/2, 
	offset: winy/2,
}).setTween(tween4_1)
// .setPin('.sec01')
// .addIndicators({name: 'sec 3'})
.addTo(controller);

// pin title elaborazione
var scene3_2 = new ScrollMagic.Scene({
	triggerElement: ".imgelabor", 
	duration: winy, 
	offset: winy*.45,
})
.setPin('.imgelabor')
// .addIndicators({name: 'elaborazione'})
.addTo(controller);

// Pink wave
var tween3_2 = TweenMax.to("#sec03_01", 1, {y: "-60%"});
var scene3_2 = new ScrollMagic.Scene({
	triggerElement: ".sec03", 
	duration: winy, 
	offset: 0,
}).setTween(tween3_2)
// .addIndicators({name: 'green wave'})
.addTo(controller);

// Scale img mixer
var tween3_3 = TweenMax.to("#imgmixer", 1, {scale: 1.5});
var scene3_3 = new ScrollMagic.Scene({
	triggerElement: "#imgmixer", 
	duration: winy, 
	offset: 0,
}).setTween(tween3_3)
// .addIndicators({name: 'mixer'})
.addTo(controller);

// Scale img oil
var tween3_4 = TweenMax.to("#imgoil", 1, {scale: 1.3});
var scene3_4 = new ScrollMagic.Scene({
	triggerElement: "#imgoil", 
	duration: winy, 
	offset: 0,
}).setTween(tween3_4)
// .addIndicators({name: 'mixer'})
.addTo(controller);

// Scale img mold
var tween3_5 = TweenMax.to("#imgmolds", 1, {scale: 1.3});
var scene3_5 = new ScrollMagic.Scene({
	triggerElement: "#imgmolds", 
	duration: winy, 
	offset: 0,
}).setTween(tween3_5)
// .addIndicators({name: 'mixer'})
.addTo(controller);

// *********************************************
// ******    Section 04   *********************
// *********************************************
// background section 4
var tween3_1 = TweenMax.to(".sec04", 1, {backgroundColor: "#bee6f4",});
var scene3_1 = new ScrollMagic.Scene({
	triggerElement: ".sec04", 
	duration: winy/2, 
	offset: winy/2,
}).setTween(tween3_1)
// .setPin('.sec01')
// .addIndicators({name: 'sec 3'})
.addTo(controller);

//sapone miele
var tween3_2 = TweenMax.to("#imgsapmiele", 1, {scale: 1.3,});
var scene3_2 = new ScrollMagic.Scene({
	triggerElement: "#imgsapmiele", 
	duration: winy/2, 
	offset: 0,
}).setTween(tween3_2)
// .addIndicators({name: 'soap'})
.addTo(controller);

//sapone rosa
var tween3_3 = TweenMax.to("#imgsaprosa", 1, {scale: 1.3,});
var scene3_3 = new ScrollMagic.Scene({
	triggerElement: "#imgsaprosa", 
	duration: winy/2, 
	offset: 0,
}).setTween(tween3_3)
.addTo(controller);

//sapone karite
var tween3_4 = TweenMax.to("#imgsapkarite", 1, {scale: 1.3,});
var scene3_4 = new ScrollMagic.Scene({
	triggerElement: "#imgsapkarite", 
	duration: winy/2, 
	offset: 0,
}).setTween(tween3_4)
.addTo(controller);

//sapone argilla
var tween3_5 = TweenMax.to("#imgsapargilla", 1, {scale: 1.3,});
var scene3_5 = new ScrollMagic.Scene({
	triggerElement: "#imgsapargilla", 
	duration: winy/2, 
	offset: 0,
}).setTween(tween3_5)
.addTo(controller);

//sapone lavanda
var tween3_6 = TweenMax.to("#imgsaplavanda", 1, {scale: 1.3,});
var scene3_6 = new ScrollMagic.Scene({
	triggerElement: "#imgsaplavanda", 
	duration: winy/2, 
	offset: 0,
}).setTween(tween3_6)
.addTo(controller);

//sapone aloe
var tween3_7 = TweenMax.to("#imgsapaloe", 1, {scale: 1.3,});
var scene3_7 = new ScrollMagic.Scene({
	triggerElement: "#imgsapaloe", 
	duration: winy/2, 
	offset: 0,
}).setTween(tween3_7)
.addTo(controller);

//sapone latte
var tween3_8 = TweenMax.to("#imgsaplatte", 1, {scale: 1.3,});
var scene3_8 = new ScrollMagic.Scene({
	triggerElement: "#imgsaplatte", 
	duration: winy/2, 
	offset: 0,
}).setTween(tween3_8)
.addTo(controller);

//blue line
var tween3_9 = TweenMax.to("#sec04_01", 1, {y: winy*2.5, ease:Power1.easeInOut});
var scene3_9 = new ScrollMagic.Scene({
	triggerElement: "#sec04_01", 
	duration: winy*3.5, 
	offset: 0,
}).setTween(tween3_9)
.addTo(controller);

// *********************************************
// ******    Section 05   *********************
// *********************************************
// background section 5
var tween5_1 = TweenMax.to(".sec05", 1, {backgroundColor: "#c1d1ac",});
var scene5_1 = new ScrollMagic.Scene({
	triggerElement: ".sec05", 
	duration: winy, 
	offset: winy/2,
}).setTween(tween5_1)
// .setPin('.sec01')
// .addIndicators({name: 'sec 5'})
.addTo(controller);

var tween5_2 = TweenMax.to("#imgfoursoaps", 1, {scale: 1});
var scene5_2 = new ScrollMagic.Scene({
	triggerElement: "#imgfoursoaps", 
	duration: winy, 
	offset: 0,
}).setTween(tween5_2)
// .setPin('.sec01')
// .addIndicators({name: 'sopas'})
.addTo(controller);

//Text L'amore
const masks2 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25']
masks2.forEach((mask, index, el) => {
	const id = `#mask-${mask}` // Prepend #mask- to each mask element name
	let path = document.querySelector(id)
	const length = path.getTotalLength() // Calculate the length of a path
	path.style.strokeDasharray = length; // Set the length to stroke-dasharray in the styles
	path.style.strokeDashoffset = length; // Set the length to stroke-dashoffset in the styles
})
var tween5_3 = new TimelineMax()
	// .add(TweenMax.to('#mask-01', .2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
	// .add(TweenMax.to('#mask-02', .2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
var lamoreparts = document.getElementsByClassName('mask2');
for(var i = 0; i < logoparts.length; i++){
	tween5_3.add(TweenMax.to(lamoreparts[i], .1, {strokeDashoffset: 0, ease:Linear.easeNone}))
}
var scene = new ScrollMagic.Scene({
	triggerElement: "#textlamore", 
	offset: -winy*.4,
	duration: winy, 
	tweenChanges: true
})
	.setTween(tween5_3)
	// .addIndicators({name: 'Lamore'}) 
	.addTo(controller);

/* Drops */ 
var timelinedrops = new TimelineMax()
	.add(TweenMax.to(".imgdrop1", 1, {y: winy/2, opacity: 1}))
	.add(TweenMax.to(".imgdrop2", 1, {y: winy/2, opacity: 1}), '-=.9')
	.add(TweenMax.to(".imgdrop3", 1, {y: winy/2, opacity: 1}), '-=.9')
var scene5_3 = new ScrollMagic.Scene({
	triggerElement: ".threedrops", 
	duration: winy*.9, 
	offset: 0,
}).setTween(timelinedrops)
// .addIndicators({name: 'drops'})
.addTo(controller);


// *********************************************
// ******    Section 06   *********************
// *********************************************
// background section 6
var tween6_1 = TweenMax.to(".sec06", 1, {backgroundColor: "#fac7d0",});
var scene6_1 = new ScrollMagic.Scene({
	triggerElement: ".sec06", 
	duration: winy*.5, 
	offset: 0,
}).setTween(tween6_1)
// .setPin('.sec01')
// .addIndicators({name: 'sec 6'})
.addTo(controller);

// rolling logo
var tween6_2 = TweenMax.to("#sec06_01", 1, {rotate: -360, x: -winx/2});
var scene6_2 = new ScrollMagic.Scene({
	triggerElement: "#sec06_01", 
	duration: winy*.4, 
	offset: -winy*.2,
}).setTween(tween6_2)
// .addIndicators({name: 'logo'})
.addTo(controller);



// *********************************************
// ******    Emd of Sections  *********************
// *********************************************

		// detect if mobile browser. regex -> http://detectmobilebrowsers.com
		var isMobile = (function(a){return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));})(navigator.userAgent||navigator.vendor||window.opera);

		// we'd only like to use iScroll for mobile...
		if (isMobile) {
		// configure iScroll
		var myScroll = new IScroll('#scroll-wrapper',
					{
						// don't scroll horizontal
						scrollX: false,
						// but do scroll vertical
						scrollY: true,
						// show scrollbars
						scrollbars: true,
						// deactivating -webkit-transform because pin wouldn't work because of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
						// if you dont use pinning, keep "useTransform" set to true, as it is far better in terms of performance.
						useTransform: false,
						// deativate css-transition to force requestAnimationFrame (implicit with probeType 3)
						useTransition: false,
						// set to highest probing level to get scroll events even during momentum and bounce
						// requires inclusion of iscroll-probe.js
						probeType: 3,
						// pass through clicks inside scroll container
						click: true 
					}
										);
								
		// overwrite scroll position calculation to use child's offset instead of container's scrollTop();
		controller.scrollPos(function () {
			return -myScroll.y;
		});
    		// thanks to iScroll 5 we now have a real onScroll event (with some performance drawbacks)
    		myScroll.on("scroll", function () {
    			controller.update(true);
    		});
    		// add indicators to scrollcontent so they will be moved with it.
    		//scenetl.addIndicators({parent: ".scrollContent"});

    	} else {
    		// add indicators (requires plugin)
    		// scenetl.addIndicators();											
											
										
										
									
    	}




};