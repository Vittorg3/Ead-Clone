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
import { ContactSupportOutlined } from '@material-ui/icons';

export default () => {
    const { nameCurso, nameAula } = useParams();

    const [watched, setWatched] = useState(false);
    const [closeModules, setCloseModules] = useState(false);
    const [courseLoaded, setCourseLoaded] = useState(false);

    const [course, setCourse] = useState([]);

    const [title, setTitle] = useState('');
    const [titleCourse, setTitleCourse] = useState('');

    const [currentLesson, setCurrentLesson] = useState('');
    const [currentLessonQuery, setCurrentLessonQuery] = useState(`http://localhost:3333/api/video/${nameCurso}/${nameAula}`);

    const [search, setSearch] = useState('');

    const [videoLoaded, setVideoLoaded] = useState(false);

    const [lessonChanged, setLessonChanged] = useState(false);

    const handleCloseModules = () => {
        setCloseModules(true);
    }

    const handleShowModules = () => {
        setCloseModules(false);
    }

    const changeLesson = () => {
        window.location.href=`/curso/${nameCurso}/${currentLesson}`;
    }

    useEffect(() => {
        async function loadCourse() {
            const courseData = await Api.dataCourse(nameCurso);
            if(courseData != undefined) {
                courseData.modules.sort((a, b) => {
                    return a.numberModule > b.numberModule ? 1 : a.numberModule < b.numberModule ? -1 : 0;
                });

                setCourse([courseData]);
                setCourseLoaded(true);
            } else window.location.href = "/home";
        }
        loadCourse();
    }, []);
    

    useEffect(() => {
        if(!nameAula) {
            course.map(course => {
                setTitle(course.introduction.title);
                setTitleCourse(course.title);
                setCurrentLesson('http://localhost:3333/api/video/' + course.introduction.url);
                setVideoLoaded(true);
            });

        } else {
            const name = nameAula[0].toUpperCase() + nameAula.substr(1);
            const nameWithoutNumber = name.replace(/[0-999]/g, '');
            setTitle(nameWithoutNumber.replace(/-/g, " "));
            setTitleCourse(nameCurso);
            setVideoLoaded(true);
        }

        return (() => {
            setTitle('');
            setCurrentLesson('');
        })
    }, [courseLoaded]);

    useEffect(() => {
        if(lessonChanged != false) {
            changeLesson();
        }
    }, [lessonChanged])

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
                    {videoLoaded && 
                        <video width="98%" height="98%" controls>
                            <source src={nameAula != undefined ? currentLessonQuery : currentLesson} type="video/mp4"></source>
                        </video>
                    }  
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
                                                    change={setLessonChanged}
                                                    onlyView={false}
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
                                        change={setLessonChanged}
                                        onlyView={false}
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