//traer todos los roles todos los roles
fetch('http://localhost:8086/rol/')
      .then(response => response.json())
      .then(json => console.log(json))


//CREAR UN USUARIO
var payload2 = {
    "id": 2,
    "nombre": "Admin"
}
let payload = {
    role: {
        id: 2,
        nombre: "Admin"
    },
    estadoUsuarios: {      
        customerId: 1,
        estado: "OK"
    },
    cedula: "1000304684",
    nombre: "Maria Eugeniaa",
    apellido: "garciaaa garia",
    email: "maria.eugeniaa.garcia@gmail.com",
    telefono: "312490671",
    fechaNac: "2003-05-12T00:00:00.000+00:00",
    edad: null,
    sexo: null,
    password:"password1234",
    direccion: null
}

console.log("desarrollo" , payload);


fetch('http://localhost:8086/user/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
              headers: {"Content-type": "application/json; charset=UTF-8"}
            })
              .then((response) => response.json())
              .then((data) => {
                console.log('Success:', data);
              })
              .catch((error) => {
                console.error('Error:', error );
              });