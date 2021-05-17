import styled from 'styled-components';

export const PageArea = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 90vh;
`;

export const AddModuleArea = styled.div`
display: flex;
width: 60%;
max-width: 800px;
height: 500px;
`;

export const AddModuleForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
height: 100%;
`;

export const AlertArea = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 90%;
height: 100px;
margin-top: 10px;
background-color: #ff7675;
border: 1px solid red;
`;

export const AddModuleView = styled.div`
width: 50%;
height: 100%;
overflow-y: auto;
border-radius: 5px;

&::-webkit-scrollbar {
    width: 4px;
}

&::-webkit-scrollbar-track {
    background-color: #77797E;
}

&::-webkit-scrollbar-thumb {
    background-color: #202225;
}
`;

export const InputArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 90%;
margin-top: 10px;
`;

export const Title = styled.p`
color: #fff;
font-family: 'Helvetica';
font-size: 14px;
margin-bottom: 5px;
`;

export const InputForm = styled.input`
height: 40px;
padding-left: 10px;
font-family: 'Helvetica';
font-size: 14px;
`;

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

export const SelectCourses = styled.select`
width: 60%;
height: 30px;
cursor: pointer;
`;

export const OptionCourse = styled.option`
cursor: pointer;
`;

export const TextAlert = styled.p`
font-family: 'Helvetica';
color: #fff;
text-align: center;
`;