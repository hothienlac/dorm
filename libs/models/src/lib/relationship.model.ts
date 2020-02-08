import { IUser } from './user.model';

export interface IRelationship {
    id: string;
    student: IUser;
    parent: IUser;
}
