/**
    Variables for testing
*/

var soundOn = true;
var showHitBox = false;
var invincible = false;

var gameEngine;
var textBox;

/**
    General Variables
*/

// Booleans
var musicFadingOut = false;
var musicFadingIn = false;
// Numbers
var bossMusicVolume = 0.1;
var COMBO_DROPOFF_TIME = 5;
var IMG_PART = 1;
var PART_SECONDARY = 2;
var TEXT_PART = 3;
var SHAPE_PART = 4;
var VOID_BALL = 5;
var PART_GENERATOR = 6;
var VOID_PORTAL = 7;
var VOID_ERUPTION = 8;
var IMG_FLASH_PART = 9;
var BURROW_PART = 10;
var VOID_STORM = 11;
var VOID_GOOP = 12;
var VOID_GATE = 13;
var VOID_LIGHTNING = 14;
var BRANDONG_SPIN = 15;
var BRANDONG_WHIP = 16;


//attack ids for particles
var BRANDONG_WHIPWALL = 7;
var BRANDONG_WHIPLINE = 8;
var AYA_SHOT = 9;
var ALPHA_SHOT = 10;
var TUNA_CHARGE = 11;
var TUNA_CHARGE_EXPLODE = 12;
var PARTICLE_CLAM_ATTACK = 13;
var PARTICLE_CLAM_ATTACK2 = 14;
var PARTICLE_CLAM_ATTACK3 = 15;
var PARTICLE_GASBUBBLE = 16;

var gameStarted = false;
var mode = "hard";
// Sounds
var powerupMusic = new Audio("./sounds/noreply.WAV");
powerupMusic.volume = 0.3;
var bossMusic = new Audio("./sounds/bgm_boss.mp3");
bossMusic.loop = true;
bossMusic.volume = bossMusicVolume;
var bossMusic2 = new Audio("./sounds/bgm_boss2.mp3");
bossMusic2.loop = true;
bossMusic2.volume = bossMusicVolume;
var climbMusic = new Audio("./sounds/malz.mp3");
climbMusic.loop = true;
climbMusic.volume = 0.2;
var finalMusic = new Audio("./sounds/finalmusic.ogg");
finalMusic.loop = true;
finalMusic.volume = 0.3;

var startMusic = new Audio("./sounds/bgm_start.mp3");
startMusic.loop = true;
startMusic.volume = 0.3;

var anglerMusic = new Audio("./sounds/bgm_angler.mp3");
anglerMusic.loop = true;
anglerMusic.volume = 0.15;
var ambienceMusic = new Audio("./sounds/ambience.mp3");
ambienceMusic.loop = true;
ambienceMusic.volume = 0.2;

var earthRumble = new Audio("./sounds/earth_rumble.wav");
earthRumble.loop = true;
earthRumble.volume = 0.4;
var fireSound = new Audio("./sounds/fire_burning.wav");
fireSound.volume = 0.4;
var powerupSound = new Audio("./sounds/powerup.wav");
powerupSound.volume = 0.2;
var clownSound = new Audio("./sounds/clown_horn.wav");
clownSound.volume = 0.2;
var healSound = new Audio("./sounds/heal.wav");
healSound.volume = 0.1;
var invulnSound = new Audio("./sounds/invulnerable.wav");
invulnSound.volume = 0.1;
var airHitSound = new Audio("./sounds/windhit.wav");
airHitSound.volume = 0.1;
var lightningSound = new Audio("./sounds/lightning.wav");
lightningSound.volume = 0.1;
var lightningExSound = new Audio("./sounds/void_lightning.mp3");
lightningExSound.volume = 0.2;
var lightningFallSound = new Audio("./sounds/comet_fall.wav");
lightningFallSound.volume = 0.5;
var explosionSound = new Audio("./sounds/explosion.wav");
explosionSound.volume = 0.1;
var burnSound = new Audio("./sounds/burn.wav");
burnSound.volume = 0.2;
var hitSound = new Audio("./sounds/punch.mp3");
hitSound.volume = 0.5;
var voidlingDeathSound = new Audio("./sounds/Death.mp3");
voidlingDeathSound.volume = 0.1;
var spawnSound = new Audio("./sounds/Spawn.mp3");
spawnSound.volume = 0.1;
var disappearSound = new Audio("./sounds/disappear.mp3");
disappearSound.volume = 1.0;
var footsteps = new Audio("./sounds/footsteps.mp3");
footsteps.loop = true;
footsteps.volume = 0;
if (soundOn) {
    this.footsteps.play();
}
var victory = new Audio("./sounds/victory.mp3");
victory.loop = true;
victory.volume = 0.1;
var bounceSound = new Audio("./sounds/bounce.wav");
bounceSound.volume = 0.1;
var chargedBurstSound = new Audio("./sounds/chargedburst.wav");
hitSound.volume = 1;
var teleportSound = new Audio("./sounds/teleport.wav");
teleportSound.volume = 0.3;
teleportSound.playbackRate = 1.5;
var voidGateSound = new Audio("./sounds/voidgate.wav");
voidGateSound.volume = 0.2;
var laserSound = new Audio("./sounds/laser.wav");
laserSound.volume = 0.04;
var jumpSound = new Audio("./sounds/jumpSound.mp3");
jumpSound.volume = 0.3;
var breakSound = new Audio("./sounds/rock_break.wav");
breakSound.volume = 0.1;

var shotHitSound = new Audio("./sounds/shot_hit.wav");
shotHitSound.volume = 0.1;
var beep = new Audio("./sounds/beep.mp3");
beep.volume = 0.05;
var lenoxQSound = new Audio("./sounds/lenox_q.mp3");
var lenoxWSound = new Audio("./sounds/lenox_w.mp3");
var lenoxRSound = new Audio("./sounds/lenox_r.mp3");
var lenoxHookSound = new Audio("./sounds/lenox_hook.mp3");
var emoteSound = new Audio("./sounds/emote_start.mp3");
var emoteEndSound = new Audio("./sounds/emote_end.mp3");
var speedgateSound = new Audio("./sounds/speedgate.mp3");
var explodeSound = new Audio("./sounds/explode.mp3");
var treeSound = new Audio("./sounds/tree.mp3");
var alertSound = new Audio("./sounds/alert.mp3");
var shootSound = new Audio("./sounds/shoot.wav");
shootSound.volume = 0.1;
var ayaSound = new Audio("./sounds/bangbang.mp3");
var cutSound = new Audio("./sounds/cuteffect.wav");
var energyMaxSound = new Audio("./sounds/energymax.mp3");
var autoSound = new Audio("./sounds/electric.wav");
var energyUpSound = new Audio("./sounds/energyup.wav");
var thunderboltSound = new Audio("./sounds/pikachu.wav");
var cannedTunaSound = new Audio("./sounds/cannedtuna.wav");
var coinSound = new Audio("./sounds/coin.wav");
var slapSound = new Audio("./sounds/slap.wav");
var beepSound = new Audio("./sounds/beep.mp3");
var rumbleSound = new Audio("./sounds/rumble.wav");
var rumbleSound2 = new Audio("./sounds/rumble.wav");
rumbleSound2.loop = true;
var beepsSound = new Audio("./sounds/beeps.wav");
var wooshSound = new Audio("./sounds/woosh.wav");
var boomSound = new Audio("./sounds/boom.mp3");
boomSound.volume = 0.1;
var boomSound2 = new Audio("./sounds/boom2.wav");
boomSound2.volume = 0.1;
var slashSound = new Audio("./sounds/slash.mp3");
wooshSound.volume = 0.05;
slapSound.volume = 0.05;
beepsSound.volume = 0.05;
var hitMetal = new Audio("./sounds/metalhit.wav");
var drownHurtSound = new Audio("./sounds/drownhurt.wav");
var bubblePopSound = new Audio("./sounds/bubblepop.wav");
var bubbleSound = new Audio("./sounds/bubble.wav");
var bubbleSound2 = new Audio("./sounds/bubble2.wav");
var bubbleSound3 = new Audio("./sounds/bubble3.wav");
cannedTunaSound.volume = 0.03;
energyUpSound.volume = 0.07;

var suspenseSound = new Audio("./sounds/suspense.mp3");
suspenseSound.volume = 0.1;
var suspenseSound2 = new Audio("./sounds/suspense2.mp3");
suspenseSound2.volume = 0.05;
var getEatenSound = new Audio("./sounds/geteaten.wav");
getEatenSound.volume = 0.3;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max + 1);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
/**
    Useful methods
*/

// Creates an animation
function Animation(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse, offsetX, offsetY) {
    this.spriteSheet = spriteSheet;
    this.startX = startX;
    this.startY = startY;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.reverse = reverse;
	this.offsetX = offsetX || 0;
	this.offsetY = offsetY || 0;
}

// Returns whether or not the audio file is playing
function isPlaying(audio) {
    return !audio.paused;
}

// Checks collision between two entities. Handles displacement effects for entity2 (for mob collision purposes).
function checkCollision(entity1, entity2) {
    var hitBox1 = entity1.hitBox;
    var hitBox2 = entity2.hitBox;
	var displacementX = entity2.displacementX || 0;
	var displacementY = entity2.displacementY || 0;
    return (hitBox1.x + hitBox1.width > hitBox2.x + displacementX && hitBox1.x < hitBox2.x + hitBox2.width + displacementX
         && hitBox1.y < hitBox2.y + hitBox2.height + displacementY && hitBox1.y + hitBox1.height > hitBox2.y + displacementY);
}

// Checks collision between two entities, with a X/Y bonus to entity1's hitbox
function checkCollision(entity1, entity2, xbonus, ybonus) {
    var hitBox1 = entity1.hitBox;
    var hitBox2 = entity2.hitBox;
	var displacementX = entity2.displacementX || 0;
	var displacementY = entity2.displacementY || 0;
	return (hitBox1.x + hitBox1.width + (xbonus > 0 ? xbonus : 0) > hitBox2.x + displacementX && hitBox1.x + (xbonus < 0 ? xbonus : 0) < hitBox2.x + hitBox2.width + displacementX
         && hitBox1.y + (ybonus < 0 ? ybonus : 0) < hitBox2.y + hitBox2.height + displacementY && hitBox1.y + hitBox1.height + (ybonus > 0 ? ybonus : 0) > hitBox2.y + displacementY);
    /*return (hitBox1.x + hitBox1.width + (xbonus > 0 ? xbonus : 0) > hitBox2.x + displacementX && hitBox1.x + (xbonus < 0 ? xbonus : 0) < hitBox2.x + hitBox2.width + displacementX
         && hitBox1.y + (ybonus < 0 ? ybonus : 0) < hitBox2.y + hitBox2.height + displacementY && hitBox1.y + hitBox1.height + (ybonus > 0 ? ybonus : 0) > hitBox2.y + displacementY);*/
}

// Returns the distance along the x-axis between two entities. If they collide, the distance is 0
function getXDistance(entity1, entity2) {
    var distance = 0;
    if (entity1.hitBox.x + entity1.hitBox.width < entity2.hitBox.x) {
        distance = entity1.hitBox.x + entity1.hitBox.width - entity2.hitBox.x;        
    } else if (entity1.hitBox.x > entity2.hitBox.x + entity2.hitBox.width) {
        distance = entity1.hitBox.x - entity2.hitBox.x + entity2.hitBox.width;
    }
    return distance;
};

// Creates the hitbox for the entity
function createHitBox(entity) {
    entity.hitBox = {
    	x: entity.x + entity.hitBoxDef.offsetX + (entity.hitBoxDef.growthX < 0 ? entity.hitBoxDef.growthX : 0), 
		y: entity.y + entity.hitBoxDef.offsetY + (entity.hitBoxDef.growthY < 0 ? -1 * entity.hitBoxDef.growthY : 0),
		width: entity.hitBoxDef.width + Math.abs(entity.hitBoxDef.growthX), 
		height: entity.hitBoxDef.height + (entity.hitBoxDef.growthY)
	};
}

// Draws the hitbox of an entity
function drawHitBox(entity, ctx) {
    if (entity.hitBoxDef) {
        entity.hitBox = {
            x: entity.x + entity.hitBoxDef.offsetX + (entity.hitBoxDef.growthX < 0 ? entity.hitBoxDef.growthX : 0), 
            y: entity.y + entity.hitBoxDef.offsetY + (entity.hitBoxDef.growthY < 0 ? -1 * entity.hitBoxDef.growthY : 0),
            width: entity.hitBoxDef.width + Math.abs(entity.hitBoxDef.growthX), 
            height: entity.hitBoxDef.height +(entity.hitBoxDef.growthY)
        };
    }
    if (showHitBox) {
    	if (ctx != null) {
	        ctx.globalAlpha = 0.2;
	        var tempStyle = ctx.fillStyle;
	        ctx.fillStyle = "black";
	        ctx.fillRect(entity.hitBox.x, entity.hitBox.y, entity.hitBox.width, entity.hitBox.height);
	        ctx.fillStyle = tempStyle;
	        ctx.globalAlpha = 1;
    	}
    }
}


fadeChaseMusicOut = function() {
    if (!soundOn) { 
        return; 
    }
    if (chaseMusic.volume > 0) {
        musicFadingOut = true;
    	chaseMusic.volume = Math.max(0, chaseMusic.volume - 0.01);
    }
    if (chaseMusic.volume <= 0) {
        chaseMusic.Volume = 0;
        chaseMusic.pause();
        chaseMusic.currentTime = 0;
        musicFadingOut = false;
    }
}

// Fades the boss music out
fadeBossMusicOut = function() {
    if (!soundOn) { 
        return; 
    }
    if (bossMusic.volume > 0) {
        musicFadingOut = true;
    	bossMusic.volume = Math.max(0, bossMusic.volume - 0.01);
    }
    if (bossMusic.volume <= 0) {
        bossMusic.Volume = 0;
        bossMusic.pause();
        bossMusic.currentTime = 0;
        musicFadingOut = false;
    }
}

// Fades the boss music in
fadeBossMusicIn = function() {
    if (!soundOn) { 
        return; 
    }
    if (!isPlaying(bossMusic)) {
        bossMusic.play();
    }
    if (bossMusic.volume < bossMusicVolume) {
        musicFadingIn = true;
    	bossMusic.volume = Math.min(bossMusicVolume, bossMusic.volume + 0.01);
    }
    if (bossMusic.volume >= bossMusicVolume) {
        bossMusic.Volume = bossMusicVolume;
        musicFadingOut = false;
    }
}

