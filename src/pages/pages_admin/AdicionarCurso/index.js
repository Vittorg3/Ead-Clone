import React, { useState, useEffect } from 'react';
import Api from '../../../services/Api';
import  {
    PageArea,
    AddCourseArea,
    AddImageArea,
    AddImage,
    UploadButton,
    SelectPhoto,
    AddFormArea,
    AreaInput,
    Title,
    InputCourse,
    Status,
    StatusOption,
    SubmitButton
} from './styled';

export default () => { 
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState();
    const [status, setStatus] = useState('indisponivel');

    const [preview, setPreview] = useState('');

    const changeTitleAndName = (e) => {
        setTitle(e.target.value);
        setName(e.target.value.toLowerCase()); //tirar os espações que sobram
    };

    const handleUploadImage = (e) => {
        const img = e.target.files[0];

        const fileReader = new FileReader();
        fileReader.onloadend = function() {
            setPreview(fileReader.result);
        };

        fileReader.readAsDataURL(img);

        setImage(e.target.files[0]);
    };

    const handleSubmitForm = async () => {
        if(['' && null].includes(title.trim() && name.trim() && status.trim() && image)) {
            alert('preencha todos os campos!');
            return;
        }

        const data = new FormData();
        await data.append('title', title);
        await data.append('name', name);
        await data.append('banner', image);
        await data.append('status', status);

        const result = await Api.createCourse(data);
        if(!result.error) {
            alert('curso salvo!');
            return;
        }

        alert(result.error);
    }

    return (
        <PageArea>
            <AddCourseArea>
                <AddImageArea>
                    <AddImage 
                        src={preview != '' ? preview : ''} 
                        alt="" 
                    />
                </AddImageArea>
                <UploadButton>Adicionar Foto do Curso
                        <SelectPhoto 
                            type="file"
                            onChange={e => handleUploadImage(e)} 
                        />
                        </UploadButton>
                <AddFormArea>
                    <AreaInput>
                        <Title>Titulo:</Title>
                        <InputCourse 
                            type="text" 
                            placeholder="Digite o titulo para o curso" 
                            onChange={e => changeTitleAndName(e)}    
                        />
                    </AreaInput>
                    <AreaInput>
                        <Title>Nome do curso:</Title>
                        <InputCourse 
                            type="text" 
                            placeholder="Nome do curso para futura edição"
                            value={title.toLowerCase()}
                            disabled
                        />
                    </AreaInput>
                    <AreaInput>
                        <Title>Status:</Title>
                        <Status onChange={e => setStatus(e.target.value)}>
                            <StatusOption value="indisponivel">Indisponível</StatusOption>
                            <StatusOption value="disponivel">Disponível</StatusOption>
                        </Status>
                    </AreaInput>
                    <SubmitButton onClick={handleSubmitForm}>Salvar Curso</SubmitButton>
                </AddFormArea>
            </AddCourseArea>
        </PageArea>
    );
}