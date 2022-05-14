/* eslint-disable prefer-destructuring */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DefaultPage from '../../../components/templates/DefaultPage';
import UsersRepositoryImpl from '../data/repository/users_repository_impl';

const rows1 = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' }
];

const columns2 = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 }
];

const Users = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const repositoryReports = new UsersRepositoryImpl();
        const usersList = await repositoryReports.getUsers();
        setUsers(usersList);
    };

    useEffect(() => {
        getUsers();
    }, []);

    const columns = React.useMemo(() => {
        const usersList = users.map((item) => {
            return Object.keys(item);
        });
        if (usersList.length > 0) {
            return usersList[0].map((key) => {
                return {
                    field: key,
                    headerName: key.toUpperCase(),
                    width: 150
                };
            });
        }
        return [];
    }, [users]);

    return (
        <DefaultPage>
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid rows={users} columns={columns} />
            </div>
        </DefaultPage>
    );
};

export default Users;
