/* eslint-disable no-debugger */
import React from 'react';
/* import http from '../../../infrastructure/http';
import ReportRepositoryImpl from '../data/repository/report_repository_impl';
 */

const initialUser = {
    name: '',
    age: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return {
                ...state,
                name: action.name
            };

        case 'SET_USERAGE':
            return {
                ...state,
                age: action.age
            };
        default:
            return state;
    }
};

const Reports = () => {
    const [state, dispatch] = React.useReducer(reducer, initialUser);

    return (
        <div>
            <input
                name="username"
                value={`${state.name}`}
                onChange={(e) => {
                    dispatch({
                        type: 'SET_USERNAME',
                        name: e.target.value
                    });
                }}
            />

            <input
                name="age"
                value={state.age}
                type="number"
                onChange={(e) => {
                    dispatch({
                        type: 'SET_USERAGE',
                        age: e.target.value
                    });
                }}
            />
        </div>
    );
};

export default Reports;
