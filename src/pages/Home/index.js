import React, { useState, useEffect } from 'react';

import { 
    PageContainer, 
    CourseListArea,
    ListArea,
    Title,
    CoursesArea
} from './styled';

import CourseCard from '../../components/CourseCard';
import { useUserContext } from '../../contexts/UserContextHook';

export default () => {
    const [state, dispatch] = useUserContext();
    const [courses, setCourses] = useState([
        {
            title: 'ReactJS',
            course: 'react',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
        },
        {
            title: 'Node',
            course: 'node',
            img: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png'
        },
    ]);

    async function loadingUser() { //salvando os dados no context
        if(localStorage.getItem('user')) { //procurar um jeito de salvar o context 
            const user = await localStorage.getItem('user');
            const dataUser = await JSON.parse(user);

            dispatch({
                type: 'setAll',
                payload: {
                    name: dataUser.name,
                    email: dataUser.email,
                    avatar: dataUser.avatar
                }
            });
        }
    };

    useEffect(() => {
        loadingUser();
    }, [])


    return (
        <PageContainer>
            <CourseListArea>
                <ListArea>
                    <Title>Seus Cursos</Title>
                    <CoursesArea>
                        {courses.length > 0 &&
                            courses.map((i, k) => (
                                <CourseCard 
                                    key={k} 
                                    title={i.title} 
                                    course={i.course}
                                    img={i.img}
                                />
                            ))
                        }
                        
                    </CoursesArea>
                </ListArea>
            </CourseListArea>
        </PageContainer>
    )
}