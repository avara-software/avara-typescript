// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsersAPI from './users';
import { UserCreateParams, UserCreateResponse, UserDeleteParams, UserDeleteResponse, Users } from './users';
import { APIPromise } from '../../core/api-promise';
import { CursorOrganizations, type CursorOrganizationsParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Orgs extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  create(body: OrgCreateParams, options?: RequestOptions): APIPromise<OrgCreateResponse> {
    return this._client.post('/v1/orgs', { body, ...options });
  }

  retrieve(orgID: string, options?: RequestOptions): APIPromise<OrgRetrieveResponse> {
    return this._client.get(path`/v1/orgs/${orgID}`, options);
  }

  update(
    orgID: string,
    body: OrgUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrgUpdateResponse> {
    return this._client.patch(path`/v1/orgs/${orgID}`, { body, ...options });
  }

  list(
    query: OrgListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OrgListResponsesCursorOrganizations, OrgListResponse> {
    return this._client.getAPIList('/v1/orgs', CursorOrganizations<OrgListResponse>, { query, ...options });
  }

  deactivate(orgID: string, options?: RequestOptions): APIPromise<OrgDeactivateResponse> {
    return this._client.post(path`/v1/orgs/${orgID}/deactivate`, options);
  }

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

  createdByUserId?: string | null;

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

  createdByUserId?: string | null;

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

  createdByUserId?: string | null;

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

  createdByUserId?: string | null;

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

  createdByUserId?: string | null;

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

  createdByUserId?: string | null;

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
    type UserCreateResponse as UserCreateResponse,
    type UserDeleteResponse as UserDeleteResponse,
    type UserCreateParams as UserCreateParams,
    type UserDeleteParams as UserDeleteParams,
  };
}
