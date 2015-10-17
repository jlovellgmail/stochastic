
$(document).ready(function(){
    var canvas_sel = 
        d3.select("body")
        .append("canvas")
        .attr("id", "canvas")
        ;
    var imageWidth = 300;
    var imageHeight = 100;
    canvas_sel.attr("width", imageWidth);
    canvas_sel.attr("height", imageHeight);
    
    var canvas = document.getElementById("canvas");
    console.log("canvas: " + canvas);

    var ctx = canvas.getContext("2d");

    ctx.beginPath();    
    ctx.fillStyle="rgba(0,0,0, .05)";
    ctx.rect(0, 0, imageWidth, imageHeight);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();    
    ctx.fillStyle="blue";
    ctx.rect(0, 0, 40, 40);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();    
    ctx.fillStyle="red";
    ctx.rect(10, 10, 50, 50);
    ctx.fill();
    ctx.closePath();



    var imageData = ctx.getImageData(0, 0, imageWidth, imageHeight);
    var data = imageData.data;

    window.array = [];

    // iterate over all pixels
    for(var i = 0, n = data.length; i < n; i += 4) {
        var red = data[i];
        var green = data[i + 1];
        var blue = data[i + 2];
        var alpha = data[i + 3];

        array.push({
            red: red,
            green: green,
            blue: blue,
            alpha: alpha
        });

    }


});


