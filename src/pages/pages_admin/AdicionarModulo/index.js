import React, { useState, useEffect } from 'react';
import Api from '../../../services/Api';
import {
    PageArea,
    AddModuleArea,
    AddModuleForm,
    AddModuleView,
    InputArea,
    Title,
    InputForm,
    SubmitButton,
    SelectCourses,
    OptionCourse,
    TextAlert,
    AlertArea
} from './styled';

import ModuleCard from '../../../components/ModuleCard';

export default () => {
    const [courses, setCourses] = useState([]);
    const [currentCourse, setCurrentCourse] = useState([]);

    const [courseLoaded, setCourseLoaded] = useState(false);

    const [nameModule, setNameModule] = useState('');

    const [courseSelected, setCourseSelected] = useState('');

    const [erro, setErro] = useState('');
    const [activeErro, setActiveErro] = useState(false);

    const handleLoadCourses = async () => {
        const courses = await Api.courseAvailable();
        setCourses(courses);
    };

    const handleLoadDataCourse = async (nameCourse) => {
        setCourseSelected(nameCourse);

        const dataModule = await Api.dataModule(nameCourse);

        if(dataModule.error) {
            setCourseLoaded(false);
            return;
        }

        dataModule.modules.sort((a, b) => {
            return a.numberModule > b.numberModule ? 1 : a.numberModule < b.numberModule ? -1 : 0;
        });

        setCurrentCourse(dataModule.modules);

        if(dataModule != null && dataModule.modules.length > 0) {
            setCourseLoaded(true);
            
        } else {
            setCourseLoaded(false);
        }
    };

    const handleClickOption = async (title) => {
        await handleLoadDataCourse(title.toLowerCase());
    };

    const handleSubmitForm = async () => {
        const result = await Api.createModule(courseSelected, nameModule);

        if(!result.errors) {
            window.location.href = "/adicionar/modulo";
            return;
        }
        
        if(result.errors) {
            for(let i in result.errors) {
                if(erro.length > 0) {
                    setErro(...erro, result.errors[i]);

                } else {
                    setErro(result.errors[i]);
                }
                
            }
            setActiveErro(true);
            return;
        } 
    };

    useEffect(() => {
        handleLoadCourses();
    }, []);

    return (
        <PageArea>
            <AddModuleArea>
                <AddModuleForm>
                    <InputArea>
                        <Title>Selecione o CURSO desejado:</Title>
                        <SelectCourses onChange={(e) => handleClickOption(e.target.value)}>
                            <OptionCourse></OptionCourse>
                            {courses.map((i, k) => (
                                <OptionCourse 
                                    key={k}
                                >   
                                    {i.title}
                                </OptionCourse>
                            ))}
                            
                        </SelectCourses>
                    </InputArea>
                    <InputArea>
                        <Title>Nome do módulo:</Title>
                        <InputForm 
                            type="text" 
                            placeholder="Digite o tema principal do módulo"
                            onChange={e => setNameModule(e.target.value)} 
                            maxLength={31}
                        />
                    </InputArea>
                    <SubmitButton onClick={handleSubmitForm}>Criar Módulo</SubmitButton>
                    {activeErro && 
                        <AlertArea>
                            <TextAlert>{erro}</TextAlert>
                        </AlertArea>
                    } 
                </AddModuleForm>
                <AddModuleView>
                    {courseLoaded === true &&
                        currentCourse.map((course, k) => ( 
                            <ModuleCard 
                                key={k}
                                titleModule={course.titleModule}
                                lessons={course.lessons}
                                numberModule={course.numberModule}
                                onlyView={true}
                            />
                        ))
                    }
                    {courseLoaded === false &&
                        <TextAlert>Nenhum módulo encontrado</TextAlert>
                    }
                </AddModuleView>
            </AddModuleArea>
        </PageArea>
    )
}