import styled from 'styled-components';

export const PageArea = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 90vh;
`;

export const PanelArea = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
width: 700px;
height: 500px;
`;

export const OptionPanel = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 45%;
height: 45%;
transition: all ease .2s;
background-color: #202225;
cursor: pointer;

&:hover {
    background-color: #202220;
}
`;

export const OptionDescription = styled.p`
font-family: 'Helvetica';
color: #fff;
`;

