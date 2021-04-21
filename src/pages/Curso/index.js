import React, { useState } from 'react';

import { reactjs } from '../../fakeBD/courses/courseReact';

import {
    PageArea,
    CourseArea,
    CourseVideoArea,
    CourseModuleArea,
    CourseProgressArea, 
    Title,
    BarProgress,
    CoursePlayArea,
    CoursePlayTitleArea,
    PlayTitle,
    CloseModuleArea,
    InfoCourse,
    ShowModuleButton,
    SearchModuleInput,
    LineDividing,
    ModuleArea
} from './styled';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import ModuleCard from '../../components/ModuleCard';

export default () => {
    const [watched, setWatched] = useState(false);
    const [closeModules, setCloseModules] = useState(false);
    
    const [title, setTitle] = useState('');

    const [currentLesson, setCurrentLesson] = useState('');

    const [course, setCourse] = useState(reactjs);


    const handleCloseModules = () => {
        setCloseModules(true);
    }

    const handleShowModules = () => {
        setCloseModules(false);
    }

    return (
        <PageArea>
            <CourseArea>
                <CourseVideoArea moduleArea={closeModules}>
                    <CourseProgressArea>
                        {course.map(course => (
                            <InfoCourse>
                                <Title>{course.title}</Title>
                                <BarProgress />
                            </InfoCourse>
                        ))}
                        {closeModules && 
                            <ShowModuleButton onClick={handleShowModules}>Ver Módulos</ShowModuleButton>
                        }
                    </CourseProgressArea>
                    <CoursePlayArea>
                        <iframe width="99%" height="98%" src={currentLesson} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </CoursePlayArea>
                    <CoursePlayTitleArea>
                        <PlayTitle>{title}</PlayTitle>
                        <CheckCircleIcon 
                            style={
                                {
                                    width: 30, 
                                    height: 30, 
                                    color: watched ? '#00FF00' : '#CCCCCC',
                                    marginLeft: 8
                                }
                            } 
                        />
                    </CoursePlayTitleArea>
                </CourseVideoArea>
                <CourseModuleArea close={closeModules}>
                    <CloseModuleArea onClick={handleCloseModules}>
                        <ArrowForwardIosIcon 
                            style={
                                {
                                    width: 14,
                                    height: 14,
                                    color: '#D5D5D6',
                                    marginRight: 10
                                }
                            }
                        />

                        Fechar
                    </CloseModuleArea>
                    <SearchModuleInput type="search" placeholder="Busca" />
                    <Title 
                        style={
                            {
                                fontSize: 17, 
                                fontWeight: 'normal',
                                marginTop: 17
                            }
                        }
                    >
                        Conteúdo do curso
                    </Title>
                    <LineDividing />
                    <ModuleArea>
                        {course.map(course => (
                            course.modules.map((modules, k) => (
                                <ModuleCard 
                                    key={k} 
                                    numberModule={modules.numberModule}
                                    titleModule={modules.titleModule}
                                    lessons={modules.lessons}
                                    onWatch={setCurrentLesson} 
                                    onTitleLesson={setTitle}
                                />
                            ))
                        ))}
                    </ModuleArea>
                </CourseModuleArea>
            </CourseArea>
        </PageArea>
    )
}