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
        NODE_TLS_REJECT_UNAUTHORIZED: '0',
    },

    ALLOW_WHITE_LIST: ['::ffff:127.0.0.1', '::1'],

    USER_PASSWORD_BCRYPT_SALT_ROUNDS: 12,
    JWT_SECRET: 'secretKey',

    database: databaseConfig,

    auth: {
        clientId: process.env.OIDC_CLIENT_ID || '791772336084-vkt37abstm1du92ofdmhgi30vgd7t0oa.apps.googleusercontent.com',
        issuerExternalUrl: process.env.OIDC_ISSUER_EXTERNAL_URL || 'https://accounts.google.com',
        issuerInternalUrl: process.env.OIDC_ISSUER_INTERNAL_URL || 'https://accounts.google.com',
        jwksUri: process.env.OIDC_JWKS_URL || 'https://www.googleapis.com/oauth2/v3/certs',
        additionalQueryStringParams: { scope: 'openid profile email' },

        GOOGLE_APPLICATION_CREDENTIALS: 'google-service-account.json',
        

        FACEBOOK_CONFIG: 'facebook-config.json'
    },

    email: {
        transport: {
        host: 'mail.google.com',
        port: 25,
        // secure: false
        },
        defaults: {
        from: '"sumo demo" <sumo@demo.com>',
        },
        templateDir: 'apps/api/src/assets/email-templates',
    },

    facebookConfig: {
        loginDialogUri: 'https://www.facebook.com/v2.12/dialog/oauth',
        accessTokenUri: 'https://graph.facebook.com/v2.12/oauth/access_token',
        clientId: process.env.FacebookClientId || 'fakeclientid',
        clientSecret: process.env.FacebookClientSecret || 'fakesecret',
        oauthRedirectUri: `${process.env.host}:${process.env.port}/api/auth/facebook/callback`,
        state: '{fbstate}',
    },

};
