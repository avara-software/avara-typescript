// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsersAPI from './users';
import { UserAddParams, UserAddResponse, UserRemoveParams, UserRemoveResponse, Users } from './users';
import { APIPromise } from '../../core/api-promise';
import { CursorOrganizations, type CursorOrganizationsParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Orgs extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * Creates a new organization with a unique identifier and name. Organizations can
   * be used to group and manage users, studies, and access permissions across the
   * Avara platform.
   *
   * @example
   * ```ts
   * const org = await client.orgs.create({ orgName: 'x' });
   * ```
   */
  create(body: OrgCreateParams, options?: RequestOptions): APIPromise<OrgCreateResponse> {
    return this._client.post('/v1/orgs', { body, ...options });
  }

  /**
   * Retrieves a single organization by its unique organization ID. Returns the
   * complete organization object with name, status, and timestamps.
   *
   * @example
   * ```ts
   * const org = await client.orgs.retrieve(
   *   'org_1234567890abcdef1234567890abcdef',
   * );
   * ```
   */
  retrieve(orgID: string, options?: RequestOptions): APIPromise<OrgRetrieveResponse> {
    return this._client.get(path`/v1/orgs/${orgID}`, options);
  }

  /**
   * Updates an organization's properties such as name or other metadata. All fields
   * are optional - only provided fields will be updated.
   *
   * @example
   * ```ts
   * const org = await client.orgs.update(
   *   'org_1234567890abcdef1234567890abcdef',
   * );
   * ```
   */
  update(
    orgID: string,
    body: OrgUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrgUpdateResponse> {
    return this._client.patch(path`/v1/orgs/${orgID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of organizations with optional filtering by name.
   * Returns up to 100 organizations per request.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const orgListResponse of client.orgs.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: OrgListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OrgListResponsesCursorOrganizations, OrgListResponse> {
    return this._client.getAPIList('/v1/orgs', CursorOrganizations<OrgListResponse>, { query, ...options });
  }

  /**
   * Deactivates an organization, preventing it from being used for new studies or
   * user assignments. Existing data is preserved and the organization can be
   * reactivated later.
   *
   * @example
   * ```ts
   * const response = await client.orgs.deactivate(
   *   'org_1234567890abcdef1234567890abcdef',
   * );
   * ```
   */
  deactivate(orgID: string, options?: RequestOptions): APIPromise<OrgDeactivateResponse> {
    return this._client.post(path`/v1/orgs/${orgID}/deactivate`, options);
  }

  /**
   * Restores a deactivated organization to active status, allowing it to be used for
   * new studies and user assignments again.
   *
   * @example
   * ```ts
   * const response = await client.orgs.reactivate(
   *   'org_1234567890abcdef1234567890abcdef',
   * );
   * ```
   */
  reactivate(orgID: string, options?: RequestOptions): APIPromise<OrgReactivateResponse> {
    return this._client.post(path`/v1/orgs/${orgID}/reactivate`, options);
  }
}

export type OrgListResponsesCursorOrganizations = CursorOrganizations<OrgListResponse>;

/**
 * An organization entity that groups users and studies
 */
export interface OrgCreateResponse {
  createdAt: string | null;

  isActive: boolean;

  orgId: string;

  orgName: string;

  updatedAt: string | null;

  userCount: number;

  createdByApiKeyId?: string | null;

  createdByUserId?: string;

  metadata?: { [key: string]: string };
}

/**
 * An organization entity that groups users and studies
 */
export interface OrgRetrieveResponse {
  createdAt: string | null;

  isActive: boolean;

  orgId: string;

  orgName: string;

  updatedAt: string | null;

  userCount: number;

  createdByApiKeyId?: string | null;

  createdByUserId?: string;

  metadata?: { [key: string]: string };
}

/**
 * An organization entity that groups users and studies
 */
export interface OrgUpdateResponse {
  createdAt: string | null;

  isActive: boolean;

  orgId: string;

  orgName: string;

  updatedAt: string | null;

  userCount: number;

  createdByApiKeyId?: string | null;

  createdByUserId?: string;

  metadata?: { [key: string]: string };
}

/**
 * An organization entity that groups users and studies
 */
export interface OrgListResponse {
  createdAt: string | null;

  isActive: boolean;

  orgId: string;

  orgName: string;

  updatedAt: string | null;

  userCount: number;

  createdByApiKeyId?: string | null;

  createdByUserId?: string;

  metadata?: { [key: string]: string };
}

/**
 * An organization entity that groups users and studies
 */
export interface OrgDeactivateResponse {
  createdAt: string | null;

  isActive: boolean;

  orgId: string;

  orgName: string;

  updatedAt: string | null;

  userCount: number;

  createdByApiKeyId?: string | null;

  createdByUserId?: string;

  metadata?: { [key: string]: string };
}

/**
 * An organization entity that groups users and studies
 */
export interface OrgReactivateResponse {
  createdAt: string | null;

  isActive: boolean;

  orgId: string;

  orgName: string;

  updatedAt: string | null;

  userCount: number;

  createdByApiKeyId?: string | null;

  createdByUserId?: string;

  metadata?: { [key: string]: string };
}

export interface OrgCreateParams {
  orgName: string;

  metadata?: { [key: string]: string };
}

export interface OrgUpdateParams {
  metadata?: { [key: string]: string } | null;

  orgName?: string;
}

export interface OrgListParams extends CursorOrganizationsParams {}

Orgs.Users = Users;

export declare namespace Orgs {
  export {
    type OrgCreateResponse as OrgCreateResponse,
    type OrgRetrieveResponse as OrgRetrieveResponse,
    type OrgUpdateResponse as OrgUpdateResponse,
    type OrgListResponse as OrgListResponse,
    type OrgDeactivateResponse as OrgDeactivateResponse,
    type OrgReactivateResponse as OrgReactivateResponse,
    type OrgListResponsesCursorOrganizations as OrgListResponsesCursorOrganizations,
    type OrgCreateParams as OrgCreateParams,
    type OrgUpdateParams as OrgUpdateParams,
    type OrgListParams as OrgListParams,
  };

  export {
    Users as Users,
    type UserAddResponse as UserAddResponse,
    type UserRemoveResponse as UserRemoveResponse,
    type UserAddParams as UserAddParams,
    type UserRemoveParams as UserRemoveParams,
  };
}
