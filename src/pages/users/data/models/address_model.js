import AddressEntity from '../../domain/entities/address_entity';

class AddressModel extends AddressEntity {
    constructor({ street, suite, city, zipCode }) {
        super({ street, suite, city, zipCode });
    }

    static fromJson(json) {
        return new AddressModel({
            city: json.city,
            street: json.street,
            suite: json.suite,
            zipCode: json.zipCode
        });
    }
}

export default AddressModel;
