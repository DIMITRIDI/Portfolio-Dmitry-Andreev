let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

jQuery(document).ready(function () {

	jQuery('form button').click( function() {
		var form = jQuery(this).closest('form');

		if ( form.valid() ) {
			form.css('opacity','.5');
			var actUrl = form.attr('action');

			jQuery.ajax({
				url: actUrl,
				type: 'post',
				dataType: 'html',
				data: form.serialize(),
				success: function(data) {
					form.html(data);
					form.css('opacity','1');
						form.find('.status').html('форма отправлена успешно');
						//$('#myModal').modal('show') // для бутстрапа
				},
				error:	 function() {
					form.find('.status').html('серверная ошибка');
				}
			});
		}
	});

});

// фон
VANTA.BIRDS({
	el: "#banner",
	mouseControls: true,
	touchControls: true,
	gyroControls: false,
	minHeight: 200.00,
	minWidth: 200.00,
	scale: 1.00,
	scaleMobile: 1.00,
	backgroundColor: 0xfcfcfc
});

// clock
function clock() {
	const hoursArrow = document.querySelector('.hours'),
			minutesArrow = document.querySelector('.minutes'),
			secondsArrow = document.querySelector('.seconds'),
			deg = 6;

	setInterval(() => {
		const day = new Date(),
				hours = day.getHours() * 30,
				minutes = day.getMinutes() * deg,
				seconds = day.getSeconds() * deg;

		hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`;
		minutesArrow.style.transform = `rotateZ(${minutes}deg)`;
		secondsArrow.style.transform = `rotateZ(${seconds}deg)`;

	}, 0);
}
clock();