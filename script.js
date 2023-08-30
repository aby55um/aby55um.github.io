let group = [0,0,0];
let boxes = null;

if ( sessionStorage.getItem("myResult") ) {
    //console.log(sessionStorage.getItem("myResult"));
    myResult = sessionStorage.getItem("myResult");
    $("#result").text(myResult);
}

function removeClick(subjectClassName, objectClassName){
    $(subjectClassName).removeClass(objectClassName);
}


$(".basecard").on("click",function(){
    let clickedClass = "." + $(this).attr('class').slice(9);
    $(clickedClass).removeClass("clicked");
    $(this).addClass("clicked");
    group[$(this).attr('class').slice(14,15)-1]=Number($(this).attr('id').slice(1));
    //console.log(group);
})

$(".gobutton").on("click",function(){
    //console.log("goclick");
    //window.open("test.html");
    if (group[2] == '1'){
        window.location.href = "test.html";
    }
    switch(group[0]) {
        case 1:
            boxes = 15;
            break;
        case 2:
            boxes = 15;
            break;
        case 3:
            boxes = 20;
            break;
        case 4:
            boxes = 20;
            break;
        case 5:
            boxes = 20;
            break;
        case 6:
            boxes = 36;
            break;
        case 7:
            boxes = 40;
            break;
    }
    sessionStorage.setItem("boxes", boxes);
    sessionStorage.setItem("group", group);
    //console.log(boxes);
})

