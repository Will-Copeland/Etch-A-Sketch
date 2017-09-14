function rainbow() {
	rainChange();
};


function rainChange() {

	$('.square').on('mouseenter', function() {
	
		var rain = '#'+Math.floor(Math.random()*16777215).toString(16);
		
		$(this).css('background-color', rain);
	
	});
};


function regular() {
	colorChange('black');
};


function inverted() {	
	colorChange('white');
};

function defaultGrid() {

var gridCount = 32;
		
		$('div').remove('.row');
		
		var size = 800 / gridCount;
		console.log(size);
		
		for (i= 0; i< gridCount; i++) {
			$('.grid').append('<div class="row"></div>');
		};
		
		for (i = 0; i < gridCount; i++) {
			$('.row').append('<div class="square"></div>');
		};
		
		$('.row').css({'width': '800px', 'height': size});
		
		$('.square').css({'width': size , 'height': size});

};

function createGrid() {

		var gridCount = parseInt(prompt("How many squares would you like?"), 10);
		
		$('div').remove('.row');
		
		var size = 800 / gridCount;
		console.log(size);
		
		for (i= 0; i< gridCount; i++) {
			$('.grid').append('<div class="row"></div>');
		};
		
		for (i = 0; i < gridCount; i++) {
			$('.row').append('<div class="square"></div>');
		};
		
		$('.row').css({'width': '800px', 'height': size});
		
		$('.square').css({'width': size , 'height': size});
};


function colorChange(color) {

	$('.square').on('mouseenter', function() {
	
		$(this).css('background-color', color);

	});
};


$(document).ready(function() {

	defaultGrid();
	
	$('#clearWhite').on('click', function() {
		$('.square').css('background-color', 'white');
	});
	
	$('#clearBlack').on('click', function () {
		$('.square').css('background-color', 'black');
	});
	
	$('#black').on('click', function () {
		inverted();
	});
	
	$('#set').on('click', function() {
		createGrid();
	});
	
	$('#default').on('click', function() {
		regular();
	});
	
	$('#rainbow').on('click', function() {
		rainbow();
	});
	
});

