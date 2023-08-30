boxes = sessionStorage.getItem("boxes");
group = sessionStorage.getItem("group");

for (let i=1; i<Number(boxes)+1; i++){
    $("#secondmenu").append(`<div id=a${i} class="basecard">Lesson ${i} </div>`);
}
$("#secondmenu").append("<div class='basecard'>All</div>");
$("#secondmenu").append("<div id='backbutton' class='basecard'>BACK</div>");
height = Number(boxes)/4 * 10 + 15
$("#secondmenu").css("min-height", `${height}vh`);



$("#backbutton").on("click",function(){
    //window.location.href = "index.html";
    if(typeof myResult !== 'undefined'){
        sessionStorage.setItem("myResult", myResult);
    }
    window.location.href = "index.html";
})

//the part after this is not yet finished

$(".basecard").on("click", function(){
    if ($(this).attr("id") != "backbutton"){
        window.location.href = "game.html";
        lesson = $(this).attr("id").slice(1);
        sessionStorage.setItem("lesson", lesson);
    }
    //console.log(lesson);
})
