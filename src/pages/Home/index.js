import React from 'react';
import { 
    PageContainer, 
    CourseListArea,
    ListArea,
    Title,
    CoursesArea
} from './styled';

import CourseCard from '../../components/CourseCard';

export default () => {
    return (
        <PageContainer>
            <CourseListArea>
                <ListArea>
                    <Title>Seus Cursos</Title>
                    <CoursesArea>
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </CoursesArea>
                </ListArea>
            </CourseListArea>
        </PageContainer>
    )
}