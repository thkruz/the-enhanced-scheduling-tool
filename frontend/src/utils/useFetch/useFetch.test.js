import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FakeComponent from './FakeComponent';

describe('Unit tests for useFetch custom hook', () => {
  const setup = url => {
    render(<FakeComponent url={url} />);
  };

  test('the test itself should render a FakeComponent to use for further testing', () => {
    // Decide what fetch is going to send back
    jest.spyOn(window, 'fetch').mockImplementation(() => {
      const fetchResponse = {
        ok: true,
        json: () => Promise.resolve(JSON.stringify({ id: 0, name: 'John Doe' })),
      };
      return Promise.resolve(fetchResponse);
    });

    setup('');
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    userEvent.click(btn);
  });

  // test('the test should return null data, null err, and true load', () => {
  //   setup('');
  //   const dataText = screen.getByText('/data:/i');
  //   expect(dataText).toBeInTheDocument();
  // })
});
