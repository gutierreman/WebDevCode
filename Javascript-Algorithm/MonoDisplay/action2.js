function retoMedium(){

var number=parseInt(document.getElementById('numero').value);
var value=0;
var divName="";
document.getElementById('container').innerHTML = "";
document.getElementById('containerdoh').innerHTML = "";

if(isNaN(number)){
  console.log("Introduce un número válido");
  limpiar();
  document.getElementById('container').innerHTML="Introduce un número válido";

}
if(number>9){
  console.log("Introduce un número menor a 10.");
  limpiar();
  document.getElementById('containerdoh').innerHTML="Introduce un número menor a 10.";
}

limpiar();
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