// Fades the climb music out
fadeClimbMusicOut = function() {
    if (!soundOn) { 
        return; 
    }
    if (climbMusic.volume > 0) {
        musicFadingOut = true;
    	climbMusic.volume = Math.max(0, climbMusic.volume - 0.01);
    }
    if (climbMusic.volume <= 0) {
        climbMusic.Volume = 0;
        climbMusic.pause();
        climbMusic.currentTime = 0;
        musicFadingOut = false;
    }
}

// Returns the RGB of a hex color (e.g. #FFFFFF)
function rgb(color) {
    return color.match(/\w\w/g).map(function(b){
    	return parseInt(b,16)
    });
}

// Returns a random color, in hex, of two other hex colors.
function getRandomColor(color1, color2) {
	var rgb1 = color1.match(/\w\w/g).map(function(b){
    	return parseInt(b,16)
    });
	var rgb2 = color2.match(/\w\w/g).map(function(b){
    	return parseInt(b,16)
    });
	var rgb = []; //the returning rgb
	for (var i = 0; i < 3; i++) {
		rgb[i] = rgb1[i] + Math.random()*(rgb2[i]-rgb1[i]) | 0;
	}
	return '#' + rgb
		.map(function(n){ return n.toString(16) })
	    .map(function(s){ return "00".slice(s.length)+s}).join(''); 
}

// Returns whether or not the entity is on the screen
function isOnScreen(entity) {
	return (entity.x + entity.hitBoxDef.width >= entity.game.liveCamera.x - 50 && entity.x <= entity.game.liveCamera.x + entity.game.liveCamera.width + 50
			&& entity.y >= entity.game.liveCamera.y -50 && entity.y <= entity.game.liveCamera.y + entity.game.liveCamera.height + 50);
}

// Returns whether or not the entity is NEARBY the screen
function isNearbyScreen(entity) {
	return (entity.x + entity.hitBoxDef.width >= entity.game.liveCamera.x - 250 && entity.x <= entity.game.liveCamera.x + entity.game.liveCamera.width + 250
			&& entity.y >= entity.game.liveCamera.y - 250 && entity.y <= entity.game.liveCamera.y + entity.game.liveCamera.height + 250);
}

// Returns whether or not the entity is on the screen in terms of X only
function readyToMove(entity) {
	return (entity.x >= entity.game.liveCamera.x - 50 && entity.x <= entity.game.liveCamera.x + entity.game.liveCamera.width);
}

function onYBoundary(entity) {
	return entity.y >= entity.game.liveCamera.y && entity.y - entity.hitBox.height <= entity.game.liveCamera.y + entity.game.liveCamera.height
}

function addScore(game, amount) {
    if (mode === "easy") {
		amount /= 2;
	}
	if (mode === "medium") {
		amount *= 3 / 4;
	}
	game.score += Math.round(amount);
}

function energyBarFlash(game) {
	var x = game.UI.staminaX;
	var y = game.UI.staminaY + game.UI.globalY;
	var width = game.UI.staminaWidth;
	var height = game.UI.staminaHeight;
	var fullParticle = new Particle(PART_SECONDARY, x + 71, y + 4, 
			0, 0, 0, 0, 0, 0, 0, 5, 0, 30, 1, 0, false, game);
	fullElement = new SquareElement(width, height, "#d9fafc", "#d9fafc");
	fullParticle.other = fullElement;
	fullParticle.highPriority = 3;
	game.addEntity(fullParticle);
}


function addEnergy(game, amount) {
	//amount *= 10;
	var x = game.UI.staminaX;
	var y = game.UI.staminaY + game.UI.globalY;
	var width = game.UI.staminaWidth;
	var height = game.UI.staminaHeight;
	if (game.player1.currentStamina + amount < 0) {
		game.player1.currentStamina = 0;
		if (game.player1.currentForm == FORM_BABY) {
			applyDamage(game.player1.x, game.player1.y, game, Math.abs(amount), game.player1);
			playSound(drownHurtSound);
		}
	} else if (amount < 0) {
		game.player1.currentStamina += amount;
	}
	if (game.player1.currentStamina < game.player1.maxStamina && amount > 0) {
		var oldStamina = game.player1.currentStamina;
		game.player1.currentStamina += amount;
		if (game.player1.currentForm >= FORM_HEAL && oldStamina <= game.player1.maxStamina && game.player1.currentStamina >= game.player1.maxStamina) {
			playSound(energyMaxSound);
			game.player1.currentStamina = game.player1.maxStamina;
			for (var i = 0; i < 50; i++) {
				var newParticle = new Particle(PART_SECONDARY, x + Math.random() * width, y + Math.random() * height, 
						-2, 2, -2, 2, 0, 0.1, 0, 0, 0, 50, .75, .15, true, game);
				element = new SquareElement(10 + Math.random() * 10, 10 + Math.random() * 10, "#a6f9ff", "#6ae2eb");
				newParticle.other = element;
				newParticle.highPriority = 3;
				game.addEntity(newParticle);
			}
			energyBarFlash(game);
		}
	}
}

function getDistance(x1, y1, x2, y2) {
	var dx = x2 - x1;
	var dy = y2 - y1;
	var dxSquared = Math.pow(dx, 2);
	var dySquared = Math.pow(dy, 2);
	var sum = dxSquared + dySquared;
	return Math.sqrt(sum);
}

// Plays the given audio
function playSound(audio) {
    if (!soundOn) {
        return;
    }
	if (audio.volume === 1) //default volume
		audio.volume = 0.3;
    audio.currentTime = 0;
    audio.play();
}

// Plays the given audio at a specific volume
function playSound(audio, vol) {
    if (!soundOn) {
        return;
    }
	var oldVol = audio.volume;
	audio.vol = vol;
	if (audio.volume === 1) //default volume
		audio.volume = 0.3;
    audio.currentTime = 0;
    audio.play();
	audio.onended = function() {
		audio.vol = oldVol;
	};
}

// Plays the given audio
function playSoundProx(game, source, audio) {
    if (!soundOn) {
        return;
    }
	audio.volume = 0.1;
	var dist = getDistance(game.player1.x + game.player1.hitBoxDef.offsetX + game.player1.hitBoxDef.width / 2, game.player1.y + game.player1.hitBoxDef.offsetY + game.player1.hitBoxDef.height / 2, 
		source.x, source.y);
	var mult = 1 - dist / 500;
	//console.log("distance: "+ dist + "; mult: " + mult);
	audio.volume = audio.volume * Math.max(0, mult);
    audio.currentTime = 0;
    audio.play();
}
function applyDamage(x, y, game, damage, victim) {
	if (victim.invuln)
		return;
	var displacementX = victim.displacementX || 0;
	var displacementY = victim.displacementY || 0;
	var damageParticle = new Particle(TEXT_PART, x + victim.hitBoxDef.width / 2 + victim.hitBoxDef.offsetX + displacementX, y + victim.hitBoxDef.offsetY + displacementY, 0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, game);
	var color = "white";
	if (victim.isPlayer) {
		color = "red";
		if (game.player1.currentHealth - damage <= 0) {
			game.player1.dead = true;
			game.player1.xVelocity = 0;
			game.player1.yVelocity = 0;
			handleDie(game);
		}
	} else {
		victim.hurtTimer = 5;
		if (victim.maxHealth < 80)
			game.addEntity(new Particle(IMG_PART, x + displacementX, y + displacementY, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10, 0.5, 0, false, game, victim.currentAnimation));
	}
	var damageText = new TextElement("", "Lucida Console", 25, color, "black");
	victim.currentHealth -= damage;
	damageText.text = damage;
	damageParticle.other = damageText;
	if (damage > 0)
		game.addEntity(damageParticle);
}

/**
    Animation
*/

// Draws the frame for an animation
Animation.prototype.drawFrame = function (tick, ctx, x, y, scaleBy, linger, tint) {
	var linger = linger || true;
    var scale = scaleBy || 1;
	var tint = tint || null;
    this.elapsedTime += tick;
    if (this.loop && this.isDone()) {
        this.elapsedTime = 0;
    } else if (this.isDone() && !linger) {
        return;
    }
    var index = this.reverse ? this.frames - this.currentFrame() - 1 : this.currentFrame();
    var vindex = 0;
    if (linger && index >= this.frames) { // Stay on the last frame
        index = this.frames - 1;
    }
    if ((index + 1) * this.frameWidth + this.startX > this.spriteSheet.width) {
        index -= Math.floor((this.spriteSheet.width - this.startX) / this.frameWidth);
        vindex++;
    }
    while ((index + 1) * this.frameWidth > this.spriteSheet.width) {
        index -= Math.floor(this.spriteSheet.width / this.frameWidth);
        vindex++;
    }

    var locX = x;
    var locY = y;
    var offset = vindex === 0 ? this.startX : 0;
	
	ctx.drawImage(this.spriteSheet,
			  index * this.frameWidth + offset, vindex * this.frameHeight + this.startY,  // source from sheet
			  this.frameWidth, this.frameHeight,
			  locX, locY,
			  this.frameWidth * scale,
			  this.frameHeight * scale);
				  
				  
	/*if (tint !== null) {
		var buffer = document.createElement('canvas');
		var rawImage = this.spriteSheet;
        buffer.width = rawImage.width;
        buffer.height = rawImage.height;
        bx = buffer.getContext('2d');

        // fill offscreen buffer with the tint color
        bx.fillStyle = tint;
        bx.fillRect(0,0,buffer.width,buffer.height);
		bx.globalCompositeOperation = "destination-atop";
		ctx.globalAlpha = 0.2;
		ctx.drawImage(buffer,
					  index * this.frameWidth + offset, vindex * this.frameHeight + this.startY,  // source from sheet
					  this.frameWidth, this.frameHeight,
					  locX, locY,
					  this.frameWidth * scale,
					  this.frameHeight * scale);
	}*/
	
   /*var imageData = ctx.getImageData(gameEngine.liveCamera.x, gameEngine.liveCamera.y,
    		gameEngine.liveCamera.x + gameEngine.liveCamera.width, gameEngine.liveCamera.y + gameEngine.liveCamera.height);
    var data = imageData.data;
    for (var i = 0; i < data.length; i += 4) {
    	data[i]     = 255 - data[i];     // red
		data[i + 1] = 255 - data[i + 1]; // green
		data[i + 2] = 255 - data[i + 2]; // blue
	}
	ctx.putImageData(imageData, 0, 0);*/
};

// Returns the current frame of an animation
Animation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
};

// Returns whether or not the animation is done
Animation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
};

// Returns whether or not the animation is done
Animation.prototype.restart = function () {
    this.elapsedTime = 0;
};

/**
    Background
*/

function Background(game) {
    Entity.call(this, game, 0, 0);
	this.game = game;
	this.lastSnapshot = -9900;
}
Background.prototype = new Entity();
Background.prototype.constructor = Background;
Background.prototype.update = function () {
};
Background.prototype.draw = function (ctx) {
	if (gameReference.liveCamera.x - this.lastSnapshot >= 800) {
		this.lastSnapshot = gameReference.liveCamera.x;
	}
	ctx.drawImage(ASSET_MANAGER.getAsset("./img/BackgroundSolid.png"), this.lastSnapshot, 0);
	ctx.drawImage(ASSET_MANAGER.getAsset("./img/BackgroundSolid.png"), this.lastSnapshot + 800, 0);
    Entity.prototype.draw.call(this);
};

/**
    UI (UI ID)
*/

function UI(game) {
    // Number Variables
    this.gameOverTransparency = 0;  
    this.barChangingSpeed = 1;  
    
    // Bottom
	this.bottomX = 0;
	this.bottomY = 380;
	this.bottomWidth = 800;
	this.bottomHeight = 120;
    // Player Portrait
	this.portraitX = 10;
	this.portraitY = this.bottomY + 10;
	this.portraitWidth = 100;
	this.portraitHeight = 100;
    // Player Health Bar
	this.bar1X = this.portraitX + this.portraitWidth - 20;
	this.bar1Y = this.portraitY + 25;
	this.bar1Width = 150;
	this.bar1Height = 30;
	this.healthX = this.bar1X + 5;
	this.healthY = this.bar1Y + 11;
	this.healthWidth = this.bar1Width - 8;
	this.healthHeight = this.bar1Height - 21;
    // Player Stamina Bar
	this.bar2X = this.portraitX + this.portraitWidth - 20;
	this.bar2Y = this.portraitY + 45;
	this.bar2Width = 150;
	this.bar2Height = 30;
	this.staminaX = this.bar2X + 5;
	this.staminaY = this.bar2Y + 11;
	this.staminaWidth = this.bar2Width - 8;
	this.staminaHeight = this.bar2Height - 21;
    // Boss Portrait
    this.bossPortraitX = 280;
    this.bossPortraitY = 20;
    this.bossPortraitWidth = 80;
    this.bossPortraitHeight = 80;
    // Boss Health Bar
    this.bossBarX = this.bossPortraitX + this.bossPortraitWidth - 12;
    this.bossBarY = this.bossPortraitY + 15;
    this.bossBarWidth = 400;
    this.bossBarHeight = 50;
    this.bossHealthX = this.bossBarX + 10;
    this.bossHealthY = this.bossBarY + 18;
    this.bossHealthWidth = this.bossBarWidth - 20;
    this.bossHealthHeight = this.bossBarHeight - 35;
	
	this.scoreX = this.portraitX;
	this.scoreY = 485;
	this.highPriority = 1;
	this.ougiBar = new Animation(ASSET_MANAGER.getAsset("./img/UI/OugiBar.png"), 0, 0, 142, 9, .05, 44, true, false, 0, 0);
	this.ougiBarActive = new Animation(ASSET_MANAGER.getAsset("./img/UI/OugiBarActive.png"), 0, 0, 142, 9, .05, 44, true, false, 0, 0);
	
	this.globalX = 0;
	this.globalY = -380; //move the player UI content only (health bar and portrait)
    
	Entity.call(this, game, 0, 0);
}

UI.prototype = new Entity();
UI.prototype.constructor = UI;


UI.prototype.update = function () {
    /*if (this.game.currentPhase === 0) {
        fadeBossMusicIn();
        startMusic.pause();
    } else if (this.game.currentPhase === 1) {
        fadeBossMusicOut();
    } else if (this.game.currentPhase === 2 && this.game.currentBoss.attackEnabled) {
        fadeBossMusicIn();
    } else if (this.game.currentPhase === 3) {
        fadeBossMusicOut();
    }*/
    updatePlayerResources(this.game.player1, this);
    updateBossResources(this.game.currentBoss, this);
};



