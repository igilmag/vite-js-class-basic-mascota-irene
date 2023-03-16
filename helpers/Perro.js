import { Mascota } from './Mascota'

export class Perro extends Mascota {
  raza
  alimentacion
  peso

  /**
   * 
   * @param {MascotaLike: object} Mascota 
   * @param {PerroLike: object} Perro
   * @param {string} Perro.raza
   * @param {string} Perro.alimentacion
   * @param {number} Perro.peso
   *
   */
  constructor (
    Mascota = {}, 
    { 
      raza = 'desconocida', 
      alimentacion = '', 
      peso = 0 
    }) {
    super(Mascota)
    this.raza = raza
    this.alimentacion = alimentacion
    this.peso = peso
  }
  /**
   * Retorna una lista html con todas las propiedades de la clase
   * @returns {string}
   */
  getData() {
    return `
    <ul>
       <li><strong>Código</strong> ${this.getId()}</li>
       <li><strong>Microchip</strong> ${this.microchip}</li>
    <li><strong>Nombre</strong> ${this.nombre}</li>
    <li><strong>Tipo</strong> ${this.tipo}</li>
    <li><strong>Sexo</strong> ${this.sexo === 'f' ? 'Hembra' : 'Macho'}</li>
    <li><strong>Edad</strong> ${this.edad}</li>
    <li><strong>Raza</strong> ${this.raza}</li>
    </ul><li><strong>Alimentacion</strong> ${this.alimentacion}</li>
   <li><strong>Peso</strong> ${this.peso}</li>
   `
  }
}