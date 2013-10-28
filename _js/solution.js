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
	var viz = d3.select("#viz");
	viz.attr("width", w).attr("height", h);



	// draw the bars
	viz.selectAll("rect")
		.data(dataset)
		.enter()
		.append("rect")
		.attr({
			"width": 70,
			"height": function(d, i) {
			    return d.score * 4;
			},
			"x": function(d, i) {
			    return (i * 90) + 50;
			},
			"y": function(d, i) {
			    return h - (d.score * 4) - 50;
			},
			"class": function(d, i) {
			    if (d.score < 60) {
			        return "fail";
			    }
			},
			"desc": function(d, i) {
				return d.score;
			}
	    });



	// draw the names
	viz.selectAll("text.name")
		.data(dataset)
		.enter()
		.append("text")
		.text(function(d, i) {
		    return d.name;
		})
		.attr({
			"x": function(d, i) {
			    return (i * 90) + 85;
			},
			"y": 470,
			"text-anchor": "middle",
			"class": "name"
		});



	// draw the base line
	viz.append("line")
		.attr({
			"x1": 50,
			"x2": 750,
			"y1": 450,
			"y2": 450,
			"stroke-width": 1,
			"stroke": "#ccc"
		});



	// hover event interaction
	$("#viz rect").on("mouseenter", function() {
		var self = $(this);
		// fade out slightly
		self.animate({"opacity":.8}, 100);
		// change the position of the "score-popup" div, its content (to reflect the score), then show it
		$("#score-popup")
			.css({
				"left": parseInt(self.position().left) + parseInt(self.attr("width")) - 70,
				"top": self.position().top + 5
			})
			.text(self.attr("desc"))
			.fadeIn(50);
	}).on("mouseleave", function() {
		var self = $(this);
		// fade the bar back in
		self.animate({"opacity":1}, 100);
		// fade out the score
		$("#score-popup").fadeOut(50);
	});

});

