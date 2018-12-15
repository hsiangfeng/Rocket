let body = document.body;
let rocketTime = 5000;
let againTime = 5000;
let initial = 6000;
let x = 500;

rocketSetTimeOut();

function rocketSetTimeOut() {
    rocketTime -= 1000;
    console.log('發射倒數:'+rocketTime / 1000 + '秒');
    if (rocketTime == 0) {
        rocketUp();
        reRocketTimeOut()
        return;
    }
    setTimeout("rocketSetTimeOut()", 1000);
}
function reRocketTimeOut(){
    againTime -=1000;
    console.log('回歸倒數:'+againTime / 1000 + '秒');
    if(againTime == 0){
        reRocket()
        rocketTime += initial;
        againTime += initial;
        rocketSetTimeOut()
        return;
    }
    setTimeout("reRocketTimeOut()",1000);
}
function getRandom(n) {
    return Math.floor(Math.random() * n);
}

function rocketUp() {
    document.querySelector('.rocket-1').style.bottom = getRandom(1000)+'px';
    document.querySelector('.rocket-2').style.bottom = getRandom(1000)+'px';
    document.querySelector('.rocket-3').style.bottom = getRandom(1000)+'px';
}

function reRocket() {
    document.querySelector('.rocket-1').style.bottom = '101px';
    document.querySelector('.rocket-2').style.bottom = '101px';
    document.querySelector('.rocket-3').style.bottom = '101px';
}

function keyupRocket(e) {
    console.log(e.keyCode);
    switch (e.keyCode) {
        case 90:
            document.querySelector('.rocket-1').style.bottom = '2000px';
            break;
        case 88:
            document.querySelector('.rocket-2').style.bottom = '2000px';
            break;
        case 67:
            document.querySelector('.rocket-3').style.bottom = '2000px';
            break;
        // default:
        //     document.querySelector('.rocket-1').style.bottom = '2000px';
        //     document.querySelector('.rocket-2').style.bottom = '2000px';
        //     document.querySelector('.rocket-3').style.bottom = '2000px';
        //     break;
    }
}

body.addEventListener('keydown', keyupRocket, false);