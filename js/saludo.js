"use strict"

var nombre="maryury";


console.log("Bienvenido (a) sra " + nombre);







let producto=30000;
let total=0;
let impuesto=.10;
let domi=2000;
let valortotal=0;

total=((producto * impuesto) + producto );
 valortotal=(total+domi);


console.log( "valor total = "+ valortotal);





///   descuento//

///<-------->
let tot =40000;
let desc1=.05;
let desc2=.10; 
let valortot=0;


  
if(tot <= 30000 ){
console.log("su compra es de "+tot +" y no tiene descuento");}

if(tot>30000 && tot < 100000){
          valortot=((tot * desc1) -tot);
         console.log("su compra es de  "+ tot +" y tiene un descuento de 5% y su total de descuento es de"+valortot);}

 if ( tot >= 100000){
       valortot=((tot * desc2) - tot);
        console.log("su compra es de "+tot+" y tiene un descuento de 10% y su total de descuento es de "+valortot);}
 






