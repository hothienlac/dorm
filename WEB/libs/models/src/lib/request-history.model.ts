import { IUser } from './user.model';
import { IRequest } from './request.model';

export interface IRequestHistory {
    id: string;
    request: IRequest;
    user: IUser;
    time: Date;
    active: boolean;
}
