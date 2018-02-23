console.log('Loaded!');
//changing the text in html
var element =document.getElementById('text');
element.innerHTML='new text inserted by javascipt';
//moving the image 
var img=document.getElementById('image');
var marginleft=0;
function moveright(){
    marginleft=marginleft+10;
    img.style.marginleft=marginleft+'px';
}
//img.onclick=function(){
  //img.style.marginLeft='100px';  
//var interval=setInterval(moveRight,100);
    
//};