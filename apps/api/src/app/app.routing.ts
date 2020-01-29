import { AuthModule } from "./auth";
import { ControllerModule } from './controller/controller.module';

export const AppRouting = [
    {
        path: '',
        children: [
            // {
            //     path: '/auth',
            //     module: AuthModule,
            // },
            {
                path: '/controller',
                module: ControllerModule,
            },
        ]
    }
]