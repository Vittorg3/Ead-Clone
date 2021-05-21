import React from 'react';

import {
    Footer,
    FooterContainer,
    FooterInfoArea,
    InfoArea,
    InfoContact,
    IconArea,
    Title,
    SubTitle,
    FooterEmailArea,
    EmailArea,
    FooterLinksArea,
    EmailTitle,
    EmailInput,
    EmailButton,
    LinkArea,
    ExternalLink
} from './styled';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default () => {
    const handleExternalLink = (type) => {
        switch(type) {
            case 'insta':
                window.location.href = 'https://www.instagram.com.br';
            break;
            case 'face':
                window.location.href = 'https://www.facebook.com.br';
            break;
            case 'yout':
                window.location.href = 'https://www.youtube.com.br';
            break;
        }
    };

    return (
        <Footer>
            <FooterContainer>
              <FooterInfoArea>
                <InfoArea>
                  <Title>EAD</Title>
                  <SubTitle>Todos os direitos reservados</SubTitle>
                  <InfoContact>
                      <IconArea onClick={() => handleExternalLink('insta')}>
                        <InstagramIcon style={{width: 23, height: 23, color: '#999999'}}/>
                      </IconArea>
                      <IconArea onClick={() => handleExternalLink('face')}>
                        <FacebookIcon style={{width: 23, height: 23, color: '#999999', marginLeft: '15px'}}/>
                      </IconArea>
                      <IconArea onClick={() => handleExternalLink('yout')}>
                        <YouTubeIcon style={{width: 23, height: 23, color: '#999999', marginLeft: '15px'}}/>
                      </IconArea>   
                    </InfoContact>
                </InfoArea>
              </FooterInfoArea>
              <FooterEmailArea>
                <EmailArea>
                    <div>
                      <EmailTitle>Quer receber todas as novidades?</EmailTitle>
                      <EmailInput type="email" placeholder="Digite seu melhor e-mail"/>
                    </div>
                    <div>
                      <EmailButton>Cadastrar</EmailButton>
                    </div>
                </EmailArea>
              </FooterEmailArea>
              <FooterLinksArea>
                  <LinkArea>
                    <ExternalLink href="/home">Home</ExternalLink>
                    <ExternalLink href="/forum">Forum</ExternalLink>
                  </LinkArea>
              </FooterLinksArea>
            </FooterContainer>
          </Footer>
    )
}