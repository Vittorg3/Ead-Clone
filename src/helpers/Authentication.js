import Cookies from 'js-cookie';

export default {
    isLogged: () => {
        const token = Cookies.get('token-ead');
        return token ? true : false; 
    },
    logout: () => {
        Cookies.remove('token-ead');
        localStorage.removeItem('user');
        return true;
    }
};
