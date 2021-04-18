import React from 'react';
import {
    PageArea,
    CourseArea,
    CourseVideoArea,
    CourseModuleArea,
    CourseProgressArea, 
    Title,
    BarProgress,
    CoursePlayArea
} from './styled';

export default () => {
    return (
        <PageArea>
            <CourseArea>
                <CourseVideoArea>
                    <CourseProgressArea>
                        <Title>ReactJS</Title>
                        <BarProgress />
                    </CourseProgressArea>
                    <CoursePlayArea>
                        <iframe width="99%" height="98%" src="https://www.youtube.com/embed/u9FnmBdBl5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </CoursePlayArea>
                </CourseVideoArea>
                <CourseModuleArea>

                </CourseModuleArea>
            </CourseArea>
        </PageArea>
    )
}