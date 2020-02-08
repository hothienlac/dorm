import { IUser } from './user.model';

export interface IRequest {
    id: string;
    user: IUser;
    in: Date;
    out: Date;
    parent_active: boolean;
    admin_active: boolean;
}
