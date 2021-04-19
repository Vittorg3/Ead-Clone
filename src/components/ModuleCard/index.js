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

export default () => {
    const [listLessons, setListLessons] = useState([
        {title: 'Criando interface do YouTube', numberLesson: 1},
        {title: 'Criando interface do Nubank', numberLesson: 2}
    ]);

    const [activeLessons, setActiveLessons] = useState(false);

    const handleShowLessons = () => {
        setActiveLessons(!activeLessons);
    }

    return (
        <ModuleCardArea onClick={handleShowLessons}>
            <ModuleInfoArea>
                <TitleArea>
                    <Title>Módulo 1:</Title>
                    <ModuleName>Introdução Geral</ModuleName>
                </TitleArea>
                <CountLessonsArea>
                    {listLessons.length} <CountText>aulas</CountText>
                </CountLessonsArea>
            </ModuleInfoArea>
            <ModuleLessonsArea active={activeLessons}>
                {listLessons.map((i, k) => (
                    <LessonCardArea key={k}>
                        <CheckCircleIcon 
                            style={
                                {width: 16, height: 16, color: '#B4B4B4'}
                            }
                        />
                        <NumberLesson>#{i.numberLesson}:</NumberLesson>
                        <TitleLesson>{i.title}</TitleLesson>
                    </LessonCardArea>
                ))}
            </ModuleLessonsArea>
        </ModuleCardArea>
    )
}