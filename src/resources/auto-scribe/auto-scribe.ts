// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AutoScribeAPI from './auto-scribe';
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
  PriorReport,
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
 * Unit of measure for a height value. 'in' = inches, 'cm' = centimeters.
 */
export type HeightUnit = 'in' | 'cm';

/**
 * Status of an individual report. 'in_progress' = actively being dictated,
 * 'completed' = signed.
 */
export type ReportStatus = 'in_progress' | 'completed';

/**
 * Patient's biological sex. Options: 'male', 'female', 'other'
 */
export type Sex = 'male' | 'female' | 'other';

/**
 * Patient demographics and scan information for report generation
 */
export interface StudyReportMetadata {
  /**
   * Patient's age at study date (e.g., '34.5 years', '2 months')
   */
  age?: string;

  /**
   * Patient's date of birth. Format: YYYY-MM-DD (e.g., '1990-05-20')
   */
  dateOfBirth?: string;

  /**
   * Name of the medical facility where the scan was performed
   */
  facilityName?: string;

  /**
   * Patient's height with unit (e.g., {value: 70, unit: 'inches'} or {value: 178,
   * unit: 'cm'})
   */
  height?: StudyReportMetadata.Height;

  /**
   * Medical Record Number - unique patient identifier
   */
  mrn?: string;

  /**
   * Full name of the patient
   */
  patientName?: string;

  /**
   * Procedure or study type (e.g., 'MRI Brain with Contrast'). Maps to database
   * scan_type and dictation report_header.scan_type.
   */
  procedure?: string;

  /**
   * Name of the physician who referred the patient for this scan
   */
  referringPhysicianName?: string;

  /**
   * Patient's biological sex. Options: 'male', 'female', 'other'
   */
  sex?: Sex;

  /**
   * Study date (YYYY-MM-DD). Maps to database scan_date and dictation
   * report_header.scan_date.
   */
  studyDate?: string;

  /**
   * Study time (HH:MM). Maps to database scan_time and dictation
   * report_header.scan_time.
   */
  studyTime?: string;

  /**
   * Patient's weight with unit (e.g., {value: 150, unit: 'lbs'} or {value: 68, unit:
   * 'kg'})
   */
  weight?: StudyReportMetadata.Weight;
}

export namespace StudyReportMetadata {
  /**
   * Patient's height with unit (e.g., {value: 70, unit: 'inches'} or {value: 178,
   * unit: 'cm'})
   */
  export interface Height {
    /**
     * Unit of measure for a height value. 'in' = inches, 'cm' = centimeters.
     */
    unit: AutoScribeAPI.HeightUnit;

    value: number;
  }

  /**
   * Patient's weight with unit (e.g., {value: 150, unit: 'lbs'} or {value: 68, unit:
   * 'kg'})
   */
  export interface Weight {
    /**
     * Unit of measure for a weight value. 'lbs' = pounds, 'kg' = kilograms.
     */
    unit: AutoScribeAPI.WeightUnit;

    value: number;
  }
}

/**
 * AutoScribe report workflow status for a study. 'unassigned' = no radiologist
 * assigned, 'assigned' = assigned but not started, 'in_progress' = actively being
 * dictated, 'completed' = report signed, 'addendum_active' = addendum in progress.
 */
export type StudyReportStatus = 'unassigned' | 'assigned' | 'in_progress' | 'completed' | 'addendum_active';

/**
 * Unit of measure for a weight value. 'lbs' = pounds, 'kg' = kilograms.
 */
export type WeightUnit = 'lbs' | 'kg';

AutoScribe.Studies = Studies;
AutoScribe.Users = Users;
AutoScribe.Reports = Reports;

export declare namespace AutoScribe {
  export {
    type HeightUnit as HeightUnit,
    type ReportStatus as ReportStatus,
    type Sex as Sex,
    type StudyReportMetadata as StudyReportMetadata,
    type StudyReportStatus as StudyReportStatus,
    type WeightUnit as WeightUnit,
  };

  export {
    Studies as Studies,
    type PriorReport as PriorReport,
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
