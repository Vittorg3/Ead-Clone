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

import Api from '../../services/Api';

export default () => {
    const [state, dispatch] = useUserContext();
    const [courses, setCourses] = useState([]);

    async function loadingUser() { 
        if(localStorage.getItem('user')) { 
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

    async function coursesAvailable() {
        const available = await Api.courseAvailable();
        if(available != undefined) {
            setCourses(available);
        }
    }

    useEffect(() => {
        loadingUser();
        coursesAvailable();
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