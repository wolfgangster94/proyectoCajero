// let saldoActual = getElementById("saldo");
let infoUsuario = [
  {
    usuario: "daniel",
    contraseña: "daniel",
    saldo: 200,
  },
  {
    usuario: "arlet",
    contraseña: "arlet",
    saldo: 290,
  },
  {
    usuario: "jenifer",
    contraseña: "jenifer",
    saldo: 67,
  },
  {
    usuario: "brian",
    contraseña: "brian",
    saldo: 880,
  },
];

// Iniciar sesión
// checar si el usuario existe
// let boton = document.getElementById("login");
// boton.addEventListener("click", (event) => {
//   let nomUsuario = prompt("Introduzca su nombre de usuario");
//   validar();
// }); //no pude hacerlo funcionar de esta manera :(


function validar() {
  let usuario = document.getElementById("usuario").value;
  let contraseña = document.getElementById("contraseña").value; //sadk
  for (login = 0; login < infoUsuario.length; login++) {
    if (
      usuario == infoUsuario[login].usuario &&
      contraseña == infoUsuario[login].contraseña
    ) {
      alert("Bienvenido, " + usuario);
      console.log("Su saldo es " + infoUsuario[login].saldo)
      return;
    }
  }
  alert("Incorrecto");
}

// intentando hacer el programa que aplicara un innerHTML a un h3 en el index, no fui capaz de lograrlo a tiempo. Ya había logrado una estructura que funcionaba en otros casos, pero no en este.