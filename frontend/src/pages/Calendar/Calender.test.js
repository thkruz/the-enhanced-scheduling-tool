import { screen, render } from '@testing-library/react';
import Calendar from './Calendar';

describe('unit tests for the Loading component', () => {

  const setup = () => {
    render(<Calendar />);
  }

  test('it should have a button called download', async () => {
    setup();
    const button = await screen.findByRole('button', {  name: /download/i})
    expect(button).toBeInTheDocument();
  })

})

