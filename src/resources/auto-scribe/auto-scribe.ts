// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ReportsAPI from './reports';
import {
  ReportAddendumResponse,
  ReportCancelAddendumResponse,
  ReportListParams,
  ReportListResponse,
  ReportPdfParams,
  ReportPdfResponse,
  ReportTextParams,
  ReportTextResponse,
  Reports,
} from './reports';
import * as StudiesAPI from './studies';
import {
  ReportIDWithStatus,
  Studies,
  StudyCancelParams,
  StudyCancelResponse,
  StudyCreateParams,
  StudyCreateResponse,
  StudyListParams,
  StudyListResponse,
  StudyListResponsesCursorStudies,
  StudyRerouteURLParams,
  StudyRerouteURLResponse,
  StudyRetrieveByUidResponse,
  StudyRetrieveResponse,
  StudyUncancelParams,
  StudyUncancelResponse,
  StudyUpdateParams,
  StudyUpdateResponse,
  StudyViewerOnlyRerouteURLParams,
  StudyViewerOnlyRerouteURLResponse,
} from './studies';
import * as UsersAPI from './users/users';
import {
  UserInviteParams,
  UserInviteResponse,
  UserListParams,
  UserListResponse,
  UserListResponsesCursorUsers,
  UserReactivateParams,
  UserReactivateResponse,
  UserRetrieveResponse,
  UserRevokeAccessParams,
  UserRevokeAccessResponse,
  UserUpdateParams,
  UserUpdateResponse,
  Users,
} from './users/users';

export class AutoScribe extends APIResource {
  studies: StudiesAPI.Studies = new StudiesAPI.Studies(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  reports: ReportsAPI.Reports = new ReportsAPI.Reports(this._client);
}

/**
 * Metadata for a study report including patient demographics and scan information
 */
export interface StudyReportMetadata {
  age?: string;

  dateOfBirth?: string;

  facilityName?: string;

  height?: StudyReportMetadata.Height;

  mrn?: string;

  patientName?: string;

  referringPhysicianName?: string;

  scanDate?: string;

  scanTime?: string;

  scanType?: string;

  sex?: 'male' | 'female' | 'other';

  weight?: StudyReportMetadata.Weight;
}

export namespace StudyReportMetadata {
  export interface Height {
    unit: 'in' | 'cm';

    value: number;
  }

  export interface Weight {
    unit: 'lbs' | 'kg';

    value: number;
  }
}

AutoScribe.Studies = Studies;
AutoScribe.Users = Users;
AutoScribe.Reports = Reports;

export declare namespace AutoScribe {
  export { type StudyReportMetadata as StudyReportMetadata };

  export {
    Studies as Studies,
    type ReportIDWithStatus as ReportIDWithStatus,
    type StudyCreateResponse as StudyCreateResponse,
    type StudyRetrieveResponse as StudyRetrieveResponse,
    type StudyUpdateResponse as StudyUpdateResponse,
    type StudyListResponse as StudyListResponse,
    type StudyCancelResponse as StudyCancelResponse,
    type StudyRerouteURLResponse as StudyRerouteURLResponse,
    type StudyRetrieveByUidResponse as StudyRetrieveByUidResponse,
    type StudyUncancelResponse as StudyUncancelResponse,
    type StudyViewerOnlyRerouteURLResponse as StudyViewerOnlyRerouteURLResponse,
    type StudyListResponsesCursorStudies as StudyListResponsesCursorStudies,
    type StudyCreateParams as StudyCreateParams,
    type StudyUpdateParams as StudyUpdateParams,
    type StudyListParams as StudyListParams,
    type StudyCancelParams as StudyCancelParams,
    type StudyRerouteURLParams as StudyRerouteURLParams,
    type StudyUncancelParams as StudyUncancelParams,
    type StudyViewerOnlyRerouteURLParams as StudyViewerOnlyRerouteURLParams,
  };

  export {
    Users as Users,
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
    Reports as Reports,
    type ReportListResponse as ReportListResponse,
    type ReportAddendumResponse as ReportAddendumResponse,
    type ReportCancelAddendumResponse as ReportCancelAddendumResponse,
    type ReportPdfResponse as ReportPdfResponse,
    type ReportTextResponse as ReportTextResponse,
    type ReportListParams as ReportListParams,
    type ReportPdfParams as ReportPdfParams,
    type ReportTextParams as ReportTextParams,
  };
}
