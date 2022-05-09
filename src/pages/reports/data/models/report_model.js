import ReportEntity from '../../domain/entities/report_entity';

class ReportModel extends ReportEntity {
    constructor(id, name) {
        super(id, name);
        this.id = id;
        this.name = name;
    }

    static fromJson(json) {
        return new ReportModel(json.id, json.name);
    }
}

export default ReportModel;
