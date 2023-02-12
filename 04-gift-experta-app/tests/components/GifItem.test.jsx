import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem>', () => {
  
    const title = "Link";
    const url = 'https://google.com/link';

    test('debe hacer match con el snapshopt', () => {
        const { container } =  render(<GifItem title={title} url={url} />);
        expect( container ).toMatchSnapshot();
    });
    

});
