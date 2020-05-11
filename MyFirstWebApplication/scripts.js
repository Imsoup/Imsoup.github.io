console.log('App is running')
let currentPhoto=0;
let imagesData=[{
    photo: 'Images/Chaos.jpg',
    title: 'Chaos',
    description: 'Chaos spacemarines in Battle with loyalist Ultramarine spacemarines'
},
    
   {
    photo: 'Images/DarkEldar.jpg',
    title: 'Dark Eldar',
    description: 'Fall in trap by the new chaos god Slanesh the Dark Eldar seeking '
},
   
{
    photo: 'Images/Eldar.jpg',
    title: 'Eldar',
    description: 'Chaos spacemarines in Battle with loyalist Ultramarine spacemarines'
},
   

{
    photo: 'Images/ImperialFist.jpg',
    title: 'Spacemarines',
    description: 'Chaos spacemarines in Battle with loyalist Ultramarine spacemarines'
},
 
{
    photo: 'Images/necrons.jpg',
    title: 'Necrons',
    description: 'Chaos spacemarines in Battle with loyalist Ultramarine spacemarines'
},
   

{
    photo: 'Images/Tau.jpg',
    title: 'Tau',
    description: 'Chaos spacemarines in Battle with loyalist Ultramarine spacemarines'
},
    

{
    photo: 'Images/Tyrannids.jpg',
    title: 'Tau',
    description: 'Chaos spacemarines in Battle with loyalist Ultramarine spacemarines'
}];




let loadPhoto=(photoNumber)=>{
    $('#photo').attr('src',imagesData[currentPhoto].photo);
    $('#photo-title').text(imagesData[currentPhoto].title);
    $('#photo-description').text( imagesData[currentPhoto].description); 
       
}
loadPhoto(currentPhoto);
imagesData.forEach((photo,currentPhoto) => {
    $('.pictureBox').append(`<img class="thumbnails" data-number="${currentPhoto}" src="${imagesData[currentPhoto].photo}>`);
    
    });


    $('#left').click(() => {
       if(currentPhoto > 0){
        currentPhoto--;
        
    }else (currentPhoto = 6)
    loadPhoto(currentPhoto);
       
   });
    
   $('#right').click(() => {
    if(currentPhoto < 6){     
    currentPhoto++;
       
   }else (currentPhoto = 0)
   loadPhoto(currentPhoto);  
   
});

loadPhoto(currentPhoto);


/*imagesData.forEach((photo, index) => {
    $('#thumbContainer').append(`<img class="thumb" data-index="${index}" src="${imagesData[index].photo}">`);

});*/












 


