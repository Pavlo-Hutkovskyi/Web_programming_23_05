var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("active");
})

/*dsfsdfsgsdgs*/


var col;
var row;
var l = 2;
length_v = 2;

function addbegin(str, name, num) {
    if (num == 2) {
        document.getElementById(str).innerHTML = name + "=( " + "<input type='number' id='a'>,<input type='number' id='a'>" + " )";
    } else {
        document.getElementById(str).innerHTML = name + "=( " + "<input type='number' id='a'>,<input type='number' id='a'>,<input type='number' id='a'>" + " )";
    }
}

document.getElementById("table-block1").addEventListener("load", addbegin("table-block1", "A", 2));
document.getElementById("table-block2").addEventListener("load", addbegin("table-block2", "B", 2));

var array1;
var array2;
var num_l = 0;
var k = 0;
var l = 2;

function isInt1(n) {
    return n % 1;
}

function createArray() {
    var array = new Array(length_v);
    return array;
}

function fillArray(array,k) {
    array=createArray();
    let now=k;
    for (let index = 0; index < length_v; index++) {
        console.log(document.getElementsByTagName("input")[now].value);
        array[index]=document.getElementsByTagName("input")[now++].value;
    }
    return array;
}

function length_of_vector() {
    let size = 0;
    array1=fillArray(array1,0);
    array2=fillArray(array2,length_v);
    for (let index = 0; index < length_v; index++) {
        size+=Math.pow(array2[index]-array1[index],2);
    }
    return Math.sqrt(size);
}

function length_of_vector1() {
    let size = 0;
    array1=fillArray(array1,0);
    console.log(array1);
    for (let index = 0; index < length_v; index++) {
        size+=Math.pow(array1[index],2);
    }
    return Math.sqrt(size);
}

function enter_length() {
    var kilkist = document.getElementsByTagName("input").length;
    if (kilkist == 2 || kilkist == 3) {
        num_l = length_of_vector1();
    } else {
        num_l = length_of_vector();
    }
    if (isInt1(num_l) != 0 || isInt1(num_l) != -0) {
        num_l = num_l.toFixed(3);
    }
    let str = "|ab|=" + num_l.toString();
    var el = document.getElementById("table-block");
    if (typeof el.innerText !== 'undefined') {
        el.innerText = str;
    } else {
        el.textContent = str;
    }
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
    }
}

function changeType(nameType) {
    console.log(l);
    if (nameType === "2") {
        for (let index = 0; index < l * 2; index++) {
            document.querySelector('input').remove();
        }
        l = 2;
        addbegin("table-block1", "A", length_v);
        addbegin("table-block2", "B", length_v);
    } else {
        for (let index = 0; index < l * 2; index++) {
            var div = document.getElementById('table-block1');
            while (div.firstChild) {
                div.removeChild(div.firstChild);
            }
            var div2 = document.getElementById('table-block2');
            while (div2.firstChild) {
                div2.removeChild(div2.firstChild);
            }
            //document.querySelector('input').remove();
            console.log("delete");
        }
        l = 1;
        addbegin("table-block1", "a", length_v);
    }
}

function enter_middle() {
    var kilkist = document.getElementsByTagName("input").length;
    result = middle_of_vector();
    let str = "a=( " + result+" )";
    var el = document.getElementById("table-block");
    if (typeof el.innerText !== 'undefined') {
        el.innerText = str;
    } else {
        el.textContent = str;
    }
}

function middle_of_vector() {
    k = 0;
    let size = 0;
    let str="";
    for (let index = 0; index < document.getElementsByTagName('input').length/2; index++) {
        size = (document.getElementsByTagName('input')[index + document.getElementsByTagName('input').length / 2].value - document.getElementsByTagName('input')[index].value)/2;
        console.log(document.getElementsByTagName('input')[index + document.getElementsByTagName('input').length / 2].value +'-'+ document.getElementsByTagName('input')[index].value);
        if (isInt1(size) != 0 || isInt1(size) != -0) {
            size = size.toFixed(2);
        }
        if(index==document.getElementsByTagName('input').length/2-1){
            str+=size;}
        else{
            str+=size+";";
        }
        console.log(size);
    }
    return str;
}