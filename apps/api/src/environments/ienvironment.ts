// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EmailModuleOptions } from '../app/email';
import { IFacebookConfig } from './IFacebookConfig';

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

/**
 * environment variables that goes into process.env
 */
export interface Env {
  LOG_LEVEL?: LogLevel;
  [key: string]: string;
}

/**
 * Server Environment
 */
export interface IEnvironment {
  port: number | string;
  host: string;

  production: boolean;
  envName: string;

  env?: Env;
  
  ALLOW_WHITE_LIST?: Array<string>;

  USER_PASSWORD_BCRYPT_SALT_ROUNDS?: number;
  JWT_SECRET?: string;

  database: TypeOrmModuleOptions;

  auth: {
    clientId: string;
    issuerExternalUrl: string;
    issuerInternalUrl?: string;
    jwksUri?: string;
    additionalQueryStringParams?: Partial<{
      scope: string;
      nonce: string;
      audience: string;
      [key: string]: string;
    }>;
  };

  email: EmailModuleOptions;

  facebookConfig: IFacebookConfig;
}
