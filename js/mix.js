var col,row,hamburger=document.querySelector(".hamburger");hamburger.addEventListener("click",(function(){document.querySelector("body").classList.toggle("active")}));var array4,array3,array1,array2,l=3;function addbegin(e,r,t){document.getElementById(e).innerHTML=2==t?r+"=( <input type='number' id='a'>,<input type='number' id='a'> )":r+"=( <input type='number' id='a'>,<input type='number' id='a'>,<input type='number' id='a'> )"}length_v=3,document.getElementById("table-block1").addEventListener("load",addbegin("table-block1","A",3)),document.getElementById("table-block2").addEventListener("load",addbegin("table-block2","B",3)),document.getElementById("table-block3").addEventListener("load",addbegin("table-block3","С",3));var num_l=0,k=0;function isInt1(e){return e%1}function createArray(){return new Array(length_v)}function fillArray(e,r){e=createArray();let t=r;for(let r=0;r<length_v;r++)console.log(document.getElementsByTagName("input")[t].value),e[r]=document.getElementsByTagName("input")[t++].value;return e}function Determinant(e){for(var r=e.length,t=[],a=1,n=0,l=0;l<r;++l){t[l]=[];for(var o=0;o<r;++o)t[l][o]=e[l][o]}for(l=0;l<r-1;++l){var y=l,g=Math.abs(t[l][l]);for(o=l+1;o<r;++o){var i=Math.abs(t[o][l]);i>g&&(y=o,g=i)}if(y>l){var v=t[l];t[l]=t[y],t[y]=v,++n}else if(0==g)return g;var d=t[l][l];for(o=l+1;o<r;++o){var u=t[o][l];t[o][l]=0;for(var c=l+1;c<r;++c)t[o][c]=(t[o][c]*d-t[l][c]*u)/a}a=d}return n%2?-t[r-1][r-1]:t[r-1][r-1]}function changeValue(e){length_v=2==e?3:2;var r=document.getElementsByTagName("input").length;for(let e=0;e<r-1;e++)document.querySelector("input").remove();2==r||3==r?addbegin("table-block1","a",length_v):(addbegin("table-block1","A",length_v),addbegin("table-block2","B",length_v),addbegin("table-block3","C",length_v))}function enter_mix(){var e;array1=fillArray(array1,0),array2=fillArray(array2,length_v),array3=fillArray(array3,2*length_v),array4=new Array(length_v);for(let e=0;e<length_v;e++)array4[e]=new Array(length_v);for(let e=0;e<length_v;e++)for(let r=0;r<length_v;r++)array4[e][r]=0;for(let e=0;e<length_v;e++)for(let r=0;r<length_v;r++)array4[e][r]=array1[r];for(let e=1;e<length_v;e++)for(let r=0;r<length_v;r++)array4[e][r]=array2[r];for(let e=2;e<length_v;e++)for(let r=0;r<length_v;r++)array4[e][r]=array3[r];0==isInt1(e=Determinant(array4))&&-0==isInt1(e)||(e=e.toFixed(3));let r="det="+e.toString();var t=document.getElementById("table-block");void 0!==t.innerText?t.innerText=r:t.textContent=r}function komplanar(){array1=fillArray(array1,0),array2=fillArray(array2,length_v),array3=fillArray(array3,2*length_v),array4=new Array(length_v);for(let e=0;e<length_v;e++)array4[e]=new Array(length_v);for(let e=0;e<length_v;e++)for(let r=0;r<length_v;r++)array4[e][r]=0;for(let e=0;e<length_v;e++)for(let r=0;r<length_v;r++)array4[e][r]=array1[r];for(let e=1;e<length_v;e++)for(let r=0;r<length_v;r++)array4[e][r]=array2[r];for(let e=2;e<length_v;e++)for(let r=0;r<length_v;r++)array4[e][r]=array3[r];let e="det="+(0===Determinant(array4)?"Вони компланарні":"Вони не компланарні");var r=document.getElementById("table-block");void 0!==r.innerText?r.innerText=e:r.textContent=e}