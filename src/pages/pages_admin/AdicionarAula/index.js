import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import Api from '../../../services/Api';
import api from '../../../services/Axios';
import {
    PageArea,
    UploadLessonArea,
    UploadButton,
    SelectVideo,
    InputArea,
    Title,
    InputLesson,
    Courses,
    OptionCourse,
    AlertVideo,
    UploadLessonButton,
    ProgessVideo
} from './styled';

const formatPermited = [
    '.mp4',
    '.avi',
    '.mpg',
    '.wmv'
]

export default () => {
    const [nameCourse, setNameCourse] = useState('');

    const [moduleCourse, setModuleCourse] = useState([]);
    const [coursesAvailable, setCoursesAvailable] = useState([]);
    const [courseSelected, setCourseSelected] = useState('');

    const [nameLesson, setNameLesson] = useState('');

    const [videoAdded, setVideoAdded] = useState(false);
    const [lesson, setLesson] = useState();

    const [uploadPercent, setUploadPercent] = useState(0);

    const loadCoursesAvailable = async () => {
        const courses = await Api.courseAvailable();
        
        if(courses) {
            setCoursesAvailable(courses);
            return;
        }
    };

    const loadModuleCourse = async (nameCourse) => {
        const module = await Api.dataModule(nameCourse);
        setModuleCourse(module.modules);
        setNameCourse(nameCourse);
    };

    const handleUploadLesson = (lesson) => {
        setVideoAdded(true);
        setLesson(lesson);
    };

    const handleSaveLesson = async () => {
        if(![null || ''].includes(courseSelected.trim() && nameLesson.trim() && videoAdded)) {
            const token = Cookies.get('token-ead');

            const data = new FormData();
            await data.append('lesson', lesson);
            await data.append('course', courseSelected);
            await data.append('nameCourse', nameCourse);
            await data.append('nameLesson', nameLesson);

            const options = {
                headers: {
                    authorization: token,
                    nameLesson
                },
                onUploadProgress: progressEvent => {
                    const { loaded, total } = progressEvent;

                    let percent = Math.floor((loaded * 100) / total);

                    if(percent < 100) {
                        setUploadPercent(percent);
                    }
                }
            };


            await api.post('api/admin/video/upload', data, options).then(res => {
                if(res.data.res) {
                    setUploadPercent(100);
                }
            })
            .catch(err => {
                setUploadPercent(0);
            });

        } else {
            alert('preencha todos os campos!');
        }
    };

    useEffect(() => {
        loadCoursesAvailable();
    }, []);

    return (
        <PageArea>
            <UploadLessonArea>
                <InputArea>
                    <Title>Selecione o CURSO desejado:</Title>
                    <Courses onChange={e => loadModuleCourse(e.target.value)}>
                        <OptionCourse></OptionCourse>
                        {coursesAvailable.length > 0 && 
                            coursesAvailable.map((i, k) => (
                                <OptionCourse key={k}>{i.title}</OptionCourse>
                            ))
                        } 
                    </Courses>
                </InputArea>
                <InputArea>
                    <Title>Selecione o MÓDULO desejado:</Title>
                    <Courses style={{width: 300}} onChange={e => setCourseSelected(e.target.value)}>
                        <OptionCourse></OptionCourse>
                        {moduleCourse.length > 0 && 
                            moduleCourse.map((i, k) => (
                                <OptionCourse key={k}>{i.numberModule}- {i.titleModule}</OptionCourse>
                            ))
                        }
                    </Courses>
                </InputArea>
                <InputArea>
                    <Title>Nome da Aula:</Title>
                    <InputLesson 
                        type="text"
                        placeholder="Digite o tema da aula"
                        onChange={e => setNameLesson(e.target.value)}
                        maxLength={31}
                    />
                </InputArea>
                {videoAdded && 
                    <InputArea>
                        <AlertVideo>
                            Video Selecionado
                            <ProgessVideo progress={uploadPercent}>{uploadPercent}%</ProgessVideo>
                        </AlertVideo>
                    </InputArea>
                }
                
                <UploadButton>Adicionar Aula
                            <SelectVideo 
                                type="file"
                                onChange={e => handleUploadLesson(e.target.files[0])} 
                                accept={formatPermited}
                            />
                </UploadButton>
                <UploadLessonButton onClick={handleSaveLesson}>Enviar Aula</UploadLessonButton>
            </UploadLessonArea>
        </PageArea>
    )
};