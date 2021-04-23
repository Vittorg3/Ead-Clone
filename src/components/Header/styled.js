import styled from 'styled-components';
import '../../Fonts.css';

export const HeaderArea = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 63px;
`;

export const HeaderContent = styled.div`
display: flex;
width: 95%;
max-width: 1235px;
height: 100%;
`;

export const HeaderLogo = styled.div`
display: flex;
align-items: center;
flex: 1;
height: 100%;
`;

export const Title = styled.h1`
font-size: 27px;
font-family: 'Viga';
color: white;
font-family: 'Helvetica';
`;

export const HeaderNotification = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 100%;
cursor: pointer;
`; 

export const HeaderPanelUser = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 200px;
height: 100%;
cursor: pointer;
`;

export const AvatarUserArea = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
overflow: hidden;
`;

export const Avatar = styled.img`
width: 100%;
`;

export const UserName = styled.p`
font-family: 'Helvetica';
color: #fff;
margin-left: 15px;
font-size: 15px;
`;

export const PanelUserOptions = styled.div`
display: ${props => props.active ? 'flex' : 'none'};
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
top: 70px;
width: 200px;
height: 90px;
border-radius: 5px;
background-color: #202225;
`;

export const ExternalLink = styled.a`
display: flex;
align-items: center;
width: 90%;
height: 25px;
text-decoration: none;
color: #fff;
margin-top: 5px;
font-family: 'Helvetica';
font-size: 14px;
padding-left: 15px;
border-radius: 5px;

&:hover {
    background-color: #2F3136;
}
`;