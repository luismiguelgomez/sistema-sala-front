function validar() {
  var todo_en_orden = true;

  if ((document.getElementById("contrasena").value.lenght = 0)) {
    todo_en_orden = false;
  }
}
if (!todo_en_orden) {
  alert("Algunos campos no están correctos, vuelva a intentarlo");
}

return todo_correcto;
