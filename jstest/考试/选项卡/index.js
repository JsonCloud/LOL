
var oTab = document.getElementById('tab');
var oLis = oTab.getElementsByTagName('li');
var oDivs = oTab.getElementsByTagName('div');

function onTouchOver(onIndex){
    for (var i= 0;i<oLis.length;i++){
        oLis[i].className = "";
        oDivs[i].className ="";
    }
    oLis[onIndex].className="select";
    oDivs[onIndex].className ="select";
}

for(var n= 0;n<oLis.length;n++){
    oLis[n].selectIndex = n;
    oLis[n].onmouseover = function(){
        onTouchOver(this.selectIndex);
    }
}