import React from 'react';
import logo from './logo.svg';
import './App.css';
import generate from "./helpers/generate";
/*
*
*   I was told that it was impossible to install additional libraries
*   Also tried to show some skills
*
*   Branch main contains default solution branch huge contains solution with high load list
*/

import {useReducer} from "react";
import {Action, State, ContextState} from "./types/stateType";
import {listReducer} from "./reducers/listReducer"
import NewItem from "./components/NewItem";
import ItemsList from "./components/ItemsList";

export const initialState: State = {
    newTask: '',
    items: generate()
}

// <Partial> allows you to create the context without default values.
export const ContextApp = React.createContext<Partial<ContextState>>({});

function App() {

    const [state, changeState] = useReducer<React.Reducer<State, Action>>(listReducer, initialState);

    const ContextState: ContextState = {
        state,
        changeState
    };

    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <ContextApp.Provider value={ContextState}>
                <NewItem />
                <ItemsList />
            </ContextApp.Provider>
        </div>
    )
}


/*
function App() {
    // d - List of items that can be updated with new additional items when the button is pressed
    const [d, set] = React.useState()

    var fill = () => {
        // The function fills the list for render with some items

        [...Array(20)].forEach((_, index) => {
            if (!Array.isArray(d)) {
                // @ts-ignore
                d = []
            }

            // @ts-ignore
            d.push({
                id: index, title: (function () {
                    var result = [];
                    for (var i = 0; i < 10; i++) {
                        result.push('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(Math.random() *
                            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.length)));
                    }
                    var string = result.join('');
                    return string
                })()
            })
        })
        set(d)
    }

    // Fills the List onmount
    fill()

    let render = () => {
        // renders the list of items as components

        if (!Array.isArray(d)) {
            // @ts-ignore
            d = []
        }
        var result:any = []
        // @ts-ignore
        d.forEach(function (i, index) {
            result.push(<div className={'App-item'}>{'Title is:' + i.title + '!'}</div>)
        })
        return result
    }

    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <div>
                <button className={"App-button"} onClick={() => {
                    // The Function adds new items to the existing list

                    if (!Array.isArray(d)) {
                        // @ts-ignore
                        d = []
                    }
                    [...Array(20)].forEach((_, index) => {
                        if (!Array.isArray(d)) {
                            // @ts-ignore
                            d = []
                        }
                        // @ts-ignore
                        d.push({
                            id: index, title: (function () {
                                var result = [];
                                for (var i = 0; i < 10; i++) {
                                    result.push('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(Math.random() *
                                        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.length)));
                                }
                                var string = result.join('');
                                return string
                            })()
                        })
                    })
                    // @ts-ignore
                    set(d)
                }}>
                    Add More
                </button>
            </div>
            <div>
                {render()}
            </div>
        </div>
    );
}
*/
export default App;
