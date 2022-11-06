

const persona = {
    nombre: 'Erik',
    apellido: 'Villegas',
    edad: 31,
    direccion: {
        ciudad: 'Nueva York',
        zip: 110022,
        lat: 14.32323,
        lng: 34.92333
    }
};

console.table({persona});

const persona2 = {...persona};
console.log({persona2});