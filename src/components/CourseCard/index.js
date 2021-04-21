import React from 'react';
import { useHistory } from 'react-router-dom';

import { 
    CardArea,
    CardPhoto,
    CardInfo,
    Title,
    Photo
} from './styled';

export default ({ img, title, course }) => {
    const history = useHistory();
    
    const handleGoToCourse = () => {
        history.push(`/curso/${course}`);
    }

    return (
        <CardArea onClick={handleGoToCourse}>
            <CardPhoto>
                <Photo 
                    src={img}
                    alt=""
                />
            </CardPhoto>
            <CardInfo>
                <Title>{title}</Title>
            </CardInfo>
        </CardArea>
    )
}