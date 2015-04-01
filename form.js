$(document).ready(function(){

	// $(".nxt").click(function(){
	// 	$("#form-1").hide();
	// 	$("#form-2").show();
	// });

	// $(".nxt1").click(function(){
	// 	$("#form-2").hide();
	// 	$("#form-3").show();
	// });
	// $(".previous").click(function(){
	// 	$("#form-2").hide();
	// 	$("#form-1").show();
	// });
	// $(".previous1").click(function(){
	// 	$("#form-3").hide();
	// 	$("#form-2").show();
	// });
	// var smno=$('.mno').val();
	// var pmno=$('.p_mno').val();
	// if(smno==pmno){

	// }
	// $('.sub_btn').click(function(){
	// 	$('#form-1').show();
	// 	$('#form-3').hide();
	// });


	// $(".nxt").click(function(){
	// 	$(this).parent().slideUp(800);
	// 	$(this).parent().next().slideDown(800);
		
	// });

	// $(".previous").click(function(){
	// 	$(this).parent().slideUp(800);
	// 	$(this).parent().prev().fadeout(800);
	// });

$(".nxt").click(function(){
		$(this).parent().slideUp();
		$(this).parent().next().slideDown();
		
	});

	$(".previous").click(function(){
		$(this).parent().slideUp();
		$(this).parent().prev().slideDown();
	});

});