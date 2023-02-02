/** * @jest-environment jsdom */
import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from "../CounterApp";

describe('Pruebas <CounterApp/>', () => {
    const initialValue = 10;

    test('Debe hacer match con el Snapshot', () => {

        const { container } = render(<CounterApp value={initialValue} />);
    });

    test('Debe de mostrar el valor inicial de 100 <CounterApp value={100}/>', () => {
        render(<CounterApp value={ initialValue } />);
        expect( screen.getByText(initialValue) ).toBeTruthy();
        // expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toCogitntain(initialValue);
    });

    test('debe de incrementar con el botón +1', () => {
      
        render(<CounterApp value={initialValue}/>);
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('11')).toBeTruthy();
    });
   
    test('debe de decrementar con el botón -1', () => {
      
        render(<CounterApp value={initialValue}/>);
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText('9')).toBeTruthy();
    });

    test('debe de funcionar el botón de resetear', () => {
      
        render(<CounterApp value={initialValue}/>);
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('Reset') );
        // expect( screen.getByText(initialValue)).toBeTruthy();
        
        //TODO: Revsisar los permisos
        fireEvent.click(screen.getByRole('button',{ name: 'btn-reset'}));

        expect((screen.getByRole('button',{name: 'btn-reset'})));
        expect(screen.getByText(355)).toBeTruthy();
    });
    

});
