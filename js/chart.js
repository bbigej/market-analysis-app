var createChart = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
		theme: "theme2",  // theme1
		title:{
			text: "Product Voting Results",
		},
		animationEnabled: false, // change to true
		data: [              
      {
        // Change type to "bar", "area", "spline", "pie",etc.
        type: "column",
        dataPoints: productArray,
      },
		],
	});

  console.log(productArray);  

  chart.render();
};
