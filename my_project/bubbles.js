// I'm setting my box
const margin = { top: 10, bottom: 30, left: 40, right: 10 };
const width = 300 - margin.left - margin.right;
const height = 300 - margin.top - margin.bottom;


// appending the svg
const svg = d3.select("#chart")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr(
        'viewBox',
        `0 0 ${width + margin.left + margin.right} ${
          height + margin.top + margin.bottom
        }`
      )
    .style("position", "relative");

// I'm parsing thedata
d3.csv('./data/bar_simple.csv').then( function(data) {

 

// Setting my categories - will have different colours 
  const color = d3.scaleOrdinal()
    .domain(["Magnitude 2-3", "Magnitude 3-4", "Magnitude 4-5", "Magnitude 5+"])
    .range(d3.schemeSet1);

  //Preparing the scales
  const size = d3.scaleLinear()
    .domain([0, 1900])
    .range([7,70])  // this is how big the circles will be

  //Creating a tooltip
  const Tooltip = d3.select("#chart")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "15px")

  // Setting up the functions that will change the tooltip on mousehover
  const mouseover = function(event, d) {
    Tooltip
      .style("opacity", 1)
  }
  const mousemove = function(event, d) {
    Tooltip
      .html("Intensity of the Earthquake "+'<u>' + d.mag_range + '</u>' + "<br>" + d.Value + " Earthquakes Recorded in either Italy or its borders")
      .style("left", (event.x/2+20) + "px")
      .style("top", (event.y/2-30) + "px")
  }
  let mouseleave = function(event, d) {
    Tooltip
      .style("opacity", 0)  //tooltip will disappear 
  }

  // Initialising the circles
  let node = svg.append("g")
    .selectAll("circle")
    .data(data)
    .join("circle")
      .attr("class", "node")
      .attr("r", d => size(d.Value))
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .style("fill", d => color(d.mag_range))
      .style("fill-opacity", 0.8)
      .attr("stroke", "black")
      .style("stroke-width", 1)
      .on("mouseover", mouseover) 
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)
      .call(d3.drag() // call the specific function when circle is dragged
           .on("start", dragstarted)
           .on("drag", dragged)
           .on("end", dragended));

  // Adding this to animate the circles 
  const simulation = d3.forceSimulation()
      .force("center", d3.forceCenter().x(width / 2).y(height / 2)) // Pulling the circles to the centre
      .force("charge", d3.forceManyBody().strength(.1)) 
      .force("collide", d3.forceCollide().strength(.2).radius(function(d){ return (size(d.Value)+3) }).iterations(10)) // This avoids circles to overlap

  simulation
      .nodes(data)
      .on("tick", function(d){
        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
      });

//Making circles draggable 

  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.03).restart();
    d.fx = d.x;
    d.fy = d.y;
  }
  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }
  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0.03);
    d.fx = null;
    d.fy = null;
  }

})