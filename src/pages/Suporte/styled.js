import styled from 'styled-components';

export const PageArea = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 90vh;
`;

export const SupporteArea = styled.div`
display: flex;
flex-direction: column;
width: 600px;
height: 500px;
margin-left: 50px;
padding: 20px;
`;

export const Title = styled.h2`
color: #fff;
font-family: 'Helvetica';
`;

export const Description = styled.p`
color: #fff;
font-family: 'Helvetica';
font-size: 13px;
margin: 20px 0;
`;

export const DescriptionContact = styled.p`
color: #fff;
font-family: 'Helvetica';
font-size: 13px;
line-height: 19px;
`;

export const SupporteForm = styled.div`
display: flex;
flex-direction: column;
`;

export const SubjectArea = styled.div`
display: flex;
flex-direction: column;
`;

export const TitleField = styled.p`
color: #fff;
font-family: 'Helvetica';
font-size: 13px;
margin-bottom: 5px;
`;

export const Subject = styled.select`
height: 40px;
border-radius: 5px;
padding-left: 10px;
`;

export const SubjectOption = styled.option``;

export const TextArea = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
`;

export const SupporteText = styled.textarea`
resize: none;
height: 150px;
border-radius: 5px;
padding: 10px;
font-size: 16px;
`;

export const SendButton = styled.button`
width: 150px;
height: 35px;
background-color: #000000;
border-radius: 5px;
color: #fff;
border: 0;
margin-top: 10px;
transition: all ease .1s;
cursor: pointer;

&:hover {
background-color: #333333;
}
`;