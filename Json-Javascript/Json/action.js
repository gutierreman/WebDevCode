function Contactos (){
  var amigos=[
    {
      "nombre":"José Luis",
      "teléfono":"55 5555 5555",
      "dirección":"Zamora 166, Condesa",
    },
    {
      "nombre":"Martín",
      "teléfono":"33 3333 3333",
      "dirección":"Av.México 666, Guadalajara"
    },
    {
      "nombre":"Kenia",
      "teléfono":"33 3232 3232",
      "dirección":"Av.Chapultepec 666, Guadalajara"
    }
  ];
  /**for(var i=0;i<amigos.length;i++){
    console.log(amigos[i].nombre);

    console.log(amigos[i].telefono);
    console.log(amigos[i].dirección);

  }
  console.log(amigos[i].dirección);**/
var content = "";
var amigo= "";



for (var i=0; i<amigos.length; i++){
  amigo = amigo + "<div class='amigo'>";

        amigo= amigo+ "<div class= 'nombre'>" + amigos[i].nombre + "</div>";

        amigo=amigo + "<div class='telefono'>" + amigos[i].teléfono + "</div>";

        amigo=amigo + "<div class='direccion'>" + amigos[i].dirección + "</div>";





      amigo=amigo+"</div>";
      content= content+amigo;
      amigo="";
    }



document.getElementById('lista').innerHTML=content;


}
