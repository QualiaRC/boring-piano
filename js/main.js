$(document).ready(function () {
	"use strict";

	// White keys
	var cPressed = false;
	var dPressed = false;
	var ePressed = false;
	var fPressed = false;
	var gPressed = false;
	var aPressed = false;
	var bPressed = false;
	// Black keys
	var dbPressed = false;
	var ebPressed = false;
	var gbPressed = false;
	var abPressed = false;
	var bbPressed = false;

	function PlayNote(noteid) {
		$("#note-" + noteid)[0].currentTime = 0;
		$("#note-" + noteid)[0].play();
	}

	// White keys
	$("#key-c").mousedown(function () {
		PlayNote('c');
	});
	$("#key-d").mousedown(function () {
		PlayNote('d');
	});
	$("#key-e").mousedown(function () {
		PlayNote('e');
	});
	$("#key-f").mousedown(function () {
		PlayNote('f');
	});
	$("#key-g").mousedown(function () {
		PlayNote('g');
	});
	$("#key-a").mousedown(function () {
		PlayNote('a');
	});
	$("#key-b").mousedown(function () {
		PlayNote('b');
	});
	// Black keys
	$("#key-db").mousedown(function () {
		PlayNote('db');
	});
	$("#key-eb").mousedown(function () {
		PlayNote('eb');
	});
	$("#key-gb").mousedown(function () {
		PlayNote('gb');
	});
	$("#key-ab").mousedown(function () {
		PlayNote('ab');
	});
	$("#key-bb").mousedown(function () {
		PlayNote('bb');
	});

	$(document).keydown(function (e) {
		switch (e.which) {
			// White keys
			case 65: // a
				if (!cPressed) {
					cPressed = true;
					$("#key-c").addClass("active");
					PlayNote('c');
				}
				break;
			case 83: // s
				if (!dPressed) {
					dPressed = true;
					$("#key-d").addClass("active");
					PlayNote('d');
				}
				break;
			case 68: // d
				if (!ePressed) {
					ePressed = true;
					$("#key-e").addClass("active");
					PlayNote('e');
				}
				break;
			case 70: // f
				if (!fPressed) {
					fPressed = true;
					$("#key-f").addClass("active");
					PlayNote('f');
				}
				break;
			case 71: // g
				if (!gPressed) {
					gPressed = true;
					$("#key-g").addClass("active");
					PlayNote('g');
				}
				break;
			case 72: // h
				if (!aPressed) {
					aPressed = true;
					$("#key-a").addClass("active");
					PlayNote('a');
				}
				break;
			case 74: // j
				if (!bPressed) {
					bPressed = true;
					$("#key-b").addClass("active");
					PlayNote('b');
				}
				break;
				// Black Keys
			case 87: // w
				if (!dbPressed) {
					dbPressed = true;
					$("#key-db").addClass("active");
					PlayNote('db');
				}
				break;
			case 69: // e
				if (!ebPressed) {
					ebPressed = true;
					$("#key-eb").addClass("active");
					PlayNote('eb');
				}
				break;
			case 84: // t
				if (!gbPressed) {
					gbPressed = true;
					$("#key-gb").addClass("active");
					PlayNote('gb');
				}
				break;
			case 89: // y
				if (!abPressed) {
					abPressed = true;
					$("#key-ab").addClass("active");
					PlayNote('ab');
				}
				break;
			case 85: // u
				if (!bbPressed) {
					bbPressed = true;
					$("#key-bb").addClass("active");
					PlayNote('bb');
				}
				break;
			default:
				return;
		}
	});

	$(document).keyup(function (e) {
		switch (e.which) {
			// White keys
			case 65: // a
				cPressed = false;
				$("#key-c").removeClass("active");
				break;
			case 83: // s
				dPressed = false;
				$("#key-d").removeClass("active");
				break;
			case 68: // d
				ePressed = false;
				$("#key-e").removeClass("active");
				break;
			case 70: // f
				fPressed = false;
				$("#key-f").removeClass("active");
				break;
			case 71: // g
				gPressed = false;
				$("#key-g").removeClass("active");
				break;
			case 72: // h
				aPressed = false;
				$("#key-a").removeClass("active");
				break;
			case 74: // j
				bPressed = false;
				$("#key-b").removeClass("active");
				break;
				// Black keys
			case 87: // w
				dbPressed = false;
				$("#key-db").removeClass("active");
				break;
			case 69: // e
				ebPressed = false;
				$("#key-eb").removeClass("active");
				break;
			case 84: // t
				gbPressed = false;
				$("#key-gb").removeClass("active");
				break;
			case 89: // y
				abPressed = false;
				$("#key-ab").removeClass("active");
				break;
			case 85: // u
				bbPressed = false;
				$("#key-bb").removeClass("active");
				break;

			default:
				return;
		}
	});

});
