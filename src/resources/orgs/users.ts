// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  create(orgID: string, body: UserCreateParams, options?: RequestOptions): APIPromise<UserCreateResponse> {
    return this._client.post(path`/v1/orgs/${orgID}/users`, { body, ...options });
  }

  delete(orgID: string, body: UserDeleteParams, options?: RequestOptions): APIPromise<UserDeleteResponse> {
    return this._client.delete(path`/v1/orgs/${orgID}/users`, { body, ...options });
  }
}

export interface UserCreateResponse {
  success: boolean;

  message?: string;
}

export interface UserDeleteResponse {
  success: boolean;

  message?: string;
}

export interface UserCreateParams {
  userId: string;
}

export interface UserDeleteParams {
  userId: string;
}

export declare namespace Users {
  export {
    type UserCreateResponse as UserCreateResponse,
    type UserDeleteResponse as UserDeleteResponse,
    type UserCreateParams as UserCreateParams,
    type UserDeleteParams as UserDeleteParams,
  };
}
