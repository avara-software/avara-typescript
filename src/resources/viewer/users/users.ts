// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InvitationsAPI from './invitations';
import {
  InvitationListParams,
  InvitationListResponse,
  InvitationRetrieveResponse,
  InvitationRevokeParams,
  InvitationRevokeResponse,
  InvitationUpdateParams,
  InvitationUpdateResponse,
  Invitations,
} from './invitations';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Users extends APIResource {
  invitations: InvitationsAPI.Invitations = new InvitationsAPI.Invitations(this._client);

  create(body: UserCreateParams, options?: RequestOptions): APIPromise<UserCreateResponse> {
    return this._client.post('/v1/viewer/users', { body, ...options });
  }

  retrieve(userID: string, options?: RequestOptions): APIPromise<UserRetrieveResponse> {
    return this._client.get(path`/v1/viewer/users/${userID}`, options);
  }

  update(
    userID: string,
    body: UserUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserUpdateResponse> {
    return this._client.patch(path`/v1/viewer/users/${userID}`, { body, ...options });
  }

  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserListResponse> {
    return this._client.get('/v1/viewer/users', { query, ...options });
  }

  reactivate(body: UserReactivateParams, options?: RequestOptions): APIPromise<UserReactivateResponse> {
    return this._client.post('/v1/viewer/users/reactivate', { body, ...options });
  }

  revokeAccess(body: UserRevokeAccessParams, options?: RequestOptions): APIPromise<UserRevokeAccessResponse> {
    return this._client.post('/v1/viewer/users/revoke-access', { body, ...options });
  }
}

export interface UserCreateResponse {
  canManageStudies: boolean;

  clinicRole:
    | 'Radiologist'
    | 'Cardiologist'
    | 'Neurologist'
    | 'Urologist'
    | 'Gynecologist'
    | 'Endocrinologist'
    | 'Doctor'
    | 'Surgeon'
    | 'Physician'
    | 'Physician Assistant'
    | 'Nurse Practitioner'
    | 'Registered Nurse'
    | 'Patient Care Coordinator'
    | 'Front Desk Operator'
    | 'Imaging Technologist'
    | 'PACS Administrator'
    | 'Software Engineer'
    | 'Revenue Cycle Manager'
    | 'Administrative Director'
    | 'Administrative Assistant'
    | 'Other';

  createdAt: string | null;

  email: string;

  firstName: string;

  hasDashboardAccess: boolean;

  invitedSource: 'dashboard' | 'api';

  lastLoginAt: string | null;

  lastName: string;

  level: 'owner' | 'admin' | 'member';

  userId: string;

  middleName?: string;

  phoneNumber?: string;

  suffix1?: string;

  suffix2?: string;
}

export interface UserRetrieveResponse {
  canManageStudies: boolean;

  clinicRole:
    | 'Radiologist'
    | 'Cardiologist'
    | 'Neurologist'
    | 'Urologist'
    | 'Gynecologist'
    | 'Endocrinologist'
    | 'Doctor'
    | 'Surgeon'
    | 'Physician'
    | 'Physician Assistant'
    | 'Nurse Practitioner'
    | 'Registered Nurse'
    | 'Patient Care Coordinator'
    | 'Front Desk Operator'
    | 'Imaging Technologist'
    | 'PACS Administrator'
    | 'Software Engineer'
    | 'Revenue Cycle Manager'
    | 'Administrative Director'
    | 'Administrative Assistant'
    | 'Other';

  createdAt: string | null;

  email: string;

  firstName: string;

  hasDashboardAccess: boolean;

  invitedSource: 'dashboard' | 'api';

  lastLoginAt: string | null;

  lastName: string;

  level: 'owner' | 'admin' | 'member';

  userId: string;

  middleName?: string;

  phoneNumber?: string;

  suffix1?: string;

  suffix2?: string;
}

export interface UserUpdateResponse {
  canManageStudies: boolean;

  clinicRole:
    | 'Radiologist'
    | 'Cardiologist'
    | 'Neurologist'
    | 'Urologist'
    | 'Gynecologist'
    | 'Endocrinologist'
    | 'Doctor'
    | 'Surgeon'
    | 'Physician'
    | 'Physician Assistant'
    | 'Nurse Practitioner'
    | 'Registered Nurse'
    | 'Patient Care Coordinator'
    | 'Front Desk Operator'
    | 'Imaging Technologist'
    | 'PACS Administrator'
    | 'Software Engineer'
    | 'Revenue Cycle Manager'
    | 'Administrative Director'
    | 'Administrative Assistant'
    | 'Other';

  createdAt: string | null;

  email: string;

  firstName: string;

  hasDashboardAccess: boolean;

  invitedSource: 'dashboard' | 'api';

  lastLoginAt: string | null;

  lastName: string;

  level: 'owner' | 'admin' | 'member';

  userId: string;

  middleName?: string;

  phoneNumber?: string;

  suffix1?: string;

  suffix2?: string;
}

export interface UserListResponse {
  hasMore: boolean;

  users: Array<UserListResponse.User>;

  cursor?: string;
}

export namespace UserListResponse {
  export interface User {
    canManageStudies: boolean;

    clinicRole:
      | 'Radiologist'
      | 'Cardiologist'
      | 'Neurologist'
      | 'Urologist'
      | 'Gynecologist'
      | 'Endocrinologist'
      | 'Doctor'
      | 'Surgeon'
      | 'Physician'
      | 'Physician Assistant'
      | 'Nurse Practitioner'
      | 'Registered Nurse'
      | 'Patient Care Coordinator'
      | 'Front Desk Operator'
      | 'Imaging Technologist'
      | 'PACS Administrator'
      | 'Software Engineer'
      | 'Revenue Cycle Manager'
      | 'Administrative Director'
      | 'Administrative Assistant'
      | 'Other';

    createdAt: string | null;

    email: string;

    firstName: string;

    hasDashboardAccess: boolean;

    invitedSource: 'dashboard' | 'api';

    lastLoginAt: string | null;

    lastName: string;

    level: 'owner' | 'admin' | 'member';

    userId: string;

    middleName?: string;

    phoneNumber?: string;

    suffix1?: string;

    suffix2?: string;
  }
}

export interface UserReactivateResponse {
  success: boolean;

  message?: string;
}

export interface UserRevokeAccessResponse {
  success: boolean;

  message?: string;
}

export interface UserCreateParams {
  canManageStudies: boolean;

  clinicRole:
    | 'Radiologist'
    | 'Cardiologist'
    | 'Neurologist'
    | 'Urologist'
    | 'Gynecologist'
    | 'Endocrinologist'
    | 'Doctor'
    | 'Surgeon'
    | 'Physician'
    | 'Physician Assistant'
    | 'Nurse Practitioner'
    | 'Registered Nurse'
    | 'Patient Care Coordinator'
    | 'Front Desk Operator'
    | 'Imaging Technologist'
    | 'PACS Administrator'
    | 'Software Engineer'
    | 'Revenue Cycle Manager'
    | 'Administrative Director'
    | 'Administrative Assistant'
    | 'Other';

  email: string;

  firstName: string;

  hasDashboardAccess: boolean;

  lastName: string;

  level: 'admin' | 'member';

  middleName?: string;

  phoneNumber?: string;

  suffix1?: string;

  suffix2?: string;
}

export interface UserUpdateParams {
  canManageStudies?: boolean;

  clinicRole?:
    | 'Radiologist'
    | 'Cardiologist'
    | 'Neurologist'
    | 'Urologist'
    | 'Gynecologist'
    | 'Endocrinologist'
    | 'Doctor'
    | 'Surgeon'
    | 'Physician'
    | 'Physician Assistant'
    | 'Nurse Practitioner'
    | 'Registered Nurse'
    | 'Patient Care Coordinator'
    | 'Front Desk Operator'
    | 'Imaging Technologist'
    | 'PACS Administrator'
    | 'Software Engineer'
    | 'Revenue Cycle Manager'
    | 'Administrative Director'
    | 'Administrative Assistant'
    | 'Other'
    | null;

  firstName?: string;

  hasDashboardAccess?: boolean;

  lastName?: string;

  level?: 'admin' | 'member';

  middleName?: string | null;

  phoneNumber?: string | null;

  suffix1?: string | null;

  suffix2?: string | null;
}

export interface UserListParams {
  /**
   * Base64 encoded cursor from previous response
   */
  cursor?: string;

  /**
   * Filter by exact email match
   */
  email?: string;

  /**
   * Filter by first name (contains match)
   */
  firstName?: string;

  /**
   * Filter by invitation source
   */
  invitedSource?: 'dashboard' | 'api';

  /**
   * Filter by last name (contains match)
   */
  lastName?: string;

  /**
   * Filter by user level
   */
  level?: 'owner' | 'admin' | 'member';

  /**
   * Number of results to return (1-100)
   */
  limit?: number;
}

export interface UserReactivateParams {
  userId: string;
}

export interface UserRevokeAccessParams {
  userId: string;
}

Users.Invitations = Invitations;

export declare namespace Users {
  export {
    type UserCreateResponse as UserCreateResponse,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserListResponse as UserListResponse,
    type UserReactivateResponse as UserReactivateResponse,
    type UserRevokeAccessResponse as UserRevokeAccessResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserReactivateParams as UserReactivateParams,
    type UserRevokeAccessParams as UserRevokeAccessParams,
  };

  export {
    Invitations as Invitations,
    type InvitationRetrieveResponse as InvitationRetrieveResponse,
    type InvitationUpdateResponse as InvitationUpdateResponse,
    type InvitationListResponse as InvitationListResponse,
    type InvitationRevokeResponse as InvitationRevokeResponse,
    type InvitationUpdateParams as InvitationUpdateParams,
    type InvitationListParams as InvitationListParams,
    type InvitationRevokeParams as InvitationRevokeParams,
  };
}
