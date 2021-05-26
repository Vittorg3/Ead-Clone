import React from 'react';

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

const configPropertyIcon = {
    width: 100,
    height: 100,
    color: '#fff'
};

const colorHover = 'purple';

export default () => {
    const history = useHistory();

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
    return (
        <PageArea>
            <PanelArea>
                <OptionPanel onClick={handleToAddCourse}>
                    <OndemandVideoIcon style={configPropertyIcon} />
                    <OptionDescription>Adicionar Curso</OptionDescription>
                </OptionPanel>
                <OptionPanel onClick={handleToAddModule}>
                    <AirplayIcon style={configPropertyIcon}/>
                    <OptionDescription>Adicionar Módulo</OptionDescription>
                </OptionPanel>
                <OptionPanel onClick={handleToAddLesson}>
                    <AddToQueueIcon style={configPropertyIcon}/>
                    <OptionDescription>Adicionar Aula</OptionDescription>
                </OptionPanel>
                <OptionPanel onClick={handleToAddFileLesson}>
                    <InsertDriveFileIcon style={configPropertyIcon}/>
                    <OptionDescription>Adicionar Materiais</OptionDescription>
                </OptionPanel>
            </PanelArea>
        </PageArea>
    )
}