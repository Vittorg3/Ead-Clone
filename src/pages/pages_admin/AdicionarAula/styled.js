import styled from 'styled-components';

export const PageArea = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 90vh;
`;

export const UploadLessonArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90%;
max-width: 1200px;
height: 500px;
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

export const Title = styled.p`
color: #fff;
font-family: 'Helvetica';
font-size: 14px;
margin-bottom: 5px;
`;

export const InputArea = styled.div`
width: 300px;
margin: 5px;
`;

export const InputLesson = styled.input`
width: 100%;
height: 40px;
font-size: 14px;
padding-left: 10px;
`;

export const Courses = styled.select`
width: 190px;
height: 30px;
cursor: pointer;
`;

export const OptionCourse = styled.option``;

export const AlertVideo = styled.div`
padding: 10px 20px;
background-color: #ecf0f1;
color: #000;
text-align: center;
font-family: 'Helvetica';
font-size: 18px;
`;

export const UploadLessonButton = styled.button`
color: #fff;
background-color: #000000;
padding: 10px 80px;
border: 0;
border-radius: 5px;
cursor: pointer;
margin-top: 22px;
font-family: 'Helvetica';
font-size: 14px;

&:hover {
    background-color: #333333;
}
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