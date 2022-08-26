$('#sub').hover(() => {
	$('#sub').animate({
		marginTop: '-700px',
		scrollTop: 0,
		height: $('#main').height() + 'px'
	}, 0);

	$('#sub').css('overflow', 'auto')

	$('.btn-group-vertical').animate({
		marginTop: '-75px',
		scrollTop: '0px'
	}, 25);

	setTimeout(() => {
		$('#submain').css('visibility', 'hidden');
	}, 100);
}, () => {
	$('#sub').animate({
		marginTop: '-175px',
		scrollTop: '0px',
		height: '175px'
	}, 0);

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
    	$('#sub').animate({
			marginTop: '-700px',
			scrollTop: 0,
			height: ($('#main').height() + 3 ) + 'px'
		}, 0);

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
    	$('#sub').animate({
			marginTop: '-175px',
			scrollTop: '0px',
			height: '175px'
		}, 0);

		$('.btn-group-vertical').animate({
			marginTop: '100px',
			scrollTop: '0px'
		}, 150);

		setTimeout(() => {
			$('#submain').css('visibility', 'visible');
		}, 300);
    })
});
