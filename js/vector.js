var col,row,hamburger=document.querySelector(".hamburger");hamburger.addEventListener("click",(function(){document.querySelector("body").classList.toggle("active")}));var array4,array3,array1,array2,l=2;function addbegin(e,t,n){document.getElementById(e).innerHTML=2==n?t+"=( <input type='number' id='a'>,<input type='number' id='a'> )":t+"=( <input type='number' id='a'>,<input type='number' id='a'>,<input type='number' id='a'> )"}length_v=2,document.getElementById("table-block1").addEventListener("load",addbegin("table-block1","A",2)),document.getElementById("table-block2").addEventListener("load",addbegin("table-block2","B",2));var num_l=0,k=0;l=2;function isInt1(e){return e%1}function createArray(){return new Array(length_v)}function fillArray(e,t){e=createArray();let n=t;for(let t=0;t<length_v;t++)console.log(document.getElementsByTagName("input")[n].value),e[t]=document.getElementsByTagName("input")[n++].value;return e}function length_of_vector(){let e=0;array1=fillArray(array1,0),array2=fillArray(array2,length_v);for(let t=0;t<length_v;t++)e+=Math.pow(array2[t]-array1[t],2);return Math.sqrt(e)}function length_of_vector1(){let e=0;array1=fillArray(array1,0),console.log(array1);for(let t=0;t<length_v;t++)e+=Math.pow(array1[t],2);return Math.sqrt(e)}function enter_length(){var e=document.getElementsByTagName("input").length;0==isInt1(num_l=2==e||3==e?length_of_vector1():length_of_vector())&&-0==isInt1(num_l)||(num_l=num_l.toFixed(3));let t="|ab|="+num_l.toString();var n=document.getElementById("table-block");void 0!==n.innerText?n.innerText=t:n.textContent=t}function changeValue(e){length_v=2==e?3:2;var t=document.getElementsByTagName("input").length;for(let e=0;e<t-1;e++)document.querySelector("input").remove();2==t||3==t?addbegin("table-block1","a",length_v):(addbegin("table-block1","A",length_v),addbegin("table-block2","B",length_v))}function changeType(e){if(console.log(l),"2"===e){for(let e=0;e<2*l;e++)document.querySelector("input").remove();l=2,addbegin("table-block1","A",length_v),addbegin("table-block2","B",length_v)}else{for(let e=0;e<2*l;e++){for(var t=document.getElementById("table-block1");t.firstChild;)t.removeChild(t.firstChild);for(var n=document.getElementById("table-block2");n.firstChild;)n.removeChild(n.firstChild);console.log("delete")}l=1,addbegin("table-block1","a",length_v)}}function enter_middle(){document.getElementsByTagName("input").length;result=middle_of_vector();let e="a=( "+result+" )";var t=document.getElementById("table-block");void 0!==t.innerText?t.innerText=e:t.textContent=e}function middle_of_vector(){k=0;let e=0,t="";for(let n=0;n<document.getElementsByTagName("input").length/2;n++)e=(document.getElementsByTagName("input")[n+document.getElementsByTagName("input").length/2].value-document.getElementsByTagName("input")[n].value)/2,console.log(document.getElementsByTagName("input")[n+document.getElementsByTagName("input").length/2].value+"-"+document.getElementsByTagName("input")[n].value),0==isInt1(e)&&-0==isInt1(e)||(e=e.toFixed(2)),n==document.getElementsByTagName("input").length/2-1?t+=e:t+=e+";",console.log(e);return t}function enter_scalar(){document.getElementsByTagName("input").length;result=middle_of_vector();let e="A*B=( "+result+" )";var t=document.getElementById("table-block");void 0!==t.innerText?t.innerText=e:t.textContent=e}function middle_of_vector(){let e=0,t="";array1=fillArray(array1,0),array2=fillArray(array2,length_v);for(let t=0;t<length_v;t++)e+=array1[t]*array2[t];return 0==isInt1(e)&&-0==isInt1(e)||(e=e.toFixed(2)),t=e,t}function Determinant(e){for(var t=e.length,n=[],r=1,a=0,l=0;l<t;++l){n[l]=[];for(var o=0;o<t;++o)n[l][o]=e[l][o]}for(l=0;l<t-1;++l){var i=l,u=Math.abs(n[l][l]);for(o=l+1;o<t;++o){var d=Math.abs(n[o][l]);d>u&&(i=o,u=d)}if(i>l){var g=n[l];n[l]=n[i],n[i]=g,++a}else if(0==u)return u;var m=n[l][l];for(o=l+1;o<t;++o){var c=n[o][l];n[o][l]=0;for(var y=l+1;y<t;++y)n[o][y]=(n[o][y]*m-n[l][y]*c)/r}r=m}return a%2?-n[t-1][t-1]:n[t-1][t-1]}function kolinear(){var e;let t;array1=fillArray(array1,0),array2=fillArray(array2,length_v);for(let n=0;n<length_v;n++)if(0==n)t=array2[n]/array1[n];else{if(n>0&&t!==array2[n]/array1[n]){e="Вектори не колінеарні";break}e="Вектори колінеарні"}var n=document.getElementById("table-block");void 0!==n.innerText?n.innerText=e:n.textContent=e}