import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUserName';

export interface AppState {
    user: IUserSchema;
    login: ILoginSchema;
}
