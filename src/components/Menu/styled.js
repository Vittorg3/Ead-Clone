import styled from 'styled-components';

export const MenuArea = styled.div`
display: flex;
flex-direction: column;
width: ${props => props.clicked ? '200px' : '63px'};
height: auto;
min-height: 100vh;
background-color: #202225;
transition: all ease .3s;
`;

export const IconMainArea = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 60px;
cursor: pointer;
`;

export const IconArea = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
width: auto;
height: 40px;
margin: 2px 0;
padding: 0 10px;
border-left: ${props => props.option === props.active ? '5px solid #FFF': '5px solid rgba(255, 255, 255, 0.0)'};
cursor: pointer;

&:hover {
    background-color: #2F3136;
    border-left: 5px solid #8F9296;
}
`;

export const Title = styled.p`
color: ${props => props.mainClicked ? '#8F908B' : '#2F3136'};
transition: all ease .4s;
margin-left: 12px;
font-family: 'Helvetica';
`;