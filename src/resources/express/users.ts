// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  /**
   * Associates an existing user with a customer, granting them access to
   * customer-specific resources and studies.
   *
   * @example
   * ```ts
   * const response = await client.express.users.add(
   *   'cus_1234567890abcdef1234567890abcdef',
   *   { userId: 'usr_1234567890abcdef1234567890abcdef' },
   * );
   * ```
   */
  add(expressCustomerID: string, body: UserAddParams, options?: RequestOptions): APIPromise<UserAddResponse> {
    return this._client.post(path`/v1/express/${expressCustomerID}/users`, { body, ...options });
  }

  /**
   * Removes a user's association with a customer, revoking their access to
   * customer-specific resources. The user account remains active but is no longer
   * linked to this customer.
   *
   * @example
   * ```ts
   * const user = await client.express.users.remove(
   *   'cus_1234567890abcdef1234567890abcdef',
   *   { userId: 'usr_1234567890abcdef1234567890abcdef' },
   * );
   * ```
   */
  remove(
    expressCustomerID: string,
    body: UserRemoveParams,
    options?: RequestOptions,
  ): APIPromise<UserRemoveResponse> {
    return this._client.delete(path`/v1/express/${expressCustomerID}/users`, { body, ...options });
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
  /**
   * User ID to add to the Express customer. Format: usr\_{32-hex-chars}
   */
  userId: string;
}

export interface UserRemoveParams {
  /**
   * User ID to remove from the Express customer. Format: usr\_{32-hex-chars}
   */
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
