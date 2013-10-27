$(document).ready(function() {

	// the data
	var dataset = [
		{"name": "Andy", "score": 71},
		{"name": "Brad", "score": 59},
		{"name": "Chloe", "score": 79},
		{"name": "David", "score": 95},
		{"name": "Emma", "score": 86},
		{"name": "Felicia", "score": 42}
	];



	// set up the svg 	
	var w = 800;
	var h = 500;
	var svg = d3.select("#viz");
	svg.attr("width", w).attr("height", h);


	/* Recall the example from the lecture:

	svg.selectAll("rect")
	    .data([50, 40, 30])
	    .enter().append("rect")
	    .attr({
	        "width": function(d) {
	            return d;
	        }
	    });

	*/

	// draw the bars
	/* use example from the lecture as a starting point, then modify the attributes accordingly:
	- "width": width of the bar
	- "height": height of the bar
	- "x": horizontal location of the bar
	- "y": vertical location of the bar
	- "class": css class; use conditionals to detect if the score is below 60; then, you can add a css class to change the bar's appearance
	- "desc": custom metadata; use this attribute to store the student's score

	*/



	// draw the names
	/* attributes to modify: 
	- "x": horizontal location of the names
	- "y": vertical location of the names
	- "text-anchor": orientation of the text

	*/



	// hover event interaction

	// when the cursor enters the bar,
	$("#viz rect").on("mouseenter", function() {
		// fade out the bar slightly
		// target the "#score-popup" div
		// change its position so it lines up with the bar
		// change its content to reflect the score
		// then finally, show the div
	}).on("mouseleave", function() {
		// return the bar back to full opacity
		// and hide the "#score-popup" div
	});



});

