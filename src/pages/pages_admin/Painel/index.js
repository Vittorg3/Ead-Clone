import React from 'react';

import { useHistory } from 'react-router-dom';

import {
    PageArea,
    PanelArea,
    OptionPanel,
    OptionDescription
} from './styled';

import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
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
            </PanelArea>
        </PageArea>
    )
}