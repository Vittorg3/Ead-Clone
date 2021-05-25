import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

import {
    PageArea,
    CourseArea,
    CourseVideoArea,
    CourseModuleArea,
    CourseProgressArea, 
    Title,
    BarProgressArea,
    BarProgress,
    Progress,
    Percent,
    CoursePlayArea,
    CoursePlayTitleArea,
    PlayTitle,
    CloseModuleArea,
    InfoCourse,
    ShowModuleButton,
    SearchModuleInput,
    LineDividing,
    ModuleArea,
    TitleArea,
    NextLessonArea,
    ButtonTitle,
    FilesLessonArea,
    FileLessonLink,
    FileName
} from './styled';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';

import ModuleCard from '../../components/ModuleCard';
import { useParams } from 'react-router';
import Api from '../../services/Api';
import Cookies, { set } from 'js-cookie';

export default () => {
    const { nameCurso, nameAula } = useParams();

    const [watched, setWatched] = useState(false); 
    const [closeModules, setCloseModules] = useState(false);
    const [courseLoaded, setCourseLoaded] = useState(false);

    const [course, setCourse] = useState([]);

    const [title, setTitle] = useState('');
    const [titleCourse, setTitleCourse] = useState('');

    const [nextMouseIn, setNextMouseIn] = useState(false);
    const [currentLesson, setCurrentLesson] = useState('');
    const [currentLessonQuery, setCurrentLessonQuery] = useState(`http://localhost:3333/api/video/${nameCurso}/${nameAula}`);

    const [search, setSearch] = useState('');

    const [videoLoaded, setVideoLoaded] = useState(false);
    const [lessonChanged, setLessonChanged] = useState(false);
    const [lessonHasFile, setLessonHasFile] = useState(false);

    const [linkFileLesson, setLinkFileLesson] = useState('');

    const [progressCourse, setProgressCourse] = useState(0);

    const progressCoursePercent = () => {
        if(courseLoaded) {
            let totalLesson = 0;
            let watchedLessons = 0;

            course[0].modules.map(module => {
                totalLesson = watchedLessons + module.lessons.length;

                module.lessons.map(lesson => {

                let watchedLesson = lesson.watched.filter(id => {
                        return id.id === Cookies.get('ead-id');
                    });

                    if(watchedLesson.length > 0) {
                        watchedLessons = watchedLessons + 1;
                    }
                });

                let sideBFormule = watchedLessons * 100;
                let resultFormule = sideBFormule / totalLesson; 
                
                setProgressCourse(resultFormule);
            })
        }
    };

    const handleCloseModules = () => {
        setCloseModules(true);
    };

    const handleShowModules = () => {
        setCloseModules(false);
    };

    const changeLesson = () => {
        window.location.href=`/curso/${nameCurso}/${currentLesson}`;
    };

    const nextLesson = async () => {
        let isFounded = [];
        let indice = null;
        
        course.map(course => {
            course.modules.map(module => {
                module.lessons.map(lesson => {
                    isFounded = [...isFounded, lesson];
                });
            });
        });

        if(isFounded.length > 0) {
            indice = isFounded.findIndex(i => i.url === nameAula);
        }

        const newUrlLesson = isFounded[indice + 1];

        let titleMod = ''
        
        if(newUrlLesson !== undefined) {
            course[0].modules.map(module => {
                module.lessons.map(lesson => {
                    if(lesson.title === newUrlLesson.title) {
                        titleMod = module.titleModule;
                    }
                });
            });
        }
        

        if(newUrlLesson !== undefined) {
            const watched = await verifyIfWatched(newUrlLesson.watched);

            Cookies.set('title', newUrlLesson.title);
            Cookies.set('watched', watched);
            watchedLesson(titleMod, newUrlLesson.title);

            window.location.href = `http://localhost:3000/curso/${nameCurso}/${newUrlLesson.url}`;
        }
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

    const watchedLesson = async (titleModule, lesson) => {
        await Api.onWatchedLesson(titleCourse, titleModule, lesson)
    };

    const hasFileLesson = () => {
        let isFounded = [];
        
        course.map(course => {
            course.modules.map(module => {
                module.lessons.map(lesson => {
                    isFounded = [...isFounded, lesson];
                });
            });
        });

        if(isFounded.length > 0) {
            const hasFile = isFounded.filter(lesson => {
                return lesson.title === title;
            });

            if(hasFile.length > 0) {
                if(hasFile[0].file) {
                    setLessonHasFile(true);
                    setLinkFileLesson(hasFile[0].file);
                }
            }
        }
    };

    const hasToken = () => {
        return Cookies.get('token-ead');
    };

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
                setTitle(course.modules[0].lessons[0].title);
                setTitleCourse(course.title);
                setCurrentLesson('http://localhost:3333/api/video/' + course.modules[0].lessons[0].url);
                setVideoLoaded(true);
                progressCoursePercent();
            });

        } else {
            console.log(course[0]);
            setTitle(Cookies.get('title'));
            setWatched(Cookies.get('watched'));
            setTitleCourse(nameCurso);
            setVideoLoaded(true);
            progressCoursePercent();
            hasFileLesson();
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
                                <BarProgressArea>
                                    <BarProgress>
                                        <Progress 
                                            percent={progressCourse} 
                                        />
                                    </BarProgress>
                                    <Percent>{progressCourse.toFixed(0)}%</Percent>
                                </BarProgressArea>
                                
                            </InfoCourse>
                        {closeModules && 
                            <ShowModuleButton onClick={handleShowModules}>Ver Módulos</ShowModuleButton>
                        }
                    </CourseProgressArea>
                    <CoursePlayArea>
                    {videoLoaded && 
                        <ReactPlayer 
                            width="98%"
                            height="98%"
                            controls
                            onContextMenu={(e) =>  e.preventDefault()}
                            config={{
                                file: {
                                    attributes: {
                                        controlsList:  'nodownload'
                                    }
                                }
                            }}
                            url={nameAula != undefined ? currentLessonQuery : currentLesson}
                        />
                    }  
                    </CoursePlayArea>
                    <CoursePlayTitleArea>
                        <TitleArea>
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
                        </TitleArea>
                        <NextLessonArea 
                            onMouseEnter={() => setNextMouseIn(true)}
                            onMouseLeave={() => setNextMouseIn(false)}
                            onClick={nextLesson}
                        >
                            <ButtonTitle mouseIn={nextMouseIn}>Próxima aula</ButtonTitle>
                            <SkipNextIcon 
                                style={{
                                    width: 34,
                                    height: 34,
                                    color: nextMouseIn ? '#fff' : '#8F9296'
                                }}
                            />
                        </NextLessonArea>
                    </CoursePlayTitleArea>
                    {lessonHasFile && 
                    <FilesLessonArea> 
                        <FileLessonLink href={`http://localhost:3333/api/download/${linkFileLesson}?token=${hasToken()}`}>
                            <PlayForWorkIcon 
                                style={
                                    {
                                        width: 35,
                                        height: 35,
                                        color: '#fff'
                                    }
                                }
                            />
                            <FileName>Material necessário</FileName>
                        </FileLessonLink>
                    </FilesLessonArea>
                    }
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
                    <SearchModuleInput 
                        type="text" 
                        placeholder="Busca" 
                        onChange={e => setSearch(e.target.value)}
                    />
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
                                    if(modules.lessons[k].title.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
                                        return <ModuleCard 
                                                    key={k} 
                                                    numberModule={modules.numberModule}
                                                    titleModule={modules.titleModule}
                                                    lessons={modules.lessons}
                                                    onWatch={setCurrentLesson}
                                                    onWatched={watchedLesson}
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
                                        onWatched={watchedLesson}
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