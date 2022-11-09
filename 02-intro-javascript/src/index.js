// Version inicial
import { heroes } from './data/heroes';

// Ejercicio 1 : Get heroe By Id
const getHereoById = (id) => heroes.find(h=>h.id == id);
console.log('Heroe :>> ', getHereoById(2));

// Ejercicio 2 : Get hereos by owner
const getHeroesByOwner = (owner) => heroes.filter(h=>h.owner == owner);
console.log(getHeroesByOwner('DC'));