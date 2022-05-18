

let myNum = 1;
const totalNum = 5;
function numberSetting() {
    document.getElementById("num").innerText = myNum;
}
numberSetting();
document.getElementById("btn_prev").onclick = function() {
    console.log("이전버튼");
    if(myNum == 1){
        myNum = totalNum;
} else {
    myNum--;
}
    document.getElementById("num").innerText = myNum;
};
document.getElementById("btn_next").onclick = function() {
    console.log("다음버튼");
    if(myNum == totalNum){
        myNum = 1;
} else {
    myNum++;
}
    numberSetting();
    document.getElementById("pic").style.border = "3px solid blue";
    document.getElementById("pic").style.left = "500px";
    document.getElementById("num").innerText = myNum;

};

