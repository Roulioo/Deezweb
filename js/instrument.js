////////////////////////////////////////////////////////////////  
// Javascript made by Rasmus - http://www.peters1.dk //  
////////////////////////////////////////////////////////////////  
  
var INSTRUMENT_Picture = "./img/music-note.png"  
var INSTRUMENT_no = 15;  
  
var INSTRUMENT_browser_IE_NS = (document.body.clientHeight) ? 1 : 0;  
var INSTRUMENT_browser_MOZ = (self.innerWidth) ? 1 : 0;  
var INSTRUMENT_browser_IE7 = (document.documentElement.clientHeight) ? 1 : 0;  
  
var INSTRUMENT_Time;  
var INSTRUMENT_dx, INSTRUMENT_xp, INSTRUMENT_yp;  
var INSTRUMENT_am, INSTRUMENT_stx, INSTRUMENT_sty;   
var i, INSTRUMENT_Browser_Width, INSTRUMENT_Browser_Height;  
  
if (INSTRUMENT_browser_IE_NS)  
{  
    INSTRUMENT_Browser_Width = document.body.clientWidth;  
    INSTRUMENT_Browser_Height = document.body.clientHeight;  
}  
else if (INSTRUMENT_browser_MOZ)  
{  
    INSTRUMENT_Browser_Width = self.innerWidth - 20;  
    INSTRUMENT_Browser_Height = self.innerHeight;  
}  
else if (INSTRUMENT_browser_IE7)  
{  
    INSTRUMENT_Browser_Width = document.documentElement.clientWidth;  
    INSTRUMENT_Browser_Height = document.documentElement.clientHeight;  
}  
  
INSTRUMENT_dx = new Array();  
INSTRUMENT_xp = new Array();  
INSTRUMENT_yp = new Array();  
INSTRUMENT_am = new Array();  
INSTRUMENT_stx = new Array();  
INSTRUMENT_sty = new Array();  
  
for (i = 0; i < INSTRUMENT_no; ++ i)   
{   
    INSTRUMENT_dx[i] = 0;   
    INSTRUMENT_xp[i] = Math.random()*(INSTRUMENT_Browser_Width-50);  
    INSTRUMENT_yp[i] = Math.random()*INSTRUMENT_Browser_Height;  
    INSTRUMENT_am[i] = Math.random()*20;   
    INSTRUMENT_stx[i] = 0.02 + Math.random()/10;  
    INSTRUMENT_sty[i] = 0.7 + Math.random();  
    if (i == 0) document.write("<\div id=\"INSTRUMENT_flake"+ i +"\" style=\"position: absolute; z-index: "+ i +"; visibility: visible; top: 15px; left: 15px;\"><\img src=\""+INSTRUMENT_Picture+"\" border=\"0\"></a><\/div>");  
    else document.write("<\div id=\"INSTRUMENT_flake"+ i +"\" style=\"position: absolute; z-index: "+ i +"; visibility: visible; top: 15px; left: 15px;\"><\img src=\""+INSTRUMENT_Picture+"\" border=\"0\"><\/div>");  
}  
  
function INSTRUMENT_Weather()   
{   
  
for (i = 0; i < INSTRUMENT_no; ++ i)   
{   
    INSTRUMENT_yp[i] += INSTRUMENT_sty[i];  
  
    if (INSTRUMENT_yp[i] > INSTRUMENT_Browser_Height-50)   
    {  
        INSTRUMENT_xp[i] = Math.random()*(INSTRUMENT_Browser_Width-INSTRUMENT_am[i]-30);  
        INSTRUMENT_yp[i] = 0;  
        INSTRUMENT_stx[i] = 0.02 + Math.random()/10;  
        INSTRUMENT_sty[i] = 0.7 + Math.random();  
    }  
  
    INSTRUMENT_dx[i] += INSTRUMENT_stx[i];  
  
    document.getElementById("INSTRUMENT_flake"+i).style.top=INSTRUMENT_yp[i]+"px";  
    document.getElementById("INSTRUMENT_flake"+i).style.left=INSTRUMENT_xp[i] + INSTRUMENT_am[i]*Math.sin(INSTRUMENT_dx[i])+"px";  
}  
  
INSTRUMENT_Time = setTimeout("INSTRUMENT_Weather()", 10);  
  
}  
  
INSTRUMENT_Weather();  