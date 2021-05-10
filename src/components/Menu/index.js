import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { MenuArea, IconMainArea, IconArea, Title } from './styled';

import MenuIcon from '@material-ui/icons/Menu';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DirectionsIcon from '@material-ui/icons/Directions';
import AnnouncementIcon from '@material-ui/icons/Announcement';

import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';

import auth from '../../helpers/Authentication';

const configPropertyIcon = {
    width: 30, 
    height: 30, 
    color: '#77797E', 
    marginRight: '5px'
};

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
            case 'support':
                history.replace('/suporte');
                setActive(id);
            break;
            case 'panel': 
                history.replace('/painel');
                setActive(id);
            break;
        }
    };


    const handleClickButtonMain = () => {
        setActiveMain(!activeMain);
    }

    useEffect(() => {
        const url = window.location.href;
        const currentPage = url.substring(url.lastIndexOf('/'));
        
        switch(currentPage) {
            case '/':
                setActive(2);
            break;
            case '/anotacoes':
                setActive(3);
            break;
            case '/trilhas':
                setActive(4);
            break;
            case '/suporte':
                setActive(5);
            break;
            case '/painel':
                setActive(6);
            break;
            case '/curso':
                setActive(6);
            break;
            case '/modulo':
                setActive(6);
            break;
        }
    }, []);

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
                {...!activeMain &&
                    {
                        ['data-tip']:"Home",
                        ['data-for']:"tip-right"
                    }
                }
            >
                <HomeRoundedIcon style={active === 2 ? {...configPropertyIcon, color: '#fff'} : configPropertyIcon}/>
                    <Title mainClicked={activeMain}>Home</Title>
            </IconArea>
            {auth.isLogged() && 
            <>
            <IconArea
                option={3}
                onClick={() => handleOptionClick('anotation', 3)}
                active={active}
                {...!activeMain &&
                    {
                        ['data-tip']:"Anotações",
                        ['data-for']:"tip-right"
                    }
                }
            >
                <AssignmentIcon style={active === 3 ? {...configPropertyIcon, color: '#fff'} : configPropertyIcon}/>
                <Title mainClicked={activeMain}>Anotações</Title>
            </IconArea>
            <IconArea 
                option={4}
                onClick={() => handleOptionClick('direction', 4)}
                active={active}
                {...!activeMain &&
                    {
                        ['data-tip']:"Trilhas",
                        ['data-for']:"tip-right"
                    }
                }
            >
                <DirectionsIcon style={active === 4 ? {...configPropertyIcon, color: '#fff'} : configPropertyIcon}/>
                <Title mainClicked={activeMain}>Trilhas</Title>
            </IconArea>
            <IconArea
                option={5}
                onClick={() => handleOptionClick('support', 5)}
                active={active}
                {...!activeMain &&
                    {
                        ['data-tip']:"Suporte",
                        ['data-for']:"tip-right"
                    }
                }
            >
                <AnnouncementIcon style={active === 5 ? {...configPropertyIcon, color: '#fff'} : configPropertyIcon}/>
                <Title mainClicked={activeMain}>Suporte</Title>
            </IconArea>
            </>
            }
            {auth.isAdmin() && 
                <IconArea
                    option={6}
                    onClick={() => handleOptionClick('panel', 6)}
                    active={active}
                    {...!activeMain &&
                        {
                            ['data-tip']:"Painel",
                            ['data-for']:"tip-right"
                        }
                    }
                >
                    <PersonalVideoIcon style={active === 6 ? {...configPropertyIcon, color: '#fff'} : configPropertyIcon}/>
                    <Title mainClicked={activeMain}>Painel</Title>
                </IconArea>
            }
            
        </MenuArea>
    );
}