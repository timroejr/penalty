'use strict';

$('#showPenalty').click(function() {
	nodecg.sendMessage('showPenalty', '');
});

$('#hidePenalty').click(function() {
	nodecg.sendMessage('hidePlayer', ''); 
});

