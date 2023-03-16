

export class Mascota {
  #id = 1
  tipo = 'Sin definir'
  nombre = 'Sin nombre'
  microchip = ''
  sexo = 'f'
  edad = 0

  /**
   * método constructor donde cargo mascota
   * @param {Like<Mascota>} Mascota
   * @param {string} Mascota.type
   * @param {string} Mascota.nombre
   * @param {string} Mascota.microchip
   * @param {number} Mascota.edad
   * @param {string} Mascota.id
   */

  constructor ({
    nombre = 'Desconocido',
    type = 'Cánido',
    microchip = '',
    age = 0,
    sexo = 'f',
    id = ''
  }) {
    this.#id = id
    this.tipo = type
    this.nombre = nombre
    this.age = age
    this.sexo = sexo
    this.microchip = microchip
  }
  // metodos setName y setAge. La parte del else throw no es obligatoria. Este es alternativo al siguiente set nombre
  //setNombre (nombre) {
  //if (typeof nombre === 'string' && nombre.length) this.nombre = nombre
  //else throw new Error(`formato no válido ${nombre}`)
  //}


  /**
   * Función que permite meter el nombre de una mascota
   * @param {string} nombre Nombre de la mascota
   */
  setNombre (nombre) {
    if (typeof nombre === 'string' && nombre.length) this.nombre = nombre
    else throw new Error(`Formato no válido ${nombre}`)
  }

  /**
   * @param {number} edad
   */
  set age (edad) {
    if (Number.isInteger(Number(edad))) this.edad = edad
  }

getId () {
  return this.#id
}

  //dame información, importante poner las comillas laterales ``//
  /**
   * Retorna una lista html con todas las propiedades de la clase
   * @returns {string}
   */
  getData () {
    return `
    <ul>
       <li><strong>Código</strong> ${this.#id}</li>
       <li><strong>Microchip</strong> ${this.microchip}</li>
    <li><strong>Nombre</strong> ${this.nombre}</li>
    <li><strong>Tipo</strong> ${this.tipo}</li>
    <li><strong>Sexo</strong> ${this.sexo === 'f' ? 'Hembra' : 'Macho'}</li>
    <li><strong>Edad</strong> ${this.edad}</li>
    </ul>
   `
  }
}
