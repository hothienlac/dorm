import { IUser } from './user.model';

export interface IRequestHistory {
    id: string;
    user: IUser;
    time: Date;
    active: boolean;
}
