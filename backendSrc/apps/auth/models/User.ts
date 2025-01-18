import { Model } from "sutando";
import { UserImage } from "./UserImage";

export class User extends Model {
    table = 'user';
    primaryKey = 'id';
    incrementing = false;
    keyType = 'string';

    id!: string;
    is_active: boolean = true;
    name: string | null;
    age: number | null;
    city: string | null;
    coordinates: string | null; // JSON as string
    email: string | null;
    telegram_id: string | null;
    about: string | null;
    work: string | null;
    education: string | null;
    height: number | null;
    weight: number | null;
    gender: 'male' | 'female' | null;
    orientation: 'straight' | 'gay' | 'bisexual' | null;
    languages: string = '[]'; // JSON as string
    looking_for: string = '[]'; // JSON as string
    created_at: string;
    updated_at: string;

    relationImages() {
        return this.hasMany(UserImage, 'user_id');
    }

    //   relationPosts() {
    //     return this.hasMany(Post, 'author_id');
    //   }
}


