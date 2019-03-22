// Welcome to Kayne and Kim MadLibs!
// This game allows you to plug in certain parts of speech to a story depending on what the user types in.

//Directions: Create an input field and button for each part of speach in the story
//The first blank in this story is already completed for you. The value of what the user types in will be plugged into the story below. Try it out! Then use it as a guide when moving through this project 

var a;

$(".btn1").click(function(){
   a = $(".condition").val(); 
    console.log(a);
  $(".conditionVal").html(a);
});

var b;

$(".btn2").click(function(){
    b = $(".adjective1").val();
    console.log(b);
    $(".adjective1Val").html(b);
    
});

var c;
$(".btn3").click(function(){
    c = $(".noun1").val();
    console.log(c);
    $(".noun1Val").html(c);
});
    
    
var d;
$(".btn4").click(function(){
    d = $(".badsit").val();
    console.log(d);
    $(".badSitVal").html(d);
});

var e;
$(".btn5").click(function(){
    e = $(".verb").val();
    console.log(e);
    $(".verb1Val").html(e);
});

var f;
$(".btn6").click(function(){
    f = $(".place").val();
    console.log(f);
    $(".placeVal").html(f);
});

var g;
$(".btn7").click(function(){
    e = $(".verb2").val();
    console.log(g);
    $(".verb2Val").html(e);
});

