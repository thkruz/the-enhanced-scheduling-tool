import { render, screen } from '@testing-library/react';
import MemberDay from './MemberDay';

 
let memberObj = {}

describe('MemberDay', () => {
    beforeEach( () => {
        render (
            <MemberDay currentDate={new Date(2022,1,1)} member={memberObj}/>
        );
    });
    it('should show 3 shifts per day', () => {
        //console.log(screen.getAllByRole('listitem'));
        expect(screen.getAllByRole('listitem', {  name: /Day/i})).toBeInTheDocument();
        expect(screen.getAllByRole('listitem', {  name: /Swing/i})).toBeInTheDocument();
        expect(screen.getAllByRole('listitem', {  name: /Mid/i})).toBeInTheDocument();
    });

    it('should fill in entry with red background if unavailable', () => {
        const memberDayContainer = screen.getByTestId('member-day-container');
        expect(memberDayContainer.toHaveStyle(`backgroundColor: 'red'`));
    });

    it('should update memberObj to unavailable if clicked', () => {
        expect(screen.getAllByRole('listitem', {  name: /Status: Unavailable/i})).toBeInTheDocument();
    });
});