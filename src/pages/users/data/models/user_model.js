import UserEntity from '../../domain/entities/user_entity';
import AddressModel from './address_model';

class UserModel extends UserEntity {
    constructor({
        id,
        name,
        username,
        email,
        address,
        phone,
        website,
        company
    }) {
        super({
            id,
            name,
            username,
            email,
            address,
            phone,
            website,
            company
        });
    }

    static fromJson(json) {
        return new UserModel({
            id: json.id,
            name: json.name,
            username: json.username,
            email: json.email,
            address: AddressModel.fromJson(json.address),
            phone: json.phone,
            website: json.website,
            company: json.company
        });
    }
}

export default UserModel;
