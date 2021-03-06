import styled from 'styled-components';

export const Footer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
min-width: 400px;
height: 255px;
background-color: #37393E;

@media screen and (max-width: 900px) {
    height: 400px;
}
`;

export const FooterContainer = styled.div`
display: flex;
width: 100%;
max-width: 1235px;
height: 100%;

@media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
}
`;

export const FooterInfoArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
width: 300px;
height: 100%;

@media screen and (max-width: 900px) {
    align-items: center;
}
`;

export const InfoArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 200px;
`;

export const IconArea = styled.div`
cursor: pointer;
`;

export const Title = styled.h1`
font-size: 27px;
font-family: 'Helvetica';
color: #FFF;
`;

export const SubTitle = styled.p`
color: #99998D;
font-size: 12px;
font-family: 'Helvetica';
`;

export const InfoContact = styled.div`
display: flex;
align-items: center;
width: 100%;
margin-top: 24px;
margin-left: 2px;

@media screen and (max-width: 900px) {
    justify-content: center;
}
`;

export const FooterEmailArea = styled.div`
width: 100%;
height: 100%;
`;

export const EmailArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`;

export const EmailTitle = styled.h1`
font-family: 'Helvetica';
font-weight: normal;
font-size: 12px;
color: #FFF;
margin-bottom: 2px;
`;

export const EmailInput = styled.input`
width: 380px;
height: 40px;
border-radius: 5px;
outline: 0;
border: 0;
font-size: 16px;
padding-left: 5px;

@media screen and (max-width: 900px) {
    
}
`;

export const EmailButton = styled.button`
width: 380px;
height: 40px;
border-radius: 5px;
outline: 0;
border: 0;
padding-left: 5px;
background-color: #000;
color: #FFF;
margin-top: 8px;
cursor: pointer;

@media screen and (max-width: 900px) {
    width: 90px;
    margin-left: 10px;
}
`;

export const FooterLinksArea = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 300px;
height: 100%;
`;

export const LinkArea = styled.div`
display: flex;
flex-direction: column;
height: 100px;
`;

export const ExternalLink = styled.a`
font-family: 'Helvetica';
font-size: 13px;
text-decoration: none;
color: #FFF;
margin-bottom: 3px;
cursor: pointer;
`;