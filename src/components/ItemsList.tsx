import React from 'react';

import {useContext} from "react";
import {ContextApp} from "../App";

const ItemsList: React.FC = () => {

    const {state} = useContext(ContextApp);

    return <>
        {state && state.items.map((item, i) => (
            <div key={i} className={'App-item'}>{'Title is:' + item.title + '!'}</div>
        ))}
    </>
};

export default ItemsList;