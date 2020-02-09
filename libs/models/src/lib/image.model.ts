import { IUser } from './user.model';
import { ImageTypeEnum } from './image-type.enum';

export interface IImage {
  id?: string;
  title: string;
  type: ImageTypeEnum;
  user: IUser;
  data?: Buffer;
  checksum?: string;
  mimeType?: string;
  size?: number;
  url?: string;
}
