'use strict';

$(function () {
	nodecg.listenFor('showPenalty', showPenalty);
	nodecg.listenFor('hidePenalty', hidePenalty);
	
	function showPenalty() {
		var tm = new TimelineLite({paused: true});
		tm.from($('#penaltyData'), 0, {left: "-100%", ease: Quad.easeOut}, 0.5)
		.to($('#penaltyData'), 1, {left: 0, ease: Quad.easeOut}, 0.5)
		.play();
	}
	
	function hidePenalty() {
		var tm = new TimelineLite({paused: true});
		tm.from($('#penaltyData'), 0, {left: 0, ease: Quad.easeOut}, 0.5)
		.to($('#penaltyData'), 1, {left: "-100%", ease: Quad.easeOut}, 0.5)
		.play();
	}
});
