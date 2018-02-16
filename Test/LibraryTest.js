window.onload = function(){


	var animation = new Animate()

	var catSpriteSheet = document.getElementById("catSpriteSheet")
	var animateTestLoop 
	const MAX_FPS = 60
	const canvas = document.getElementById("window")
	const context = canvas.getContext("2d")

	const SLEEP_TIMES = {idle: 100, walk: 100, jump: 100, punch: 50, kick: 80, chop: 50}
	animation.addAnimation("catIdleRight", catSpriteSheet, [  {x:20,y:24,w:19,h:30}, {x:84,y:25,w:19,h:29}, {x:148,y:24,w:19,h:30}, {x:212,y:23,w:19,h:31}], SLEEP_TIMES.idle )
	animation.addAnimation("catWalkRight", catSpriteSheet, [  {x:20,y:88,w:19,h:30}, {x:84,y:88,w:19,h:30}, {x:149,y:87,w:18,h:31}, {x:213,y:87,w:18,h:31}, {x:276,y:88,w:19,h:30}, {x:341,y:88,w:18,h:30}], SLEEP_TIMES.walk)
	animation.addAnimation("catJumpRight", catSpriteSheet, [   {x:20,y:152,w:19,h:30}, {x:84,y:152,w:17,h:28}, {x:148,y:150,w:18,h:31}, {x:214,y:150,w:16,h:31}, {x:276,y:152,w:17,h:28}, {x:340,y:154,w:18,h:28}, {x:404,y:155,w:16,h:27}, {x:468,y:154,w:18,h:28}], SLEEP_TIMES.jump)
	animation.addAnimation("catPunchRight", catSpriteSheet, [ {x:20,y:600,w:19,h:30}, {x:84,y:600,w:16,h:30}, {x:148,y:600,w:16,h:30}, {x:212,y:600,w:16,h:30}, {x:274,y:601,w:26,h:29}, {x:339,y:601,w:25,h:29}, {x:404,y:600,w:16,h:30}, {x:468,y:600,w:22,h:30}, {x:533,y:600,w:21,h:30}, {x:596,y:600,w:19,h:30}], SLEEP_TIMES.punch)
	animation.addAnimation("catKickRight", catSpriteSheet, [ {x:20,y:920,w:19,h:30}, {x:84,y:922,w:18,h:28}, {x:148,y:923,w:16,h:27}, {x:212,y:922,w:17,h:28}, {x:276,y:920,w:18,h:30}, {x:340,y:921,w:24,h:29}], SLEEP_TIMES.kick)
	animation.addAnimation("catChopRight", catSpriteSheet, [ {x:20,y:984,w:19,h:30}, {x:84,y:986,w:18,h:28}, {x:149,y:987,w:17,h:27}, {x:214,y:988,w:18,h:26}, {x:277,y:985,w:24,h:29}, {x:342,y:985,w:20,h:29}], SLEEP_TIMES.chop)
	animation.startAnimation("catChopRight")

	function draw(){
		context.fillStyle="#FFFFFF";
		context.fillRect(0,0,canvas.width,canvas.height)
		animation.drawAnimation(canvas, canvas.width/2, canvas.height/2, 2,  false)
	}

	function start(){
		animateTestLoop = setInterval(draw, 1000/MAX_FPS)
	}

	start()
}