import './style.css'
import { sumar } from './suma.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Demo de Integración Continua y Entrega Continua</h1>

    <p>
      Esta aplicación web simple permite sumar dos números y sirve para demostrar un flujo de CI/CD.
    </p>

    <div class="card">
      <label for="numeroA">Primer número:</label>
      <input id="numeroA" type="number" value="2" />

      <label for="numeroB">Segundo número:</label>
      <input id="numeroB" type="number" value="3" />

      <button id="btnSumar">Sumar</button>

      <p id="resultado">Resultado: 5</p>
    </div>

    <p>
      La función <strong>sumar</strong> está validada por una prueba automatizada con Vitest.
    </p>
  </div>
`

const inputA = document.querySelector('#numeroA')
const inputB = document.querySelector('#numeroB')
const botonSumar = document.querySelector('#btnSumar')
const resultado = document.querySelector('#resultado')

botonSumar.addEventListener('click', () => {
  const numeroA = Number(inputA.value)
  const numeroB = Number(inputB.value)

  const suma = sumar(numeroA, numeroB)

  resultado.textContent = `Resultado: ${suma}`
})