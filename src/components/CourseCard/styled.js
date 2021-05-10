import styled from 'styled-components';

export const CardArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 200px;
height: 200px;
margin-top: 10px;
background-color: rgba(0, 0, 0, 0.2);
padding: 20px;
cursor: pointer;
transition: all ease .2s;
opacity: ${props => props.status == 'indisponivel' ? '0.4' : 'none'};

&:hover {
background-color: rgba(0, 0, 0, 0.7);
}
`;

export const CardPhoto = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex: 1;
`;

export const Photo = styled.img`
width: 90%;
height: 90%;
`;


export const CardInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 30px;
`;

export const Title = styled.h1`
font-size: 20px;
font-family: 'Helvetica';
color: #FFF;
overflow: hidden;
`;

export const Alert = styled.p`
display: ${props => props.show === true ? 'flex' : 'none'};
font-family: 'Helvetica';
color: #fff;
font-size: 10px;
overflow: hidden;
transition: all ease 1s;
`;