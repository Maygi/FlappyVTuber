var API_VERSION = "1.0";
var REQUEST_ID = 0;
var token = "";
var vtsAuthenticated = false;
var baseY = 0;
var faceYLog = [];
var vtsCalibrated = false;
var vtsCalibrating = false;
var faceYTotal = 0;
var faceYLast = 0;
var peakY = 0;
var waitingTicks = 0;
var flapDetected = false;
var gameReference = null;

var socket = new WebSocket("ws://localhost:8001/");
socket.onopen = function(e) {
  console.log("[open] Connection established");
  console.log("Sending to server");
  attemptAuthenticate();
};

socket.onmessage = function(event) {
  //console.log(`[message] Data received from server: ${event.data}`);
  var json = JSON.parse(event.data);
  if (json.messageType == "AuthenticationTokenResponse") {
	  onTokenResponse(json);
  }
  if (json.messageType == "AuthenticationResponse") {
	  onAuthenticationResponse(json);
  }
  if (json.messageType == "ParameterValueResponse") {
	  onParameterResponse(json);
  }
};

socket.onclose = function(event) {
  if (event.wasClean) {
	console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
	// e.g. server process killed or network down
	// event.code is usually 1006 in this case
	console.log('[close] Connection died');
  }
};

socket.onerror = function(error) {
  console.log(`[error] ${error.message}`);
};

function onParameterResponse(json) {
	var faceY = json.data.value;
	faceYLast = faceY;
	if (faceY > peakY)
		peakY = faceY;
	//console.log("calibrated: " + vtsCalibrated + "; ing: " + vtsCalibrating);
	if (!vtsCalibrated) {
		console.log("faceY: " + faceY);
		faceYTotal += faceY;
		faceYLog.push(faceY);
		if (faceYLog.length == 300) {
			baseY = faceYTotal / 300;
			vtsCalibrated = true;
		}
	} else { //check for flaps
		if (faceY <= Math.max(-25, baseY - 8) && !flapDetected) {
			flapDetected = true;
			playSound(jumpSound);
			gameReference.player1.jumping = true;
			gameReference.player1.yVelocity = Math.min(15, Math.max(3, 3 * ((30 - baseY) + peakY) / 10));
			peakY = -30;
		} else if (faceY >= Math.max(-20, baseY - 7)) {
			flapDetected = false;
		}
	}
}

function onTokenResponse(json) {
	token = json.data.authenticationToken;
	console.log("Successfully set auth token: " + token);
	socket.send(JSON.stringify(AUTH_REQUEST).replace("_TOKEN", token));
}

function onAuthenticationResponse(json) {
	if (json.data.authenticated == true) {
		vtsAuthenticated = true;
		console.log("AUTHENTICATED VTS");
	} else {
		console.log("Auth failed");
	}
}

function attemptAuthenticate() {
	if (!vtsAuthenticated) {
		socket.send(JSON.stringify(TOKEN_REQUEST));
	}
}

function updateParameters() {
	socket.send(JSON.stringify(PARAM_REQUEST));
}

var TOKEN_REQUEST = {
	"apiName": "VTubeStudioPublicAPI",
	"apiVersion": API_VERSION,
	"requestID": REQUEST_ID++,
	"messageType": "AuthenticationTokenRequest",
	
	"data": {
		"pluginName": "FlappyVTuber",
		"pluginDeveloper": "Maygi",
		"pluginIcon": ""
	}
};

var AUTH_REQUEST = {
	"apiName": "VTubeStudioPublicAPI",
	"apiVersion": API_VERSION,
	"requestID": REQUEST_ID++,
	"messageType": "AuthenticationRequest",
	
	"data": {
		"pluginName": "FlappyVTuber",
		"pluginDeveloper": "Maygi",
		"pluginIcon": "",
		"authenticationToken": "_TOKEN"
	}
};

var PARAM_REQUEST = {
	"apiName": "VTubeStudioPublicAPI",
	"apiVersion": API_VERSION,
	"requestID": REQUEST_ID++,
	"messageType": "ParameterValueRequest",
	
	"data": {
		"name": "FaceAngleY"
	}
};