/* eslint-disable no-return-await */
import http from '../../../../infrastructure/http/http';
import UsersRepository from '../../domain/repositories/users_repository';
import UserModel from '../models/user_model';

class UsersRepositoryImpl extends UsersRepository {
    #httpClient;

    constructor(httpClient = http) {
        super();
        this.#httpClient = httpClient;
    }

    async getUsers() {
        const response = await this.#httpClient.get(
            'https://jsonplaceholder.typicode.com/users'
        );
        const users = response.map((user) => {
            return UserModel.fromJson(user);
        });
        return users;
    }
}
export default UsersRepositoryImpl;
