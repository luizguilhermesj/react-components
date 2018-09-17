import React from 'react';
import cl from 'iconic-cl';

const { ContentBox } = cl.elements;

const DetailsContent = props => {
    return (
        <ContentBox>
            <div style={{padding: "0px 5px"}}>
                <h1>Details content</h1>
            </div>
        </ContentBox>
    );
};

export default DetailsContent;
