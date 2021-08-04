import React, { useState, useEffect } from 'react';

import Api from '../../../services/Api';
import {
    PageArea,
    EditLessonArea,
    SelectLessonArea,
    InputArea,
    InputTitle,
    Courses,
    OptionCourse,
    EditDataLesson,
    Input,
    UploadButton,
    SelectVideo,
    AlertVideo,
    ProgessVideo
} from './styled';

const formatPermited = [
    '.mp4',
    '.avi',
    '.mpg',
    '.wmv'
]

const formateFilePermited = [
    '.zip',
    '.pdf'
]

export default () => {
    const [uploadPercent, setUploadPercent] = useState(0);

    const [videoAdded, setVideoAdded] = useState(false);
    const [fileRemoved, setFileRemoved] = useState(false);

    const [video, setVideo] = useState();

    const [courses, setCourses] = useState([]);
    const [courseSelected, setCourseSelected] = useState('');

    const [modules, setModules] = useState([]);
    const [moduleSelected, setModuleSelected] = useState('');

    const [lessons, setLessons] = useState([]);
    const [lessonSelected, setLessonSelected] = useState('');

    const [titleLesson, setTitleLesson] = useState('');
    const [newTitleLesson, setNewTitleLesson] = useState('');

    const handleUploadVideo = (video) => {
        setVideoAdded(true);
        setVideo(video);
    };

    const handleUploadFile = (file) => {
        // setFileAdded(true);
        // setFile(file);
    };

    const loadCourses = async () => {
        const courses = await Api.courseAvailable();
        setCourses(courses);
    };

    const loadModules = async () => {
       const modules = await Api.dataModule(courseSelected);
       modules.modules.sort((a, b) => (
            a.numberModule > b.numberModule ? 1 : a.numberModule < b.numberModule ? -1 : 0
       ));

       setModules(modules.modules);
    };

    const loadLessons = () => {
        const module = moduleSelected;
        const nameModuleFormated = module.replace(/[0-9999]/g, '');
        const nameModuleTrim = nameModuleFormated.trim();

        let lessons = [];
        
        modules.map(module => {
            if(module.titleModule === nameModuleTrim) {
                lessons = module.lessons.sort((a, b) => (
                    a.numberLessons > b.numberLessons ? 1 : a.numberLessons < b.numberLessons ? -1 : 0
                ));
            }
        });

        if(lessons !== null) {
            setLessons(lessons);
        }
    };

    const loadDataLesson = async () => {
        const nameCourse = courseSelected.toLowerCase();
        const nameModule = moduleSelected.replace(/[0-9999]/, '').replace('-', '').trim();
        const nameLesson = lessonSelected.replace(/[0-9999]/, '').replace('-', '').trim();

        const dataLesson = await Api.dataLesson(nameCourse, nameModule, nameLesson);
        
        if(dataLesson !== undefined) {
            setTitleLesson(dataLesson.title);
        }
        
    };

    const handleSubmitUpdateLesson = () => {
        //criar a lógica para o upload
        let fieldsChanged = [];
        //verificar se o titulo foi mudado
        //verificar se foi incluido video
        //verificar se o arquivo está em um dos formatos permitidos mimetype
        //configurar o backend 
    };

    useEffect(() => {
        loadCourses();
    }, []);

    useEffect(() => {
        loadModules();
    }, [courseSelected]);

    useEffect(() => {
        loadLessons();
    }, [moduleSelected]);

    useEffect(() => {
        loadDataLesson();
    }, [lessonSelected]);

    return (
        <PageArea>
            <EditLessonArea>
                <SelectLessonArea>
                    <InputArea>
                        <InputTitle>Selecione o CURSO desejado:</InputTitle>
                        <Courses onChange={e => setCourseSelected(e.target.value)}>
                            <OptionCourse></OptionCourse>
                            {courses.length > 0 &&
                                courses.map((i, k) => (
                                    <OptionCourse key={k}>{i.title}</OptionCourse>
                                ))
                            }
                        </Courses>
                    </InputArea>
                    <InputArea>
                        <InputTitle>Selecione o MÓDULO desejado:</InputTitle>
                        <Courses onChange={e => setModuleSelected(e.target.value)}>
                            <OptionCourse></OptionCourse>
                            {modules.length > 0 && 
                                modules.map((i, k) => (
                                    <OptionCourse key={k}>{k + 1} {i.titleModule}</OptionCourse>
                                ))
                            }
                        </Courses>
                    </InputArea>
                    <InputArea>
                        <InputTitle>Selecione a AULA desejada:</InputTitle>
                        <Courses onChange={e => setLessonSelected(e.target.value)}>
                            <OptionCourse></OptionCourse>
                            {lessons.length > 0 &&
                                lessons.map((i, k) => (
                                    <OptionCourse key={k}>{i.numberLessons} {i.title}</OptionCourse>
                                ))
                            }
                        </Courses>
                    </InputArea>
                </SelectLessonArea>
                
                <EditDataLesson>
                    <InputArea>
                        <InputTitle>Titulo da AULA:</InputTitle>
                        <Input 
                            type="text"
                            defaultValue={titleLesson}
                            onChange={e => setNewTitleLesson(e.target.value)}
                        />
                    </InputArea>
                    {videoAdded && 
                        <InputArea>
                            <AlertVideo>
                                Arquivo selecionado
                                <ProgessVideo progress={uploadPercent}>{uploadPercent}%</ProgessVideo>
                            </AlertVideo>
                        </InputArea>
                    }
                    <UploadButton>Substituir Vídeo Aula
                            <SelectVideo 
                                type="file"
                                onChange={e => handleUploadVideo(e.target.files[0])}
                                accept={formatPermited}
                            />
                    </UploadButton>
                </EditDataLesson>
            </EditLessonArea>
        </PageArea>
    )
}