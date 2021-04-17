import React from 'react';
import { HeaderArea, HeaderContent, HeaderLogo, Title, HeaderNotification, HeaderPanelUser } from './styled';

import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';

export default () => {
    return (
        <HeaderArea>
            <HeaderContent>
                <HeaderLogo>
                    <Title>Ead</Title>
                </HeaderLogo>
                <HeaderNotification>
                    <NotificationsNoneRoundedIcon style={{width: 30, height: 30, color: '#FFF'}}/>
                </HeaderNotification>
                <HeaderPanelUser>

                </HeaderPanelUser>
            </HeaderContent>
        </HeaderArea>
    )
}