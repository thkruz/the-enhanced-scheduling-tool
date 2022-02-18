import { render, screen } from '@testing-library/react';
import MemberDay from './MemberDay';


// let memberObj =

describe('MemberDay', () => {

    it('It should display the scheduling app title', () => {
        render (
            // <MemberDay member={memberObj}/>
            <MemberDay />
        );
        expect(screen.getByRole('heading', {  name: /Scheduling App/i})).toBeInTheDocument();
    });
});