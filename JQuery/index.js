


// $(document).ready(function(){
//     $("h1").css("color", "red");    
// });

//Jquery method
// $("h1").text("Bye Vue !");
// $("button").html("<em>Hey</em>")
// $("button");
// $("img").attr("src")

//Js Method
// document.querySelector("h1");
// document.querySelectorAll("button");

// $("h1").click(function(){
//     $("h1").css("color", "purple");
// })

// for(var i = 0 ;i < 5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click" ,function(){
//         document.querySelector("h1").style.color = "purple";    
//     } );
// }



// $("button").click(function() {
//     $("h1").css("color", "orange");
// });


// $("input").keypress(function(event){
//     $("h1").text(event.key);
// })

$("button").on("click", function(){
    $("h1").animate({opacity: 0.5});
});