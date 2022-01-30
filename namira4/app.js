
  var $pricee=document.getElementById('pricee').value;

 var sixqest=0;
 var davazdahqest=0;
 var hejdahqest=0;

function aqsat(){
   var $month=document.getElementById('month').value;
    var $pricee=document.getElementById('pricee').value;
   
    
    var hesab=0;
     hesab+=(20*$pricee)/100;
     var mande=Math.floor($pricee-hesab);
 
     if($pricee<=50000000 && $pricee>=20000000){
        
        document.getElementById('prepayment').value=hesab;
        
     console.log(hesab);
     switch ($month){
        
      case 'shesh':
         sixqest=(((mande*10.8)/100)+mande)/6;
          sixqest=Math.floor(Number(sixqest));
          $insrallments=document.getElementById('insrallments').value=sixqest;
          break;

       case 'davazdah':
          davazdahqest=(((mande*15)/100)+mande)/12;
          davazdahqest=Math.floor(Number(davazdahqest));
          $insrallments=document.getElementById('insrallments').value=davazdahqest;
           break;

           default:
            
              hejdahqest=(((mande*18.5)/100)+mande)/18;
              hejdahqest=Math.floor(Number(hejdahqest));
              $insrallments=document.getElementById('insrallments').value=hejdahqest;
           break;
  }


             }
     else{
         alert("hh");
     }
    
    
     
 

   

  return 1;
}



