/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import ReportRepositoryImpl from '../data/repository/report_repository_impl';
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
    const [users, setUsers] = React.useState([]);

    const getUsersReport = async () => {
        const repositoryReports = new ReportRepositoryImpl();
        const usersList = await repositoryReports.getUsersReport();
        setUsers(usersList);
    };

    useEffect(() => {
        getUsersReport();
    }, []);

    return (
        <div>
            <input
                name="username"
                value={`${state.name}`}
                type="number"
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
            {users.map((user) => {
                return (
                    <div key={user.name}>
                        <h1>{user.name}</h1>
                    </div>
                );
            })}
        </div>
    );
};

export default Reports;
