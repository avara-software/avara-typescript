// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Invitations extends APIResource {
  retrieve(invitationID: string, options?: RequestOptions): APIPromise<InvitationRetrieveResponse> {
    return this._client.get(path`/v1/viewer/users/invitations/${invitationID}`, options);
  }

  update(
    invitationID: string,
    body: InvitationUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvitationUpdateResponse> {
    return this._client.patch(path`/v1/viewer/users/invitations/${invitationID}`, { body, ...options });
  }

  list(
    query: InvitationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvitationListResponse> {
    return this._client.get('/v1/viewer/users/invitations', { query, ...options });
  }

  revoke(
    body: InvitationRevokeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvitationRevokeResponse> {
    return this._client.post('/v1/viewer/users/invitations/revoke', { body, ...options });
  }
}

export interface InvitationRetrieveResponse {
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

  phoneNumber?: string | null;

  suffix1?: string | null;

  suffix2?: string | null;
}

export interface InvitationUpdateResponse {
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

  phoneNumber?: string | null;

  suffix1?: string | null;

  suffix2?: string | null;
}

export interface InvitationListResponse {
  hasMore: boolean;

  invitations: Array<InvitationListResponse.Invitation>;

  cursor?: string;
}

export namespace InvitationListResponse {
  export interface Invitation {
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

    phoneNumber?: string | null;

    suffix1?: string | null;

    suffix2?: string | null;
  }
}

export interface InvitationRevokeResponse {
  success: boolean;

  message?: string;
}

export interface InvitationUpdateParams {
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

export interface InvitationListParams {
  /**
   * Base64 encoded cursor from previous response
   */
  cursor?: string;

  /**
   * Filter invitations created on or before this date (YYYY-MM-DD)
   */
  endDate?: string;

  /**
   * Filter by expiration status
   */
  expired?: 'all' | 'expired' | 'not-expired';

  /**
   * Number of results to return (1-100)
   */
  limit?: number;

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
    type InvitationUpdateParams as InvitationUpdateParams,
    type InvitationListParams as InvitationListParams,
    type InvitationRevokeParams as InvitationRevokeParams,
  };
}
