const openFace=document.querySelector('.open');
const closeFace=document.querySelector('.closed');

closeFace.addEventListener("click",function emoji1(){
    if(openFace.classList.contains('open'))
    {
        openFace.classList.add('active');
        closeFace.classList.remove('active');
    }
});
openFace.addEventListener("click",function emoji2(){
    if(closeFace.classList.contains('closed'))
    {
        closeFace.classList.add('active');
        openFace.classList.remove('active');
    }
});   


 










  