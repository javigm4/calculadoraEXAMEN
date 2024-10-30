import './style.css'
const botones = document.getElementById("buttons");
  const pantalla = document.getElementById("screen");
  let expresion = ""; // Variable para almacenar la expresión actual

  botones.addEventListener("click", function (e) {
    const key = e.target.getAttribute("data-key");

    if (key === "clear") {
      limpiar();
    } else if (key === "equal") {
      calcular();
    } else {
      if (key === "+" || key === "-" || key === "*" || key === "/") {
        expresion += key;
        mostrar(key);
      }
      else{
        expresion += key;
        mostrar(key);
      }
    }
  });


  function calcular() {
    try {
      const resultado = eval(expresion); // Evalúa la expresión
      pantalla.style.color = "#c0c0c0";
      pantalla.style.fontSize = "3rem";

      pantalla.innerHTML = resultado; // Muestra el resultado
      expresion = ""; // Reinicia la expresión después de calcular

    } catch (error) {
      pantalla.innerHTML = error.message;
      pantalla.style.fontSize = "1rem";
      pantalla.style.color = "red";
    }
  }

  function limpiar() {
    pantalla.innerHTML = ""; // Limpia la pantalla
    pantalla.style.fontSize = "3rem"; // Tamaño de letra por defecto
    expresion = ""; // Reinicia la expresión
  }

  function mostrar(caracter) {
    pantalla.innerHTML += caracter; // Muestra el carácter en la pantalla
    pantalla.style.fontSize = "3rem"; // Tamaño de letra por defecto
  }