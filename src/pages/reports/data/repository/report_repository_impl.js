/* eslint-disable no-return-await */
import http from '../../../../infrastructure/http/http';

import ReportRepository from '../../domain/repositories/report_repository';
import ReportModel from '../models/report_model';

class ReportRepositoryImpl extends ReportRepository {
    #httpClient;

    constructor(httpClient = http) {
        super();
        this.#httpClient = httpClient;
    }

    async getUsersReport() {
        const response = await this.#httpClient.get(
            'https://jsonplaceholder.typicode.com/users'
        );
        const users = response.map((user) => {
            return ReportModel.fromJson(user);
        });
        return users;
    }
}
export default ReportRepositoryImpl;
