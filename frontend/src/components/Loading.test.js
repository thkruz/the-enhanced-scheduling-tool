import { screen, render } from '@testing-library/react';
import Loading from './Loading';

describe('unit tests for the Loading component', () => {

  const setup = () => {
    render(<Loading />);
  }

  test('it should display a header with the words Loading onto the page', () => {
    setup();
    const header = screen.findByRole('header', '/loading/i');
    expect(header).toBeInTheDocument();
  })
})
