console.log(screen.width)
$('#sub').hover(() => {
	if(screen.width >= 767) {
		$('#sub').animate({
			marginTop: '-800px',
			scrollTop: 0,
			height: $('#main').height() + 'px'
		}, 0);

		$('#sub').css('overflow', 'auto')

		$('.btn-group-vertical').animate({
			marginTop: '-75px',
			scrollTop: '0px'
		}, 50);

		setTimeout(() => {
			$('#submain').css('visibility', 'hidden');
		}, 125);
	}
}, () => {
	if(screen.width >= 767) {
		$('#sub').animate({
			marginTop: '-175px',
			scrollTop: '0px',
			height: '175px'
		}, 0);

		$('.btn-group-vertical').animate({
			marginTop: '100px',
			scrollTop: '0px'
		}, 50);

		setTimeout(() => {
			$('#submain').css('visibility', 'visible');
		}, 125);
	}
})

$(document).ready(function(){
    $('#btnup').on('click', () => {
		if(screen.width >= 767) {
			$('#sub').animate({
				marginTop: '-800px',
				scrollTop: 0,
				height: $('#main').height() + 'px'
			}, 0);

			$('#sub').css('overflow', 'auto')

			$('.btn-group-vertical').animate({
				marginTop: '-75px',
				scrollTop: '0px'
			}, 50);

			setTimeout(() => {
				$('#submain').css('visibility', 'hidden');
			}, 125);
		}
    })

    $('#btndown').on('click', () => {
    	if(screen.width >= 767) {
			$('#sub').animate({
				marginTop: '-175px',
				scrollTop: '0px',
				height: '175px'
			}, 0);

			$('.btn-group-vertical').animate({
				marginTop: '100px',
				scrollTop: '0px'
			}, 50);

			setTimeout(() => {
				$('#submain').css('visibility', 'visible');
			}, 125);
		}
    })
});
