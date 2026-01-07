// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  add(orgID: string, body: UserAddParams, options?: RequestOptions): APIPromise<UserAddResponse> {
    return this._client.post(path`/v1/orgs/${orgID}/users`, { body, ...options });
  }

  remove(orgID: string, body: UserRemoveParams, options?: RequestOptions): APIPromise<UserRemoveResponse> {
    return this._client.delete(path`/v1/orgs/${orgID}/users`, { body, ...options });
  }
}

/**
 * Standard success response with optional message
 */
export interface UserAddResponse {
  success: boolean;

  message?: string;
}

/**
 * Standard success response with optional message
 */
export interface UserRemoveResponse {
  success: boolean;

  message?: string;
}

export interface UserAddParams {
  userId: string;
}

export interface UserRemoveParams {
  userId: string;
}

export declare namespace Users {
  export {
    type UserAddResponse as UserAddResponse,
    type UserRemoveResponse as UserRemoveResponse,
    type UserAddParams as UserAddParams,
    type UserRemoveParams as UserRemoveParams,
  };
}
