import React, { useState } from 'react';

import { 
    PageContainer, 
    CourseListArea,
    ListArea,
    Title,
    CoursesArea
} from './styled';

import CourseCard from '../../components/CourseCard';

export default () => {
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