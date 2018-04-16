// //check off sepcific todo by clicking
// $("li").click(function(){
//     //if li is gray
//     if($(this).css("color") === "rgb(128, 128, 128)") {
//         //turn it black
//         $(this).css({
//             color: "black",
//             //js use camelcase
//             textDecoration: "none"
//         });
//     }
//     //else
//     else{
//         //turn it gray
//         $(this).css({
//             color: "gray",
//             //js use camelcase
//             textDecoration: "line-through"
//         });
//     }

// });
//replaced by following
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on x to delect todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//input
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //creating a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});