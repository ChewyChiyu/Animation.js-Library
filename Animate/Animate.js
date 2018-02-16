function Animate() {
		this.animateMap = new Map()
		this.currentAnimationKey = null
		this.currentAnimationIndex = null
		this.animationLoop = null
}

Animate.prototype = {
	addAnimation: function(key, spriteSheet, texturePosArray, sleepTime){
		if(key==null||spriteSheet==null||sleepTime<=0||texturePosArray==null||texturePosArray.length==0||this.animateMap.get(key)!=null||texturePosArray[0].x == null || texturePosArray[0].y == null || texturePosArray[0].w == null || texturePosArray[0].h == null){ return this }
		this.animateMap.set(key, {spriteSheet: spriteSheet, texturePosArray: texturePosArray, sleepTime: sleepTime})
		return this
	},

	startAnimation: function(key){
		if(key==null||this.animateMap.get(key)==null||this.currentAnimationKey==key){ return this }
		this.currentAnimationKey = key
		this.currentAnimationIndex = 0
		clearInterval(this.animationLoop)
		this.animationLoop = setInterval(changeAnimationIndex, this.animateMap.get(this.currentAnimationKey).sleepTime, this)
		return this
	},

	drawAnimation: function(canvas, x, y, scale, isReverse){
		if(x==null||y==null||canvas==null||this.currentAnimationKey==null){return this}
		if(scale==null||scale==0){ scale = 1 }
		const context = canvas.getContext("2d")
		context.imageSmoothingEnabled = false;
		var animateElement = this.animateMap.get(this.currentAnimationKey)
		if(animateElement==null){return this}
		if(isReverse){
			context.drawImage(animateElement.spriteSheet,
			animateElement.texturePosArray[this.currentAnimationIndex].x,
			animateElement.texturePosArray[this.currentAnimationIndex].y,
			animateElement.texturePosArray[this.currentAnimationIndex].w,
			animateElement.texturePosArray[this.currentAnimationIndex].h,
			x,y,animateElement.texturePosArray[this.currentAnimationIndex].w  ,animateElement.texturePosArray[this.currentAnimationIndex].h )
		}else{
			context.translate(x+animateElement.texturePosArray[this.currentAnimationIndex].w,y)
			context.scale(-1,1)
			context.drawImage(animateElement.spriteSheet,
			animateElement.texturePosArray[this.currentAnimationIndex].x,
			animateElement.texturePosArray[this.currentAnimationIndex].y,
			animateElement.texturePosArray[this.currentAnimationIndex].w,
			animateElement.texturePosArray[this.currentAnimationIndex].h,
			0,0,animateElement.texturePosArray[this.currentAnimationIndex].w * scale  ,animateElement.texturePosArray[this.currentAnimationIndex].h * scale )
			context.setTransform(1,0,0,1,0,0);
		}
		return this
	}
	
};

function changeAnimationIndex(instance){
	if(instance.currentAnimationIndex < instance.animateMap.get(instance.currentAnimationKey).texturePosArray.length-1){
		instance.currentAnimationIndex++
	}else{
		instance.currentAnimationIndex = 0
	}
}