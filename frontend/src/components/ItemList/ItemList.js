import React from 'react';

const itemList = (props) => (
    <ul>
        {props.items.map(item => {
            return (
                <li key = {item.id}>
                    {item.value}
                    <button onClick = {() => {props.itemDelete(item.id)}}>X</button>
                </li>
            )
        })}
    </ul>
);

export default itemList;