
  var $pricee=document.getElementById('pricee').value;
  var $month=document.getElementById('month').value;
  var $insrallments=document.getElementById('insrallments').value;
  var qest=0;
   var hesab=0;
    hesab+=(20*$pricee)/100;
   var mande=Math.floor($pricee-hesab);
 

  


function aqsat(){
    event.preventDefault();
  
 
    if($pricee<=50000000 && $pricee>=20000000){
       
       document.getElementById('prepayment').value=hesab;
    console.log(hesab);
            }
    else{
        alert("hh");
    }
    
    switch ($month){
        case 'shesh':
            qest=(((mande*10.8)/100)+mande)/6;
            qest=Math.floor(Number(qest));
           
            break;

         case 'davazdah':
            qest=(((mande*15)/100)+mande)/12;
            qest=Math.floor(Number(qest));
             break;

             default:
                qest=(((mande*18.5)/100)+mande)/18;
                qest=Math.floor(Number(qest));
             break;
    }
     
  $insrallments=document.getElementById('insrallments').value=qest;
   

  return 1;
}



