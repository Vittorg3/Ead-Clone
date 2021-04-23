import React, { useState } from 'react';
import { 
    HeaderArea, 
    HeaderContent, 
    HeaderLogo, 
    Title, 
    HeaderNotification, 
    HeaderPanelUser,
    AvatarUserArea,
    Avatar,
    UserName,
    PanelUserOptions,
    ExternalLink 
} from './styled';

import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';

import auth from '../../helpers/Authentication';

export default () => {
    const [panelActive, setPanelActive] = useState(false);

    return (
        <HeaderArea>
            <HeaderContent>
                <HeaderLogo>
                    <Title>Ead</Title>
                </HeaderLogo>
                {auth.isLogged() &&
                    <>
                        <HeaderNotification>
                            <NotificationsNoneRoundedIcon style={{width: 30, height: 30, color: '#FFF'}}/>
                        </HeaderNotification>
                
                        <HeaderPanelUser
                            onClick={() => setPanelActive(!panelActive)}
                        >
                        <AvatarUserArea>
                            <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQH3d7wyGBdCJw/profile-displayphoto-shrink_200_200/0/1619127699609?e=1624492800&v=beta&t=kCPr8zrIVjrpgNh70FYIJHxpHiZ73Y4eJsS5OIQjShg" alt=""/>
                        </AvatarUserArea>
                        <UserName>Enoc</UserName>
                        <PanelUserOptions 
                            active={panelActive}
                        >
                            <ExternalLink>Configurações</ExternalLink>
                            <ExternalLink href="/logout">Sair</ExternalLink>
                        </PanelUserOptions>
                        </HeaderPanelUser>
                    </>
                }
            </HeaderContent>
        </HeaderArea>
    )
}