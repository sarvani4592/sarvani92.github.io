"use strict";

(function ($){
	
  $.fn.isotope_gallery = function(){	

		// init Isotope
		var $grid = $('.isotope-grid').isotope({
		  itemSelector: '.isotope-grid-item',
		  layoutMode: 'fitRows',
		  isFitWidth: true,
		  getSortData: {
			name: '.isotope-name',
			title: '.isotope-title',
			details: '.isotope-details',
			symbol: '.isotope-symbol',
			type: '.isotope-type',
			number: '.isotope-number',
			category: '[data-category]',
			//you can add hear more sorting class like those
		  }
		});

		// filter functions
		var filterFns = {
		  // show if number is greater than 50
		  numberGreaterThan50: function() {
			var number = $(this).find('.number').text();
			return parseInt( number, 10 ) > 50;
		  },
		  // show if name ends with -ium
		  ium: function() {
			var name = $(this).find('.name').text();
			return name.match( /ium$/ );
		  }
		};

		// bind filter button click
		$('#isotope-filters').on( 'click', 'button', function() {
		  var filterValue = $( this ).attr('data-filter');
		  // use filterFn if matches value
		  filterValue = filterFns[ filterValue ] || filterValue;
		  $grid.isotope({ filter: filterValue });
		});

		// bind sort button click
		$('#isotope-sorts').on( 'click', 'button', function() {
		  var sortByValue = $(this).attr('data-sort-by');
		  $grid.isotope({ sortBy: sortByValue });
		});

		// change is-checked class on buttons
		$('.isotope-button-group').each( function( i, buttonGroup ) {
		  var $buttonGroup = $( buttonGroup );
		  $buttonGroup.on( 'click', 'button', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$( this ).addClass('is-checked');
		  });
		});
		
		
		
		
		// Select and loop the container element of the elements you want to equalise
		$('.isotope-grid').each(function(){  
		  
		  // Cache the highest
		  var highestBox = 0;
		  
		  // Select and loop the elements you want to equalise
		  $('.isotope-grid-item', this).each(function(){
			
			// If this box is higher than the cached highest then store it
			if($(this).height() > highestBox) {
			  highestBox = $(this).height(); 
			}
		  
		  });  
				
		  // Set the height of all those children to whichever was highest 
		  $('.isotope-grid-item',this).height(highestBox);
						
		}); 
		
		
		
  }
  
  $(this).isotope_gallery();
  	

}(jQuery));