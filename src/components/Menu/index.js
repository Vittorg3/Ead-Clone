import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { MenuArea, IconMainArea, IconArea, Title } from './styled';

import MenuIcon from '@material-ui/icons/Menu';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DirectionsIcon from '@material-ui/icons/Directions';
import ForumIcon from '@material-ui/icons/Forum';

import auth from '../../helpers/Authentication';

export default () => {
    const history = useHistory();

    const [active, setActive] = useState(2);
    const [activeMain, setActiveMain] = useState(false);

    const handleOptionClick = (optionName, id) => {
        switch(optionName) {
            case 'home':
                history.replace('/');
                setActive(id);
            break;
            case 'anotation':
                history.replace('/anotacoes');
                setActive(id);
            break;
            case 'direction':
                history.replace('/trilhas');
                setActive(id);
            break;
            case 'forum':
                history.replace('/forum');
                setActive(id);
            break;
        }
    }

    const handleClickButtonMain = () => {
        setActiveMain(!activeMain);
    }

    return (
        <MenuArea clicked={activeMain}>
            <IconMainArea
                option={1}
                onClick={handleClickButtonMain} 
            >
                <MenuIcon style={{width: 40, height: 50, color: '#FFF'}}/>
            </IconMainArea>
            <IconArea 
                option={2} 
                active={active} 
                onClick={() => handleOptionClick('home', 2)}
            >
                <HomeRoundedIcon style={{width: 30, height: 30, color: '#77797E', marginRight: '5px'}}/>
                    <Title mainClicked={activeMain}>Home</Title>
            </IconArea>
            {auth.isLogged() && 
            <>
            <IconArea
                option={3}
                onClick={() => handleOptionClick('anotation', 3)}
                active={active}
            >
                <AssignmentIcon style={{width: 30, height: 30, color: '#77797E', marginRight: '5px'}}/>
                <Title mainClicked={activeMain}>Anotações</Title>
            </IconArea>
            <IconArea 
                option={4}
                onClick={() => handleOptionClick('direction', 4)}
                active={active}
            >
                <DirectionsIcon style={{width: 30, height: 30, color: '#77797E', marginRight: '5px'}}/>
                <Title mainClicked={activeMain}>Trilhas</Title>
            </IconArea>
            <IconArea
                option={5}
                onClick={() => handleOptionClick('forum', 5)}
                active={active}
            >
                <ForumIcon style={{width: 30, height: 30, color: '#77797E', marginRight: '5px'}}/>
                <Title mainClicked={activeMain}>Forum</Title>
            </IconArea>
            </>
            }
            
        </MenuArea>
    );
}