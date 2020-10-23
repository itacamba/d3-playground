
// append svg to body tag
let svg = d3.select("body")
            .append("svg")
            .attr("height", '400px')
            .attr("width", '100%')

// define some dimensions
const arr = [300,200,390]
let recWidth = 30

svg.selectAll("rect").data(arr).enter().append("rect")
    .attr("width", recWidth)
    .attr("height", d => d)
    .attr("fill", "pink")
    .attr("x", (d,i) => (recWidth + 10) * i)
    .attr("y", d => 400 - d)
