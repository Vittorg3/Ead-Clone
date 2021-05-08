import React from 'react';
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
    return (
        <PageArea>
            <PanelArea>
                <OptionPanel>
                    <OndemandVideoIcon style={configPropertyIcon} />
                    <OptionDescription>Adicionar Curso</OptionDescription>
                </OptionPanel>
                <OptionPanel>
                    <AirplayIcon style={configPropertyIcon}/>
                    <OptionDescription>Adicionar Módulo</OptionDescription>
                </OptionPanel>
            </PanelArea>
        </PageArea>
    )
}