function appendButton(id, width, height, x, y, fill, stroke, activeFill,
	text, textFill, activeTextFill, font, fontSize, link) {

	buttonGroup = d3.select(id).append("g");

	buttonGroup.append("a")
	.attr("xlink:href", link)
	.append("rect")
	.attr("width", width)
	.attr("height", height)
	.attr("x", x)
	.attr("y", y)
	.style("fill", fill)
	.style("stroke", stroke)
	.style("cursor", "pointer")
	.on("mouseover", function () {
		d3.select(this).transition()
		.style("fill", activeFill);
	})
	.on("mouseout", function () {
		d3.select(this).transition()
		.style("fill", fill);
	});

	buttonGroup.append("text")
	.attr("x", width / 2)
	.attr("y", height / 2)
	.attr("pointer-events", "none")
	.style("text-anchor", "middle")
	.style("alignment-baseline", "middle")
	.style("fill", textFill)
	.style("font-family", font)
	.style("font-size", fontSize)
	.text(text)
	.on("mouseover", function () {
		d3.select(this).transition()
		.style("fill", activeTextFill);
	})
	.on("mouseout", function () {
		d3.select(this).transition()
		.style("fill", textFill);
	});

	buttonGroup.on("mouseover", function () {
		buttonGroup.select("rect").transition()
		.style("fill", activeFill);

		buttonGroup.select("text").transition()
		.style("fill", activeTextFill);
	});

	buttonGroup.on("mouseout", function () {
		buttonGroup.select("rect").transition()
		.style("fill", fill);

		buttonGroup.select("text").transition()
		.style("fill", textFill);
	});
}
