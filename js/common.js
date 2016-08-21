$(function(){
	
	var context = $(document).find('.tab-pane.active');

	var updateContext = function (e) {
		context = $(e.currentTarget.hash);
	}

	$('a[data-toggle="tab"]').on('show.bs.tab', updateContext);

	var setFocus = function () {
		var firstElement = context.find('*').filter(':input:not(button,[disabled]):visible:first');
		firstElement.focus();
	}

	$('a[data-toggle="tab"]').on('shown.bs.tab', setFocus);

	var sendEmail = function () {
		var alertMsgPanel = context.find('.alert.alert-success');
		alertMsgPanel.removeClass('hidden');
	}

	$('.btn-sendEmail').on('click', sendEmail);
});
