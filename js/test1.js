

// let myNum = 1;
// const totalNum = 5;
// function numberSetting() {
//     document.getElementById("num").innerText = myNum;
// }
// numberSetting();
// //이벤트 핸들러
// document.getElementById("btn_prev").onclick = function() {
//     console.log("이전버튼");
//     if(myNum == 1){
//         myNum = totalNum;
// } else {
//     myNum--;
// }
//     document.getElementById("num").innerText = myNum;
// };
// document.getElementById("btn_next").onclick = function() {
//     console.log("다음버튼");
//     if(myNum == totalNum){
//         myNum = 1;
// } else {
//     myNum++;
// }
//     numberSetting();
//     document.getElementById("pic").style.border = "3px solid blue";
//     document.getElementById("pic").style.left = "500px";
//     document.getElementById("num").innerText = myNum;

// };

let picNum = 1;
const totalNum = 3;
var picSetting = function(){
    document.getElementById("pic_num").innerText = picNum;
}

document.getElementById("pic_num").innerText = picNum;

//이벤트 핸들러
document.getElementById("prev_btn").onclick = function() {
    prevFunction(); //매개인자, 매개변수
}
document.getElementById("next_btn").onclick = function() {
    nextFunction();
}
var prevtFunction = function() {
    if (picNum == 1) {
        picNum = totalNum;
    }else {
        picNum--;
    }
    picSetting();
}
var nextFunction = function() {
    if(picNum == totalNum) {
        picNum=1;
    } else {
        picNum++;
    }
    picSetting();
}






//함수 선언
// var myFunction = function(a) {
//     picNum = picNum + (1*a);
//     document.getElementsById("pic_num").innerText = picNum;
// }