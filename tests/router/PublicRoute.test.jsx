import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { AuthContext } from '../../src/auth';
import { PublicRoute } from '../../src/router/PublicRoute';


describe('Test on <PublicRoute />', () => {
    
    test('should display children if not authenticated', () => {
        
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Public Route</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Public Route') ).toBeTruthy();

    });


    test('should diplay Nagivate if it is authenticated', () => { 

        
        const contextValue = {
            logged: true,
            user: {
                name: 'Strider',
                id: 'ABC123'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Public Route</h1>
                            </PublicRoute>
                        } />
                        <Route path='marvel' element={ <h1>Marvel Page</h1> } />
                    </Routes>

                    
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Marvel Page') ).toBeTruthy();


    })

});