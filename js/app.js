$(docment).ready(function () {
	function getItem() {
		$('#input').keydown(function (enter) {
		if(enter.keyCode == 13) {
			postItem();
		}
	});
}

getItem();
	
	function postItem() {
        var item = $('#input').val();
        var work = '<p class="full-width no-strikethrough">'+ xMark + item + checkMark + '</p>';
        $('.listarea').prepend(work);
        $('.list').val('');
        $('#listarea p:first-child')
        .css('opacity', "0")
        .css("margin-top", "-20px")
        .animate(
            { opacity: "1" },
            { queue: true, duration: 'slow' }
        )
        .animate(
            {marginTop: "0px"},
            { queue: false, duration: 'slow' }
        );
    }
