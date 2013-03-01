$(document).ready(function() {
	$(".album-settings-link")[0].click();
	$("#cboxOverlay").hide();
	$("#colorbox").hide();
	
	var $ischecked = $("#userLayoutForm #horizontal").attr('checked');
	if (!$ischecked) {
		$("#userLayoutForm #horizontal").attr('checked', 'checked');
		$(".button-medium.userSessionLayout").click();
	}
	$('#colorbox').remove();
})