var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("active");
})

/*dsfsdfsgsdgs*/

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
    document.getElementById("table-block1").appendChild(tbl);

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

document.getElementById("table-block1").addEventListener("load", tableCreate(1, 3, 3));

var size = row;
var k = 0;
var g = row * row;

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

function tableT() {
    let inputs = document.getElementsByTagName('table');
    array2 = tranpositionArray();
    if (inputs.length <= 1) {
        var body = document.body;
        var tbl = document.createElement('table');
        for (let i = 0; i < row; i++) {
            var tr = tbl.insertRow();
            for (let j = 0; j < col; j++) {
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(array2[i][j]));
                td.style.border = '1px solid black';
            }
        }
        document.getElementById("table-block").appendChild(tbl);
    } else {
        let tabl1 = document.getElementsByTagName("table")[1];
        document.getElementById("table-block").removeChild(tabl1);
        tableT();
    }
}

function changeT(value) {
    document.querySelector('table').remove();
    if (document.getElementsByTagName('table').length > 0) {
        document.querySelector('table').remove();
    }
    tableCreate(1, value, value);
    size = value;
}

