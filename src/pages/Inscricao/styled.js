import styled from 'styled-components';

export const PageArea = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
min-width: 660px;
height: calc(100vh - 63px);
`;

export const LoginArea = styled.div`
display: flex;
flex-direction: column;
width: 500px;
height: 500px;
background-color: #202225;
padding: 60px;
text-align: center;
boder-radius: 10px;
`;

export const Title = styled.h1`
font-family: 'Helvetica';
color: #fff;
`;

export const FormArea = styled.div`
display: flex;
flex-direction: column;
`;

export const TitleInput = styled.p`
text-align: left;
color: #fff;
font-family: 'Helvetica';
font-weight: bold;
font-size: 13px;
margin-top: 10px;
`;

export const EmailInput = styled.input`
height: 40px;
background-color: transparent;
border: 0;
border-bottom: 1px solid #999999;
font-family: 'Helvetica';
color: #fff;
font-size: 15px;
`;

export const PasswordInput = styled.input`
height: 40px;
background-color: transparent;
border: 0;
border-bottom: 1px solid #999999;
font-family: 'Helvetica';
color: #fff;
font-size: 15px;
`;

export const LoginButton = styled.button`
background-color: #0265A2;
color: #fff;
margin-top: 30px;
padding: 10px;
outline: 0;
cursor: pointer;
border: 0;
border-radius: 5px;
transition: all ease .1s;

&:hover {
    background-color: #0258A2;
}
`;

export const ExternalLink = styled.a`
text-decoration: none;
color: #fff;
font-family: 'Helvetica';
font-size: 14px;
text-align: right;
margin-top: 20px;
cursor: pointer;

&:hover {
    color: #ff7;
}
`;