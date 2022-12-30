

describe('Pruebas en <DemoComponent/>', () => {

    test('Esta prueba no debe de fallar', () => {
        // if ( 0 != 0){
        //     throw new Error('No debe ser igual a 0');
        // }

        // 1.- Inicializacióin
        const message1 = 'Hola Mundo';


        // 2.- Estimulo
        const message2 = message1.trim();

        // 3.- Observar el comportamiento ... Esperado
        expect(message1).toBe(message2);
    });
});
