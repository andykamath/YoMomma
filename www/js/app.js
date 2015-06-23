document.addEventListener("deviceready", init, false);
function init() {

	document.querySelector("#iLoveYouMom").addEventListener("touchend", function() {
		console.log("click");
		var number = document.querySelector("#number").value;
		var message = "I love you mom";
		console.log("going to send "+message+" to "+number);

		//simple validation for now
		if(number === '' || message === '') return;

		var msg = {
			phoneNumber:number,
			textMessage:"I love you mom"
		};

		sms.sendMessage(msg, function(message) {
			console.log("success: " + message);
			navigator.notification.alert(
			    'Message to ' + number + ' has been sent.',
			    null,
			    'Message Sent',
			    'Done'
			);

		}, function(error) {
			console.log("error: " + error.code + " " + error.message);
			navigator.notification.alert(
				'Sorry, message not sent: ' + error.message,
				null,
				'Error',
				'Done'
			);
		});

	}, false);
	document.querySelector("#yesMom").addEventListener("touchend", function() {
		console.log("click");
		var number = document.querySelector("#number").value;
		var message = "Yes mom";
		console.log("going to send "+message+" to "+number);

		//simple validation for now
		if(number === '' || message === '') return;

		var msg = {
			phoneNumber:number,
			textMessage:"Yes mom"
		};

		sms.sendMessage(msg, function(message) {
			console.log("success: " + message);
			navigator.notification.alert(
			    'Message to ' + number + ' has been sent.',
			    null,
			    'Message Sent',
			    'Done'
			);

		}, function(error) {
			console.log("error: " + error.code + " " + error.message);
			navigator.notification.alert(
				'Sorry, message not sent: ' + error.message,
				null,
				'Error',
				'Done'
			);
		});

	}, false);document.querySelector("#sorryMom").addEventListener("touchend", function() {
		console.log("click");
		var number = document.querySelector("#number").value;
		var message = "Sorry mom";
		console.log("going to send "+message+" to "+number);

		//simple validation for now
		if(number === '' || message === '') return;

		var msg = {
			phoneNumber:number,
			textMessage:"Sorry mom"
		};

		sms.sendMessage(msg, function(message) {
			console.log("success: " + message);
			navigator.notification.alert(
			    'Message to ' + number + ' has been sent.',
			    null,
			    'Message Sent',
			    'Done'
			);

		}, function(error) {
			console.log("error: " + error.code + " " + error.message);
			navigator.notification.alert(
				'Sorry, message not sent: ' + error.message,
				null,
				'Error',
				'Done'
			);
		});

	}, false);document.querySelector("#iAteFine").addEventListener("touchend", function() {
		console.log("click");
		var number = document.querySelector("#number").value;
		var message = "I ate fine";
		console.log("going to send "+message+" to "+number);

		//simple validation for now
		if(number === '' || message === '') return;

		var msg = {
			phoneNumber:number,
			textMessage:"I ate fine"
		};

		sms.sendMessage(msg, function(message) {
			console.log("success: " + message);
			navigator.notification.alert(
			    'Message to ' + number + ' has been sent.',
			    null,
			    'Message Sent',
			    'Done'
			);

		}, function(error) {
			console.log("error: " + error.code + " " + error.message);
			navigator.notification.alert(
				'Sorry, message not sent: ' + error.message,
				null,
				'Error',
				'Done'
			);
		});

	}, false);document.querySelector("#okay").addEventListener("touchend", function() {
		console.log("click");
		var number = document.querySelector("#number").value;
		var message = "Okay";
		console.log("going to send "+message+" to "+number);

		//simple validation for now
		if(number === '' || message === '') return;

		var msg = {
			phoneNumber:number,
			textMessage:"Okay"
		};

		sms.sendMessage(msg, function(message) {
			console.log("success: " + message);
			navigator.notification.alert(
			    'Message to ' + number + ' has been sent.',
			    null,
			    'Message Sent',
			    'Done'
			);

		}, function(error) {
			console.log("error: " + error.code + " " + error.message);
			navigator.notification.alert(
				'Sorry, message not sent: ' + error.message,
				null,
				'Error',
				'Done'
			);
		});

	}, false);document.querySelector("#cool").addEventListener("touchend", function() {
		console.log("click");
		var number = document.querySelector("#number").value;
		var message = "Cool";
		console.log("going to send "+message+" to "+number);

		//simple validation for now
		if(number === '' || message === '') return;

		var msg = {
			phoneNumber:number,
			textMessage:"Cool"
		};

		sms.sendMessage(msg, function(message) {
			console.log("success: " + message);
			navigator.notification.alert(
			    'Message to ' + number + ' has been sent.',
			    null,
			    'Message Sent',
			    'Done'
			);

		}, function(error) {
			console.log("error: " + error.code + " " + error.message);
			navigator.notification.alert(
				'Sorry, message not sent: ' + error.message,
				null,
				'Error',
				'Done'
			);
		});

	}, false);document.querySelector("#thanks").addEventListener("touchend", function() {
		console.log("click");
		var number = document.querySelector("#number").value;
		var message = "Thanks";
		console.log("going to send "+message+" to "+number);

		//simple validation for now
		if(number === '' || message === '') return;

		var msg = {
			phoneNumber:number,
			textMessage:"Thanks"
		};

		sms.sendMessage(msg, function(message) {
			console.log("success: " + message);
			navigator.notification.alert(
			    'Message to ' + number + ' has been sent.',
			    null,
			    'Message Sent',
			    'Done'
			);

		}, function(error) {
			console.log("error: " + error.code + " " + error.message);
			navigator.notification.alert(
				'Sorry, message not sent: ' + error.message,
				null,
				'Error',
				'Done'
			);
		});

	}, false);
	document.querySelector("#neeraj").addEventListener("touchend", function() {
		console.log("click");
		var number = document.querySelector("#number").value;
		var message = "Fuck You Neeraj";
		console.log("going to send "+message+" to "+number);

		//simple validation for now
		if(number === '' || message === '') return;

		var msg = {
			phoneNumber:"9194984315",
			textMessage:"Fuck You Neeraj"
		};

		sms.sendMessage(msg, function(message) {
			console.log("success: " + message);
			navigator.notification.alert(
			    'Message to ' + number + ' has been sent.',
			    null,
			    'Message Sent',
			    'Done'
			);

		}, function(error) {
			console.log("error: " + error.code + " " + error.message);
			navigator.notification.alert(
				'Sorry, message not sent: ' + error.message,
				null,
				'Error',
				'Done'
			);
		});

	}, false);
}