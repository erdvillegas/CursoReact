

const saludar = function (nombre) {
    return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

// saludar = 20;

// console.log(saludar('Erik'));
console.log(saludar('Erik'));
console.log(saludar2('Daniel'));
console.log(saludar3('Villegas'));
console.log(saludar4());


const getUser = () =>
({
    uid: 'ABC123',
    username: 'UserTest1'
});

const user = getUser();
console.log('getUser :>> ', user);

//Tarea

//1.- Transformar a function de fecha
//2.- Retornar un objeto implicito
//3.- Pruebas

const getUserActivo = (nombre) =>
({
    uid: 'ABC123',
    username: nombre
});


const usuarioActivo = getUserActivo('Erik');
console.log('usuarioActivo :>> ', usuarioActivo);
