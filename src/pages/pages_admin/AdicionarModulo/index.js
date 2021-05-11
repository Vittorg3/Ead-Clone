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
    TextAlert
} from './styled';

import ModuleCard from '../../../components/ModuleCard';

export default () => {
    const [courses, setCourses] = useState([]);
    const [currentCourse, setCurrentCourse] = useState([]);

    const [courseLoaded, setCourseLoaded] = useState(false);

    const handleLoadCourses = async () => {
        const courses = await Api.courseAvailable();
        setCourses(courses);
    };

    const handleLoadDataCourse = async (nameCourse) => {
        const dataModule = await Api.dataModule(nameCourse);

        if(dataModule.error) {
            setCourseLoaded(false);
            return;
        }

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
                            type="number" 
                            placeholder="Digite o tema principal do módulo"    
                        />
                    </InputArea>
                    <InputArea>
                        <Title>Módulo de número:</Title>
                        <InputForm 
                            type="text"
                            placeholder="Digite a posição do módulo"
                        />
                    </InputArea>
                    <SubmitButton>Criar Módulo</SubmitButton>
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