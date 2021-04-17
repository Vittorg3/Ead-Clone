import React from 'react';
import { 
    CardArea,
    CardPhoto,
    CardInfo,
    Title,
    Photo
} from './styled';

export default () => {
    return (
        <CardArea>
            <CardPhoto>
                <Photo 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                    alt=""
                />
            </CardPhoto>
            <CardInfo>
                <Title>ReactJS</Title>
            </CardInfo>
        </CardArea>
    )
}