/* iniciar el juego inventando un numero */
const iniciar = () => {
  const numMagico = Math.round(Math.random() * 4 + 1);
  console.log(`aqui funcion iniciar`);
  console.log(numMagico);
  return numMagico;
};

/* buscar input */

const numeroElegido = (e) => {
  e.preventDefault();
  console.log(e);
  console.log("desde la funcion numeroElegido");

  const input = document.querySelectorAll(".form-control");
  console.log(input[0].value);

  if (input[0].value == num1) {
    alert(`MUY BIEN!! adivinaste el numero`);
  } else if (input[0].value > num1)
    alert(`El numero que elegiste es mayor que el numero Magico `);
  else {
    alert(`El numero que elegiste es menor que el numero Magico`);
  }
  formulario.reset();
};

const formulario = document.querySelector(".w-25");
console.log(formulario);

formulario.addEventListener("submit", numeroElegido);
const num1 = iniciar();
console.log(num1);
