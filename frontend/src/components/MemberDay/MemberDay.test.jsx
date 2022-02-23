import { render, screen } from '@testing-library/react';
import MemberDay from './MemberDay';


let memberObj =

describe('MemberDay', () => {
    beforeEach( () => {
        render (
            <MemberDay currentDate={new Date(2022,1,1)} member={memberObj}/>
        );
    });
    it('should show 3 shifts per day', () => {

        expect(screen.getAllByRole('listitem', {  name: /day/i})).toBeInTheDocument();
        expect(screen.getAllByRole('listitem', {  name: /swing/i})).toBeInTheDocument();
        expect(screen.getAllByRole('listitem', {  name: /mid/i})).toBeInTheDocument();
    });

    it('should fill in entry with red background if unavailable', () => {
        const memberDayCard = screen.getByTestId('member-day-card');
        
        expect(screen.getByRole('heading', {  name: /Scheduling App/i})).toBeInTheDocument();
    });

    it('should update memberObj to unavailable if clicked', () => {
        expect(screen.getAllByRole('listitem', {  name: /Status: Unavailable/i})).toBeInTheDocument();
    });
});