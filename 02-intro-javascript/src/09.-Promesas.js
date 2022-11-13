import heroes, { owners } from './data/heroes.js';
import { getHereoById } from './08.-Import.js';

// const promesa = new Promise((resolve,reject) =>{
//     setTimeout(() => {

//         const p1 = getHereoById(2);
//         resolve(p1);

//         reject('No se pudo consultar');
//     }, 2000);
// });

// promesa.then((heroe)=>{
//     console.log('heroe :>> ', {heroe});
// })
// .catch(err => console.warn);

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const p1 = getHereoById(id);
            if (p1)
                resolve(p1);

            else
                reject('No se pudo consultar');
        }, 2000);
    });
};

getHeroeByIdAsync(3)
    .then(console.log)
    .catch(console.warn);