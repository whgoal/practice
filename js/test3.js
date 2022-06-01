let picwidth = 1440;



for(var i=0; i<3; i++) {
    document.getElementById("pic" + i).style.left = (picwidth*i)+"px";
}

document.getElementById("prev_btn").onclick = function(){
    // document.getElementById("pic0").style.left = ( 1440*0 ) + "px";
    // document.getElementById("pic1").style.left = ( 1440*1 ) + "px";
    // document.getElementById("pic2").style.left = ( 1440*2 ) + "px";
}
let moveNum = 0;
document.getElementById("next_btn").onclick = function(){
    // document.getElementById("pic0").style.left = ( 1440*-1 ) + "px";
    // document.getElementById("pic1").style.left = ( 1440*0 ) + "px";
    // document.getElementById("pic2").style.left = ( 1440*1 ) + "px";
    if(moveNum < 2){
        moveNum++;
    }
    for(var i=0; i<3; i++) {
        document.getElementById("pic" + i).style.left = (picwidth*(i-moveNum))+"px";
    }
}


// for(초기값; 조건식; 증감식) {}
// // for 반복문
// for(var i=0; i<10; i++) {
//     console.log("종료후: " + i);
// }