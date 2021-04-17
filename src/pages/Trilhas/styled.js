import styled from 'styled-components';

export const PageArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 85vh;
`;

export const TrailArea = styled.div`
width: 95%;
max-width: 1228px;
height: 80%;
`;

export const TrailAbout = styled.div`
display: flex;
width: 100%;
height: 160px;
background-color: #202225;
`;

export const AboutPhoto = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 280px;
height: 100%;
`;

export const Photo = styled.img`
width: 140px;
`;

export const AboutInfo = styled.div`
flex: 1;
height: 100%;
`;

export const InfoContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 450px;
height: 100%;
`;

export const Title = styled.h1`
font-size: 22px;
font-family: 'Helvetica';
color: #FFF;
margin-bottom: 10px;
`;

export const Description = styled.p`
font-size: 13px;
font-family: 'Helvetica';
color: #FFF;
line-height: 18px;
`;

export const TrailListArea = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-top: 20px;
`;

export const TrailCardArea = styled.div`
display: flex;
flex-direction: column;
width: 400px;
height: 160px;
background-color: #2F3136;
cursor: pointer;
`;

export const CardHeader = styled.div`
display: flex;
align-items: center;
padding: 0 4px;
width: 100%;
height: 50px;
background-color: #0C3168;
`;

export const CardBody = styled.div`
flex: 1;
padding: 20px;
background-color: #202225;
`;

export const TitleCard = styled.h1`
font-size: 18px;
font-family: 'Helvetica';
color: #FFF;
`;

export const SubTitle = styled.p`
font-family: 'Helvetica';
font-weight: bold;
font-size: 13px;
color: #FFF;
`;