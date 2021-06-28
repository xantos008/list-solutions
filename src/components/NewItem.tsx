import React from 'react';

import {useContext} from "react";
import {ContextApp} from "../App";

import {ActionType} from "../types/stateType";

const NewItem: React.FC = () => {
    const {changeState} = useContext(ContextApp);

    const addItems = () => {
        if(changeState) {
            changeState({type: ActionType.Add, payload: []})
        }
    }

    return (
        <button type="submit" onClick={addItems}>Add a task</button>
    )
};

export default NewItem;