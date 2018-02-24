console.log('Loaded!');
var coounter=0;
//changing the text in html
/*var element =document.getElementById('text');
element.innerHTML='new text inserted by javascipt';
//moving the image 
var img=document.getElementById('image');
var marginLeft=0;
function moveright(){
    marginLeft=marginLeft + 5;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
  //img.style.marginLeft='100px';  
var interval=setInterval(moveright, 50);
    
};*/
var button=getElementById('counter');
button.onclick=function(){
    counter=counter+1;
    span.innerHTML=counter.toString();
};