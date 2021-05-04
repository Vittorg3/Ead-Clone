import Cookies, { get } from 'js-cookie';

import api from '../services/Axios';

import { reactjs } from '../fakeBD/courses/courseReact';
import { node } from '../fakeBD/courses/courseNode';

import { user } from '../fakeBD/user/User';

import { useUserContext } from '../contexts/UserContextHook';

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
        const res = await api.post('api/user/signin', {email, password});
        if(res.data.token) {
            Cookies.set('token-ead', res.data.token);
            Cookies.set('ead-id', res.data.user.id);
            delete res.data.user.id
            
            localStorage.setItem('user', JSON.stringify(res.data.user)); //salvando usuario no localsto
            return true;
        }

        return false;
    }, 
    Signup: async (email, password, name) => {
        const res = await api.post('api/user/signup', {email, password, name});
        if(res.data == true) {
            return true;
        }

        return false;
    },
    UserInfo: async () => {
        const token = await Cookies.get('token-ead');
        const id = await Cookies.get('ead-id');

        if(token && id) {
            const res = await api.get('api/user/me', {
                params:{
                    token, 
                    id
                }
            }); 
            return res.data;
        }
        
        return false;
    },
    editUser: async (fieldsChanged) => {
        const token = await Cookies.get('token-ead');
        const id = await Cookies.get('ead-id');

        const { name, password } = fieldsChanged;
            
        const res = await api.post('api/user/me', {token, id, name, password});
        return res;

    },
    uploadAvatar: async (avatar) => {
        const token = await Cookies.get('token-ead');
        const id = await Cookies.get('ead-id');

        const data = await new FormData();
        await data.append("token", token);
        await data.append("id", id);
        await data.append("avatar", avatar);
        //não está salvando vindo do front

        if(token && id) {
            const res = await api.post('api/user/avatar', data, {
                headers: {
                    Authorization: token
                }
            });
            return res;
        }
    }
}