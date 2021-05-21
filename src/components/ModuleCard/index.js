import React, { useState, useEffect } from 'react';
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
import Cookies from 'js-cookie';

export default ({ numberModule, titleModule, lessons, onWatch, onWatched, onTitleLesson, change, onlyView }) => {
    const [listLessons, setListLessons] = useState(lessons);

    const [activeLessons, setActiveLessons] = useState(false);
    
    const handleShowLessons = () => {
        setActiveLessons(!activeLessons); 
    };                                    //LÓGICA PARA VISUALIZAÇÃO NO TITULO DO VIDEO
    
    const handleWatchLesson = (url, title, watched) => {
        onWatch(url);
        onTitleLesson(title);
        onWatched(titleModule, title);
        change(true);

        saveInfoLessonCurrent(title, watched);
    };

    const saveInfoLessonCurrent = (title, isWatched) => {
        Cookies.set('title', title);
        Cookies.set('watched', isWatched);
    };

    const verifyIfWatched = (ids) => {
        const userId = Cookies.get('ead-id');
        
        if(!ids) {
            return false;
        }

        const isWatched = ids.filter(user => {
            return user.id === userId;
        });
        
        return isWatched.length > 0 ? true : false;
    };

    useEffect(() => {
        listLessons.sort((a, b) => {
            return a.numberLessons > b.numberLessons ? 1 : a.numberLessons < b.numberLessons ? -1 : 0;
        });
    }, []);

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
            {onlyView === false &&
                <ModuleLessonsArea active={activeLessons}>
                {listLessons.map((i, k) => (
                    <LessonCardArea key={k} onClick={() => handleWatchLesson(i.url, i.title, verifyIfWatched(i.watched))}>
                        {verifyIfWatched(i.watched) === true && 
                            <CheckCircleIcon 
                                style={
                                    {width: 16, height: 16, color: '#00FF00'}
                                }
                            />
                        }
                        {verifyIfWatched(i.watched) === false &&
                            <CheckCircleIcon 
                                style={
                                    {width: 16, height: 16, color: '#B4B4B4'}
                                }
                            />
                        }
                        <NumberLesson>#{i.numberLessons}:</NumberLesson>
                        <TitleLesson>{i.title}</TitleLesson>
                    </LessonCardArea>
                ))}
            </ModuleLessonsArea>
            }
        </ModuleCardArea>
    )
}