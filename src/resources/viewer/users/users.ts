// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InvitationsAPI from './invitations';
import {
  InvitationListParams,
  InvitationListResponse,
  InvitationListResponsesCursorInvitations,
  InvitationRetrieveResponse,
  InvitationRevokeParams,
  InvitationRevokeResponse,
  InvitationUpdateParams,
  InvitationUpdateResponse,
  Invitations,
} from './invitations';
import { APIPromise } from '../../../core/api-promise';
import { CursorUsers, type CursorUsersParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Users extends APIResource {
  invitations: InvitationsAPI.Invitations = new InvitationsAPI.Invitations(this._client);

  /**
   * Retrieves a single user by their unique user ID. Returns the complete user
   * object with all profile information, permissions, and status.
   *
   * @example
   * ```ts
   * const user = await client.viewer.users.retrieve(
   *   'usr_1234567890abcdef1234567890abcdef',
   * );
   * ```
   */
  retrieve(userID: string, options?: RequestOptions): APIPromise<UserRetrieveResponse> {
    return this._client.get(path`/v1/viewer/users/${userID}`, options);
  }

  /**
   * Updates a user's profile information, permissions, and access level. All fields
   * are optional - only provided fields will be updated. Email cannot be changed via
   * API.
   *
   * @example
   * ```ts
   * const user = await client.viewer.users.update(
   *   'usr_1234567890abcdef1234567890abcdef',
   * );
   * ```
   */
  update(
    userID: string,
    body: UserUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserUpdateResponse> {
    return this._client.patch(path`/v1/viewer/users/${userID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of users with optional filtering by access level,
   * email, name, and invitation source. Returns up to 100 users per request.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const userListResponse of client.viewer.users.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<UserListResponsesCursorUsers, UserListResponse> {
    return this._client.getAPIList('/v1/viewer/users', CursorUsers<UserListResponse>, { query, ...options });
  }

  /**
   * Creates a new user in the Viewer system and sends them an invitation email. The
   * user will have the specified permissions and access level. Dashboard access can
   * be enabled to allow login.
   *
   * @example
   * ```ts
   * const response = await client.viewer.users.invite({
   *   canManageStudies: true,
   *   clinicRole: 'Radiologist',
   *   email: 'dr.johnson@hospital.org',
   *   firstName: 'Sarah',
   *   hasDashboardAccess: true,
   *   lastName: 'Johnson',
   *   level: 'member',
   * });
   * ```
   */
  invite(body: UserInviteParams, options?: RequestOptions): APIPromise<UserInviteResponse> {
    return this._client.post('/v1/viewer/users', { body, ...options });
  }

  /**
   * Restores access for a previously deactivated user. The user will regain their
   * original permissions and be able to log in again.
   *
   * @example
   * ```ts
   * const response = await client.viewer.users.reactivate({
   *   userId: 'usr_1234567890abcdef1234567890abcdef',
   * });
   * ```
   */
  reactivate(body: UserReactivateParams, options?: RequestOptions): APIPromise<UserReactivateResponse> {
    return this._client.post('/v1/viewer/users/reactivate', { body, ...options });
  }

  /**
   * Deactivates a user's access to the system. The user will no longer be able to
   * log in or access resources. User data is preserved and can be reactivated later.
   *
   * @example
   * ```ts
   * const response = await client.viewer.users.revokeAccess({
   *   userId: 'usr_1234567890abcdef1234567890abcdef',
   * });
   * ```
   */
  revokeAccess(body: UserRevokeAccessParams, options?: RequestOptions): APIPromise<UserRevokeAccessResponse> {
    return this._client.post('/v1/viewer/users/revoke-access', { body, ...options });
  }
}

export type UserListResponsesCursorUsers = CursorUsers<UserListResponse>;

/**
 * A user in the Viewer system with study management permissions
 */
export interface UserRetrieveResponse {
  canManageStudies: boolean;

  /**
   * User's clinical or organizational role
   */
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

  /**
   * Timestamp when the user was created
   */
  createdAt: string | null;

  /**
   * User's email address for login and notifications
   */
  email: string;

  /**
   * User's first name
   */
  firstName: string;

  /**
   * Whether the user can access the dashboard interface. Required for admin users
   */
  hasDashboardAccess: boolean;

  /**
   * How the user was invited - via dashboard UI or API
   */
  invitedSource: 'dashboard' | 'api';

  /**
   * Timestamp of user's last login, null if never logged in
   */
  lastLoginAt: string | null;

  /**
   * User's last name
   */
  lastName: string;

  /**
   * User access level. 'owner' has full control, 'admin' can manage users/settings,
   * 'member' has standard access
   */
  level: 'owner' | 'admin' | 'member';

  /**
   * Unique user identifier. Format: usr\_{32-hex-chars}
   */
  userId: string;

  /**
   * User's middle name (optional)
   */
  middleName?: string;

  /**
   * User's phone number (10-15 digits, optional)
   */
  phoneNumber?: string;

  /**
   * Name suffix (e.g., 'Jr.', 'Sr.', 'III') - optional
   */
  suffix1?: string;

  /**
   * Additional name suffix (optional)
   */
  suffix2?: string;
}

/**
 * A user in the Viewer system with study management permissions
 */
export interface UserUpdateResponse {
  canManageStudies: boolean;

  /**
   * User's clinical or organizational role
   */
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

  /**
   * Timestamp when the user was created
   */
  createdAt: string | null;

  /**
   * User's email address for login and notifications
   */
  email: string;

  /**
   * User's first name
   */
  firstName: string;

  /**
   * Whether the user can access the dashboard interface. Required for admin users
   */
  hasDashboardAccess: boolean;

  /**
   * How the user was invited - via dashboard UI or API
   */
  invitedSource: 'dashboard' | 'api';

  /**
   * Timestamp of user's last login, null if never logged in
   */
  lastLoginAt: string | null;

  /**
   * User's last name
   */
  lastName: string;

  /**
   * User access level. 'owner' has full control, 'admin' can manage users/settings,
   * 'member' has standard access
   */
  level: 'owner' | 'admin' | 'member';

  /**
   * Unique user identifier. Format: usr\_{32-hex-chars}
   */
  userId: string;

  /**
   * User's middle name (optional)
   */
  middleName?: string;

  /**
   * User's phone number (10-15 digits, optional)
   */
  phoneNumber?: string;

  /**
   * Name suffix (e.g., 'Jr.', 'Sr.', 'III') - optional
   */
  suffix1?: string;

  /**
   * Additional name suffix (optional)
   */
  suffix2?: string;
}

/**
 * A user in the Viewer system with study management permissions
 */
export interface UserListResponse {
  canManageStudies: boolean;

  /**
   * User's clinical or organizational role
   */
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

  /**
   * Timestamp when the user was created
   */
  createdAt: string | null;

  /**
   * User's email address for login and notifications
   */
  email: string;

  /**
   * User's first name
   */
  firstName: string;

  /**
   * Whether the user can access the dashboard interface. Required for admin users
   */
  hasDashboardAccess: boolean;

  /**
   * How the user was invited - via dashboard UI or API
   */
  invitedSource: 'dashboard' | 'api';

  /**
   * Timestamp of user's last login, null if never logged in
   */
  lastLoginAt: string | null;

  /**
   * User's last name
   */
  lastName: string;

  /**
   * User access level. 'owner' has full control, 'admin' can manage users/settings,
   * 'member' has standard access
   */
  level: 'owner' | 'admin' | 'member';

  /**
   * Unique user identifier. Format: usr\_{32-hex-chars}
   */
  userId: string;

  /**
   * User's middle name (optional)
   */
  middleName?: string;

  /**
   * User's phone number (10-15 digits, optional)
   */
  phoneNumber?: string;

  /**
   * Name suffix (e.g., 'Jr.', 'Sr.', 'III') - optional
   */
  suffix1?: string;

  /**
   * Additional name suffix (optional)
   */
  suffix2?: string;
}

/**
 * A user in the Viewer system with study management permissions
 */
export interface UserInviteResponse {
  canManageStudies: boolean;

  /**
   * User's clinical or organizational role
   */
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

  /**
   * Timestamp when the user was created
   */
  createdAt: string | null;

  /**
   * User's email address for login and notifications
   */
  email: string;

  /**
   * User's first name
   */
  firstName: string;

  /**
   * Whether the user can access the dashboard interface. Required for admin users
   */
  hasDashboardAccess: boolean;

  /**
   * How the user was invited - via dashboard UI or API
   */
  invitedSource: 'dashboard' | 'api';

  /**
   * Timestamp of user's last login, null if never logged in
   */
  lastLoginAt: string | null;

  /**
   * User's last name
   */
  lastName: string;

  /**
   * User access level. 'owner' has full control, 'admin' can manage users/settings,
   * 'member' has standard access
   */
  level: 'owner' | 'admin' | 'member';

  /**
   * Unique user identifier. Format: usr\_{32-hex-chars}
   */
  userId: string;

  /**
   * User's middle name (optional)
   */
  middleName?: string;

  /**
   * User's phone number (10-15 digits, optional)
   */
  phoneNumber?: string;

  /**
   * Name suffix (e.g., 'Jr.', 'Sr.', 'III') - optional
   */
  suffix1?: string;

  /**
   * Additional name suffix (optional)
   */
  suffix2?: string;
}

/**
 * Response for reactivating a user in Viewer
 */
export interface UserReactivateResponse {
  success: boolean;

  message?: string;
}

/**
 * Response for revoking user access in Viewer
 */
export interface UserRevokeAccessResponse {
  success: boolean;

  message?: string;
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

  /**
   * User's first name
   */
  firstName?: string;

  /**
   * Whether the user can access the dashboard interface. Required for admin users
   */
  hasDashboardAccess?: boolean;

  /**
   * User's last name
   */
  lastName?: string;

  level?: 'admin' | 'member';

  middleName?: string | null;

  phoneNumber?: string | null;

  suffix1?: string | null;

  suffix2?: string | null;
}

export interface UserListParams extends CursorUsersParams {
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
}

export interface UserInviteParams {
  canManageStudies: boolean;

  /**
   * User's clinical or organizational role
   */
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

  /**
   * User's email address for login and notifications
   */
  email: string;

  /**
   * User's first name
   */
  firstName: string;

  hasDashboardAccess: boolean;

  /**
   * User's last name
   */
  lastName: string;

  level: 'admin' | 'member';

  /**
   * User's middle name (optional)
   */
  middleName?: string;

  /**
   * User's phone number (10-15 digits, optional)
   */
  phoneNumber?: string;

  /**
   * Name suffix (e.g., 'Jr.', 'Sr.', 'III') - optional
   */
  suffix1?: string;

  /**
   * Additional name suffix (optional)
   */
  suffix2?: string;
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
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserListResponse as UserListResponse,
    type UserInviteResponse as UserInviteResponse,
    type UserReactivateResponse as UserReactivateResponse,
    type UserRevokeAccessResponse as UserRevokeAccessResponse,
    type UserListResponsesCursorUsers as UserListResponsesCursorUsers,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserInviteParams as UserInviteParams,
    type UserReactivateParams as UserReactivateParams,
    type UserRevokeAccessParams as UserRevokeAccessParams,
  };

  export {
    Invitations as Invitations,
    type InvitationRetrieveResponse as InvitationRetrieveResponse,
    type InvitationUpdateResponse as InvitationUpdateResponse,
    type InvitationListResponse as InvitationListResponse,
    type InvitationRevokeResponse as InvitationRevokeResponse,
    type InvitationListResponsesCursorInvitations as InvitationListResponsesCursorInvitations,
    type InvitationUpdateParams as InvitationUpdateParams,
    type InvitationListParams as InvitationListParams,
    type InvitationRevokeParams as InvitationRevokeParams,
  };
}
