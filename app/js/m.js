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
            td.innerHTML = '<input type="number" id="a">';
        }
        /*tbl.style*/
    }
    col = cols;
    row = rows;
    console.log(col);
    console.log(row);
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
    console.log(n % 1);
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
    g = 9;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            array1[i][j] = document.getElementsByTagName("input")[k++].value;
            array2[i][j] = document.getElementsByTagName("input")[g++].value;
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
    g = 9;
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
            var cur = parseFloat(array1[i][j]) - array2[i][j];
            array3[i][j] = cur.toFixed(2);
        }
    }
    return array3;
}

function productArray() {
    k = 0;
    g = row * row;
    console.log(k);
    console.log(g);
    console.log(size);
    array1 = createArray(array1);
    array2 = createArray(array2);
    console.log(array1);
    console.log(array2);
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
    console.log(array3);
    return array3;
}

function tranpositionArray(array1) {
    array1 = createArray(array1);
    k = 0;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            array1[i][j] = document.getElementsByTagName("input")[k++].value;
        }
    }
    for (let i = 0; i < size; i++) {
        for (let j = i; j < size; j++) {
            if (i != j) {
                var t = array1[i][j];
                array1[i][j] = array1[j][i];
                array1[j][i] = t;
            }

        }
    }
    return array1;
}

function Gaysa(array) {
    let k, flag;
    for (let t = 1; t < array.length; t++) {
        for (let i = t; i < array.length; i++, flag = true) {
            for (let j = t - 1; j < array.length; j++) {
                if (flag) {
                    if (j == 0) {
                        k = arr[i][j] / arr[0][j];
                        arr[i][j] -= k * arr[0][j];
                    } else {
                        k = arr[i][j] / arr[i - 1][j];
                        arr[i][j] -= k * arr[i - 1][j];
                    }
                    flag = false;
                } else {
                    if (t == 1)
                        arr[i][j] -= k * arr[0][j];
                    else
                        arr[i][j] -= k * arr[i - 1][j];

                }
            }
        }
    }
    return array;
}

function determinantArray(array1) {
    array1 = Gaysa(array1);
    k = 0;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            array1[i][j] = document.getElementsByTagName("input")[k++].value;
        }
    }
    let det = 1;
    for (let i = 0; i < array1.length; i++)
        det *= array1[i][i];
    return det;
}


function tableCreate1() {
    let inputs = document.getElementsByTagName('table');
    array3 = productArray();
    console.log(inputs.length);
    if (inputs.length <= 2) {
        var body = document.body;
        var tbl = document.createElement('table');
        for (let i = 0; i < row; i++) {
            var tr = tbl.insertRow();
            for (let j = 0; j < col; j++) {
                var td = tr.insertCell();
                var moment = array3[i][j];
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
        console.log(tabl1);
        document.getElementById("table-block").removeChild(tabl1);
        tableCreate1();
    }
}

function changeValue(value) {
    console.log(value);
    document.querySelector('table').remove();
    document.querySelector('table').remove();
    console.log(document.getElementsByTagName('table').length);
    if (document.getElementsByTagName('table').length > 0) {
        document.querySelector('table').remove();
    }
    tableCreate(1, value, value);
    tableCreate(2, value, value);
    size = value;
    console.log(size);
}