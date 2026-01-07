// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorInvitations, type CursorInvitationsParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Invitations extends APIResource {
  /**
   * Retrieves a single invitation by its unique invitation ID. Returns the complete
   * invitation details including status, expiration, associated user information,
   * and AutoScribe-specific permissions.
   *
   * @example
   * ```ts
   * const invitation =
   *   await client.autoScribe.users.invitations.retrieve(
   *     'inv_1234567890abcdef1234567890abcdef',
   *   );
   * ```
   */
  retrieve(invitationID: string, options?: RequestOptions): APIPromise<InvitationRetrieveResponse> {
    return this._client.get(path`/v1/autoScribe/users/invitations/${invitationID}`, options);
  }

  /**
   * Updates a pending invitation's user details, permissions, and
   * AutoScribe-specific settings before it is accepted. Only valid for invitations
   * that have not expired or been processed. NPI number is required if enabling
   * report creation.
   *
   * @example
   * ```ts
   * const invitation =
   *   await client.autoScribe.users.invitations.update(
   *     'inv_1234567890abcdef1234567890abcdef',
   *   );
   * ```
   */
  update(
    invitationID: string,
    body: InvitationUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvitationUpdateResponse> {
    return this._client.patch(path`/v1/autoScribe/users/invitations/${invitationID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of user invitations with optional filtering by
   * status, expiration, date range, and user ID. Returns up to 100 invitations per
   * request.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const invitationListResponse of client.autoScribe.users.invitations.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: InvitationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InvitationListResponsesCursorInvitations, InvitationListResponse> {
    return this._client.getAPIList(
      '/v1/autoScribe/users/invitations',
      CursorInvitations<InvitationListResponse>,
      { query, ...options },
    );
  }

  /**
   * Revokes a pending invitation, preventing it from being accepted. Can revoke by
   * invitation ID, user ID, or both. Useful for cancelling invitations sent in
   * error.
   *
   * @example
   * ```ts
   * const response =
   *   await client.autoScribe.users.invitations.revoke();
   * ```
   */
  revoke(
    body: InvitationRevokeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvitationRevokeResponse> {
    return this._client.post('/v1/autoScribe/users/invitations/revoke', { body, ...options });
  }
}

export type InvitationListResponsesCursorInvitations = CursorInvitations<InvitationListResponse>;

/**
 * A pending user invitation in the AutoScribe system
 */
export interface InvitationRetrieveResponse {
  /**
   * Whether the invited user can generate and sign radiology reports. Requires NPI
   * number
   */
  canCreateReports: boolean;

  /**
   * Whether the invited user will have permission to create, update, and manage
   * studies
   */
  canManageStudies: boolean;

  clinicId: string;

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

  expiry: string | null;

  firstName: string;

  hasDashboardAccess: boolean;

  invitationId: string;

  invitedSource: 'dashboard' | 'api';

  inviterId: string | null;

  lastName: string;

  level: 'owner' | 'admin' | 'member';

  status: 'sent' | 'accepted' | 'rejected' | 'revoked';

  updatedAt: string | null;

  userId: string | null;

  invitedByApiKeyId?: string | null;

  middleName?: string | null;

  /**
   * National Provider Identifier - required for users who can create reports
   * (10-digit number)
   */
  npiNumber?: string;

  phoneNumber?: string | null;

  suffix1?: string | null;

  suffix2?: string | null;
}

/**
 * A pending user invitation in the AutoScribe system
 */
export interface InvitationUpdateResponse {
  /**
   * Whether the invited user can generate and sign radiology reports. Requires NPI
   * number
   */
  canCreateReports: boolean;

  /**
   * Whether the invited user will have permission to create, update, and manage
   * studies
   */
  canManageStudies: boolean;

  clinicId: string;

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

  expiry: string | null;

  firstName: string;

  hasDashboardAccess: boolean;

  invitationId: string;

  invitedSource: 'dashboard' | 'api';

  inviterId: string | null;

  lastName: string;

  level: 'owner' | 'admin' | 'member';

  status: 'sent' | 'accepted' | 'rejected' | 'revoked';

  updatedAt: string | null;

  userId: string | null;

  invitedByApiKeyId?: string | null;

  middleName?: string | null;

  /**
   * National Provider Identifier - required for users who can create reports
   * (10-digit number)
   */
  npiNumber?: string;

  phoneNumber?: string | null;

  suffix1?: string | null;

  suffix2?: string | null;
}

/**
 * A pending user invitation in the AutoScribe system
 */
export interface InvitationListResponse {
  /**
   * Whether the invited user can generate and sign radiology reports. Requires NPI
   * number
   */
  canCreateReports: boolean;

  /**
   * Whether the invited user will have permission to create, update, and manage
   * studies
   */
  canManageStudies: boolean;

  clinicId: string;

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

  expiry: string | null;

  firstName: string;

  hasDashboardAccess: boolean;

  invitationId: string;

  invitedSource: 'dashboard' | 'api';

  inviterId: string | null;

  lastName: string;

  level: 'owner' | 'admin' | 'member';

  status: 'sent' | 'accepted' | 'rejected' | 'revoked';

  updatedAt: string | null;

  userId: string | null;

  invitedByApiKeyId?: string | null;

  middleName?: string | null;

  /**
   * National Provider Identifier - required for users who can create reports
   * (10-digit number)
   */
  npiNumber?: string;

  phoneNumber?: string | null;

  suffix1?: string | null;

  suffix2?: string | null;
}

/**
 * Response for revoking an invitation in AutoScribe
 */
export interface InvitationRevokeResponse {
  success: boolean;

  message?: string;
}

export interface InvitationUpdateParams {
  /**
   * Whether the invited user can generate and sign radiology reports. Requires NPI
   * number
   */
  canCreateReports?: boolean;

  /**
   * Whether the invited user will have permission to create, update, and manage
   * studies
   */
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

  npiNumber?: string | null;

  phoneNumber?: string | null;

  suffix1?: string | null;

  suffix2?: string | null;
}

export interface InvitationListParams extends CursorInvitationsParams {
  /**
   * Filter invitations created on or before this date (YYYY-MM-DD)
   */
  endDate?: string;

  /**
   * Filter by expiration status
   */
  expired?: 'all' | 'expired' | 'not-expired';

  /**
   * Filter invitations created on or after this date (YYYY-MM-DD)
   */
  startDate?: string;

  /**
   * Filter by invitation status(es)
   */
  status?: Array<'sent' | 'accepted' | 'rejected' | 'revoked'>;

  /**
   * Filter by user ID. Format: usr\_<32-hex-chars>
   */
  userId?: string;
}

export interface InvitationRevokeParams {
  invitationId?: string;

  userId?: string;
}

export declare namespace Invitations {
  export {
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
