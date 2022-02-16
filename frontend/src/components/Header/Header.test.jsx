import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header', () => {

    beforeEach( () => {
        render (
            <Router>
                <Header />
            </Router>
        );
    })

    it('It should have title based on current page', () => {
        // Default root page should be Scheduling App
        expect(screen.getByRole('heading', {  name: /Scheduling App/i})).toBeInTheDocument();
        // Change url to include "/about" and the title should change
        location.href = location.href + '/about'
        expect(screen.getByRole('heading', {  name: /Developer Info/i})).toBeInTheDocument();
        // Change url to include "/admin" and the title should change
        location.href = location.href + '/admin'
        expect(screen.getByRole('heading', {  name: /Admin Page/i})).toBeInTheDocument();
        // Change url to include "/id/1" and the title should change
        location.href = location.href + '/users/1'
        expect(screen.getByRole('heading', {  name: /Member Info/i})).toBeInTheDocument();
        
    });
});