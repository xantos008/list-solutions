import {Items} from "./taskType";
import {Dispatch} from "react";

export type State = {
    newTask: string;
    items: Items
}

export enum ActionType {
    Add = 'Add'
}

type ActionStringPayload = {
    type: ActionType.Add,
    payload: []
}

export type Action = ActionStringPayload;

export type ContextState = {
    state: State;
    changeState: Dispatch<Action>
}