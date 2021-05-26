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
    '.zip',
    '.pdf'
]

export default () => {
    const [nameCourse, setNameCourse] = useState('');

    const [moduleCourse, setModuleCourse] = useState([]);
    const [coursesAvailable, setCoursesAvailable] = useState([]);
    const [courseSelected, setCourseSelected] = useState('');

    const [lessons, setLessons] = useState([]);
    const [nameLesson, setNameLesson] = useState('');

    const [file, setFile] = useState();
    const [hasFile, setHasFile] = useState(false);

    const [nameFile, setNameFile] = useState('');

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
        setModuleCourse(module.modules.sort((a, b) => (a.numberModule > b.numberModule ? 1 : a.numberModule < b.numberModule ? -1 : 0)));
        setNameCourse(nameCourse);
    };

    const handleUploadFile = (file) => {
        setHasFile(true);
        setFile(file);
    };

    const handleSetNameLesson = (lesson) => {
        let nameLesson = lesson.split('-')[1];
        let finalNameLesson = nameLesson.replace('-', '');
        let name = finalNameLesson.trim();

        setNameLesson(name);
    };

    const handleSetNameModule = (module) => {
        let nameModule = module.split('-')[1];
        let finalNameModule = nameModule.replace('-', '');
        let name = finalNameModule.trim();

        setCourseSelected(name);
    };

    const handleSaveLesson = async () => {
        if(![null || ''].includes(courseSelected.trim() && nameLesson.trim() && nameCourse.trim() && nameFile.trim())) {
            const token = Cookies.get('token-ead');

            if(!hasFile) {
                alert('Adicione um arquivo válido');
                return;
            }

            const data = new FormData();
            await data.append('course', nameCourse);
            await data.append('module', courseSelected);
            await data.append('lesson', nameLesson);
            await data.append('file', file);


            const options = {
                headers: {
                    authorization: token,
                    nameFile: nameFile
                },
                onUploadProgress: progressEvent => {
                    const { loaded, total } = progressEvent;

                    let percent = Math.floor((loaded * 100) / total);

                    if(percent < 100) {
                        setUploadPercent(percent);
                    }
                }
            };


            await api.post('api/admin/file/lesson', data, options).then(res => {
                if(res.data.res) {
                    setUploadPercent(100);
                    
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000)
                }
            })
            .catch(err => {
                setUploadPercent(0);
            });

        } else {
            alert('preencha todos os campos!');
        }
    };

    const loadModuleLesson = () => {
        let nameModule = courseSelected.replace(/[0-9999]/g, '');
        let finalNameModule = nameModule.replace('-', '');
        let nameModuleFormat = finalNameModule.trim();

        const module = moduleCourse.filter(module => {
            return module.titleModule === nameModuleFormat;
        });

        let lessons = [];

        module.map(module => {
            module.lessons.map(lesson => {
               lessons.push(lesson);
            });
        })

        lessons.sort((a, b) => {
            return a.numberLessons > b.numberLessons ? 1 : a.numberLessons < b.numberLessons ? -1 : 0; 
        });
        
        setLessons(lessons);
    };

    useEffect(() => {
        loadCoursesAvailable();
    }, []);

    useEffect(() => {
        loadModuleLesson();
    }, [courseSelected]);

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
                    <Courses style={{width: 300}} onChange={e => handleSetNameModule(e.target.value)}>
                        <OptionCourse></OptionCourse>
                        {moduleCourse.length > 0 && 
                            moduleCourse.map((i, k) => (
                                <OptionCourse key={k}>{i.numberModule}- {i.titleModule}</OptionCourse>
                            ))
                        }
                    </Courses>
                </InputArea>
                <InputArea>
                    <Title>Selecione a AULA desejada:</Title>
                    <Courses style={{width: 300}} onChange={e => handleSetNameLesson(e.target.value)}>
                        <OptionCourse></OptionCourse>
                        {lessons.length > 0 && 
                            lessons.map((i, k) => (
                                <OptionCourse key={k}>{i.numberLessons}- {i.title}</OptionCourse>
                            ))
                        }
                    </Courses>
                </InputArea>
                <InputArea>
                    <Title>Nome do arquivo:</Title>
                    <InputLesson 
                        type="text"
                        placeholder="Digite o tema da aula"
                        onChange={e => setNameFile(e.target.value)}
                        maxLength={31}
                    />
                </InputArea>
                {hasFile &&
                    <InputArea>
                        <AlertVideo>
                            Arquivo selecionado
                            <ProgessVideo progress={uploadPercent}>{uploadPercent}%</ProgessVideo>
                        </AlertVideo>
                    </InputArea>
                }
                <UploadButton>Adicionar Material
                            <SelectVideo 
                                type="file"
                                onChange={e => handleUploadFile(e.target.files[0])} 
                                accept={formatPermited}
                            />
                </UploadButton>
                <UploadLessonButton onClick={handleSaveLesson}>Enviar Material</UploadLessonButton>
            </UploadLessonArea>
        </PageArea>
    )
};