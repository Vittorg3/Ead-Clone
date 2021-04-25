import styled from 'styled-components';

export const PageArea = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding: 40px 0;
`;

export const CourseArea = styled.div`
display: flex;
width: 95%;
border-radius: 5px;
background-color: #202225;
padding: 30px 20px;
`;

export const CourseVideoArea = styled.div`
display: flex;
flex-direction: column;
width: ${props => props.moduleArea ? '100%' : '70%'};
height: 100%;
`;

export const CourseProgressArea = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 97%;
height: 70px;
padding: 10px;
`;

export const InfoCourse = styled.div``;

export const ShowModuleButton = styled.button`
width: 120px;
height: 35px;
background-color: #0071B7;
color: white;
outline: 0;
border: 0;
border-radius: 5px;
cursor: pointer;
transition: all ease .2s;

&:hover {
    background-color: #0062B7;
}
`;

export const Title = styled.h1`
font-family: 'Helvetica';
font-size: 27px;
color: #FFF;
`;

export const BarProgress = styled.div`
width: 160px;
height: 7px;
background-color: #37393E;
border-radius: 20px;
margin-top: 5px;
`;

export const CoursePlayArea = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 97%;
height: 500px;
`;

export const CoursePlayTitleArea = styled.div`
display: flex;
align-items: center;
width: 97%;
height: 50px;
margin-top: 3px;
padding: 0 3px;
`;

export const PlayTitle = styled.h1`
font-family: 'Helvetica';
color: #FFF;
`;

export const CourseModuleArea = styled.div`
display: ${props => props.close ? 'none' : 'flex'};
flex-direction: column;
flex: 1;
background-color: #37393E;
padding: 30px 20px;
border-radius: 5px;
`;

export const CloseModuleArea = styled.div`
display: flex;
align-items: center;
color: #D5D5D6;
font-family: 'Helvetica';
font-size: 12px;
cursor: pointer;
`;

export const SearchModuleInput = styled.input`
margin-top: 20px;
height: 35px;
border-radius: 5px;
outline: 0;
border: 0;
padding-left: 10px;
background-color: #202225;
color: #fff;
`;

export const  LineDividing = styled.hr`
height: 2px;
background-color: #555555;
outline: 0;
border: 0;
margin-top: 12px;
`;

export const ModuleArea = styled.div`
display: flex;
flex-direction: column;
flex: 1;
padding: 17px 0;
`;
