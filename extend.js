var cycleDiv;
var timer;
var cycleIndex=0;
window.onload=function(){
    cycleDiv=new Array();
    cycleDiv[0]=document.getElementsByClassName("func1")[0];
    cycleDiv[1]=document.getElementsByClassName("func2")[0];
    cycleDiv[2]=document.getElementsByClassName("func3")[0];
    cycleDiv[3]=document.getElementsByClassName("morefuncs")[0];
    rescumePlayCycle();
    // addBlock();
}
function addClass(obj, cls) {  
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}
function removeClass(obj, cls){
    if (hasClass(obj, cls)) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, '');
    }
}
function hasClass(obj, cls){
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
}
function showSubMenu(li){
    var subMenu=li.getElementsByTagName("ul")[0];
    subMenu.style.display="block";
}
function hideSubMenu(li){
    var subMenu=li.getElementsByTagName("ul")[0];
    subMenu.style.display="none";
}
function setSelectedButton(index){
    document.getElementById("swapSelected").id="";
    var buttons=document.getElementById("swapButton").childNodes;
    buttons[2*index].id="swapSelected";
}
function setDivsVisible(index){
    for(var i=0;i<cycleDiv.length;i++)
        addClass(cycleDiv[i],"hide");
    removeClass(cycleDiv[index],"hide");
}
function playCycleStuckAt(index){
    clearInterval(timer);
    timer=null;
    cycleIndex=index;
    if(typeof index=='string')
        index=parseInt(index);
    setSelectedButton(index);
    setDivsVisible(index-1);
}
function autoPlay(){
    if(cycleIndex>cycleDiv.length-1)
        cycleIndex=0;
    cycleIndex++;
    setSelectedButton(cycleIndex);
    setDivsVisible(cycleIndex-1);
}
function rescumePlayCycle(){
    if(timer==null)
        timer=setInterval("autoPlay()",2000);
        // var c=0;
}

function addBlock_joinUs(){
    var Fivespace="&nbsp&nbsp&nbsp&nbsp&nbsp";

    var sHeight=document.documentElement.scrollHeight;
    var sWidth=document.documentElement.scrollWidth;

    var wHeight=document.documentElement.clientHeight;
    var wWidth=document.documentElement.clientWidth;
    
    var oMask=document.createElement("div");
        oMask.id="mask";
        oMask.style.height=sHeight+"px";
        oMask.style.width=sWidth+"px";
    document.body.appendChild(oMask);

    var oLogin=document.createElement("div");
        oLogin.id="joinUs";
        oLogin.innerHTML=/*
        */"<img src='res/Team_Avatar_01.png'>"+/*
        */"<img src='res/Team_Avatar_02.png'>"+"<br>"+/*
        */"<img src='res/Team_Avatar_03.png'>"+/*
        */"<img src='res/Team_Avatar_04.png'>"+/*
        */"<br><span style='color:#fff;font-size:40px'>这是我们的猿们"+Fivespace+Fivespace+Fivespace+Fivespace+"</span>"+/*
        */"<img src='res/exit.png' onclick=destroyBlock('joinUs')>";

    document.body.appendChild(oLogin);
}
function addBlock_Begin(){
    var sHeight=document.documentElement.scrollHeight;
    var sWidth=document.documentElement.scrollWidth;

    var wHeight=document.documentElement.clientHeight;
    var wWidth=document.documentElement.clientWidth;
    
    var oMask=document.createElement("div");
        oMask.id="mask";
        oMask.style.height=sHeight+"px";
        oMask.style.width=sWidth+"px";
    document.body.appendChild(oMask);

    var oLogin=document.createElement("div");
        oLogin.id="beginWith";
        oLogin.innerHTML=/*
        */"<img src='res/rua002.jpg'>"+/*
        */"<img src='res/exit.png' onclick=destroyBlock('beginWith')>";

    document.body.appendChild(oLogin);
}
function destroyBlock(id){
    document.body.removeChild(document.getElementById("mask"));
    document.body.removeChild(document.getElementById(id));
}
function openDownloadWindows(){
    window.open('http://www.baidu.com/','_blank','width=300,height=200,menubar=no,toolbar=no, status=no,scrollbars=yes');
}