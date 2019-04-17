// Check off specificn todos by clicking

/*
$("li").click(function() {
	if ($(this).css("color") === "rgb(128, 128, 128)") {

		$(this).css({
		color: "black",
		textDecoration: "none"
	});

	}
	else {
		$(this).css({
		color: "gray",
		textDecoration: "line-through"
	});
   }
	//same as toggle class
	
});*/


//add on to entire ul parent however, we r listening only to li'ss
$("ul").on("click","li",function() {
	$(this).toggleClass("completed");
});

// click to delete on x
$("ul").on("click","span",function(event) {
	
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); 
	});//parent gives the entire li, while 'this' gives only span
	event.stopPropagation();//stops running li and ul

	
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		//getting a text type input 
		var todoText = $(this).val();
		$(this).val("");
		//creat a new li 
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});



