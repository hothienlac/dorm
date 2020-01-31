// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// tslint:disable-next-line: no-var-requires
require('dotenv').config();
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { IEnvironment } from './ienvironment';

const databaseConfig: TypeOrmModuleOptions = {
    type: 'mysql', // TODO: process process.env.DB_TYPE value (we need to create different options obj depending on it)
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
    database: process.env.DB_NAME || 'dormitory',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'TrucAnhdethuong123!',
    keepConnectionAlive: true,
    logging: true,
    synchronize: true,
};

console.log(`DB Config: ${JSON.stringify(databaseConfig)}`);

export const environment: IEnvironment = {
    // TODO: port & host used in FB / Google Auth,
    // but we probably should detect that some other way instead of have it as env settings!
    port: process.env.port || 3000,
    host: process.env.host || 'http://localhost',

    production: false,
    envName: 'dev',

    env: {
        LOG_LEVEL: 'debug',
    },

    USER_PASSWORD_BCRYPT_SALT_ROUNDS: 12,
    JWT_SECRET: 'secretKey',

    database: databaseConfig,

    facebookConfig: {
        loginDialogUri: 'https://www.facebook.com/v2.12/dialog/oauth',
        accessTokenUri: 'https://graph.facebook.com/v2.12/oauth/access_token',
        clientId: process.env.FacebookClientId || 'fakeclientid',
        clientSecret: process.env.FacebookClientSecret || 'fakesecret',
        oauthRedirectUri: `${process.env.host}:${process.env.port}/api/auth/facebook/callback`,
        state: '{fbstate}',
    },

};
