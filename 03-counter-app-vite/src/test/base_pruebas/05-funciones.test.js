import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";


describe('Prueba en 05-funciones', () => {
    test('getUser debe de retornan un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: "Erik"
        };

        const user = getUser();

        expect( testUser ).toEqual(user);

    });

    test('getUsuarioActivo debe de retornar un objeto',( )=>{

        const name = 'Erik';
        const user = getUsuarioActivo( name );

        expect( user ).toStrictEqual({
            uid: 'ABC123',
            username: name
        });

    });

});