let size = 3;
var k = 0;
var g = 9;
var flag = 0;
var array3;
var array2;
var array1;

function isInt1(n) {
    console.log(n % 1);
    return n % 1;
}

function createArray() {
    var array = new Array(size);
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(size);
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
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
            for (let k = 0; k < size; k++) {
                array3[i][j] += array1[i][k] * array2[k][j];
            }
        }
    }
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
    if (inputs.length <= 2) {
        var body = document.body;
        var tbl = document.createElement('table');
        for (let i = 0; i < 3; i++) {
            var tr = tbl.insertRow();
            for (let j = 0; j < 3; j++) {
                var td = tr.insertCell();
                var moment = array3[i][j];
                if (isInt1(moment)==0||isInt1(moment)==-0) {
                    td.appendChild(document.createTextNode(parseInt(moment)));
                } else {
                    td.appendChild(document.createTextNode(moment.toFixed(2)));
                }
                td.style.border = '1px solid black';
            }
        }
        document.getElementsByClassName('container').appendChild(tbl);
    } else {
        k = 18;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                console.log(document.getElementsByTagName('td')[k].innerHTML);
                var moment = array3[i][j];
                if (isInt1(moment)==0 || isInt1(moment)==-0) {
                    document.getElementsByTagName('td')[k++].innerHTML = parseInt(moment);
                } else {
                    document.getElementsByTagName('td')[k++].innerHTML = moment.toFixed(2);
                }
            }
        }
    }
}