

function aqsat(){

    var $pricee=document.getElementById('pricee').value;
   
    
   var hesab=0;
    hesab+=(20*$pricee)/100;

    if($pricee<=50000000 && $pricee>=20000000){
       
       
    
       document.getElementById('prepayment').value=hesab;
    console.log(hesab);
            }
    else{
        alert("hh");
    }
    
   

}


