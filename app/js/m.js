var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("active");
})

/*dsfsdfsgsdgs*/


var flag = 0;
var array3;
var array2;
var array1;
var col;
var row;

function tableCreate(num, rows, cols) {
    var body = document.body,
        tbl = document.createElement('table');
    for (var i = 0; i < rows; i++) {
        var tr = tbl.insertRow();
        for (var j = 0; j < cols; j++) {
            var td = tr.insertCell();
            td.innerHTML = "<input type='number' id='a'>";
        }
    }
    col = cols;
    row = rows;
    if (num == 1) {
        document.getElementById("table-block1").appendChild(tbl);
    } else {
        document.getElementById("table-block2").appendChild(tbl);
    }
}

document.getElementById("table-block1").addEventListener("load", tableCreate(1, 3, 3));
document.getElementById("table-block2").addEventListener("load", tableCreate(2, 3, 3));

var size = row;
var k = 0;
var g = row * row;

function isInt1(n) {
    return n % 1;
}

function createArray() {
    var array = new Array(size);
    for (let i = 0; i < size; i++) {
        array[i] = new Array(size);
    }
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            array[i][j] = 0;
        }
    }
    return array;
}

function symmaArray() {
    k = 0;
    g = row * row;
    array1 = createArray(array1);
    array2 = createArray(array2);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let mom = document.getElementsByTagName("input")[k++].value;
            console.log(mom);
            if (mom == '') {
                array1[i][j] = 0;
            } else {
                array1[i][j] = mom;
            }
            console.log(array1[i][j]);
            mom = document.getElementsByTagName("input")[g++].value;
            console.log(mom);
            if (mom == '') {
                array2[i][j] = 0;
            } else {
                array2[i][j] = mom;
            }
            console.log(array2[i][j]);
        }
    }
    array3 = createArray(array3);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            array3[i][j] = parseFloat(array1[i][j]) + parseFloat(array2[i][j]);
        }
    }
    return array3;
}

function distructionArray() {
    k = 0;
    g = row * row;
    array1 = createArray(array1);
    array2 = createArray(array2);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let mom = document.getElementsByTagName("input")[k++].value;
            console.log(mom);
            if (mom == '') {
                array1[i][j] = 0;
            } else {
                array1[i][j] = mom;
            }
            console.log(array1[i][j]);
            mom = document.getElementsByTagName("input")[g++].value;
            console.log(mom);
            if (mom == '') {
                array2[i][j] = 0;
            } else {
                array2[i][j] = mom;
            }
            console.log(array2[i][j]);
        }
    }
    array3 = createArray(array3);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            array3[i][j] = parseFloat(array1[i][j]) - parseFloat(array2[i][j]);
        }
    }
    return array3;
}

function productArray() {
    k = 0;
    g = row * row;
    array1 = createArray(array1);
    array2 = createArray(array2);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            array1[i][j] = document.getElementsByTagName("input")[k++].value;
            array2[i][j] = document.getElementsByTagName("input")[g++].value;
        }
    }
    array3 = createArray(array3);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            for (let k = 0; k < size; k++) {
                array3[i][j] += array1[i][k] * array2[k][j];
            }
        }
    }
    return array3;
}

function tableCreate1(name) {
    let inputs = document.getElementsByTagName('table');
    if (name == 'p') {
        array3 = productArray();
    } else if (name == 's') {
        array3 = symmaArray();
    } else if (name == 'd') {
        array3 = distructionArray();
    }
    if (inputs.length <= 2) {
        var body = document.body;
        var tbl = document.createElement('table');
        for (let i = 0; i < row; i++) {
            var tr = tbl.insertRow();
            for (let j = 0; j < col; j++) {
                var td = tr.insertCell();
                var moment = array3[i][j];
                console.log(moment);
                if (isInt1(moment) == 0 || isInt1(moment) == -0) {
                    td.appendChild(document.createTextNode(parseInt(moment)));
                } else {
                    td.appendChild(document.createTextNode(moment.toFixed(2)));
                }
                td.style.border = '1px solid black';
            }
        }
        document.getElementById("table-block").appendChild(tbl);
    } else {
        let tabl1 = document.getElementsByTagName("table")[2];
        document.getElementById("table-block").removeChild(tabl1);
        tableCreate1(name);
    }
}

function changeValue(value) {
    document.querySelector('table').remove();
    document.querySelector('table').remove();
    if (document.getElementsByTagName('table').length > 0) {
        document.querySelector('table').remove();
    }
    tableCreate(1, value, value);
    tableCreate(2, value, value);
    size = value;
}