UI.prototype.draw = function (ctx) { //draw ui

    ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/BarBack.png"), this.bar1X + this.game.liveCamera.x, this.bar1Y + this.game.liveCamera.y + this.globalY, this.bar1Width, this.bar1Height);
    ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/HealthBarLight.png"), this.healthX + this.game.liveCamera.x, this.globalY + this.healthY + this.game.liveCamera.y, this.healthWidth * (this.game.player1.currentHealthTemp / this.game.player1.maxHealth), this.healthHeight);
    ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/HealthBar.png"), this.healthX + this.game.liveCamera.x, this.globalY + this.healthY + this.game.liveCamera.y, this.healthWidth * (this.game.player1.currentHealth / this.game.player1.maxHealth), this.healthHeight);
    //ctx.drawImage(ASSET_MANAGER.getAsset("./img/Jelly/JellyPortrait.png"), this.portraitX + this.game.liveCamera.x, this.globalY + this.portraitY + this.game.liveCamera.y, this.portraitWidth, this.portraitHeight);
    
	
    var tempColor = ctx.fillStyle;
    ctx.font = "30px Calibri";
    ctx.fillStyle = "black";
    ctx.font = "20px Calibri";
    ctx.textAlign = "left"; 
	ctx.fillText("Score: " + this.game.score, this.scoreX + this.game.liveCamera.x, this.scoreY + this.game.liveCamera.y);
    
    ctx.fillStyle = tempColor;
	
	var meterTop = 150;
	var meterBottom = 350;
	var dx = this.x1 - this.x2;
	var dy = this.y1 - this.y2;
	ctx.strokeStyle = "black";
	ctx.lineWidth = 6;
	ctx.beginPath();
	ctx.moveTo(this.game.liveCamera.x + 32, this.game.liveCamera.y + meterTop);
	ctx.lineTo(this.game.liveCamera.x + 32, this.game.liveCamera.y + meterBottom);
	ctx.stroke();
	
	var meterThreshold = (((baseY - 8) + 30) / 60) * (meterTop - meterBottom);
	ctx.strokeStyle = "red";
	ctx.lineWidth = 6;
	ctx.beginPath();
	ctx.moveTo(this.game.liveCamera.x + 32, this.game.liveCamera.y + meterBottom + meterThreshold);
	ctx.lineTo(this.game.liveCamera.x + 44, this.game.liveCamera.y + meterBottom + meterThreshold);
	ctx.stroke();
	
	var meterLive = ((faceYLast + 30) / 60) * (meterTop - meterBottom);
	ctx.strokeStyle = "green";
	ctx.lineWidth = 6;
	ctx.beginPath();
	ctx.moveTo(this.game.liveCamera.x + 32, this.game.liveCamera.y + meterBottom + meterLive);
	ctx.lineTo(this.game.liveCamera.x + 44, this.game.liveCamera.y + meterBottom + meterLive);
	ctx.stroke();
	
	
    if (this.game.player1.dead) {
        if (this.gameOverTransparency < 1) {
            this.gameOverTransparency += 0.025;
            ctx.globalAlpha = this.gameOverTransparency;
        }
        ctx.font = "100px Calibri";
        ctx.textAlign = "center"; 
        ctx.fillStyle = "black";
        ctx.fillText("Defeat",400 + this.game.liveCamera.x + 3,250 + this.game.liveCamera.y + 3);
        ctx.font = "30px Calibri";
		ctx.fillText("Continue? Press [R] to be revived",400 + this.game.liveCamera.x + 3,350 + this.game.liveCamera.y + 3);
        ctx.fillStyle = "white";
        ctx.font = "100px Calibri";
        ctx.fillText("Defeat",400 + this.game.liveCamera.x,250 + this.game.liveCamera.y);
        ctx.font = "30px Calibri";
		ctx.fillText("Continue? Press [R] to be revived",400 + this.game.liveCamera.x,350 + this.game.liveCamera.y);
        ctx.globalAlpha = 1.0;
    } else if (this.game.currentBoss !== null && this.game.currentBoss.dead) {
        if (this.gameOverTransparency < 1) {
            this.gameOverTransparency += 0.025;
            ctx.globalAlpha = this.gameOverTransparency;
        }
        ctx.font = "100px Calibri";
        ctx.fillStyle = "white";
        ctx.textAlign = "center"; 
        if (this.game.currentPhase === 0) {
	        this.game.cameraLock = false;
	        this.game.camera.maxX = 800;
	        this.game.currentPhase = 1;
     		this.game.addEntity(new Particle(IMG_FLASH_PART, 600, 250, 0, 0, 0, 0, 0, 0, 0, 500, 0, 0, 1, 0, false, this.game,
     				new Animation(ASSET_MANAGER.getAsset("./img/ArrowGoRight.png"), 0, 0, 269, 83, 1, 1, true, false, 0, 0)));
        }
        ctx.globalAlpha = 1.0;
    }
    if (this.game.gameWon) {
        if (this.gameOverTransparency < 1) {
            this.gameOverTransparency += 0.025;
            ctx.globalAlpha = this.gameOverTransparency;
        }
        if (!isPlaying(victory)) {
            playSound(victory);
        }
        ctx.font = "100px Calibri";
        ctx.fillStyle = "white";
        ctx.textAlign = "center"; 
        ctx.fillText("Victory!",400 + this.game.liveCamera.x,250 + this.game.liveCamera.y);
        ctx.font = "50px Calibri";
		ctx.fillText("More content soonTM",400 + this.game.liveCamera.x,350 + this.game.liveCamera.y);
        ctx.globalAlpha = 1.0;        
    }
    if (this.game.currentPhase == GAME_PHASE_ANGLER) {
        var randomness = Math.random() * 100 * (this.game.currentBoss.currentHealth / this.game.currentBoss.maxHealth);
        if (randomness <= 10) {
            var randomSize = 2 + Math.random() * 13;
            var randomPosition = this.game.camera.x + Math.random() * this.game.camera.width;
            var particle = new Particle(SHAPE_PART,
						randomPosition,
						this.game.camera.y - 100, 
						0, 0, -3, -5, 0.3, 0, 0, 100, 0, 10, 1, 0, true, this.game);
				var element = new SquareElement(randomSize, randomSize, "#5e1a1a", "#8c3232");
				particle.other = element;
				this.game.addEntity(particle);
        }
	}
    if (soundOn) {
        document.getElementById("image").src = "img/UI/MusicOn.png";
        startMusic.volume = 0.3;
        anglerMusic.volume = 0.15;
        ambienceMusic.volume = 0.2;
        bossMusic.volume = 0.1;
        bossMusic2.volume = 0.1;
    } else {
        document.getElementById("image").src = "img/UI/MusicOff.png";
        startMusic.volume = 0;
        bossMusic.volume = 0;
        bossMusic2.volume = 0;
        anglerMusic.volume = 0;
        ambienceMusic.volume = 0;
        
    }
    Entity.prototype.draw.call(this);	
};

function musicControl() {
    soundOn = !soundOn;
    document.getElementById("gameWorld").focus();
};

function hardMode() {
	var elem;
	if (vtsAuthenticated) {
		mode = "hard";
		gameStarted = true;
		elem = document.getElementById("difficulty");
		elem.parentNode.removeChild(elem);
		elem = document.getElementById("hardButton");
		elem.parentNode.removeChild(elem);
		elem = document.getElementById("help");
		elem.parentNode.removeChild(elem);
		document.getElementById("gameWorld").focus();
	} else {
		elem = document.getElementById("help");
		elem.style.display = "block";
		attemptAuthenticate();
	}
};

// Updates given player's resources
function updatePlayerResources(entity, ui) {
    if (entity.currentHealth < 0) {
        entity.currentHealth = 0;
    }
    if (entity.currentHealthTemp > entity.currentHealth) {
        entity.currentHealthTemp -= ui.barChangingSpeed;
    }
    if (Math.abs(entity.currentHealthTemp - entity.currentHealth) <= ui.barChangingSpeed) {
        entity.currentHealthTemp = entity.currentHealth;
    }
    if (entity.currentHealth > entity.currentHealthTemp) {
        entity.currentHealthTemp = entity.currentHealth;
    }
    if (entity.currentHealth < entity.maxHealth) {
        entity.currentHealth += entity.healthRegen;
    }
    
    if (entity.currentStaminaTemp > entity.currentStamina) {
        entity.currentStaminaTemp -= ui.barChangingSpeed;
    }
    if (Math.abs(entity.currentStaminaTemp - entity.currentStamina) <= ui.barChangingSpeed) {
        entity.currentStaminaTemp = entity.currentStamina;
    }
    if (entity.currentStamina > entity.currentStaminaTemp) {
        entity.currentStaminaTemp = entity.currentStamina;
    }
    if (entity.currentStamina === entity.currentStaminaTemp && entity.currentStamina < entity.maxStamina) {
        entity.currentStamina += entity.staminaRegen;
        entity.currentStaminaTemp = entity.currentStamina;
        if (entity.currentStamina > entity.maxStamina) {
            entity.currentStamina = entity.maxStamina;
            entity.currentStaminaTemp = entity.maxStamina;
        }
    }  
}

// Updates Boss Resources
function updateBossResources(entity, ui) {
	if (entity != null) {
		if (entity.currentHealth < 0) {
			entity.currentHealth = 0;
		}
		if (entity.currentHealthTemp > entity.currentHealth && entity.game.player1.ultiTimer === 0) {
			entity.currentHealthTemp -= ui.barChangingSpeed * 5;
		}
		if (Math.abs(entity.currentHealthTemp - entity.currentHealth) <= ui.barChangingSpeed * 5) {
			entity.currentHealthTemp = entity.currentHealth;
		}
		if (entity.currentHealth > entity.currentHealthTemp) {
			entity.currentHealthTemp = entity.currentHealth;
		}
	}
}

/**
    Map
*/

function Map(game) {
    // Starting Platforms
    this.platforms = [];
    var startingPlatforms = [
	];
	for (i = 0; i < startingPlatforms.length; i++) {
		var p = startingPlatforms[i];
		p.y -= 300;
		this.platforms.push(p);
	}
    
    Entity.call(this, game, 0, 0);  
}

Map.prototype = new Entity();
Map.prototype.constructor = UI;

Map.prototype.update = function () {
};

Map.prototype.draw = function (ctx) {
    this.platforms.forEach(function(currentPlatform) {
        currentPlatform.draw(ctx);
    });
    Entity.prototype.draw.call(this);
}

