import Cookies, { get } from 'js-cookie';

import api from '../services/Axios';

import { useUserContext } from '../contexts/UserContextHook';

export default {
    courseAvailable: async () => {
        const token = Cookies.get('token-ead');

        if(token) {
            const res = await api.get('api/course/available', {
                headers: {
                    Authorization: token
                }
            })
            
            return res.data.available;
        }
    },
    dataCourse: async (nameCourse) => {
        const token = Cookies.get('token-ead');

        if(token) {
            const res = await api.get(`api/course/${nameCourse}`, {
                headers: {
                    Authorization: token
                }
            })
    
            return res.data.course;
        }
        
    },
    dataModule: async (nameCourse) => {
        const token = Cookies.get('token-ead');
        const title = nameCourse.toLowerCase();

        if(token) {
            const res = await api.post('api/admin/course/modules', {
              token, title
            });

            return res.data;
        }
    },
    Signin: async (email, password) => {
        const res = await api.post('api/user/signin', {email, password});
        if(res.data.token) {
            Cookies.set('token-ead', res.data.token, {expires: 86400});
            Cookies.set('ead-id', res.data.user.id, {expires: 86400});

            if(res.data.user.perm) {
                Cookies.set('perm', res.data.user.perm, {expires: 84600});
            }

            delete res.data.user.id;
            delete res.data.user.perm;
            
            localStorage.setItem('user', JSON.stringify(res.data.user));
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

        if(token && id) {
            const res = await api.post('api/user/avatar', data, {
                headers: {
                    Authorization: token
                }
            });
            return res;
        }
    },
    createCourse: async (data) => {
        const token = await Cookies.get('token-ead');
        const id = await Cookies.get('ead-id');

        await data.append('token', token);
        await data.append('id', id);

        if(token && id) {
            const res = await api.post('api/admin/course', data);
            return res.data;
        }
    }
}