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
    },
    adminIsLogged: () => {
        const token = Cookies.get('token-admin-ead');
        return token ? true : false;
    },
    adminLogout: () => {
        Cookies.remove('token-admin-ead');
        localStorage.removeItem('admin');
        return true;
    }
};
