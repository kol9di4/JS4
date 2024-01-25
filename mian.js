window.onload = function(){
    var divs = document.querySelectorAll('div');
    for (var i =0; i<divs.length;i++){
        divs[i].onclick = function(){
            fade(this,1000,
                function(){
                    this.style.display = "none";
                }
                );
        }
    }
}

function fade (elem, t, f){
    var fps = 50;
    var time = t || 500; 
    var step = time/fps;
    var opacity = 1;
    var n = opacity/step;
    var funct = f || function(){}
    var timer = setInterval(
        function(){
            opacity -= n;
            elem.style.opacity = opacity;
            step--;
            if(step === 0)
            {
                clearInterval(timer);
                funct.call(elem);
            }
        }
        ,(1000/fps));
}