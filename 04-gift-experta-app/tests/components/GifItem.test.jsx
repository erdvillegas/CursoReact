import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem>', () => {
  
    const title = "Link";
    const url = 'https://www.16personalities.com/static/images/personality-types/avatars/infj-advocate.png';

    test('debe hacer match con el snapshopt', () => {
        const { container } =  render(<GifItem title={title} url={url} />);
        expect( container ).toMatchSnapshot();
    });
    
    test('debe de mostrar la imagen con el URL y el ALT indicado ', () => {
        
        const { container } =  render(<GifItem title={title} url={url} />);
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });

    test('debe de mostrar el titulo en el componente', () => {
      
        const { container } =  render(<GifItem title={title} url={url} />);
        expect( screen.getByText( title )).toBeTruthy();
    });
    
});
