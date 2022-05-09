import React, { useEffect } from 'react';
import http from '../../../infrastructure/http';
import ReportRepositoryImpl from '../data/repository/report_repository_impl';

const Reports = () => {
    const manageReports = async () => {
        const repository = new ReportRepositoryImpl(http);
        return await repository.getUsersReport();
    };

    useEffect(() => {
        manageReports();
    }, []);

    return <div>Content</div>;
};

export default Reports;
