# Animation.js-Library
My attempt at a library in javascript , oh dear

## Installation
```html
<script src="Animate/Animate.min.js"></script>
```
## Usage
```javascript
//Create new instance of Animate
var animation = new Animate()

//Add an animation addAnimation(key,spriteSheet,texturePosArray,sleepInterval)
animation.addAnimation("catIdleRight", catSpriteSheet, [  {x:20,y:24,w:19,h:30}, {x:84,y:25,w:19,h:29}, {x:148,y:24,w:19,h:30}, {x:212,y:23,w:19,h:31}], SLEEP_TIMES.idle )

//Start-Change an animation startAnimation(key)
animation.startAnimation("catIdleRight")
 
//Draw current animation drawAnimation(canvas,x,y,scale,isReversed)
animation.drawAnimation(canvas, canvas.width/2, canvas.height/2, 2,  false)

```
