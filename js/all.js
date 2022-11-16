/*function login() {
    let usuario = document.getElementById('usuario').value;
    let contrasena = document.getElementById('contrasena').value;

    let parametros = { user: usuario, login: contrasena };

    postLogin('aca url endpoint login', parametros);
}*/

function crearUsuario() {
    let cedula = document.getElementById('CedulaInput').value;
    let rol = document.getElementById('rolinput').value;
    let fechaNac = document.getElementById('start').value;
    let password = document.getElementById('password').value;
    let nombre = document.getElementById('NombreUsuario').value;
    let apellidos = document.getElementById('ApellidosUsuario').value;
    let sexo = document.getElementById('Sexo').value;
    let email = document.getElementById('Email').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let validar = true;
    let parametros = {
        role: { id: 3, nombre: rol }, estadoUsuarios: { customerId: 1, estado: 'Activo' }, cedula: cedula, nombre: nombre, apellido: apellidos,
        email: email, telefono: telefono, fechaNac: fechaNac, edad: calcularEdad(fechaNac), sexo: sexo, password: password, direccion: direccion
    }
    if (String(cedula).length < 9 || String(cedula) == '') {
        alert('El numero debe ser mayor a 9 caracteres y no debe estar vacio')
        validar = false;
    }
    if (String(telefono).length < 7 || String(telefono) == '') {
        alert('El numero telefono debe ser mayor a 7 caracteres y no debe estar vacio')
        validar = false;
    }
    if (!validarEmail(email)) {
        alert('Verifique el correo')
        validar = false;
    }
    if (String(password).length < 8 || String(telefono) == '' || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/i.test(password)) {
        alert('Revise la contraseña, debe tener al menos una letra mayuscula una letra minuscula al menos un numero al menos un caracter especial sin espacios ')
        validar = false;
    }
    if (validar) {
        postCrear('http://localhost:8080/user/', parametros);
    }

}

function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}

function validarEmail(valor) {
    if (!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valor)) {
        return false;
    } else {
        return true;
    }
}


async function postCrear(path, parametros) {
    await axios.post(path, parametros, {
    }).then(function (response) {
        alert('Usuario creado correctamente');
        window.location = "profesor.html"
    }).catch(function (error) {
        console.log(error);
        alert('Error al crear usuario: ' + error);
    });
}
/*
async function postLogin(path, parametros) {
    await axios.post(path, {
        parametros
    }).then(function (response) {
        alert(response.data['user'] + ' token:' + response.data['token']);
    }).catch(function (error) {
        console.log(error);
        alert('Error de autenticación: ' + error);
    });
}*/
function obtenerUsuario(){
    /* Ejemplo metodo post*/
}
async function get() { /**
 * METODO PARA TRAER INFORMACION 
 */
    let datos = '';
    await axios.get('http://localhost:8080/estado-user-controller/', '{"estado":"Activo"}',{
    }).then(function (response) {
        datos = response.data;
        window.location = "profesor.html"
        alert(datos[1]['customerId'])

    }).catch(function (error) {
        console.log(error);
    });
}       

async function post() { /**
 * METODO PARA TRAER INFORMACION DE USUARIO Y LOGUIN            
 */
    let datosUsu = '';
    let emailInput = document.getElementById('InputEmail').value;
    let passwordInput = document.getElementById('InputPassword').value;
    await axios.post('http://localhost:8080/user/login',{email:emailInput,password:passwordInput},{
    }).then(function (response) {
        datosUsu = response.data;
        /*alert(datosUsu[0]['user'])*/
        window.location = "profesor.html"   
    }).catch(function (error) { 
        console.log(error);
    });


}

