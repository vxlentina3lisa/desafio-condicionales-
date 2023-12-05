function pedido(){
    stk1= parseInt(document.getElementById("stk1").value);
    stk2= parseInt(document.getElementById("stk2").value);
    stk3= parseInt(document.getElementById("stk3").value);

    totalstickers= stk1 + stk2 + stk3;

    if (totalstickers<=10 ) {
        alert ("Usted lleva "+ totalstickers + " stickers"); 
    } else
        alert ("Recuerde que solo puede llevar 10 Stickers en total");
 }

function clave(){
    num1=parseInt(document.getElementById("1").value);
    num2=parseInt(document.getElementById("2").value);
    num3=parseInt(document.getElementById("3").value);

    if (num1==9 && num2==1 && num3==1){
        alert("Clave correcta");
    }else 
        if (num1==7 && num2==1 && num3==4){
            alert("Clave correcta");
        }else 
            alert("clave incorrecta, vuelva a intentarlo");

}