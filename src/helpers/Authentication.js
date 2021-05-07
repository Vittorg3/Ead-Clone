import Cookies from 'js-cookie';

export default {
    isLogged: () => {
        const token = Cookies.get('token-ead');
        return token ? true : false; 
    },
    logout: () => {
        Cookies.remove('token-ead');
        Cookies.remove('token-ead');
        Cookies.remove('perm');
        
        localStorage.removeItem('user');
        return true;
    },
    isAdmin: () => {
        const admin = Cookies.get('perm');
        if(admin) {
            if(admin == 'true') {
                return true;
            } else {
                return false;
            }
        }
    }
};
