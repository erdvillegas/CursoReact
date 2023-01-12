/** * @jest-environment jsdom */
import { render, screen } from '@testing-library/react';
import { CounterApp } from "../CounterApp";

describe('Pruebas <CounterApp/>', () => {
    const initialValue = 100;

    test('Debe hacer match con el Snapshot', () => {

        const { container } = render(<CounterApp value={initialValue} />);
    });

    test('Debe de mostrar el valor inicial de 100 <CounterApp value={100}/>', () => {
        render(<CounterApp value={ initialValue } />);
        expect( screen.getByText(initialValue) ).toBeTruthy();
        // expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toCogitntain(initialValue);
    });


});
