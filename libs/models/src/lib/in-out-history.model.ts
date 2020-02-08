import { IUser } from './user.model';

export interface IInOutHistory {
    id: string;
    user: IUser;
    out: Date;
    in: Date;
}
