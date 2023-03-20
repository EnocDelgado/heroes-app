import { types } from "../../../src/auth/types/types";


describe('Test on "Types.js"', () => {
    
    test('should return these types', () => {

        expect(types).toEqual({
            login:  '[Auth] Login',
            logout: '[Auth] Logout',
        })
        
    });

});