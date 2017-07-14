function main(id) {
    var ActualValue = document.getElementById("topDis").innerHTML;
    var clickedVal = document.getElementById(id).innerHTML;
    var disValue = ActualValue + clickedVal;
    document.getElementById("topDis").innerHTML = disValue;
}

function button0() {
    var ActualValue = document.getElementById("topDis").innerHTML;
    var clickedVal = document.getElementById("btn0").innerHTML;
    var disValue = ActualValue + clickedVal;
    document.getElementById("topDis").innerHTML = disValue;

    resultDis();
}

function button1() {
    var ActualValue = document.getElementById("topDis").innerHTML;
    var clickedVal = document.getElementById("btn1").innerHTML;
    var disValue = ActualValue + clickedVal;
    document.getElementById("topDis").innerHTML = disValue;

    resultDis();
}

function button2() {
    var ActualValue = document.getElementById("topDis").innerHTML;
    var clickedVal = document.getElementById("btn2").innerHTML;
    var disValue = ActualValue + clickedVal;
    document.getElementById("topDis").innerHTML = disValue;

    resultDis();
}

function button3() {
    var ActualValue = document.getElementById("topDis").innerHTML;
    var clickedVal = document.getElementById("btn3").innerHTML;
    var disValue = ActualValue + clickedVal;
    document.getElementById("topDis").innerHTML = disValue;

    resultDis();
}

function button4() {
    var ActualValue = document.getElementById("topDis").innerHTML;
    var clickedVal = document.getElementById("btn4").innerHTML;
    var disValue = ActualValue + clickedVal;
    document.getElementById("topDis").innerHTML = disValue;

    resultDis();
}

function button5() {
    var ActualValue = document.getElementById("topDis").innerHTML;
    var clickedVal = document.getElementById("btn5").innerHTML;
    var disValue = ActualValue + clickedVal;
    document.getElementById("topDis").innerHTML = disValue;

    resultDis();
}

function button6() {
    var ActualValue = document.getElementById("topDis").innerHTML;
    var clickedVal = document.getElementById("btn6").innerHTML;
    var disValue = ActualValue + clickedVal;
    document.getElementById("topDis").innerHTML = disValue;

    resultDis();
}

function button7() {
    var ActualValue = document.getElementById("topDis").innerHTML;
    var clickedVal = document.getElementById("btn7").innerHTML;
    var disValue = ActualValue + clickedVal;
    document.getElementById("topDis").innerHTML = disValue;

    resultDis();
}

function button8() {
    var ActualValue = document.getElementById("topDis").innerHTML;
    var clickedVal = document.getElementById("btn8").innerHTML;
    var disValue = ActualValue + clickedVal;
    document.getElementById("topDis").innerHTML = disValue;

    resultDis();
}

function button9() {
    var ActualValue = document.getElementById("topDis").innerHTML;
    var clickedVal = document.getElementById("btn9").innerHTML;
    var disValue = ActualValue + clickedVal;
    document.getElementById("topDis").innerHTML = disValue;

    resultDis();
}

function buttonDot() {
    var ActualValue = document.getElementById("topDis").innerHTML;
    var clickedVal = document.getElementById("btnDot").innerHTML;
    var disValue = ActualValue + clickedVal;
    document.getElementById("topDis").innerHTML = disValue;

    resultDis();
}

function buttonLeftBra() {
    var ActualValue = document.getElementById("topDis").innerHTML;
    var clickedVal = document.getElementById("btnLeftBra").innerHTML;
    var disValue = ActualValue + clickedVal;
    document.getElementById("topDis").innerHTML = disValue;

    resultDis();
}

function buttonRightBra() {
    var ActualValue = document.getElementById("topDis").innerHTML;
    var clickedVal = document.getElementById("btnRightBra").innerHTML;
    var disValue = ActualValue + clickedVal;
    document.getElementById("topDis").innerHTML = disValue;

    resultDis();
}

function buttonMul() {
    var ActualValue = document.getElementById("topDis").innerHTML;
    var clickedVal = document.getElementById("btnMul").innerHTML;
    var disValue = ActualValue + clickedVal;
    document.getElementById("topDis").innerHTML = disValue;

    resultDis();
}

function buttonDiv() {
    var ActualValue = document.getElementById("topDis").innerHTML;
    var clickedVal = document.getElementById("btnDiv").innerHTML;
    var disValue = ActualValue + clickedVal;
    document.getElementById("topDis").innerHTML = disValue;

    resultDis();
}

function buttonMinus() {
    var ActualValue = document.getElementById("topDis").innerHTML;
    var clickedVal = document.getElementById("btnMinus").innerHTML;
    var disValue = ActualValue + clickedVal;
    document.getElementById("topDis").innerHTML = disValue;

    resultDis();
}

function buttonPlus() {
    var ActualValue = document.getElementById("topDis").innerHTML;
    var clickedVal = document.getElementById("btnPlus").innerHTML;
    var disValue = ActualValue + clickedVal;
    document.getElementById("topDis").innerHTML = disValue;

    resultDis();
}

function buttonPer() {
    var ActualValue = document.getElementById("topDis").innerHTML;
    var clickedVal = document.getElementById("btnPer").innerHTML;
    var disValue = ActualValue + clickedVal;
    document.getElementById("topDis").innerHTML = disValue;

    resultDis();
}

function buttonDel() {
    document.getElementById("topDis").innerHTML = "";
    document.getElementById("bottomDis").innerHTML = "";
}

function buttonEqual() {
    var res = document.getElementById("topDis").innerHTML;
    document.getElementById("topDis").innerHTML = eval(res);
    document.getElementById("bottomDis").innerHTML = "";
}

function resultDis() {
    var res = document.getElementById("topDis").innerHTML;
    document.getElementById("bottomDis").innerHTML = eval(res);
}
