import styled from 'styled-components';

export const ModuleCardArea = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 16px;
`;

export const ModuleInfoArea = styled.div`
display: flex;
flex-direction: column;
padding: 10px 17px;
width: 100%;
max-width: 320px;
background-color: #202225;
border-radius: 5px;
cursor: pointer;
`;

export const TitleArea = styled.div`
display: flex;
align-items: center;
color: #FFF;
font-family: 'Helvetica';
`;

export const Title = styled.h1`
font-size: 14px;
`;

export const ModuleName = styled.p`
font-size: 13px;
margin-left: 4px;
`;

export const CountLessonsArea = styled.div`
display: flex;
margin-top: 3px;
color: #999999;
font-size: 12px;
font-family: 'Helvetica';
`;

export const CountText = styled.p`
padding-left: 3px;
`;

export const ModuleLessonsArea = styled.div`
display: ${props => props.active ? 'flex' : 'none'};
flex-direction: column;
align-items: center;
width: 100%;
`;

export const LessonCardArea = styled.div`
display: flex;
align-items: center;
padding: 0 10px;
width: 90%;
height: 35px;
margin-top: 10px;
border-radius: 5px;
cursor: pointer;

&:hover {
    background-color: #202225;
}
`;

export const NumberLesson = styled.p`
color: #FFF;
font-weight: bold;
font-family: 'Helvetica';
font-size: 14px;
margin-left: 10px;
`;

export const TitleLesson = styled.p`
color: #FFF;
font-family: 'Helvetica';
font-size: 14px;
margin-left: 4px;
`;