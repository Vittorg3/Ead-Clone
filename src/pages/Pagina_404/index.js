import React from 'react';
import { useHistory } from 'react-router-dom';

import {
    PageArea,
    NumberError,
    MessageFriendly,
    BackButton
} from './styled';

export default () => {
    const history = useHistory();

    const handleBackHome = () => {
        history.push('/');
    }

    return (
        <PageArea>
            <NumberError>404</NumberError>
            <MessageFriendly>Oops!</MessageFriendly>
            <BackButton onClick={handleBackHome}>Voltar para o início</BackButton>
        </PageArea>
    )
}