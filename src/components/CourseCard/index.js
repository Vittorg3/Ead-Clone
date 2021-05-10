import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { 
    CardArea,
    CardPhoto,
    CardInfo,
    Title,
    Photo,
    Alert
} from './styled';

export default ({ img, title, course, status }) => {
    const history = useHistory();

    const [available, setAvailable] = useState(false);
    
    const handleGoToCourse = () => {
        if(status != 'indisponivel'){
            history.push(`/curso/${course}`);
            return;
        }

        setAvailable(true);
        setTimeout(() => {
            setAvailable(false);
        }, 2000)
    }

    return (
        <CardArea 
            onClick={handleGoToCourse}
            status={status}
        >
            <CardPhoto>
                <Photo 
                    src={img}
                    alt=""
                />
            </CardPhoto>
            <CardInfo>
                <Title>{title}</Title>
                <Alert
                    show={available}
                >
                    curso indisponivel no momento
                </Alert>
            </CardInfo>
        </CardArea>
    )
}