function Bullet(game, x, y, vspeed, hspeed, type, specialId) {
	this.step = 0;
	this.x = x;
	this.y = y;
	this.vspeed = vspeed;
	this.hspeed = hspeed;
	this.type = type;
	this.specialId = specialId || 0;
	this.animation = null;
	this.mode = 0;
	this.haccel = 0;
	this.vaccel = 0;
	
    this.targetHit = []; // The targets you've currently hit with your attack
	
    Entity.call(this, game, x, y);
    if (type === 1 || type === 4) { //star bullet
    	this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Particle/star_bullet.png"), 0, 0, 38, 38, 0.03, 20, true, false, 0, 0);
		this.hitBoxDef = {
			width: 32, height: 32, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
    } else if (type === 3) { //spiral bullet (ulti)
    	this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Particle/star_bullet_2.png"), 0, 0, 38, 38, 0.02, 30, true, false, 0, 0);
		this.hitBoxDef = {
			width: 32, height: 32, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
    } else if (type === 2) { //petal torrent blast
    	//this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Particle/star_bullet.png"), 0, 0, 38, 38, 0.03, 20, true, false, 0, 0);
		
		this.hitBoxDef = {
			width: 128, height: 128, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
    }
    drawHitBox(this);
}

Bullet.prototype.update = function () {
	// Only update when in the screen
	this.step++;
	var that = this;
	var dissipate = false;
	if (isOnScreen(this)) {
	    drawHitBox(this);
		if (this.type === 3) { //spiral bullet
			if (this.step % 1 === 0) {
				var newParticle = new Particle(PART_SECONDARY, this.x + this.hitBoxDef.width / 2, this.y + this.hitBoxDef.height / 2, 
						-6, -4, -1, 1, 0, 0, 0, 15, 0, 15, .5, .2, true, this.game);
				var element = new CircleElement(10 + Math.random() * 4, "#dbf6ff", "#abf9ff");
				newParticle.other = element;
				this.game.addEntity(newParticle);
			}
			if (this.vaccel === 0 && this.step <= 1) {
				if (this.vspeed > 0) {
					this.vaccel = -0.5;
					this.mode = 2;
				} else {
					this.vaccel = 0.5;
					this.mode = 1;
				}
			}
			if (this.mode === 1 && this.vspeed >= 5) {
				this.vaccel = -0.5;
				this.mode = 2;
			} else if (this.mode === 2 && this.vspeed <= -5){
				this.vaccel = 0.5;
				this.mode = 1;
			}
		}
		if (this.type === 2) { //petal torrent
			if (this.step % 5 === 0) {
				this.vspeed *= -1;
			}
		}
		this.hspeed += this.haccel;
		this.vspeed += this.vaccel;
		this.x += this.hspeed;
		this.y += this.vspeed;
		if (this.type === 4) { //quiver bullet
			if (this.vspeed > 0)
				this.vspeed -= 0.2;
			if (this.vspeed < 0)
				this.vspeed += 0.2;
		}
		this.game.entities.forEach(function(entity) {
			if (readyToMove(entity) && entity.attackable && that.targetHit.indexOf(entity) === -1) {
				if (checkCollision(that, entity)) {
					that.targetHit.push(entity);
					if (that.type === 1) { //star bullet
						applyDamage(entity.x, entity.y, that.game, 5, entity);
						dissipate = true;
						addEnergy(that.game, 0.5);
					} else if (that.type === 2) { //petal torrent
						applyDamage(entity.x, entity.y, that.game, 9999, entity);
						playSound(airHitSound);
						addEnergy(that.game, Math.min(5, entity.maxHealth / 10));
					} else if (that.type === 3) { //spiral bullet
						applyDamage(entity.x, entity.y, that.game, 8, entity);
						dissipate = true;
					}
				}
			}
		});
		if (this.type === 2) { //petal torrent
			for (var i = 0; i < 3; i++) {
				var newParticle = new Particle(PART_SECONDARY, this.x + 40, this.y + 41, 
						-5, 5, -2.5, 2.5, 0, 0, 20, 0, 0, 30, .7, .2, true, this.game);
				var element = new CircleElement(20 + 10 * (3 - i) + Math.random() * 6, "#c9fffc", "#fff9ab");
				newParticle.other = element;
				newParticle.acceleration = 0.1 * i;
				newParticle.grow = true;
				this.game.addEntity(newParticle);
			}
		}
	} else {
	    this.removeFromWorld = true;
	}
	if (dissipate) {
	    this.removeFromWorld = true;
		if (this.type === 1) { //star bullet
			this.game.addEntity(new Particle(IMG_PART, this.x, this.y, 0, 0, 0, 0, 0, 0, 0, 5, 0, 30, 1, 0, false, this.game,
					new Animation(ASSET_MANAGER.getAsset("./img/Particle/white_ring.png"), 0, 0, 32, 32, 0.03, 10, true, false, 0, 0)));
            playSound(shotHitSound);
		} else if (this.type === 2) {
			this.game.addEntity(new Particle(IMG_PART, this.x, this.y, 0, 0, 0, 0, 0, 0, 0, 5, 0, 30, 1, 0, false, this.game,
					new Animation(ASSET_MANAGER.getAsset("./img/Particle/white_ring.png"), 0, 0, 128, 128, 0.03, 10, true, false, 0, 0)));
            playSound(shotHitSound);			
		} else if (this.type === 3) { //star bullet
			this.game.addEntity(new Particle(IMG_PART, this.x, this.y, 0, 0, 0, 0, 0, 0, 0, 5, 0, 30, 1, 0, false, this.game,
					new Animation(ASSET_MANAGER.getAsset("./img/Particle/white_ring.png"), 0, 0, 32, 32, 0.03, 10, true, false, 0, 0)));
            playSound(beep);
            playSound(shotHitSound);
		}
	}
    Entity.prototype.update.call(this);
};

Bullet.prototype.draw = function (ctx) { 
	if (this.animation != null) 
		this.animation.drawFrame(this.game.clockTick, ctx, this.x + this.animation.offsetX,
				this.y + this.animation.offsetY, 1, 1);
    Entity.prototype.draw.call(this);
}

/**
    TextBox (TextBox Id)
*/

function TextBox(game, image, text) {
	this.image = image;
	this.text = text;
	this.showText = "";
	this.progress = 0;
	this.step = 0;
	this.life = -1;
	this.nextText = null;
    Entity.call(this, game, 0, 0);
}

function TextBox(game, image, text, pause) {
	this.image = image;
	this.text = text;
	this.pause = pause;
	this.showText = "";
	this.progress = 0;
	this.step = 0;
	this.life = -1;
	this.sound = null;
	this.nextText = null;
    Entity.call(this, game, 0, 0);
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';
    y += 5;

    for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    context.fillText(line, x, y);
}

TextBox.prototype.update = function() {
	if (this.sound != null) {
		playSound(this.sound);
		this.sound = null;
	}
	if (this.pause)
		this.game.pauseTime = 2;
	this.step++;
	if (this.life > 0) {
		this.life--;
		if (this.life <= 0) {
			this.removeFromWorld = true;
			if (this.nextText != null)
				this.game.addEntity(this.nextText);
		}
	}
	if (this.step % this.game.textSpeed === 0) {
		this.progress++;
		if (this.progress >= this.text.length) {
			this.showText = this.text;
			if (this.life === -1) {
				this.life = 100;
			}
		} else {
			this.showText = this.text.substring(0, this.progress);
			var c = this.showText.charAt(this.progress - 1);
			if (c === '?' || (c.toLowerCase() != c.toUpperCase())) { // It's a character
                if (soundOn) {
                    var sound = new Audio("./sounds/chat.wav");
                    sound.volume = 0.05;
                    if (this.image == null || this.image.indexOf("Maygi") !== -1 || this.image.indexOf("Jelly") !== -1) {
                        sound = new Audio("./sounds/chat2.wav");
                        sound.volume = 0.05;
                    }
                    sound.play();
                }
            }
		}
	}
    Entity.prototype.update.call(this);
}

TextBox.prototype.draw = function(ctx) {
    var tempColor = ctx.fillStyle;
    var trueWidth = 220;
    var trueHeight = 64;
	if (this.image != null) {
		ctx.fillStyle = "#452a84";
		ctx.globalAlpha = 0.5;
		ctx.fillRect(285 + 64 + this.game.liveCamera.x, 420 + this.game.liveCamera.y, trueWidth, trueHeight);
		ctx.fillStyle = tempColor;
		ctx.globalAlpha = 1;
		ctx.drawImage(ASSET_MANAGER.getAsset("./img/Chat/ChatSquare.png"), 285 + this.game.liveCamera.x, 
				420 + this.game.liveCamera.y, 64, 64);
		ctx.drawImage(ASSET_MANAGER.getAsset(this.image), 285 + this.game.liveCamera.x, 
				420 + this.game.liveCamera.y, 64, 64);
		ctx.font = "13px Lucida Console";
		ctx.textAlign = "left";
		ctx.fillStyle = "black";
		wrapText(ctx, this.showText, 285 + 64 + this.game.liveCamera.x + 12 + 1, 420 + this.game.liveCamera.y + 12 + 1, 196, 20);
		ctx.fillStyle = "white";
		wrapText(ctx, this.showText, 285 + 64 + this.game.liveCamera.x + 12, 420 + this.game.liveCamera.y + 12, 196, 20);
	} else {
		ctx.fillStyle = "#9dadc4";
		ctx.globalAlpha = 0.5;
		ctx.fillRect(285 + this.game.liveCamera.x, 420 + this.game.liveCamera.y, trueWidth, trueHeight);
		ctx.fillStyle = tempColor;
		ctx.globalAlpha = 1;
		ctx.font = "13px Lucida Console";
		ctx.textAlign = "left";
		ctx.fillStyle = "black";
		wrapText(ctx, this.showText, 285 + this.game.liveCamera.x + 13, 420 + this.game.liveCamera.y + 13, 196, 20);
		ctx.fillStyle = "white";
		wrapText(ctx, this.showText, 285 + this.game.liveCamera.x + 12, 420 + this.game.liveCamera.y + 12, 196, 20);
	}
	
    Entity.prototype.draw.call(this);
}

/**
    Particles
*/

// A shape element which is attached to a particle.
// If the particle.other is not null, the shape is drawn instead of an image.
function SquareElement(width, height, color1, color2) {
	this.width = width;
	this.height = height;
	var color1 = color1;
	var color2 = color2 || null;
	if (color2 != null) {
		this.color = getRandomColor(color1, color2);
	} else {
		this.color = color1;
	}
}

SquareElement.prototype.draw = function(ctx, x, y, sizeScale) {
    var tempColor = ctx.fillStyle;
    var trueWidth = this.width * sizeScale;
    var trueHeight = this.height * sizeScale;
    ctx.fillStyle = this.color;
    ctx.fillRect(x - trueWidth / 2, y - trueHeight / 2, trueWidth, trueHeight);
    ctx.fillStyle = tempColor;
    Entity.prototype.draw.call(this);
}

// A shape element which is attached to a particle.
// If the particle.other is not null, the shape is drawn instead of an image.
function CircleElement(radius, color1, color2) {
	this.radius = radius;
	var color1 = color1;
	var color2 = color2 || null;
	if (color2 != null) {
		this.color = getRandomColor(color1, color2);
	} else {
		this.color = color1;
	}
}

CircleElement.prototype.draw = function(ctx, x, y, sizeScale) {
    var tempColor = ctx.fillStyle;
    var trueRadius = Math.max(0, this.radius * sizeScale);
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(x, y, trueRadius, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.fillStyle = tempColor;
    Entity.prototype.draw.call(this);
}

// A text element which is attached to a particle.
// If the particle.other is not null, the text is drawn instead of an image.
function TextElement(text, font, size, color, shadowColor, offset) {
	this.text = text;
	this.font = font;
	this.size = size;
	this.color = color;
	this.shadowColor = shadowColor || null;
	this.offset = offset || 4;
}

TextElement.prototype.draw = function(ctx, x, y, sizeScale) {
    var tempColor = ctx.fillStyle;
    var trueSize = this.size * sizeScale;
    var trueFont = "" + trueSize + "px " + this.font;
    ctx.textAlign = "center";
    ctx.font = trueFont;
    if (this.shadowColor !== null) {
	    ctx.fillStyle = this.shadowColor;
	    ctx.fillText(this.text, x + this.offset, y + this.offset);
    }
    ctx.fillStyle = this.color;
    ctx.fillText(this.text, x, y);
    ctx.fillStyle = tempColor;
    Entity.prototype.draw.call(this);
	ctx.textAlign = "left";
}

// PARTICLE ID
function Particle(particleId, x, y, minHSpeed, maxHSpeed, minVSpeed, maxVSpeed,
	gravity, friction, width, maxLife, fadeIn, fadeOut, maxAlpha, alphaVariance, shrink, game, anim) {
	this.explodeTime = 0;
	this.particleId = particleId;
	this.GRAVITY_CAP = 30;
	this.animation = anim || null;
	this.hSpeed = maxHSpeed - (Math.random() * (maxHSpeed - minHSpeed));
	this.vSpeed = maxVSpeed - (Math.random() * (maxVSpeed - minVSpeed));
	this.gravity = gravity;
	this.friction = friction; //horizontal friction only
	this.life = 0;
	this.maxLife = maxLife;
	this.fadeIn = fadeIn;
	this.fadeOut = fadeOut;
	this.shrink = shrink;
	this.grow = false;
	this.sizeScale = 1;
	this.absoluteSizeScale = 1;
	this.width = width;
	this.maxAlpha = maxAlpha + Math.random() * (alphaVariance * 2) - alphaVariance;
	this.other = null;
	this.snapEntity = null;
	this.attackId = -1;
	this.acceleration = 0;
	this.direction = "none";
	this.canHit = true;
	this.extra = 0;
	this.textContent = null;
	this.highPriority = 0.1;
	this.hasExploded = false;
	this.targetX = null;
	this.targetY = null;
	this.targetSpeed = 0;
	this.converge = false;
	this.convergeMultiplier = 20;
	if (fadeIn > 0) {
		this.alpha = 0;
	} else {
		this.alpha = maxAlpha;
    }
    this.hitBox = {
    	x: this.x - this.width / 2 + this.width, 
		y: this.y - this.width / 2 + this.width,
		width: this.width, 
		height: this.width
	};
	this.overrideHitbox = null;
    Entity.call(this, game, x + Math.random() * (width * 2) - width, y + Math.random() * (width * 2) - width);
}

Particle.prototype = new Entity();
Particle.prototype.constructor = Particle;

Particle.prototype.update = function() {
	var that = this;
	if ((this.particleId === BRANDONG_WHIP || this.attackId === BRANDONG_WHIPLINE || this.attackId === BRANDONG_WHIPWALL) && this.game.currentPhase === 9)
		this.removeFromWorld = true;
	if ((this.targetX !== null && this.targetY !== null && this.targetSpeed !== 0) || this.converge) { //assign a speed to chase the target
		var dx = this.targetX - (this.x + this.hitBox.width / 2);
		var dy = this.targetY - (this.y + this.hitBox.height / 2);
		if (this.converge) {
			this.hSpeed = 0;
			this.vSpeed = 0;
			this.gravity = 0;
			this.x += dx / this.convergeMultiplier;
			this.y += dy / this.convergeMultiplier;
			//console.log("CONVERGE TO : " + this.x);
		} else {
			if (Math.abs(dx) > Math.abs(dy)) {
				this.hSpeed = this.targetSpeed;
				this.vSpeed = Math.abs(dy / dx) * this.targetSpeed;
			} else {
				this.vSpeed = this.targetSpeed;	
				this.hSpeed = Math.abs(dx / dy) * this.targetSpeed;
			}
			this.hSpeed = dx > 0 ? this.hSpeed : -1 * this.hSpeed;
			this.vSpeed = dy > 0 ? this.vSpeed : -1 * this.vSpeed;
			this.targetX = null;
			this.targetY = null;
			this.targetSpeed = 0;
		}
		//console.log("hspeed: " + this.hSpeed + "; vspeed: " + this.vSpeed);
	}
	/**
	 * particle generators create particles similar to whatever they were initialized with
	 */
	if (this.particleId === PART_GENERATOR) {
		var particle;
		if (this.other.animation != null) {
			particle = new Particle(IMG_PART, this.x, this.y, 4, -4, 2, -6, 0.15, 0.05, 0, this.other.maxLife, 10, 50, 1, 0, false, this.game, this.other.animation);
		} else {
			particle = new Particle(SHAPE_PART, this.x, this.y, 4, -4, 2, -6, 0.15, 0.05, 0, this.other.maxLife, 10, 50, 1, 0, false, this.game);
		}
        particle.other = this.other; /*new Particle(this.other.particleId, this.x, this.y, this.other.minHSpeed, this.other.maxHSpeed, this.other.minVSpeed, this.other.maxVSpeed, this.other.gravity, 
			this.other.friction, this.other.width, this.other.maxLife, this.other.fadeIn, this.other.fadeOut, this.other.maxAlpha, this.other.alphaVariance, this.other.shrink, this.other.game, this.other.anim);*/
		//particle.other.x = this.x;
		//particle.other.y = this.y;
        this.game.addEntity(particle);
	}
	if (this.life < this.fadeIn) {
		this.alpha = this.life / this.fadeIn;
	}
	if (this.life > this.maxLife) {
		this.alpha = 1 - ((this.life - this.maxLife) / this.fadeOut);
	}
	if (this.life > this.maxLife + this.fadeOut) {
		if (this.particleId === BRANDONG_WHIP && this.extra === 100) { //brandong special move - blue viper!
			playSound(lenoxRSound);
			this.game.addEntity(new Particle(IMG_PART, this.x - 32 + 150, this.y - 32, 0, 0, 0, 0, 0, 0, 0, 160, 0, 160, 0.8, 0, false, this.game,
					new Animation(ASSET_MANAGER.getAsset("./img/Enemy/blue_viper.png"), 0, 0, 64, 64, 0.033, 25, false, false, 0, 0)));
			this.game.currentBoss.phaseTimer = 240;
		}
		this.removeFromWorld = true;
	}
	if (this.hSpeed > 0) {
		this.hSpeed -= this.friction;
		if (this.hSpeed <= 0)
			this.hSpeed = 0;
	}
	if (this.hSpeed < 0) {
		this.hSpeed += this.friction;
		if (this.hSpeed >= 0)
			this.hSpeed = 0;
	}
	if (this.vSpeed > 0) {
		this.vSpeed -= this.friction;
		if (this.vSpeed <= 0)
			this.vSpeed = 0;
	}
	if (this.vSpeed < 0) {
		this.vSpeed += this.friction;
		if (this.vSpeed >= 0)
			this.vSpeed = 0;
	}
	this.vSpeed += this.gravity;
	if (this.vSpeed > this.GRAVITY_CAP)
		this.vSpeed = this.GRAVITY_CAP;
	var accelMultiplier = 1 + this.acceleration * this.life;
	this.x += this.hSpeed * accelMultiplier;
	this.y += this.vSpeed * accelMultiplier;
	/*if (this.y >= 600) {
		this.removeFromWorld = true;
    }*/
	this.life++;
	
	if (this.snapEntity != null) {
		this.x = this.snapEntity.x;
		this.y = this.snapEntity.y;
	}

	if (this.overrideHitbox != null) {
		this.hitBox = this.overrideHitbox;
		if (this.overrideHitbox.followPosition) {
			this.hitBox.x = this.x;
			this.hitBox.y = this.y;
		}
	} else if (this.particleId == IMG_PART) {
		this.hitBox = { //update hitbox as we move
			x: this.x, 
			y: this.y,
			width: Math.max(1, this.width), 
			height: Math.max(1, this.width)
		};
	} else {
		this.hitBox = { //update hitbox as we move
			x: this.x - this.width / 2 + this.width, 
			y: this.y - this.width / 2 + this.width,
			width: Math.max(1, this.width), 
			height: Math.max(1, this.width)
		};
	}
    if (this.particleId === VOID_LIGHTNING) {
    	this.hitBox.x += 16;
    	this.hitBox.y += 16;
    }
	if (this.particleId === BRANDONG_SPIN) { //special hitbox
		var playerMidpointX = this.game.player1.x + this.game.player1.hitBoxDef.offsetX + this.game.player1.hitBoxDef.width / 2;
		var playerMidpointY = this.game.player1.y + this.game.player1.hitBoxDef.offsetY + this.game.player1.hitBoxDef.height / 2;
		var attackMidpointX = this.x + 150;
		var attackMidpointY = this.y + 150;
		var dist = getDistance(playerMidpointX, playerMidpointY, attackMidpointX, attackMidpointY);
		if (dist <= 150 && dist >= 100) { //caught in the ring
			if (this.game.player1.vulnerable && this.game.player1.invincTimer === 0 && this.canHit) {
				this.canHit = false;
				this.game.player1.vulnerable = false;
				this.game.currentBoss.scoreValue -= 250;
				applyDamage(this.game.player1.x, this.game.player1.y, this.game, 25, this.game.player1);
				this.game.player1.invulnTimer = this.game.player1.invulnTimerMax * 2;
				this.game.player1.hitByAttack = true;
				playSound(hitSound);	
			}
		}
	}
    if (checkCollision(this, this.game.player1) && !this.game.player1.hitByAttack) { 
		if (this.attackId == TUNA_CHARGE && this.canHit) {
			this.canHit = false;
		}
		if (this.attackId === PARTICLE_CLAM_ATTACK) {
			this.game.player1.vulnerable = false;
			applyDamage(this.game.player1.x, this.game.player1.y, this.game, 20, this.game.player1);
			this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
			this.game.player1.hitByAttack = true;
			playSound(hitSound);
		}
		if (this.attackId === PARTICLE_CLAM_ATTACK2) {
			this.canHit = false;
		}
		if (this.attackId === PARTICLE_CLAM_ATTACK3) {
			this.canHit = false;
			this.game.player1.vulnerable = false;
			applyDamage(this.game.player1.x, this.game.player1.y, this.game, 40, this.game.player1);
			this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
			this.game.player1.hitByAttack = true;
			playSound(hitSound);
		}
		if (this.attackId === PARTICLE_GASBUBBLE) {
			this.canHit = false;
			this.game.player1.vulnerable = false;
			applyDamage(this.game.player1.x, this.game.player1.y, this.game, 20, this.game.player1);
			this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
			this.game.player1.hitByAttack = true;
			playSound(bubblePopSound);
			playSound(hitSound);
			this.removeFromWorld = true;
			for (var i = 0; i < 5; i++) {
				var newParticle = new Particle(PART_SECONDARY, this.x, this.y, 
						-3, 3, -3, 3, 0, 0.2, 0, 20, 0, 15, .5, .2, true, this.game);
				var element = new CircleElement(6 + Math.random() * 4, "#286640", "#408058");
				newParticle.other = element;
				this.game.addEntity(newParticle);
			}
		}
		if (this.attackId == TUNA_CHARGE_EXPLODE && this.explodeTime == 0 && this.canHit) {
			this.canHit = false;
			this.game.player1.vulnerable = false;
			applyDamage(this.game.player1.x, this.game.player1.y, this.game, 25, this.game.player1);
			this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
			this.game.player1.hitByAttack = true;
			playSound(hitSound);
		}
    	if (this.attackId === 5 && this.life < this.maxLife / 4) { //platform fire
            if ((this.game.player1.hitBox.y + this.game.player1.hitBox.height <= this.y + 3) && this.game.player1.vulnerable && this.game.player1.invincTimer === 0) {
                this.game.player1.vulnerable = false;
                var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
            			0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
                var damageText = new TextElement("", "Lucida Console", 25, "red", "black");
                var damage = 10;
            	damageText.text = damage;
                damageParticle.other = damageText;
                this.game.addEntity(damageParticle);
                this.game.player1.currentHealth -= damage;
                this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
                this.game.player1.hitByAttack = true;
                playSound(burnSound);
                if (this.hSpeed < 0) {
                    this.game.player1.xVelocity = 0;
                    this.game.player1.lastDirection = "Right";
                    this.game.player1.hurtAnimation = this.game.player1.hurtAnimationRight;
                } else {
                    this.game.player1.xVelocity = 0;
                    this.game.player1.lastDirection = "Left";
                    this.game.player1.hurtAnimation = this.game.player1.hurtAnimationLeft;
                }
            }
    	}
		if (this.attackId === BRANDONG_WHIPWALL) {
			if (this.canHit && this.life >= 100) { //diagonal bouncer - ignores invincibility
				this.canHit = false;
				this.game.player1.vulnerable = false;
				applyDamage(this.game.player1.x, this.game.player1.y, this.game, 15, this.game.player1);
				this.game.currentBoss.scoreValue -= 150;
				this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
				this.game.player1.hitByAttack = true;
				playSound(hitSound);
				if (this.x > this.game.player1.x + this.game.player1.hitBoxDef.offsetX + this.game.player1.hitBoxDef.width / 2) {
					this.game.player1.xVelocity = -2;
				} else {
					this.game.player1.xVelocity = 2;
				}
				if (this.y > this.game.player1.y + this.game.player1.hitBoxDef.offsetY + this.game.player1.hitBoxDef.height / 2) {
					this.game.player1.yVelocity = -2;
				} else {
					this.game.player1.yVelocity = 2;
				}
			}
		}
		if (this.attackId === BRANDONG_WHIPLINE) {
			if (this.game.player1.vulnerable && this.game.player1.invincTimer === 0 && this.canHit) {
				this.canHit = false;
				this.game.player1.vulnerable = false;
				applyDamage(this.game.player1.x, this.game.player1.y, this.game, 25, this.game.player1);
				this.game.currentBoss.scoreValue -= 250;
				this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
				this.game.player1.hitByAttack = true;
				playSound(hitSound);
			}
		}
		if (this.attackId === AYA_SHOT) {
			if (this.game.player1.vulnerable && this.game.player1.invincTimer === 0 && this.canHit) {
				this.canHit = false;
				this.game.player1.vulnerable = false;
				applyDamage(this.game.player1.x, this.game.player1.y, this.game, 15, this.game.player1);
				this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
				this.game.player1.hitByAttack = true;
				playSound(slapSound);
			}
		}
		if (this.attackId === ALPHA_SHOT) {
			if (this.game.player1.vulnerable && this.game.player1.invincTimer === 0 && this.canHit) {
				this.canHit = false;
				this.game.player1.vulnerable = false;
				applyDamage(this.game.player1.x, this.game.player1.y, this.game, 20, this.game.player1);
				this.game.currentBoss.scoreValue -= 200;
				this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
				this.game.player1.hitByAttack = true;
				playSound(hitSound);
			}
		}
    }
    Entity.prototype.update.call(this);
};

Particle.prototype.draw = function (ctx) {
	var drawX = this.x;
	var drawY = this.y;
	if (this.highPriority === 3) { //draw above ui - follow camera
		drawX += this.game.liveCamera.x;
		drawY += this.game.liveCamera.y;
	}
	if (this.grow) {
		this.sizeScale = this.life / (this.maxLife + this.fadeOut);
	} else if (this.shrink) {
		this.sizeScale = 1 - this.life / (this.maxLife + this.fadeOut);
	}
	if (this.particleId === IMG_FLASH_PART) {
		this.sizeScale = 0.4;
	    if (this.life % 30 === 0)
	    	this.alpha = this.alpha === 1 ? 0 : 1;
	}
	ctx.globalAlpha = this.alpha * this.maxAlpha;
	if (this.particleId === VOID_LIGHTNING) {
		this.other.drawFrame(this.game.clockTick, ctx, drawX + this.other.offsetX,
				drawY + this.other.offsetY, this.sizeScale * this.absoluteSizeScale, this.sizeScale * this.absoluteSizeScale);
		this.animation.drawFrame(this.game.clockTick, ctx, drawX + this.animation.offsetX,
				drawY + this.animation.offsetY, this.sizeScale * this.absoluteSizeScale, this.sizeScale * this.absoluteSizeScale);
	} else if (this.other == null) {
		if (this.animation !== null)
			this.animation.drawFrame(this.game.clockTick, ctx, drawX + this.animation.offsetX,
					drawY + this.animation.offsetY, this.sizeScale * this.absoluteSizeScale, this.sizeScale * this.absoluteSizeScale);
	} else {
		this.other.draw(ctx, drawX, drawY, this.sizeScale * this.absoluteSizeScale);
	}
    Entity.prototype.draw.call(this);
	ctx.globalAlpha = 1;
    drawHitBox(this, ctx);
};

/**
    Powerup ID
*/

var JELLY_COIN = 2;
var JELLY_COIN_SM = 3;
var ENTITY_MARKER = 4; //invisible, limiting hitbox to prevent entity movement
var TIP_MARKER = 5; //tip trigger
var JELLYBAIT = 6; //jellybait

function Powerup(game, x, y, type, specialId) {
	this.step = 0;
	this.x = x;
	this.y = y;
	this.type = type;
	this.specialId = specialId || 0;
	this.animation = null;
	this.gatherTime = 0;
	this.hspeed = 0;
	this.vspeed = 0;
	this.phase = 0;
	this.cooldown = 0;
	this.mapFlag = false;
    Entity.call(this, game, x, y);
    this.hitBoxDef = {
    	width: 32, height: 32, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
    };
    if (type === 1) { //invuln
    	this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Particle/invuln.png"), 0, 0, 32, 32, 0.03, 20, true, false, 0, 0);
    }
    if (type === 2) { //jelly coin
    	this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Powerup/jellycoin.png"), 0, 0, 28, 28, 0.25, 4, true, false, 0, 0);
		this.hitBoxDef = {
			width: 28, height: 28, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
		if (specialId > 0) { //dropped coin
			this.hspeed = -5 + Math.random() * 10;
			this.vspeed = 5 - Math.random() * 10;
		}
    }
    if (type === 3) { //jelly coin
    	this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Powerup/jellycoin_sm.png"), 0, 0, 14, 14, 0.25, 4, true, false, 0, 0);
		this.hitBoxDef = {
			width: 14, height: 14, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
		if (specialId > 0) { //dropped coin
			this.hspeed = -5 + Math.random() * 10;
			this.vspeed = 5 - Math.random() * 10;
		}
    }
    if (type === TIP_MARKER || type === JELLYBAIT) { //tip marker
		this.hitBoxDef = {
			width: 32, height: 192, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
    	//this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Powerup/hermes.png"), 0, 0, 64, 64, 0.05, 10, true, false, 0, 0);
    }
	
    drawHitBox(this);
}

Powerup.prototype.update = function () {
	// Only update when in the screen
	this.step++;
	if (this.cooldown > 0)
		this.cooldown--;
	var that = this;
	if (isOnScreen(this) || this.type >= 2 && this.type <= 3) {
		if (this.type === 0) { //health powerup
			this.game.addEntity(new Particle(IMG_PART, this.x, this.y - 10, -0.2, 0.2, -0.2, 0.2, 0, 0, 5, 5, 10, 50, 0.7, 0.2, true, this.game,
				new Animation(ASSET_MANAGER.getAsset("./img/Particle/pink_flare.png"), 0, 0, 64, 64, 0.03, 16, true, false, 0, 0)));
	        if (checkCollision(this, this.game.player1)) {
	            playSound(healSound);
	            
	            var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
	                    0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
	            var damageText = new TextElement("", "Lucida Console", 25, "#ADFF2F", "black");
	            var damage = 30;
	            damageText.text = damage;
	            damageParticle.other = damageText;
	            this.game.addEntity(damageParticle);
	            this.game.player1.currentHealth += damage;
	            if (this.game.player1.currentHealth >= this.game.player1.maxHealth) {
	            	this.game.player1.currentHealth = this.game.player1.maxHealth;
	            }
	            this.removeFromWorld = true;
	        }
		}
		if (this.type === 1) { //invuln powerup
			if (this.step % 4 === 0)
				this.game.addEntity(new Particle(IMG_PART, this.x, this.y - 10, -0.2, 0.3, -0.3, 0.3, 0, 0.1, 5, 5, 10, 50, 0.7, 0.2, true, this.game,
						new Animation(ASSET_MANAGER.getAsset("./img/Particle/orange_flare.png"), 0, 0, 64, 64, 0.03, 16, true, false, 0, 0)));
	        if (checkCollision(this, this.game.player1)) {
	            playSound(invulnSound);
	            
	            var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
	                    0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
	            var damageText = new TextElement("", "Lucida Console", 25, "#ffd43a", "black");
	            damageText.text = "Invulnerable!";
	            damageParticle.other = damageText;
	            this.game.player1.invincTimer = 400;
	            this.game.addEntity(damageParticle);
	            this.removeFromWorld = true;
	        }
		}
		if (this.type === 2 || this.type === 3) { //jelly coin
			if (this.specialId != 0) {
				if (this.phase == 0) {
					this.x += this.hspeed;
					this.y += this.vspeed;
					if (this.vspeed > 0) {
						this.vspeed = Math.max(0, this.vspeed - 0.1);
					}
					if (this.vspeed < 0) {
						this.vspeed = Math.min(0, this.vspeed + 0.1);
					}
					if (this.hspeed > 0) {
						this.hspeed = Math.max(0, this.hspeed - 0.1);
					} else if (this.hspeed < 0) {
						this.hspeed = Math.min(0, this.hspeed + 0.1);
					}
					if (this.vspeed == 0 && this.hspeed == 0) {
						this.phase = 1;
					}
				}
				if (this.phase == 1) {
					var dx = (this.game.player1.x + this.game.player1.hitBoxDef.offsetX + this.game.player1.hitBoxDef.width / 2) - (this.x + this.hitBoxDef.width / 2);
					var dy = (this.game.player1.y + this.game.player1.hitBoxDef.offsetY + this.game.player1.hitBoxDef.height / 2) - (this.y + this.hitBoxDef.height / 2);
					this.x += dx / 20;
					this.y += dy / 20;
				}
			}
	        if ((this.specialId != 0 && this.step >= 90) || checkCollision(this, this.game.player1)) {
				addScore(this.game, this.type == 2 ? 100 : 25);
                playSound(coinSound);
	            this.removeFromWorld = true;
				var particleAmount = this.type == 2 ? 10 : 3;
				for (var i = 0; i < particleAmount; i++) {
					var newParticle = new Particle(PART_SECONDARY, (this.x + this.hitBoxDef.width / 2), (this.y + this.hitBoxDef.height / 2), 
							-2, 2, -2, 2, 0, 0.15, 0, 0, 0, 50, .75, .15, true, this.game);
					element = new CircleElement(4 + Math.random() * 2, "#73efff", "#ffb8ff");
					newParticle.other = element;
					this.game.addEntity(newParticle);
				}
	        }
		}
		if (this.type === ENTITY_MARKER) { //entity marker
			/*if (this.step % 4 === 0)
				this.game.addEntity(new Particle(IMG_PART, this.x, this.y - 10, -0.2, 0.3, -0.3, 0.3, 0, 0.1, 5, 5, 10, 50, 0.7, 0.2, true, this.game,
						new Animation(ASSET_MANAGER.getAsset("./img/Particle/orange_flare.png"), 0, 0, 64, 64, 0.03, 16, true, false, 0, 0)));*/
			this.game.entities.forEach(function(entity) {
				if (entity.hitBox != null) {
					if (entity instanceof Enemy && checkCollision(that, entity)) {
						entity.flip();
						/*that.game.addEntity(new Particle(IMG_PART, that.x, that.y - 10, -0.2, 0.3, -0.3, 0.3, 0, 0.1, 5, 5, 10, 50, 0.7, 0.2, true, that.game,
								new Animation(ASSET_MANAGER.getAsset("./img/Particle/orange_flare.png"), 0, 0, 64, 64, 0.03, 16, true, false, 0, 0)));*/
					}
				}
			});
		}
		if (this.type === TIP_MARKER) {
	        if (checkCollision(this, this.game.player1)) {
	            this.game.showTip(this.specialId);
	            this.removeFromWorld = true;
	        }
		}
		if (this.type === JELLYBAIT && this.phase == 0) {
	        if (checkCollision(this, this.game.player1)) {
				this.phase = 1;
				setTimeout(
					function() {
						var chat = new TextBox(that.game, "./img/Chat/UnknownSquare.png", "...", true);
						var chat2 = new TextBox(that.game, "./img/Chat/UnknownSquare.png", "Jelly... I'm not sure what you expected when you jumped down here.", true);
						var chat3 = new TextBox(that.game, "./img/Chat/JellySquare.png", "lol idk either", true);
						var chat4 = new TextBox(that.game, "./img/Chat/UnknownSquare.png", "You're lucky though !! Because I'm going to go bail you out ~", true);
						chat.nextText = chat2;
						chat2.nextText = chat3;
						chat3.nextText = chat4;
						that.game.jellybait = true;
						that.game.addEntity(chat);
						that.game.pauseTime = 100;
						that.game.player1.teleportToX = 5574 - 128;
						that.game.player1.teleportToY = 32;
						that.phase = 2;
						that.cooldown = 5;
					}, 5000);
	        }
		}
		if (this.type === JELLYBAIT && this.phase == 2 && this.cooldown == 0) {
	        if (checkCollision(this, this.game.player1)) {
				this.phase = 3;
				setTimeout(
					function() {
						var chat = new TextBox(that.game, "./img/Chat/UnknownSquare.png", "...", true);
						var chat2 = new TextBox(that.game, "./img/Chat/UnknownSquare.png", "Jelly... are you cereal", true);
						var chat3 = new TextBox(that.game, "./img/Chat/JellySquare.png", "lag?", true);
						var chat4 = new TextBox(that.game, "./img/Chat/UnknownSquare.png", "Let me help you up again~", true);
						chat.nextText = chat2;
						chat2.nextText = chat3;
						chat3.nextText = chat4;
						that.game.addEntity(chat);
						that.game.pauseTime = 100;
						that.game.player1.teleportToX = 5574 - 128;
						that.game.player1.teleportToY = 32;
						that.phase = 4;
						that.cooldown = 5;
					}, 5000);
	        }
		}
		if (this.type === JELLYBAIT && this.phase == 4) {
	        if (checkCollision(this, this.game.player1)) {
				this.phase = 5;
				setTimeout(
					function() {
						var chat = new TextBox(that.game, "./img/Chat/UnknownSquare.png", "...", true);
						var chat2 = new TextBox(that.game, "./img/Chat/UnknownSquare.png", "Ok Jelly... you're trying really hard I know", true);
						var chat3 = new TextBox(that.game, "./img/Chat/UnknownSquare.png", "But I think this is enough for now...", true);
						var chat4 = new TextBox(that.game, "./img/Chat/UnknownSquare.png", "We'll meet soon enough! So wait until then, okay?", true);
						chat.nextText = chat2;
						chat2.nextText = chat3;
						chat3.nextText = chat4;
						that.game.addEntity(chat);
						that.game.pauseTime = 100;
						that.game.player1.teleportToX = 5574 - 128;
						that.game.player1.teleportToY = 32;
						var p = new Platform(that.game, 5560, 224, 0, 0, 0, PLATFORM_BOUNCY);
						that.game.addEntity(p);
						that.game.currentMap.platforms.push(p);
						that.removeFromWorld = true;
					}, 5000);
	        }
		}
		if (this.type === 7) { //tree of life
			if (this.step % 3 === 0) {
				var newParticle = new Particle(PART_SECONDARY, this.x + 80 + Math.random() * 50, this.y + Math.random() * 100, 
						-2, 2, -3, -5, -.5, 0.1, 0, 0, 0, 15, .2, .05, true, this.game);
				element = new CircleElement(30 + Math.random() * 4, "#6bb572", "#7be384");
				newParticle.other = element;
				this.game.addEntity(newParticle);
			}
	        if (checkCollision(this, this.game.player1)) {
				if (this.gatherTime % 60 === 0)
					playSound(treeSound); //gather sound
				this.gatherTime++;
				if (this.gatherTime >= 180) {
					var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x - 50, this.game.player1.hitBox.y, 
							0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
					var damageText = new TextElement("", "Lucida Console", 25, "#ffd43a", "black");
					damageText.text = "Tree of life - obtained!";
					damageParticle.other = damageText;
					this.game.addEntity(damageParticle);
					this.removeFromWorld = true;
					this.game.currentPhase = 3;
					
					var chat = new TextBox(this.game, "./img/Chat/JellySquare.png", "There's a suspicious smell nearby.");
					this.game.addEntity(chat);
					this.game.player1.canControl = false;
				}
	        } else {
				this.gatherTime = 0;
			}
		}
		if (this.type === 8) { //landmine
	        if (checkCollision(this, this.game.player1) && this.game.player1.vulnerable) {
				var newParticle = new Particle(PART_SECONDARY, this.x + 32, this.y + 32, 
						-2, 2, -3, -5, -.5, 0.1, 0, 0, 0, 15, .2, .05, true, this.game);
				element = new CircleElement(100, "#ed0000", "#cc0000");
				newParticle.other = element;
				this.game.addEntity(newParticle);
                this.game.player1.xVelocity = -0.1;
				this.game.player1.vulnerable = false;
				this.game.player1.hitByAttack = true;
                this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
	            playSound(explosionSound);
				applyDamage(this.game.player1.x, this.game.player1.y, this.game, 20, this.game.player1);
	            this.removeFromWorld = true;
	        }
		}
		if (this.type === 9) { //telephoto camera
	        if (checkCollision(this, this.game.player1)) {
	            playSound(healSound);
	            var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
	                    0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
	            var damageText = new TextElement("", "Lucida Console", 25, "#ffd43a", "black");
	            damageText.text = "Stealth Detection!";
	            damageParticle.other = damageText;
                this.game.addEntity(damageParticle);
	            this.game.player1.telephotoTimer = 600;
	            this.removeFromWorld = true;
	        }
		}
		if (this.type === 10) { //speed gate
		
			var newParticle = new Particle(PART_SECONDARY, this.x + Math.random() * 50, this.y + Math.random() * 500, 
					-2, 2, -3, -5, -.5, 0.1, 0, 0, 0, 15, .2, .05, true, this.game);
			element = new SquareElement(30 + Math.random() * 20, 30 + Math.random() * 20, "#a6f9ff", "#6ae2eb");
			newParticle.other = element;
			this.game.addEntity(newParticle);
	        if (checkCollision(this, this.game.player1)) {
	            playSound(speedgateSound);
				this.game.cameraSpeed = 50;
	            this.game.player1.zoomTimer = 180;
				this.game.player1.xVelocity = 50;
	            this.removeFromWorld = true;
				this.game.player1.canControl = false;
				this.game.currentPhase = 6;
	        }
		}
		if (this.type === 11) { //radar
	        if (checkCollision(this, this.game.player1)) {
	            playSound(healSound);
	            var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
	                    0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
	            var damageText = new TextElement("", "Lucida Console", 25, "#ffd43a", "black");
	            damageText.text = "Attack Speed Up!";
	            damageParticle.other = damageText;
                this.game.addEntity(damageParticle);
	            this.game.player1.telephotoTimer = 600;
	            this.removeFromWorld = true;
	        }
		}
		if (this.type === 12) { //tear of selene
	        if (checkCollision(this, this.game.player1)) {
	            playSound(energyUpSound);
	            var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
	                    0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
	            var damageText = new TextElement("", "Lucida Console", 25, "#ffd43a", "black");
	            damageText.text = "Energy Up!";
	            damageParticle.other = damageText;
                this.game.addEntity(damageParticle);
	            addEnergy(this.game, 25);
	            this.removeFromWorld = true;
	        }
		}
		if (this.type === 13) { //mithril quiver
	        if (checkCollision(this, this.game.player1)) {
	            playSound(healSound);
	            var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
	                    0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
	            var damageText = new TextElement("", "Lucida Console", 25, "#ffd43a", "black");
	            damageText.text = "Weapons upgraded!";
	            damageParticle.other = damageText;
                this.game.addEntity(damageParticle);
	            this.removeFromWorld = true;
				this.game.currentPhase = 16;
	        }
		}
	}
    Entity.prototype.update.call(this);
};

Powerup.prototype.draw = function (ctx) {
	if (this.type === 8) {
		if (this.game.player1.telephotoTimer > 0)
			this.animation.drawFrame(this.game.clockTick, ctx, this.x + this.animation.offsetX,
					this.y + this.animation.offsetY, 1, 1);
		
	} else if (this.animation != null) {
		this.animation.drawFrame(this.game.clockTick, ctx, this.x + this.animation.offsetX,
				this.y + this.animation.offsetY, 1, 1);
	}
    drawHitBox(this);
    Entity.prototype.draw.call(this);
}


// equipment ID
var LONG_RANGE = 0;

// form IDs
var FORM_BABY = 0;
var FORM_WATERBREATHE = 1;
var FORM_HEAL = 2;
var FORM_ANGLER = 3;

/**
    Character (Character ID)
*/

function Character(game) {
    // Number Variables
	this.runSpeed = 4;
	this.jumpSpeed = 0; // X Velocity when jumping
	this.displacementXSpeed = 0;
	this.displacementFriction = 0.4;
    this.yVelocity = 0;
    this.xVelocity = 0; // X Velocity when hit
	this.destinationX = -1;
	this.destinationY = -1;
    this.jumpYVelocity = 9; // Max Y upwards velocity when jumping
    this.gravity = 0.4;
    this.strongAttackCost = 20; // Stamina cost of strong attacks
    this.wCost = 30;
    this.eCost = 40;
    this.staminaRegen = 0; // 0.2
    this.healthRegen = 0.0;
    this.maxHealth = 100.0;
    this.currentHealth = this.maxHealth;
    this.currentHealthTemp = this.currentHealth;
    this.maxStamina = 100.0;
    this.currentStamina = 100;
    this.currentStaminaTemp = 0;
    this.attackInput = 0; // Keyboard Input for Attack, 1 = Light, 2 = Strong
	this.attackIndex = 0;
    this.lastComboIndex = 0; // The last combo index (AA, Q, etc)
    this.lastComboStage = 0; // The last stage of your combo (1, 2, 3, etc)
    this.comboTime = 0; // The timer before the combo drops off
    this.invulnTimerMax = 40;
    this.invulnTimer = 0;
	this.stunTimer = 0;
	this.stunned = false;
	this.speedTimer = 0;
	this.ultiTimer = 0;
	this.zoomTimer = 0;
	this.telephotoTimer = 0;
	this.petalTorrentHits = 0;
    this.invincTimer = 0; //invulnerability from powerup
    this.bounceTimer = 0;
    this.ground = 490;
    this.autoDamage = 2;
    this.autoScaling = 1;
    this.qDamage = 4;
    this.qScaling = 2;
    this.wDamage = 6;
    // String Variables
	this.lastDirection = "Right";
	this.attackDirection = "Right";
    // Boolean Variables
	this.running = false;
	this.runningVertical = false;
    this.dead = false;
    this.jumping = false;
	this.dashing = false;
	this.dashTime = 0;
	this.dashIndex = 0;
	this.healTime = 0;
	this.healing = false;
    this.falling = true;
	this.attacking = false;
    this.vulnerable = true;
    this.canControl = true;
    this.hurt = false;
    this.hitByAttack = false;
    this.leftDown = false;
    this.rightDown = false;
    this.upDown = false;
    this.downDown = false;
    this.jumpDown = false;
	this.lastDirectionVertical = "Up";
	this.cooldown = 0;
	this.dashCooldown = 0;
	this.isPlayer = true;
	this.phaseTimer = 0;
	this.alternate = 0;
	this.queuedAction = "";
	this.queuedTime = 0;
	this.binded = false;
	this.phaseTick = 0;
	
	this.lastX = 0;
	this.lastY = 0;
	
	this.lastSafeX = -1;
	this.lastSafeY = -1;
	this.lastPlatform = null;
	this.teleportToX = -1;
	this.teleportToY = -1;
	this.difficultyTick = 0;
    
    this.timesHit = 0;
	this.currentForm = 0;
	this.obstacleCd = 0;
	this.obstacleLastX = 0;
	this.lastScoreX = this.x;
    
    this.targetHit = []; // The targets you've currently hit with your attack
	
	//equipment states
	this.equipment = [
		false
	];
      
    // Animations
	
	this.idleAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Character/char_idle.png"), 0, 0, 64, 64, 1, 1, true, false, 0, 0);
	this.jumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Character/char_jump.png"), 0, 0, 64, 64, 1, 1, true, false, 0, 0);
	this.hurtAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Character/char_hurt.png"), 0, 0, 64, 64, 1, 1, true, false, 0, 0);
    
    this.currentAnimation = this.idleAnimation;
    
    Entity.call(this, game, -2300, 300);
    
    this.hitBoxDef = {
    	width: 48, height: 48, offsetX: 8, offsetY: 8, growthX: 0, growthY: 0, originalOffsetX: 0
    };
    drawHitBox(this);
}

Character.prototype = new Entity();
Character.prototype.constructor = Character;

function handleDie(game) {
	game.pauseTime = 0;
	playSound(clownSound);
	game.player1.vulnerable = false;
	var particle = new Particle(PART_GENERATOR,
			game.player1.hitBox.x + game.player1.hitBox.width / 2,
			game.player1.hitBox.y + game.player1.hitBox.height / 2, 
			0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, false, game);
	var element = new SquareElement(6 + Math.random() * 4, 6 + Math.random() * 4, "#b7f7f3", "#fbcfff");
	particle.other = element;
	game.addEntity(particle);
}

Character.prototype.hitSpike = function() {
	if (this.invulnTimer == 0) {
		var createX = this.x + this.hitBoxDef.offsetX + this.hitBoxDef.width / 2;
		var createY = this.y + this.hitBoxDef.offsetY + this.hitBoxDef.height / 2;
		for (var i = 0; i < 18; i++) {
			var newParticle = new Particle(PART_SECONDARY, createX, createY, 
					-20, 20, -20, 20, 0, 0.5, 0, 0, 0, 50, .75, .15, true, this.game);
			var element = new CircleElement(10 + Math.random() * 3, "#ffd9fd", "#f09cff");
			newParticle.other = element;
			this.game.addEntity(newParticle);
		}
		
		playSound(lightningSound);
		this.stunTimer = 30;
		this.vulnerable = false;
		this.invulnTimer = this.invulnTimerMax * 2;
		this.stunned = true;
		this.game.pauseTime = 5;
		this.yVelocity = 0;
		this.displacementXSpeed = 0;
		applyDamage(this.x, this.y, this.game, 25, this);
	}
}

Character.prototype.update = function () {
	this.lastX = this.x;
	this.lastY = this.y;
	var that = this;
	if (this.cooldown > 0)
		this.cooldown--;
	if (this.dashCooldown > 0)
		this.dashCooldown--;
	
	if (vtsAuthenticated && vtsCalibrated) {
		updateParameters();
	}
	if (this.teleportToX != -1) {
		this.x = this.teleportToX;
		this.y = this.teleportToY;
		this.xVelocity = 0;
		this.yVelocity = 0;
		this.teleportToX = -1;
		this.teleportToY = -1;
		console.log("teleporting to: " + this.x + ", " + this.y);
	} else if (!this.dead) {
		if (gameStarted) {
			if (vtsCalibrated) {
				this.phaseTick++;
				this.difficultyTick++;
				this.obstacleCd--;
				if (this.difficultyTick == 2700) {
					this.game.addEntity(new InfoBox(this.game, "The floor is about to become unsafe."));
				}
				if (this.difficultyTick == 3000) {
					this.game.addEntity(new InfoBox(this.game, "The floor is no longer safe. Good luck!"));
				}
				if (this.obstacleCd <= 0) {
					if (Math.abs(this.x - this.obstacleLastX) >= 90) {
						this.obstacleLastX = this.x;
						if (this.difficultyTick >= 4700) {
							var p, p2;
							this.obstacleCd = 150;
							if (Math.random() >= 0.5) { //pincer walls 
								var chosenY = -100 - Math.random() * 200;
								p = new Wall(this.game, this.game.liveCamera.x + this.game.liveCamera.width + 100, chosenY, 32, 400);
								p.mapFlag = true;
								this.game.currentMap.platforms.push(p);
								
								p2 = new Wall(this.game, this.game.liveCamera.x + this.game.liveCamera.width + 100, chosenY + 525, 32, 400);
								this.game.currentMap.platforms.push(p2);
								p2.mapFlag = true;								
							} else {
								if (Math.random() >= 0.5)
									p = new Wall(this.game, this.game.liveCamera.x + this.game.liveCamera.width + 100, 200 + Math.random() * 100, 32, 400);
								else
									p = new Wall(this.game, this.game.liveCamera.x + this.game.liveCamera.width + 100, -100 - Math.random() * 100, 32, 400);
								p.mapFlag = true;						
								this.game.currentMap.platforms.push(p);	
							}
						} else if (this.difficultyTick >= 3600) {
							var p, p2;
							this.obstacleCd = 180;
							if (Math.random() >= 0.5) { //pincer walls 
								var chosenY = -100 - Math.random() * 200;
								p = new Wall(this.game, this.game.liveCamera.x + this.game.liveCamera.width + 100, chosenY, 32, 400);
								p.mapFlag = true;
								this.game.currentMap.platforms.push(p);
								
								p2 = new Wall(this.game, this.game.liveCamera.x + this.game.liveCamera.width + 100, chosenY + 550, 32, 400);
								this.game.currentMap.platforms.push(p2);
								p2.mapFlag = true;								
							} else {
								if (Math.random() >= 0.5)
									p = new Wall(this.game, this.game.liveCamera.x + this.game.liveCamera.width + 100, 200 + Math.random() * 100, 32, 400);
								else
									p = new Wall(this.game, this.game.liveCamera.x + this.game.liveCamera.width + 100, -100 - Math.random() * 100, 32, 400);
								p.mapFlag = true;						
								this.game.currentMap.platforms.push(p);	
							}
						} else if (this.difficultyTick >= 1800) {
							var p, p2;
							this.obstacleCd = 180;
							if (Math.random() >= 0.5) { //pincer walls 
								var chosenY = -100 - Math.random() * 200;
								p = new Wall(this.game, this.game.liveCamera.x + this.game.liveCamera.width + 100, chosenY, 32, 400);
								p.mapFlag = true;
								this.game.currentMap.platforms.push(p);
								
								p2 = new Wall(this.game, this.game.liveCamera.x + this.game.liveCamera.width + 100, chosenY + 550 + Math.random() * 100, 32, 400);
								this.game.currentMap.platforms.push(p2);
								p2.mapFlag = true;								
							} else {
								if (Math.random() >= 0.5)
									p = new Wall(this.game, this.game.liveCamera.x + this.game.liveCamera.width + 100, 200 + Math.random() * 100, 32, 400);
								else
									p = new Wall(this.game, this.game.liveCamera.x + this.game.liveCamera.width + 100, -100 - Math.random() * 100, 32, 400);
								p.mapFlag = true;						
								this.game.currentMap.platforms.push(p);	
							}
						} else if (this.difficultyTick >= 900) { //add walls - up and down only
							var p;
							this.obstacleCd = 180;
							if (Math.random() >= 0.5)
								p = new Wall(this.game, this.game.liveCamera.x + this.game.liveCamera.width + 100, 200 + Math.random() * 100, 32, 400);
							else
								p = new Wall(this.game, this.game.liveCamera.x + this.game.liveCamera.width + 100, -100 - Math.random() * 100, 32, 400);
							this.game.currentMap.platforms.push(p);
							p.mapFlag = true;
						} else {
							this.obstacleCd = 180 + Math.random(60);
							var amount = 3 + Math.random() * 3;
							for (var i = 0; i < amount; i++) {
								var p = new Wall(this.game, this.game.liveCamera.x + this.game.liveCamera.width + 100 + i * 48, 450, 32, 32, WALL_SPIKE_UP, 0, 0);
								this.game.currentMap.platforms.push(p);
								p.mapFlag = true;
							}
						}
					}
				}
			}
			//game phase management
			if (this.game.currentPhase < 1) {
				startMusic.play();
				this.game.addEntity(new InfoBox(this.game, "NOD your head to jump."));
				this.game.step = 0;
				this.game.addEntity(new BigInfoBox(this.game, "Welcome to Flappy VTuber", "↓ To calibrate, please stare at this beautiful drawing below. ↓",
					"", new Animation(ASSET_MANAGER.getAsset("./img/UI/calibration.png"), 0, 0, 144, 32, 0.3, 3, true, false, -200, -200)));
				this.game.currentPhase = 1;
			}
			if (this.phaseTick >= 300)
				this.x += 3;
			if (this.x != this.lastScoreX) {
				addScore(this.game, 3);
				this.lastScoreX = this.x;
			}
			
			if (this.difficultyTick >= 3000 && this.phaseTick >= 300) {
				if (this.y + this.hitBoxDef.offsetY + this.hitBoxDef.height >= this.ground && this.vulnerable) {
					var createX = this.x + this.hitBoxDef.offsetX + this.hitBoxDef.width / 2;
					var createY = this.y + this.hitBoxDef.offsetY + this.hitBoxDef.height / 2;
					for (var i = 0; i < 18; i++) {
						var newParticle = new Particle(PART_SECONDARY, createX, createY, 
								-20, 20, -20, 20, 0, 0.5, 0, 0, 0, 50, .75, .15, true, this.game);
						var element = new CircleElement(10 + Math.random() * 3, "#ffd9fd", "#f09cff");
						newParticle.other = element;
						this.game.addEntity(newParticle);
					}
					
					this.vulnerable = false;
					applyDamage(this.x,this.y, this.game, 25, this);
					this.hitByAttack = true;
					this.stunTimer = this.game.player1.invulnTimerMax;
					this.invulnTimer = this.game.player1.invulnTimerMax * 2;
					this.stunned = true;
					this.yVelocity = 10;
					this.jumping = true;
					this.pauseTime = 8;
					playSound(lightningSound);
				}
			}
			if (invincible) {
				this.currentHealth = 1;
			}
			if (this.dead) {
				this.running = false;
				this.runningVertical = false;
			}
			if (this.game.currentPhase >= 0 && this.game.currentPhase <= 10) {
				/*var newParticle = new Particle(VOID_GOOP, this.game.liveCamera.x + Math.random() * this.game.liveCamera.width, this.game.liveCamera.y + this.game.liveCamera.height - 1, 
						-4, 4, -6, -4, .2, 0, 0, 60, 10, 15, .5, .2, true, this.game);
				this.game.addEntity(newParticle);*/
			}
			if (this.bounceTimer > 0) {
				this.bounceTimer--;
				if (this.bounceTimer % 2 === 0) {
					var particle = new Particle(SHAPE_PART,
							this.game.player1.hitBox.x + this.game.player1.hitBox.width / 2 - 10 + Math.random() * 20,
							this.game.player1.hitBox.y + this.game.player1.hitBox.height / 2 - 10 + Math.random() * 20, 
							0, 0, 0, 0, 0, 0.1, 0, 5, 10, 50, .6, .2, true, this.game);
					var element = new SquareElement(10, 10, "#00f6cb", "#70fe37");
					particle.other = element;
					this.game.addEntity(particle);
				}
			}
			if (this.destinationX !== -1 || this.destinationY !== -1) {
				this.running = true;
				if (this.destinationX !== -1) {
					if (this.destinationX > this.x) {
						this.x = Math.min(this.destinationX, this.x + this.runSpeed);
						this.lastDirection = "Right";
					} else {
						this.x = Math.max(this.destinationX, this.x - this.runSpeed);
						this.lastDirection = "Left";
					}
					if (this.x === this.destinationX) {
						this.destinationX = -1;
						this.lastDirection = "Right";
					}
				}
				if (this.destinationY !== -1) {
					if (this.destinationY > this.y)
						this.y = Math.min(this.destinationY, this.y + this.runSpeed);
					else
						this.y = Math.max(this.destinationY, this.y - this.runSpeed);
					if (this.y === this.destinationY)
						this.destinationY = -1;
				}
			}
			if (!this.dead && gameStarted && this.currentForm == FORM_BABY && (this.game.step % 30 == 0) && this.game.tipsShown[TIP_KELP]) { //baby drowns
				addEnergy(this.game, -2);
			}
			if (this.currentHealth <= 0 && !this.dead) {
				this.dead = true;
				handleDie(this.game);
			}
			if (!this.dead) {
				if (this.stunned) {
					if (this.xVelocity !== 0) { //knockback equates to stun
						this.canControl = false;
					}
					this.running = false;
					this.runningVertical = false;
					this.jumpSpeed = 0;
					this.hitBoxDef.growthX = 0;
				}
				if (!this.vulnerable && this.invulnTimer > 0) {
					this.invulnTimer--;
					if (this.invulnTimer <= 0) {
						this.vulnerable = true;
						this.hurt = false;
						this.hitByAttack = false;
					}
				}
				if (this.stunTimer > 0) {
					this.stunTimer--;
					if (this.stunTimer <= 0) {
						this.stunned = false;
						this.canControl = true;
						this.xVelocity = 0;
					}
				}
				if ((this.rightDown || this.leftDown) && this.canControl) {
					if (this.rightDown) {
						this.running = true;
						this.lastDirection = "Right";
					} else if (this.leftDown) {
						this.running = true;
						this.lastDirection = "Left";
					} else {
						this.running = false;
					}
				} else {
					this.running = false;
				}
		
				var platformFound = false;
				var wallFound = false;
				this.game.currentMap.platforms.forEach(function(currentPlatform) {
					currentPlatform.update();
					if ((that.hitBox.x + that.hitBox.width) > currentPlatform.hitBox.x) {
						if (that.hitBox.x < (currentPlatform.hitBox.x + currentPlatform.hitBox.width - 1)) {
							if ((that.hitBox.y + that.hitBox.height) + currentPlatform.vSpeed <= currentPlatform.hitBox.y || (that.hitBox.y + that.hitBox.height) - currentPlatform.vSpeed <= currentPlatform.hitBox.y) {
								if ((that.hitBox.y + that.hitBox.height - (that.yVelocity - that.gravity )) >= currentPlatform.hitBox.y) {
									if (currentPlatform.fadeAmount >= 0.5) {
										//fall through
									} else {
										if (currentPlatform.specialId == PLATFORM_BREAK && !currentPlatform.trigger) {
											currentPlatform.trigger = true;
											currentPlatform.step = 0;
										}
										platformFound = true;
										if (!currentPlatform.temporary &&
											currentPlatform.life == 0 && 
											currentPlatform.specialId == 0 &&
											currentPlatform.hSpeed == 0 && 
											currentPlatform.vSpeed == 0) {
											that.lastSafeX = that.x;
											that.lastSafeY = that.y;
										}
										if (currentPlatform.isWall) {
											wallFound = true;
										}
										if (currentPlatform.isWall && currentPlatform.specialId == WALL_SPIKE_UP && !that.stunned) {
											if (that.attacking && that.attackIndex == 2) {
												playSound(hitMetal);
												if (that.falling || that.jumping) {
													that.yVelocity = 8;
												}
											} else {
												that.hitSpike();
											}
										} else if (!currentPlatform.isWall && currentPlatform.specialId === PLATFORM_BOUNCY) { //bouncy platform
											that.yVelocity = 15;
											that.bounceTimer = 30;
											that.jumpSpeed = 0;
											that.jumping = true;
											playSound(bounceSound);
										} else {
											that.x += currentPlatform.hSpeed;
											that.y += currentPlatform.vSpeed;
											that.yVelocity = 0;
											if (that.dashIndex == 1) {
												that.dashing = false;
												that.dashTime = 0;
												that.dashIndex = 0;
												that.groundSlam();
											}
											if (that.falling) {
												that.falling = false;
												that.yVelocity = 0;
												that.y = currentPlatform.hitBox.y - that.hitBox.height - that.hitBoxDef.offsetY;
											}
										}
									}
								}
							}
						}
					}
				});
				if (this.jumpDown && !this.jumping && !this.falling && this.canControl) {
					this.jumping = true;
					playSound(jumpSound);
					if (this.downDown && platformFound && !wallFound) {
						this.yVelocity = -1; //drop through
						console.log("dropping");					
					} else {
						this.yVelocity = this.jumpYVelocity;
					}
					if (this.rightDown) {
						this.lastDirection = "Right";
						this.jumpSpeed = this.runSpeed;
					} else if (this.leftDown) {
						this.lastDirection = "Left";
						this.jumpSpeed = -this.runSpeed;
					} else {
						this.jumpSpeed = 0;
					}
				}
				if (this.queuedTime > 0) {
					this.queuedTime--;
					if (this.queuedTime == 0) {
						this.queuedAction = "";
					}
				}
				this.healing = false;
				
				if (!platformFound && !this.jumping) {
					if (!this.falling) {
						this.falling = true;
						if (!this.attacking) {
							if (this.rightDown) {
								this.lastDirection = "Right";
								this.jumpSpeed = this.runSpeed;
							} else if (this.leftDown) {
								this.lastDirection = "Left";
								this.jumpSpeed = -this.runSpeed;
							} else {
								this.jumpSpeed = 0;
							}
						}
					}
				}
				
				var noSnap = false;
				var collision = false;
				var targetEntity = null;
				if (this.invincTimer > 0) {
					this.invincTimer--;
					if (this.invincTimer % 4 === 0) {
						var particle = new Particle(SHAPE_PART,
								this.game.player1.hitBox.x + this.game.player1.hitBox.width / 2 - 10 + Math.random() * 20,
								this.game.player1.hitBox.y + this.game.player1.hitBox.height * Math.random(), 
								2, -2, 2, -2, 0, 0.05, 0, 5, 10, 50, 1, 0, false, this.game);
						var element = new SquareElement(4 + Math.random() * 4, 4 + Math.random() * 4, "#ffffff", "#ffffff");
						particle.other = element;
						this.game.addEntity(particle);
					}
				}
			}
		}
		
		
		var moveSpeed = this.runSpeed;
		if (this.speedTimer > 0)
			moveSpeed *= 1.6;
		if (!this.canControl && this.stunned) { 
			this.x += this.xVelocity;
		}
		this.x += this.displacementXSpeed;
		if (this.dashing) { //ignore all other input
			if (this.dashTime % 3 == 0)
				this.game.addEntity(new Particle(IMG_PART, this.x, this.y, 0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 0.3, 0, false, this.game, this.currentAnimation));
			this.dashTime -= 1;
			this.yVelocity = 0;
			if (this.dashIndex == 0) {
				if (this.attackDirection == "Right")
					this.x += moveSpeed * 3;
				else
					this.x -= moveSpeed * 3;
			} else { //down dash
				this.yVelocity = moveSpeed * -3;
				this.y -= this.yVelocity;    
				this.falling = true;
				this.jumping = false;
			}
			if (this.dashTime <= 0) {
				this.dashing = false;
				this.dashIndex = false;
			}
		} else {
			if (this.running) {
				if (!platformFound && !this.falling && !this.jumping && !(this.jumping && this.yVelocity <= 0)) {
					this.lastSafeX = that.x;
					this.lastSafeY = that.y;
				}
				if (this.lastDirection === "Right") {
					this.x += moveSpeed;
				} else if (this.lastDirection === "Left") {
					this.x -= moveSpeed;
				}
			}
			/*if (this.runningVertical) {
				if (this.lastDirectionVertical === "Up") {
					this.y -= moveSpeed;
				} else if (this.lastDirectionVertical === "Down") {
					this.y += moveSpeed;
				}*/
			if (this.jumping || this.falling) {
				this.yVelocity-= this.gravity;  
				this.y -= this.yVelocity;    
			}
			if (this.jumping && this.yVelocity <= 0) {
				this.falling = true;
				this.jumping = false;
			}
		}
		if (this.falling && (this.hitBox.y + this.hitBox.height - this.hitBoxDef.offsetY) >= this.ground) {
			this.yVelocity = 0;
			this.falling = false;
			this.y = this.ground - this.hitBox.height;
			this.lastSafeX = that.x;
			this.lastSafeY = that.y;
			if (that.dashIndex == 1) {
				that.dashing = false;
				that.dashTime = 0;
				that.dashIndex = 0;
				that.groundSlam();
			}
		}
		/*if (this.hitBox.x + this.hitBoxDef.width >= this.game.camera.maxX + this.game.surfaceWidth && (this.lastDirection === "Right" || this.hurt)) {
			this.x = this.game.camera.maxX + this.game.surfaceWidth - this.hitBoxDef.width - this.hitBoxDef.offsetX;
		}
		if (this.hitBox.x + this.hitBox.width - this.hitBoxDef.width <= this.game.camera.minX && (this.lastDirection === "Left" || this.hurt)) {
			this.x = this.game.camera.minX + 0 - this.hitBoxDef.offsetX;
		}*/
		this.game.currentMap.platforms.forEach(function(currentPlatform) {
			if (currentPlatform.isWall) {
				if (that.hitBox.x + that.hitBox.width > currentPlatform.x && that.hitBox.x < currentPlatform.x + currentPlatform.width - 1) {
					if (that.lastY + that.hitBoxDef.offsetY > currentPlatform.y + currentPlatform.height && that.y + that.hitBoxDef.offsetY < currentPlatform.y + currentPlatform.height) {
						that.hitSpike();
					}
				}
				if (that.hitBox.y + that.hitBox.height > currentPlatform.y && that.hitBox.y < currentPlatform.y + currentPlatform.height) {
					if (that.hitBox.x < currentPlatform.x && that.hitBox.x + that.hitBox.width >= currentPlatform.x && (that.lastDirection == "Right" || that.displacementXSpeed > 0 || that.xVelocity > 0)) {
						platformFound = true;
						that.x = currentPlatform.x - that.hitBox.width - that.hitBoxDef.offsetX;
						that.hitSpike();
					} else if (that.hitBox.x < currentPlatform.x + currentPlatform.width && that.hitBox.x + that.hitBox.width >= currentPlatform.x + currentPlatform.width && (that.lastDirection == "Left" || that.displacementXSpeed < 0 || that.xVelocity < 0)) {
						platformFound = true;
						that.x = currentPlatform.x + currentPlatform.width - that.hitBoxDef.growthX - that.hitBoxDef.offsetX - 1;
						that.hitSpike();
					}
				} 
			}
		});
		if (this.displacementXSpeed > 0) {
			this.displacementXSpeed -= this.displacementFriction;			
			if (this.displacementXSpeed < 0)
				this.displacementXSpeed = 0;
		} else {
			this.displacementXSpeed += this.displacementFriction;			
			if (this.displacementXSpeed > 0)
				this.displacementXSpeed = 0;
		}
		if (this.hitBox.x + this.hitBoxDef.width >= this.game.camera.x + this.game.camera.width) {
			this.x = this.game.camera.x + this.game.camera.width - this.hitBoxDef.width - this.hitBoxDef.offsetX - 4;
		}
		if (this.hitBox.x + this.hitBox.width - this.hitBoxDef.width <= this.game.camera.x) {
			this.x = this.game.camera.x + 0 - this.hitBoxDef.offsetX + 4;
		}
		if (this.hitBox.y + this.hitBoxDef.height >= this.game.camera.maxY + this.game.surfaceHeight && (this.lastDirectionVertical === "Down")) {
			this.y = this.game.camera.maxY + this.game.surfaceHeight - this.hitBoxDef.height - this.hitBoxDef.offsetY;
		}
		if (this.hitBox.y + this.hitBox.height - this.hitBoxDef.height <= this.game.camera.minY) {
			this.y = this.game.camera.minY + 1 - this.hitBoxDef.offsetY;
			this.yVelocity = -1;
			console.log("bump head");
		}
		if (this.x <= 0 && this.game.currentPhase === 0) {
			this.x = 0;
		}
	}
    
    Entity.prototype.update.call(this);
};

Character.prototype.draw = function (ctx) {
	if (!this.dead) {
		var doNotDraw = false;
		if (this.stunned) {
			this.currentAnimation = this.hurtAnimation;
		} else if (this.jumping) {
			this.currentAnimation = this.jumpAnimation;
		} else {
			this.currentAnimation = this.idleAnimation;
		}
		//ctx.drawImage(ASSET_MANAGER.getAsset("./img/Misc/debug.png"), this.lastSafeX + this.currentAnimation.offsetX + 16 + this.hitBoxDef.offsetX, 
			//this.lastSafeY + this.currentAnimation.offsetY + 16 + this.hitBoxDef.offsetY);
		if (!this.vulnerable) {
			if (this.game.step % 4 !== 0) {
				doNotDraw = true;
			}
		}
		if (!doNotDraw)
			this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x + this.currentAnimation.offsetX, this.y + this.currentAnimation.offsetY, 1, true);
		else {
			ctx.globalAlpha = 0.1;
			this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x + this.currentAnimation.offsetX, this.y + this.currentAnimation.offsetY, 1, true);
			ctx.globalAlpha = 1;
		}
	    drawHitBox(this, ctx);
	}
    Entity.prototype.draw.call(this);
};

/*
	Asset manager
*/

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./img/BackgroundSolid.png");
ASSET_MANAGER.queueDownload("./img/UI/Bottom.png");
ASSET_MANAGER.queueDownload("./img/Platform/wall_red.png");
ASSET_MANAGER.queueDownload("./img/UI/BarBack.png");
ASSET_MANAGER.queueDownload("./img/UI/HealthBar.png");
ASSET_MANAGER.queueDownload("./img/UI/HealthBarLight.png");
ASSET_MANAGER.queueDownload("./img/UI/StaminaBar.png");
ASSET_MANAGER.queueDownload("./img/UI/StaminaBarLight.png");
ASSET_MANAGER.queueDownload("./img/UI/Platform.png");
ASSET_MANAGER.queueDownload("./img/UI/PlatformBouncy.png");
ASSET_MANAGER.queueDownload("./img/UI/PlatformFire.png");
ASSET_MANAGER.queueDownload("./img/UI/blackscreen_bar.png");
ASSET_MANAGER.queueDownload("./img/UI/calibration.png");
ASSET_MANAGER.queueDownload("./img/Misc/debug.png");

ASSET_MANAGER.queueDownload("./img/Character/char_idle.png");
ASSET_MANAGER.queueDownload("./img/Character/char_jump.png");
ASSET_MANAGER.queueDownload("./img/Character/char_hurt.png");

ASSET_MANAGER.queueDownload("./img/Platform/spike_up.png");
ASSET_MANAGER.queueDownload("./img/Platform/spike_down.png");
ASSET_MANAGER.queueDownload("./img/Platform/wall.png");


ASSET_MANAGER.downloadAll(function () {
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');

    gameEngine = new GameEngine();
    var bg = new Background(gameEngine);
    var character = new Character(gameEngine);
    var map = new Map(gameEngine);
    var ui = new UI(gameEngine);
    
    gameEngine.addEntity(bg);
    gameEngine.addEntity(map);
    gameEngine.addEntity(character);
    gameEngine.addEntity(ui);

    gameEngine.init(ctx);
    gameEngine.setPlayer1(character);
    gameEngine.setMap(map);
    gameEngine.setUI(ui);
    gameEngine.start();
	
    document.getElementById("gameWorld").focus();
});