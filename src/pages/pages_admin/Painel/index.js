import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import {
    PageArea,
    PanelArea,
    OptionPanel,
    OptionDescription
} from './styled';

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import AirplayIcon from '@material-ui/icons/Airplay';
import EditIcon from '@material-ui/icons/Edit';

const configPropertyIcon = {
    width: 100,
    height: 100,
    color: '#fff',
    transition: 'all ease .4s'
};

const configPropertyIconHover = {
    width: 100,
    height: 100,
    color: '#00cec9'
};

export default () => {
    const history = useHistory();

    const [whoHoved, setWhoHoved] = useState('');

    const handleToAddCourse = () => {
        history.push('/adicionar/curso');
    };

    const handleToAddModule = () => {
        history.push('/adicionar/modulo');
    };

    const handleToAddLesson = () => {
        history.push('/adicionar/aula');
    };

    const handleToAddFileLesson = () => {
        history.push('/adicionar/material/aula')
    };

    const handleToEditLesson = () => {
        history.push('/editar/aula');
    };

    return (
        <PageArea>
            <PanelArea>
                <OptionPanel 
                    onClick={handleToAddCourse}
                    onMouseEnter={() => setWhoHoved('add-curso')}
                    onMouseLeave={() => setWhoHoved('')}
                >
                    <OndemandVideoIcon 
                        style={
                            whoHoved !== 'add-curso' ?
                            configPropertyIcon :
                            configPropertyIconHover
                        } 
                    />
                    <OptionDescription>Adicionar Curso</OptionDescription>
                </OptionPanel>
                <OptionPanel 
                    onClick={handleToAddModule}
                    onMouseEnter={() => setWhoHoved('add-modulo')}
                    onMouseLeave={() => setWhoHoved('')}
                >
                    <AirplayIcon 
                        style={
                            whoHoved !== 'add-modulo' ?
                            configPropertyIcon :
                            configPropertyIconHover
                        }
                    />
                    <OptionDescription>Adicionar Módulo</OptionDescription>
                </OptionPanel>
                <OptionPanel 
                    onClick={handleToAddLesson}
                    onMouseEnter={() => setWhoHoved('add-aula')}
                    onMouseLeave={() => setWhoHoved('')}
                >
                    <AddToQueueIcon 
                        style={
                            whoHoved !== 'add-aula' ?
                            configPropertyIcon :
                            configPropertyIconHover
                        }
                    />
                    <OptionDescription>Adicionar Aula</OptionDescription>
                </OptionPanel>
                <OptionPanel 
                    onClick={handleToAddFileLesson}
                    onMouseEnter={() => setWhoHoved('add-materias')}
                    onMouseLeave={() => setWhoHoved('')}
                >
                    <InsertDriveFileIcon 
                        style={
                            whoHoved !== 'add-materias' ?   
                            configPropertyIcon : 
                            configPropertyIconHover
                        }
                    />
                    <OptionDescription>Adicionar Materiais</OptionDescription>
                </OptionPanel>
                <OptionPanel 
                    onClick={handleToEditLesson}
                    onMouseEnter={() => setWhoHoved('edit-aula')}
                    onMouseLeave={() => setWhoHoved('')}
                >
                    <EditIcon 
                        style={
                            whoHoved !== 'edit-aula' ?
                            configPropertyIcon : 
                            configPropertyIconHover
                        }
                    />
                    <OptionDescription>Editar Aula</OptionDescription>
                </OptionPanel>
            </PanelArea>
        </PageArea>
    )
}