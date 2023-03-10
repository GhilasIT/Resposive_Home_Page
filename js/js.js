let stars =document.getElementById('stars');
let moon =document.getElementById('moon');
let mo3 =document.getElementById('mo3');
let mo4 =document.getElementById('mo4');
let rever =document.getElementById('rever');
let boat =document.getElementById('boat');
let mo7 =document.getElementById('mo7');
let u =document.getElementById('u');

window.onscroll = function(){
    let value = scrollY ;

    stars.style.left = value*2+'px' ;
    moon.style.top = value*2 +'px' ;

    // u.style.fontSize = value*1.5+'px' ;
    mo3.style.top = value /1.5+'px' ;
    mo4.style.top = value/4+'px' ;
    rever.style.top = value/4+'px' ;
    boat.style.top = value / 4+'px' ;
    boat.style.left = value*2+'px' ;
    // if(value == )
    if(value >= 50){

        u.style.fontSize = 30+'px'; 
        u.style.position = 'fixed' ; 

        if(value >= 550){
            u.style.display = 'none'; 
        }
            if(value >= 400){
               
                u.style.boxShadow = '10px 0px '+ value/5+'px orange'; 
                u.style.borderRadius = '50%'; 
                u.style.padding = '10px'; 

 

            }


    };




   

}