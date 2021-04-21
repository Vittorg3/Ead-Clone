import React, { useState } from 'react';
import {
    ModuleCardArea,
    ModuleInfoArea,
    TitleArea,
    Title,
    ModuleName,
    CountLessonsArea,
    CountText,
    ModuleLessonsArea,
    LessonCardArea,
    NumberLesson,
    TitleLesson
} from './styled';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default ({ numberModule, titleModule, lessons, onWatch, onTitleLesson }) => {
    const [listLessons, setListLessons] = useState([]);

    const [activeLessons, setActiveLessons] = useState(false);

    const handleShowLessons = () => {
        setActiveLessons(!activeLessons);
    }

    const handleWatchLesson = (url, title) => {
        onWatch(url);
        onTitleLesson(title);
    }

    return (
        <ModuleCardArea onClick={handleShowLessons}>
            <ModuleInfoArea>
                <TitleArea>
                    <Title>Módulo {numberModule}:</Title>
                    <ModuleName>{titleModule}</ModuleName>
                </TitleArea>
                <CountLessonsArea>
                    {lessons.length} <CountText>aulas</CountText>
                </CountLessonsArea>
            </ModuleInfoArea>
            <ModuleLessonsArea active={activeLessons}>
                {lessons.map((i, k) => (
                    <LessonCardArea key={k} onClick={() => handleWatchLesson(i.url, i.title)}>
                        <CheckCircleIcon 
                            style={
                                {width: 16, height: 16, color: '#B4B4B4'}
                            }
                        />
                        <NumberLesson>#{i.numberLessons}:</NumberLesson>
                        <TitleLesson>{i.title}</TitleLesson>
                    </LessonCardArea>
                ))}
            </ModuleLessonsArea>
        </ModuleCardArea>
    )
}