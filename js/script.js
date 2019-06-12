'use strict';
function writeTextByJS(id, text, speed) {
	var ele = document.getElementById(id),
		txt = text.join('').split('');

	var interval = setInterval(function() {
		if (!txt[0]) {
			return clearInterval(interval);
		}

		ele.innerHTML += txt.shift();
	}, speed != undefined ? speed : 100);

	return false;
}

writeTextByJS('demo', [ 'Воплотим в жизнь интерьер, который будет\n', 'радовать лаконичностью и уютом\n' ], 250);
