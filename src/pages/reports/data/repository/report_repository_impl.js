/* eslint-disable no-return-await */
import ReportRepository from '../../domain/repositories/report_repository';

class ReportRepositoryImpl extends ReportRepository {
    #httpClient;

    constructor(httpClient) {
        super();
        this.#httpClient = httpClient;
    }

    async getUsersReport() {
        return await this.httpClient.get('/api/reports/1');
    }
}
export default ReportRepositoryImpl;
