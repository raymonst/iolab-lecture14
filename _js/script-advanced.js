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



	/* recall the example from the lecture:

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
	// ???

	// draw the names
	// ???

	// hover event interaction
	// ???

});

