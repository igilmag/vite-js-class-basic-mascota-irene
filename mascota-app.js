import { Mascota } from './helpers/Mascota'
import formRaw from './templates/form-mascotas.html?raw'
import { v4 as generarCodigo } from 'uuid'

/**
 * punto de entrada de la aplicación
 * @param {HTMLDivElement} element
*/
export function mascotaApp(rootElement) {
  if (!rootElement) throw new Error('elemento raiz no encontrado')
  rootElement.innerHTML = '<h1>Mascotas</h1>'
  rootElement.innerHTML += formRaw
  manipulacionFormulario(rootElement.querySelector('#myForm'))
}
/**
 * gestionar los eventos el formulario
 * @param {HTMLFormElement} element
*/

function manipulacionFormulario(element) {
  element.addEventListener('submit', (e) => {
    e.preventDefault()
    // validación de datos
    const nombre = element.nombre.value.trim()
    const microchip = element.microchip.value.trim()
    const tipo = element.tipo.value.trim()
    const genero = element.genero.value
    const edad = Number(element.edad.value)

    // instancias la clase y cargas datos
    const p1 = new Mascota({ 
      type: tipo, 
      name: nombre, 
      microchip, 
      id: generarCodigo(),
      age: edad, 
      sexo: genero
     })
    // mostrar datos
    element.querySelector('#content').innerHTML = p1.getData()
  })
  element.querySelector('#rango-edad')
    .addEventListener('input', (e) => {
      const input = e.target
      element.querySelector('#edad').value = input.value
    })
  // const mascota = new Mascota()
  // rootElement.innerHTML += mascota.getData()
}

//en el import se pone ?raw porque sino no aparece.
// += en el segundo root para que aparezcan los dos roots