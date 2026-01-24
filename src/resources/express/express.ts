// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsersAPI from './users';
import { UserAddParams, UserAddResponse, UserRemoveParams, UserRemoveResponse, Users } from './users';
import { APIPromise } from '../../core/api-promise';
import {
  CursorExpressCustomers,
  type CursorExpressCustomersParams,
  PagePromise,
} from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Express extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * Creates a new customer with a unique identifier and name. Customers can be used
   * to group and manage users, studies, and access permissions across the Avara
   * platform.
   *
   * @example
   * ```ts
   * const express = await client.express.create({
   *   expressCustomerName:
   *     'City Medical Center - Radiology Department',
   * });
   * ```
   */
  create(body: ExpressCreateParams, options?: RequestOptions): APIPromise<ExpressCreateResponse> {
    return this._client.post('/v1/express', { body, ...options });
  }

  /**
   * Retrieves a single customer by its unique customer ID. Returns the complete
   * customer object with name, status, and timestamps.
   *
   * @example
   * ```ts
   * const express = await client.express.retrieve(
   *   'cus_1234567890abcdef1234567890abcdef',
   * );
   * ```
   */
  retrieve(expressCustomerID: string, options?: RequestOptions): APIPromise<ExpressRetrieveResponse> {
    return this._client.get(path`/v1/express/${expressCustomerID}`, options);
  }

  /**
   * Updates a customer's properties such as name or other metadata. All fields are
   * optional - only provided fields will be updated.
   *
   * @example
   * ```ts
   * const express = await client.express.update(
   *   'cus_1234567890abcdef1234567890abcdef',
   * );
   * ```
   */
  update(
    expressCustomerID: string,
    body: ExpressUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExpressUpdateResponse> {
    return this._client.patch(path`/v1/express/${expressCustomerID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of customers with optional filtering by name. Returns
   * up to 100 customers per request.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const expressListResponse of client.express.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ExpressListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ExpressListResponsesCursorExpressCustomers, ExpressListResponse> {
    return this._client.getAPIList('/v1/express', CursorExpressCustomers<ExpressListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Deactivates a customer, preventing it from being used for new studies or user
   * assignments. Existing data is preserved and the customer can be reactivated
   * later.
   *
   * @example
   * ```ts
   * const response = await client.express.deactivate(
   *   'cus_1234567890abcdef1234567890abcdef',
   * );
   * ```
   */
  deactivate(expressCustomerID: string, options?: RequestOptions): APIPromise<ExpressDeactivateResponse> {
    return this._client.post(path`/v1/express/${expressCustomerID}/deactivate`, options);
  }

  /**
   * Restores a deactivated customer to active status, allowing it to be used for new
   * studies and user assignments again.
   *
   * @example
   * ```ts
   * const response = await client.express.reactivate(
   *   'cus_1234567890abcdef1234567890abcdef',
   * );
   * ```
   */
  reactivate(expressCustomerID: string, options?: RequestOptions): APIPromise<ExpressReactivateResponse> {
    return this._client.post(path`/v1/express/${expressCustomerID}/reactivate`, options);
  }
}

export type ExpressListResponsesCursorExpressCustomers = CursorExpressCustomers<ExpressListResponse>;

/**
 * An Express customer entity that groups users and studies
 */
export interface ExpressCreateResponse {
  /**
   * Timestamp when the Express customer was created
   */
  createdAt: string | null;

  /**
   * Unique Express customer identifier. Format: cus\_{32-hex-chars}
   */
  expressCustomerId: string;

  /**
   * Name of the Express customer
   */
  expressCustomerName: string;

  /**
   * Whether the Express customer is currently active
   */
  isActive: boolean;

  /**
   * Timestamp when the Express customer was last updated
   */
  updatedAt: string | null;

  /**
   * Number of users currently in this Express customer
   */
  userCount: number;

  /**
   * UUID of the API key used to create this Express customer, for audit tracking
   */
  createdByApiKeyId?: string;

  /**
   * User ID who created this Express customer via dashboard, null if created via API
   * key
   */
  createdByUserId?: string;

  /**
   * Custom key-value metadata for the Express customer. Maximum 50 pairs, keys up to
   * 100 chars, values up to 1000 chars
   */
  metadata?: { [key: string]: string };
}

/**
 * An Express customer entity that groups users and studies
 */
export interface ExpressRetrieveResponse {
  /**
   * Timestamp when the Express customer was created
   */
  createdAt: string | null;

  /**
   * Unique Express customer identifier. Format: cus\_{32-hex-chars}
   */
  expressCustomerId: string;

  /**
   * Name of the Express customer
   */
  expressCustomerName: string;

  /**
   * Whether the Express customer is currently active
   */
  isActive: boolean;

  /**
   * Timestamp when the Express customer was last updated
   */
  updatedAt: string | null;

  /**
   * Number of users currently in this Express customer
   */
  userCount: number;

  /**
   * UUID of the API key used to create this Express customer, for audit tracking
   */
  createdByApiKeyId?: string;

  /**
   * User ID who created this Express customer via dashboard, null if created via API
   * key
   */
  createdByUserId?: string;

  /**
   * Custom key-value metadata for the Express customer. Maximum 50 pairs, keys up to
   * 100 chars, values up to 1000 chars
   */
  metadata?: { [key: string]: string };
}

/**
 * An Express customer entity that groups users and studies
 */
export interface ExpressUpdateResponse {
  /**
   * Timestamp when the Express customer was created
   */
  createdAt: string | null;

  /**
   * Unique Express customer identifier. Format: cus\_{32-hex-chars}
   */
  expressCustomerId: string;

  /**
   * Name of the Express customer
   */
  expressCustomerName: string;

  /**
   * Whether the Express customer is currently active
   */
  isActive: boolean;

  /**
   * Timestamp when the Express customer was last updated
   */
  updatedAt: string | null;

  /**
   * Number of users currently in this Express customer
   */
  userCount: number;

  /**
   * UUID of the API key used to create this Express customer, for audit tracking
   */
  createdByApiKeyId?: string;

  /**
   * User ID who created this Express customer via dashboard, null if created via API
   * key
   */
  createdByUserId?: string;

  /**
   * Custom key-value metadata for the Express customer. Maximum 50 pairs, keys up to
   * 100 chars, values up to 1000 chars
   */
  metadata?: { [key: string]: string };
}

/**
 * An Express customer entity that groups users and studies
 */
export interface ExpressListResponse {
  /**
   * Timestamp when the Express customer was created
   */
  createdAt: string | null;

  /**
   * Unique Express customer identifier. Format: cus\_{32-hex-chars}
   */
  expressCustomerId: string;

  /**
   * Name of the Express customer
   */
  expressCustomerName: string;

  /**
   * Whether the Express customer is currently active
   */
  isActive: boolean;

  /**
   * Timestamp when the Express customer was last updated
   */
  updatedAt: string | null;

  /**
   * Number of users currently in this Express customer
   */
  userCount: number;

  /**
   * UUID of the API key used to create this Express customer, for audit tracking
   */
  createdByApiKeyId?: string;

  /**
   * User ID who created this Express customer via dashboard, null if created via API
   * key
   */
  createdByUserId?: string;

  /**
   * Custom key-value metadata for the Express customer. Maximum 50 pairs, keys up to
   * 100 chars, values up to 1000 chars
   */
  metadata?: { [key: string]: string };
}

/**
 * An Express customer entity that groups users and studies
 */
export interface ExpressDeactivateResponse {
  /**
   * Timestamp when the Express customer was created
   */
  createdAt: string | null;

  /**
   * Unique Express customer identifier. Format: cus\_{32-hex-chars}
   */
  expressCustomerId: string;

  /**
   * Name of the Express customer
   */
  expressCustomerName: string;

  /**
   * Whether the Express customer is currently active
   */
  isActive: boolean;

  /**
   * Timestamp when the Express customer was last updated
   */
  updatedAt: string | null;

  /**
   * Number of users currently in this Express customer
   */
  userCount: number;

  /**
   * UUID of the API key used to create this Express customer, for audit tracking
   */
  createdByApiKeyId?: string;

  /**
   * User ID who created this Express customer via dashboard, null if created via API
   * key
   */
  createdByUserId?: string;

  /**
   * Custom key-value metadata for the Express customer. Maximum 50 pairs, keys up to
   * 100 chars, values up to 1000 chars
   */
  metadata?: { [key: string]: string };
}

/**
 * An Express customer entity that groups users and studies
 */
export interface ExpressReactivateResponse {
  /**
   * Timestamp when the Express customer was created
   */
  createdAt: string | null;

  /**
   * Unique Express customer identifier. Format: cus\_{32-hex-chars}
   */
  expressCustomerId: string;

  /**
   * Name of the Express customer
   */
  expressCustomerName: string;

  /**
   * Whether the Express customer is currently active
   */
  isActive: boolean;

  /**
   * Timestamp when the Express customer was last updated
   */
  updatedAt: string | null;

  /**
   * Number of users currently in this Express customer
   */
  userCount: number;

  /**
   * UUID of the API key used to create this Express customer, for audit tracking
   */
  createdByApiKeyId?: string;

  /**
   * User ID who created this Express customer via dashboard, null if created via API
   * key
   */
  createdByUserId?: string;

  /**
   * Custom key-value metadata for the Express customer. Maximum 50 pairs, keys up to
   * 100 chars, values up to 1000 chars
   */
  metadata?: { [key: string]: string };
}

export interface ExpressCreateParams {
  /**
   * Name of the Express customer to create
   */
  expressCustomerName: string;

  /**
   * Custom key-value metadata for the Express customer. Maximum 50 pairs
   */
  metadata?: { [key: string]: string };
}

export interface ExpressUpdateParams {
  /**
   * Updated name for the Express customer
   */
  expressCustomerName?: string;

  /**
   * Updated metadata. Pass null to clear all metadata
   */
  metadata?: { [key: string]: string } | null;
}

export interface ExpressListParams extends CursorExpressCustomersParams {}

Express.Users = Users;

export declare namespace Express {
  export {
    type ExpressCreateResponse as ExpressCreateResponse,
    type ExpressRetrieveResponse as ExpressRetrieveResponse,
    type ExpressUpdateResponse as ExpressUpdateResponse,
    type ExpressListResponse as ExpressListResponse,
    type ExpressDeactivateResponse as ExpressDeactivateResponse,
    type ExpressReactivateResponse as ExpressReactivateResponse,
    type ExpressListResponsesCursorExpressCustomers as ExpressListResponsesCursorExpressCustomers,
    type ExpressCreateParams as ExpressCreateParams,
    type ExpressUpdateParams as ExpressUpdateParams,
    type ExpressListParams as ExpressListParams,
  };

  export {
    Users as Users,
    type UserAddResponse as UserAddResponse,
    type UserRemoveResponse as UserRemoveResponse,
    type UserAddParams as UserAddParams,
    type UserRemoveParams as UserRemoveParams,
  };
}
