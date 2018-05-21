function retoMedium(){

var tutnumber=parseInt(document.getElementById('numero').value);
var tutnumbersegundo=parseInt(document.getElementById('numerosegundo').value);
var valor= String(tutnumber+tutnumbersegundo);
var separar=valor.split("");
console.log(separar);

var number = separar[0];
var numbersegundo = separar[1];

var divName="";
document.getElementById('container').innerHTML = "";
document.getElementById('containerdoh').innerHTML = "";

//primer input
if(isNaN(tutnumber)){
  console.log("Introduce un número válido");
  limpiar();
  document.getElementById('container').innerHTML="Introduce un número válido";

}
if(tutnumber>9){
  console.log("Introduce un número menor a 10.");
  limpiar();
  document.getElementById('containerdoh').innerHTML="Introduce un número menor a 10.";
}

limpiar();

//segundo input

if(isNaN(tutnumbersegundo)){
  console.log("Introduce un número válido");
  limpiar();
  document.getElementById('containersegundo').innerHTML="Introduce un número válido";

}
if(tutnumbersegundo>9){
  console.log("Introduce un número menor a 10.");
  limpiar();
  document.getElementById('containerdohsegundo').innerHTML="Introduce un número menor a 10.";
}

limpiar();


//Display Uno
//0
if(number==0 || number==4 || number==5 || number==6 || number==8 || number==9 ){
  console.log("Tu número es válido");

document.getElementById("segment-0-0").className="segment1";
}else{
  document.getElementById("segment-0-0").className="segment11";
}
//1
if(number==0 || number ==2|| number==3 || number==5 || number==6 || number==7 || number==8 || number==9 ){
  console.log("Tu número es válido");

document.getElementById("segment-0-1").className="segment2";
}else{
  document.getElementById("segment-0-1").className="segment22";
}

//2
if(number==0 || number==1 || number==2 || number==3 || number==4 || number==7 || number==8 || number==9 ){
  console.log("Tu número es válido");

document.getElementById("segment-0-2").className="segment1";
}else{
  document.getElementById("segment-0-2").className="segment11";
}
//3
if(number==2 || number==3 || number==4 || number==5 || number==6 || number==8 || number==9 ){
  console.log("Tu número es válido");

document.getElementById("segment-0-3").className="segment3";
}else{
  document.getElementById("segment-0-3").className="segment33";
}
//4
if(number==0 || number==2 || number==6 || number==8 ){
  console.log("Tu número es válido");

document.getElementById("segment-0-4").className="segment1";
}else{
  document.getElementById("segment-0-4").className="segment11";
}
//5
if(number==0 || number==2 || number==3 || number==5 || number==6 || number==8 ){
  console.log("Tu número es válido");

document.getElementById("segment-0-5").className="segment2";
}else{
  document.getElementById("segment-0-5").className="segment22";
}
//6
if(number==0 || number==1 || number==3 || number==4 || number==5 || number==6 || number==7 || number==8 || number==9 ){
  console.log("Tu número es válido");

document.getElementById("segment-0-6").className="segment1";
}else{
  document.getElementById("segment-0-6").className="segment11";
}




//Display Dos!!!!!!!!
//0
if(numbersegundo==0 || numbersegundo==4 || numbersegundo==5 || numbersegundo==6 || numbersegundo==8 || numbersegundo==9 ){
  console.log("Tu número es válido");

document.getElementById("begment-0-0").className="segment1";
}else{
  document.getElementById("begment-0-0").className="segment11";
}
//1
if(numbersegundo==0 || numbersegundo ==2|| numbersegundo==3 || numbersegundo==5 || numbersegundo==6 || numbersegundo==7 || numbersegundo==8 || numbersegundo==9 ){
  console.log("Tu número es válido");

document.getElementById("begment-0-1").className="segment2";
}else{
  document.getElementById("begment-0-1").className="segment22";
}

//2
if(numbersegundo==0 || numbersegundo==1 || numbersegundo==2 || numbersegundo==3 || numbersegundo==4 || numbersegundo==7 || numbersegundo==8 || numbersegundo==9 ){
  console.log("Tu número es válido");

document.getElementById("begment-0-2").className="segment1";
}else{
  document.getElementById("begment-0-2").className="segment11";
}
//3
if(numbersegundo==2 || numbersegundo==3 || numbersegundo==4 || numbersegundo==5 || numbersegundo==6 || numbersegundo==8 || numbersegundo==9 ){
  console.log("Tu número es válido");

document.getElementById("begment-0-3").className="segment3";
}else{
  document.getElementById("begment-0-3").className="segment33";
}
//4
if(numbersegundo==0 || numbersegundo==2 || numbersegundo==6 || numbersegundo==8 ){
  console.log("Tu número es válido");

document.getElementById("begment-0-4").className="segment1";
}else{
  document.getElementById("begment-0-4").className="segment11";
}
//5
if(numbersegundo==0 || numbersegundo==2 || numbersegundo==3 || numbersegundo==5 || numbersegundo==6 || numbersegundo==8 ){
  console.log("Tu número es válido");

document.getElementById("begment-0-5").className="segment2";
}else{
  document.getElementById("begment-0-5").className="segment22";
}
//6
if(numbersegundo==0 || numbersegundo==1 || numbersegundo==3 || numbersegundo==4 || numbersegundo==5 || numbersegundo==6 || numbersegundo==7 || numbersegundo==8 || numbersegundo==9 ){
  console.log("Tu número es válido");

document.getElementById("begment-0-6").className="segment1";
}else{
  document.getElementById("begment-0-6").className="segment11";
}

}



function limpiar(){

    var divId="";
    for(var i=0;i<7;i++){
      divId="segment-0-" + i;
      document.getElementById(divId).className="";

    }
  }

  function pintar(number){

    for(var i=0;i<number;i++){
      console.log("*");
      divName="segment-0-" + i;
      console.log(divName);
      document.getElementById(divName).className="segment-on";
    }
  }
