var col,row,hamburger=document.querySelector(".hamburger");hamburger.addEventListener("click",(function(){document.querySelector("body").classList.toggle("active")}));var l=2;function addbegin(e,t){document.getElementById(e).innerHTML=2==t?"<input type='number' id='a'>x + <input type='number' id='a'>y + <input type='number' id='a'>c + <input type='number' id='a'> = 0":name+"=( <input type='number' id='a'>,<input type='number' id='a'>,<input type='number' id='a'> )"}function addbegin2(e,t){document.getElementById(e).innerHTML=2==t?"A( <input type='number' id='a'> , <input type='number' id='a'> , <input type='number' id='a'> )":name+"=( <input type='number' id='a'>,<input type='number' id='a'>,<input type='number' id='a'> )"}function isInt1(e){return e%1}function l_to_line(){let e=1*document.getElementsByTagName("input")[3].value,t=document.getElementsByTagName("input")[0].value*document.getElementsByTagName("input")[4].value,n=document.getElementsByTagName("input")[1].value*document.getElementsByTagName("input")[5].value+document.getElementsByTagName("input")[2].value*document.getElementsByTagName("input")[6].value;var a=Math.abs(t+n+e)/Math.sqrt(Math.pow(document.getElementsByTagName("input")[0].value,2)+Math.pow(document.getElementsByTagName("input")[1].value,2)+Math.pow(document.getElementsByTagName("input")[2].value,2));0==isInt1(a)&&-0==isInt1(a)||(a=a.toFixed(2));var u=document.getElementById("table-block");void 0!==u.innerText?u.innerText=a.toString():u.textContent=a.toString()}length_v=2,document.getElementById("table-block1").addEventListener("load",addbegin("table-block1",2)),document.getElementById("table-block2").addEventListener("load",addbegin2("table-block2",2));