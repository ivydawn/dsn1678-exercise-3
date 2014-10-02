// JavaScript Document
var salesdetailsleft = $('.sales__detailsleft');
var salesleft = $('.salesleft');

var buttonClickHandlerleft = function() {
	var currentState = salesdetailsleft.attr('data-state');
	if (currentState == 'active') {
		salesdetailsleft.attr('data-state', 'inactive');
	} else {
		salesdetailsleft.attr('data-state', 'active');	
	}
}
salesleft.on('click', buttonClickHandlerleft);

var salesdetailsright = $('.sales__detailsright');
var salesright = $('.salesright');

var buttonClickHandlerright = function() {
	var currentState = salesdetailsright.attr('data-state');
	if (currentState == 'active') {
		salesdetailsright.attr('data-state', 'inactive');
	} else {
		salesdetailsright.attr('data-state', 'active');	
	}
}
salesright.on('click', buttonClickHandlerright);