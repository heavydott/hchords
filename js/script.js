drawChords(chords.c.maj);

// Generate HTML-chord
function generateChords(arr) {
	var text = '';

	for(var i = 0; i < arr.length; i++) {
		text += '<div class="chord active">'+
					'<div class="grif">' +
						'<ul class="lads">' +
							'<li></li>' +
							'<li></li>' +
							'<li class="right"></li>' +
						'</ul>' +
						'<ul class="strings">' +
							'<li></li>' +
							'<li></li>' +
							'<li></li>' +
							'<li></li>' +
							'<li></li>' +
							'<li></li>' +
						'</ul>' +
						'<div class="fingers">';
		
		if(arr[i].finger1) {
			text += '<div class="lad' + arr[i].finger1.lad + ' finger1 ';
			if(arr[i].finger1.bar) {
				text += 'bar';
			}
			text += ' strings' + arr[i].finger1.strings + '"><span>1</span></div>';
		}
		
		if(arr[i].finger2) {
			text += '<div class="lad' + arr[i].finger2.lad + ' finger2 ';
			if(arr[i].finger2.bar) {
				text += 'bar';
			}
			text += ' strings' + arr[i].finger2.strings + '"><span>2</span></div>';
		}
		
		if(arr[i].finger3) {
			text += '<div class="lad' + arr[i].finger3.lad + ' finger3 ';
			if(arr[i].finger3.bar) {
				text += 'bar';
			}
			text += ' strings' + arr[i].finger3.strings + '"><span>3</span></div>';
		}
		
		if(arr[i].finger4) {
			text += '<div class="lad' + arr[i].finger4.lad + ' finger4 ';
			if(arr[i].finger4.bar) {
				text += 'bar';
			}
			text += ' strings' + arr[i].finger4.strings + '"><span>4</span></div>';
		}

		if(arr[i].nofingers.length > 0) {
			for(var j = 0; j < arr[i].nofingers.length; j++) {
				text += '<div class="nofinger strings' + arr[i].nofingers[j] + '"><span>0</span></div>';
			}
		}

		text += '</div>' +
			'</div>' +
			'<ul class="lads">';

		for(var k = 0; k < arr[i].lads.length; k++) {
			text += '<li><span>' + arr[i].lads[k] + '</span></li>'
		}

		text += '</ul>' +
			'</div>';
	}

	return text;
}

// Draw HTML-chord
function drawChords(arr) {
	$('section .container .row').html(generateChords(arr));
}

// To know data-chord
function whichDataChord(el) {
	var dataChord = parseInt(el.attr('data-chord'));
	var chord = 0;

	switch(dataChord) {
		case 0:
			chord = "c";
			break;
		case 1:
			chord = "cdiez";
			break;
		case 2:
			chord = "d";
			break;
		case 3:
			chord = "ddiez";
			break;
		case 4:
			chord = "e";
			break;
		case 5:
			chord = "f";
			break;
		case 6:
			chord = "fdiez";
			break;
		case 7:
			chord = "g";
			break;
		case 8:
			chord = "gdiez";
			break;
		case 9:
			chord = "a";
			break;
		case 10:
			chord = "b";
			break;
		case 11:
			chord = "h";
			break;
	}

	return chord;
}

// To know data-type
function whichDataType(el) {
	var dataType = parseInt(el.attr('data-type'));
	var type = 0;

	switch(dataType) {
		case 0:
			type = "maj";
			break;
		case 1:
			type = "m";
			break;
		case 2:
			type = "7";
			break;
		case 3:
			type = "m7";
			break;
	}

	return type;
}

$('#name').on('click', 'li', function() {
	var chord = 0;

	$('#name li').each(function() {
		$(this).removeClass('active');
	});

	$('#type li').each(function() {
		$(this).removeClass('active');
	});

	$(this).addClass('active');

	$('#type li[data-type=0]').addClass('active');

	chord = whichDataChord($(this));
	
	if(chords[chord].maj) {
		drawChords(chords[chord].maj);
	}
});

$('#type').on('click', 'li', function() {
	var chord = 0;
	var type = 0;
	var result = {};

	$('#type li').each(function() {
		$(this).removeClass('active');
	});

	$(this).addClass('active');

	chord = whichDataChord($('#name li.active'));

	type = whichDataType($('#type li.active'));

	result = chords[chord];

	if(result && result[type]) {
		drawChords(result[type]);
	}
});













