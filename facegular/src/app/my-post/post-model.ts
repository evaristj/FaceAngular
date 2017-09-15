import { Person } from '../models/person-model';

export class Post {
    id: number;
    person: Person;
    text: string;
    publish: string;
}
