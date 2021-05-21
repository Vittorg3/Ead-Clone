import styled from 'styled-components';

export const PageArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
min-width: 660px;
height: 90vh;
`;

export const NumberError = styled.p`
font-family: 'Helvetica';
font-size: 150px;
color: #fff;
`;

export const MessageFriendly = styled.p`
font-family: 'Helvetica';
color: orange;
font-size: 50px;
`;

export const BackButton = styled.button`
background-color: transparent;
outline: 0;
border: 1px solid #fff;
color: #fff;
padding: 10px 20px;
border-radius: 10px;
margin-top: 40px;
cursor: pointer;

&:hover {
    border: 1px solid #CECECE;
    color: #CECECE;
}
`;