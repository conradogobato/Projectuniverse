let menu = document.getElementById("menu"), pag = document.getElementById("naveg");
let currentimageindex = 0, imagens = document.querySelectorAll("#slider img"), max = imagens.length, time = 2000;
let vervideo = document.getElementById('video');
let slider = document.getElementById('slider');
let imagem = document.getElementById('imagem');
let imagem2 = document.getElementById('imagem2');
let imagem3 = document.getElementById('imagem3');
let video = document.getElementById('videodentro');



menu.addEventListener("click", function menuopen(){
    let main = document.getElementById('main')
    let head = document.getElementById('head')
     if(pag.classList.contains('show')){
        pag.classList.remove('show');
        setTimeout(() => {
            main.style.transition = ".7s"
            main.style.opacity = "1"
            head.style.backgroundColor = "transparent"
          }, "400")

     }
     else{
      main.style.transition = "0s"
      main.style.opacity = "0"
      head.style.backgroundColor = "black"
      pag.classList.add('show');
      
     }
})
window.addEventListener("load", function slider(){
          imagens[currentimageindex].classList.add('atual')  
          let intervalo = setInterval(() =>{
            imagens[currentimageindex].classList.remove('atual')
            currentimageindex++
            if(currentimageindex >= max){
              currentimageindex = 0
            }
            imagens[currentimageindex].classList.add('atual')
            
          }, time)
})

vervideo.addEventListener("click", function(){
   if(vervideo.classList.contains('off')){
      video.style.opacity = "1"
      imagem.style.height = "0"
      imagem2.style.height = "0"
      imagem3.style.height = "0"
      vervideo.classList.remove('off')
      vervideo.innerText = "See images!"
    }
    else{
      video.style.opacity = "0"
      imagem.style.height = "100%"
      imagem2.style.height = "100%"
      imagem3.style.height = "100%"
      vervideo.classList.add('off')
      vervideo.innerText = "See video!"
    }
})
