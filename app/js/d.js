var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("active");
})

/*dsfsdfsgsdgs*/


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

function Gaysa(array) {

    let k;
    flag = true;
    for (let t = 1; t < size; t++) {
        for (let i = t; i < size; i++) {
            flag = true;
            for (let j = t - 1; j < size; j++) {
                if (flag) {
                    if (j == 0) {
                        k = array[i][j] / array[0][j];
                        array[i][j] -= k * array[0][j];
                    } else {
                        k = array[i][j] / array[i - 1][j];
                        array[i][j] -= k * array[i - 1][j];
                    }
                    flag = false;
                } else {
                    if (t == 1) {
                        array[i][j] -= k * array[0][j];
                    } else {
                        array[i][j] -= k * array[i - 1][j];
                    }

                }
            }
        }
    }
    return array;
}

function determinantArray(array1) {
    array1 = createArray(array1);
    k = 0;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            mom = document.getElementsByTagName("input")[k++].value;
            if (mom == '') {
                array1[i][j] = 0;
            } else {
                array1[i][j] = mom;
            }
        }
    }
    det = Determinant(array1);
    return det;
}

function Determinant(array1)   // Используется алгоритм Барейса, сложность O(n^3)
{
    var N = array1.length, B = [], denom = 1, exchanges = 0;
    for (var i = 0; i < N; ++i)
     { B[ i ] = [];
       for (var j = 0; j < N; ++j) B[ i ][j] = array1[ i ][j];
     }
    for (var i = 0; i < N-1; ++i)
     { var maxN = i, maxValue = Math.abs(B[ i ][ i ]);
       for (var j = i+1; j < N; ++j)
        { var value = Math.abs(B[j][ i ]);
          if (value > maxValue){ maxN = j; maxValue = value; }
        }
       if (maxN > i)
        { var temp = B[ i ]; B[ i ] = B[maxN]; B[maxN] = temp;
          ++exchanges;
        }
       else { if (maxValue == 0) return maxValue; }
       var value1 = B[ i ][ i ];
       for (var j = i+1; j < N; ++j)
        { var value2 = B[j][ i ];
          B[j][ i ] = 0;
          for (var k = i+1; k < N; ++k) B[j][k] = (B[j][k]*value1-B[ i ][k]*value2)/denom;
        }
       denom = value1;
     }
    if (exchanges%2) return -B[N-1][N-1];
    else return B[N-1][N-1];
}


function tableT() {
    let inputs = document.getElementsByTagName('table');
    var d = determinantArray(array1);
    let str = d.toString();
    var el = document.getElementById("table-block");
    if (typeof el.innerText !== 'undefined') {
        el.innerText = str;
    } else {
        el.textContent = str;
    }
}

function changeT(value) {
    document.querySelector('table').remove();
    tableCreate(1, value, value);
    size = value;
}