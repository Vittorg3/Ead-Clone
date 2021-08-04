import styled from 'styled-components';

export const PageArea = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 90vh;
`;

export const EditLessonArea = styled.div`
display: flex;
justify-content: center;
align-items: left;
width: 90%;
height: 90%;
background-color: #202225;
`;

export const SelectLessonArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
height: 100%;
background-color: #2F3136;
`;

export const InputArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;
margin-top: 20px;
width: 60%;
`;

export const InputTitle = styled.p`
font-family: 'Helvetica';
font-size: 17px;
color: #fff;
`;

export const Courses = styled.select`
width: 200px;
margin-top: 5px;
`;

export const OptionCourse = styled.option`
height: 60px;
`;

export const EditDataLesson = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
height: 100%;
`;

export const Input = styled.input`
height: 35px;
`;

export const UploadButton = styled.label`
color: #000;
background-color: #fff;
padding: 10px 20px;
border: 0;
border-radius: 5px;
cursor: pointer;
margin-top: 10px;
font-family: 'Helvetica';
font-size: 14px;

&:hover {
    background-color: #bdc3c7;
}
`;

export const SelectVideo = styled.input`
opacity: 0;
z-index: -1;
position: absolute;
cursor: pointer;
`;

export const AlertVideo = styled.div`
padding: 10px 20px;
background-color: #ecf0f1;
color: #000;
text-align: center;
font-family: 'Helvetica';
font-size: 18px;
`;

export const ProgessVideo = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding-left: 5px;
color: #fff;
position: relative;
width: ${props => props.progress}%;
height: 30px;
margin-top: 8px;
border: 3px solid #55efc4;
background-color: #2ecc71;
`;