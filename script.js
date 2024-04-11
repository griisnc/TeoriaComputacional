//--------------------------CONJETURA DE COLLATZ------------------------------------
function collatz() {
  // Obtenemos el valor del input de número y el contenedor donde se mostrará el resultado
  const numberInput = document.getElementById("numberInput1").value;
  const resultDiv = document.getElementById("result");
  
  // Verificamos si se ingresó un número
  if (numberInput !== "") {
      // Convertimos el valor a un número entero
      let num = parseInt(numberInput);
      let sequence = [num]; // Creamos un arreglo para almacenar la secuencia

      // Aplicamos la conjetura de Collatz
      while (num !== 1) {
          if (num % 2 === 0) {
              num /= 2;
          } else {
              num = 3 * num + 1;
          }
          sequence.push(num); // Agregamos el número a la secuencia
      }

      // Convertimos la secuencia en una cadena para mostrarla en el resultado
      const sequenceString = sequence.join(" → ");
      // Mostramos la secuencia y la longitud de la secuencia en el contenedor de resultados
      resultDiv.innerHTML = `
          <p>Secuencia: ${sequenceString}</p>
          <p>Longitud de la secuencia: ${sequence.length}</p>
      `;
  } else {
      // Si no se ingresó un número válido, mostramos un mensaje de error
      resultDiv.innerHTML = "<p>Por favor, ingrese un número válido.</p>";
  }
}

//-----------------------CONSTANTE DE KAPREKAR-------------------------------------
async function kaprekar() {
  // Obtenemos el valor del input de número y definimos el número de iteraciones
  const numberInput = parseInt(document.getElementById('numberInput2').value);
  const iterations = 10; // Número de iteraciones

  let result = numberInput; // Inicializamos el resultado con el número ingresado

  const resultContainer = document.getElementById('result2');
  resultContainer.innerHTML = ''; // Limpiamos los resultados anteriores

  if (isNaN(numberInput)) {
      // Mostramos un mensaje si el valor ingresado no es un número
      const finalResult = document.createElement('p');
      finalResult.textContent = 'Por favor ingresa un número válido.';
      resultContainer.appendChild(finalResult);
  } else if (numberInput > 1000 && numberInput<10000) {
      // Realizamos las iteraciones
      for (let i = 0; i < iterations; i++) {
          if(result!=6174){
              // Realizamos los cálculos de la constante de Kaprekar
              const ascending = parseInt([...result.toString()].sort().join(''));
              const descending = parseInt([...result.toString()].sort((a, b) => b - a).join(''));
              result = descending - ascending;
        
              // Creamos y mostramos un elemento para cada iteración
              const iterationResult = document.createElement('p');
              iterationResult.textContent = `Iteración ${i + 1}: ${result}`;
              resultContainer.appendChild(iterationResult);
          } else {
              break; // Terminamos el bucle si se llega al número 6174
          }
        
          await sleep(500); // Agregamos un retraso entre iteraciones
      }
      // Mostramos el resultado final
      const finalResult = document.createElement('p');
      finalResult.textContent = `Resultado final: ${result}`;
      resultContainer.appendChild(finalResult);
  } else {
      // Mostramos un mensaje si el número ingresado no es de 4 dígitos
      const finalResult = document.createElement('p');
      finalResult.textContent = 'El número ingresado no es de 4 dígitos';
      resultContainer.appendChild(finalResult);
  }
}

// Función de retraso
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//-----------------------MULTIPLICACIÓN EGIPCIA---------------------------------
function multegipcia() {
  // Obtenemos los valores de los inputs de números
  const number1 = parseInt(document.getElementById('number1').value);
  const number2 = parseInt(document.getElementById('number2').value);

  let result = 0; // Inicializamos el resultado en 0
  let a = number1;
  let b = number2;
  let iterationHTML = ''; // Para almacenar información de las iteraciones en formato HTML
  let iterationTableHTML = ''; // Para crear una tabla de iteraciones
  
  if (isNaN(number1) && isNaN(number2)) {
      // Mostramos un mensaje si los valores ingresados no son números
      alert("Por favor ingresa números válidos.");
  } else {
      while (a > 0) {
          // Verificamos si debemos sumar o no
          let isSumming = a % 2 !== 0;
          iterationHTML += `<div class="iteration">${isSumming ? 'Sumando' : 'No sumando'}: a = ${a}, b = ${b}</div>`;
          iterationTableHTML += `
              <tr>
                  <td>${isSumming ? 'Si' : 'No'}</td>
                  <td>${a}</td>
                  <td>${b}</td>
                  <td>${isSumming ? 'Suma' : ''}</td>
                  <td>${isSumming ? describeSum(a, b) : ''}</td>
              </tr>
          `;
      
          if (isSumming) {
              result += b;
          }
          a = Math.floor(a / 2);
          b *= 2;
      }
    
      // Mostramos el resultado final y la tabla de iteraciones
      document.getElementById('result3').textContent = result;
      document.getElementById('iterationTableBody').innerHTML = iterationTableHTML;
  }
}

// Función para describir una suma
function describeSum(a, b) {
  let steps = [];
  let result = 0;
  let description = `${b} x ${a} = `;

  while (a > 0) {
      if (a % 2 !== 0) {
          steps.push(`${b} x ${a}`);
          result += b;
      }
      a = Math.floor(a / 2);
      b *= 2;
  }

  description += steps.join(' + ');
  description += ` = ${steps.join(' + ')} = ${result}`;

  return description;
}

//-----------------------MULTIPLICACION RUSA---------------------------------------
function multrusa() {
  let number1 = parseInt(document.getElementById('number1a').value);
  let number2 = parseInt(document.getElementById('number2b').value);
  let result = 0;
  let tableContent = '';

  if (isNaN(number1) && isNaN(number2)) {
      // Mostramos un mensaje si los valores ingresados no son números
      alert("Por favor ingresa números válidos.");
  } else {
      while (number1 > 0) {
          // Creamos el contenido de la tabla para cada iteración
          tableContent += `
              <tr>
                  <td>${tableContent.split('<tr>').length}</td>
                  <td>${number1}</td>
                  <td>${number2}</td>
                  <td>${number1 % 2 !== 0 ? '+' : '-'} ${number2}</td>
              </tr>
          `;

          if (number1 % 2 !== 0) {
              result += number2;
          }
          number1 = Math.floor(number1 / 2);
          number2 *= 2;
      }

      // Agregamos la fila de resultado final a la tabla
      tableContent += `
          <tr>
              <td colspan="3" class="text-right"><strong>Resultado:</strong></td>
              <td>${result}</td>
          </tr>
      `;

      // Mostramos la tabla con las iteraciones y el resultado
      document.getElementById('tableBody').innerHTML = tableContent;
  }
}
