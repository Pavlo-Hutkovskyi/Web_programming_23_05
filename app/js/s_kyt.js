var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("active");
})

/*dsfsdfsgsdgs*/


var col;
var row;
var l = 2;
length_v = 2;

function addbegin(str,num) {
    if (num == 2) {
        document.getElementById(str).innerHTML = "<input type='number' id='a'>x + <input type='number' id='a'>y + <input type='number' id='a'>c + <input type='number' id='a'> = 0";
    } else {
        document.getElementById(str).innerHTML = name + "=( " + "<input type='number' id='a'>,<input type='number' id='a'>,<input type='number' id='a'>" + " )";
    }
}

document.getElementById("table-block1").addEventListener("load", addbegin("table-block1",2));
document.getElementById("table-block2").addEventListener("load", addbegin("table-block2",2));

function isInt1(n) {
    return n % 1;
}

function kut() {
    let poch=document.getElementsByTagName('input')[0].value*document.getElementsByTagName('input')[4].value;
    let ser=document.getElementsByTagName('input')[1].value*document.getElementsByTagName('input')[5].value+document.getElementsByTagName('input')[2].value*document.getElementsByTagName('input')[6].value;
    var l=Math.abs(poch+ser)/(Math.sqrt(Math.pow(document.getElementsByTagName('input')[0].value,2)+Math.pow(document.getElementsByTagName('input')[1].value,2)+Math.pow(document.getElementsByTagName('input')[2].value,2))*Math.sqrt(Math.pow(document.getElementsByTagName('input')[4].value,2)+Math.pow(document.getElementsByTagName('input')[5].value,2)+Math.pow(document.getElementsByTagName('input')[6].value,2)));
    
    if (isInt1(l) != 0 || isInt1(l) != -0) {
        l = l.toFixed(6);
    }
    let kut=(Math.acos(l) * 180) / Math.PI;
    let res="cos a = "+l +"\n" + "a = " + kut + "градусів";
    var el = document.getElementById("table-block");
    if (typeof el.innerText !== 'undefined') {
        el.innerText = res;
    } else {
        el.textContent = res;
    }
}