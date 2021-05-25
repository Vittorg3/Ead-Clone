import React, {useState, useEffect} from 'react';
import { useUserContext } from '../../contexts/UserContextHook';

import Api from '../../services/Api';

import {
    PageArea,
    ProfileArea,
    Title,
    FormArea,
    AvatarArea,
    Avatar,
    FieldsArea,
    Photo,
    UploadButton,
    InputArea,
    NameField,
    InputProfile,
    SaveButton,
    SelectAvatar
} from './styled';

export default () => {
    const [nameBD, setNameBd] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState('');
    
    const [state, dispatch] = useUserContext();

    const handleSubmitForm = async () => {
        let fieldsChanged = {};

        if(name.trim() != '' && name != nameBD) {
            fieldsChanged.name = name;
        }

        if(password.trim() != '' && passwordMatch.trim() != '') {
            if(password != passwordMatch) {
                alert('Digite senhas iguais');
                return;

            } else {
                fieldsChanged.password = password;
            }
        }

        if(!fieldsChanged.name && !fieldsChanged.password) {
            return;
            
        } else {
            const res = await Api.editUser(fieldsChanged);
            console.log(res);
            localStorage.setItem('user', JSON.stringify(res.data.user));

            dispatch({
                type: 'setAll',
                payload: {
                    name: res.data.user.name,
                    email: res.data.user.email,
                    avatar: res.data.user.avatar
                }
            });
        }
        
    };

    const handleSubmitAvatar = async (e) => {
        if(e.target.files[0].size > 35000000) {
            alert('Imagem excede o limite de 35(mb)');
            return;
        }

        const res = await Api.uploadAvatar(e.target.files[0]);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        
        if(res.data) {
            window.location.href = "/perfil";
        }
        
    };

    useEffect(() => {
        const loadProfile = async () => {
            const res = await Api.UserInfo();
            if(res != false) {
                setNameBd(res.user.name);
                setName(res.user.name);
                setEmail(res.user.email);
            }
        }
        loadProfile();
    }, []);

    return (
        <PageArea>
            <ProfileArea>
                <Title>Meu Perfil</Title>
                <FormArea>
                    <AvatarArea>
                        <Avatar>
                            <Photo src={state.avatar == 'default' ? 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg': state.avatar} alt="" />
                        </Avatar>
                        <UploadButton>Trocar Foto
                        <SelectAvatar 
                            type="file" 
                            onChange={e => handleSubmitAvatar(e)} 
                        />
                        </UploadButton>
                        
                    </AvatarArea>
                    <FieldsArea>
                        <InputArea>
                            <NameField>Nome completo:</NameField>
                            <InputProfile 
                                type="text" 
                                defaultValue={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </InputArea>
                        <InputArea>
                            <NameField>E-mail:</NameField>
                            <InputProfile 
                                type="email" 
                                defaultValue={email} 
                                disabled
                            />
                        </InputArea>
                        <InputArea>
                            <NameField>Senha:</NameField>
                            <InputProfile 
                                type="password"
                                onChange={e => setPassword(e.target.value)} 
                            />
                        </InputArea>
                        <InputArea>
                            <NameField>Confirmar Nova Senha:</NameField>
                            <InputProfile 
                                type="password"
                                onChange={e => setPasswordMatch(e.target.value)} 
                            />
                        </InputArea>
                        <SaveButton
                            onClick={handleSubmitForm}
                        >
                            Salvar Alterações
                        </SaveButton>
                    </FieldsArea>
                </FormArea>
            </ProfileArea>
        </PageArea>
    );
}