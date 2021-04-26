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
                            <Avatar src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" alt=""/>
                        </AvatarUserArea>
                        <UserName>Tester</UserName>
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