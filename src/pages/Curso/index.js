import React, { useState, useEffect } from 'react';

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
import { useParams } from 'react-router';
import Api from '../../services/Api';

export default () => {
    const { nameCurso } = useParams();

    const [watched, setWatched] = useState(false);
    const [closeModules, setCloseModules] = useState(false);
    const [courseLoaded, setCourseLoaded] = useState(false);

    const [course, setCourse] = useState([]);

    const [title, setTitle] = useState('');
    const [titleCourse, setTitleCourse] = useState('');
    const [currentLesson, setCurrentLesson] = useState('');
    const [search, setSearch] = useState('');

    const handleCloseModules = () => {
        setCloseModules(true);
    }

    const handleShowModules = () => {
        setCloseModules(false);
    }

    useEffect(() => {
        async function loadCourse() {
            const courseData = await Api.dataCourse(nameCurso);
            if(courseData !== false) {
                setCourse(courseData);
                setCourseLoaded(true);
            } else window.location.href = "/home";
        }
        loadCourse();
    }, []);

    useEffect(() => {
        course.map(course => {
            setTitle(course.introductionLesson.title);
            setTitleCourse(course.title);
            setCurrentLesson(course.introductionLesson.url);
        });

        return (() => {
            setTitle('');
            setCurrentLesson('');
        })
    }, [courseLoaded]);

    const searchRegex = new RegExp(`/^[${search.toLowerCase()}]*`);

    return (
        <PageArea>
            <CourseArea>
                <CourseVideoArea moduleArea={closeModules}>
                    <CourseProgressArea>
                            <InfoCourse>
                                <Title>{titleCourse}</Title>
                                <BarProgress />
                            </InfoCourse>
                        {closeModules && 
                            <ShowModuleButton onClick={handleShowModules}>Ver Módulos</ShowModuleButton>
                        }
                    </CourseProgressArea>
                    <CoursePlayArea>
                        <iframe width="99%" height="98%" src={currentLesson} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                    <SearchModuleInput type="search" placeholder="Busca" onChange={e => setSearch(e.target.value)}/>
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
                        {search.trim() != '' && 
                            course.map(course => (
                                course.modules.map((modules, k) => {
                                    if(modules.lessons[k].title.toLowerCase() === search.toLowerCase()) {
                                        return <ModuleCard 
                                                    key={k} 
                                                    numberModule={modules.numberModule}
                                                    titleModule={modules.titleModule}
                                                    lessons={modules.lessons}
                                                    onWatch={setCurrentLesson} 
                                                    onTitleLesson={setTitle}
                                                />
                                    }
                                })
                            ))
                        }
                        {search.trim() == '' && 
                            course.map(course => (
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
                            ))
                        }
                    </ModuleArea>
                </CourseModuleArea>
            </CourseArea>
        </PageArea>
    )
}