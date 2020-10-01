import React from 'react';

const inputItem = (props) => (
    <input
        type = "text"
        placeholder = "Type item here..."
        value = {props.value}
        onChange = {props.updateInput}
    />
        
);

export default inputItem;