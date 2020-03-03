import { IImage } from './image.model';
import { GenderEnum } from './gender.enum';

export interface IProfile {
  id?: string;
  avatar?: IImage;
  gender?: GenderEnum;
  mobilePhone?: string;
}
