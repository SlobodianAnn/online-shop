var gallaryPhotos =[
    'img/bg1.jpg',
    'img/bg2.jpg',
    'img/bg3.jpg'
]
var buttons = document.querySelectorAll('.caruosel-button');
var fullPhoto = document.querySelector('.carusel-image');



var changeImageClickHandler = function (button, image){
    
    button.addEventListener('click', function(){
        fullPhoto.src = image; 
    });
};

for(var i = 0; i < gallaryPhotos.length; i++){
    changeImageClickHandler(buttons[i], gallaryPhotos[i]);
}

