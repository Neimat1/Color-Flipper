var colors=['rgb(153, 255, 153)','#00ffff','rgb(153, 102, 255)','rgb(255, 153, 0)','darkcyan'];
var hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
var btn   = document.querySelector('.click-me');
var color = document.querySelector('.color');


btn.addEventListener('click',function(){
    if(document.title=='Color Flipper || Simple'){
        var indexRandom=getRandom(colors.length);
        document.body.style.background = colors[indexRandom] ;
        color.textContent = colors[indexRandom];
    }
    else if(document.title=='Color Flipper || Hex'){
        var hexColor='#';
        for(var i=0;i<6;i++){
            hexColor+=hex[getRandom(16)];
        }
        document.body.style.background = hexColor ;
        color.textContent = hexColor;
    }
});

function getRandom(length){
    return Math.floor(Math.random()*length);
}