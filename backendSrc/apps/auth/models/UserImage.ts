import { compose, Model, HasUniqueIds } from "sutando";
import { User } from "./User";
import { v4 as uuidv4 } from 'uuid';

export class UserImage extends compose(Model, HasUniqueIds) {
    table = 'user_image';
    primaryKey = 'id';
    keyType = 'string';

    id!: string;
    user_id!: string;
    image_url!: string;
    order!: number;

    newUniqueId() {
        return uuidv4();
    }

    relationUser() {
        return this.belongsTo(User, 'user_id');
    }
}


