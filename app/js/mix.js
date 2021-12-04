var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("active");
})

/*dsfsdfsgsdgs*/


var col;
var row;
var l = 3;
length_v = 3;

function addbegin(str, name, num) {
    if (num == 2) {
        document.getElementById(str).innerHTML = name + "=( " + "<input type='number' id='a'>,<input type='number' id='a'>" + " )";
    } else {
        document.getElementById(str).innerHTML = name + "=( " + "<input type='number' id='a'>,<input type='number' id='a'>,<input type='number' id='a'>" + " )";
    }
}

document.getElementById("table-block1").addEventListener("load", addbegin("table-block1", "A", 3));
document.getElementById("table-block2").addEventListener("load", addbegin("table-block2", "B", 3));
document.getElementById("table-block3").addEventListener("load", addbegin("table-block3", "С", 3));

var array4;
var array3;
var array1;
var array2;
var num_l = 0;
var k = 0;

function isInt1(n) {
    return n % 1;
}

function createArray() {
    var array = new Array(length_v);
    return array;
}

function fillArray(array, k) {
    array = createArray();
    let now = k;
    for (let index = 0; index < length_v; index++) {
        console.log(document.getElementsByTagName("input")[now].value);
        array[index] = document.getElementsByTagName("input")[now++].value;
    }
    return array;
}


function Determinant(array1) // Используется алгоритм Барейса, сложность O(n^3)
{
    var N = array1.length,
        B = [],
        denom = 1,
        exchanges = 0;
    for (var i = 0; i < N; ++i) {
        B[i] = [];
        for (var j = 0; j < N; ++j) B[i][j] = array1[i][j];
    }
    for (var i = 0; i < N - 1; ++i) {
        var maxN = i,
            maxValue = Math.abs(B[i][i]);
        for (var j = i + 1; j < N; ++j) {
            var value = Math.abs(B[j][i]);
            if (value > maxValue) {
                maxN = j;
                maxValue = value;
            }
        }
        if (maxN > i) {
            var temp = B[i];
            B[i] = B[maxN];
            B[maxN] = temp;
            ++exchanges;
        } else {
            if (maxValue == 0) return maxValue;
        }
        var value1 = B[i][i];
        for (var j = i + 1; j < N; ++j) {
            var value2 = B[j][i];
            B[j][i] = 0;
            for (var k = i + 1; k < N; ++k) B[j][k] = (B[j][k] * value1 - B[i][k] * value2) / denom;
        }
        denom = value1;
    }
    if (exchanges % 2) return -B[N - 1][N - 1];
    else return B[N - 1][N - 1];
}

function changeValue(value) {
    if (value == 2) {
        length_v = 3;
    } else {
        length_v = 2;
    }
    var kilkist = document.getElementsByTagName("input").length;
    for (let index = 0; index < kilkist - 1; index++) {
        document.querySelector('input').remove();
    }
    if (kilkist == 2 || kilkist == 3) {
        addbegin("table-block1", "a", length_v);
    } else {
        addbegin("table-block1", "A", length_v);
        addbegin("table-block2", "B", length_v);
        addbegin("table-block3", "C", length_v);
    }
}

function enter_mix() {
    var dets;
    array1 = fillArray(array1, 0);
    array2 = fillArray(array2, length_v);
    array3 = fillArray(array3, 2 * length_v);
    array4 = new Array(length_v);
    for (let i = 0; i < length_v; i++) {
        array4[i] = new Array(length_v);
    }
    for (let i = 0; i < length_v; i++) {
        for (let j = 0; j < length_v; j++) {
            array4[i][j] = 0;
        }
    }
    for (let i = 0; i < length_v; i++) {
        for (let j = 0; j < length_v; j++) {
            array4[i][j] = array1[j];
        }
    }
    for (let i = 1; i < length_v; i++) {
        for (let j = 0; j < length_v; j++) {
            array4[i][j] = array2[j];
        }
    }
    for (let i = 2; i < length_v; i++) {
        for (let j = 0; j < length_v; j++) {
            array4[i][j] = array3[j];
        }
    }
    dets = Determinant(array4);

    if (isInt1(dets) != 0 || isInt1(dets) != -0) {
        dets = dets.toFixed(3);
    }
    let str = "det=" + dets.toString();
    var el = document.getElementById("table-block");
    if (typeof el.innerText !== 'undefined') {
        el.innerText = str;
    } else {
        el.textContent = str;
    }
}

function komplanar() {
    var dets;
    var flag;
    array1 = fillArray(array1, 0);
    array2 = fillArray(array2, length_v);
    array3 = fillArray(array3, 2 * length_v);
    array4 = new Array(length_v);
    for (let i = 0; i < length_v; i++) {
        array4[i] = new Array(length_v);
    }
    for (let i = 0; i < length_v; i++) {
        for (let j = 0; j < length_v; j++) {
            array4[i][j] = 0;
        }
    }
    for (let i = 0; i < length_v; i++) {
        for (let j = 0; j < length_v; j++) {
            array4[i][j] = array1[j];
        }
    }
    for (let i = 1; i < length_v; i++) {
        for (let j = 0; j < length_v; j++) {
            array4[i][j] = array2[j];
        }
    }
    for (let i = 2; i < length_v; i++) {
        for (let j = 0; j < length_v; j++) {
            array4[i][j] = array3[j];
        }
    }
    dets = Determinant(array4);
    if(dets===0){
        flag="Вони компланарні";
    }else{
        flag="Вони не компланарні";
    }
    let str = "det=" + flag;
    var el = document.getElementById("table-block");
    if (typeof el.innerText !== 'undefined') {
        el.innerText = str;
    } else {
        el.textContent = str;
    }
}