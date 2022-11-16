var colors = ["darkred", "pink", "orange", "skyblue", "lightgreen", "teal"];

for(let i = 0; i<6; i++){
   var chosenColorNumber = Math.floor(Math.random()*6);
    chosenColor = colors[chosenColorNumber]
    console.log(chosenColor);
    var positionleft = Math.floor(Math.random()*101);
    var positiontop = Math.floor(Math.random()*101);
    $("body").prepend('<div class="zoom-in-out-box" id="square' + i + '"></div>');
    
    
    $("#square" + i).css({"position":"absolute", "top":positiontop + "%"})
    $("#square" + i).css({"top":positiontop + "%"})
    positionleft = "calc("+ positionleft + "% - 100px)";
    console.log(positionleft);
    $("#square" + i).css({"left":positionleft});
    $("#square" + i).css({"background-color":chosenColor});
    $("#square" + i).css({"z-index":-1*i-2});
    
    var sizewidth = Math.floor(Math.random()*150);
    var sizeheight = Math.floor(Math.random()*200);
    console.log(sizewidth);
    $("#square" + i).css({"width":sizewidth + "px"});
    $("#square" + i).css({"height": sizeheight + "px"});
    
}