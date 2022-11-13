function login() {
    let usuario = document.getElementById('usuario').value;
    let contrasena = document.getElementById('contrasena').value;

    let parametros = { user: usuario, login: contrasena };

    postLogin('aca url endpoint login', parametros);
}

function crearUsuario() {
    let rol = document.getElementById('rolInput').value;
    let idUsuario = document.getElementById('IdInput').value;
    let estadoUsuario = document.getElementById('EstadoIdInput').value;
    let facultadUsuario = document.getElementById('FacultadInput').value;
    let nombre = document.getElementById('NombreUsuario').value;
    let apellidos = document.getElementById('ApellidosUsuario').value;
    let sexo = document.getElementById('Sexo').value;
    let email = document.getElementById('Email').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('dirección').value;

    let parametros ={EndPoint: rol, EndPoint: idUsuario, EndPoint: estadoUsuario, EndPoint: facultadUsuario, EndPoint: nombre, EndPoint: apellidos, EndPoint: sexo, EndPoint: email, EndPoint: telefono, EndPoint: direccion }

    postCrear('aca url endpoint crear usuario', parametros);
}


async function postCrear(path, parametros) {
    await axios.post(path, {
        parametros
    }).then(function (response) {
        alert('Usuario creado correctamente');
    }).catch(function (error) {
        console.log(error);
        alert('Error al crear usuario: ' + error);
    });
}

async function postLogin(path, parametros) {
    await axios.post(path, {
        parametros
    }).then(function (response) {
        alert(response.data['user'] + ' token:' + response.data['token']);
    }).catch(function (error) {
        console.log(error);
        alert('Error de autenticación: ' + error);
    });
}
