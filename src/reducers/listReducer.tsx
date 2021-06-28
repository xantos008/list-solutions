import React from "react";
import {State, Action, ActionType} from "../types/stateType";

import generate from "../helpers/generate";

export const listReducer: React.Reducer<State, Action> = (state, action):State => {
    switch (action.type) {
        case ActionType.Add: {
            return {...state, items: state.items.concat(generate())}
        }
        default: throw new Error('Unexpected action');
    }
};