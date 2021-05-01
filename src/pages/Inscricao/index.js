import React, { useState } from 'react';
import Api from '../../services/Api';
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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState('');

    const handleSingIn = async () => {
        if(password != passwordMatch) {
            alert('Digite senhas iguais');
            return;
        }

        if(name.trim() == '') {
            alert('Preencha o campo do nome');
            return;
        }

       const isRegistered = await Api.Signup(email, password, name);
       isRegistered ? window.location.href = "/login" : alert('Ocorreu algum erro');
    }

    return (
        <PageArea>
            <LoginArea>
                <Title>Ead</Title>
                <FormArea>
                    <TitleInput>Nome:</TitleInput>
                        <EmailInput 
                            type="email" 
                            placeholder="Digite seu e-mail" 
                            onChange={e => setName(e.target.value)}
                            required
                        />
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
                    <TitleInput>Confirmar Senha:</TitleInput>
                    <PasswordInput 
                        type="password" 
                        placeholder="Digite sua senha novamente" 
                        onChange={e => setPasswordMatch(e.target.value)}
                        required
                    />
                    <LoginButton onClick={handleSingIn}>Efetuar Inscrição</LoginButton>
                </FormArea>
            </LoginArea>
        </PageArea>
    )
}