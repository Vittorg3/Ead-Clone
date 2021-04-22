import { reactjs } from '../fakeBD/courses/courseReact';
import { node } from '../fakeBD/courses/courseNode';

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
    }
}