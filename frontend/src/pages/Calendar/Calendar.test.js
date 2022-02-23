import { render, screen } from '@testing-library/react';
import Calendar from './Calendar';
import { saveCsv } from './../../utils/saveCsv';

describe('testing the Developers on the /about route', () => {
  const setup = () => {
    render(<Calendar />);
  };

  it('should save when save button is clicked', async () => {
    setup();
    jest.mock('../../utils/saveCsv');
    const Download = screen.getByText('Download');
    await Download.click();
    expect(saveCsv).toHaveBeenCalled();
  });
});
