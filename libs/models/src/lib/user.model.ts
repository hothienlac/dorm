// Modified code from https://github.com/xmlking/dorm-starter-kit.
// MIT License, see https://github.com/xmlking/dorm-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { IImage } from './image.model';
import { IProfile } from './profile.model';
import { UserRolesEnum } from './roles.enum';
import { IFreeTime } from './free-time.model';
import { IInOutHistory } from './in-out-history.model';

export interface IUser {
  id?: string;
  username: string;
  email: string;
  role: UserRolesEnum;
  free_time?: IFreeTime;
  in_out_history?: IInOutHistory[];
  parents?: IUser[];
  children?: IUser[];
  images?: IImage[];
  profile?: IProfile;
}
