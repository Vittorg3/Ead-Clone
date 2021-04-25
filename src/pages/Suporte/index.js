import React from 'react';
import {
    PageArea,
    SupporteArea,
    Title,
    DescriptionContact,
    Description,
    SupporteForm,
    TitleField,
    SubjectArea,
    Subject,
    SubjectOption,
    TextArea,
    SupporteText,
    SendButton
} from './styled';

export default () => {
    return (
        <PageArea>
            <SupporteArea>
                <Title>Suporte</Title>
                <Description>Este é o seu canal direto com nossa equipe.</Description>
                <DescriptionContact>Alternativamente, você também pode enviar um e-mail para:</DescriptionContact>
                <DescriptionContact>suporte@b7web.com.br</DescriptionContact>
                <Description>Estamos a sua total disposição.</Description>

                <SupporteForm>
                    <SubjectArea>
                        <TitleField>Assunto:</TitleField>
                        <Subject>
                            <SubjectOption selected value="Dúvida">Dúvida</SubjectOption>
                            <SubjectOption value="Reclamação">Reclamação</SubjectOption>
                            <SubjectOption value="Sugestão">Sugestão</SubjectOption>
                            <SubjectOption value="Pedido">Pedido</SubjectOption>
                        </Subject>
                    </SubjectArea>
                    
                    <TextArea>
                        <TitleField>Mensagem:</TitleField>
                        <SupporteText>

                        </SupporteText>
                    </TextArea>

                    <SendButton>Enviar Mensagem</SendButton>
                </SupporteForm>
            </SupporteArea>
        </PageArea>
    );
}