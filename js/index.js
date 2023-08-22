
// Get Game Data
 import { Game } from "./game.js";
 // Show Card Of Game
 import { DisplayGame } from "./ui.js";
 // Details Game On Click
 import { Details } from "./details.js";

 let det = new Details();

 let displayCard = new DisplayGame()
 let game = new Game()

async function callData(category = "mmorpg"){

 let data = await game.getGameData(category);
    
 displayCard.display(data)
    
  getCard(data)
return data
}

function fadeLoud(){

    $(".loud").fadeIn(50,function(){
        $(".loud").fadeOut(100)
    })
}

// Window Loud
$(function(){
    callData();
    $(".loud").fadeOut(200)

})

// Navbar 
$(".nav-item .nav-link").click(function(eventInfo){
    let category = $(eventInfo.target).attr("data-category");
    $(".nav-item .nav-link").removeClass("global")
    $(eventInfo.target).addClass("global");
    fadeLoud()

    callData(category)
    
})
// End Navbar 

// Position Navbar In Scroll
let navTop = $("nav").offset().top;
$(window).scroll(_=>{
    let topScreen = $(window).scrollTop()
    if(topScreen > navTop){
       $("nav").css({
        "position":"fixed",
        "top":"0",
        "transform":"translateY(0)",
        "left":"50%",
        "transform":"translateX(-50%)",
    })
    }else{
        $("nav").css({
            "position":"static",
            "transform":"translateY(-50%)",
        })
    }
})
// End Position Navbar In Scroll


// Close Mark 
$(".closeMark").click(_=>{
    $(".details").css("display","none");
    fadeLoud()
})

// Get Number Card And Select
export async function getCard (data){
document.querySelectorAll("#rowBody .card").forEach(function(ev){
    ev.addEventListener("click", function(){
    let index = ev.getAttribute("data-num");
    $(".details").css("display","flex");
    det.showDeta(data,index);
    fadeLoud()
    })
})
}