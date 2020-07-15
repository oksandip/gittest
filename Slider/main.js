const prevbtn = document.querySelector('.prev');
const nextbtn = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');
const images = document.querySelectorAll('img');

//placing images in a row dynamically
 slides.forEach(function(element,index){  
        element.style.left = `${index *100}%`;
    }
    ); 

 let counter = 0;
 prevbtn.style.display = 'none';

nextbtn.addEventListener("click", function(){
    counter++;
    slideit();
    console.log(slides.length)
})

prevbtn.addEventListener("click", function(){
    counter--;
    slideit();
})

 function slideit(){
    if(counter === slides.length - 1){
        nextbtn.style.display = 'none';
    }
    else{
        nextbtn.style.display = 'inline-block';
    }

    if(counter === 0 ){
        prevbtn.style.display = 'none';
    }
    else{
        prevbtn.style.display = 'inline-block';
    }
           
        slides.forEach(function(element){
            element.style.transform = `translateX(-${counter * 100}%)`
         })

     
 }


