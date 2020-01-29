import {
    AdminModule,
    FingerPrintModule,
    ParentModule,
    SharedModule,
    StudentModule
} from '.';

export const ControllerRouting = [
    {
        path: '',
        children: [
            {
                path: '/admin',
                module: AdminModule,
            },
            {
                path: '/finger-print',
                module: FingerPrintModule,
            },
            {
                path: '/parent',
                module: ParentModule,
            },
            {
                path: '/shared',
                module: SharedModule,
            },
            {
                path: '/student',
                module: StudentModule,
            },
        ]
    }
]