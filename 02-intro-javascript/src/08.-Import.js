// Version inicial
// import { heroes } from './data/heroes';
import heroes, {owners}  from './data/heroes.js';

// Ejercicio 1 : Get heroe By Id
export const getHereoById = (id) => heroes.find(h=>h.id == id);
// console.log('Heroe :>> ', getHereoById(2));

// Ejercicio 2 : Get hereos by owner
export const getHeroesByOwner = (owner) => heroes.filter(h=>h.owner == owner);
// console.log(getHeroesByOwner('DC'));

// console.log('owners :>> ', owners);
