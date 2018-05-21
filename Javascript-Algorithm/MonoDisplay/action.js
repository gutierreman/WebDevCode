function retoMedium(){

  var number = parseInt(document.getElementById('numero').value);
  var value=0;
  var divName="";

  if(isNaN(number)){
    console.log("Introduce un número válido");
    limpiar();
  } else{

    //0
    if(number==0 || number==4 || number==5 || number==6 || number==8 || number==9 ){
      console.log("Tu número es válido");

    document.getElementById("segment-0-0").className="segment1";
  }else{
    //1
    if(number==0 || number==5 || number==6 || number==7 || number==8 || number==9 ){
      console.log("Tu número es válido");

    document.getElementById("segment-0-1").className="segment1";
  }else{
    //2
    if(number==0 || number==1 || number==2 || number==3 || number==4 || number==7 || number==8 || number==9 ){
      console.log("Tu número es válido");

    document.getElementById("segment-0-2").className="segment1";
  }else{
  //3
  if(number==2 || number==3 || number==4 || number==5 || number==6 || number==8 || number==9 ){
    console.log("Tu número es válido");

  document.getElementById("segment-0-3").className="segment1";
}else{
//4
if(number==0 || number==2 || number==6 || number==8 ){
  console.log("Tu número es válido");

document.getElementById("segment-0-4").className="segment1";
}else{
//5
if(number==0 || number==2 || number==3 || number==5 || number==6 || number==8 ){
  console.log("Tu número es válido");

document.getElementById("segment-0-5").className="segment1";
}else{
//6
if(number==0 || number==1 || number==3 || number==4 || number==5 || number==6 || number==7 || number==8 || number==9 ){
  console.log("Tu número es válido");

document.getElementById("segment-0-6").className="segment1";
}else{
  if(number>9){
    console.log("Introduce un número menor a 10.");
    limpiar();
  }
}
}
}
}
  }

  }
  }


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
