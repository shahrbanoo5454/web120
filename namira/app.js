// var $price=document.getElementById('price').value;
// var $prepayment=document.getElementById('prepayment').innerHTML;
// var $insrallments=document.getElementById('insrallments').innerHTML;

function aqsat(){
    var $price=document.getElementById('price').value;
    $price=Number($price);
// var $prepayment=document.getElementById('prepayment').innerHTML;
// var $insrallments=document.getElementById('insrallments').innerHTML;

    if($price<=50000000 && $price>=20000000){
        var hesab=$price*20/10;
        document.getElementById('prepayment').value=hesab;
    }
    return;
}


