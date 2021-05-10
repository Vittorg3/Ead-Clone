import styled from 'styled-components';

export const PageArea = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 90vh;
`;

export const AddCourseArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 600px;
height: 550px;
`;

export const AddImageArea = styled.div`
width: 180px;
height: 180px;
border: 1px solid black;
overflow: hidden;
`;

export const AddImage = styled.img`
width: 100%;
`;

export const UploadButton = styled.label`
color: #fff;
background-color: #000000;
padding: 10px 20px;
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

export const SelectPhoto = styled.input`
opacity: 0;
z-index: -1;
position: absolute;
cursor: pointer;
`;

export const AddFormArea = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex: 1;
width: 100%;
padding: 10px 0;
`;

export const AreaInput = styled.div`
width: 90%;
margin-top: 10px;
`;

export const Title = styled.p`
font-family: 'Helvetica';
font-size: 14px;
color: #fff;
`;

export const InputCourse = styled.input`
width: 98%;
height: 40px;
padding-left: 10px;
font-family: 'Helvetica';
font-size: 14px;
`;

export const Status = styled.select`
height: 40px;
border-radius: 5px;
padding-left: 10px;
cursor: pointer;
margin-top: 4px;
`;

export const StatusOption = styled.option``;

export const SubmitButton = styled.button`
color: #fff;
background-color: #000000;
padding: 10px 20px;
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
