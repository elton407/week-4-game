var char1 = "";
var char2 = "";
var charSel = false;





if (charSel === false )
$("img#goku").click(function(){
	charSel === true;
	$("img#goku").hide();
	$("#playerOne").attr('src', 'assets/images/goku.png');
	$(".panel-heading").text("Choose Your Oppenent");
});


$("img#cell").click(function(){
	$("img#cell").hide();
	$("#enemy").attr('src', 'assets/images/cell.png');
});


	$("img#frieza").click(function(){
	$("img#frieza").hide();
	$("#computer").attr('src', 'assets/images/frieza.png');
	$(".panel-heading").text("Lets Battle!");
});


/*code to add src to img 
var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
img.attr('src', responseObject.imgurl);
img.appendTo('#imagediv');*/






















