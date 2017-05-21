console.log('Graph Page')

$.ajax({
  url: "/report"
}).done(function(data){
  console.log(data);
  $('.total-respos').text(data.q1_sum);
//chart colors
var color = d3.scaleOrdinal(["#7b6888", "#e74c3c", "#f39c12", "#d0743c", "#ff8c00"]);
var labelColor = "#2c3e5";

  //Question 1: pie chart
  var q1Data = data.q1;
  var q1percent= data.q1_inPercent;
  var q1Data = [
      { age:   "Under 20",
        count: q1Data[0],
        inPercent: q1percent[0]
      },{
        age: "Between 21 to 30",
        count: q1Data[1],
        inPercent: q1percent[1]
      },{
        age: "Between 31 to 40",
        count: q1Data[2],
        inPercent: q1percent[2]
      },{ age: "41 Above",
          count: q1Data[3],
          inPercent: q1percent[3]
        }]
  var svg = d3.select(".q1graph").select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    radius = Math.min(width, height) / 2,
    g = svg.append("g").attr("transform", "translate(" + width / 2.5 + "," + height / 2 + ")");

  var pie = d3.pie()
      .sort(null)
      .value(function(d) { return d.count; });

  var path = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

  var label = d3.arc()
      .outerRadius(radius - 70)
      .innerRadius(radius - 40);

  var arc = g.selectAll(".arc")
    .data(pie(q1Data))
    .enter().append("g")
    .attr("class", "arc");

  arc.append("path")
      .attr("d", path)
      .attr("fill", function(d) { return color(d.data.age); });

  arc.append("text")
      .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
      .attr("dy", "0.35em")
      .text(function(d) { return d.data.inPercent + "%"; })

  //legend
  var legendRectSize = 18;
  var legendSpacing = 4;
  var legend = svg.selectAll('.legend')
    .data(color.domain())
    .enter()
    .append('g')
    .attr('class', 'legend')
    .attr('transform', function(d, i) {
      var height = legendRectSize + legendSpacing;
      var offset =  height * color.domain().length / 30;
      var horz = 22* legendRectSize;
      var vert = i * height - offset;
      return 'translate(' + horz + ',' + vert + ')';
    });
    legend.append('rect')
    .attr('width', legendRectSize)
    .attr('height', legendRectSize)
    .style('fill', color)
    .style('stroke', color);
    legend.append('text')
    .attr('x', legendRectSize + legendSpacing)
    .attr('y', legendRectSize - legendSpacing)
    .attr("fill", labelColor)
    .style("font-weight" ,"bold")
    .text(function(d) { return d; });

  // Question 2:
  var q2Data = [
      { label: '3 years and under', count: data.q2[0] },
      { label: 'between 4 and 7 years', count: data.q2[1] },
      { label: '8 years and above', count: data.q2[2] }
  ];
  var width = 480;
  var height = 340;
  var radius = Math.min(width, height) / 2;
  var donutWidth = 75;
  var legendRectSize = 18;
  var legendSpacing = 4;
  var color = d3.scaleOrdinal(["#7b6888", "#e74c3c", "#f39c12", "#d0743c", "#ff8c00"]);

  var svg = d3.select('.q2graph').select('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width / 2) +
           ',' + (height / 2) + ')');
  var arc = d3.arc()
    .innerRadius(radius - donutWidth)
    .outerRadius(radius);

  var pie = d3.pie()
  .value(function(d) { return d.count; })
  .sort(null);

  var path = svg.selectAll('path')
    .data(pie(q2Data))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d, i) {
      return color(d.data.label);
    });

  var legend = svg.selectAll('.legend')
    .data(color.domain())
    .enter()
    .append('g')
    .attr('class', 'legend')
    .attr('transform', function(d, i) {
      var height = legendRectSize + legendSpacing;
      var offset =  height * color.domain().length / 2;
      var horz = -4 * legendRectSize;
      var vert = i * height - offset;
      return 'translate(' + horz + ',' + vert + ')';
    });
    legend.append('rect')
    .attr('width', legendRectSize)
    .attr('height', legendRectSize)
    .style('fill', color)
    .style('stroke', color);

    legend.append('text')
    .attr('x', legendRectSize + legendSpacing)
    .attr('y', legendRectSize - legendSpacing)
    .style("font-weight","bold")
    .attr("fill" , "#2c3e50")
    .text(function(d) { return d; });


  //Question 3: simple bar chart
  var ratio = 5;
  //increment by 11times for each data
  var q3Data = data.q3.map(function(i){
    return i * 11;
  });
  var height = 359;
  var margin = {left:130,right:10,top:10, bottom:0}
  var q3Opt = ["Yes","No"]

  //vertical axis in pixels
  var y = d3.scaleLinear()
          .domain([0,20])
          .range([240,25]);
  // axis y generator
  var yAxis = d3.axisLeft(y);

  var x = d3.scaleOrdinal()
          .domain(q3Opt)
          .range([70,175]);

  var xAxis = d3.axisBottom(x);
  var svg = d3.select(".q3Graph").select("svg")
    .attr("height",height)
    .attr("width","100%");
  var chartGroup = svg.append("g")
    .attr("transform", "translate("+margin.left+","+margin.top+")")
  // setting attribute to rectangle
  chartGroup.selectAll("rect")
  .data(q3Data)
  .enter().append("rect")
    .attr("height", function(d){return d;})
    .attr("width","50")
    .attr("x",function(d,i){return  30+(100 * i);})
    // browser draw bar downwords so subtraction is used
    .attr("y",function(d,i){return 241-(d);})
    .attr("fill",color);
  chartGroup.append("g")
    .attr("class","axis y")
    .call(yAxis);
  chartGroup.append("g")
    .attr("class","axix x hidden")
    .attr("transform", "translate(-15,240)")//240
    .call(xAxis);






});
