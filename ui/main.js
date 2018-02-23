console.log('Loaded!');
//changing the text in html
var element =document.getElementById('text');
element.innerHTML='new text inserted by javascipt';
//moving the image 
var img=document.getElementById('image');
img.onclick=function(){
  img.style.marginLeft='100px';  
};