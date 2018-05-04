function init(){
	var canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');

	//Bill Cipher_1
	//right hand
	context.lineJoin = "round";
	context.lineCap = "round";
	context.lineWidth = 15;
	context.beginPath();
	context.moveTo(105,290);
	context.lineTo(66,299);
	context.arcTo(51,303,37,314,40);
	context.lineTo(42,390);
	context.stroke();

	//right leg
	context.lineWidth = 15;
	context.moveTo(171,374);
	context.quadraticCurveTo(184,444,221,407);
	context.quadraticCurveTo(225,445,221,455);
	context.stroke();

	//left leg
	context.beginPath();
	context.moveTo(240,364);
	context.quadraticCurveTo(250,443,291,391);
	context.quadraticCurveTo(303,408,294,437);
	context.stroke();

	//Body
	context.lineJoin = "round";
	context.lineWidth = 20;
	context.strokeStyle = "#FBF16D";
	context.beginPath();
	context.moveTo(159,109);
	context.lineTo(370,338);
	context.lineTo(87,376);
	context.closePath();
	context.stroke();
	context.fillStyle = "#FBF16D";
	context.fill();

	//1st line
	context.lineJoin = "default";
	context.lineWidth = 3;
	context.strokeStyle = "#E6D843";
	context.beginPath();
	context.moveTo(100,302);
	context.lineTo(322,275);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(126,299);
	context.lineTo(129,321);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(192,291);
	context.lineTo(195,311);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(273,281);
	context.lineTo(277,303);
	context.closePath();
	context.stroke();

	//2nd line
	context.beginPath();
	context.moveTo(95,326);
	context.lineTo(340,294);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(150,320);
	context.lineTo(152,344);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(247,308);
	context.lineTo(251,330);
	context.closePath();
	context.stroke();

	//3rd line
	context.beginPath();
	context.moveTo(88,353);
	context.lineTo(360,317);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(163,343);
	context.lineTo(166,373);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(308,324);
	context.lineTo(311,355);
	context.closePath();
	context.stroke();

	//tie
	context.strokeStyle = "#000";
	context.fillStyle = "#000";
	context.beginPath();
	context.moveTo(165,302);
	context.lineTo(196,312);
	context.lineTo(168,331);
	context.closePath();
	context.stroke();
	context.fill();

	context.beginPath();
	context.moveTo(196,312);
	context.lineTo(224,293);
	context.lineTo(228,322);
	context.closePath();
	context.stroke();
	context.fill();

	//hat
	context.lineCap = "butt";
	context.lineWidth = 12;
	context.beginPath();
	context.moveTo(120,101);
	context.lineTo(193,88);
	context.stroke();
	context.fill();

	context.lineWidth = 30;
	context.beginPath();
	context.moveTo(156,93);
	context.lineTo(140,5);
	context.stroke();
	context.fill();

	//upeyelashes
	context.lineCap = "round";
	context.lineWidth = 3;
	context.beginPath();
	context.moveTo(157,192);
	context.quadraticCurveTo(150,188,149,181);
	context.stroke();

	context.beginPath();
	context.moveTo(170,184);
	context.quadraticCurveTo(165,178,167,171);
	context.stroke();

	context.beginPath();
	context.moveTo(187,181);
	context.quadraticCurveTo(186,173,189,167);
	context.stroke();

	context.beginPath();
	context.moveTo(202,184);
	context.quadraticCurveTo(203,175,208,171);
	context.stroke();

	//downeyelashes
	context.beginPath();
	context.moveTo(168,261);
	context.quadraticCurveTo(159,268,160,278);
	context.stroke();

	context.beginPath();
	context.moveTo(184,265);
	context.quadraticCurveTo(183,271,184,277);
	context.stroke();

	context.beginPath();
	context.moveTo(203,263);
	context.quadraticCurveTo(203,270,205,275);
	context.stroke();

	context.beginPath();
	context.moveTo(218,257);
	context.quadraticCurveTo(221,264,226,269);
	context.stroke();

	//eye
	context.lineWidth = 3;
	context.fillStyle = "#fff";
	context.beginPath();
	context.moveTo(136,242);
	context.quadraticCurveTo(165,130,245,220);
	context.quadraticCurveTo(210,300,136,242);
	context.fill();
	context.stroke();

	//color
	context.fillStyle = "#fcd92a";
	context.strokeStyle = "transparent";
	context.beginPath();
	context.moveTo(140,245);
	context.quadraticCurveTo(185,218,240,229);
	context.quadraticCurveTo(210,292,140,245);
	context.fill();
	context.stroke();

	//eye
	context.strokeStyle = "#000";
	context.fillStyle = "transparent";
	context.beginPath();
	context.moveTo(245,220);
	context.quadraticCurveTo(210,300,136,242);
	context.fill();
	context.stroke();

	//eye core
	context.fillStyle = "#000";
	context.beginPath();
	context.moveTo(164,231);
	context.quadraticCurveTo(157,218,159,209);
	context.quadraticCurveTo(165,201,168,211);
	context.quadraticCurveTo(170,216,175,228);
	context.closePath();
	context.stroke();
	context.fill();

	//eye down
	context.strokeStyle = "#000";
	context.beginPath();
	context.moveTo(142,246);
	context.quadraticCurveTo(186,215,241,229);
	context.stroke();

	context.beginPath();
	context.moveTo(163,243);
	context.quadraticCurveTo(184,233,210,235);
	context.stroke();

	//left hand
	context.lineJoin = "round";
	context.lineCap = "round";
	context.lineWidth = 15;
	context.beginPath();
	context.moveTo(302,267);
	context.lineTo(375,257);
	context.quadraticCurveTo(380,255,408,310);
	context.quadraticCurveTo(415,315,408,310);
	context.stroke();


	context.translate(500,0);

	//Bill Cipher_2
	//right hand
	context.strokeStyle = "#f9cacd";
	context.lineJoin = "round";
	context.lineCap = "round";
	context.lineWidth = 15;
	context.beginPath();
	context.moveTo(105,290);
	context.lineTo(66,299);
	context.arcTo(51,303,37,314,40);
	context.lineTo(42,390);
	context.stroke();

	//right leg
	context.lineWidth = 15;
	context.moveTo(171,374);
	context.quadraticCurveTo(184,444,221,407);
	context.quadraticCurveTo(225,445,221,455);
	context.stroke();

	//left leg
	context.beginPath();
	context.moveTo(240,364);
	context.quadraticCurveTo(250,443,291,391);
	context.quadraticCurveTo(303,408,294,437);
	context.stroke();

	//Body
	context.lineJoin = "round";
	context.lineWidth = 20;
	context.strokeStyle = "#ED313F";
	context.beginPath();
	context.moveTo(159,109);
	context.lineTo(370,338);
	context.lineTo(87,376);
	context.closePath();
	context.stroke();
	context.fillStyle = "#ED313F";
	context.fill();

	//1st line
	context.lineJoin = "default";
	context.lineWidth = 3;
	context.strokeStyle = "#CE0530";
	context.beginPath();
	context.moveTo(100,302);
	context.lineTo(322,275);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(126,299);
	context.lineTo(129,321);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(192,291);
	context.lineTo(195,311);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(273,281);
	context.lineTo(277,303);
	context.closePath();
	context.stroke();

	//2nd line
	context.beginPath();
	context.moveTo(95,326);
	context.lineTo(340,294);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(150,320);
	context.lineTo(152,344);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(247,308);
	context.lineTo(251,330);
	context.closePath();
	context.stroke();

	//3rd line
	context.beginPath();
	context.moveTo(88,353);
	context.lineTo(360,317);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(163,343);
	context.lineTo(166,373);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(308,324);
	context.lineTo(311,355);
	context.closePath();
	context.stroke();

	//tie
	context.strokeStyle = "#000";
	context.fillStyle = "#000";
	context.beginPath();
	context.moveTo(165,302);
	context.lineTo(196,312);
	context.lineTo(168,331);
	context.closePath();
	context.stroke();
	context.fill();

	context.beginPath();
	context.moveTo(196,312);
	context.lineTo(224,293);
	context.lineTo(228,322);
	context.closePath();
	context.stroke();
	context.fill();

	//hat
	context.lineCap = "butt";
	context.strokeStyle = "#f9cacd";
	context.lineWidth = 12;
	context.beginPath();
	context.moveTo(120,101);
	context.lineTo(193,88);
	context.stroke();
	context.fill();

	context.lineWidth = 30;
	context.beginPath();
	context.moveTo(156,93);
	context.lineTo(140,5);
	context.stroke();
	context.fill();

	//downeyelashes
	context.lineCap = "round";
	context.lineWidth = 3;
	context.beginPath();
	context.moveTo(168,261);
	context.quadraticCurveTo(159,268,160,278);
	context.stroke();

	context.beginPath();
	context.moveTo(184,265);
	context.quadraticCurveTo(183,271,184,277);
	context.stroke();

	context.beginPath();
	context.moveTo(203,263);
	context.quadraticCurveTo(203,270,205,275);
	context.stroke();

	context.beginPath();
	context.moveTo(218,257);
	context.quadraticCurveTo(221,264,226,269);
	context.stroke();
	
	//eye
	context.lineWidth = 3;
	context.fillStyle = "#000";
	context.beginPath();
	context.moveTo(136,242);
	context.quadraticCurveTo(165,130,245,220);
	context.quadraticCurveTo(210,300,136,242);
	context.fill();
	context.stroke();

	//eyecore
	context.translate(-10,-10);
	context.fillStyle = "#fff";
	context.strokeStyle = "#fff";
	context.beginPath();
	context.moveTo(187,215);
	context.lineTo(193,235);
	context.quadraticCurveTo(200,255,203,240);
	context.lineTo(200,213);
	context.fill();
	context.stroke();


	//color
	context.translate(0,10);

	context.fillStyle = "#ED313F";
	context.strokeStyle = "#ED313F";
	context.beginPath();
	context.moveTo(156,200);
	context.quadraticCurveTo(206,228,216,179);
	context.quadraticCurveTo(170,120,156,200);
	context.fill();
	context.stroke();

	//eye up
	context.strokeStyle = "#f9cacd";
	context.beginPath();
	context.moveTo(156,200);
	context.quadraticCurveTo(206,228,216,179);
	context.stroke();

	context.strokeStyle = "#f9cacd";
	context.beginPath();
	context.moveTo(174,193);
	context.quadraticCurveTo(195,207,203,184);
	context.stroke();

	//left hand
	context.lineJoin = "round";
	context.lineCap = "round";
	context.lineWidth = 15;
	context.beginPath();
	context.moveTo(302,267);
	context.lineTo(375,257);
	context.quadraticCurveTo(380,255,408,310);
	context.quadraticCurveTo(415,315,408,310);
	context.stroke();


	context.translate(-480,500);

	//Bill Cipher_3
	//right hand
	context.lineJoin = "round";
	context.lineCap = "round";
	context.strokeStyle = "#000";
	context.lineWidth = 15;
	context.beginPath();
	context.moveTo(105,290);
	context.lineTo(66,299);
	context.arcTo(51,303,37,314,40);
	context.lineTo(42,390);
	context.stroke();

	//right leg
	context.lineWidth = 15;
	context.moveTo(171,374);
	context.quadraticCurveTo(184,444,221,407);
	context.quadraticCurveTo(225,445,221,455);
	context.stroke();

	//left leg
	context.beginPath();
	context.moveTo(240,364);
	context.quadraticCurveTo(250,443,291,391);
	context.quadraticCurveTo(303,408,294,437);
	context.stroke();

	//Body
	context.lineJoin = "round";
	context.lineWidth = 20;
	context.strokeStyle = "#FBF16D";
	context.beginPath();
	context.moveTo(159,109);
	context.lineTo(370,338);
	context.lineTo(87,376);
	context.closePath();
	context.stroke();
	context.fillStyle = "#FBF16D";
	context.fill();

	//1st line
	context.lineJoin = "default";
	context.lineWidth = 3;
	context.strokeStyle = "#E6D843";
	context.beginPath();
	context.moveTo(100,302);
	context.lineTo(322,275);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(126,299);
	context.lineTo(129,321);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(192,291);
	context.lineTo(195,311);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(273,281);
	context.lineTo(277,303);
	context.closePath();
	context.stroke();

	//2nd line
	context.beginPath();
	context.moveTo(95,326);
	context.lineTo(340,294);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(150,320);
	context.lineTo(152,344);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(247,308);
	context.lineTo(251,330);
	context.closePath();
	context.stroke();

	//3rd line
	context.beginPath();
	context.moveTo(88,353);
	context.lineTo(360,317);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(163,343);
	context.lineTo(166,373);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(308,324);
	context.lineTo(311,355);
	context.closePath();
	context.stroke();

	//tie
	context.strokeStyle = "#000";
	context.fillStyle = "#000";
	context.beginPath();
	context.moveTo(165,302);
	context.lineTo(196,312);
	context.lineTo(168,331);
	context.closePath();
	context.stroke();
	context.fill();

	context.beginPath();
	context.moveTo(196,312);
	context.lineTo(224,293);
	context.lineTo(228,322);
	context.closePath();
	context.stroke();
	context.fill();

	//hat
	context.lineCap = "butt";
	context.lineWidth = 12;
	context.beginPath();
	context.moveTo(120,101);
	context.lineTo(193,88);
	context.stroke();
	context.fill();

	context.lineWidth = 30;
	context.beginPath();
	context.moveTo(156,93);
	context.lineTo(140,5);
	context.stroke();
	context.fill();

	//upeyelashes
	context.lineCap = "round";
	context.lineWidth = 3;
	context.beginPath();
	context.moveTo(157,192);
	context.quadraticCurveTo(150,188,149,181);
	context.stroke();

	context.beginPath();
	context.moveTo(170,184);
	context.quadraticCurveTo(165,178,167,171);
	context.stroke();

	context.beginPath();
	context.moveTo(187,181);
	context.quadraticCurveTo(186,173,189,167);
	context.stroke();

	context.beginPath();
	context.moveTo(202,184);
	context.quadraticCurveTo(203,175,208,171);
	context.stroke();

	//downeyelashes
	context.beginPath();
	context.moveTo(168,261);
	context.quadraticCurveTo(159,268,160,278);
	context.stroke();

	context.beginPath();
	context.moveTo(184,265);
	context.quadraticCurveTo(183,271,184,277);
	context.stroke();

	context.beginPath();
	context.moveTo(203,263);
	context.quadraticCurveTo(203,270,205,275);
	context.stroke();

	context.beginPath();
	context.moveTo(218,257);
	context.quadraticCurveTo(221,264,226,269);
	context.stroke();

	//eye
	context.lineWidth = 3;
	context.fillStyle = "#fff";
	context.beginPath();
	context.moveTo(136,242);
	context.quadraticCurveTo(165,130,245,220);
	context.quadraticCurveTo(210,300,136,242);
	context.fill();
	context.stroke();

	//eye
	context.strokeStyle = "#000";
	context.fillStyle = "transparent";
	context.beginPath();
	context.moveTo(245,220);
	context.quadraticCurveTo(210,300,136,242);
	context.fill();
	context.stroke();

	//left hand
	context.lineJoin = "round";
	context.lineCap = "round";
	context.lineWidth = 15;
	context.beginPath();
	context.moveTo(302,267);
	context.lineTo(375,257);
	context.quadraticCurveTo(380,255,408,310);
	context.quadraticCurveTo(415,315,408,310);
	context.stroke();


	context.translate(550,0);
	//Bill Cipher_4
	//right hand
	context.lineJoin = "round";
	context.lineCap = "round";
	context.lineWidth = 15;
	context.beginPath();
	context.moveTo(105,290);
	context.lineTo(66,299);
	context.arcTo(51,303,37,314,40);
	context.lineTo(42,390);
	context.stroke();

	//right leg
	context.lineWidth = 15;
	context.moveTo(171,374);
	context.quadraticCurveTo(184,444,221,407);
	context.quadraticCurveTo(225,445,221,455);
	context.stroke();

	//left leg
	context.beginPath();
	context.moveTo(240,364);
	context.quadraticCurveTo(250,443,291,391);
	context.quadraticCurveTo(303,408,294,437);
	context.stroke();

	//Body
	context.lineJoin = "round";
	context.lineWidth = 20;
	context.strokeStyle = "#000";
	context.beginPath();
	context.moveTo(159,109);
	context.lineTo(370,338);
	context.lineTo(87,376);
	context.closePath();
	context.stroke();
	context.fillStyle = "#000";
	context.fill();

	//1st line
	context.lineJoin = "default";
	context.lineWidth = 2;
	context.strokeStyle = "#fff";
	context.beginPath();
	context.moveTo(100,302);
	context.lineTo(322,275);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(126,299);
	context.lineTo(129,321);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(192,291);
	context.lineTo(195,311);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(273,281);
	context.lineTo(277,303);
	context.closePath();
	context.stroke();

	//2nd line
	context.beginPath();
	context.moveTo(95,326);
	context.lineTo(340,294);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(150,320);
	context.lineTo(152,344);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(247,308);
	context.lineTo(251,330);
	context.closePath();
	context.stroke();

	//3rd line
	context.beginPath();
	context.moveTo(88,353);
	context.lineTo(360,317);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(163,343);
	context.lineTo(166,373);
	context.closePath();
	context.stroke();

	context.beginPath();
	context.moveTo(308,324);
	context.lineTo(311,355);
	context.closePath();
	context.stroke();

	//tie
	context.strokeStyle = "#fff";
	context.fillStyle = "#fff";
	context.beginPath();
	context.moveTo(165,302);
	context.lineTo(196,312);
	context.lineTo(168,331);
	context.closePath();
	context.stroke();
	context.fill();

	context.beginPath();
	context.moveTo(196,312);
	context.lineTo(224,293);
	context.lineTo(228,322);
	context.closePath();
	context.stroke();
	context.fill();

	//hat
	context.strokeStyle = "#000";
	context.lineCap = "butt";
	context.lineWidth = 12;
	context.beginPath();
	context.moveTo(120,101);
	context.lineTo(193,88);
	context.stroke();
	context.fill();

	context.lineWidth = 30;
	context.beginPath();
	context.moveTo(156,93);
	context.lineTo(140,5);
	context.stroke();
	context.fill();

	//upeyelashes
	context.lineCap = "round";
	context.lineWidth = 3;
	context.beginPath();
	context.moveTo(157,192);
	context.quadraticCurveTo(150,188,149,181);
	context.stroke();

	context.beginPath();
	context.moveTo(170,184);
	context.quadraticCurveTo(165,178,167,171);
	context.stroke();

	context.beginPath();
	context.moveTo(187,181);
	context.quadraticCurveTo(186,173,189,167);
	context.stroke();

	context.beginPath();
	context.moveTo(202,184);
	context.quadraticCurveTo(203,175,208,171);
	context.stroke();

	//downeyelashes
	context.beginPath();
	context.moveTo(168,261);
	context.quadraticCurveTo(159,268,160,278);
	context.stroke();

	context.beginPath();
	context.moveTo(184,265);
	context.quadraticCurveTo(183,271,184,277);
	context.stroke();

	context.beginPath();
	context.moveTo(203,263);
	context.quadraticCurveTo(203,270,205,275);
	context.stroke();

	context.beginPath();
	context.moveTo(218,257);
	context.quadraticCurveTo(221,264,226,269);
	context.stroke();

	//eye
	context.lineWidth = 3;
	context.fillStyle = "#fff";
	context.beginPath();
	context.moveTo(136,242);
	context.quadraticCurveTo(165,130,245,220);
	context.quadraticCurveTo(210,300,136,242);
	context.fill();
	context.stroke();

	//eye
	context.strokeStyle = "#000";
	context.fillStyle = "transparent";
	context.beginPath();
	context.moveTo(245,220);
	context.quadraticCurveTo(210,300,136,242);
	context.fill();
	context.stroke();


	//eye core
	context.translate(0,5);

	context.shadowColor = "yellow";
	context.shadowBlur = 15;
	context.fillStyle = "#000";
	context.lineWidth = 5;
	context.beginPath();
	context.moveTo(190,245);
	context.lineTo(180,190);
	context.closePath();
	context.stroke();
	context.fill();


	//left hand
	context.translate(0,-5);

	context.shadowBlur = "";
	context.lineJoin = "round";
	context.lineCap = "round";
	context.lineWidth = 15;
	context.beginPath();
	context.moveTo(302,267);
	context.lineTo(375,257);
	context.quadraticCurveTo(380,255,408,310);
	context.quadraticCurveTo(415,315,408,310);
	context.stroke();
}
window.onload = init;