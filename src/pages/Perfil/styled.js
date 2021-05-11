import styled from 'styled-components';

export const PageArea = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 90vh;
`;

export const ProfileArea = styled.div`
width: 700px;
height: 500px;
margin-left: 60px;
`;

export const Title = styled.h1`
color: #fff;
font-family: 'Helvetica';
font-size: 22px;
`;

export const FormArea = styled.div`
display: flex;
flex: 1;
`;

export const AvatarArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
height: 100%;
padding-top: 30px;
`;

export const Avatar = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
overflow: hidden;
box-shadow: 2px 2px 7px 7px rgba(0, 0, 0, 0.2);
`;

export const Photo = styled.img`
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

export const SelectAvatar = styled.input`
opacity: 0;
z-index: -1;
position: absolute;
cursor: pointer;
`;

export const FieldsArea = styled.div`
width: 50%;
height: 100%;
`;

export const InputArea = styled.div`
margin-top: 10px;
`;

export const NameField = styled.p`
color: #fff;
font-family: 'Helvetica';
font-size: 14px;
`;

export const InputProfile = styled.input`
margin-top: 5px;
width: 350px;
height: 40px;
background-color: #fff;
border-radius: 5px;
border: 0;
padding-left: 10px;
font-family: 'Helvetica';
font-size: 15px;
`;

export const SaveButton = styled.button`
color: #fff;
background-color: #000000;
padding: 10px 20px;
border: 0;
border-radius: 5px;
cursor: pointer;
margin-top: 22px;

&:hover {
    background-color: #333333;
}
`;