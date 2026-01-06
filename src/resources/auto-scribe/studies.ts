// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorStudies, type CursorStudiesParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Studies extends APIResource {
  create(body: StudyCreateParams, options?: RequestOptions): APIPromise<StudyCreateResponse> {
    return this._client.post('/v1/autoScribe/studies', { body, ...options });
  }

  retrieve(studyID: string, options?: RequestOptions): APIPromise<StudyRetrieveResponse> {
    return this._client.get(path`/v1/autoScribe/studies/${studyID}`, options);
  }

  update(
    studyID: string,
    body: StudyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StudyUpdateResponse> {
    return this._client.patch(path`/v1/autoScribe/studies/${studyID}`, { body, ...options });
  }

  list(
    query: StudyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<StudyListResponsesCursorStudies, StudyListResponse> {
    return this._client.getAPIList('/v1/autoScribe/studies', CursorStudies<StudyListResponse>, {
      query,
      ...options,
    });
  }

  cancel(
    body: StudyCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StudyCancelResponse> {
    return this._client.post('/v1/autoScribe/studies/cancel', { body, ...options });
  }

  rerouteURL(body: StudyRerouteURLParams, options?: RequestOptions): APIPromise<StudyRerouteURLResponse> {
    return this._client.post('/v1/autoScribe/studies/reroute-url', { body, ...options });
  }

  retrieveByUid(studyInstanceUid: string, options?: RequestOptions): APIPromise<StudyRetrieveByUidResponse> {
    return this._client.get(path`/v1/autoScribe/studies/by-uid/${studyInstanceUid}`, options);
  }

  uncancel(
    body: StudyUncancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StudyUncancelResponse> {
    return this._client.post('/v1/autoScribe/studies/uncancel', { body, ...options });
  }

  viewerOnlyRerouteURL(
    body: StudyViewerOnlyRerouteURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StudyViewerOnlyRerouteURLResponse> {
    return this._client.post('/v1/autoScribe/studies/viewer-only-reroute-url', { body, ...options });
  }
}

export type StudyListResponsesCursorStudies = CursorStudies<StudyListResponse>;

/**
 * A study entity in the AutoScribe system with report workflow status
 */
export interface StudyCreateResponse {
  cancelledAt: string | null;

  createdAt: string | null;

  isCancelled: boolean;

  /**
   * Metadata for a study report including patient demographics and scan information
   */
  reportMetadata: StudyCreateResponse.ReportMetadata;

  severity: 'normal' | 'high' | 'stat';

  studyDescription: string;

  studyId: string;

  studyInstanceUid: string;

  studyReportStatus: 'unassigned' | 'assigned' | 'in_progress' | 'completed' | 'addendum_active';

  updatedAt: string | null;

  /**
   * A reference to a user with basic identifying information
   */
  assignedTo?: StudyCreateResponse.AssignedTo | null;

  /**
   * A reference to an API key with basic identifying information
   */
  createdByApiKey?: StudyCreateResponse.CreatedByAPIKey | null;

  /**
   * A reference to a user with basic identifying information
   */
  createdByUser?: StudyCreateResponse.CreatedByUser | null;

  metadata?: { [key: string]: string };

  /**
   * A reference to an organization with basic identifying information
   */
  org?: StudyCreateResponse.Org | null;

  priorReportTexts?: Array<string>;

  priorStudyIds?: Array<string>;

  reportIds?: Array<StudyCreateResponse.ReportID>;
}

export namespace StudyCreateResponse {
  /**
   * Metadata for a study report including patient demographics and scan information
   */
  export interface ReportMetadata {
    age?: string;

    dateOfBirth?: string;

    facilityName?: string;

    height?: ReportMetadata.Height;

    mrn?: string;

    patientName?: string;

    referringPhysicianName?: string;

    scanDate?: string;

    scanTime?: string;

    scanType?: string;

    sex?: 'male' | 'female' | 'other';

    weight?: ReportMetadata.Weight;
  }

  export namespace ReportMetadata {
    export interface Height {
      unit: 'in' | 'cm';

      value: number;
    }

    export interface Weight {
      unit: 'lbs' | 'kg';

      value: number;
    }
  }

  /**
   * A reference to a user with basic identifying information
   */
  export interface AssignedTo {
    email: string;

    userId: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    suffix1?: string;

    suffix2?: string;
  }

  /**
   * A reference to an API key with basic identifying information
   */
  export interface CreatedByAPIKey {
    apiKeyId: string;

    description: string;

    isViewerEnabled?: boolean;
  }

  /**
   * A reference to a user with basic identifying information
   */
  export interface CreatedByUser {
    email: string;

    userId: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    suffix1?: string;

    suffix2?: string;
  }

  /**
   * A reference to an organization with basic identifying information
   */
  export interface Org {
    orgId: string;

    orgName: string;
  }

  /**
   * A report ID paired with its current status
   */
  export interface ReportID {
    reportId: string;

    status: 'in_progress' | 'completed';
  }
}

/**
 * A study entity in the AutoScribe system with report workflow status
 */
export interface StudyRetrieveResponse {
  cancelledAt: string | null;

  createdAt: string | null;

  isCancelled: boolean;

  /**
   * Metadata for a study report including patient demographics and scan information
   */
  reportMetadata: StudyRetrieveResponse.ReportMetadata;

  severity: 'normal' | 'high' | 'stat';

  studyDescription: string;

  studyId: string;

  studyInstanceUid: string;

  studyReportStatus: 'unassigned' | 'assigned' | 'in_progress' | 'completed' | 'addendum_active';

  updatedAt: string | null;

  /**
   * A reference to a user with basic identifying information
   */
  assignedTo?: StudyRetrieveResponse.AssignedTo | null;

  /**
   * A reference to an API key with basic identifying information
   */
  createdByApiKey?: StudyRetrieveResponse.CreatedByAPIKey | null;

  /**
   * A reference to a user with basic identifying information
   */
  createdByUser?: StudyRetrieveResponse.CreatedByUser | null;

  metadata?: { [key: string]: string };

  /**
   * A reference to an organization with basic identifying information
   */
  org?: StudyRetrieveResponse.Org | null;

  priorReportTexts?: Array<string>;

  priorStudyIds?: Array<string>;

  reportIds?: Array<StudyRetrieveResponse.ReportID>;
}

export namespace StudyRetrieveResponse {
  /**
   * Metadata for a study report including patient demographics and scan information
   */
  export interface ReportMetadata {
    age?: string;

    dateOfBirth?: string;

    facilityName?: string;

    height?: ReportMetadata.Height;

    mrn?: string;

    patientName?: string;

    referringPhysicianName?: string;

    scanDate?: string;

    scanTime?: string;

    scanType?: string;

    sex?: 'male' | 'female' | 'other';

    weight?: ReportMetadata.Weight;
  }

  export namespace ReportMetadata {
    export interface Height {
      unit: 'in' | 'cm';

      value: number;
    }

    export interface Weight {
      unit: 'lbs' | 'kg';

      value: number;
    }
  }

  /**
   * A reference to a user with basic identifying information
   */
  export interface AssignedTo {
    email: string;

    userId: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    suffix1?: string;

    suffix2?: string;
  }

  /**
   * A reference to an API key with basic identifying information
   */
  export interface CreatedByAPIKey {
    apiKeyId: string;

    description: string;

    isViewerEnabled?: boolean;
  }

  /**
   * A reference to a user with basic identifying information
   */
  export interface CreatedByUser {
    email: string;

    userId: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    suffix1?: string;

    suffix2?: string;
  }

  /**
   * A reference to an organization with basic identifying information
   */
  export interface Org {
    orgId: string;

    orgName: string;
  }

  /**
   * A report ID paired with its current status
   */
  export interface ReportID {
    reportId: string;

    status: 'in_progress' | 'completed';
  }
}

/**
 * A study entity in the AutoScribe system with report workflow status
 */
export interface StudyUpdateResponse {
  cancelledAt: string | null;

  createdAt: string | null;

  isCancelled: boolean;

  /**
   * Metadata for a study report including patient demographics and scan information
   */
  reportMetadata: StudyUpdateResponse.ReportMetadata;

  severity: 'normal' | 'high' | 'stat';

  studyDescription: string;

  studyId: string;

  studyInstanceUid: string;

  studyReportStatus: 'unassigned' | 'assigned' | 'in_progress' | 'completed' | 'addendum_active';

  updatedAt: string | null;

  /**
   * A reference to a user with basic identifying information
   */
  assignedTo?: StudyUpdateResponse.AssignedTo | null;

  /**
   * A reference to an API key with basic identifying information
   */
  createdByApiKey?: StudyUpdateResponse.CreatedByAPIKey | null;

  /**
   * A reference to a user with basic identifying information
   */
  createdByUser?: StudyUpdateResponse.CreatedByUser | null;

  metadata?: { [key: string]: string };

  /**
   * A reference to an organization with basic identifying information
   */
  org?: StudyUpdateResponse.Org | null;

  priorReportTexts?: Array<string>;

  priorStudyIds?: Array<string>;

  reportIds?: Array<StudyUpdateResponse.ReportID>;
}

export namespace StudyUpdateResponse {
  /**
   * Metadata for a study report including patient demographics and scan information
   */
  export interface ReportMetadata {
    age?: string;

    dateOfBirth?: string;

    facilityName?: string;

    height?: ReportMetadata.Height;

    mrn?: string;

    patientName?: string;

    referringPhysicianName?: string;

    scanDate?: string;

    scanTime?: string;

    scanType?: string;

    sex?: 'male' | 'female' | 'other';

    weight?: ReportMetadata.Weight;
  }

  export namespace ReportMetadata {
    export interface Height {
      unit: 'in' | 'cm';

      value: number;
    }

    export interface Weight {
      unit: 'lbs' | 'kg';

      value: number;
    }
  }

  /**
   * A reference to a user with basic identifying information
   */
  export interface AssignedTo {
    email: string;

    userId: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    suffix1?: string;

    suffix2?: string;
  }

  /**
   * A reference to an API key with basic identifying information
   */
  export interface CreatedByAPIKey {
    apiKeyId: string;

    description: string;

    isViewerEnabled?: boolean;
  }

  /**
   * A reference to a user with basic identifying information
   */
  export interface CreatedByUser {
    email: string;

    userId: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    suffix1?: string;

    suffix2?: string;
  }

  /**
   * A reference to an organization with basic identifying information
   */
  export interface Org {
    orgId: string;

    orgName: string;
  }

  /**
   * A report ID paired with its current status
   */
  export interface ReportID {
    reportId: string;

    status: 'in_progress' | 'completed';
  }
}

/**
 * A study entity in the AutoScribe system with report workflow status
 */
export interface StudyListResponse {
  cancelledAt: string | null;

  createdAt: string | null;

  isCancelled: boolean;

  /**
   * Metadata for a study report including patient demographics and scan information
   */
  reportMetadata: StudyListResponse.ReportMetadata;

  severity: 'normal' | 'high' | 'stat';

  studyDescription: string;

  studyId: string;

  studyInstanceUid: string;

  studyReportStatus: 'unassigned' | 'assigned' | 'in_progress' | 'completed' | 'addendum_active';

  updatedAt: string | null;

  /**
   * A reference to a user with basic identifying information
   */
  assignedTo?: StudyListResponse.AssignedTo | null;

  /**
   * A reference to an API key with basic identifying information
   */
  createdByApiKey?: StudyListResponse.CreatedByAPIKey | null;

  /**
   * A reference to a user with basic identifying information
   */
  createdByUser?: StudyListResponse.CreatedByUser | null;

  metadata?: { [key: string]: string };

  /**
   * A reference to an organization with basic identifying information
   */
  org?: StudyListResponse.Org | null;

  priorReportTexts?: Array<string>;

  priorStudyIds?: Array<string>;

  reportIds?: Array<StudyListResponse.ReportID>;
}

export namespace StudyListResponse {
  /**
   * Metadata for a study report including patient demographics and scan information
   */
  export interface ReportMetadata {
    age?: string;

    dateOfBirth?: string;

    facilityName?: string;

    height?: ReportMetadata.Height;

    mrn?: string;

    patientName?: string;

    referringPhysicianName?: string;

    scanDate?: string;

    scanTime?: string;

    scanType?: string;

    sex?: 'male' | 'female' | 'other';

    weight?: ReportMetadata.Weight;
  }

  export namespace ReportMetadata {
    export interface Height {
      unit: 'in' | 'cm';

      value: number;
    }

    export interface Weight {
      unit: 'lbs' | 'kg';

      value: number;
    }
  }

  /**
   * A reference to a user with basic identifying information
   */
  export interface AssignedTo {
    email: string;

    userId: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    suffix1?: string;

    suffix2?: string;
  }

  /**
   * A reference to an API key with basic identifying information
   */
  export interface CreatedByAPIKey {
    apiKeyId: string;

    description: string;

    isViewerEnabled?: boolean;
  }

  /**
   * A reference to a user with basic identifying information
   */
  export interface CreatedByUser {
    email: string;

    userId: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    suffix1?: string;

    suffix2?: string;
  }

  /**
   * A reference to an organization with basic identifying information
   */
  export interface Org {
    orgId: string;

    orgName: string;
  }

  /**
   * A report ID paired with its current status
   */
  export interface ReportID {
    reportId: string;

    status: 'in_progress' | 'completed';
  }
}

/**
 * Response for cancelling a study in AutoScribe
 */
export interface StudyCancelResponse {
  success: boolean;

  message?: string;
}

/**
 * Response containing the generated reroute URL for a study in AutoScribe
 */
export interface StudyRerouteURLResponse {
  url: string;
}

/**
 * A study entity in the AutoScribe system with report workflow status
 */
export interface StudyRetrieveByUidResponse {
  cancelledAt: string | null;

  createdAt: string | null;

  isCancelled: boolean;

  /**
   * Metadata for a study report including patient demographics and scan information
   */
  reportMetadata: StudyRetrieveByUidResponse.ReportMetadata;

  severity: 'normal' | 'high' | 'stat';

  studyDescription: string;

  studyId: string;

  studyInstanceUid: string;

  studyReportStatus: 'unassigned' | 'assigned' | 'in_progress' | 'completed' | 'addendum_active';

  updatedAt: string | null;

  /**
   * A reference to a user with basic identifying information
   */
  assignedTo?: StudyRetrieveByUidResponse.AssignedTo | null;

  /**
   * A reference to an API key with basic identifying information
   */
  createdByApiKey?: StudyRetrieveByUidResponse.CreatedByAPIKey | null;

  /**
   * A reference to a user with basic identifying information
   */
  createdByUser?: StudyRetrieveByUidResponse.CreatedByUser | null;

  metadata?: { [key: string]: string };

  /**
   * A reference to an organization with basic identifying information
   */
  org?: StudyRetrieveByUidResponse.Org | null;

  priorReportTexts?: Array<string>;

  priorStudyIds?: Array<string>;

  reportIds?: Array<StudyRetrieveByUidResponse.ReportID>;
}

export namespace StudyRetrieveByUidResponse {
  /**
   * Metadata for a study report including patient demographics and scan information
   */
  export interface ReportMetadata {
    age?: string;

    dateOfBirth?: string;

    facilityName?: string;

    height?: ReportMetadata.Height;

    mrn?: string;

    patientName?: string;

    referringPhysicianName?: string;

    scanDate?: string;

    scanTime?: string;

    scanType?: string;

    sex?: 'male' | 'female' | 'other';

    weight?: ReportMetadata.Weight;
  }

  export namespace ReportMetadata {
    export interface Height {
      unit: 'in' | 'cm';

      value: number;
    }

    export interface Weight {
      unit: 'lbs' | 'kg';

      value: number;
    }
  }

  /**
   * A reference to a user with basic identifying information
   */
  export interface AssignedTo {
    email: string;

    userId: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    suffix1?: string;

    suffix2?: string;
  }

  /**
   * A reference to an API key with basic identifying information
   */
  export interface CreatedByAPIKey {
    apiKeyId: string;

    description: string;

    isViewerEnabled?: boolean;
  }

  /**
   * A reference to a user with basic identifying information
   */
  export interface CreatedByUser {
    email: string;

    userId: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    suffix1?: string;

    suffix2?: string;
  }

  /**
   * A reference to an organization with basic identifying information
   */
  export interface Org {
    orgId: string;

    orgName: string;
  }

  /**
   * A report ID paired with its current status
   */
  export interface ReportID {
    reportId: string;

    status: 'in_progress' | 'completed';
  }
}

/**
 * Response for uncancelling a study in AutoScribe
 */
export interface StudyUncancelResponse {
  success: boolean;

  message?: string;
}

/**
 * Response containing the generated viewer-only reroute URL for a study in
 * AutoScribe
 */
export interface StudyViewerOnlyRerouteURLResponse {
  url: string;
}

export interface StudyCreateParams {
  /**
   * Metadata for a study report including patient demographics and scan information
   */
  reportMetadata: StudyCreateParams.ReportMetadata;

  severity: 'normal' | 'high' | 'stat';

  studyDescription: string;

  studyInstanceUid: string;

  assignedTo?: string;

  metadata?: { [key: string]: string };

  orgId?: string;

  priorReportTexts?: Array<string>;

  priorStudyIds?: Array<string>;
}

export namespace StudyCreateParams {
  /**
   * Metadata for a study report including patient demographics and scan information
   */
  export interface ReportMetadata {
    age?: string;

    dateOfBirth?: string;

    facilityName?: string;

    height?: ReportMetadata.Height;

    mrn?: string;

    patientName?: string;

    referringPhysicianName?: string;

    scanDate?: string;

    scanTime?: string;

    scanType?: string;

    sex?: 'male' | 'female' | 'other';

    weight?: ReportMetadata.Weight;
  }

  export namespace ReportMetadata {
    export interface Height {
      unit: 'in' | 'cm';

      value: number;
    }

    export interface Weight {
      unit: 'lbs' | 'kg';

      value: number;
    }
  }
}

export interface StudyUpdateParams {
  assignedTo?: string | null;

  metadata?: { [key: string]: string } | null;

  orgId?: string | null;

  priorReportTexts?: Array<string> | null;

  priorStudyIds?: Array<string> | null;

  reportMetadata?: StudyUpdateParams.ReportMetadata;

  severity?: 'normal' | 'high' | 'stat';

  studyDescription?: string;
}

export namespace StudyUpdateParams {
  export interface ReportMetadata {
    age?: string | null;

    dateOfBirth?: string | null;

    facilityName?: string | null;

    height?: ReportMetadata.Height | null;

    mrn?: string | null;

    patientName?: string | null;

    referringPhysicianName?: string | null;

    scanDate?: string | null;

    scanTime?: string | null;

    scanType?: string | null;

    sex?: 'male' | 'female' | 'other' | null;

    weight?: ReportMetadata.Weight | null;
  }

  export namespace ReportMetadata {
    export interface Height {
      unit: 'in' | 'cm';

      value: number;
    }

    export interface Weight {
      unit: 'lbs' | 'kg';

      value: number;
    }
  }
}

export interface StudyListParams extends CursorStudiesParams {
  /**
   * Filter by assigned user ID (null = explicitly unassigned). Format:
   * usr\_<32-hex-chars>
   */
  assignedTo?: string | null;

  /**
   * Filter by cancellation status
   */
  isCancelled?: boolean | null;

  /**
   * Filter by study severity
   */
  severity?: 'normal' | 'high' | 'stat';

  /**
   * Filter by study description (contains match)
   */
  studyDescription?: string;

  /**
   * Filter by report status(es)
   */
  studyReportStatus?: Array<'unassigned' | 'assigned' | 'in_progress' | 'completed' | 'addendum_active'>;
}

export interface StudyCancelParams {
  studyId?: string;

  studyInstanceUid?: string;
}

export interface StudyRerouteURLParams {
  assignedToUserId: string;

  studyId?: string;

  studyInstanceUid?: string;
}

export interface StudyUncancelParams {
  studyId?: string;

  studyInstanceUid?: string;
}

export interface StudyViewerOnlyRerouteURLParams {
  studyId?: string;

  studyInstanceUid?: string;

  userId?: string;
}

export declare namespace Studies {
  export {
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
}
