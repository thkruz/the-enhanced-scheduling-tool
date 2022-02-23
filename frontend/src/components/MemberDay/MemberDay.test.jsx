import { render, screen, fireEvent } from '@testing-library/react';
import MemberDay from './MemberDay';
import '@testing-library/jest-dom/extend-expect';
 
let memberObj = {
    "id": 1,
    "first": "John",
    "last": "Doe",
    "preference": "day",
    "nonavail": [
      17,
      14,
      25,
      11
    ]
  };

describe('MemberDay', () => {
    const setup = () => {
        render (
            <MemberDay member={memberObj} date={'123'}/>
        );
    };
    it('should show 3 shifts per day', () => {
        setup();
        expect(screen.getByText('Day')).toBeInTheDocument();
        expect(screen.getByText('Swing')).toBeInTheDocument();
        expect(screen.getByText('Mid')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem').length).toBe(3);
    });

    it('should update memberObj to unavailable if clicked', () => {
        setup();
        expect(screen.getByRole('heading', {  name: /Status:/i})).toBeInTheDocument();
        const memberDayContainer = screen.getByTestId('member-day-container');
        fireEvent.click(memberDayContainer);
        expect(screen.getByRole('heading', {  name: /Status: Unavailable/i})).toBeInTheDocument();
        fireEvent.click(memberDayContainer);
        expect(screen.getByRole('heading', {  name: /Status: Available/i})).toBeInTheDocument();
    });

    it('should fill in entry with red background if unavailable', () => {
        setup();
        const memberDayContainer = screen.getByTestId('member-day-container');
        fireEvent.click(memberDayContainer);
        expect(memberDayContainer).toHaveStyle(`backgroundColor: 'red'`);
        fireEvent.click(memberDayContainer);
        expect(memberDayContainer).toHaveStyle(`backgroundColor: ''`);
    });

});