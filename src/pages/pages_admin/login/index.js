import React, { useState } from 'react';
import Api from '../../../services/Api';
import {
    PageArea,
    LoginArea,
    Title,
    FormArea,
    TitleInput,
    EmailInput,
    PasswordInput,
    LoginButton,
    ExternalLink
} from './styled';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSingIn = async () => {
       const isLogged = await Api.signinAdmin(email, password);
       isLogged ? window.location.href = "/admin" : alert('usuário/senha incorreto');
    }

    return (
        <PageArea>
            <LoginArea>
                <Title>ADMIN</Title>
                <FormArea>
                    <TitleInput>E-mail:</TitleInput>
                    <EmailInput 
                        type="email" 
                        placeholder="Digite seu e-mail" 
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <TitleInput>Senha:</TitleInput>
                    <PasswordInput 
                        type="password" 
                        placeholder="Digite sua senha" 
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <LoginButton onClick={handleSingIn}>Entrar</LoginButton>
                </FormArea>
            </LoginArea>
        </PageArea>
    )
}