// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorInvitations, type CursorInvitationsParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Invitations extends APIResource {
  /**
   * Retrieves a single invitation by its unique invitation ID. Returns the complete
   * invitation details including status, expiration, and associated user
   * information.
   *
   * @example
   * ```ts
   * const invitation =
   *   await client.viewer.users.invitations.retrieve(
   *     'inv_1234567890abcdef1234567890abcdef',
   *   );
   * ```
   */
  retrieve(invitationID: string, options?: RequestOptions): APIPromise<InvitationRetrieveResponse> {
    return this._client.get(path`/v1/viewer/users/invitations/${invitationID}`, options);
  }

  /**
   * Updates a pending invitation's user details and permissions before it is
   * accepted. Only valid for invitations that have not expired or been processed.
   *
   * @example
   * ```ts
   * const invitation =
   *   await client.viewer.users.invitations.update(
   *     'inv_1234567890abcdef1234567890abcdef',
   *   );
   * ```
   */
  update(
    invitationID: string,
    body: InvitationUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvitationUpdateResponse> {
    return this._client.patch(path`/v1/viewer/users/invitations/${invitationID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of user invitations with optional filtering by
   * status, expiration, date range, and user ID. Returns up to 100 invitations per
   * request.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const invitationListResponse of client.viewer.users.invitations.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: InvitationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InvitationListResponsesCursorInvitations, InvitationListResponse> {
    return this._client.getAPIList(
      '/v1/viewer/users/invitations',
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
   *   await client.viewer.users.invitations.revoke();
   * ```
   */
  revoke(
    body: InvitationRevokeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvitationRevokeResponse> {
    return this._client.post('/v1/viewer/users/invitations/revoke', { body, ...options });
  }
}

export type InvitationListResponsesCursorInvitations = CursorInvitations<InvitationListResponse>;

/**
 * A pending user invitation in the Viewer system
 */
export interface InvitationRetrieveResponse {
  /**
   * Whether the invited user will have permission to manage studies
   */
  canManageStudies: boolean;

  /**
   * UUID of the clinic this invitation belongs to
   */
  clinicId: string;

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
   * Timestamp when the invitation was created
   */
  createdAt: string | null;

  /**
   * Email address the invitation was sent to
   */
  email: string;

  /**
   * When the invitation expires, null if no expiration
   */
  expiry: string | null;

  /**
   * Invited user's first name
   */
  firstName: string;

  /**
   * Whether the invited user will have dashboard access
   */
  hasDashboardAccess: boolean;

  /**
   * Unique invitation identifier. Format: inv\_{32-hex-chars}
   */
  invitationId: string;

  /**
   * How the user was invited - via dashboard UI or API
   */
  invitedSource: 'dashboard' | 'api';

  /**
   * User ID of the person who sent the invitation. Format: usr\_{32-hex-chars}. Null
   * if invited via API
   */
  inviterId: string;

  /**
   * Invited user's last name
   */
  lastName: string;

  /**
   * User access level
   */
  level: 'owner' | 'admin' | 'member';

  /**
   * Invitation status
   */
  status: 'sent' | 'accepted' | 'rejected' | 'revoked';

  /**
   * Timestamp when the invitation was last updated
   */
  updatedAt: string | null;

  /**
   * Pre-generated user ID for this invitation. Format: usr\_{32-hex-chars}. This ID
   * is assigned at invitation creation and will become the user's permanent ID upon
   * acceptance
   */
  userId: string;

  /**
   * UUID of the API key used to send this invitation. Null if sent via dashboard
   */
  invitedByApiKeyId?: string;

  /**
   * Invited user's middle name (optional)
   */
  middleName?: string | null;

  /**
   * Invited user's phone number (optional)
   */
  phoneNumber?: string | null;

  /**
   * Name suffix (e.g., 'Jr.', 'MD') - optional
   */
  suffix1?: string | null;

  /**
   * Additional name suffix - optional
   */
  suffix2?: string | null;
}

/**
 * A pending user invitation in the Viewer system
 */
export interface InvitationUpdateResponse {
  /**
   * Whether the invited user will have permission to manage studies
   */
  canManageStudies: boolean;

  /**
   * UUID of the clinic this invitation belongs to
   */
  clinicId: string;

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
   * Timestamp when the invitation was created
   */
  createdAt: string | null;

  /**
   * Email address the invitation was sent to
   */
  email: string;

  /**
   * When the invitation expires, null if no expiration
   */
  expiry: string | null;

  /**
   * Invited user's first name
   */
  firstName: string;

  /**
   * Whether the invited user will have dashboard access
   */
  hasDashboardAccess: boolean;

  /**
   * Unique invitation identifier. Format: inv\_{32-hex-chars}
   */
  invitationId: string;

  /**
   * How the user was invited - via dashboard UI or API
   */
  invitedSource: 'dashboard' | 'api';

  /**
   * User ID of the person who sent the invitation. Format: usr\_{32-hex-chars}. Null
   * if invited via API
   */
  inviterId: string;

  /**
   * Invited user's last name
   */
  lastName: string;

  /**
   * User access level
   */
  level: 'owner' | 'admin' | 'member';

  /**
   * Invitation status
   */
  status: 'sent' | 'accepted' | 'rejected' | 'revoked';

  /**
   * Timestamp when the invitation was last updated
   */
  updatedAt: string | null;

  /**
   * Pre-generated user ID for this invitation. Format: usr\_{32-hex-chars}. This ID
   * is assigned at invitation creation and will become the user's permanent ID upon
   * acceptance
   */
  userId: string;

  /**
   * UUID of the API key used to send this invitation. Null if sent via dashboard
   */
  invitedByApiKeyId?: string;

  /**
   * Invited user's middle name (optional)
   */
  middleName?: string | null;

  /**
   * Invited user's phone number (optional)
   */
  phoneNumber?: string | null;

  /**
   * Name suffix (e.g., 'Jr.', 'MD') - optional
   */
  suffix1?: string | null;

  /**
   * Additional name suffix - optional
   */
  suffix2?: string | null;
}

/**
 * A pending user invitation in the Viewer system
 */
export interface InvitationListResponse {
  /**
   * Whether the invited user will have permission to manage studies
   */
  canManageStudies: boolean;

  /**
   * UUID of the clinic this invitation belongs to
   */
  clinicId: string;

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
   * Timestamp when the invitation was created
   */
  createdAt: string | null;

  /**
   * Email address the invitation was sent to
   */
  email: string;

  /**
   * When the invitation expires, null if no expiration
   */
  expiry: string | null;

  /**
   * Invited user's first name
   */
  firstName: string;

  /**
   * Whether the invited user will have dashboard access
   */
  hasDashboardAccess: boolean;

  /**
   * Unique invitation identifier. Format: inv\_{32-hex-chars}
   */
  invitationId: string;

  /**
   * How the user was invited - via dashboard UI or API
   */
  invitedSource: 'dashboard' | 'api';

  /**
   * User ID of the person who sent the invitation. Format: usr\_{32-hex-chars}. Null
   * if invited via API
   */
  inviterId: string;

  /**
   * Invited user's last name
   */
  lastName: string;

  /**
   * User access level
   */
  level: 'owner' | 'admin' | 'member';

  /**
   * Invitation status
   */
  status: 'sent' | 'accepted' | 'rejected' | 'revoked';

  /**
   * Timestamp when the invitation was last updated
   */
  updatedAt: string | null;

  /**
   * Pre-generated user ID for this invitation. Format: usr\_{32-hex-chars}. This ID
   * is assigned at invitation creation and will become the user's permanent ID upon
   * acceptance
   */
  userId: string;

  /**
   * UUID of the API key used to send this invitation. Null if sent via dashboard
   */
  invitedByApiKeyId?: string;

  /**
   * Invited user's middle name (optional)
   */
  middleName?: string | null;

  /**
   * Invited user's phone number (optional)
   */
  phoneNumber?: string | null;

  /**
   * Name suffix (e.g., 'Jr.', 'MD') - optional
   */
  suffix1?: string | null;

  /**
   * Additional name suffix - optional
   */
  suffix2?: string | null;
}

/**
 * Response for revoking an invitation in Viewer
 */
export interface InvitationRevokeResponse {
  success: boolean;

  message?: string;
}

export interface InvitationUpdateParams {
  canManageStudies?: boolean;

  /**
   * User's clinical or organizational role
   */
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
   * Invited user's first name
   */
  firstName?: string;

  /**
   * Whether the invited user will have dashboard access
   */
  hasDashboardAccess?: boolean;

  /**
   * Invited user's last name
   */
  lastName?: string;

  /**
   * User access level for invite/update (owner cannot be set via API)
   */
  level?: 'admin' | 'member';

  middleName?: string | null;

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
   * Filter by user ID. Format: usr\_{32-hex-chars}
   */
  userId?: string;
}

export interface InvitationRevokeParams {
  /**
   * Invitation ID to revoke. Format: inv\_{32-hex-chars}
   */
  invitationId?: string;

  /**
   * User ID whose pending invitation to revoke. Format: usr\_{32-hex-chars}
   */
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
