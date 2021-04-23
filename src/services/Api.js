import Cookies from 'js-cookie';

import { reactjs } from '../fakeBD/courses/courseReact';
import { node } from '../fakeBD/courses/courseNode';

import { user } from '../fakeBD/user/User';

export default {
    dataCourse: async (nameCourse) => {
        switch(nameCourse) {
            case 'react':
                return reactjs; 
            break;
            case 'node':
                return node;
            break;
            default:
            return false;
        }  
    },
    Signin: async (email, password) => {
        if(user[0].email.toLowerCase() === email.toLowerCase() && user[0].senha.toLowerCase() === password.toLowerCase()){
            Cookies.set('token-ead', 'ksjdkajsdkajsdkjasd1212', {expires: 1});
            return true;
            
        } else return false;
    }
}