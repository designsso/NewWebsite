console.log(screen.width)
$('#sub').hover(() => {
	if(screen.width <= 1440) {
		$('#sub').animate({
			marginTop: '-500px',
			scrollTop: 0,
			height: $('#main').height() + 'px'
		}, 0);
	} else {
		$('#sub').animate({
			marginTop: '-700px',
			scrollTop: 0,
			height: $('#main').height() + 'px'
		}, 0);
	}

	$('#sub').css('overflow', 'auto')/Users/louis289/Downloads/NewWebsite-main/main.js

	$('.btn-group-vertical').animate({
		marginTop: '-75px',
		scrollTop: '0px'
	}, 25);

	setTimeout(() => {
		$('#submain').css('visibility', 'hidden');
	}, 100);
}, () => {
	if(screen.width < 1440) {
		$('#sub').animate({
			marginTop: '-150px',
			scrollTop: '0px',
			height: '150px'
		}, 0);
	}  else {
		$('#sub').animate({
			marginTop: '-175px',
			scrollTop: '0px',
			height: '175px'
		}, 0);
	}

	$('.btn-group-vertical').animate({
		marginTop: '100px',
		scrollTop: '0px'
	}, 25);

	setTimeout(() => {
		$('#submain').css('visibility', 'visible');
	}, 100);
})

$(document).ready(function(){
    $('#btnup').on('click', () => {
		if(screen.width <= 1440) {
			$('#sub').animate({
				marginTop: '-500px',
				scrollTop: 0,
				height: $('#main').height() + 'px'
			}, 0);
		} else {
			$('#sub').animate({
				marginTop: '-700px',
				scrollTop: 0,
				height: $('#main').height() + 'px'
			}, 0);
		}

		$('#sub').css('overflow', 'auto')

		$('.btn-group-vertical').animate({
			marginTop: '-75px',
			scrollTop: '0px'
		}, 150);

		setTimeout(() => {
			$('#submain').css('visibility', 'hidden');
		}, 300);
    })

    $('#btndown').on('click', () => {
		if(screen.width < 1440) {
			$('#sub').animate({
				marginTop: '-150px',
				scrollTop: '0px',
				height: '150px'
			}, 0);
		} else {
			$('#sub').animate({
				marginTop: '-175px',
				scrollTop: '0px',
				height: '175px'
			}, 0);
		}

		$('.btn-group-vertical').animate({
			marginTop: '100px',
			scrollTop: '0px'
		}, 150);

		setTimeout(() => {
			$('#submain').css('visibility', 'visible');
		}, 300);
    })
});
