var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue = circle.style.transform || "rotate(0deg)";
var rotateSum;

upBtn.onclick = function() {
    // 時計回りに９０度回転させる
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum; // 更新
};
downBtn.onclick = function() {
    // 反時計回りに９０度回転させる
    rotateSum = rotateValue + "rotate(+90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum; // 更新
};
