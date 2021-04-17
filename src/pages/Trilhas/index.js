import React from 'react';
import {
    PageArea,
    TrailArea,
    TrailAbout,
    AboutPhoto,
    Photo,
    AboutInfo,
    InfoContent,
    Title,
    Description,
    TrailListArea,
    TrailCardArea,
    CardHeader,
    CardBody,
    SubTitle,
    TitleCard
} from './styled';

import DirectionsIcon from '@material-ui/icons/Directions';

export default () => {
    return (
        <PageArea>
            <TrailArea>
                <TrailAbout>
                    <AboutPhoto>
                        <Photo src="/assets/resume.png" alt="" />
                    </AboutPhoto>
                    <AboutInfo>
                        <InfoContent>
                            <Title>Seja bem vindo(a) às trilhas</Title>
                            <Description>Aqui você vai encontrar guias passo-a-passo para objetivos específicos.</Description>
                            <Description>Escolha um objetivo e siga item a item.</Description>
                            <Description>Novas trilhas serão adicionadas constantemente.</Description>
                        </InfoContent>
                    </AboutInfo>
                </TrailAbout>
                <TrailListArea>
                    <TrailCardArea>
                        <CardHeader>
                            <DirectionsIcon style={{width: 25, height: 25, color: '#FFF'}} />
                        </CardHeader>
                        <CardBody>
                            <SubTitle>Trilha</SubTitle>
                            <TitleCard>Desenvolvedor FullStack (PHP)</TitleCard>
                        </CardBody>
                    </TrailCardArea>

                    <TrailCardArea>
                        <CardHeader>
                            <DirectionsIcon style={{width: 25, height: 25, color: '#FFF'}} />
                        </CardHeader>
                        <CardBody>
                            <SubTitle>Trilha</SubTitle>
                            <TitleCard>Desenvolvedor Mobile (RN)</TitleCard>
                        </CardBody>
                    </TrailCardArea>
                    <TrailCardArea>
                        <CardHeader>
                            <DirectionsIcon style={{width: 25, height: 25, color: '#FFF'}} />
                        </CardHeader>
                        <CardBody>
                            <SubTitle>Trilha</SubTitle>
                            <TitleCard>Desenvolvedor FrontEnd (React)</TitleCard>
                        </CardBody>
                    </TrailCardArea>
                </TrailListArea>
            </TrailArea>
        </PageArea>
    )
}